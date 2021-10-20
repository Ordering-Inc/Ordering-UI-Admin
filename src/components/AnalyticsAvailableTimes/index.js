import React, { useRef, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import {
  Container,
  ChartHeaderContainer,
  ActionBlock,
  BarChartWrapper,
  EmptyContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { Modal } from '../Modal'

export const AnalyticsAvailableTimes = (props) => {
  const {
    filterList,
    availableTimesList
  } = props

  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)

  const generateLabels = () => {
    const labels = []
    if (availableTimesList?.data?.available) {
      for (const label of availableTimesList?.data?.available) {
        const timeConvert = getTimeFormat(label.at, filterList?.lapse)
        labels.push(timeConvert)
      }
    }

    return labels
  }

  const getTimeFormat = (date, lapse) => {
    let newDate
    switch (lapse) {
      case 'today':
      case 'yesterday':
        newDate = moment(date).format('HH:00')
        break
      case 'last_7_days':
      case 'last_30_days':
        newDate = moment(date).format('MMM DD')
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
          newDate = moment(date).format('HH:MM:SS')
        } else if (days <= 30) {
          newDate = moment(date).format('MMM DD')
        } else if (months <= 12) {
          newDate = moment(date).format('YYYY-MM')
        } else {
          newDate = moment(date).format('YYYY-MM')
        }
        break
      }
    }
    return newDate
  }

  const generateAvailableData = () => {
    const datasets = []
    if (availableTimesList?.data?.available) {
      for (const data of availableTimesList?.data?.available) {
        const _time = parseNumber((data.time / 3600), { separator: '.' })
        datasets.push(_time)
      }
    }

    return datasets
  }

  const generateNotAvailableData = () => {
    const datasets = []
    if (availableTimesList?.data?.not_available) {
      for (const data of availableTimesList?.data?.not_available) {
        const _time = parseNumber((data.time / 3600), { separator: '.' })
        datasets.push(_time)
      }
    }

    return datasets
  }

  const downloadCSV = () => {
    let csv = `${t('TIME', 'Time')}, ${t('AVAILABLE', 'Available')}, ${t('NOT_AVAILABLE', 'Not Available')}\n`
    for (const row of availableTimesList?.data?.available) {
      csv += `${row.at},`
      csv += `${row.time},`
      const notAvailable = availableTimesList?.data?.not_available.find(item => item.at === row.at)
      csv += notAvailable ? `${notAvailable.time},` : null
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `available_times_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: t('AVAILABLE', 'Available'),
        data: generateAvailableData(),
        fill: true,
        borderColor: '#2C7BE5',
        backgroundColor: '#2C7BE5',
        borderWidth: 2,
        borderRadius: { topRight: 7.6, topLeft: 7.6 }
      },
      {
        label: t('NOT_AVAILABLE', 'Not Available'),
        data: generateNotAvailableData(),
        fill: true,
        borderColor: '#E9F2FE',
        backgroundColor: '#E9F2FE',
        borderWidth: 2,
        borderRadius: { topRight: 7.6, topLeft: 7.6 },
        borderSkipped: true
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        borderRadius: 7.6
      }
    },
    pointRadius: 0
  }

  const previewChart = () => {
    if (availableTimesList?.data?.available?.length > 0 || availableTimesList?.data?.not_available?.length > 0) setIsShowPreview(true)
  }

  return (
    <>
      <Container>
        <ChartHeaderContainer>
          <p>{t('AVAILABLE_TIMES', 'Available Times')}</p>
          <ActionBlock disabled={!(availableTimesList?.data?.available?.length > 0 || availableTimesList?.data?.not_available?.length > 0)}>
            <BsArrowsAngleExpand onClick={previewChart} />
            <BsDownload className='download-view' onClick={downloadCSV} />
          </ActionBlock>
        </ChartHeaderContainer>
        {
          availableTimesList?.loading ? (
            <Skeleton height={150} />
          ) : (
            (availableTimesList?.data?.available?.length > 0 || availableTimesList?.data?.not_available?.length > 0) ? (
              <BarChartWrapper>
                <Bar data={data} options={options} ref={chartRef} />
              </BarChartWrapper>
            ) : (
              <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )
          )
        }
      </Container>
      <Modal
        width='70%'
        height='80vh'
        padding='30px'
        title={t('AVAILABLE_TIMES', 'Available Times')}
        open={isShowPreview}
        onClose={() => setIsShowPreview(false)}
      >
        <BarChartWrapper>
          <Bar data={data} options={options} />
        </BarChartWrapper>
      </Modal>
    </>
  )
}
