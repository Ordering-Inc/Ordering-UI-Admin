import React from 'react'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent
} from './styles'
import { OrdersManage as OrdersManageController } from '../OrdersManageController'
import { OrderList as OrdersListController } from '../OrdersListController'

import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderListing } from '../OrderListing'
import { useLanguage } from 'ordering-components'

const OrdersListUI = (props) => {
  const {
    searchValue,
    driversList,
    paymethodsList,
    businessesList,
    updateOrdersSelectedStatus,
    ordersStatusGroup,
    filterValues,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleSelectedOrderIds,
    handleChangeMultiOrdersStatus
  } = props

  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    driversList: driversList,
    updateOrdersSelectedStatus: updateOrdersSelectedStatus,
    orderListView: 'big',
    handleSelectedOrderIds: handleSelectedOrderIds
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    pendingOrder: true,
    orderStatusTitle: t('PENDING_ORDERS', 'Pendig orders')
  }

  const PreOrdersControlProps = {
    orderStatus: [0],
    preOrder: true,
    orderStatusTitle: t('PREORDERS', 'Preorders')
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
  return (
    <OrdersListContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusGroup}
        changeOrderStatus={handleOrdersStatusGroupFilter}
      />
      <OrdersContent>
        <OrdersInnerContent>
          <OrderContentHeader
            active='orders'
            searchValue={searchValue}
            driversList={driversList}
            paymethodsList={paymethodsList}
            businessesList={businessesList}
            ordersStatusSelected={ordersStatusGroup}
            handleChangeSearch={handleChangeSearch}
            handleChangeFilterValues={handleChangeFilterValues}
          />
          <OrdersDashboardControls
            handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          />
          {ordersStatusGroup === 'pending' && (
            <>
              <OrdersListController {...OrdersCommonControlProps} {...PendingOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...PreOrdersControlProps} />
            </>
          )}
          {ordersStatusGroup === 'inProgress' && (
            <>
              <OrdersListController {...OrdersCommonControlProps} {...AcceptedByBusinessOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps} />
            </>
          )}
          {ordersStatusGroup === 'completed' && (
            <>
              <OrdersListController {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps} />
            </>
          )}
          {ordersStatusGroup === 'cancelled' && (
            <>
              <OrdersListController {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps} />
              <OrdersListController {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps} />
            </>
          )}
        </OrdersInnerContent>
      </OrdersContent>

    </OrdersListContainer>
  )
}

export const OrdersList = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersListUI
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
