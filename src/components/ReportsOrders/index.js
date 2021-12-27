import React, { useEffect, useState } from 'react'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import 'chartjs-adapter-moment'
import { Line } from 'react-chartjs-2'
import {
  useLanguage,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
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
import { lighten } from 'polished'

const ReportsOrdersUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [dataOptions, setDataOptions] = useState([])
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)

  const generateData = () => {
    let values = []
    if (reportData?.content?.dataset?.dataset?.length > 0) {
      values = reportData?.content?.dataset?.dataset?.map((item, index) => {
        const list = []
        if (item?.data?.length > 0) {
          for (const value of item?.data) {
            list.push(value.y)
          }
        }
        return {
          label: item.label,
          data: list,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: lighten(index / 10, '#2C7BE5'),
          tension: 0.4,
          borderWidth: 3
        }
      })
    }
    return values
  }

  const generateLabel = () => {
    const values = []
    reportData.content.dataset.dataset[0].data.forEach(data => {
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
    if (reportData?.content?.dataset?.dataset[0]?.data && reportData?.content?.dataset?.dataset[0]?.data?.length > 0) {
      let csv = `${t('TIME', 'Time')}, ${t('ORDERS', 'Orders')}\n`
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
      downloadLink.download = `orders_${fileSuffix}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  useEffect(() => {
    if (reportData?.content?.dataset?.dataset[0]?.data && reportData?.content?.dataset?.dataset[0]?.data?.length > 0) {
      const defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      }
      setDataOptions(defaultData)
    }
  }, [reportData?.content])

  return (
    <ReportsOrdersContainer>
      <Title>{t('ORDERS', 'Orders')}</Title>
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
        <ChartTitleBlock active={reportData?.content?.dataset?.dataset[0]?.data?.length > 0}>
          <h2>{t('ORDERS', 'Orders')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            reportData?.content?.dataset?.dataset[0]?.data?.length > 0 ? (
              <Line data={dataOptions} options={options} />
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

export const ReportsOrders = (props) => {
  const reportOrdersProps = {
    ...props,
    UIComponent: ReportsOrdersUI,
    endpoint: 'orders_v2'
  }
  return <AdvancedReportsController {...reportOrdersProps} />
}
