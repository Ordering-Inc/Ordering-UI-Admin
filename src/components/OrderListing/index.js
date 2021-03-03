import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { OrderItemAccordion } from '../OrderItemAccordion'
import { SmallOrderItemAccordion } from '../SmallOrderItemAccordion'
import { OrdersPagination } from '../OrdersPagination'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'

import {
  OrderStatusTitle,
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
    orderStatusTitle,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    pagination,
    preOrder,
    pendingOrder,
    registerOrderId,
    handleOpenOrderDetail,
    handleNotification,
    driverOrdersView,
    activeSwitch,
    isCheckedQuickShow,
    handleOpenMessage,
    handleLocation,
    handleUpdateDriverLocation,
    messageOrder,
    interActionMapOrder,
    messageListView,
    messageType,
    size,
    loadMoreOrders
  } = props

  const theme = useTheme()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('inherit')
  const [setNoneOrderHeight, setNoneOrderHeightState] = useState('inherit')
  const [setRotate, setRotateState] = useState('collapse_icon')
  const content = useRef(null)
  const noneContent = useRef(null)

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

  const toggleOrderList = () => {
    setActiveState(setActive === '' ? 'active' : '')
    if (content.current) {
      setHeightState(
        setActive === 'active' ? `${content.current.scrollHeight}px` : '0px'
      )
    }
    if (noneContent.current) {
      setNoneOrderHeightState(
        setActive === 'active' ? `${noneContent.current.scrollHeight}px` : '0px'
      )
    }
    setRotateState(
      setActive === 'active' ? 'collapse_icon' : 'collapse_icon rotate'
    )
  }

  useEffect(() => {
    if (driverOrdersView || messageListView) return
    if (registerOrderId === null || !registerOrderId) return
    handleNotification && handleNotification(registerOrderId)
  }, [registerOrderId, messageListView])

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, activeSwitch, messageListView])

  return (
    <>
      {orderStatusTitle && (
        <OrderStatusTitle>
          <GoTriangleDown
            className={`${setRotate}`}
            onClick={() => toggleOrderList()}
          />
          {orderStatusTitle}
        </OrderStatusTitle>
      )}
      {!(orderList.loading || driversList.loading) && orderList.orders.length === 0 ? (
        <>
          <WrapperNoneOrders
            small={orderListView === 'small'}
            ref={noneContent}
            style={{ maxHeight: `${setNoneOrderHeight}` }}
          >
            <InnerNoneOrdersContainer>
              <img src={theme?.images?.dummies?.nonOrders} alt='none' />
            </InnerNoneOrdersContainer>
          </WrapperNoneOrders>
        </>
      ) : (
        <WrapperOrderListContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <InnerOrderListContent
            small={orderListView === 'small'}
          >
            {orderListView === 'big' &&
              !(orderList.loading || driversList.loading) ? (
                <>
                  {currentOrders.map(order => (
                    <React.Fragment key={order.id}>
                      {orderListView === 'big' && (
                        <OrderItemAccordion
                          order={order}
                          size={size}
                          drivers={driversList.drivers}
                          pendingOrder={pendingOrder}
                          preOrder={preOrder}
                          selectedOrderIds={selectedOrderIds}
                          handleUpdateOrderStatus={handleUpdateOrderStatus}
                          handleSelectedOrderIds={handleSelectedOrderIds}
                          handleOpenOrderDetail={handleOpenOrderDetail}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <SkeletonOrder className='skeleton-loading'>
                  {orderListView === 'big' && [...Array(10)].map((item, i) => (
                    <SkeletonCard key={i}>
                      <SkeletonCell>
                        <Skeleton width={10} height={10} />
                        <SkeletonText>
                          <Skeleton width={100} />
                          <Skeleton width={100} />
                        </SkeletonText>
                      </SkeletonCell>
                      <WrapSkeltonCell>
                        <SkeletonCell>
                          <Skeleton width={50} height={50} />
                          <SkeletonText>
                            <Skeleton width={80} />
                            <Skeleton width={80} />
                          </SkeletonText>
                        </SkeletonCell>
                        <Skeleton width={80} />
                        <Skeleton width={80} />
                      </WrapSkeltonCell>
                      <WrapSkeltonCell>
                        <SkeletonCell>
                          <Skeleton width={50} height={50} />
                          <SkeletonText>
                            <Skeleton width={80} />
                            <Skeleton width={80} />
                          </SkeletonText>
                        </SkeletonCell>
                        <Skeleton width={80} />
                        <Skeleton width={80} />
                      </WrapSkeltonCell>
                      <WrapSkeltonCell>
                        <SkeletonCell>
                          <Skeleton width={50} height={50} />
                          <SkeletonText>
                            <Skeleton width={80} />
                            <Skeleton width={80} />
                          </SkeletonText>
                        </SkeletonCell>
                        <Skeleton width={80} />
                        <Skeleton width={80} />
                      </WrapSkeltonCell>
                      <SkeletonCell>
                        <Skeleton width={40} height={40} />
                      </SkeletonCell>
                      <SkeletonCell>
                        <Skeleton width={100} height={30} />
                      </SkeletonCell>
                      <SkeletonCell>
                        <Skeleton width={60} height={20} />
                      </SkeletonCell>
                    </SkeletonCard>
                  ))}
                </SkeletonOrder>
              )}

            {orderListView === 'small' && (
              <>
                {!(orderList.loading || driversList.loading) ? currentOrders.map(order => (
                  <React.Fragment key={order.id}>
                    <SmallOrderItemAccordion
                      order={order}
                      messageOrder={messageOrder}
                      interActionMapOrder={interActionMapOrder}
                      activeSwitch={activeSwitch}
                      drivers={driversList.drivers}
                      pendingOrder={pendingOrder}
                      preOrder={preOrder}
                      handleOpenMessage={handleOpenMessage}
                      handleUpdateOrderStatus={handleUpdateOrderStatus}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                      handleLocation={handleLocation}
                      handleUpdateDriverLocation={handleUpdateDriverLocation}
                    />
                  </React.Fragment>
                )
                ) : (
                  <SkeletonOrder>
                    {[...Array(4)].map((item, i) => (
                      <SkeletonCard small key={i}>
                        <SkeletonBlock>
                          <SkeletonCell>
                            <Skeleton width={50} height={50} />
                            <SkeletonText>
                              <Skeleton width={80} />
                              <Skeleton width={80} />
                            </SkeletonText>
                          </SkeletonCell>
                          <SkeletonCell>
                            <SkeletonText>
                              <Skeleton width={120} />
                              <Skeleton width={80} />
                            </SkeletonText>
                          </SkeletonCell>
                        </SkeletonBlock>
                        <SkeletonBlock>
                          <Skeleton width={150} height={40} />
                          <Skeleton width={150} height={40} />
                        </SkeletonBlock>
                        <SkeletonBlock>
                          <Skeleton width={320} height={30} />
                        </SkeletonBlock>
                      </SkeletonCard>
                    ))}
                  </SkeletonOrder>
                )}
              </>
            )}

            {pagination && (
              <>
                {!orderList.loading && totalPages > 0 && (
                  <OrdersPagination
                    ordersPerPage={ordersPerPage}
                    totalOrders={totalOrders}
                    // totalOrders={pagination.total}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    // totalPages={pagination.total_pages}
                    prevPaginate={prevPaginate}
                    nextPaginate={nextPaginate}
                  />
                )}
              </>
            )}
          </InnerOrderListContent>
        </WrapperOrderListContent>
      )}
    </>
  )
}
