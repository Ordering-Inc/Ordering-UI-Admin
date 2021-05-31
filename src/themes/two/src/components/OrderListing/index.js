import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components-admin'
import { OrderItemAccordion } from '../../../../../components/OrderItemAccordion'
import { SmallOrderItemAccordion } from '../../../../../components/SmallOrderItemAccordion'
import { OrdersPagination } from '../../../../../components/OrdersPagination'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { OrdersTable } from '../OrdersTable'
import {
  WrapperNoneOrders,
  SkeletonOrder,
  SkeletonCard,
  SkeletonCell,
  SkeletonText,
  SkeletonBlock,
  WrapperOrderListContent,
  InnerOrderListContent,
  InnerNoneOrdersContainer,
  WrapSkeltonCell
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
  const windowSize = useWindowSize()
  const [, t] = useLanguage()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage] = useState(10)

  // Get current orders
  const indexOfLastPost = currentPage * ordersPerPage
  const indexOfFirstPost = indexOfLastPost - ordersPerPage
  const [currentOrders, setCurrentOrders] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [totalOrders, setTotalOrders] = useState(null)

  // Change page
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== totalPages) {
      if (orderList.orders.length < ordersPerPage * currentPage + 1) {
        loadMoreOrders()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    if (orderList.loading) return
    let _totalPages
    if (pagination?.total) {
      _totalPages = Math.ceil(pagination?.total / ordersPerPage)
    } else if (orderList.orders.length > 0) {
      _totalPages = Math.ceil(orderList.orders.length / ordersPerPage)
    }
    const _currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost)
    setTotalOrders(pagination?.total)
    setTotalPages(_totalPages)
    setCurrentOrders(_currentOrders)
  }, [orderList, currentPage, activeSwitch, isCheckedQuickShow, pagination])

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0 || messageOrder) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, activeSwitch, messageListView])

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
