import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
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

export const AnalyticsSpendList = (props) => {
  const {
    dataList,
    title
  } = props

  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()

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
          </AnalyticsSpendListContent>
        ) : (
          dataList?.data ? (
            <AnalyticsSpendListContent>
              <TimeContentWrapper>
                <h1>{parseNumber((dataList?.data * 1), { separator: '.' })}</h1>
                <p>{t('SECONDS', 'Seconds')}</p>
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
