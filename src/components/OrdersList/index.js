import React from 'react'
import { OrderList as OrdersListController, useLanguage } from 'ordering-components'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

export const OrdersList = (props) => {
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
    isCheckedQuickShow,
    handleNotification,
    handleOpenOrderDetail,
    handleOpenMessage,
    handleLocation,
    messageDashboardView,
    openOrclosedOrderView,
    orderBy,
    messageType,
    messageOrder,
    interActionMapOrder,
    orderIdForUnreadCountUpdate
  } = props
  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    handleSelectedOrderIds: handleSelectedOrderIds,
    selectedOrderIds: selectedOrderIds,
    activeSwitch: activeSwitch,
    isCheckedQuickShow: isCheckedQuickShow,
    driversList: driversList,
    orderListView: orderListView,
    messageType: messageType,
    messageOrder: messageOrder,
    interActionMapOrder: interActionMapOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenMessage: handleOpenMessage,
    handleLocation: handleLocation
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('PENDING', 'Pendig')
  }

  const AcceptedByBusinessOrdersControlProps = {
    orderStatus: [7],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
  }

  const AcceptedByDriverOrdersControlProps = {
    orderStatus: [8],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  }

  const ReadyForPickupOrdersControlProps = {
    orderStatus: [4],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('READY_FOR_PICKUP', 'Ready for pickup')
  }

  const PickupCompletedByDriverOrdersControlProps = {
    orderStatus: [9],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
  }

  const DriverArrivedByBusinessOrdersControlProps = {
    orderStatus: [3],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  }

  const CompletedByAdminOrdersControlProps = {
    orderStatus: [1],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('COMPLETED_BY_ADMIN', 'Completed by admin')
  }

  const DeliveryCompletedByDriverOrdersControlProps = {
    orderStatus: [11],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }

  const RejectByAdminOrdersControlProps = {
    orderStatus: [2],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('REJECTED_BY_ADMIN', 'Rejected by admin')
  }

  const RejectByBusinessOrdersControlProps = {
    orderStatus: [5],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('REJECT_BY_BUSINESS', 'Reject by business')
  }

  const RejectByDriverOrdersControlProps = {
    orderStatus: [6],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('REJECT_BY_DRIVER', 'Reject by driver')
  }

  const PickupFailedByDriverOrdersControlProps = {
    orderStatus: [10],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
  }

  const DeliveryFailedByDriverOrdersControlProps = {
    orderStatus: [12],
    orderBy: 'id',
    orderDirection: 'desc',
    orderStatusTitle: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
  }

  const openOrdersControlProps = {
    orderStatus: [0, 7, 8, 3, 4, 9],
    orderBy: orderBy,
    orderDirection: orderBy === 'id' ? 'desc' : 'asc'
  }

  const closedOrdersControlProps = {
    orderStatus: [1, 11, 2, 5, 6, 10, 12],
    orderBy: orderBy,
    orderDirection: orderBy === 'id' ? 'desc' : 'asc'
  }

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          size='small'
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps}
          {...PendingOrdersControlProps}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps}
          {...AcceptedByBusinessOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps}
        />
        <OrdersListController
          handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps}
        />
      </WrapperOrderlist>

      {/* Message dashboard view */}
      <WrapperOrderlist
        style={{ display: `${(messageDashboardView && (openOrclosedOrderView === 'open' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          messageListView
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps}
          {...openOrdersControlProps}
        />
      </WrapperOrderlist>
      <WrapperOrderlist
        style={{ display: `${(messageDashboardView && (openOrclosedOrderView === 'close' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps}
          {...closedOrdersControlProps}
        />
      </WrapperOrderlist>
    </>
  )
}
