import React, { useEffect, useState } from 'react'
import { DashboardOrdersList as OrdersListController, useLanguage } from 'ordering-components-admin'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

export const OrdersDashboardList = (props) => {
  const {
    orderListView,
    searchValue,
    filterValues,
    selectedOrderIds,
    deletedOrderId,
    driversList,
    ordersStatusGroup,
    handleSelectedOrderIds,
    activeSwitch,
    handleOpenOrderDetail,
    selectedSubOrderStatus
  } = props
  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc',
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    handleSelectedOrderIds: handleSelectedOrderIds,
    selectedOrderIds: selectedOrderIds,
    activeSwitch: activeSwitch,
    driversList: driversList,
    orderListView: orderListView,
    handleOpenOrderDetail: handleOpenOrderDetail
  }

  // pending section
  const PendingOrdersControlProps = {
    orderStatus: [0],
    orderStatusTitle: t('PENDING', 'Pendig')
  }

  const PreOrdersControlProps = {
    orderStatus: [13],
    orderStatusTitle: t('PREORDER', 'Preorder')
  }

  // in progress section
  const AcceptedByBusinessOrdersControlProps = {
    orderStatus: [7],
    orderStatusTitle: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
  }

  const AcceptedByDriverOrdersControlProps = {
    orderStatus: [8],
    orderStatusTitle: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  }

  const ReadyForPickupOrdersControlProps = {
    orderStatus: [4],
    orderStatusTitle: t('READY_FOR_PICKUP', 'Ready for pickup')
  }

  const PickupCompletedByDriverOrdersControlProps = {
    orderStatus: [9],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
  }

  const DriverArrivedByBusinessOrdersControlProps = {
    orderStatus: [3],
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  }

  const OrderNotReadyOrdersControlprops = {
    orderStatus: [14],
    orderStatusTitle: t('ORDER_NOT_READY', 'Order not ready')
  }

  const DriverAlmostArrivedToBusinessOrdersControlProps = {
    orderStatus: [18],
    orderStatusTitle: t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business')
  }

  const DriverAlmostArrivedToCustomerOrdersProps = {
    orderStatus: [19],
    orderStatusTitle: t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer')
  }

  const CustomerAlmostArrivedToBusinessOrdersProps = {
    orderStatus: [20],
    orderStatusTitle: t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business')
  }

  const CustomerArrivedToBusinessOrdersProps = {
    orderStatus: [21],
    orderStatusTitle: t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business')
  }

  // completed section
  const CompletedByAdminOrdersControlProps = {
    orderStatus: [1],
    orderStatusTitle: t('COMPLETED_BY_ADMIN', 'Completed by admin')
  }

  const DeliveryCompletedByDriverOrdersControlProps = {
    orderStatus: [11],
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }

  const PickupCompletedByCustomerOrdersControlProps = {
    orderStatus: [15],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
  }

  // cancelled section
  const RejectByAdminOrdersControlProps = {
    orderStatus: [2],
    orderStatusTitle: t('REJECTED_BY_ADMIN', 'Rejected by admin')
  }

  const RejectByBusinessOrdersControlProps = {
    orderStatus: [5],
    orderStatusTitle: t('REJECT_BY_BUSINESS', 'Reject by business')
  }

  const RejectByDriverOrdersControlProps = {
    orderStatus: [6],
    orderStatusTitle: t('REJECT_BY_DRIVER', 'Reject by driver')
  }

  const PickupFailedByDriverOrdersControlProps = {
    orderStatus: [10],
    orderStatusTitle: t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
  }

  const DeliveryFailedByDriverOrdersControlProps = {
    orderStatus: [12],
    orderStatusTitle: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
  }

  const CancelledByCustomerOrdersControlProps = {
    orderStatus: [16],
    orderStatusTitle: t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
  }

  const NotPickedByCustomerOrdersControlProps = {
    orderStatus: [17],
    orderStatusTitle: t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer')
  }

  const [inProgressOrdersLoaded, setInProgressOrdersLoaded] = useState(false)
  const [completedOrdersLoaded, setCompletedOrdersLoaded] = useState(false)
  const [cancelledOrdersLoaded, setCancelledOrdersLoaded] = useState(false)

  useEffect(() => {
    if (ordersStatusGroup === 'inProgress') setInProgressOrdersLoaded(true)
    if (ordersStatusGroup === 'completed') setCompletedOrdersLoaded(true)
    if (ordersStatusGroup === 'cancelled') setCancelledOrdersLoaded(true)
  }, [ordersStatusGroup])

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${(ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
      >
        {selectedSubOrderStatus?.pending === 0 && (
          <OrdersListController
            {...OrdersCommonControlProps}
            {...PendingOrdersControlProps}
          />
        )}
        {selectedSubOrderStatus?.pending === 13 && (
          <OrdersListController
            {...OrdersCommonControlProps}
            {...PreOrdersControlProps}
          />
        )}
      </WrapperOrderlist>

      {(inProgressOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          {selectedSubOrderStatus?.inProgress === 7 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...AcceptedByBusinessOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 4 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...ReadyForPickupOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 8 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...AcceptedByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 3 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...DriverArrivedByBusinessOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 9 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...PickupCompletedByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 14 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...OrderNotReadyOrdersControlprops}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 18 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...DriverAlmostArrivedToBusinessOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 19 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...DriverAlmostArrivedToCustomerOrdersProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 20 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...CustomerAlmostArrivedToBusinessOrdersProps}
            />
          )}
          {selectedSubOrderStatus?.inProgress === 21 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...CustomerArrivedToBusinessOrdersProps}
            />
          )}
        </WrapperOrderlist>
      )}

      {(completedOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          {selectedSubOrderStatus?.completed === 1 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...CompletedByAdminOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.completed === 11 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...DeliveryCompletedByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.completed === 15 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...PickupCompletedByCustomerOrdersControlProps}
            />
          )}
        </WrapperOrderlist>
      )}

      {(cancelledOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          {selectedSubOrderStatus?.cancelled === 2 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...RejectByAdminOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 5 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...RejectByBusinessOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 6 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...RejectByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 10 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...PickupFailedByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 12 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...DeliveryFailedByDriverOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 16 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...CancelledByCustomerOrdersControlProps}
            />
          )}
          {selectedSubOrderStatus?.cancelled === 17 && (
            <OrdersListController
              {...OrdersCommonControlProps}
              {...NotPickedByCustomerOrdersControlProps}
            />
          )}
        </WrapperOrderlist>
      )}
    </>
  )
}
