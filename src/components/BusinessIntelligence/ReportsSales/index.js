import React, { useEffect, useState } from 'react'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import 'chartjs-adapter-moment'
import { Line } from 'react-chartjs-2'
import {
  useLanguage,
  useUtils,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
import { Button } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { Download } from 'react-bootstrap-icons'
import { CountryFilter } from '../CountryFilter'

import {
  ReportsOrdersContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  ChartBlockWrapper,
  ChartTitleBlock,
  ChartWrapper,
  EmptyContent,
  ChartFooterContainer
} from './styles'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { Modal } from '../../Shared'

const ReportsSalesUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [dataOptions, setDataOptions] = useState(null)
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [openCountryFilter, setOpenCountryFilter] = useState(true)

  const generateData = () => {
    const list = []
    const newData = []
    if (reportData?.content?.dataset?.dataset?.data?.length > 0) {
      for (const value of reportData?.content?.dataset?.dataset?.data) {
        list.push(value.y)
      }
    }
    const values = {
      label: reportData?.content?.dataset?.dataset.label,
      data: list,
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }
    newData.push(values)
    return newData
  }

  const generateLabel = () => {
    const values = []
    reportData?.content?.dataset?.dataset?.data && reportData.content.dataset.dataset.data.forEach(data => {
      values.push(data.x)
    })
    return values
  }

  const options = {
    scales: {
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
        display: true
      }
    },
    pointRadius: 0
  }

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const downloadCSV = () => {
    if (reportData?.content?.dataset?.dataset?.data && reportData?.content?.dataset?.dataset?.data?.length > 0) {
      let csv = `${t('TIME', 'Time')}, ${t('SALES', 'Sales')}\n`
      for (const row of reportData?.content?.dataset?.dataset?.data) {
        csv += row.x + ','
        csv += `${row.y},`
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
  }

  const TotalSales = () => {
    let sales = 0
    reportData?.content?.dataset?.dataset?.data && reportData.content.dataset.dataset.data.forEach(data => {
      sales += data.y
    })
    return parsePrice(sales.toFixed(2), { separator: '.' })
  }

  useEffect(() => {
    if (reportData?.content?.dataset?.dataset?.data && reportData?.content?.dataset?.dataset?.data?.length > 0) {
      const defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      }
      setDataOptions(defaultData)
    }
  }, [reportData?.content])

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
      <ChartBlockWrapper>
        <ChartTitleBlock active={reportData?.content?.dataset?.dataset?.data?.length > 0}>
          <h2>{t('SALES', 'Sales')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            (reportData?.content?.dataset?.dataset?.data?.length > 0 && dataOptions) ? (
              <Line data={dataOptions} options={options} />
            ) : (
              <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
            )
          )}
        </ChartWrapper>
        <ChartFooterContainer>
          <h2>{reportData?.loading ? <Skeleton width={30} /> : <TotalSales />}</h2>
          {reportData?.loading ? (
            <Skeleton width={80} />
          ) : (
            <p>{t('SALES', 'Sales')} {t('TOTALS', 'totals')}</p>
          )}
        </ChartFooterContainer>
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
    </ReportsOrdersContainer>
  )
}

export const ReportsSales = (props) => {
  const reportOrdersProps = {
    ...props,
    UIComponent: ReportsSalesUI,
    endpoint: 'sales_v2'
  }
  return <AdvancedReportsController {...reportOrdersProps} />
}
