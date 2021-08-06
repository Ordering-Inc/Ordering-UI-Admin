import React, { useEffect, useRef, useState } from 'react'
import 'chartjs-adapter-moment'
import moment from 'moment'
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
import { Modal } from '../Modal'

export const AnalyticsOrdersOrSales = (props) => {
  const {
    isOrders,
    chartDataList,
    filterList
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [timeAxes, setTimeAxes] = useState([])

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
    switch (lapse) {
      case 'today':
      case 'yesterday':
        xAxes.time.unit = 'hour'
        xAxes.time.min = moment().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 00:00:00')
        xAxes.time.max = moment().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 24:00:00')
        break
      case 'last_7_days':
      case 'last_30_days':
        xAxes.time.unit = 'day'
        xAxes.time.min = moment().subtract(lapse === 'last_7_days' ? 7 : 30, 'days').format('YYYY-MM-DD')
        xAxes.time.max = moment().format('YYYY-MM-DD')
        break
      default: {
        const _lapse = lapse.split(',')
        const from = moment(_lapse[0] + ' 00:00:00')
        const to = moment(_lapse[1] + ' 24:00:00')
        const duration = moment.duration(from.diff(to))
        const hours = Math.abs(duration.asHours())
        const days = Math.abs(duration.asDays())
        const months = Math.abs(duration.asMonths())
        if (hours <= 24) {
          xAxes.time.unit = 'hour'
          xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss')
          xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss')
        } else if (days <= 30) {
          xAxes.time.unit = 'day'
          xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss')
          xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss')
        } else if (months <= 12) {
          xAxes.time.unit = 'month'
          xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss')
          xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss')
        } else {
          xAxes.time.unit = 'year'
          xAxes.time.min = from.format('YYYY-MM-DD HH:mm:ss')
          xAxes.time.max = to.format('YYYY-MM-DD HH:mm:ss')
        }
        break
      }
    }
    return xAxes
  }

  const updateTimeAxes = () => {
    var unitdate = getTimeAxes(filterList?.lapse).time.unit
    var maxdate = moment(getTimeAxes(filterList?.lapse).time.max).endOf(unitdate)
    var mindate = moment(getTimeAxes(filterList?.lapse).time.min).startOf(unitdate)
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

  const generateData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = chartDataList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: chartDataList?.data[index]?.time, y: (isOrders ? chartDataList?.data[index]?.orders : chartDataList?.data[index]?.sales) })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const defaultData = {
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
      x: getTimeAxes(filterList?.lapse),
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

  const downloadImage = () => {
    if (!chartRef?.current) return
    const a = document.createElement('a')
    a.href = chartRef?.current?.toBase64Image()
    a.download = `${isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}.png`
    // Trigger the download
    a.click()
  }

  const previewChart = () => {
    if (chartDataList?.data.length === 0) return
    setIsShowPreview(true)
  }

  useEffect(() => {
    updateTimeAxes()
  }, [filterList])

  return (
    <>
      <Container>
        <ChartHeaderContainer>
          <p>{isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')}</p>
          <ActionBlock disabled={chartDataList?.data.length === 0}>
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
          <Line data={defaultData} options={options} />
        </ChartContentWrapper>
      </Modal>
    </>
  )
}
