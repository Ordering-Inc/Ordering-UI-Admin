import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AdvancedReports as AdvancedReportsController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../Modal'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { Alert } from '../Confirm'
import Chart from 'react-apexcharts'
import {
  DriverScheduleContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  DistancePerBrandWrapper,
  DistanceTitleBlock,
  DistanceTable,
  Thead,
  Tbody,
  Tfoot,
  TableWrapper,
  EmptyContent
} from './styles'
import dumyData from './dumy.json'
import { forEach } from 'lodash'

const ReportsDriverScheduleUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [series, setSeries] = useState([])

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
    console.log(dumyData, 'this is dumy data')
  }, [dumyData])

  const options = {
    chart: {
      height: 450,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%'
      }
    },
    xaxis: {
      type: 'datetime'
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
      horizontalAlign: 'left'
    }
  }

  // const series = [
  //   {
  //     name: 'Available',
  //     data: [
  //       {
  //         x: 'Design',
  //         y: [
  //           new Date('2019-03-05').getTime(),
  //           new Date('2019-03-08').getTime()
  //         ]
  //       },
  //       {
  //         x: 'Design',
  //         y: [
  //           new Date('2019-03-01').getTime(),
  //           new Date('2019-03-03').getTime()
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Busy',
  //     data: [
  //       {
  //         x: 'Design',
  //         y: [
  //           new Date('2019-03-02').getTime(),
  //           new Date('2019-03-05').getTime()
  //         ]
  //       },
  //       {
  //         x: 'Design',
  //         y: [
  //           new Date('2019-03-10').getTime(),
  //           new Date('2019-03-16').getTime()
  //         ]
  //       }
  //     ]
  //   }
  // ]

  useEffect(() => {
    if (dumyData) {
      const _series = []
      dumyData.result.data[0].lines.forEach((line) => {
        const data = []
        line.ranges.forEach(time => {
          if (time.value) {
            const _time = {
              x: 'data',
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
  }, [dumyData])

  return (
    <>
      <DriverScheduleContainer>
        <Title>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</Title>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsBrandFilter(true)}
            >
              {t('BRAND', 'Brand')} ({filterList?.franchises_id ? filterList?.franchises_id?.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsBusinessFilter(true)}
            >
              {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
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
              {[...Array(20).keys()].map(i => (
                <div className='col-md-3 col-sm-3 col-3' key={i}><Skeleton /></div>
              ))}
            </div>
          ) : (
            <TableWrapper>
              <Chart
                options={options}
                series={series}
                type='rangeBar'
              />
            </TableWrapper>
          )}
        </DistancePerBrandWrapper>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('BUSINESSES', 'Businesses')}
          open={isBusinessFilter}
          onClose={() => setIsBusinessFilter(false)}
        >
          <AnalyticsBusinessFilter
            {...props} onClose={() => setIsBusinessFilter(false)}
          />
        </Modal>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('BRAND', 'Brand')}
          open={isBrandFilter}
          onClose={() => setIsBrandFilter(false)}
        >
          <ReportsBrandFilter
            {...props} onClose={() => setIsBrandFilter(false)}
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
