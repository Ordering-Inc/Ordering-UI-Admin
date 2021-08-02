import React from 'react'
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
import { AnalyticsOrdersOrSales as AnalyticsOrdersOrSalesController } from './naked'
import { Line } from 'react-chartjs-2'
import { useLanguage, useUtils } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

const AnalyticsOrdersOrSalesUI = (props) => {
  const {
    isOrders,
    chartDataList,
    filterList
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

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
      if (isOrders) values.push(label.orders)
      else values.push(label.sales)
    }
    return values
  }

  const defaultData = {
    labels: generateLabels(),
    datasets: [
      {
        label: isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'),
        data: generateData(),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: isOrders ? '#2C7BE5' : '#27BCFD',
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
    return parsePrice(sales.toFixed(2), { separator: '.' })
  }

  return (
    <Container>
      <ChartHeaderContainer>
        <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}</p>
        <ActionBlock>
          <BsArrowsAngleExpand />
          <BsDownload className='download-view' />
        </ActionBlock>
      </ChartHeaderContainer>
      <ChartContentWrapper>
        {
          chartDataList?.loading ? (
            <Skeleton height={150} />
          ) : (
            chartDataList?.data.length > 0 ? <Line data={defaultData} options={options} /> : <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
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
  )
}

export const AnalyticsOrdersOrSales = (props) => {
  const analyticsOrdersOrSalesProps = {
    ...props,
    UIComponent: AnalyticsOrdersOrSalesUI
  }
  return (
    <AnalyticsOrdersOrSalesController {...analyticsOrdersOrSalesProps} />
  )
}
