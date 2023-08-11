import React, { useEffect, useRef, useState } from 'react'
import 'chartjs-adapter-moment'
import {
  Container,
  ChartContentWrapper,
  ChartHeaderContainer,
  ActionBlock,
  ChartFooterContainer,
  EmptyContent
} from './styles'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Line } from 'react-chartjs-2'
import { useLanguage, useUtils } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../Shared'
import { GraphLoadingMessage } from '../GraphLoadingMessage'

export const AnalyticsOrdersOrSales = (props) => {
  const {
    isOrders,
    chartDataList,
    filterList,
    countryCode
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [dataOptions, setDataOptions] = useState(null)

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
    for (const data of chartDataList?.data) {
      orders += data.orders
    }
    return orders
  }

  const TotalSales = () => {
    let sales = 0
    for (const data of chartDataList?.data) {
      sales += data.sales
    }
    const totalSales = countryCode
      ? parsePrice(sales.toFixed(2), { separator: '.' })
      : sales.toFixed(2)
    return totalSales
  }

  const downloadCSV = () => {
    let csv = `${t('TIME', 'Time')}, ${isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}\n`
    for (const row of chartDataList?.data) {
      csv += `${row.time},`
      csv += `${isOrders ? row.orders : row.sales},`
      csv += '\n'
    }

    const link = document.createElement('a')
    const fileSuffix = new Date().getTime()
    const exportName = isOrders ? 'orders' : 'sales'
    link.download = `${exportName}_${fileSuffix}.csv`

    const blob = new Blob(['\ufeff', csv], { type: 'text/csv' })
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      link.href = reader.result
      link.click()
    }
  }

  const previewChart = () => {
    if (chartDataList?.data.length === 0) return
    setIsShowPreview(true)
  }

  const generateLabel = () => {
    const values = []
    chartDataList?.data && chartDataList.data.forEach(data => {
      values.push(data.time)
    })
    return values
  }

  const generateData = () => {
    const values = chartDataList.data.map(item => isOrders ? item.orders : item.sales)

    return [{
      label: isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'),
      data: [...values],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }]
  }

  useEffect(() => {
    if (chartDataList?.data && chartDataList?.data?.length > 0) {
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
          <ActionBlock disabled={chartDataList?.data.length === 0}>
            <BsArrowsAngleExpand onClick={previewChart} />
            <BsDownload className='download-view' onClick={downloadCSV} />
          </ActionBlock>
        </ChartHeaderContainer>
        <ChartContentWrapper>
          {
            chartDataList?.loading ? (
              <div>
                <Skeleton height={150} />
                <GraphLoadingMessage />
              </div>
            ) : (
              (chartDataList?.data.length > 0 && dataOptions) ? <Line data={dataOptions} options={options} ref={chartRef} /> : <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
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
          <Line data={dataOptions} options={options} />
        </ChartContentWrapper>
      </Modal>
    </>
  )
}
