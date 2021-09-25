import React, { useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import * as htmlToImage from 'html-to-image'
import { ReportsBusinessDistance as ReportsBusinessDistanceController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import { Bar } from 'react-chartjs-2'
import { lighten } from 'polished'
import { Modal } from '../Modal'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
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
  ChartWrapper,
  TableWrapper,
  EmptyContent
} from './styles'

const ReportsBusinessDistanceUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    averageDistanceList
  } = props

  const [, t] = useLanguage()
  const barChartRef = useRef(null)
  const tableRef = useRef(null)
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const generateChartValues = () => {
    if (averageDistanceList?.distances?.header?.rows[0]?.length > 0) {
      const chartValues = []
      for (let i = 0; i < averageDistanceList?.distances?.header?.rows[0]?.length - 1; i++) {
        const values = averageDistanceList?.distances?.body?.rows?.reduce((prev, cur) => [...prev, cur[i + 2].value], [])
        chartValues.push([...values])
      }
      return chartValues
    }
  }

  const generateChartLabels = () => {
    let labels = []
    if (averageDistanceList?.distances?.header?.rows[0]?.length > 0) {
      labels = [...averageDistanceList?.distances?.body?.rows?.reduce((prev, cur) => [...prev, cur[1].value], [])]
    }
    return labels
  }

  const generateDataSets = () => {
    const chartValues = generateChartValues()
    const chartData = []
    chartValues && chartValues.forEach((value, i) => {
      chartData.push({
        label: averageDistanceList?.distances?.header?.rows[0][i + 1].value ?? '',
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

  const data = {
    labels: generateChartLabels(),
    datasets: generateDataSets()
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      },
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        borderRadius: 7,
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          font: {
            size: 12,
            color: '#909BA9'
          }
        }
      }
    },
    pointRadius: 0
  }

  const downloadChart = () => {
    if (!barChartRef?.current) return
    const a = document.createElement('a')
    a.href = barChartRef?.current?.toBase64Image()
    a.download = `${t('DISTANCE_PER_BRAND', 'Distance per brand')}.png`
    // Trigger the download
    a.click()
  }

  const downloadTable = () => {
    if (!tableRef?.current) return
    htmlToImage.toPng(tableRef?.current)
      .then(function (dataUrl) {
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = `${t('DISTANCE_PER_BRAND', 'Distance per brand')}.png`
        // Trigger the download
        a.click()
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

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
        <DistanceTitleBlock>
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download onClick={() => downloadTable()} />
        </DistanceTitleBlock>
        {averageDistanceList?.loading ? (
          <div className='row'>
            {[...Array(20).keys()].map(i => (
              <div className='col-md-3 col-sm-3 col-3' key={i}><Skeleton /></div>
            ))}
          </div>
        ) : (
          <TableWrapper>
            {averageDistanceList?.distances?.body?.rows?.length > 0 ? (
              <DistanceTable ref={tableRef}>
                {averageDistanceList?.distances?.header?.rows.length > 0 && (
                  <Thead>
                    {
                      averageDistanceList?.distances?.header?.rows.map((tr, i) => (
                        <tr key={i}>
                          {tr?.map((th, j) => (
                            <th key={j} colSpan={th.colspan}>{th.value}</th>
                          ))}
                        </tr>
                      ))
                    }
                  </Thead>
                )}
                {averageDistanceList?.distances?.body?.rows.map((tbody, i) => (
                  <Tbody key={i}>
                    <tr>
                      {tbody.map((td, j) => (
                        <td key={j} colSpan={td.colspan}>{td.value}</td>
                      ))}
                    </tr>
                  </Tbody>
                ))}
                {averageDistanceList?.distances?.footer?.rows.length > 0 && (
                  <Tfoot>
                    {
                      averageDistanceList?.distances?.footer?.rows.map((tr, i) => (
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
        <DistanceTitleBlock>
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download onClick={() => downloadChart()} />
        </DistanceTitleBlock>
        {averageDistanceList?.loading ? (
          <div className='row'>
            {[...Array(12).keys()].map(i => (
              <div
                key={i}
                className='col-md-1 col-sm-1 col-1'
                style={{ transform: 'rotateX(180deg)' }}
              >
                <Skeleton height={Math.random() * 300} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {averageDistanceList?.distances?.body?.rows?.length > 0 ? (
              <ChartWrapper>
                <Bar data={data} options={options} ref={barChartRef} />
              </ChartWrapper>
            ) : (
              <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )}
          </>
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
    </ReportsDistanceContainer>
  )
}

export const ReportsBusinessDistance = (props) => {
  const reportsBusinessDistanceProps = {
    ...props,
    UIComponent: ReportsBusinessDistanceUI
  }
  return <ReportsBusinessDistanceController {...reportsBusinessDistanceProps} />
}
