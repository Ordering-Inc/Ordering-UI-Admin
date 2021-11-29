import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { useLanguage, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import {
  DriverScheduleContainer,
  ScheduleTitle,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  DistancePerBrandWrapper,
  ChartWrapper,
  EmptyContent,
  ScheduleTitleBlock
} from './styles'
import 'chartjs-adapter-moment'
import moment from 'moment'
import { Bar } from 'react-chartjs-2'

const ReportsDriverScheduleUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)
  const [chartData, setChartData] = useState(null)

  const barChartRef = useRef(null)

  const generateAvailable = (status) => {
    const _available = []
    const _notAvailable = []
    reportData.content.data.forEach(data => {
      data.lines.forEach(line => {
        if (line.name.toLowerCase().search('available') > -1) {
          line.ranges.forEach(range => {
            if (range.value) {
              const from = getDiff(reportData.content.from, range.from)
              const to = getDiff(reportData.content.from, range.to)
              _available.push({
                y: data.metadata.name,
                x: [from, to]
              })
            } else {
              const from = getDiff(reportData.content.from, range.from)
              const to = getDiff(reportData.content.from, range.to)
              _notAvailable.push({
                y: data.metadata.name,
                x: [from, to]
              })
            }
          })
        }
      })
    })
    return status ? _available : _notAvailable
  }

  const generateBusy = (status) => {
    const _busy = []
    const _notBusy = []
    reportData.content.data.forEach(data => {
      data.lines.forEach(line => {
        if (line.name.toLowerCase().search('busy') > -1) {
          line.ranges.forEach(range => {
            if (range.value) {
              const from = getDiff(reportData.content.from, range.from)
              const to = getDiff(reportData.content.from, range.to)
              _busy.push({
                y: data.metadata.name,
                x: [from, to]
              })
            } else {
              const from = getDiff(reportData.content.from, range.from)
              const to = getDiff(reportData.content.from, range.to)
              _notBusy.push({
                y: data.metadata.name,
                x: [from, to]
              })
            }
          })
        }
      })
    })
    return status ? _busy : _notBusy
  }

  const getDiff = (start, end) => {
    const from = moment(start)
    const to = moment(end)
    const duration = moment.duration(from.diff(to))
    return Math.abs(duration.asSeconds())
  }

  const getDateFromDuration = (start, duration) => {
    return moment(start).add(duration, 's').format('MM-DD HH:mm')
  }

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (reportData?.error) {
      setAlertState({
        open: true,
        content: reportData?.error
      })
    }
  }, [reportData?.error])

  useEffect(() => {
    if (reportData?.content?.data?.length > 0) {
      const _data = {
        datasets: [
          {
            label: 'Available',
            data: generateAvailable(true),
            backgroundColor: '#2C7BE5',
            stack: 'Stack 0'
          },
          {
            label: 'Not available',
            data: generateAvailable(),
            backgroundColor: '#F0879A',
            stack: 'Stack 0'
          },
          {
            label: 'Busy',
            data: generateBusy(true),
            backgroundColor: '#52C9FD',
            stack: 'Stack 1'
          },
          {
            label: 'Not busy',
            data: generateBusy(),
            backgroundColor: '#FFC700',
            stack: 'Stack 1'
          }
        ]
      }
      setChartData(_data)
    }
  }, [reportData?.content])

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: function (item) {
            return `${item[0].label} - ${item[0].dataset.label}`
          },
          label: function (item) {
            return `${getDateFromDuration(reportData?.content.from, item.raw.x[0])} ~ ${getDateFromDuration(reportData?.content.from, item.raw.x[1])}`
          }
        }
      }
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return getDateFromDuration(reportData?.content.from, value)
          }
        }
      },
      y: {
        stacked: false
      }
    }
  }

  const downloadChart = () => {
    if (!barChartRef?.current) return
    const a = document.createElement('a')
    a.href = barChartRef?.current?.toBase64Image()
    a.download = 'driver_schedule.png'
    // Trigger the download
    a.click()
  }

  return (
    <>
      <DriverScheduleContainer>
        <ScheduleTitle>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</ScheduleTitle>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsDriverGroupFilter(true)}
            >
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverFilter(true)}
            >
              {t('DRIVER', 'Driver')} ({filterList?.drivers_ids ? filterList?.drivers_ids.length : t('ALL', 'All')})
            </Button>
          </BrandBusinessWrapper>
          <CalendarWrapper>
            <AnalyticsCalendar
              handleChangeDate={handleChangeDate}
              defaultValue={filterList}
            />
          </CalendarWrapper>
        </ButtonActionList>
        <DistancePerBrandWrapper>
          <ScheduleTitleBlock active={reportData?.content?.data?.length > 0}>
            <h2>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</h2>
            <Download onClick={() => downloadChart()} />
          </ScheduleTitleBlock>
          {reportData?.loading ? (
            <div className='row'>
              {[...Array(5).keys()].map(i => (
                <div className='col-md-12' key={i}><Skeleton height={100} /></div>
              ))}
            </div>
          ) : (
            <ChartWrapper>
              {(reportData?.content?.data?.length > 0 && chartData) ? (
                <div>
                  <Bar data={chartData} options={options} ref={barChartRef} />
                </div>
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )}
            </ChartWrapper>
          )}
        </DistancePerBrandWrapper>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('DRIVER', 'Driver')}
          open={isDriverFilter}
          onClose={() => setIsDriverFilter(false)}
        >
          <ReportsDriverFilter
            {...props}
            onClose={() => setIsDriverFilter(false)}
            isDriverGroup
          />
        </Modal>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('DRIVER_GROUP', 'Driver group')}
          open={isDriverGroupFilter}
          onClose={() => setIsDriverGroupFilter(false)}
        >
          <ReportsDriverGroupFilter
            {...props} onClose={() => setIsDriverGroupFilter(false)}
          />
        </Modal>
      </DriverScheduleContainer>
      <Alert
        title={t('DRIVER_SCHEDULE', 'Driver schedule')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ReportsDriverSchedule = (props) => {
  const reportsDriverScheduleProps = {
    ...props,
    UIComponent: ReportsDriverScheduleUI,
    endpoint: 'drivers_operation_events'
  }
  return <AdvancedReportsController {...reportsDriverScheduleProps} />
}
