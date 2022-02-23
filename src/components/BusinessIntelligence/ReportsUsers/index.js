import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  AdvancedReports as AdvancedReportsController
} from 'ordering-components-admin'
import { transparentize } from 'polished'
import 'chartjs-adapter-moment'
import { Line } from 'react-chartjs-2'
import Skeleton from 'react-loading-skeleton'
import { Download } from 'react-bootstrap-icons'
import { Modal } from '../../Shared'
import {
  ReportsUsersContainer,
  Title,
  ButtonActionList,
  CalendarWrapper,
  BrandBusinessWrapper,
  ChartBlockWrapper,
  ChartTitleBlock,
  ChartWrapper,
  EmptyContent
} from './styles'
import { Button } from '../../../styles'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { ReportsAppIdFilter } from '../ReportsAppIdFilter'

const ReportsUsersUI = (props) => {
  const {
    reportData,
    filterList,
    handleChangeFilterList
  } = props

  const [, t] = useLanguage()
  const [dataOptions, setDataOptions] = useState(null)
  const [isAppIdFilter, setIsAppIdFilter] = useState(false)

  const generateColor = () => {
    const colorList = ['#2C7BE5', '#52C9FD', '#FFD233', '#EB5F79', '#2ED690']
    return colorList[Math.round(Math.random() * (colorList.length - 1))]
  }

  const generateData = () => {
    let values = []
    if (reportData?.content?.dataset?.dataset?.length > 0) {
      values = reportData?.content?.dataset?.dataset?.map((item, index) => {
        const list = []
        if (item?.data?.isArray) {
          item?.data && item.data.forEach(value => {
            list.push(value.y)
          })
        } else {
          Object.keys(item.data).forEach(key => {
            list.push(item.data[key].y)
          })
        }
        const bgColor = index === 0 ? '#2C7BE5' : generateColor()
        return {
          label: item.label,
          data: [...list],
          fill: true,
          backgroundColor: transparentize(0.9, bgColor),
          borderColor: bgColor,
          tension: 0.4,
          borderWidth: 3
        }
      })
    }
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
        display: false
      }
    },
    pointRadius: 0
  }

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const downloadCSV = () => {
    if (reportData?.content?.dataset?.dataset[0]?.data?.length > 0) {
      let csv = `${t('TIME', 'Time')}, ${t('USERS', 'Users')}\n`
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
      downloadLink.download = `registers_users_${fileSuffix}.csv`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  useEffect(() => {
    if (reportData?.content?.dataset?.x?.labels.length > 0) {
      const defaultData = {
        labels: reportData?.content?.dataset?.x?.labels,
        datasets: generateData()
      }
      setDataOptions(defaultData)
    }
  }, [reportData?.content])

  useEffect(() => {
    if (reportData?.loading) setDataOptions(null)
  }, [reportData?.loading])

  return (
    <ReportsUsersContainer>
      <Title>{t('REGISTER_USERS', 'Register users')}</Title>
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
        <ChartTitleBlock active={reportData?.content?.dataset?.dataset[0]?.data?.length > 0}>
          <h2>{t('REGISTER_USERS', 'Register users')}</h2>
          <Download onClick={() => downloadCSV()} />
        </ChartTitleBlock>
        <ChartWrapper>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            dataOptions ? (
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
        title={t('APP_ID', 'App id')}
        open={isAppIdFilter}
        onClose={() => setIsAppIdFilter(false)}
      >
        <ReportsAppIdFilter
          {...props}
          onClose={() => setIsAppIdFilter(false)}
        />
      </Modal>
    </ReportsUsersContainer>
  )
}

export const ReportsUsers = (props) => {
  const reportsUsersProps = {
    ...props,
    UIComponent: ReportsUsersUI,
    endpoint: 'users_v2'
  }
  return <AdvancedReportsController {...reportsUsersProps} />
}
