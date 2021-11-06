import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Chart from 'react-apexcharts'
import moment from 'moment'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'
import { useLanguage, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import {
  DriverScheduleContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  DistancePerBrandWrapper,
  DistanceTitleBlock,
  TableWrapper,
  EmptyContent
} from './styles'

const ReportsDriverScheduleUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [series, setSeries] = useState([])
  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)

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

  const options = {
    chart: {
      height: '100%',
      type: 'rangeBar',
      redrawOnParentResize: true
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%'
      }
    },
    xaxis: {
      min: new Date(reportData.content?.from ?? '2019-03-05 00:00:00').getTime(),
      type: 'datetime',
      labels: {
        formatter: function (value, timestamp, opts) {
          return moment(value).format('MM-DD HH:mm')
        }
      }
    },
    stroke: {
      width: 1
    },
    fill: {
      type: 'solid',
      opacity: 0.6
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    tooltip: {
      custom: function (opts) {
        const from = moment(opts.y1).format('MM-DD HH:mm')
        const to = moment(opts.y2).format('MM-DD HH:mm')
        const values = opts.ctx.rangeBar.getTooltipValues(opts)

        return (
          '<div class="apexcharts-tooltip-rangebar">' +
          '<div> <span class="series-name" style="color: ' +
          values.color +
          '">' +
          (values.seriesName ? values.seriesName : '') +
          '</span></div>' +
          '<div> <span class="category">' +
          values.ylabel +
          ' </span> <span class="value start-value">' +
          from +
          '</span> <span class="separator">-</span> <span class="value end-value">' +
          to +
          '</span></div>' +
          '</div>'
        )
      }
    }
  }

  useEffect(() => {
    if (reportData?.content?.data?.length > 0) {
      const _series = []
      reportData.content.data[0].lines.forEach((line) => {
        const data = []
        line.ranges.forEach(time => {
          if (time.value) {
            const _time = {
              x: line.name,
              y: [
                new Date(time.from).getTime(), new Date(time.to).getTime()
              ]
            }
            data.push(_time)
          }
        })
        const _line = { name: line.name, data: data }
        _series.push(_line)
      })
      setSeries(_series)
    }
  }, [reportData?.content])

  return (
    <>
      <DriverScheduleContainer>
        <Title>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</Title>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsDriverFilter(true)}
            >
              {t('DRIVER', 'Driver')} ({filterList?.drivers_ids ? filterList?.drivers_ids.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverGroupFilter(true)}
            >
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
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
          <DistanceTitleBlock active={reportData?.content?.body?.rows?.length > 0}>
            <h2>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</h2>
          </DistanceTitleBlock>
          {reportData?.loading ? (
            <div className='row'>
              {[...Array(5).keys()].map(i => (
                <div className='col-md-12' key={i}><Skeleton height={100} /></div>
              ))}
            </div>
          ) : (
            <TableWrapper>
              {reportData?.content?.data?.length > 0 ? (
                <Chart
                  options={options}
                  series={series}
                  type='rangeBar'
                  height='450'
                />
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )}

            </TableWrapper>
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
            {...props} onClose={() => setIsDriverFilter(false)}
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
