import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, AdvancedReports as AdvancedReportsController } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import { lighten } from 'polished'
import { Modal } from '../Modal'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { ReportsBarChart } from '../ReportsBarChart'
import {
  ReportsDistanceContainer,
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
  EmptyContent,
  CustomerLegend,
  LegendItem,
  LegendContent
} from './styles'

const ReportsBusinessDistanceUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const tableRef = useRef(null)
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [chartData, setChartData] = useState(null)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const generateChartValues = () => {
    if (reportData?.content?.header?.rows[0]?.length > 0) {
      const chartValues = []
      for (let i = 0; i < reportData?.content?.header?.rows[0]?.length - 1; i++) {
        const values = reportData?.content?.body?.rows?.reduce((prev, cur) => [...prev, cur[i + 2].value], [])
        chartValues.push([...values])
      }
      return chartValues
    }
  }

  const generateChartLabels = () => {
    let labels = []
    if (reportData?.content?.header?.rows[0]?.length > 0) {
      labels = [...reportData?.content?.body?.rows?.reduce((prev, cur) => [...prev, cur[1].value], [])]
    }
    return labels
  }

  const generateDataSets = () => {
    const chartValues = generateChartValues()
    const chartData = []
    chartValues && chartValues.forEach((value, i) => {
      chartData.push({
        label: reportData?.content?.header?.rows[0][i + 1].value ?? '',
        data: value,
        fill: true,
        borderColor: lighten(i / 10, '#2C7BE5'),
        backgroundColor: lighten(i / 10, '#2C7BE5'),
        borderWidth: 2,
        borderRadius: 16,
        borderSkipped: false
      })
    })
    return chartData
  }

  const downloadTable = () => {
    if (!chartData || (reportData?.content?.body?.rows?.length === 0)) return
    let csv = `${t('NAME', 'Name')},`
    for (const item of chartData?.datasets) {
      csv += `${item.label},`
    }
    csv += '\n'
    chartData && chartData.labels.forEach(function (label, i) {
      csv += label + ','
      for (const item of chartData?.datasets) {
        csv += item.data[i] + ','
      }
      csv += '\n'
    })
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `distance_per_brand_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  useEffect(() => {
    const data = {
      labels: generateChartLabels(),
      datasets: generateDataSets()
    }
    setChartData({ ...data })
  }, [reportData])

  return (
    <ReportsDistanceContainer>
      <Title>{t('DISTANCE', 'Distance')}</Title>
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
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download onClick={() => downloadTable()} />
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
                        <td key={j} colSpan={td.colspan}>{td.value}</td>
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
      <DistancePerBrandWrapper>
        <ReportsBarChart
          chartDataList={reportData}
          chartData={chartData}
          title={t('DISTANCE_PER_BRAND', 'Distance per brand')}
          yUnit='km'
        />
        <CustomerLegend>
          {
            reportData?.content?.header?.rows[0]?.map((item, i) => (
              i !== 0 && (
                <LegendItem key={i}>
                  {
                    reportData?.content?.footer?.rows[0]?.length > 1 && (
                      <p>{reportData?.content?.footer?.rows[0][i].value} km</p>
                    )
                  }
                  <LegendContent>
                    <div style={{ backgroundColor: lighten((i - 1) / 10, '#2C7BE5') }} />
                    <span>{item.value}</span>
                  </LegendContent>
                </LegendItem>
              )

            ))
          }
        </CustomerLegend>
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
    </ReportsDistanceContainer>
  )
}

export const ReportsBusinessDistance = (props) => {
  const reportsBusinessDistanceProps = {
    ...props,
    UIComponent: ReportsBusinessDistanceUI,
    endpoint: 'business_distance_average'
  }
  return <AdvancedReportsController {...reportsBusinessDistanceProps} />
}
