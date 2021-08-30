import React from 'react'
import { DashboardOrdersList as OrdersListController } from 'ordering-components-admin'
import { OrdersListing } from '../OrdersListing'

export const OrdersDashboardList = (props) => {
  const {
    selectedSubOrderStatus,

    isMessagesView,
    orderByOption
  } = props

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrdersListing,
    useDefualtSessionManager: true,
    orderBy: isMessagesView ? orderByOption : 'id',
    orderDirection: isMessagesView
      ? orderByOption === 'id' ? 'desc' : 'asc'
      : 'desc',
    asDashboard: true,
    initialPageSize: 10,
    loadMorePageSize: 10,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    driverId: props.driverId
  }

  return (
    <>
      {isMessagesView ? (
        <OrdersListController
          isMessagesView
          {...OrdersCommonControlProps}
          orderStatus={selectedSubOrderStatus?.all}
        />
      ) : (
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
      )}
    </>
  )
}
