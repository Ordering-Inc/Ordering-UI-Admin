import React from 'react'
import { DashboardOrdersList as OrdersListController } from 'ordering-components'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

export const MessagesDashboardOrdersList = (props) => {
  const {
    orderListView,
    searchValue,
    filterValues,
    deletedOrderId,
    driversList,
    activeSwitch,
    handleOpenOrderDetail,
    handleOpenMessage,
    openOrclosedOrderView,
    orderBy,
    messageType,
    messageOrder,
    orderIdForUnreadCountUpdate
  } = props

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    orderBy: orderBy,
    orderDirection: orderBy === 'id' ? 'desc' : 'asc',
    initialPageSize: 50,
    loadMorePageSize: 10,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    activeSwitch: activeSwitch,
    driversList: driversList,
    orderListView: orderListView,
    messageType: messageType,
    messageOrder: messageOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenMessage: handleOpenMessage,
    handleOpenOrderDetail: handleOpenOrderDetail
  }

  const allOrdersControlProps = {
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  const openOrdersControlProps = {
    orderStatus: [0, 7, 8, 3, 4, 9]
  }

  const closedOrdersControlProps = {
    orderStatus: [1, 11, 2, 5, 6, 10, 12]
  }

  return (
    <>
      {openOrclosedOrderView === 'all' && (
        <WrapperOrderlist>
          <OrdersListController
            messageListView
            {...OrdersCommonControlProps}
            {...allOrdersControlProps}
          />
        </WrapperOrderlist>
      )}
      {openOrclosedOrderView === 'open' && (
        <WrapperOrderlist>
          <OrdersListController
            messageListView
            {...OrdersCommonControlProps}
            {...openOrdersControlProps}
          />
        </WrapperOrderlist>
      )}
      {openOrclosedOrderView === 'close' && (
        <WrapperOrderlist>
          <OrdersListController
            messageListView
            {...OrdersCommonControlProps}
            {...closedOrdersControlProps}
          />
        </WrapperOrderlist>
      )}
    </>
  )
}
