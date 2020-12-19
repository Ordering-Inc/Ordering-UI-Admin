import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { OrderItemAccordion } from '../OrderItemAccordion'
import { SmallOrderItemAccordion } from '../SmallOrderItemAccordion'
import { OrdersPagination } from '../OrdersPagination'

import {
  OrderStatusTitle,
  WrapperNoneOrders,
  SkeletonOrder,
  SkeletonCard,
  SkeletonCell,
  SkeletonText,
  SkeletonBlock,
  WrapperOrderListContent
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
    handleOpenOrderDetail
  } = props

  const theme = useTheme()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage] = useState(10)

  // Get current orders
  const indexOfLastPost = currentPage * ordersPerPage
  const indexOfFirstPost = indexOfLastPost - ordersPerPage
  const currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost)
  const [totalPages, setTotalPages] = useState(null)

  // Change page
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    const _totalPages = Math.ceil(orderList.orders.length / ordersPerPage)
    setTotalPages(_totalPages)
  }, [orderList])

  useEffect(() => {
    if (orderList.loading) {
      setCurrentPage(1)
    }
  }, [orderList])

  return (
    <>
      <OrderStatusTitle>{orderStatusTitle}</OrderStatusTitle>
      {!(orderList.loading || driversList.loading) && orderList.orders.length === 0 ? (
        <>
          <WrapperNoneOrders small={orderListView === 'small'}>
            <img src={theme?.images?.dummies?.nonOrders} alt='none' />
          </WrapperNoneOrders>
        </>
      ) : (
        <WrapperOrderListContent small={orderListView === 'small'}>
          {orderListView === 'big' &&
            !(orderList.loading || driversList.loading) ? (
              <>
                {currentOrders.map(order => (
                  <React.Fragment key={order.id}>
                    {orderListView === 'big' && (
                      <OrderItemAccordion
                        order={order}
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
                    <SkeletonCell>
                      <Skeleton width={50} height={50} />
                      <SkeletonText>
                        <Skeleton width={80} />
                        <Skeleton width={80} />
                      </SkeletonText>
                    </SkeletonCell>
                    <SkeletonCell>
                      <Skeleton width={50} height={50} />
                      <SkeletonText>
                        <Skeleton width={80} />
                        <Skeleton width={80} />
                      </SkeletonText>
                    </SkeletonCell>
                    <SkeletonCell>
                      <Skeleton width={50} height={50} />
                      <SkeletonText>
                        <Skeleton width={80} />
                      </SkeletonText>
                    </SkeletonCell>
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
              {!(orderList.loading || driversList.loading) ? orderList.orders.map(order => (
                <React.Fragment key={order.id}>
                  <SmallOrderItemAccordion
                    order={order}
                    drivers={driversList.drivers}
                    pendingOrder={pendingOrder}
                    preOrder={preOrder}
                    handleUpdateOrderStatus={handleUpdateOrderStatus}
                    handleOpenOrderDetail={handleOpenOrderDetail}
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
              {!orderList.loading && pagination.totalPages && (
                <OrdersPagination
                  ordersPerPage={ordersPerPage}
                  totalOrders={orderList.orders.length}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  prevPaginate={prevPaginate}
                  nextPaginate={nextPaginate}
                />
              )}
            </>
          )}
        </WrapperOrderListContent>
      )}
    </>
  )
}
