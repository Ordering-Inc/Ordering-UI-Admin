import React, { useState, useRef } from 'react'
import { useLanguage, useUtils, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../../Shared'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
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

const ReportsAverageSalesUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData,
    reportData1
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)

  const tableRef = useRef(null)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
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

  return (
    <>
      <OrderStatusContainer>
        <Title>{t('AVERAGE_SALES', 'Average sales')}</Title>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsDriverGroupFilter(true)}
            >
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsBrandFilter(true)}
            >
              {t('BRAND', 'Brand')} ({filterList?.franchises_id ? filterList?.franchises_id?.length : t('ALL', 'All')})
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
            <h2>{t('SITE_AVERAGE_SALES', 'Site average sales')}</h2>
            <Download onClick={() => downloadCSV('site_sales_average')} />
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
                              <th key={j} colspan={th.colspan}>{th.value}</th>
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
                          <td key={j} colspan={td.colspan}>{td.value_unit === 'currency' ? parsePrice(td.value) : td.value}</td>
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
                              <td key={j} colspan={td.colspan}>{td.value}</td>
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
            <h2>{t('ORDER_TYPE_AVERAGE_SALES', 'Order type average sales')}</h2>
            <Download onClick={() => downloadCSV('order_type_sales_average')} />
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
                              <th key={j} colspan={th.colspan}>{th.value}</th>
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
                          <td key={j} colspan={td.colspan}>{td.value_unit === 'currency' ? parsePrice(td.value) : td.value}</td>
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
                              <td key={j} colspan={td.colspan}>{td.value}</td>
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
          title={t('DRIVER_GROUP', 'Driver group')}
          open={isDriverGroupFilter}
          onClose={() => setIsDriverGroupFilter(false)}
        >
          <ReportsDriverGroupFilter
            {...props}
            onClose={() => setIsDriverGroupFilter(false)}
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
      </OrderStatusContainer>
    </>
  )
}

export const ReportsAverageSales = (props) => {
  const reportsAverageSalesProps = {
    ...props,
    UIComponent: ReportsAverageSalesUI,
    endpoint: 'sites_sales_average',
    endpoint1: 'order_types_sales_average'
  }
  return <AdvancedReportsController {...reportsAverageSalesProps} />
}
