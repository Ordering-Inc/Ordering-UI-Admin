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
    preOrders,
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
    updateOrdersSelectedStatus,

    searchValue,
    ordersStatusSelected,
    handleChangeSearch,
    handleOrdersStatusFilter,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleChangeMultiOrdersStatus
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
            driversList={driversList}
          />
          <OrdersDashboardControls
            handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          />
          {ordersStatusSelected === 'pending' && (
            <>
              <OrderListing
                orderList={pendingOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('PENDING_ORDERS', 'Pendig orders')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={preOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('PREORDERS', 'Preorders')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
            </>
          )}

          {ordersStatusSelected === 'inProgress' && (
            <>
              <OrderListing
                orderList={acceptedByBusinessOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'ACCEPTED_BY_BUSINESS',
                  'Accepted by Business'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={acceptedByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('ACCEPTED_BY_Driver', 'Accepted by Driver')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={driverArrivedByBusinessOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'DRIVER_ARRIVED_BY_BUSINESS',
                  'Driver arrived by business'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={readyForPickupOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'READY_FOR_PICKUP',
                  'Ready for pickup'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={pickupCompletedByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'PICKUP_COMPLETED_BY_DRIVER',
                  'Pickup completed by driver'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
            </>
          )}

          {ordersStatusSelected === 'completed' && (
            <>
              <OrderListing
                orderList={completedByAdminOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('COMPLETED_BY_ADMIN', 'Completed by admin')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={deliveryCompletedByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'DELIVERY_COMPLETED_BY_DRIVER',
                  'Delivery completed by driver'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
            </>
          )}

          {ordersStatusSelected === 'cancelled' && (
            <>
              <OrderListing
                orderList={rejectedByAdminOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('REJECTED_BY_ADMIN', 'Rejected by admin')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />

              <OrderListing
                orderList={rejectByBusinessOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('REJECT_BY_BUSINESS', 'Reject by business')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />

              <OrderListing
                orderList={rejectByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t('REJECT_BY_DRIVER', 'Reject by driver')}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />
              <OrderListing
                orderList={pickupFailedByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'PICKUP_FAILED_BY_DRIVER',
                  'Pickup failed by driver'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
              />

              <OrderListing
                orderList={deliveryFailedByDriverOrders}
                driversList={driversList}
                updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                orderStatusTitle={t(
                  'DELIVERY_FAILED_BY_DRIVER',
                  'Delivery failed by driver'
                )}
                orderListView='big'
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
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
