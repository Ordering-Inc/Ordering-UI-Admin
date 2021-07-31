import React from 'react'
import {
  Container,
  RegisterUserChartWrapper,
  RegisterUsersHeader,
  ActionBlock
} from './styles'
import BsArrowsAngleExpand from '@meronex/icons/bs/BsArrowsAngleExpand'
import BsDownload from '@meronex/icons/bs/BsDownload'
import { AnalyticsRegisterUsers as AnalyticsRegisterUsersController } from './naked'
import { Line } from 'react-chartjs-2'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

const AnalyticsRegisterUsersUI = (props) => {
  const {
    registerUsersList
  } = props

  const [, t] = useLanguage()

  const generateLabels = () => {
    const labels = []
    for (const label of registerUsersList?.users) {
      labels.push(moment(label.time).format('LT'))
    }
    return labels
  }

  const generateData = () => {
    const values = []
    for (const label of registerUsersList?.users) {
      values.push(label.users)
    }
    return values
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

  return (
    <Container>
      <RegisterUsersHeader>
        {
          registerUsersList?.loading ? (
            <Skeleton width={50} />
          ) : (
            <p>{t('REGISTER_USERS', 'Register Users')}</p>
          )
        }
        <ActionBlock>
          {registerUsersList?.loading ? <Skeleton width={20} height={20} style={{ marginLeft: '5px', marginRight: '5px' }} /> : <BsArrowsAngleExpand />}
          {registerUsersList?.loading ? <Skeleton width={20} height={20} /> : <BsDownload className='download-view' />}
        </ActionBlock>
      </RegisterUsersHeader>
      <RegisterUserChartWrapper>
        {
          registerUsersList?.loading ? (
            <Skeleton height={150} />
          ) : (
            <Line data={defaultData} options={options} />
          )
        }
      </RegisterUserChartWrapper>
    </Container>
  )
}

export const AnalyticsRegisterUsers = (props) => {
  const analyticsRegisterUsersProps = {
    ...props,
    UIComponent: AnalyticsRegisterUsersUI
  }
  return (
    <AnalyticsRegisterUsersController {...analyticsRegisterUsersProps} />
  )
}
