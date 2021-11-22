import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'
import { useLanguage, useUtils, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
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
  DistanceTitleBlock,
  TableWrapper,
  EmptyContent
} from './styles'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.compact.css'
import {
  Chart,
  CommonSeriesSettings,
  Legend, SeriesTemplate,
  Animation,
  ArgumentAxis,
  Tick,
  Export,
  Tooltip
} from 'devextreme-react/chart'

const ReportsDriverScheduleUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
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

  const customizeTooltip = (arg) => {
    return {
      text: getText(arg, arg.valueText)
    }
  }

  const getText = (item, text) => {
    return `${parseDate(item.rangeValue1)} ~ ${parseDate(item.rangeValue2)}`
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
      const _series = []
      reportData.content.data.forEach(data => {
        data.lines.forEach(line => {
          line.ranges.forEach(range => {
            if (range.value) {
              const _range = {
                monarch: data.metadata.name,
                start: new Date(range.from),
                house: line.name,
                end: new Date(range.to)
              }
              _series.push(_range)
            }
          })
        })
      })
      setSeries(_series)
    }
  }, [reportData?.content])

  return (
    <>
      <DriverScheduleContainer>
        <ScheduleTitle>{t('DRIVER_SCHEDULE', 'DRIVER SCHEDULE')}</ScheduleTitle>
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
                <Chart id='chart' dataSource={series} barGroupPadding={0.2} rotated>
                  <ArgumentAxis>
                    <Tick visible />
                  </ArgumentAxis>
                  <CommonSeriesSettings
                    type='rangeBar'
                    argumentField='monarch'
                    rangeValue1Field='start'
                    rangeValue2Field='end'
                  />
                  <Tooltip enabled customizeTooltip={customizeTooltip} />
                  <Legend verticalAlignment='top' horizontalAlignment='center' />
                  <Export enabled />
                  <SeriesTemplate nameField='house' />
                  <Animation enabled={false} />
                </Chart>
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
