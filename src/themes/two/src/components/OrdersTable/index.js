import React, { useCallback, useEffect } from 'react'
import GrCheckbox from '@meronex/icons/gr/GrCheckbox'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import RiCheckboxLine from '@meronex/icons/ri/RiCheckboxLine';
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { DriverSelector } from '../../../../../components/DriverSelector'
import { OrderStatusTypeSelector } from '../../../../../components/OrderStatusTypeSelector'
import {
  OrdersContainer,
  Table,
  OrderNumberContainer,
  CheckBox,
  WrapperImage,
  Image,
  BusinessInfo,
  CustomerInfo,
  DriversInfo,
  OrderType,
  WrapOrderStatusSelector,
  FromNow,
  OrderPrice
} from './styles'

export const OrdersTable = (props) => {
  const {
    orderList,
    driversList,
    pagination,
    loadMoreOrders,
    handleUpdateOrderStatus
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage, getTimeAgo }] = useUtils()

  const getLogisticTag = (status) => {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In progress')
      case 2:
        return t('IN_QUEUE', 'In queue')
      case 3:
        return t('EXPIRED', 'Expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getPriorityTag = (priority) => {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low')
      case 0:
        return t('NORMAL', 'Normal')
      case 1:
        return t('HIGH', 'High')
      case 2:
        return t('URGENT', 'Urgent')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const handleScroll = useCallback(() => {
    const ordersContent = document.getElementById('orders')
    const hasMore = !(pagination.totalPages === pagination.currentPage)
    if (orderList.loading || !hasMore) return
    if ((ordersContent?.scrollTop + 50) >= (ordersContent?.scrollHeight - ordersContent?.offsetHeight)) {
      loadMoreOrders()
    }
  }, [orderList, pagination])

  useEffect(() => {
    const ordersContent = document.getElementById('orders')

    ordersContent.addEventListener('scroll', handleScroll)
    return () => ordersContent.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
 
  return (
    <OrdersContainer>
      <Table>
        <thead>
          <tr>
            <th className='orderNo'>{t('ORDER', 'Order')}</th>
            <th className='businessInfo'>{t('BUSINESS', 'Business')}</th>
            <th className='customerInfo'>{t('CUSTOMER', 'Customer')}</th>
            <th className='driverInfo'>{t('DRIVER', 'Driver')}</th>
            <th className='orderType'>{t('ORDER_TYPE', 'Order type')}</th>
            <th className='orderStatusTitle'>{t('ORDER_STATUS', 'Order status')}</th>
            <th colSpan={3} className='advanced'>{t('ADVANCE_LOGISTICS', 'Advance logistics')}</th>
            <th className='fromNow'>{t('FROM_NOW', 'From now')}</th>
            <th className='orderPrice'>{t('PRICE', 'Price')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody id='orders'>
          {!(orderList.loading || driversList.loading) ? orderList?.orders.map(order => (
            <tr key={order.id}>
              <td className='orderNo'>
                <OrderNumberContainer>
                  <CheckBox>
                    <RiCheckboxLine />
                  </CheckBox>
                  <div className='info'>
                    <p>{t('ORDER_NO', 'Order No.')} {order?.id}</p>
                    <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
                  </div>
                </OrderNumberContainer>
              </td>
              <td className='businessInfo'>
                <BusinessInfo>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                  </WrapperImage>
                  <div className='info'>
                    <p>{order?.business?.name}</p>
                    <p>{order?.business?.city?.name}</p>
                  </div>
                </BusinessInfo>
              </td>
              <td className='customerInfo'>
                <CustomerInfo>
                  <WrapperImage>
                    {order?.customer?.photo ? (
                      <Image bgimage={order?.customer?.photo} />
                    ) : (
                      <FaUserAlt />
                    )}
                  </WrapperImage>
                  <div className='info'>
                    <p>{order?.customer?.name}</p>
                    <p>{order?.customer?.cellphone}</p>
                  </div>
                </CustomerInfo>
              </td>
              <td className='driverInfo'>
                {order?.delivery_type === 1 && (
                  <DriversInfo>
                    <DriverSelector
                      orderView
                      padding='5px 0'
                      defaultValue={order?.driver_id ? order.driver_id : 'default'}
                      drivers={driversList.drivers}
                      order={order}
                    />
                  </DriversInfo>
                )}
              </td>
              <td className='orderType'>
                <OrderType>
                  {order?.delivery_type === 1 && (
                    <img
                      src={theme?.images?.icons?.driverDelivery}
                      alt='Delivery'
                    />
                  )}
                  {order?.delivery_type === 2 && (
                    <img
                      src={theme?.images?.icons?.pickUp}
                      alt='pick up'
                    />
                  )}
                  {order?.delivery_type === 3 && (
                    <AiFillShop />
                  )}
                  {order?.delivery_type === 4 && (
                    <GiFoodTruck />
                  )}
                  {order?.delivery_type === 5 && (
                    <FaCarSide />
                  )}
                </OrderType>
              </td>
              <td className='orderStatusTitle'>
                <WrapOrderStatusSelector>
                  <OrderStatusTypeSelector
                    defaultValue={parseInt(order.status)}
                    orderId={order.id}
                    deliveryType={order?.delivery_type}
                    noPadding
                    handleUpdateOrderStatus={handleUpdateOrderStatus}
                  />
                </WrapOrderStatusSelector>
              </td>
              <td className='logistic'>
                <div className='info'>
                  <p>{t('LOGISTIC', 'Logistic')}</p>
                  <p>{getLogisticTag(order?.logistic_status)}</p>
                </div>
              </td>
              <td className='attempts'>
                <div className='info'>
                  <p>{t('ATTEMPTS', 'Attempts')}</p>
                  <p>{order?.logistic_attemps}</p>
                </div>
              </td>
              <td className='priority'>
                <div className='info'>
                  <p>{t('PRIORITY', 'Priority')}</p>
                  <p>{getPriorityTag(order?.priority)}</p>
                </div>
              </td>
              <td className='fromNow'>
                {!(order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12) && (
                  <FromNow>
                    {order?.delivery_datetime_utc
                      ? getTimeAgo(order?.delivery_datetime_utc)
                      : getTimeAgo(order?.delivery_datetime, { utc: false })}
                  </FromNow>
                )}
              </td>
              <td className='orderPrice'>
                <OrderPrice>{parsePrice(order?.summary?.total)}</OrderPrice>
              </td>
              <td></td>
            </tr>
          )) : (
            [...Array(10).keys()].map(i => (
              <tr key={i}>
                <td className='orderNo'>
                  <Skeleton width='100px' />
                </td>
                <td className='businessInfo'>
                  <Skeleton width='100px' />
                </td>
                <td className='customerInfo'>
                  <Skeleton width='100px' />
                </td>
                <td className='driverInfo'>
                  <Skeleton width='100px' />
                </td>
                <td className='orderType'>
                  <Skeleton width='100px' />
                </td>
                <td className='orderStatusTitle'>
                  <Skeleton width='100px' />
                </td>
                <td colSpan={3} className='advanced'>
                  <Skeleton width='200px' />
                </td>
                <td className='fromNow'>
                  <Skeleton width='100px' />
                </td>
                <td className='orderPrice'>
                  <Skeleton width='50px' />
                </td>
                <td>

                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>     
      </OrdersContainer>
  )
}
