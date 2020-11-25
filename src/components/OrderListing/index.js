import React, { useState, useEffect } from 'react'
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
    updateOrdersSelectedStatus,
    orderListView,
    orderStatusTitle,
    handleUpdateOrderStatus,
    handleSelectedOrderIds
  } = props

  const theme = useTheme()

  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage] = useState(10)

  // Get current orders
  const indexOfLastPost = currentPage * ordersPerPage
  const indexOfFirstPost = indexOfLastPost - ordersPerPage
  const currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== Math.ceil(orderList.orders.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    console.log(orderList)
  }, [orderList])

  return (
    <>
      <OrderStatusTitle>{orderStatusTitle}</OrderStatusTitle>

      {!orderList.loading && orderList.orders.length === 0 ? (
        <>
          <WrapperNoneOrders small={orderListView === 'small'}>
            <img src={theme?.images?.dummies?.nonOrders} alt='none' />
          </WrapperNoneOrders>
        </>
      ) : (
        <WrapperOrderListContent small={orderListView === 'small'}>
          {orderListView === 'big' &&
            !orderList.loading ? currentOrders.map(order => (
              <React.Fragment key={order.id}>
                {orderListView === 'big' && (
                  <OrderItemAccordion
                    order={order}
                    driversList={driversList}
                    updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                    handleUpdateOrderStatus={handleUpdateOrderStatus}
                    handleSelectedOrderIds={handleSelectedOrderIds}
                  />
                )}
              </React.Fragment>
            )
            ) : (
              <SkeletonOrder>
                {orderListView === 'big' && [...Array(10)].map((item, i) => (
                  <SkeletonCard key={i}>
                    <SkeletonCell>
                      <Skeleton width={10} height={10} />
                      <SkeletonText>
                        <Skeleton width={100} />
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
              {!orderList.loading ? orderList.orders.map(order => (
                <React.Fragment key={order.id}>
                  <SmallOrderItemAccordion
                    order={order}
                    driversList={driversList}
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
                          <Skeleton width={50} height={50} />
                          <SkeletonText>
                            <Skeleton width={80} />
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

          {!orderList.loading && orderList.orders.length > ordersPerPage && (
            <OrdersPagination
              ordersPerPage={ordersPerPage}
              totalOrders={orderList.orders.length}
              currentPage={currentPage}
              paginate={paginate}
              prevPaginate={prevPaginate}
              nextPaginate={nextPaginate}
            />
          )}
        </WrapperOrderListContent>
      )}
    </>
  )
}
