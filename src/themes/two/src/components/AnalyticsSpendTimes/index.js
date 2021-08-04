import React, { useRef } from 'react'
import {
  Container,
  ChartContentWrapper,
  ChartHeaderContainer,
  ActionBlock,
  EmptyContent
} from './styles'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Line } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

export const AnalyticsSpendTimes = (props) => {
  const {
    chartDataList,
    filterList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)

  const generateLabels = () => {
    const labels = []
    for (const label of chartDataList?.data) {
      const timeConvert = (filterList?.lapse === 'today' || filterList?.lapse === 'yesterday')
        ? moment(label.time).format('LT')
        : moment(label.time).format('MMM DD')
      labels.push(timeConvert)
    }
    return labels
  }

  const generateData = () => {
    const values = []
    for (const label of chartDataList?.data) {
      values.push(label.orders)
    }
    return values
  }

  const defaultData = {
    labels: generateLabels(),
    datasets: [
      {
        label: t('ORDERS', 'Orders'),
        data: generateData(),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#2C7BE5',
        tension: 0.4,
        borderWidth: 3
      }
    ]
  }

  const options = {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
          }
        },
        beginAtZero: true
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  }

  const downloadImage = () => {
    if (!chartRef?.current) return
    const a = document.createElement('a')
    a.href = chartRef?.current?.toBase64Image()
    a.download = `${t('TIMES', 'Times')}.png`
    // Trigger the download
    a.click()
  }

  return (
    <Container>
      <ChartHeaderContainer>
        <p>{t('TIMES', 'Times')}</p>
        <ActionBlock>
          <BsArrowsAngleExpand />
          <BsDownload className='download-view' onClick={downloadImage} />
        </ActionBlock>
      </ChartHeaderContainer>
      <ChartContentWrapper>
        {
          chartDataList?.loading ? (
            <Skeleton height={150} />
          ) : (
            chartDataList?.data.length > 0 ? <Line data={defaultData} options={options} ref={chartRef} /> : <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )
        }
      </ChartContentWrapper>
    </Container>
  )
}
