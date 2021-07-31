import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsOrdersAcceptSpend as AnalyticsOrdersAcceptSpendController } from './naked'
import GiAlarmClock from '@meronex/icons/gi/GiAlarmClock'
import {
  Container,
  OrdersAcceptSpendHeader,
  OrdersAcceptSpendContent,
  TimeContentWrapper,
  ReviewContentWrapper,
  ReviewBlock
} from './styles'
import Skeleton from 'react-loading-skeleton'

const AnalyticsOrdersAcceptSpendUI = (props) => {
  const {
    ordersAcceptSpendList
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      <OrdersAcceptSpendHeader>
        <p>{t('TIME_SPENT_TO_ACCEPT_ORDER', 'TIME SPENT TO ACCEPT ORDER')}</p>
      </OrdersAcceptSpendHeader>
      <OrdersAcceptSpendContent>
        <TimeContentWrapper>
          {
            ordersAcceptSpendList?.loading ? <Skeleton width={70} height={40} /> : <h1>{ordersAcceptSpendList?.data}</h1>
          }
          <p>{t('MINUTES', 'Minutes')}</p>
        </TimeContentWrapper>
        <ReviewContentWrapper>
          {
            ordersAcceptSpendList?.loading ? <Skeleton width={80} height={80} /> : (
              <ReviewBlock>
                <GiAlarmClock />
              </ReviewBlock>
            )
          }
          {
            ordersAcceptSpendList?.loading ? <Skeleton width={60} height={20} /> : <p>{t('REGULAR', 'Regular')}</p>
          }
        </ReviewContentWrapper>
      </OrdersAcceptSpendContent>
    </Container>
  )
}

export const AnalyticsOrdersAcceptSpend = (props) => {
  const analyticsOrdersAcceptSpendProps = {
    ...props,
    UIComponent: AnalyticsOrdersAcceptSpendUI
  }

  return (
    <AnalyticsOrdersAcceptSpendController {...analyticsOrdersAcceptSpendProps} />
  )
}
