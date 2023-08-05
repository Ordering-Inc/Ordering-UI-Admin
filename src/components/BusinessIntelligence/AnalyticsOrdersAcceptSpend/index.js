import React from 'react'
import { useLanguage } from 'ordering-components-admin'
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
import { convertHMS } from '../../../utils'

export const AnalyticsOrdersAcceptSpend = (props) => {
  const {
    dataList
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      <OrdersAcceptSpendHeader>
        <p>{t('ORDER_ACCEPT_SPEND', 'TIME SPENT TO ACCEPT ORDER')}</p>
      </OrdersAcceptSpendHeader>
      {
        dataList?.loading ? (
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
          dataList?.data ? (
            <OrdersAcceptSpendContent>
              <TimeContentWrapper>
                <h1>{dataList?.data && convertHMS(dataList?.data * 1)}</h1>
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
