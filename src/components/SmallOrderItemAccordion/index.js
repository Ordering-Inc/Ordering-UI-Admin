import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, useUtils } from 'ordering-components'
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
  UnreadMessageIndicator
} from './styles'

export const SmallOrderItemAccordion = (props) => {
  const {
    order,
    drivers,
    pendingOrder,
    preOrder,
    activeSwitch,
    messageOrder,
    handleUpdateOrderStatus,
    handleOpenOrderDetail,
    handleOpenMessage
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

  const handleGoToPage = (e) => {
    if (activeSwitch.messages) {
      handleOpenMessage(order, '')
    } else {
      const isActionClick = driverSelectorRef.current?.contains(e.target) || orderStatusRef.current?.contains(e.target)
      if (!isActionClick) {
        history.push(`/orders-deliveries?id=${order.id}`)
        handleOpenOrderDetail(order.id)
      }
    }
  }

  return (
    <OrderItemContainer
      onClick={(e) => handleGoToPage(e)}
      messageUI={activeSwitch.messages}
      messageUIActive={messageOrder.id === order.id}
    >
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
              {activeSwitch.messages && order?.unread_count > 0 && (
                <UnreadMessageIndicator>
                  {order?.unread_count}
                </UnreadMessageIndicator>
              )}
            </DeliveryName>
          </DeliveryType>
        </DeliveryInfo>
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
