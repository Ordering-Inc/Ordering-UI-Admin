import React, { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { OpenCartsTable } from '../OpenCartsTable'
import {
  WrapperNoneOrders,
  WrapperOrderListContent,
  InnerNoneOrdersContainer
} from './styles'

export const OpenCartsListing = (props) => {
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
    // handleUpdateDriverLocation,
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
    setSelectedOrderIds
  } = props

  const theme = useTheme()

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

  return (
    <>
      {((ordersStatusGroup === groupStatus) || isMessagesView) && (
        <>
          {!orderList.loading && pagination?.total === 0 ? (
            <WrapperNoneOrders>
              <InnerNoneOrdersContainer small={orderListView === 'small'}>
                <img src={theme?.images?.dummies?.noOrders} alt='none' />
              </InnerNoneOrdersContainer>
            </WrapperNoneOrders>
          ) : (
            <WrapperOrderListContent
              maxHeight={orderListView !== 'table'}
            >
              <OpenCartsTable
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
            </WrapperOrderListContent>
          )}
        </>
      )}
    </>
  )
}
