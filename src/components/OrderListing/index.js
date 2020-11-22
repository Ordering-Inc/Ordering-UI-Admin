import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { OrderItemAccordion } from '../OrderItemAccordion'
import { SmallOrderItemAccordion } from '../SmallOrderItemAccordion'

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
    orderListView,
    orderStatusTitle
  } = props

  const theme = useTheme()

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
            !orderList.loading ? orderList.orders.map(order => (
              <React.Fragment key={order.id}>
                {orderListView === 'big' && (
                  <OrderItemAccordion order={order} />
                )}
              </React.Fragment>
            )
            ) : (
              <SkeletonOrder>
                {orderListView === 'big' && [...Array(8)].map((item, i) => (
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
                  <SmallOrderItemAccordion order={order} />
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
        </WrapperOrderListContent>
      )}
    </>
  )
}
