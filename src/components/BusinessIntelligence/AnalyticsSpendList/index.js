import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import GiAlarmClock from '@meronex/icons/gi/GiAlarmClock'
import {
  Container,
  AnalyticsSpendListHeader,
  AnalyticsSpendListContent,
  TimeContentWrapper,
  ReviewContentWrapper,
  ReviewBlock,
  EmptyContent
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { convertHMS } from '../../../utils'
import { GraphLoadingMessage } from '../GraphLoadingMessage'

export const AnalyticsSpendList = (props) => {
  const {
    dataList,
    title
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      <AnalyticsSpendListHeader>
        <p>{title}</p>
      </AnalyticsSpendListHeader>
      {
        dataList?.loading ? (
          <AnalyticsSpendListContent>
            <TimeContentWrapper>
              <Skeleton width={70} height={40} />
              <Skeleton width={70} height={20} />
            </TimeContentWrapper>
            <ReviewContentWrapper>
              <Skeleton width={80} height={80} />
              <Skeleton width={80} height={20} />
            </ReviewContentWrapper>
            <GraphLoadingMessage />
          </AnalyticsSpendListContent>
        ) : (
          dataList?.data ? (
            <AnalyticsSpendListContent>
              <TimeContentWrapper>
                <h1>{convertHMS(dataList?.data * 1)}</h1>
              </TimeContentWrapper>
              <ReviewContentWrapper>
                <ReviewBlock>
                  <GiAlarmClock />
                </ReviewBlock>
                <p>{t('REGULAR', 'Regular')}</p>
              </ReviewContentWrapper>
            </AnalyticsSpendListContent>
          ) : (
            <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
          )
        )
      }
    </Container>
  )
}
