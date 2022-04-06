import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { DriverSelector } from '../DriverSelector'
import { Pagination } from '../../Shared'

import {
  OrdersListContainer,
  OrderCard,
  OrderHeader,
  ViewDetails,
  BusinessInfo,
  WrapperImage,
  Image,
  CardContent,
  DriverSelectorWrapper,
  WrapperPagination,
  UnreadMessageCounter,
  Timestatus,
  CardHeading,
  Timer
} from './styles'

export const OrdersCards = (props) => {
  const {
    isMessagesView,

    orderList,
    driversList,
    pagination,
    getPageOrders,
    handleOpenOrderDetail,
    selectedOrderCard,
    handleOrderCardClick,
    handleUpdateDriverLocation
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()
  const [currentTime, setCurrentTime] = useState()

  const handleChangePage = (page) => {
    getPageOrders(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageOrders(pageSize, expectedPage)
  }

  const handleOrderClick = (e, order) => {
    const isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector')
    if (isInvalid) return
    handleOrderCardClick(order)
  }

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending') },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed') },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected') },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business') },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver') },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder') },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready') },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer') },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer') },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer') },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business') },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer') },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business') },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business') },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver') },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', 'Driver on way') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const getDelayTime = (order) => {
    // targetMin = delivery_datetime  + eta_time - now()
    const _delivery = order?.delivery_datetime_utc
    const _eta = order?.eta_time
    const tagetedMin = moment(_delivery).add(_eta, 'minutes').diff(moment().utc(), 'minutes')
    let day = Math.floor(tagetedMin / 1440)
    const restMinOfTargetedMin = tagetedMin - 1440 * day
    let restHours = Math.floor(restMinOfTargetedMin / 60)
    let restMins = restMinOfTargetedMin - 60 * restHours

    if (order?.time_status === 'in_time' || order?.time_status === 'at_risk') day = Math.abs(day)
    if (restHours < 10) restHours = ('0' + restHours)
    if (restMins < 10) restMins = ('0' + restMins)
    const finalTaget = day + 'day  ' + restHours + ':' + restMins
    return finalTaget
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (orderList.loading || !selectedOrderCard) return
    const updatedOrder = orderList?.orders.find(order => order.id === selectedOrderCard?.id)
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder)
    }
  }, [orderList?.orders])

  return (
    <>
      <OrdersListContainer>
        {orderList.loading ? (
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
        ) : (
          <>
            {orderList.orders?.map(order => (
              <OrderCard
                key={order.id}
                active={selectedOrderCard?.id === order.id}
                onClick={(e) => handleOrderClick(e, order)}
              >
                <CardHeading>
                  <OrderHeader>
                    <h2>
                      <span>{t('INVOICE_ORDER_NO', 'Order No.')} {order?.id}</span>
                    </h2>
                    <p>{getOrderStatus(order.status)?.value}</p>
                    <div>
                      <p>
                        {order?.delivery_datetime_utc
                          ? parseDate(order?.delivery_datetime_utc)
                          : parseDate(order?.delivery_datetime, { utc: false })}
                      </p>
                      <ViewDetails
                        className='view-details'
                        onClick={() => handleOpenOrderDetail(order)}
                      >
                        {t('VIEW_DETAILS', 'View details')}
                      </ViewDetails>
                    </div>
                  </OrderHeader>
                  <Timer>
                    <p className='bold'>Timer</p>
                    <p className={order?.time_status}>{getDelayTime(order)}</p>
                  </Timer>
                </CardHeading>
                {isMessagesView && order?.unread_count > 0 && (
                  <UnreadMessageCounter>
                    {order?.unread_count}
                  </UnreadMessageCounter>
                )}
                <CardContent>
                  <BusinessInfo>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
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
                      small
                      padding='0px'
                      defaultValue={order?.driver_id ? order.driver_id : 'default'}
                      drivers={driversList.drivers}
                      order={order}
                    />
                  </DriverSelectorWrapper>
                </CardContent>
                <Timestatus timeState={order?.time_status} />
              </OrderCard>
            ))}
          </>
        )}
      </OrdersListContainer>
      {pagination && (
        <WrapperPagination>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            handleChangePage={handleChangePage}
            defaultPageSize={pagination.pageSize}
            handleChangePageSize={handleChangePageSize}
          />
        </WrapperPagination>
      )}
    </>
  )
}
