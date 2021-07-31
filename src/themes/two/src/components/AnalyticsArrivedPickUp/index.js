import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsArrivedPickUp as AnalyticsArrivedPickUpController } from './naked'
import GiAlarmClock from '@meronex/icons/gi/GiAlarmClock'
import {
  Container,
  OrdersAcceptSpendHeader,
  OrdersAcceptSpendContent,
  TimeContentWrapper,
  ReviewContentWrapper,
  ReviewBlock,
  EmptyContent
} from './styles'
import Skeleton from 'react-loading-skeleton'

const AnalyticsArrivedPickUpUI = (props) => {
  const {
    arrivedPickUpList
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      <OrdersAcceptSpendHeader>
        <p>{t('TIME_WAITING_ON_READY_FOR_PICKUP', 'TIME SPENT WAITING ON READY FOR PICKUP')}</p>
      </OrdersAcceptSpendHeader>
      {
        arrivedPickUpList?.loading ? (
          <OrdersAcceptSpendContent>
            <TimeContentWrapper>
              <Skeleton width={70} height={40} />
              <Skeleton width={70} height={20} />
            </TimeContentWrapper>
            <ReviewContentWrapper>
              <Skeleton width={80} height={80} />
              <Skeleton width={80} height={20} />
            </ReviewContentWrapper>
          </OrdersAcceptSpendContent>
        ) : (
          arrivedPickUpList?.data ? (
            <OrdersAcceptSpendContent>
              <TimeContentWrapper>
                <h1>{arrivedPickUpList?.data}</h1>
                <p>{t('SECONDS', 'Seconds')}</p>
              </TimeContentWrapper>
              <ReviewContentWrapper>
                <ReviewBlock>
                  <GiAlarmClock />
                </ReviewBlock>
                <p>{t('REGULAR', 'Regular')}</p>
              </ReviewContentWrapper>
            </OrdersAcceptSpendContent>
          ) : (
            <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )
        )
      }
    </Container>
  )
}

export const AnalyticsArrivedPickUp = (props) => {
  const analyticsArrivedPickUpProps = {
    ...props,
    UIComponent: AnalyticsArrivedPickUpUI
  }

  return (
    <AnalyticsArrivedPickUpController {...analyticsArrivedPickUpProps} />
  )
}
