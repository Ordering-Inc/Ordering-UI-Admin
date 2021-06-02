import React, { useCallback, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { DriverSelector } from '../DriverSelector'

import {
  OrdersListContainer,
  OrderCard,
  OrderHeader,
  ViewDetails,
  BusinessInfo,
  WrapperImage,
  Image,
  CardContent,
  DriverSelectorWrapper
} from './styles'

export const OrdersCards = (props) => {
  const {
    orderList,
    driversList,
    pagination,
    selectedOrderIds,
    loadMoreOrders,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleOpenOrderDetail,
    interActionMapOrder,
    handleLocation,
    handleUpdateDriverLocation
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage, getTimeAgo }] = useUtils()

  const handleOrderClick = (e, order) => {
    const isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector')
    if (isInvalid) return
    handleLocation(order)
  }

  const handleScroll = useCallback(() => {
    const ordersContent = document.getElementById('cardOrders')
    const hasMore = pagination.to < pagination.total
    if (orderList.loading || !hasMore) return
    if ((ordersContent?.scrollTop + 50) >= (ordersContent?.scrollHeight - ordersContent?.offsetHeight)) {
      loadMoreOrders()
    }
  }, [orderList, pagination])

  useEffect(() => {
    const ordersContent = document.getElementById('cardOrders')
    ordersContent.addEventListener('scroll', handleScroll)
    return () => ordersContent.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (orderList.loading || !interActionMapOrder) return
    const updatedOrder = orderList?.orders.find(order => order.id === interActionMapOrder?.id)
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder)
    }

  }, [orderList?.orders])

  return (
    <OrdersListContainer>
      {orderList?.orders?.map(order => (
        <OrderCard
          key={order.id}
          active={interActionMapOrder?.id === order.id}
          onClick={(e) => handleOrderClick(e, order)}
        >
          <OrderHeader>
            <h2>{t('ORDER_NO', 'Order No.')} {order?.id}</h2>
            <div>
              <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
              <ViewDetails
                className='view-details'
                onClick={() => handleOpenOrderDetail(order.id)}
              >
                {t('VIEW_DETAILS', 'View details')}
              </ViewDetails>
            </div>
          </OrderHeader>
          <CardContent>
            <BusinessInfo>
              <WrapperImage>
                <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              </WrapperImage>
              <div className='info'>
                <p className='bold'>{order?.business?.name}</p>
                <p>{order?.business?.city?.name}</p>
              </div>
            </BusinessInfo>
            <DriverSelectorWrapper
              className='driver-selector'
            >
              <DriverSelector
                orderView
                padding='5px 0'
                defaultValue={order?.driver_id ? order.driver_id : 'default'}
                drivers={driversList.drivers}
                order={order}
              />
            </DriverSelectorWrapper>
          </CardContent>
        </OrderCard>
      ))}
      {orderList.loading && (
        [...Array(10).keys()].map(i => (
          <OrderCard key={i}>
            <OrderHeader>
              <Skeleton width={100} height={30} />
              <div>
                <Skeleton width={150} />
                <ViewDetails>
                  <Skeleton width={100} />
                </ViewDetails>
              </div>
            </OrderHeader>
            <CardContent>
              <BusinessInfo>
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <div className='info'>
                  <p><Skeleton width={100} /></p>
                  <p><Skeleton width={100} /></p>
                </div>
              </BusinessInfo>
              <BusinessInfo>
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <div className='info'>
                  <p><Skeleton width={100} /></p>
                  <p><Skeleton width={100} /></p>
                </div>
              </BusinessInfo>
            </CardContent>
          </OrderCard>
        ))
      )}
    </OrdersListContainer>
  )
}
