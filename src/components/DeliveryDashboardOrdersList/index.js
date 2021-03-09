import React, { useEffect, useState } from 'react'
import { useLanguage, DashboardOrdersList as OrdersListController } from 'ordering-components-admin'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

export const DeliveryDashboardOrdersList = (props) => {
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
    isOnlyDelivery,
    handleOpenOrderDetail,
    handleLocation,
    handleUpdateDriverLocation,
    interActionMapOrder
  } = props
  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    orderBy: 'id',
    orderDirection: 'desc',
    useDefualtSessionManager: true,
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
    isOnlyDelivery: isOnlyDelivery,
    driversList: driversList,
    orderListView: orderListView,
    interActionMapOrder: interActionMapOrder,
    handleLocation: handleLocation,
    handleUpdateDriverLocation: handleUpdateDriverLocation,
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
    if (!activeSwitch.deliveries) return
    if (ordersStatusGroup === 'inProgress') {
      setInProgressOrdersLoaded(true)
    }
    if (ordersStatusGroup === 'completed') {
      setCompletedOrdersLoaded(true)
    }
    if (ordersStatusGroup === 'cancelled') {
      setCancelledOrdersLoaded(true)
    }
  }, [ordersStatusGroup, activeSwitch])

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${(ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          size='small'
          {...OrdersCommonControlProps}
          {...PendingOrdersControlProps}
        />
        <OrdersListController
          size='small'
          {...OrdersCommonControlProps}
          {...PreOrdersControlProps}
        />
      </WrapperOrderlist>

      {(inProgressOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            {...AcceptedByBusinessOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...ReadyForPickupOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...AcceptedByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...DriverArrivedByBusinessOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...PickupCompletedByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...OrderNotReadyOrdersControlprops}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...DriverAlmostArrivedToBusinessOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...DriverAlmostArrivedToCustomerOrdersProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...CustomerAlmostArrivedToBusinessOrdersProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...CustomerArrivedToBusinessOrdersProps}
          />
        </WrapperOrderlist>
      )}

      {(completedOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            {...CompletedByAdminOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...DeliveryCompletedByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...PickupCompletedByCustomerOrdersControlProps}
          />
        </WrapperOrderlist>
      )}

      {(cancelledOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            {...RejectByAdminOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...RejectByBusinessOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...RejectByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...PickupFailedByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...DeliveryFailedByDriverOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...CancelledByCustomerOrdersControlProps}
          />
          <OrdersListController
            {...OrdersCommonControlProps}
            {...NotPickedByCustomerOrdersControlProps}
          />
        </WrapperOrderlist>
      )}
    </>
  )
}
