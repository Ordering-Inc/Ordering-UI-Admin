import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useLanguage, useUtils, useConfig } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Pagination } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { addQueryToUrl } from '../../../utils'

import {
  OrdersListContainer,
  OrderCard,
  OrderHeader,
  ViewDetails,
  InfoItemContainer,
  WrapperImage,
  CardContent,
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
    pagination,
    getPageOrders,
    handleOpenOrderDetail,
    selectedOrderCard,
    handleOrderCardClick,
    handleUpdateDriverLocation,
    slaSettingTime,
    isDelivery,
    isUseQuery,
    franchisesList
  } = props
  const [{ dictionary }, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [{ parseDate, optimizeImage }] = useUtils()
  const [, setCurrentTime] = useState()
  const [configState] = useConfig()
  const [allowColumns, setAllowColumns] = useState({
    timer: true,
    slaBar: true
  })
  const showExternalId = configState?.configs?.change_order_id?.value === '1'
  const cateringTypes = [7, 8]
  const franchiseImages = !franchisesList?.error && franchisesList?.franchises?.reduce((imageKeys, franchise) => {
    imageKeys[franchise.id] = franchise.logo
    return imageKeys
  }, {})

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
    const element = document.getElementById('deliveryDashboard')
    if ((isDelivery || isMessagesView) && width < 993 && element) element.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const getOrderStatus = (s) => {
    if (!dictionary) return s

    const orderStatus = {
      0: dictionary?.PENDING ?? 'Pending',
      1: dictionary?.COMPLETED_BY_ADMIN ?? 'Completed by admin',
      2: dictionary?.REJECTED ?? 'Rejected',
      3: dictionary?.ORDER_STATUS_IN_BUSINESS ?? 'Driver arrived to business',
      4: dictionary?.PREPARATION_COMPLETED ?? 'Preparation Completed',
      5: dictionary?.REJECTED_BY_BUSINESS ?? 'Rejected by business',
      6: dictionary?.REJECTED_BY_DRIVER ?? 'Rejected by Driver',
      7: dictionary?.ACCEPTED_BY_BUSINESS ?? 'Accepted by business',
      8: dictionary?.ACCEPTED_BY_DRIVER ?? 'Accepted by driver',
      9: dictionary?.PICK_UP_COMPLETED_BY_DRIVER ?? 'Pick up completed by driver',
      10: dictionary?.PICK_UP_FAILED_BY_DRIVER ?? 'Pick up Failed by driver',
      11: dictionary?.DELIVERY_COMPLETED_BY_DRIVER ?? 'Delivery completed by driver',
      12: dictionary?.DELIVERY_FAILED_BY_DRIVER ?? 'Delivery Failed by driver',
      13: dictionary?.PREORDER ?? 'PreOrder',
      14: dictionary?.ORDER_NOT_READY ?? 'Order not ready',
      15: dictionary?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER ?? 'Order picked up completed by customer',
      16: dictionary?.ORDER_STATUS_CANCELLED_BY_CUSTOMER ?? 'Order cancelled by customer',
      17: dictionary?.ORDER_NOT_PICKEDUP_BY_CUSTOMER ?? 'Order not picked up by customer',
      18: dictionary?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS ?? 'Driver almost arrived to business',
      19: dictionary?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER ?? 'Driver almost arrived to customer',
      20: dictionary?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS ?? 'Customer almost arrived to business',
      21: dictionary?.ORDER_CUSTOMER_ARRIVED_BUSINESS ?? 'Customer arrived to business',
      22: dictionary?.ORDER_LOOKING_FOR_DRIVER ?? 'Looking for driver',
      23: dictionary?.ORDER_DRIVER_ON_WAY ?? 'Driver on way'
    }

    return orderStatus?.[Number(s)] ?? s
  }

  const getDelayMinutes = (order) => {
    // targetMin = delivery_datetime  + eta_time - now()
    const offset = 300
    const cdtToutc = moment(order?.delivery_datetime).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    const _delivery = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc)
      : parseDate(cdtToutc)
    const _eta = order?.eta_time
    const diffTimeAsSeconds = moment(_delivery).add(_eta, 'minutes').diff(moment().utc(), 'seconds')
    return Math.ceil(diffTimeAsSeconds / 60)
  }

  const displayDelayedTime = (order) => {
    let tagetedMin = getDelayMinutes(order)
    // get day, hour and minutes
    const sign = tagetedMin >= 0 ? '' : '- '
    tagetedMin = Math.abs(tagetedMin)
    let day = Math.floor(tagetedMin / 1440)
    const restMinOfTargetedMin = tagetedMin - 1440 * day
    let restHours = Math.floor(restMinOfTargetedMin / 60)
    let restMins = restMinOfTargetedMin - 60 * restHours
    // make standard time format
    day = day === 0 ? '' : day + 'day  '
    restHours = restHours < 10 ? '0' + restHours : restHours
    restMins = restMins < 10 ? '0' + restMins : restMins

    const finalTaget = sign + day + restHours + ':' + restMins
    return finalTaget
  }

  // const getStatusClassName = (minutes) => {
  //   if (isNaN(Number(minutes))) return 'in_time'
  //   const delayTime = configState?.configs?.order_deadlines_delayed_time?.value
  //   return minutes > 0 ? 'in_time' : Math.abs(minutes) <= delayTime ? 'at_risk' : 'delayed'
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(Date.now())
  //   }, slaSettingTime)

  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    if (orderList.loading || !selectedOrderCard) return
    const updatedOrder = orderList?.orders.find(order => order.id === selectedOrderCard?.id)
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder)
    }
  }, [orderList?.orders])

  useEffect(() => {
    const slaSettings = configState?.configs?.order_deadlines_enabled?.value === '1'
    setAllowColumns({
      ...allowColumns,
      timer: slaSettings,
      slaBar: slaSettings
    })
  }, [configState.loading])

  useEffect(() => {
    if (!isUseQuery || !pagination?.currentPage || !pagination?.pageSize || !pagination?.total) return
    addQueryToUrl({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    })
  }, [pagination?.currentPage, pagination?.pageSize, pagination?.total])

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
                <InfoItemContainer>
                  <WrapperImage isSkeleton>
                    <Skeleton width={45} height={45} />
                  </WrapperImage>
                  <div className='info'>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={100} /></p>
                  </div>
                </InfoItemContainer>
                <InfoItemContainer>
                  <WrapperImage isSkeleton>
                    <Skeleton width={45} height={45} />
                  </WrapperImage>
                  <div className='info'>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={100} /></p>
                  </div>
                </InfoItemContainer>
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
                      <span>{t('INVOICE_ORDER_NO', 'Order No.')} {(showExternalId && !!order?.external_id) ? order.external_id : order.id}</span>
                    </h2>
                    <p>{getOrderStatus(order.status)}</p>
                    <div>
                      {cateringTypes.includes(order?.delivery_type) && (
                        <p className='date'>
                          {
                            `${t('CREATED_AT', 'Created at')}: ${parseDate(order?.created_at)}`
                          }
                        </p>
                      )}
                      <p>
                        {
                          `${cateringTypes.includes(order?.delivery_type) ? `${t('PLACED_TO', 'Placed to')}:` : ''} ${order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}`
                        }
                      </p>
                      <ViewDetails
                        className='view-details'
                        onClick={() => handleOpenOrderDetail(order)}
                      >
                        {t('VIEW_DETAILS', 'View details')}
                      </ViewDetails>
                    </div>
                  </OrderHeader>
                  {allowColumns?.timer && (
                    <Timer>
                      <p className='bold'>Timer</p>
                      <p className={order?.time_status}>{displayDelayedTime(order)}</p>
                    </Timer>
                  )}
                </CardHeading>
                {isMessagesView && order?.unread_count > 0 && (
                  <UnreadMessageCounter>
                    {order?.unread_count}
                  </UnreadMessageCounter>
                )}
                <CardContent>
                  <InfoItemContainer>
                    <WrapperImage>
                      <img src={optimizeImage(franchiseImages[order?.business?.franchise_id] || order.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} loading='lazy' alt='' />
                    </WrapperImage>
                    <div className='info'>
                      <p className='bold'>{order?.business?.name}</p>
                      <p>{order?.business?.city?.name}</p>
                    </div>
                  </InfoItemContainer>
                  <InfoItemContainer>
                    <WrapperImage>
                      {order?.driver?.photo ? (
                        <img src={optimizeImage(order?.driver?.photo, 'h_50,c_limit')} loading='lazy' alt='' />
                      ) : (
                        <FaUserAlt />
                      )}
                    </WrapperImage>
                    <div className='info'>
                      {order?.driver ? (
                        <>
                          <p className='bold'>{order?.driver?.name}</p>
                          <p>{order?.driver?.cellphone}</p>
                        </>
                      ) : (
                        <p className='bold'>{t('NO_DRIVER', 'No Driver')}</p>
                      )}
                    </div>
                  </InfoItemContainer>
                </CardContent>
                {allowColumns?.slaBar && (
                  <Timestatus timeState={order?.time_status} />
                )}
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
