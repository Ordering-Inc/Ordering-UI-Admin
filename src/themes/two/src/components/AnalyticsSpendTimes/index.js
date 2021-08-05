import React, { useRef, useState } from 'react'
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
import { Modal } from '../Modal'

export const AnalyticsSpendTimes = (props) => {
  const {
    chartDataList,
    filterList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)

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

  const generateAcceptData = () => {
    const values = []
    for (const label of chartDataList?.data) {
      values.push(label.accept_spend)
    }
    return values
  }

  const generatePickUPData = () => {
    const values = []
    for (const label of chartDataList?.data) {
      values.push(label.pickup_spend)
    }
    return values
  }

  const generateDeliveryData = () => {
    const values = []
    for (const label of chartDataList?.data) {
      values.push(label.delivery_spend)
    }
    return values
  }

  const generateCompletedData = () => {
    const values = []
    for (const label of chartDataList?.data) {
      values.push(label.complete_spend)
    }
    return values
  }

  const defaultData = {
    labels: generateLabels(),
    datasets: [
      {
        label: t('ACCEPT', 'Accept'),
        data: generateAcceptData(),
        fill: false,
        backgroundColor: '#FFC700',
        borderColor: '#FFC700',
        tension: 0.4
      },
      {
        label: t('PICKUP', 'PickUP'),
        data: generatePickUPData(),
        fill: false,
        backgroundColor: '#F0879A',
        borderColor: '#F0879A',
        tension: 0.4
      },
      {
        label: t('DELIVERY', 'Delivery'),
        data: generateDeliveryData(),
        fill: false,
        backgroundColor: '#52C9FD',
        borderColor: '#52C9FD',
        tension: 0.4
      },
      {
        label: t('COMPLETED', 'Completed'),
        data: generateCompletedData(),
        fill: false,
        backgroundColor: '#00D27A',
        borderColor: '#00D27A',
        tension: 0.4
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
        position: 'bottom'
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

  const previewChart = () => {
    if (chartDataList?.data.length > 0) setIsShowPreview(true)
  }

  return (
    <>
      <Container>
        <ChartHeaderContainer>
          <p>{t('TIMES', 'Times')}</p>
          <ActionBlock>
            <BsArrowsAngleExpand onClick={previewChart} />
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
      <Modal
        width='70%'
        height='80vh'
        padding='30px'
        title={t('TIMES', 'Times')}
        open={isShowPreview}
        onClose={() => setIsShowPreview(false)}
      >
        <ChartContentWrapper>
          <Line data={defaultData} options={options} />
        </ChartContentWrapper>
      </Modal>
    </>
  )
}
