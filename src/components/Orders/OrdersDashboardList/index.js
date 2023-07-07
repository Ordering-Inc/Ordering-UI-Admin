import React from 'react'
import { DashboardOrdersList as OrdersListController } from 'ordering-components-admin'
import { OrdersListing } from '../OrdersListing'

export const OrdersDashboardList = (props) => {
  const {
    selectedSubOrderStatus,
    isMessagesView,
    orderByOption,
    setOrdersAmountByStatus
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
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    isSearchByBusinessName: true,
    isSearchByDriverName: true,
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
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, pending: total }))}
          />

          <OrdersListController
            groupStatus='inProgress'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.inProgress}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, inProgress: total }))}
          />

          <OrdersListController
            groupStatus='completed'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.completed}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, completed: total }))}
          />

          <OrdersListController
            groupStatus='cancelled'
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.cancelled}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, cancelled: total }))}
          />
        </>
      )}
    </>
  )
}
