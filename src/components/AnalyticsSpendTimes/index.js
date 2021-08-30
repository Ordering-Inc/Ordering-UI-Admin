import React, { useRef, useState, useEffect } from 'react'
import 'chartjs-adapter-moment'
import moment from 'moment'
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
import { Modal } from '../Modal'

export const AnalyticsSpendTimes = (props) => {
  const {
    chartDataList,
    filterList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [timeAxes, setTimeAxes] = useState([])

  const generateAcceptData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = chartDataList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: chartDataList?.data[index]?.time, y: chartDataList?.data[index]?.accept_spend })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const generatePickUPData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = chartDataList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: chartDataList?.data[index]?.time, y: chartDataList?.data[index]?.pickup_spend })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const generateDeliveryData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = chartDataList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: chartDataList?.data[index]?.time, y: chartDataList?.data[index]?.delivery_spend })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const generateCompletedData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = chartDataList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: chartDataList?.data[index]?.time, y: chartDataList?.data[index]?.complete_spend })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
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

  const defaultData = {
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

  useEffect(() => {
    updateTimeAxes()
  }, [filterList])

  return (
    <>
      <Container>
        <ChartHeaderContainer>
          <p>{t('TIMES', 'Times')}</p>
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
