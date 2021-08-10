import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import {
  HomeReportsContainer,
  HomeReportsHeader,
  OrdersAndSalesWrapper,
  ReportsContent,
  SalesChartWrapper,
  OrdersOrSalesContainer,
  DetailsContent,
  BoxIconContainer,
  ChartHeaderContainer
} from './styles'
import { Button } from '../../styles/Buttons'
import {
  Basket as OrdersIcon,
  Cash as SalesIcon
} from 'react-bootstrap-icons'
import { useLanguage, useUtils } from 'ordering-components-admin'

export const HomeReportsUI = (props) => {
  const {
    isShowVideo,
    ordersList,
    todaySalelsList,
    monthSalesList,
    getCurrentDateRange
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [timeAxes, setTimeAxes] = useState([])

  const generateData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = monthSalesList?.sales?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: monthSalesList?.sales[index]?.time, y: monthSalesList?.sales[index]?.sales })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const updateTimeAxes = () => {
    var unitdate = getTimeAxes(getCurrentDateRange()).time.unit
    var maxdate = moment(getTimeAxes(getCurrentDateRange()).time.max).endOf(unitdate)
    var mindate = moment(getTimeAxes(getCurrentDateRange()).time.min).startOf(unitdate)
    var curDate = mindate
    var newTimeAxes = []
    var adder = 'd'
    switch (unitdate) {
      case 'day': adder = 'd'
        break
      case 'month': adder = 'M'
        break
      case 'year': adder = 'y'
        break
      case 'hour': adder = 'h'
        break
      default: break
    }
    do {
      newTimeAxes.push(moment(curDate._d.getTime()).format('YYYY-MM-DD HH:mm:ss'))
      curDate = curDate.clone().add(1, adder)
    }
    while (curDate <= maxdate)
    setTimeAxes(newTimeAxes)
  }

  const getTimeAxes = (lapse) => {
    const xAxes = {
      type: 'time',
      grid: {
        display: false
      },
      time: {
        stepSize: 1,
        displayFormats: {
          hour: 'LT'
        }
      },
      ticks: {
        fontSize: 12,
        fontColor: '#CED4DA'
      }
    }

    xAxes.time.unit = 'day'
    xAxes.time.min = moment().subtract(30, 'days').format('YYYY-MM-DD')
    xAxes.time.max = moment().format('YYYY-MM-DD')
    return xAxes
  }

  const defaultData = {
    datasets: [
      {
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
      x: getTimeAxes(),
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

  const getTotalSales = () => {
    let data = 0
    for (const sale of monthSalesList?.sales) {
      data += sale.sales
    }

    return parsePrice(data, { separator: '.' })
  }

  useEffect(() => {
    updateTimeAxes()
  }, [])

  return (
    <HomeReportsContainer isDirection={isShowVideo}>
      <HomeReportsHeader>
        <p>{t('REPORTS', 'Reports')}</p>
        <Button color='lightPrimary'>{t('SEE_MORE_REPORTS', 'See more reports')}</Button>
      </HomeReportsHeader>
      <ReportsContent isDirection={isShowVideo}>
        <OrdersAndSalesWrapper isDirection={isShowVideo}>
          <OrdersOrSalesContainer>
            <DetailsContent>
              <p>{t('TODAY_ORDERS', 'Today Orders')}</p>
              {
                ordersList?.loading ? <Skeleton width={70} height={30} /> : <h2>{ordersList?.orders}</h2>
              }
            </DetailsContent>
            <BoxIconContainer>
              <OrdersIcon />
            </BoxIconContainer>
          </OrdersOrSalesContainer>
          <OrdersOrSalesContainer>
            <DetailsContent>
              <p>{t('TODAY_SALES', 'Today Sales')}</p>
              {
                todaySalelsList?.loading ? <Skeleton width={70} height={30} /> : <h2>{parsePrice(todaySalelsList?.sales, { separator: '.' })}</h2>
              }
            </DetailsContent>
            <BoxIconContainer isSales>
              <SalesIcon />
            </BoxIconContainer>
          </OrdersOrSalesContainer>
        </OrdersAndSalesWrapper>
        <SalesChartWrapper isFullWidth={isShowVideo}>
          <ChartHeaderContainer>
            <p>{t('THIS_MONTH_SALES', 'This month sales')}</p>
            {
              monthSalesList?.loading ? <Skeleton width={70} height={30} /> : <h3>{getTotalSales()}</h3>
            }
          </ChartHeaderContainer>
          {
            monthSalesList?.loading ? <Skeleton height={150} /> : <Line data={defaultData} options={options} />
          }
        </SalesChartWrapper>
      </ReportsContent>

    </HomeReportsContainer>
  )
}
