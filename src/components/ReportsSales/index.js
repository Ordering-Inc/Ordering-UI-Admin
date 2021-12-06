import React, { useEffect, useState } from 'react'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import 'chartjs-adapter-moment'
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import {
  useLanguage
} from 'ordering-components-admin'
import { ReportsOrders as ReportsOrdersController } from './naked'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Download } from 'react-bootstrap-icons'

import {
  ReportsOrdersContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  ChartBlockWrapper,
  ChartTitleBlock,
  ChartWrapper,
  EmptyContent
} from './styles'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { Modal } from '../Modal'

const ReportsSalesUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [timeAxes, setTimeAxes] = useState([])

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const getTimeAxes = () => {
    const lapse = (filterList?.from === '' && filterList?.to === '') ? 'today' : `${filterList?.from},${filterList?.to}`
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
        xAxes.time.unit = 'hour'
        xAxes.time.min = moment().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 00:00:00')
        xAxes.time.max = moment().subtract(lapse === 'today' ? 0 : 1, 'days').format('YYYY-MM-DD 24:00:00')
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
    var unitdate = getTimeAxes().time.unit
    var maxdate = moment(getTimeAxes().time.max).endOf(unitdate)
    var mindate = moment(getTimeAxes().time.min).startOf(unitdate)
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
      const index = reportData?.content?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: reportData?.content[index]?.time, y: reportData?.content[index]?.sales })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const defaultData = {
    datasets: [
      {
        label: t('SALES', 'Sales'),
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
    maintainAspectRatio: false,
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

  const downloadCSV = () => {
    let csv = `${t('TIME', 'Time')}, ${t('SALES', 'Sales')}\n`
    for (const row of reportData?.content) {
      csv += `${row.time},`
      csv += `${row.sales},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `sales_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  useEffect(() => {
    updateTimeAxes()
  }, [filterList.from])

  return (
    <ReportsOrdersContainer>
      <Title>{t('SALES', 'Sales')}</Title>
      <ButtonActionList>
        <BrandBusinessWrapper>
          <Button
            onClick={() => setIsBrandFilter(true)}
          >
            {t('BRAND', 'Brand')} ({filterList?.franchises_id ? filterList?.franchises_id?.length : t('ALL', 'All')})
          </Button>
          <Button
            onClick={() => setIsBusinessFilter(true)}
          >
            {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
          </Button>
        </BrandBusinessWrapper>
        <CalendarWrapper>
          <AnalyticsCalendar
            handleChangeDate={handleChangeDate}
            defaultValue={filterList}
          />
        </CalendarWrapper>
      </ButtonActionList>
      <ChartBlockWrapper>
        <ChartTitleBlock active={reportData?.content?.length > 0}>
          <h2>{t('SALES', 'Sales')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            reportData?.content?.length > 0 ? (
              <Line data={defaultData} options={options} />
            ) : (
              <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )
          )}
        </ChartWrapper>
      </ChartBlockWrapper>
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('BUSINESSES', 'Businesses')}
        open={isBusinessFilter}
        onClose={() => setIsBusinessFilter(false)}
      >
        <AnalyticsBusinessFilter
          {...props}
          onClose={() => setIsBusinessFilter(false)}
          isFranchise
        />
      </Modal>
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('BRAND', 'Brand')}
        open={isBrandFilter}
        onClose={() => setIsBrandFilter(false)}
      >
        <ReportsBrandFilter
          {...props} onClose={() => setIsBrandFilter(false)}
        />
      </Modal>
    </ReportsOrdersContainer>
  )
}

export const ReportsSales = (props) => {
  const reportsOrdersProps = {
    ...props,
    UIComponent: ReportsSalesUI,
    endpoint: 'sales'
  }
  return <ReportsOrdersController {...reportsOrdersProps} />
}
