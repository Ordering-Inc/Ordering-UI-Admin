import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  ProductCategoryHeader,
  ActionBlock,
  BarChartWrapper,
  ProductCategoryFooter,
  EmptyContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

export const AnalyticsOrdersStatus = (props) => {
  const {
    orderStatusList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)

  const orderStatus = [
    { key: 0, value: t('PENDING', 'Pending') },
    { key: 1, value: t('COMPLETED', 'Completed') },
    { key: 2, value: t('REJECTED', 'Rejected') },
    { key: 3, value: t('DRIVER_IN_BUSINESS', 'Driver in business') },
    { key: 4, value: t('PREPARATION_COMPLETED', 'Preparation Completed') },
    { key: 5, value: t('REJECTED_BY_BUSINESS', 'Rejected by business') },
    { key: 6, value: t('REJECTED_BY_DRIVER', 'Rejected by Driver') },
    { key: 7, value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business') },
    { key: 8, value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver') },
    { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver') },
    { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver') },
    { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver') },
    { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver') },
    { key: 13, value: t('PREORDER', 'PreOrder') },
    { key: 14, value: t('ORDER_NOT_READY', 'Order not ready') },
    { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Order picked up completed by customer') },
    { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Order cancelled by customer') },
    { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Order not picked up by customer') },
    { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business') },
    { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer') },
    { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business') },
    { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business') }
  ]

  const generateLabels = () => {
    const labels = [t('ALL', 'All')]
    for (const label of orderStatusList?.data) {
      labels.push(orderStatus[label.status].value)
    }
    return labels
  }

  const generateData = () => {
    const todalValue = TotalOrders()
    const datasets = [todalValue]
    for (const data of orderStatusList?.data) {
      datasets.push(data.orders)
    }
    return datasets
  }

  const TotalOrders = () => {
    let value = 0
    for (const data of orderStatusList?.data) {
      value = value + data.orders
    }
    return value
  }

  const downloadImage = () => {
    if (!chartRef?.current) return
    const a = document.createElement('a')
    a.href = chartRef?.current?.toBase64Image()
    a.download = `${t('ORDERS_STATUS', 'ORDERS STATUS')}.png`
    // Trigger the download
    a.click()
  }

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: t('ORDERS', 'Orders'),
        data: generateData(),
        fill: true,
        borderColor: '#2C7BE5',
        backgroundColor: '#2C7BE5',
        borderWidth: 2,
        borderRadius: 50,
        borderSkipped: true,
        barThickness: 13,
        maxBarThickness: 25
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
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
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        },
        height: 10
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  }

  return (
    <Container>
      <ProductCategoryHeader>
        <p>{t('ORDERS_STATUS', 'ORDERS STATUS')}</p>
        <ActionBlock>
          <BsDownload onClick={downloadImage} />
        </ActionBlock>
      </ProductCategoryHeader>
      {
        orderStatusList?.loading ? (
          <Skeleton height={150} />
        ) : (
          orderStatusList?.data.length > 0 ? (
            <BarChartWrapper>
              <Bar data={data} options={options} ref={chartRef} />
            </BarChartWrapper>
          ) : (
            <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )
        )
      }

      <ProductCategoryFooter>
        <h2>{orderStatusList?.loading ? <Skeleton width={30} /> : <TotalOrders />}</h2>
        {orderStatusList?.loading ? (
          <Skeleton width={80} />
        ) : (
          <p>{t('ORDERS_TOTALS', 'Orders totals')}</p>
        )}
      </ProductCategoryFooter>
    </Container>
  )
}
