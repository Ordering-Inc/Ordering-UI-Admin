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
    initialPageSize: 50,
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
          orderStatus={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]}
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
