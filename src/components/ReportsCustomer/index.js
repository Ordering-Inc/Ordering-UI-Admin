import React, { useState } from 'react'
import {
  useLanguage,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
import { Download } from 'react-bootstrap-icons'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'

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
import { Button } from '../../styles/Buttons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Modal } from '../Modal'
import { ReportsAppIdFilter } from '../ReportsAppIdFilter'

const ReportsCustomerUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [isAppIdFilter, setIsAppIdFilter] = useState(false)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const downloadCSV = () => {
    if (!reportData?.content?.dataset?.dataset?.data) return
    let csv = `${t('CATEGORY', 'Category')}, ${t('MARK', 'Mark')}\n`
    for (const row of reportData?.content?.dataset?.dataset[0]?.data) {
      csv += row.x + ','
      csv += `${row.y},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `customer_satisfaction_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const generateData = () => {
    const datasets = []
    if (reportData?.content?.dataset?.dataset[0]?.data) {
      for (const data of reportData?.content?.dataset?.dataset[0]?.data) {
        datasets.push(data.y)
      }
    }
    return datasets
  }

  const generateLabels = () => {
    const labels = []
    if (reportData?.content?.dataset?.dataset[0]?.data) {
      for (const label of reportData?.content?.dataset?.dataset[0]?.data) {
        labels.push(label.x)
      }
    }
    return labels
  }

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: reportData?.content?.dataset?.dataset[0]?.label,
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
      }
    },
    pointRadius: 0
  }

  return (
    <ReportsTopDriversContainer>
      <Title>{t('CUSTOMER_SATISFACTION', 'Customer safisfaction')}</Title>
      <ButtonActionList>
        <BrandBusinessWrapper>
          <Button
            onClick={() => setIsAppIdFilter(true)}
          >
            {t('APP_ID', 'App id')} ({filterList?.app_ids ? filterList?.app_ids.length : t('ALL', 'All')})
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
          <h2>{t('CUSTOMER_SATISFACTION', 'Customer safisfaction')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            reportData?.content?.dataset?.dataset[0]?.data?.length > 0 ? (
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
        title={t('APP_ID', 'App id')}
        open={isAppIdFilter}
        onClose={() => setIsAppIdFilter(false)}
      >
        <ReportsAppIdFilter
          {...props}
          onClose={() => setIsAppIdFilter(false)}
        />
      </Modal>
    </ReportsTopDriversContainer>
  )
}

export const ReportsCustomer = (props) => {
  const reportsCustomerProps = {
    ...props,
    UIComponent: ReportsCustomerUI,
    endpoint: 'customer_satisfaction_v2'
  }
  return <AdvancedReportsController {...reportsCustomerProps} />
}
