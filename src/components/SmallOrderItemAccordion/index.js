import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, useUtils } from 'ordering-components'
import { getAgoMinutes } from '../../utils'

import { useTheme } from 'styled-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'

import {
  OrderItemContainer,
  WrapperInfo,
  WrapperAccordionImage,
  AccordionImage,
  BusinessInfo,
  BusinessContent,
  DeliveryInfo,
  DeliveryType,
  DeliveryIcon,
  DeliveryName,
  CustomerInfo,
  CustomerContent,
  WrapperOrderStatus,
  DriverInfo,
  WrapperDriverSelector,
  UnreadMessageIndicator,
  OrderLabelItem,
  MoreDetailsButton,
  TimeAgo,
  WrapIndicator
} from './styles'

export const SmallOrderItemAccordion = (props) => {
  const {
    order,
    drivers,
    pendingOrder,
    preOrder,
    activeSwitch,
    messageOrder,
    interActionMapOrder,
    handleUpdateOrderStatus,
    handleOpenOrderDetail,
    handleOpenMessage,
    handleLocation
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const history = useHistory()
  const [{ parseDate }] = useUtils()

  const driverSelectorRef = useRef(null)
  const orderStatusRef = useRef(null)
  const businessRef = useRef(null)
  const customerRef = useRef(null)
  const driverRef = useRef(null)
  const moreDetailRef = useRef(null)

  const [diffTime, setDiffTime] = useState(getAgoMinutes(order?.delivery_datetime))

  const handleLocationAndMessage = (e) => {
    if (activeSwitch.messages) {
      handleOpenMessage(order, '')
    } else {
      const isActionClick = driverSelectorRef.current?.contains(e.target) || orderStatusRef.current?.contains(e.target)
      if (!isActionClick) {
        if (moreDetailRef.current?.contains(e.target)) {
          history.push(`/orders-deliveries?id=${order.id}`)
          handleOpenOrderDetail(order.id)
        } else {
          handleLocation(order)
        }
      }
    }
  }

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

  useEffect(() => {
    if (interActionMapOrder === null || !activeSwitch?.deliveries) return
    handleLocation(order)
  }, [order?.driver])

  useEffect(() => {
    const deActive = order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12
    if (deActive) return
    const timer = setInterval(() => {
      setDiffTime(getAgoMinutes(order?.delivery_datetime))
    }, 60 * 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <OrderItemContainer
      filterColor={
        order?.logistic_status === -1 || order?.logistic_status === 0
          ? theme?.colors?.deadlineOk
          : order.logistic_status === 1
            ? theme?.colors?.deadlineDelayed
            : theme?.colors?.deadlineRisk
      }
      onClick={(e) => handleLocationAndMessage(e)}
      messageUI={activeSwitch.messages}
      messageUIActive={messageOrder?.id === order.id}
      deliveryUI={activeSwitch.deliveries}
      deliveryUIActive={interActionMapOrder?.id === order.id}
    >
      <WrapIndicator>
        {activeSwitch.messages && order?.unread_count > 0 && (
          <UnreadMessageIndicator>
            {order?.unread_count}
          </UnreadMessageIndicator>
        )}
      </WrapIndicator>
      <WrapperInfo>
        <BusinessInfo className='order-item-business' ref={businessRef}>
          <WrapperAccordionImage>
            <AccordionImage bgimage={order?.business?.logo} />
          </WrapperAccordionImage>
          <BusinessContent>
            <h1>
              {t('ORDER_NO', 'Order No')}. {order?.id}
            </h1>
            <p>{order?.business?.name}</p>
            {activeSwitch?.deliveries && (
              <MoreDetailsButton ref={moreDetailRef}>
                {t('MORE_DETAIL', 'More detail')}
              </MoreDetailsButton>
            )}
          </BusinessContent>
        </BusinessInfo>
        <DeliveryInfo>
          <p>
            {parseDate(order?.delivery_datetime, { utc: false })}
          </p>
          <DeliveryType>
            <DeliveryIcon>
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
            </DeliveryIcon>
            <DeliveryName>
              {order?.delivery_type === 1 && (t('DELIVERY', 'Delivery'))}
              {order?.delivery_type === 2 && (t('PICKUP', 'Pickup'))}
              {order?.delivery_type === 3 && (t('EAT_IN', 'Eat in'))}
              {order?.delivery_type === 4 && (t('CURBSIDE', 'Curbside'))}
              {order?.delivery_type === 5 && (t('DRIVE_THRU', 'Drive thru'))}
            </DeliveryName>
          </DeliveryType>
          {!(order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12) && (
            <TimeAgo>{diffTime}</TimeAgo>
          )}
        </DeliveryInfo>
      </WrapperInfo>
      <WrapperInfo border>
        <OrderLabelItem>
          <strong>{t('LOGISTIC', 'Logistic')}:</strong>
          <span>{getLogisticTag(order?.logistic_status)}</span>
        </OrderLabelItem>
        <OrderLabelItem>
          <strong>{t('PRIORITY', 'Priority')}:</strong>
          <span>{getPriorityTag(order?.priority)}</span>
        </OrderLabelItem>
        <OrderLabelItem>
          <strong>{t('ATTEMPTS', 'Attempts')}:</strong>
          <span>{order?.logistic_attemps}</span>
        </OrderLabelItem>
      </WrapperInfo>
      <WrapperInfo>
        <CustomerInfo ref={customerRef}>
          <WrapperAccordionImage small>
            {order?.customer?.photo ? (
              <AccordionImage bgimage={order?.customer?.photo} />
            ) : (
              <FaUserAlt />
            )}
          </WrapperAccordionImage>
          <CustomerContent>
            <p>
              {order?.customer?.name} {order?.customer?.lastname}
            </p>
            <p>{t('CUSTOMER', 'Customer')}</p>
          </CustomerContent>
        </CustomerInfo>
        <DriverInfo
          ref={driverRef}
        >
          <WrapperDriverSelector ref={driverSelectorRef}>
            {order?.delivery_type === 1 && (
              <DriverSelector
                small
                orderView
                padding='5px 0'
                defaultValue={order?.driver_id ? order.driver_id : 'default'}
                drivers={drivers}
                order={order}
              />
            )}
          </WrapperDriverSelector>
        </DriverInfo>
      </WrapperInfo>
      <WrapperOrderStatus ref={orderStatusRef}>
        <OrderStatusTypeSelector
          defaultValue={parseInt(order?.status)}
          orderId={order.id}
          deliveryType={order?.delivery_type}
          pendingOrder={pendingOrder}
          preOrder={preOrder}
          noPadding
          handleUpdateOrderStatus={handleUpdateOrderStatus}
        />
      </WrapperOrderStatus>
    </OrderItemContainer>
  )
}
