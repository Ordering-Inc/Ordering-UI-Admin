import React, { useRef } from 'react'
import { useLanguage, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'
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
  TextContainer
} from './styles'

export const SmallOrderItemAccordion = (props) => {
  const {
    order,
    driversList
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const driverSelectorRef = useRef(null)
  const orderStatusRef = useRef(null)

  const handleGoToPage = (e, data) => {
    const isActionClick = driverSelectorRef.current?.contains(e.target) || orderStatusRef.current?.contains(e.target)

    if (!isActionClick) {
      events.emit('go_to_page', data)
    }
  }

  const handleSelectedDriver = (driver) => {
    console.log(driver)
  }
  return (
    <OrderItemContainer onClick={(e, data) => handleGoToPage(e, { page: 'order_detail', params: { orderId: order.id } })}>
      <WrapperInfo>
        <BusinessInfo>
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
          <p>{order?.delivery_datetime}</p>
          <DeliveryType>
            <DeliveryIcon>
              {order?.delivery_type === 2 ? (
                <img
                  src={theme?.images?.icons?.driverDelivery}
                  alt='Delivery'
                />
              ) : (
                <img src={theme?.images?.icons?.pickUp} alt='pick up' />
              )}
            </DeliveryIcon>
            <DeliveryName>
              {order?.delivery_type === 2
                ? t('DELIVERY', 'Delivery')
                : t('PICKUP', 'Pickup')}
            </DeliveryName>
          </DeliveryType>
        </DeliveryInfo>
      </WrapperInfo>
      <WrapperInfo>
        <CustomerInfo>
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
        <DriverInfo>
          {order?.driver_id ? (
            <WrapperDriverSelector ref={driverSelectorRef}>
              <DriverSelector
                small
                defaultValue={order?.driver_id ? order.driver_id : 0}
                driversList={driversList}
                handleSelectedDriver={(driver) => handleSelectedDriver(driver)}
              />
            </WrapperDriverSelector>
          ) : (
            <WrapperAccordionImage small>
              <AccordionImage bgimage={theme?.images?.icons?.noDriver} />
            </WrapperAccordionImage>
          )}

          <TextContainer>
            {!order?.driver_id && 'No Driver'}
          </TextContainer>
        </DriverInfo>
      </WrapperInfo>
      <WrapperOrderStatus ref={orderStatusRef}>
        <OrderStatusTypeSelector
          defaultValue={order?.status}
          noPadding
        />
      </WrapperOrderStatus>
    </OrderItemContainer>
  )
}
