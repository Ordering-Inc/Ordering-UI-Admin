import React from 'react'
import { OrderList as OrdersListController, useLanguage } from 'ordering-components'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './style'

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
    handleNotification,
    handleOpenOrderDetail,
    handleOpenMessage,
    messageDashboardView,
    openOrclosedOrderView,
    orderBy
  } = props
  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    orderBy: orderBy,
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
    handleOpenMessage: handleOpenMessage,
    driversList: driversList,
    orderListView: orderListView
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    // pendingOrder: true,
    orderStatusTitle: t('PENDING', 'Pendig')
  }

  // const PreOrdersControlProps = {
  //   orderStatus: [0],
  //   preOrder: true,
  //   orderStatusTitle: t('PREORDERS', 'Preorders')
  // }

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

  const CompletedByAdminOrdersControlProps = {
    orderStatus: [1],
    orderStatusTitle: t('COMPLETED_BY_ADMIN', 'Completed by admin')
  }

  const DeliveryCompletedByDriverOrdersControlProps = {
    orderStatus: [11],
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }

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

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${((!messageDashboardView && ordersStatusGroup === 'pending') || (searchValue !== '' && searchValue !== null) || (messageDashboardView && openOrclosedOrderView === 'open')) ? 'block' : 'none'}` }}
      >
        {/* <OrdersListController
          size='small'
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps} {...PreOrdersControlProps}
        /> */}
        <OrdersListController
          size='small'
          handleNotification={handleNotification}
          handleOpenOrderDetail={handleOpenOrderDetail}
          {...OrdersCommonControlProps} {...PendingOrdersControlProps}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${((!messageDashboardView && ordersStatusGroup === 'inProgress') || (searchValue !== '' && searchValue !== null) || (messageDashboardView && openOrclosedOrderView === 'open')) ? 'block' : 'none'}` }}
      >
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByBusinessOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps} />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${((!messageDashboardView && ordersStatusGroup === 'completed') || (searchValue !== '' && searchValue !== null) || (messageDashboardView && openOrclosedOrderView === 'close')) ? 'block' : 'none'}` }}
      >
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps} />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${((!messageDashboardView && ordersStatusGroup === 'cancelled') || (searchValue !== '' && searchValue !== null) || (messageDashboardView && openOrclosedOrderView === 'close')) ? 'block' : 'none'}` }}
      >
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps} />
        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps} />
      </WrapperOrderlist>
    </>
  )
}
