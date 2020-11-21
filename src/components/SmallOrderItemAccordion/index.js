import React from 'react'
import { useLanguage } from 'ordering-components'
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
  DriverInfo
} from './styles'

export const SmallOrderItemAccordion = (props) => {
  const { order } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  const handleChangeDriver = (driver) => {
    console.log(driver)
  }
  return (
    <OrderItemContainer>
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
          <DriverSelector
            small
            handleChangeDriver={(driver) => handleChangeDriver(driver)}
          />
        </DriverInfo>
      </WrapperInfo>
      <WrapperOrderStatus>
        <OrderStatusTypeSelector
          defaultValue={order?.status}
          noPadding
        />
      </WrapperOrderStatus>
    </OrderItemContainer>
  )
}
