import React, { useEffect, useState } from 'react'
import { DashboardOrdersList as OrdersListController, useLanguage } from 'ordering-components'
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
    handleNotification,
    handleOpenOrderDetail
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
    handleNotification: handleNotification,
    handleOpenOrderDetail: handleOpenOrderDetail
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    orderStatusTitle: t('PENDING', 'Pendig')
  }

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

  const [inProgressOrdersLoaded, setInProgressOrdersLoaded] = useState(false)
  const [completedOrdersLoaded, setCompletedOrdersLoaded] = useState(false)
  const [cancelledOrdersLoaded, setCancelledOrdersLoaded] = useState(false)

  useEffect(() => {
    if (!activeSwitch.orders) return
    if (ordersStatusGroup === 'inProgress') setInProgressOrdersLoaded(true)
    if (ordersStatusGroup === 'completed') setCompletedOrdersLoaded(true)
    if (ordersStatusGroup === 'cancelled') setCancelledOrdersLoaded(true)
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
        </WrapperOrderlist>
      )}
    </>
  )
}
