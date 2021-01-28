import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'

import {
  OrderStatusFilterBarContainer,
  OrderStatusFilterInner,
  OrderStautsFilterItemContent,
  OrderStatusFilterItem
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

  const theme = useTheme()
  const [, t] = useLanguage()
  return (
    <OrderStatusFilterBarContainer className='order-status-filterbar'>
      <OrderStatusFilterInner>
        <OrderStautsFilterItemContent>
          <OrderStatusFilterItem
            active={selectedOrderStatus === 'pending'}
            onClick={() => changeSelectedOrderStatus('pending')}
          >
            <img src={theme?.images?.orderStatus?.pending} />
            <span>{t('PENDING', 'pending')}</span>
          </OrderStatusFilterItem>

          <OrderStatusFilterItem
            active={selectedOrderStatus === 'inProgress'}
            onClick={() => changeSelectedOrderStatus('inProgress')}
          >
            <img src={theme?.images?.orderStatus?.inProgress} />
            <span>{t('IN_PROGRESS', 'in progress')}</span>
          </OrderStatusFilterItem>

          <OrderStatusFilterItem
            active={selectedOrderStatus === 'completed'}
            onClick={() => changeSelectedOrderStatus('completed')}
          >
            <img src={theme?.images?.orderStatus?.completed} />
            <span>{t('COMPLETED', 'completed')}</span>
          </OrderStatusFilterItem>

          <OrderStatusFilterItem
            active={selectedOrderStatus === 'cancelled'}
            onClick={() => changeSelectedOrderStatus('cancelled')}
          >
            <img src={theme?.images?.orderStatus?.cancelled} />
            <span>{t('CANCELLED', 'cancelled')}</span>
          </OrderStatusFilterItem>
        </OrderStautsFilterItemContent>
      </OrderStatusFilterInner>
    </OrderStatusFilterBarContainer>
  )
}
