import React, { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { OrdersTable } from '../OrdersTable'
import { OrdersCards } from '../OrdersCards'
import { getStorageItem, setStorageItem } from '../../utils'
import {
  WrapperNoneOrders,
  WrapperOrderListContent,
  InnerNoneOrdersContainer
} from './styles'

export const OrdersListing = (props) => {
  const {
    isSelectedOrders,
    orderList,
    driversList,
    selectedOrderIds,
    orderListView,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    pagination,
    handleOpenOrderDetail,
    handleOpenMessage,
    handleOrderCardClick,
    handleUpdateDriverLocation,
    messageOrder,
    selectedOrderCard,
    messageListView,
    messageType,
    loadMoreOrders,
    getPageOrders,
    ordersStatusGroup,
    groupStatus,
    orderDetailId,

    isMessagesView,
    setSelectedOrderIds,
    handleOpenTour
  } = props

  const theme = useTheme()

  const handleSetStorage = async () => {
    const preVisited = await getStorageItem('visited', true)
    if (!preVisited?.orders_page) {
      const visited = {
        ...preVisited,
        orders_page: true
      }
      await setStorageItem('visited', visited, true)
      handleOpenTour()
    }
  }

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0 || messageOrder) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, messageListView])

  useEffect(() => {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return
    if (orderList?.orders.length > 0) {
      handleOrderCardClick(orderList.orders[0])
    }
  }, [isMessagesView, orderList, selectedOrderCard])

  useEffect(() => {
    if (orderList.loading || orderList?.orders?.length === 0) return
    handleOpenTour && handleSetStorage()
  }, [orderList.loading])

  return (
    <>
      {((ordersStatusGroup === groupStatus) || isMessagesView) && (
        <>
          {!orderList.loading && orderList.orders.length === 0 ? (
            <WrapperNoneOrders
              small={orderListView === 'small'}
            >
              <InnerNoneOrdersContainer>
                <img src={theme?.images?.dummies?.nonOrders} alt='none' />
              </InnerNoneOrdersContainer>
            </WrapperNoneOrders>
          ) : (
            <WrapperOrderListContent
              maxHeight={orderListView !== 'table'}
            >
              {orderListView === 'table' ? (
                <OrdersTable
                  setSelectedOrderIds={setSelectedOrderIds}
                  isSelectedOrders={isSelectedOrders}
                  orderList={orderList}
                  driversList={driversList}
                  pagination={pagination}
                  selectedOrderIds={selectedOrderIds}
                  orderDetailId={orderDetailId}
                  loadMoreOrders={loadMoreOrders}
                  getPageOrders={getPageOrders}
                  handleUpdateOrderStatus={handleUpdateOrderStatus}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                />
              ) : (
                <OrdersCards
                  isMessagesView={isMessagesView}

                  orderList={orderList}
                  driversList={driversList}
                  pagination={pagination}
                  selectedOrderIds={selectedOrderIds}
                  loadMoreOrders={loadMoreOrders}
                  getPageOrders={getPageOrders}
                  handleUpdateOrderStatus={handleUpdateOrderStatus}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  selectedOrderCard={selectedOrderCard}
                  handleOrderCardClick={handleOrderCardClick}
                  handleUpdateDriverLocation={handleUpdateDriverLocation}
                />
              )}
            </WrapperOrderListContent>
          )}
        </>
      )}
    </>
  )
}
