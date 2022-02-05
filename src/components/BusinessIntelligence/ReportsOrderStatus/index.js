import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, useUtils, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Alert, Modal } from '../../Shared'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsOrderTypeFilter } from '../ReportsOrderTypeFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import {
  OrderStatusContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  OrderStatusTableWrapper,
  DistanceTitleBlock,
  DistanceTable,
  Thead,
  Tbody,
  Tfoot,
  TableWrapper,
  EmptyContent
} from './styles'

const ReportsOrderStatusUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData,
    reportData1
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [isOrderTypeFilter, setIsOrderTypeFilter] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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

  const downloadCSV = (name) => {
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
        if (th.value_unit === 'currency') csv += `${th.value}$,`
        else csv += `${th.value},`
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
    downloadLink.download = `${name}_${fileSuffix}.csv`
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
      <OrderStatusContainer>
        <Title>{t('ORDER_STATUS_TEXT', 'Order status')}</Title>
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
            <Button
              onClick={() => setIsOrderTypeFilter(true)}
            >
              {t('ORDER_TYPE', 'Order type')} ({filterList?.delivery_types_ids ? filterList?.delivery_types_ids.length : t('ALL', 'All')})
            </Button>
          </BrandBusinessWrapper>
          <CalendarWrapper>
            <AnalyticsCalendar
              handleChangeDate={handleChangeDate}
              defaultValue={filterList}
            />
          </CalendarWrapper>
        </ButtonActionList>
        <OrderStatusTableWrapper>
          <DistanceTitleBlock active={reportData?.content?.body?.rows?.length > 0}>
            <h2>{t('BUSINESS_ORDERS_COUNT_SALES', 'Business orders count sales')}</h2>
            <Download onClick={() => downloadCSV('business_orders_count_sales')} />
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
                          <td key={j} colSpan={td.colspan}>{td.value_unit === 'currency' ? parsePrice(td.value) : td.value}</td>
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
        </OrderStatusTableWrapper>
        <OrderStatusTableWrapper>
          <DistanceTitleBlock active={reportData1?.content?.body?.rows?.length > 0}>
            <h2>{t('FRANCHISE_ORDERS_COUNT_SALES', 'Franchise orders count sales')}</h2>
            <Download onClick={() => downloadCSV('franchise_orders_count_sales')} />
          </DistanceTitleBlock>
          {reportData1?.loading ? (
            <div className='row'>
              {[...Array(20).keys()].map(i => (
                <div className='col-md-3 col-sm-3 col-3' key={i}><Skeleton /></div>
              ))}
            </div>
          ) : (
            <TableWrapper>
              {reportData1?.content?.body?.rows?.length > 0 ? (
                <DistanceTable ref={tableRef}>
                  {reportData?.content?.header?.rows.length > 0 && (
                    <Thead>
                      {
                        reportData1?.content?.header?.rows.map((tr, i) => (
                          <tr key={i}>
                            {tr?.map((th, j) => (
                              <th key={j} colSpan={th.colspan}>{th.value}</th>
                            ))}
                          </tr>
                        ))
                      }
                    </Thead>
                  )}
                  {reportData1?.content?.body?.rows.map((tbody, i) => (
                    <Tbody key={i}>
                      <tr>
                        {tbody.map((td, j) => (
                          <td key={j} colSpan={td.colspan}>{td.value_unit === 'currency' ? parsePrice(td.value) : td.value}</td>
                        ))}
                      </tr>
                    </Tbody>
                  ))}
                  {reportData1?.content?.footer?.rows.length > 0 && (
                    <Tfoot>
                      {
                        reportData1?.content?.footer?.rows.map((tr, i) => (
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
        </OrderStatusTableWrapper>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('BUSINESSES', 'Businesses')}
          open={isBusinessFilter}
          onClose={() => setIsBusinessFilter(false)}
        >
          <AnalyticsBusinessFilter
            {...props}
            onClose={() => setIsBusinessFilter(false)}
            isFranchise
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
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('ORDER_TYPE', 'Order type')}
          open={isOrderTypeFilter}
          onClose={() => setIsOrderTypeFilter(false)}
        >
          <ReportsOrderTypeFilter
            {...props}
            onClose={() => setIsOrderTypeFilter(false)}
          />
        </Modal>
      </OrderStatusContainer>
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

export const ReportsOrderStatus = (props) => {
  const reportsDriverScheduleProps = {
    ...props,
    UIComponent: ReportsOrderStatusUI,
    endpoint: 'business_orders_count_sales',
    endpoint1: 'franchise_orders_count_sales'
  }
  return <AdvancedReportsController {...reportsDriverScheduleProps} />
}
