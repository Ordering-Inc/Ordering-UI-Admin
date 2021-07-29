import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'

import {
  OrderStatusFilterContainer,
  InnerContainer,
  Tab
} from './styles'

export const AnalyticsStatusFilterBar = (props) => {
  const {
    selectedAnalyticsStatus,
    changeAnalyticsStatus
  } = props

  const changeSelectedAnalyticsStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    changeAnalyticsStatus(orderStatus)
  }

  const [, t] = useLanguage()
  return (
    <>
      <OrderStatusFilterContainer>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='orderStatus'>
            <Tab
              active={selectedAnalyticsStatus === 'today'}
              onClick={() => changeSelectedAnalyticsStatus('today')}
            >
              {t('TODAY', 'Today')}
            </Tab>

            <Tab
              active={selectedAnalyticsStatus === 'yesterday'}
              onClick={() => changeSelectedAnalyticsStatus('yesterday')}
            >
              {t('YESTERDAY', 'Yesterday')}
            </Tab>

            <Tab
              active={selectedAnalyticsStatus === 'last_7_days'}
              onClick={() => changeSelectedAnalyticsStatus('last_7_days')}
            >
              {t('LAST_7_DAYS', 'Last 7 days')}
            </Tab>

            <Tab
              active={selectedAnalyticsStatus === 'last_30_days'}
              onClick={() => changeSelectedAnalyticsStatus('last_30_days')}
            >
              {t('LAST_30_DAYS', 'Last 30 days')}
            </Tab>
          </AutoScroll>
        </InnerContainer>
      </OrderStatusFilterContainer>
    </>
  )
}
