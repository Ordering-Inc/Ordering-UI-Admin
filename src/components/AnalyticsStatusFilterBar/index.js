import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../DragScroll'

import {
  OrderStatusFilterContainer,
  Tab
} from './styles'

export const AnalyticsStatusFilterBar = (props) => {
  const {
    filterList,
    handleChangeFilterList
  } = props

  const changeSelectedAnalyticsStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    handleChangeFilterList && handleChangeFilterList({ ...filterList, lapse: orderStatus })
  }

  const [, t] = useLanguage()
  return (
    <>
      <OrderStatusFilterContainer>
        <DragScroll>
          <Tab
            active={filterList?.lapse === 'today'}
            onClick={() => changeSelectedAnalyticsStatus('today')}
          >
            {t('TODAY', 'Today')}
          </Tab>

          <Tab
            active={filterList?.lapse === 'yesterday'}
            onClick={() => changeSelectedAnalyticsStatus('yesterday')}
          >
            {t('YESTERDAY', 'Yesterday')}
          </Tab>

          <Tab
            active={filterList?.lapse === 'last_7_days'}
            onClick={() => changeSelectedAnalyticsStatus('last_7_days')}
          >
            {t('LAST_7_DAYS', 'Last 7 days')}
          </Tab>

          <Tab
            active={filterList?.lapse === 'last_30_days'}
            onClick={() => changeSelectedAnalyticsStatus('last_30_days')}
          >
            {t('LAST_30_DAYS', 'Last 30 days')}
          </Tab>
        </DragScroll>
      </OrderStatusFilterContainer>
    </>
  )
}
