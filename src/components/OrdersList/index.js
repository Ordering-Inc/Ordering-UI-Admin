import React from 'react'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent
} from './styles'
import { AdminOrdersAndDriversList } from '../AdminOrdersAndDriversListController'

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
    readyForPickupOrders,
    pickupCompletedByDriverOrders,
    completedByAdminOrders,
    deliveryCompletedByDriverOrders,
    rejectedByAdminOrders,
    rejectByBusinessOrders,
    rejectByDriverOrders,
    pickupFailedByDriverOrders,
    deliveryFailedByDriverOrders,
    driversList,

    searchValue,
    ordersStatusSelected,
    handleChangeSearch,
    handleOrdersStatusFilter,
    handleUpdateOrdersStatus
  } = props

  const [, t] = useLanguage()

  return (
    <OrdersListContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusSelected}
        changeOrderStatus={handleOrdersStatusFilter}
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
              driversList={driversList}
              orderStatusTitle={t('PENDING_ORDERS', 'Pendig orders')}
              orderListView='big'
              handleUpdateOrdersStatus={handleUpdateOrdersStatus}
            />
          )}

          {ordersStatusSelected === 'inProgress' && (
            <>
              <OrderListing
                orderList={acceptedByBusinessOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'ACCEPTED_BY_BUSINESS',
                  'Accepted by Business'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={acceptedByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t('ACCEPTED_BY_Driver', 'Accepted by Driver')}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={driverArrivedByBusinessOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'DRIVER_ARRIVED_BY_BUSINESS',
                  'Driver arrived by business'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={readyForPickupOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'READY_FOR_PICKUP',
                  'Ready for pickup'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={pickupCompletedByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'PICKUP_COMPLETED_BY_DRIVER',
                  'Pickup completed by driver'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
            </>
          )}

          {ordersStatusSelected === 'completed' && (
            <>
              <OrderListing
                orderList={completedByAdminOrders}
                driversList={driversList}
                orderStatusTitle={t('COMPLETED_BY_ADMIN', 'Completed by admin')}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={deliveryCompletedByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'DELIVERY_COMPLETED_BY_DRIVER',
                  'Delivery completed by driver'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
            </>
          )}

          {ordersStatusSelected === 'cancelled' && (
            <>
              <OrderListing
                orderList={rejectedByAdminOrders}
                driversList={driversList}
                orderStatusTitle={t('REJECTED_BY_ADMIN', 'Rejected by admin')}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />

              <OrderListing
                orderList={rejectByBusinessOrders}
                driversList={driversList}
                orderStatusTitle={t('REJECT_BY_BUSINESS', 'Reject by business')}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />

              <OrderListing
                orderList={rejectByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t('REJECT_BY_DRIVER', 'Reject by driver')}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
              <OrderListing
                orderList={pickupFailedByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'PICKUP_FAILED_BY_DRIVER',
                  'Pickup failed by driver'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />

              <OrderListing
                orderList={deliveryFailedByDriverOrders}
                driversList={driversList}
                orderStatusTitle={t(
                  'DELIVERY_FAILED_BY_DRIVER',
                  'Delivery failed by driver'
                )}
                orderListView='big'
                handleUpdateOrdersStatus={handleUpdateOrdersStatus}
              />
            </>
          )}
        </OrdersInnerContent>
      </OrdersContent>
    </OrdersListContainer>
  )
}

export const OrdersList = () => {
  const AdminOrdersAndDriversListControlProps = {
    UIComponent: OrdersListUI,
    isSearchByOrderNumber: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }
  return <AdminOrdersAndDriversList {...AdminOrdersAndDriversListControlProps} />
}
