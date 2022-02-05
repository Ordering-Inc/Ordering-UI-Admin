import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, useUtils, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Alert, Modal } from '../../Shared'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import {
  DriverDistanceContainer,
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

const ReportsDriverDistanceUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [availableDriverIds, setAvailableDriverIds] = useState(null)
  const [{ parseNumber }] = useUtils()

  const tableRef = useRef(null)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const downloadCSV = () => {
    if (reportData?.content?.body?.rows?.length === 0) return
    let csv = ''
    reportData.content.header.rows.forEach((tr) => {
      tr.forEach((th) => {
        csv += `${th.value},`
        for (let i = 1; i < th.colspan; i++) {
          csv += ' ,'
        }
      })
      csv += '\n'
    })
    csv += '\n'
    reportData.content.body.rows.forEach((tr) => {
      tr.forEach((th) => {
        csv += `${th.value},`
        for (let i = 1; i < th.colspan; i++) {
          csv += ' ,'
        }
      })
      csv += '\n'
    })
    csv += '\n'
    reportData.content.footer.rows.forEach((tr) => {
      tr.forEach((th) => {
        csv += `${th.value},`
        for (let i = 1; i < th.colspan; i++) {
          csv += ' ,'
        }
      })
      csv += '\n'
    })
    csv += '\n'
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `driver_distance_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  useEffect(() => {
    if (reportData?.error) {
      setAlertState({
        open: true,
        content: reportData?.error
      })
    }
  }, [reportData?.error])

  return (
    <>
      <DriverDistanceContainer>
        <Title>{t('DRIVER_DISTANCE', 'Driver distance')}</Title>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsBusinessFilter(true)}
            >
              {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverGroupFilter(true)}
            >
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverFilter(true)}
            >
              {t('DRIVER', 'DRIVER')} ({filterList?.drivers_ids ? filterList?.drivers_ids.length : t('ALL', 'All')})
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
            <h2>{t('DRIVER_DISTANCE', 'Driver distance')}</h2>
            <Download onClick={() => downloadCSV()} />
          </DistanceTitleBlock>
          {reportData?.loading ? (
            <div className='row'>
              {[...Array(20).keys()].map(i => (
                <div className='col-md-3 col-sm-3 col-3' key={i}><Skeleton /></div>
              ))}
            </div>
          ) : (
            <TableWrapper>
              {reportData?.content?.body?.rows?.length > 0 ? (
                <DistanceTable ref={tableRef}>
                  {reportData?.content?.header?.rows.length > 0 && (
                    <Thead>
                      {
                        reportData?.content?.header?.rows.map((tr, i) => (
                          <tr key={i}>
                            {tr?.map((th, j) => (
                              <th key={j} colSpan={th.colspan}>{th.value}</th>
                            ))}
                          </tr>
                        ))
                      }
                    </Thead>
                  )}
                  {reportData?.content?.body?.rows.map((tbody, i) => (
                    <Tbody key={i}>
                      <tr>
                        {tbody.map((td, j) => (
                          <td key={j} colSpan={td.colspan}>
                            {td.value_refers === 'distance'
                              ? (td.value_unit === 'meter' ? parseNumber(td.value / 1000, { decimal: 2 }) : parseNumber(td.value, { decimal: 2 }))
                              : td.value}
                          </td>
                        ))}
                      </tr>
                    </Tbody>
                  ))}
                  {reportData?.content?.footer?.rows.length > 0 && (
                    <Tfoot>
                      {
                        reportData?.content?.footer?.rows.map((tr, i) => (
                          <tr key={i}>
                            {tr?.map((td, j) => (
                              <td key={j} colSpan={td.colspan}>{td.value}</td>
                            ))}
                          </tr>
                        ))
                      }
                    </Tfoot>
                  )}
                </DistanceTable>
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
          title={t('DRIVER', 'Driver')}
          open={isDriverFilter}
          onClose={() => setIsDriverFilter(false)}
        >
          <ReportsDriverFilter
            {...props}
            onClose={() => setIsDriverFilter(false)}
            availableDriverIds={availableDriverIds}
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
            {...props}
            onClose={() => setIsDriverGroupFilter(false)}
            setAvailableDriverIds={setAvailableDriverIds}
          />
        </Modal>
      </DriverDistanceContainer>
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

export const ReportsDriverDistance = (props) => {
  const reportsDriverDistanceProps = {
    ...props,
    UIComponent: ReportsDriverDistanceUI,
    endpoint: 'driver_distances'
  }
  return <AdvancedReportsController {...reportsDriverDistanceProps} />
}
