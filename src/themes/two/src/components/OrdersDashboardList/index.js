import React from 'react'
import { DashboardOrdersList as OrdersListController, useLanguage } from 'ordering-components-admin'
import { OrderListing } from '../OrderListing'

export const OrdersDashboardList = (props) => {
  const {
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
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
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
