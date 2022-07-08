import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'

import {
  OrderStatusFilterContainer,
  Tab
} from './styles'

export const OrderStatusFilterBar = (props) => {
  const {
    selectedOrderStatus,
    changeOrderStatus,
    numberOfOrdersByStatus
  } = props

  const changeSelectedOrderStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    changeOrderStatus(orderStatus)
  }

  const [, t] = useLanguage()
  return (
    <>
      <OrderStatusFilterContainer className='order_status_filter'>
        <DragScroll>
          <Tab
            active={selectedOrderStatus === 'pending'}
            onClick={() => changeSelectedOrderStatus('pending')}
          >
            {t('PENDING', 'pending')}
            {numberOfOrdersByStatus && (
              <span>({numberOfOrdersByStatus?.pending ?? 0})</span>
            )}
          </Tab>

          <Tab
            active={selectedOrderStatus === 'inProgress'}
            onClick={() => changeSelectedOrderStatus('inProgress')}
          >
            {t('IN_PROGRESS', 'in progress')}
            {numberOfOrdersByStatus && (
              <span>({numberOfOrdersByStatus?.inProgress ?? 0})</span>
            )}
          </Tab>

          <Tab
            active={selectedOrderStatus === 'completed'}
            onClick={() => changeSelectedOrderStatus('completed')}
          >
            {t('COMPLETED', 'completed')}
            {numberOfOrdersByStatus && (
              <span>({numberOfOrdersByStatus?.completed ?? 0})</span>
            )}
          </Tab>

          <Tab
            active={selectedOrderStatus === 'cancelled'}
            onClick={() => changeSelectedOrderStatus('cancelled')}
          >
            {t('CANCELLED', 'cancelled')}
            {numberOfOrdersByStatus && (
              <span>({numberOfOrdersByStatus?.cancelled ?? 0})</span>
            )}
          </Tab>
        </DragScroll>
      </OrderStatusFilterContainer>
    </>
  )
}
