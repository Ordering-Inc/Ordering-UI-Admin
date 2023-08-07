import React, { useRef } from 'react'
import {
  useLanguage,
  useUtils,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'

import { AnalyticsCalendar } from '../../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsFilterTimeZone } from '../../AnalyticsFilterTimeZone'

import {
  ReportsContainer,
  ReportsTableContainer,
  TitleBlock,
  ButtonActionList,
  CalendarWrapper,
  ReportsTable,
  TableWrapper,
  EmptyContent,
  Title,
  Thead,
  Tbody,
  Tfoot,
  AnalyticsTimeZoneWrapper,
  TimeZoneAndCalendar
} from './styles'

const ReportsSlaOrdersUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

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
    downloadLink.download = `completed_orders_${fileSuffix}.csv`
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

  const thObj = {
    REPORT_HEADER_IN_TIME: t('OK', 'Ok'),
    REPORT_HEADER_AT_RISK: t('AT_RISK', 'At Risk'),
    REPORT_HEADER_DELAYED: t('DELAYED', 'Delayed'),
    REPORT_HEADER_STATUS: t('STATUS', 'Status')
  }

  return (
    <ReportsContainer>
      <Title>{t('SLA_ORDERS', 'SLA orders')}</Title>
      <ButtonActionList>
        <TimeZoneAndCalendar>
          <AnalyticsTimeZoneWrapper>
            <AnalyticsFilterTimeZone {...props} />
          </AnalyticsTimeZoneWrapper>
          <CalendarWrapper>
            <AnalyticsCalendar
              handleChangeDate={handleChangeDate}
              defaultValue={filterList}
            />
          </CalendarWrapper>
        </TimeZoneAndCalendar>
      </ButtonActionList>
      <ReportsTableContainer>
        <TitleBlock active={reportData?.content?.body?.rows?.length > 0}>
          <h2>{t('SLA_ORDERS', 'SLA orders')}</h2>
          <Download onClick={() => downloadCSV()} />
        </TitleBlock>
        {reportData?.loading ? (
          <div className='row'>
            {[...Array(20).keys()].map(i => (
              <div className='col-md-3 col-sm-3 col-3' key={i}><Skeleton /></div>
            ))}
          </div>
        ) : (
          <TableWrapper>
            {reportData?.content?.body?.rows?.length > 0 ? (
              <ReportsTable ref={tableRef}>
                {reportData?.content?.header?.rows.length > 0 && (
                  <Thead>
                    {
                      reportData?.content?.header?.rows.map((tr, i) => (
                        <tr key={i}>
                          {tr?.map((th, j) => (
                            <th key={j} colSpan={th.colspan}>{t(th.value.toUpperCase(), thObj[th.value])}</th>
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
                          {(td.value_unit === 'seconds' && td.value)
                            ? convertHMS(td.value)
                            : (td.value_unit === 'currency'
                              ? parsePrice(td.value)
                              : td.value
                            )}
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
              </ReportsTable>
            ) : (
              <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )}
          </TableWrapper>
        )}
      </ReportsTableContainer>
    </ReportsContainer>
  )
}

export const ReportsSlaOrders = (props) => {
  const reportsSlaOrdersProps = {
    ...props,
    UIComponent: ReportsSlaOrdersUI,
    endpoint: 'sla_orders'
  }
  return <AdvancedReportsController {...reportsSlaOrdersProps} />
}
