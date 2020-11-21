import React from 'react'
import { range } from 'lodash'
import Skeleton from 'react-loading-skeleton'
import {
  OrderList as OrderListController, useLanguage
} from 'ordering-components'

import { OrderItemAccordion } from '../OrderItemAccordion'
import { SmallOrderItemAccordion } from '../SmallOrderItemAccordion'
import { Button } from '../../styles/Buttons'

import {
  OrderStatusTitle,
  NoneOrders,
  SkeletonOrder,
  SkeletonCard,
  SkeletonCell,
  SkeletonText,
  SkeletonBlock,
  WrapPaginationControl,
  WrapperOrderList
} from './styles'

const OrderListUI = (props) => {
  const {
    orderList,
    pagination,
    goToPage,
    orderListView,
    orderStatusTitle
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {orderListView === 'big' && (
        <OrderStatusTitle>{orderStatusTitle}</OrderStatusTitle>
      )}

      {!orderList.loading && orderList.orders.length === 0 ? (
        <>
          {orderListView === 'big' && (
            <NoneOrders>{t('NONE_ORDERS', 'None Orders')}</NoneOrders>
          )}
        </>
      ) : (
        <>
          {
            !orderList.loading ? orderList.orders.map(order => (
              <React.Fragment key={order.id}>
                {orderListView === 'big' && (
                  <OrderItemAccordion order={order} />
                )}
                {orderListView === 'small' && (
                  <SmallOrderItemAccordion order={order} />
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

                {orderListView === 'small' && [...Array(10)].map((item, i) => (
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
            )
          }
        </>
      )}

      {orderListView === 'big' && (
        <WrapPaginationControl>
          {
            pagination.total > 0 && pagination.total > pagination.pageSize && pagination.totalPages && pagination.currentPage <= pagination.totalPages && range(0, pagination.totalPages).map(i => (
              <Button outline circle active={i + 1 === pagination.currentPage && '(Current)'} key={i} onClick={() => goToPage(i + 1)}>{i + 1}</Button>
            ))
          }
        </WrapPaginationControl>
      )}
    </>
  )
}

export const OrderListing = (props) => {
  const {
    selectedOrderStatus,
    orderListView
  } = props

  const [, t] = useLanguage()

  const PendingOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [0],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('PENDING_ORDER', 'Pending Order')
  }

  const AcceptedByBusinessOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [7],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
  }

  const AcceptedByDriverOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [8],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('ACCEPTED_BY_Driver', 'Accepted by Driver')
  }

  const DriverArrivedByBusinessOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [3],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  }

  const CompletedByAdminOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [1],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('COMPLETED_BY_ADMING', 'Completed by admin')
  }

  const DeliveryCompletedByDriverOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [11],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }

  const RejectedByAdminOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [2],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('REJECTED_BY_ADMIN', 'Rejected by admin')
  }

  const RejectByBusinessOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [5],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('REJECT_BY_BUSINESS', 'Reject by business')
  }

  const RejectByDriverOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [6],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('REJECT_BY_DRIVER', 'Reject by driver')
  }

  const PickupFailedByDriverOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [10],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
  }

  const DeliveryFailedByDriverOrdersControlProps = {
    UIComponent: OrderListUI,
    orderStatus: [12],
    asDashboard: true,
    orderDirection: 'asc',
    useDefualtSessionManager: true,
    orderListView: orderListView,
    orderStatusTitle: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
  }

  return (
    <WrapperOrderList>
      {selectedOrderStatus === 'pending' && (
        <>
          <OrderListController {...PendingOrdersControlProps} />
        </>
      )}

      {selectedOrderStatus === 'inProgress' && (
        <>
          <OrderListController {...AcceptedByBusinessOrdersControlProps} />
          <OrderListController {...AcceptedByDriverOrdersControlProps} />
          <OrderListController {...DriverArrivedByBusinessOrdersControlProps} />
        </>
      )}

      {selectedOrderStatus === 'completed' && (
        <>
          <OrderListController {...CompletedByAdminOrdersControlProps} />
          <OrderListController {...DeliveryCompletedByDriverOrdersControlProps} />
        </>
      )}

      {selectedOrderStatus === 'cancelled' && (
        <>
          <OrderListController {...RejectedByAdminOrdersControlProps} />
          <OrderListController {...RejectByBusinessOrdersControlProps} />
          <OrderListController {...RejectByDriverOrdersControlProps} />
          <OrderListController {...PickupFailedByDriverOrdersControlProps} />
          <OrderListController {...DeliveryFailedByDriverOrdersControlProps} />
        </>
      )}
    </WrapperOrderList>
  )
}
