import React, { useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Bar } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import { Download } from 'react-bootstrap-icons'
import {
  ReportsBarChartContainer,
  ChartWrapper,
  EmptyContent,
  TitleBlock
} from './styles'

export const ReportsBarChart = (props) => {
  const {
    chartDataList,
    chartData
  } = props

  const [, t] = useLanguage()
  const barChartRef = useRef(null)

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

  return (
    <ReportsBarChartContainer>
      <TitleBlock>
        <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
        <Download onClick={() => downloadChart()} />
      </TitleBlock>
      {chartDataList?.loading ? (
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
          {chartData?.datasets?.length > 0 ? (
            <ChartWrapper>
              <Bar data={chartData} options={options} ref={barChartRef} />
            </ChartWrapper>
          ) : (
            <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )}
        </>
      )}
    </ReportsBarChartContainer>
  )
}
