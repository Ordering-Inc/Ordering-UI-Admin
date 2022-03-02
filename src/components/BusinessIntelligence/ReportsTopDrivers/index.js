import React, { useState } from 'react'
import {
  useLanguage,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
import { Download } from 'react-bootstrap-icons'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import { convertHMS } from '../../../utils'

import {
  ReportsTopDriversContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  ChartBlockWrapper,
  ChartTitleBlock,
  ChartWrapper,
  EmptyContent
} from './styles'
import { Button } from '../../../styles'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../../Shared'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'

const ReportsTopDriversUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)

  const downloadCSV = () => {
    if (!reportData?.content?.dataset?.dataset?.data) return
    let csv = `${t('DRIVER', 'Driver')}, ${t('ORDERS', 'Orders')}\n`
    for (const row of reportData?.content?.dataset?.dataset?.data) {
      csv += row.y + ','
      csv += `${row.x},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `top_orders_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const generateData = () => {
    const datasets = []
    if (reportData?.content?.dataset?.dataset?.data) {
      for (const data of reportData?.content?.dataset?.dataset?.data) {
        datasets.push(data.x)
      }
    }
    return datasets
  }

  const generateLabels = () => {
    const labels = []
    if (reportData?.content?.dataset?.dataset?.data) {
      for (const label of reportData?.content?.dataset?.dataset?.data) {
        labels.push(label.y)
      }
    }
    return labels
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
        display: true
      },
      tooltip: {
        callbacks: {
          footer: (tooltipItem) => {
            let label = ''
            if (reportData?.content?.dataset?.dataset?.data?.length > 0) {
              reportData?.content?.dataset?.dataset?.data && reportData.content.dataset.dataset.data.forEach(item => {
                if (item.y === tooltipItem[0]?.label) label = item?.info[0]?.label
              })
            }
            return label
          },
          beforeFooter: (tooltipItem) => {
            console.log(tooltipItem[0])
            let time = ''
            if (reportData?.content?.dataset?.dataset?.data?.length > 0) {
              reportData?.content?.dataset?.dataset?.data && reportData.content.dataset.dataset.data.forEach(item => {
                if (item.y === tooltipItem[0]?.label) time = convertHMS(item?.info[0]?.value ?? 0)
              })
            }
            return `${t('AVERAGE_DELIVERY_TIME', 'Average delivery time')}: ${time}`
          }
        }
      }
    },
    pointRadius: 0
  }

  return (
    <ReportsTopDriversContainer>
      <Title>{t('TOP_DRIVERS', 'Top drivers')}</Title>
      <ButtonActionList>
        <BrandBusinessWrapper>
          <Button
            onClick={() => setIsDriverGroupFilter(true)}
          >
            {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
          </Button>
          <Button
            onClick={() => setIsDriverFilter(true)}
          >
            {t('DRIVER', 'Driver')} ({filterList?.drivers_ids ? filterList?.drivers_ids.length : t('ALL', 'All')})
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
        <ChartTitleBlock active={reportData?.content?.dataset?.dataset?.data?.length > 0}>
          <h2>{t('TOP_ORDERS', 'Top orders')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            reportData?.content?.dataset?.dataset?.data?.length > 0 ? (
              <Bar data={data} options={options} />
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
        title={t('DRIVER', 'Driver')}
        open={isDriverFilter}
        onClose={() => setIsDriverFilter(false)}
      >
        <ReportsDriverFilter
          {...props}
          onClose={() => setIsDriverFilter(false)}
          isDriverGroup
        />
      </Modal>
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('DRIVER_GROUP', 'Driver group')}
        open={isDriverGroupFilter}
        onClose={() => setIsDriverGroupFilter(false)}
      >
        <ReportsDriverGroupFilter
          {...props} onClose={() => setIsDriverGroupFilter(false)}
        />
      </Modal>
    </ReportsTopDriversContainer>
  )
}

export const ReportsTopDrivers = (props) => {
  const reportsTopDriversProps = {
    ...props,
    UIComponent: ReportsTopDriversUI,
    endpoint: 'drivers_top_orders_v2'
  }
  return <AdvancedReportsController {...reportsTopDriversProps} />
}
