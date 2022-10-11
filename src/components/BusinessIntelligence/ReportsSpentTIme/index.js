import React, { useState, useRef } from 'react'
import { useLanguage, useUtils, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../../Shared'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { convertHMS } from '../../../utils'
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

const ReportsSpentTimeUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)
  const [availableDriverIds, setAvailableDriverIds] = useState(null)

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

  const thObj = {
    REPORT_HEADER_TOTAL_VS_IDEAL: 'Report header total vs ideal',
    REPORT_HEADER_RANK: 'Report header rank',
    REPORT_HEADER_DRIVER_TIMES: 'Report header driver times'
  }

  return (
    <ReportsBusinessSpendContainer>
      <Title>{t('DRIVER_TIME', 'Driver Time')}</Title>
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
        <DistanceTitleBlock active={reportData?.content?.body?.rows?.length > 0}>
          <h2>{t('DRIVERS_SPENT_TIMES', 'Driver spent times')}</h2>
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
    </ReportsBusinessSpendContainer>
  )
}

export const ReportsSpentTime = (props) => {
  const reportsBusinessSpendProps = {
    ...props,
    UIComponent: ReportsSpentTimeUI,
    endpoint: 'drivers_spent_times_v2'
  }
  return <AdvancedReportsController {...reportsBusinessSpendProps} />
}
