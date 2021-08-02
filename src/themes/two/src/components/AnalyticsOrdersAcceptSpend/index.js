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
  ReviewBlock,
  EmptyContent
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
      {
        ordersAcceptSpendList?.loading ? (
          <OrdersAcceptSpendContent>
            <TimeContentWrapper>
              <Skeleton width={70} height={40} />
              <Skeleton width={70} height={20} />
            </TimeContentWrapper>
            <ReviewContentWrapper>
              <Skeleton width={80} height={80} />
              <Skeleton width={60} height={20} />
            </ReviewContentWrapper>
          </OrdersAcceptSpendContent>
        ) : (
          ordersAcceptSpendList?.data ? (
            <OrdersAcceptSpendContent>
              <TimeContentWrapper>
                <h1>{ordersAcceptSpendList?.data && ((parseInt(ordersAcceptSpendList?.data) / 60).toFixed(2))}</h1>
                <p>{t('MINUTES', 'Minutes')}</p>
              </TimeContentWrapper>
              <ReviewContentWrapper>
                <ReviewBlock>
                  <GiAlarmClock />
                </ReviewBlock>
                <p>{t('REGULAR', 'Regular')}</p>
              </ReviewContentWrapper>
            </OrdersAcceptSpendContent>
          ) : (
            <EmptyContent>
              {t('NO_DATA', 'No Data')}
            </EmptyContent>
          )
        )
      }

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
