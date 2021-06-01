import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { OrdersTable } from '../OrdersTable'
import {
  WrapperNoneOrders,
  WrapperOrderListContent,
  InnerNoneOrdersContainer
} from './styles'

export const OrderListing = (props) => {
  const {
    orderList,
    driversList,
    selectedOrderIds,
    orderListView,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    pagination,
    handleOpenOrderDetail,
    activeSwitch,
    isCheckedQuickShow,
    handleOpenMessage,
    handleLocation,
    handleUpdateDriverLocation,
    messageOrder,
    interActionMapOrder,
    messageListView,
    messageType,
    loadMoreOrders
  } = props

  const theme = useTheme()

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0 || messageOrder) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, messageListView])

  return (
    <>
      {!(orderList.loading || driversList.loading) && orderList.orders.length === 0 ? (
        <WrapperNoneOrders
          small={orderListView === 'small'}
        >
          <InnerNoneOrdersContainer>
            <img src={theme?.images?.dummies?.nonOrders} alt='none' />
          </InnerNoneOrdersContainer>
        </WrapperNoneOrders>
      ) : (
        <WrapperOrderListContent>
          <OrdersTable
            orderList={orderList}
            driversList={driversList}
            pagination={pagination}
            selectedOrderIds={selectedOrderIds}
            loadMoreOrders={loadMoreOrders}
            handleUpdateOrderStatus={handleUpdateOrderStatus}
            handleSelectedOrderIds={handleSelectedOrderIds}
            handleOpenOrderDetail={handleOpenOrderDetail}
          />
        </WrapperOrderListContent>
      )}
    </>
  )
}
