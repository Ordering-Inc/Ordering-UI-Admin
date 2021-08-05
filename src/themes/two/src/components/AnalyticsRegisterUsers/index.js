import React, { useRef, useState } from 'react'
import {
  Container,
  RegisterUserChartWrapper,
  RegisterUsersHeader,
  ActionBlock,
  EmptyContent
} from './styles'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { Line } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { Modal } from '../Modal'

export const AnalyticsRegisterUsers = (props) => {
  const {
    registerUsersList
  } = props

  const [, t] = useLanguage()
  const chartRef = useRef(null)
  const [isShowPreview, setIsShowPreview] = useState(false)

  const generateLabels = () => {
    const labels = []
    for (const label of registerUsersList?.data) {
      labels.push(moment(label.time).format('LT'))
    }
    return labels
  }

  const generateData = () => {
    const values = []
    for (const label of registerUsersList?.data) {
      values.push(label.users)
    }
    return values
  }

  const downloadImage = () => {
    if (!chartRef?.current) return
    const a = document.createElement('a')
    a.href = chartRef?.current?.toBase64Image()
    a.download = `${t('REGISTER_USERS', 'Register Users')}.png`
    // Trigger the download
    a.click()
  }

  const defaultData = {
    labels: generateLabels(),
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
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
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

  return (
    <>
      <Container>
        <RegisterUsersHeader>
          <p>{t('REGISTER_USERS', 'Register Users')}</p>
          <ActionBlock>
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
