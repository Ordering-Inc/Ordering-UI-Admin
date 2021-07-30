import React, { useEffect, useState } from 'react'
import {
  Container,
  ChartContentWrapper,
  ChartHeaderContainer,
  ActionBlock,
  ChartFooterContainer
} from './styles'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { AnalyticsLineChart as AnalyticsLineChartController } from './naked'
import { Line } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

const AnalyticsLineChartUI = (props) => {
  const {
    isOrders,
    chartDataList
  } = props

  const [, t] = useLanguage()

  const generateLabels = () => {
    const labels = []
    for (const label of chartDataList?.data) {
      labels.push(moment(label.time).format('LT'))
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
        }
      },
      y: {
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

  return (
    <Container>
      <ChartHeaderContainer>
        {
          chartDataList?.loading ? (
            <Skeleton width={50} />
          ) : (
            <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}</p>
          )
        }
        <ActionBlock>
          {chartDataList?.loading ? <Skeleton width={20} height={20} style={{ marginLeft: '5px', marginRight: '5px' }} /> : <BsArrowsAngleExpand />}
          {chartDataList?.loading ? <Skeleton width={20} height={20} /> : <BsDownload className='download-view' />}
        </ActionBlock>
      </ChartHeaderContainer>
      <ChartContentWrapper>
        {
          chartDataList?.loading ? (
            <Skeleton height={150} />
          ) : (
            <Line data={defaultData} options={options} />
          )
        }
      </ChartContentWrapper>
      <ChartFooterContainer>
        <h2>{chartDataList?.loading ? <Skeleton width={30} /> : 0}</h2>
        {chartDataList?.loading ? (
          <Skeleton width={80} />
        ) : (
          <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')} {t('TOTALS', 'totals')}</p>
        )}
      </ChartFooterContainer>
    </Container>
  )
}

export const AnalyticsLineChart = (props) => {
  const analyticsLineChartProps = {
    ...props,
    UIComponent: AnalyticsLineChartUI
  }
  return (
    <AnalyticsLineChartController {...analyticsLineChartProps} />
  )
}
