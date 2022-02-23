import React, { useEffect, useRef, useState } from 'react'
import 'chartjs-adapter-moment'
import { lighten } from 'polished'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Line } from 'react-chartjs-2'
import { useLanguage, useUtils } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../Shared'
import {
  Container,
  ChartContentWrapper,
  ChartHeaderContainer,
  ActionBlock,
  ChartFooterContainer,
  EmptyContent
} from './styles'

export const AnalyticsDriverOrders = (props) => {
  const {
    isOrders,
    chartDataList
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [dataOptions, setDataOptions] = useState(null)

  const generateData = () => {
    const values = chartDataList.data.dataset.dataset.map((item, index) => {
      const list = []
      if (item?.data?.length > 0) {
        for (const value of item?.data) {
          list.push(value.y)
        }
      }
      return {
        label: item.label,
        data: [...list],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: lighten(index / 10, '#2C7BE5'),
        tension: 0.4,
        borderWidth: 3
      }
    })
    return values
  }

  const generateLabel = () => {
    const values = []
    chartDataList?.data?.dataset?.dataset?.[0]?.data && chartDataList.data.dataset.dataset[0].data.forEach(data => {
      values.push(data.x)
    })
    return values
  }

  const options = {
    scales: {
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

  const TotalOrders = () => {
    let orders = 0
    if (!chartDataList?.data?.dataset?.dataset[0]?.data || chartDataList?.data?.dataset?.dataset[0]?.data.length === 0) return orders
    for (const data of chartDataList?.data?.dataset?.dataset[0]?.data) {
      orders += data.y
    }
    return orders
  }

  const TotalSales = () => {
    let sales = 0
    if (!chartDataList?.data?.dataset?.dataset[0]?.data || chartDataList?.data?.dataset?.dataset[0]?.data.length === 0) return sales
    for (const data of chartDataList?.data?.dataset?.dataset[0]?.data) {
      sales += data.y
    }
    return parsePrice(sales.toFixed(2), { separator: '.' })
  }

  const downloadCSV = () => {
    let csv = `${t('TIME', 'Time')}, ${isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}\n`
    for (const row of chartDataList?.data?.dataset?.dataset[0]?.data) {
      csv += `${row.x},`
      csv += `${row.y},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    const exportName = isOrders ? 'orders' : 'sales'
    downloadLink.download = `${exportName}_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const previewChart = () => {
    if (chartDataList?.data?.dataset?.dataset[0]?.data.length === 0) return
    setIsShowPreview(true)
  }

  useEffect(() => {
    if (chartDataList?.data?.dataset?.dataset[0]?.data && chartDataList?.data?.dataset?.dataset[0]?.data?.length > 0) {
      const defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      }
      setDataOptions(defaultData)
    }
  }, [chartDataList])

  return (
    <>
      <Container>
        <ChartHeaderContainer>
          <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}</p>
          <ActionBlock disabled={chartDataList?.data?.dataset?.dataset[0]?.data.length === 0}>
            <BsArrowsAngleExpand onClick={previewChart} />
            <BsDownload className='download-view' onClick={downloadCSV} />
          </ActionBlock>
        </ChartHeaderContainer>
        <ChartContentWrapper>
          {
            chartDataList?.loading ? (
              <Skeleton height={150} />
            ) : (
              (chartDataList?.data?.dataset?.dataset[0]?.data.length > 0 && dataOptions) ? <Line data={dataOptions} options={options} ref={chartRef} /> : <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )
          }
        </ChartContentWrapper>
        <ChartFooterContainer>
          <h2>{chartDataList?.loading ? <Skeleton width={30} /> : (isOrders ? <TotalOrders /> : <TotalSales />)}</h2>
          {chartDataList?.loading ? (
            <Skeleton width={80} />
          ) : (
            <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')} {t('TOTALS', 'totals')}</p>
          )}
        </ChartFooterContainer>
      </Container>
      <Modal
        width='70%'
        height='80vh'
        padding='30px'
        title={isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}
        open={isShowPreview}
        onClose={() => setIsShowPreview(false)}
      >
        <ChartContentWrapper>
          {dataOptions && <Line data={dataOptions} options={options} />}
        </ChartContentWrapper>
      </Modal>
    </>
  )
}
