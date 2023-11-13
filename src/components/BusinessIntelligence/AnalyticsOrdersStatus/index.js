import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  OrderStatusHeader,
  ActionBlock,
  BarChartWrapper,
  OrderStatusFooter,
  EmptyContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import { GraphLoadingMessage } from '../GraphLoadingMessage'
import { orderStatus } from '../../../utils'
export const AnalyticsOrdersStatus = (props) => {
  const {
    orderStatusList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)

  const generateLabels = () => {
    const labels = [t('ALL', 'All')]
    for (const label of orderStatusList?.data) {
      labels.push(orderStatus?.[label.status]?.value)
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

  const downloadCSV = () => {
    let csv = `${t('STATUS', 'Status')}, ${t('ORDERS', 'Orders')}\n`
    for (const row of orderStatusList?.data) {
      const selectedStatus = orderStatus.find(order => order.key === row.status)
      csv += selectedStatus.value + ','
      csv += `${row.orders},`
      csv += '\n'
    }
    const link = document.createElement('a')
    const fileSuffix = new Date().getTime()
    link.download = `orders_status_${fileSuffix}.csv`

    const blob = new Blob(['\ufeff', csv], { type: 'text/csv' })
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      link.href = reader.result
      link.click()
    }
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
      <OrderStatusHeader>
        <p>{t('ORDERS_STATUS', 'ORDERS STATUS')}</p>
        <ActionBlock disabled={orderStatusList?.data.length === 0}>
          <BsDownload onClick={downloadCSV} />
        </ActionBlock>
      </OrderStatusHeader>
      {
        orderStatusList?.loading ? (
          <div>
            <Skeleton height={150} />
            <GraphLoadingMessage />
          </div>
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

      <OrderStatusFooter>
        <h2>{orderStatusList?.loading ? <Skeleton width={30} /> : <TotalOrders />}</h2>
        {orderStatusList?.loading ? (
          <Skeleton width={80} />
        ) : (
          <p>{t('ORDERS', 'Orders')} {t('TOTALS', 'totals')}</p>
        )}
      </OrderStatusFooter>
    </Container>
  )
}
