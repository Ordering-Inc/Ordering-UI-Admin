import React, { useRef } from 'react'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'
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
  DriverInfo,
  WrapperDriverSelector,
  WrapperNoDriver,
  NoDriverTitle
} from './styles'

export const SmallOrderItemAccordion = (props) => {
  const {
    formatTime,
    order,
    drivers,
    pendingOrder,
    preOrder,
    handleUpdateOrderStatus,
    handleOpenOrderDetail
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const history = useHistory()

  const driverSelectorRef = useRef(null)
  const orderStatusRef = useRef(null)

  const handleGoToPage = (e) => {
    const isActionClick = driverSelectorRef.current?.contains(e.target) || orderStatusRef.current?.contains(e.target)

    if (!isActionClick) {
      history.push(`/delivery-dashboard?id=${order.id}`)
      handleOpenOrderDetail(order.id, pendingOrder, preOrder)
    }
  }

  const handleSelectedDriver = (driver) => {
    console.log(driver)
  }
  return (
    <OrderItemContainer onClick={(e) => handleGoToPage(e)}>
      <WrapperInfo>
        <BusinessInfo className='order-item-business'>
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
            {formatTime.value === '24' ? (
              dayjs(order?.delivery_datetime).format('YYYY-MM-DD HH:mm')
            ) : (
              dayjs(order?.delivery_datetime).format('YYYY-MM-DD hh:mm A')
            )}
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
            </DeliveryIcon>
            <DeliveryName>
              {order?.delivery_type === 1 && (t('DELIVERY', 'Delivery'))}
              {order?.delivery_type === 2 && (t('PICKUP', 'Pickup'))}
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
          <WrapperDriverSelector ref={driverSelectorRef}>
            {order?.delivery_type === 1 ? (
              <DriverSelector
                small
                defaultValue={order?.driver_id ? order.driver_id : 'default'}
                drivers={drivers}
                order={order}
                handleSelectedDriver={(driver) => handleSelectedDriver(driver)}
              />
            ) : (
              <WrapperNoDriver>
                <WrapperAccordionImage small>
                  <FaUserAlt />
                </WrapperAccordionImage>
                <NoDriverTitle>{t('NO_DRIVER', 'No driver')}</NoDriverTitle>
              </WrapperNoDriver>
            )}
          </WrapperDriverSelector>
        </DriverInfo>
      </WrapperInfo>
      <WrapperOrderStatus ref={orderStatusRef}>
        <OrderStatusTypeSelector
          defaultValue={order?.status}
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
