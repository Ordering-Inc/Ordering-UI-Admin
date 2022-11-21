import React, { useState } from 'react'
import {
  useLanguage,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
import { Download } from 'react-bootstrap-icons'
import { Bar } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { Modal } from '../../Shared'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { CountryFilter } from '../CountryFilter'

import {
  ReportsContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  ChartBlockWrapper,
  ChartTitleBlock,
  ChartWrapper,
  EmptyContent,
  ChartListWrapper
} from './styles'

const ReportsSaleAndCategoryUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData,
    reportData1
  } = props

  const [, t] = useLanguage()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [openCountryFilter, setOpenCountryFilter] = useState(true)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const downloadCSV = (isProduct) => {
    if (!reportData?.content?.dataset?.dataset?.data) return
    let csv = `${isProduct ? t('PRODUCTS', 'Products') : t('CATEGORIES', 'Categories')}, ${t('ORDERS', 'Orders')}\n`
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
    downloadLink.download = `top_${isProduct ? 'selling' : 'cagegory'}_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const generateData = (chartData) => {
    const datasets = []
    if (chartData?.content?.dataset?.dataset?.data) {
      for (const data of chartData?.content?.dataset?.dataset?.data) {
        datasets.push(data.x)
      }
    }
    return datasets
  }

  const generateLabels = (chartData) => {
    const labels = []
    if (chartData?.content?.dataset?.dataset?.data) {
      for (const label of chartData?.content?.dataset?.dataset?.data) {
        labels.push(label.y)
      }
    }
    return labels
  }

  const data = {
    labels: generateLabels(reportData),
    datasets: [
      {
        label: t('ORDERS', 'Orders'),
        data: generateData(reportData),
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

  const data1 = {
    labels: generateLabels(reportData1),
    datasets: [
      {
        label: t('ORDERS', 'Orders'),
        data: generateData(reportData1),
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
    <ReportsContainer>
      <Title>{t('TOP_SELLING_AND_CATEOGRY', 'Top selling and category')}</Title>
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
          <Button
            onClick={() => setOpenCountryFilter(true)}
          >
            {t('COUNTRY', 'Country')}
          </Button>
        </BrandBusinessWrapper>
        <CalendarWrapper>
          <AnalyticsCalendar
            handleChangeDate={handleChangeDate}
            defaultValue={filterList}
          />
        </CalendarWrapper>
      </ButtonActionList>
      <ChartListWrapper>
        <ChartBlockWrapper>
          <ChartTitleBlock active={reportData?.content?.dataset?.dataset?.data?.length > 0}>
            <h2>{t('TOP_SELLINGS', 'Top sellings')}</h2>
            <Download onClick={() => downloadCSV(true)} />
          </ChartTitleBlock>
          <ChartWrapper>
            {reportData?.loading ? (
              <Skeleton height={320} />
            ) : (
              reportData?.content?.dataset?.dataset?.data?.length > 0 ? (
                <Bar data={data} options={options} />
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )
            )}
          </ChartWrapper>
        </ChartBlockWrapper>

        <ChartBlockWrapper>
          <ChartTitleBlock active={reportData1?.content?.dataset?.dataset?.data?.length > 0}>
            <h2>{t('TOP_CATEGORIES', 'Top categories')}</h2>
            <Download onClick={() => downloadCSV()} />
          </ChartTitleBlock>
          <ChartWrapper>
            {reportData1?.loading ? (
              <Skeleton height={320} />
            ) : (
              reportData1?.content?.dataset?.dataset?.data?.length > 0 ? (
                <Bar data={data1} options={options} />
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )
            )}
          </ChartWrapper>
        </ChartBlockWrapper>
      </ChartListWrapper>
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
      <Modal
        width='450px'
        height='650px'
        padding='25px'
        open={openCountryFilter}
        onClose={() => setOpenCountryFilter(false)}
      >
        <CountryFilter
          {...props}
          onClose={() => setOpenCountryFilter(false)}
        />
      </Modal>
    </ReportsContainer>
  )
}

export const ReportsSaleAndCategory = (props) => {
  const reportsSaleAndCategoryProps = {
    ...props,
    UIComponent: ReportsSaleAndCategoryUI,
    endpoint: 'top_selling_v2',
    endpoint1: 'top_categories_v2'
  }
  return <AdvancedReportsController {...reportsSaleAndCategoryProps} />
}
