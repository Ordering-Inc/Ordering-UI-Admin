import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'
import { useLocation } from 'react-router-dom'
import { addQueryToUrl } from '../../../utils'

import {
  OrderStatusFilterContainer,
  Tab
} from './styles'

export const OrderStatusFilterBar = (props) => {
  const {
    isUseQuery,
    selectedOrderStatus,
    changeOrderStatus,
    ordersAmountByStatus
  } = props

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const defaultStatus = query.get('status')

  const changeSelectedOrderStatus = (orderStatus) => {
    window.scrollTo(0, 0)
    changeOrderStatus(orderStatus)
    if (isUseQuery) {
      addQueryToUrl({ status: orderStatus })
    }
  }

  useEffect(() => {
    if (!isUseQuery) return
    if (defaultStatus) {
      changeOrderStatus(defaultStatus)
      return
    }
    addQueryToUrl({ status: 'pending' })
  }, [])

  return (
    <>
      <OrderStatusFilterContainer className='order_status_filter'>
        <DragScroll>
          <Tab
            active={selectedOrderStatus === 'pending'}
            onClick={() => changeSelectedOrderStatus('pending')}
          >
            {t('PENDING', 'pending')}
            <span>(
              {!isNaN(ordersAmountByStatus?.pending) && ordersAmountByStatus?.pending !== null ? (
                ordersAmountByStatus?.pending ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
              )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'inProgress'}
            onClick={() => changeSelectedOrderStatus('inProgress')}
          >
            {t('IN_PROGRESS', 'in progress')}
            <span>(
              {!isNaN(ordersAmountByStatus?.inProgress) && ordersAmountByStatus?.inProgress !== null ? (
                ordersAmountByStatus?.inProgress ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
            )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'completed'}
            onClick={() => changeSelectedOrderStatus('completed')}
          >
            {t('COMPLETED', 'completed')}
            <span>(
              {!isNaN(ordersAmountByStatus?.completed) && ordersAmountByStatus?.completed !== null ? (
                ordersAmountByStatus?.completed ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
            )
            </span>
          </Tab>

          <Tab
            active={selectedOrderStatus === 'cancelled'}
            onClick={() => changeSelectedOrderStatus('cancelled')}
          >
            {t('CANCELLED', 'cancelled')}
            <span>(
              {!isNaN(ordersAmountByStatus?.cancelled) && ordersAmountByStatus?.cancelled !== null ? (
                ordersAmountByStatus?.cancelled ?? 0
              ) : (
                <CgSpinnerTwoAlt />
              )}
              )
            </span>
          </Tab>
        </DragScroll>
      </OrderStatusFilterContainer>
    </>
  )
}
