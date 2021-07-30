import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'

import {
  OrderStatusFilterContainer,
  InnerContainer,
  Tab
} from './styles'

export const OrderStatusFilterBar = (props) => {
  const {
    selectedOrderStatus,
    changeOrderStatus
  } = props

  const changeSelectedOrderStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    changeOrderStatus(orderStatus)
  }

  const [, t] = useLanguage()
  return (
    <>
      <OrderStatusFilterContainer className='order_status_filter'>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='orderStatus'>
            <Tab
              active={selectedOrderStatus === 'pending'}
              onClick={() => changeSelectedOrderStatus('pending')}
            >
              {t('PENDING', 'pending')}
            </Tab>

            <Tab
              active={selectedOrderStatus === 'inProgress'}
              onClick={() => changeSelectedOrderStatus('inProgress')}
            >
              {t('IN_PROGRESS', 'in progress')}
            </Tab>

            <Tab
              active={selectedOrderStatus === 'completed'}
              onClick={() => changeSelectedOrderStatus('completed')}
            >
              {t('COMPLETED', 'completed')}
            </Tab>

            <Tab
              active={selectedOrderStatus === 'cancelled'}
              onClick={() => changeSelectedOrderStatus('cancelled')}
            >
              {t('CANCELLED', 'cancelled')}
            </Tab>
          </AutoScroll>
        </InnerContainer>
      </OrderStatusFilterContainer>
    </>
  )
}
