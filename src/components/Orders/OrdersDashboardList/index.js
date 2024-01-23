import React from 'react'
import { useLocation } from 'react-router-dom'
import { DashboardOrdersList as OrdersListController, useConfig } from 'ordering-components-admin'
import { OrdersListing } from '../OrdersListing'

export const OrdersDashboardList = (props) => {
  const {
    selectedSubOrderStatus,
    isMessagesView,
    orderByOption,
    setOrdersAmountByStatus,
    isUseQuery
  } = props

  const [configState] = useConfig()

  const isShowSearchFilters = !configState?.configs?.search_box_enabled || configState?.configs?.search_box_enabled?.value === '1'
  const query = new URLSearchParams(useLocation().search)
  const defaultStatus = query.get('status')
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrdersListing,
    useDefualtSessionManager: true,
    orderBy: isMessagesView ? orderByOption : 'id',
    orderDirection: isMessagesView
      ? orderByOption === 'id' ? 'desc' : 'asc'
      : 'desc',
    asDashboard: true,
    isSearchByOrderId: isShowSearchFilters,
    isSearchByCustomerName: isShowSearchFilters,
    isSearchByCustomerEmail: isShowSearchFilters,
    isSearchByCustomerPhone: isShowSearchFilters,
    isSearchByDriverName: isShowSearchFilters,
    isSearchByBusinessName: true,
    driverId: props.driverId
  }

  return (
    <>
      {isMessagesView ? (
        <OrdersListController
          isMessagesView
          {...OrdersCommonControlProps}
          paginationSettings={{
            initialPage: isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
            pageSize: isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
            controlType: 'pages'
          }}
          orderStatus={selectedSubOrderStatus?.all}
        />
      ) : (
        <>
          <OrdersListController
            {...OrdersCommonControlProps}
            paginationSettings={{
              initialPage: isUseQuery && defaultStatus === 'pending' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && defaultStatus === 'pending' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
            groupStatus='pending'
            orderStatus={selectedSubOrderStatus?.pending}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, pending: total }))}
          />

          <OrdersListController
            groupStatus='inProgress'
            {...OrdersCommonControlProps}
            paginationSettings={{
              initialPage: isUseQuery && defaultStatus === 'inProgress' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && defaultStatus === 'inProgress' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
            orderStatus={selectedSubOrderStatus?.inProgress}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, inProgress: total }))}
          />

          <OrdersListController
            groupStatus='completed'
            {...OrdersCommonControlProps}
            paginationSettings={{
              initialPage: isUseQuery && defaultStatus === 'completed' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && defaultStatus === 'completed' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
            orderStatus={selectedSubOrderStatus?.completed}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, completed: total }))}
          />

          <OrdersListController
            groupStatus='cancelled'
            {...OrdersCommonControlProps}
            paginationSettings={{
              initialPage: isUseQuery && defaultStatus === 'cancelled' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && defaultStatus === 'cancelled' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
            orderStatus={selectedSubOrderStatus?.cancelled}
            setOrdersTotalAmount={total => setOrdersAmountByStatus(prevState => ({ ...prevState, cancelled: total }))}
          />
        </>
      )}
    </>
  )
}
