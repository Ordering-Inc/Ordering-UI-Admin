import React from 'react'
import { DashboardOrdersList as OrdersListController } from 'ordering-components-admin'
import { OrdersListing } from '../OrdersListing'

export const OrdersDashboardList = (props) => {
  const {
    selectedSubOrderStatus
  } = props

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrdersListing,
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc',
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    driverId: props.driverId
  }

  return (
    <>
      <OrdersListController
        groupStatus='pending'
        {...OrdersCommonControlProps}
        orderStatus={selectedSubOrderStatus?.pending}
      />

      <OrdersListController
        groupStatus='inProgress'
        {...OrdersCommonControlProps}
        orderStatus={selectedSubOrderStatus?.inProgress}
      />

      <OrdersListController
        groupStatus='completed'
        {...OrdersCommonControlProps}
        orderStatus={selectedSubOrderStatus?.completed}
      />

      <OrdersListController
        groupStatus='cancelled'
        {...OrdersCommonControlProps}
        orderStatus={selectedSubOrderStatus?.cancelled}
      />
    </>
  )
}
