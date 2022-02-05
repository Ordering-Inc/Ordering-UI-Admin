import React, { useRef, useState, useEffect } from 'react'
import {
  Container,
  RegisterUserChartWrapper,
  RegisterUsersHeader,
  ActionBlock,
  EmptyContent
} from './styles'
import 'chartjs-adapter-moment'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Line } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { Modal } from '../../Shared'

export const AnalyticsRegisterUsers = (props) => {
  const {
    registerUsersList,
    filterList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [timeAxes, setTimeAxes] = useState([])

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
      const index = registerUsersList?.data?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: registerUsersList?.data[index]?.time, y: registerUsersList?.data[index]?.users })
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
  const downloadImage = () => {
    let csv = `${t('TIME', 'Time')}, ${t('USERS', 'Users')}\n`
    for (const row of registerUsersList?.data) {
      csv += row.time + ','
      csv += `${row.users},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `registers_users_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const defaultData = {
    datasets: [
      {
        data: generateData(),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#2C7BE5',
        tension: 0.4,
        borderWidth: 3
      }
    ]
  }

  const options = {
    scales: {
      x: getTimeAxes(filterList?.lapse),
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

  const previewChart = () => {
    if (registerUsersList?.data?.length > 0) setIsShowPreview(true)
  }

  useEffect(() => {
    updateTimeAxes()
  }, [filterList])

  return (
    <>
      <Container>
        <RegisterUsersHeader>
          <p>{t('REGISTER_USERS', 'Register Users')}</p>
          <ActionBlock disabled={registerUsersList?.data?.length === 0}>
            <BsArrowsAngleExpand onClick={previewChart} />
            <BsDownload className='download-view' onClick={downloadImage} />
          </ActionBlock>
        </RegisterUsersHeader>
        <RegisterUserChartWrapper>
          {
            registerUsersList?.loading ? (
              <Skeleton height={150} />
            ) : (
              registerUsersList?.data?.length > 0 ? (
                <Line data={defaultData} options={options} ref={chartRef} />
              ) : <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )
          }
        </RegisterUserChartWrapper>
      </Container>
      <Modal
        width='70%'
        height='80vh'
        padding='30px'
        title={t('REGISTER_USERS', 'Register Users')}
        open={isShowPreview}
        onClose={() => setIsShowPreview(false)}
      >
        <RegisterUserChartWrapper>
          <Line data={defaultData} options={options} />
        </RegisterUserChartWrapper>
      </Modal>
    </>
  )
}
