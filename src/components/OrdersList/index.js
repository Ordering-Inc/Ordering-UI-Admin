import React from 'react'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent
} from './styles'
import { AdminOrders } from '../AdminOrdersListControl'

import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderListing } from '../OrderListing'
import { useLanguage } from 'ordering-components'

export const OrdersListUI = (props) => {
  const {
    pendingOrders,
    acceptedByBusinessOrders,
    acceptedByDriverOrders,
    driverArrivedByBusinessOrders,
    completedByAdminOrders,
    deliveryCompletedByDriverOrders,
    rejectedByAdminOrders,
    rejectByBusinessOrders,
    rejectByDriverOrders,
    pickupFailedByDriverOrders,
    deliveryFailedByDriverOrders,

    searchValue,
    ordersStatusSelected,
    handleChangeSearch,
    handleChangeOrdersStatus
  } = props

  const [, t] = useLanguage()

  return (
    <OrdersListContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusSelected}
        changeOrderStatus={handleChangeOrdersStatus}
      />
      <OrdersContent>
        <OrdersInnerContent>
          <OrderContentHeader
            active='orders'
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />
          <OrdersDashboardControls />
          {ordersStatusSelected === 'pending' && (
            <OrderListing
              orderList={pendingOrders}
              orderStatusTitle={t('PENDING_ORDERS', 'Pendig orders')}
              orderListView='big'
            />
          )}

          {ordersStatusSelected === 'inProgress' && (
            <>
              <OrderListing
                orderList={acceptedByBusinessOrders}
                orderStatusTitle={t(
                  'ACCEPTED_BY_BUSINESS',
                  'Accepted by Business'
                )}
                orderListView='big'
              />
              <OrderListing
                orderList={acceptedByDriverOrders}
                orderStatusTitle={t('ACCEPTED_BY_Driver', 'Accepted by Driver')}
                orderListView='big'
              />
              <OrderListing
                orderList={driverArrivedByBusinessOrders}
                orderStatusTitle={t(
                  'DRIVER_ARRIVED_BY_BUSINESS',
                  'Driver arrived by business'
                )}
                orderListView='big'
              />
            </>
          )}

          {ordersStatusSelected === 'completed' && (
            <>
              <OrderListing
                orderList={completedByAdminOrders}
                orderStatusTitle={t('COMPLETED_BY_ADMIN', 'Completed by admin')}
                orderListView='big'
              />
              <OrderListing
                orderList={deliveryCompletedByDriverOrders}
                orderStatusTitle={t(
                  'DELIVERY_COMPLETED_BY_DRIVER',
                  'Delivery completed by driver'
                )}
                orderListView='big'
              />
            </>
          )}

          {ordersStatusSelected === 'cancelled' && (
            <>
              <OrderListing
                orderList={rejectedByAdminOrders}
                orderStatusTitle={t('REJECTED_BY_ADMIN', 'Rejected by admin')}
                orderListView='big'
              />

              <OrderListing
                orderList={rejectByBusinessOrders}
                orderStatusTitle={t('REJECT_BY_BUSINESS', 'Reject by business')}
                orderListView='big'
              />

              <OrderListing
                orderList={rejectByDriverOrders}
                orderStatusTitle={t('REJECT_BY_DRIVER', 'Reject by driver')}
                orderListView='big'
              />
              <OrderListing
                orderList={pickupFailedByDriverOrders}
                orderStatusTitle={t(
                  'PICKUP_FAILED_BY_DRIVER',
                  'Pickup failed by driver'
                )}
                orderListView='big'
              />

              <OrderListing
                orderList={deliveryFailedByDriverOrders}
                orderStatusTitle={t(
                  'DELIVERY_FAILED_BY_DRIVER',
                  'Delivery failed by driver'
                )}
                orderListView='big'
              />
            </>
          )}
        </OrdersInnerContent>
      </OrdersContent>
    </OrdersListContainer>
  )
}

export const OrdersList = () => {
  const AdminOrdersControlProps = {
    UIComponent: OrdersListUI,
    isSearchByOrderNumber: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }
  return <AdminOrders {...AdminOrdersControlProps} />
}
