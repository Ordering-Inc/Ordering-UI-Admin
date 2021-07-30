import React from 'react'
import {
  Container,
  ChartContentWrapper
} from './styles'
import { AnalyticsLineChart as AnalyticsLineChartController } from './naked'
import { Line } from 'react-chartjs-2'

const AnalyticsLineChartUI = (props) => {
  const {
    chartDataList
  } = props

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: '#742774'
      }
    ]
  }

  return (
    <Container>
      <ChartContentWrapper>
        <Line data={data} />
      </ChartContentWrapper>
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
