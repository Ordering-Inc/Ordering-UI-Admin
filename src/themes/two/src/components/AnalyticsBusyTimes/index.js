import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  ChartHeaderContainer,
  ActionBlock,
  BarChartWrapper,
  EmptyContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

export const AnalyticsBusyTimes = (props) => {
  const {
    filterList,
    busyTimesList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)

  const generateLabels = () => {
    const labels = []
    if (busyTimesList?.data?.busy) {
      for (const label of busyTimesList?.data?.busy) {
        const timeConvert = (filterList?.lapse === 'today' || filterList?.lapse === 'yesterday')
          ? moment(label.at).format('LT')
          : moment(label.at).format('MMM DD')
        labels.push(timeConvert)
      }
    }

    return labels
  }

  const generateBusyData = () => {
    const datasets = []
    if (busyTimesList?.data?.busy) {
      for (const data of busyTimesList?.data?.busy) {
        const _time = (data.time / 3600).toFixed(2)
        datasets.push(_time)
      }
    }

    return datasets
  }

  const generateNotBusyData = () => {
    const datasets = []
    if (busyTimesList?.data?.not_busy) {
      for (const data of busyTimesList?.data?.not_busy) {
        const _time = (data.time / 3600).toFixed(2)
        datasets.push(_time)
      }
    }

    return datasets
  }

  const downloadImage = () => {
    if (!chartRef?.current) return
    const a = document.createElement('a')
    a.href = chartRef?.current?.toBase64Image()
    a.download = `${t('BUSY_TIMES', 'Busy Times')}.png`
    // Trigger the download
    a.click()
  }

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: t('NOT_BUSY', 'Not Busy'),
        data: generateNotBusyData(),
        fill: true,
        borderColor: '#A9E4FE',
        backgroundColor: '#A9E4FE',
        borderWidth: 2,
        borderRadius: { topRight: 7.6, topLeft: 7.6 },
        borderSkipped: true
      },
      {
        label: t('BUSY', 'Busy'),
        data: generateBusyData(),
        fill: true,
        borderColor: '#52C9FD',
        backgroundColor: '#52C9FD',
        borderWidth: 2,
        borderRadius: { topRight: 7.6, topLeft: 7.6 }
      }
    ]
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
        borderRadius: 7.6
      }
    },
    pointRadius: 0
  }

  return (
    <Container>
      <ChartHeaderContainer>
        <p>{t('BUSY_TIMES', 'Busy Times')}</p>
        <ActionBlock>
          <BsArrowsAngleExpand />
          <BsDownload className='download-view' onClick={downloadImage} />
        </ActionBlock>
      </ChartHeaderContainer>
      {
        busyTimesList?.loading ? (
          <Skeleton height={150} />
        ) : (
          (busyTimesList?.data?.busy?.length > 0 || busyTimesList?.data?.not_busy?.length > 0) ? (
            <BarChartWrapper>
              <Bar data={data} options={options} ref={chartRef} />
            </BarChartWrapper>
          ) : (
            <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )
        )
      }
    </Container>
  )
}
