import React, { useState, useRef } from 'react'
import { useLanguage, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../../Shared'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import {
  ReportsBusinessSpendContainer,
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
import { ReportsOrderTypeFilter } from '../ReportsOrderTypeFilter'

const ReportsDriverOrderTimeUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [isOrderTypeFilter, setIsOrderTypeFilter] = useState(false)

  const tableRef = useRef(null)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
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
    downloadLink.download = `service_times_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const convertHMS = (value) => {
    const sec = parseInt(value, 10) // convert value to number if it's string
    let hours = Math.floor(sec / 3600) // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60) // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60) //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = '0' + hours }
    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    return hours + ':' + minutes + ':' + seconds // Return is HH : MM : SS
  }

  return (
    <ReportsBusinessSpendContainer>
      <Title>{t('SERVICE_TIMES', 'Service Times')}</Title>
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
      <DistancePerBrandWrapper>
        <DistanceTitleBlock active={reportData?.content?.body?.rows?.length > 0}>
          <h2>{t('SERVICE_TIMES', 'Service Times')}</h2>
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
                        <td key={j} colSpan={td.colspan}>{(td.value_unit === 'seconds' && td.value) ? convertHMS(td.value) : td.value}</td>
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
    </ReportsBusinessSpendContainer>
  )
}

export const ReportsDriverOrderTime = (props) => {
  const reportsDriverOrderProps = {
    ...props,
    UIComponent: ReportsDriverOrderTimeUI,
    endpoint: 'driver_companies_order_time_ranges'
  }
  return <AdvancedReportsController {...reportsDriverOrderProps} />
}
