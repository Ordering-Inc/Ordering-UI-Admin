import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, useUtils, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'

import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import BsFillCircleFill from '@meronex/icons/bs/BsFillCircleFill'
import OiCircleCheck from '@meronex/icons/oi/OiCircleCheck'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'

import {
  AccordionSection,
  OrderItemAccordionContainer,
  OrderItemAccordionCell,
  CheckBoxContainer,
  TextBlockContainer,
  BigText,
  SmallText,
  WrapperAccordionImage,
  WrapperProductImage,
  AccordionImage,
  DeliveryTypeContainer,
  DeliveryIcon,
  DeliveryName,
  OrderDetailToggleButton,
  OrderProductsQuickDetailContainer,
  OrderProductsInner,
  ProductTable,
  ProductImageContainer
} from './styles'

export const OrderItemAccordion = (props) => {
  const { order } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [events] = useEvent()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [orderStatusDefaultValue, setOrderStatusDefaultValue] = useState(null)

  const checkbox = useRef(null)
  const content = useRef(null)
  const toggleBtn = useRef(null)
  const statusTypeSelector = useRef(null)
  const [selectedOrder, setSelectedOrder] = useState(false)

  const toggleOrderSelect = () => {
    setSelectedOrder(!selectedOrder)
  }
  const toggleAccordion = (e) => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const handleChangeOrderStatusType = (orderType) => {
    console.log(orderType)
  }

  const handleGoToPage = (e, data) => {
    const isActionClick = checkbox.current?.contains(e.target) || statusTypeSelector.current?.contains(e.target) || toggleBtn.current?.contains(e.target)

    if (!isActionClick) {
      events.emit('go_to_page', data)
    }
  }

  useEffect(() => {
    if (order.status === 0) setOrderStatusDefaultValue(20)
    if (order.status === 3 || order.status === 8 || order.status === 7) {
      setOrderStatusDefaultValue(30)
    }
    if (order.status === 1 || order.status === 11) {
      setOrderStatusDefaultValue(40)
    }
    if (order.status === 2 || order.status === 5 || order.status === 6 || order.status === 10 || order.status === 12) {
      setOrderStatusDefaultValue(50)
    }
  }, [])

  return (
    <AccordionSection>
      <OrderItemAccordionContainer
        className={setActive}
        // filterColor={
        //   order.deadline_status === 1
        //     ? theme?.colors?.deadlineOk
        //     : order.deadline_status === 2
        //       ? theme?.colors?.deadlineDelayed
        //       : theme?.colors?.deadlineRisk
        // }

        onClick={(e, data) => handleGoToPage(e, { page: 'order_detail', params: { orderId: order.id } })}
      >
        <OrderItemAccordionCell>
          <CheckBoxContainer ref={checkbox}>
            {!selectedOrder ? (
              <BsFillCircleFill className='circle' onClick={() => toggleOrderSelect()} />
            ) : (
              <OiCircleCheck className='circle-check' onClick={() => toggleOrderSelect()} />
            )}
          </CheckBoxContainer>

          <TextBlockContainer>
            <BigText>{t('ORDER_NO', 'Order No.')} {order?.id}</BigText>
            <SmallText>{order?.delivery_datetime}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <WrapperAccordionImage>
            <AccordionImage bgimage={order?.business?.logo} />
          </WrapperAccordionImage>
          <TextBlockContainer>
            <BigText>{order?.business?.name}</BigText>
            <SmallText>{order?.business?.city?.name}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <WrapperAccordionImage>
            {order?.customer?.photo ? (
              <AccordionImage bgimage={order?.customer?.photo} />
            ) : (
              <FaUserAlt />
            )}
          </WrapperAccordionImage>
          <TextBlockContainer>
            <BigText>{order?.customer?.name}</BigText>
            <SmallText>{order?.customer?.phone}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <WrapperAccordionImage>
            {order?.driver?.photo ? (
              <AccordionImage bgimage={order?.driver?.photo} />
            ) : (
              <AccordionImage bgimage={theme?.images?.icons?.noDriver} />
            )}
          </WrapperAccordionImage>
          <TextBlockContainer>
            <BigText>
              {order?.driver ? order.driver.name : 'No Driver'}
              {order?.driver && <EnChevronDown />}
            </BigText>
            <SmallText>{order?.driver?.name && 'Driver'}</SmallText>
          </TextBlockContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <DeliveryTypeContainer>
            <DeliveryIcon>
              {order?.delivery_type === 2 ? (
                <img
                  src={theme?.images?.icons?.driverDelivery}
                  alt='Delivery'
                />
              ) : (
                <img
                  src={theme?.images?.icons?.pickUp}
                  alt='pick up'
                />
              )}
            </DeliveryIcon>
            <DeliveryName>
              {order?.delivery_type === 2 ? (t('DELIVERY', 'Delivery')) : (t('PICKUP', 'Pickup'))}
            </DeliveryName>
          </DeliveryTypeContainer>
        </OrderItemAccordionCell>

        <OrderItemAccordionCell ref={statusTypeSelector}>
          <OrderStatusTypeSelector
            defaultValue={orderStatusDefaultValue}
            noPadding
            handleChangeOrderStatusType={(orderType) => handleChangeOrderStatusType(orderType)}
          />
        </OrderItemAccordionCell>

        <OrderItemAccordionCell>
          <BigText>
            {parsePrice(order?.total)}
            <OrderDetailToggleButton
              ref={toggleBtn}
              onClick={(e) => toggleAccordion(e)}
            >
              <EnChevronDown className={`${setRotate}`} />
            </OrderDetailToggleButton>
          </BigText>
        </OrderItemAccordionCell>
      </OrderItemAccordionContainer>

      <OrderProductsQuickDetailContainer
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <OrderProductsInner>
          <ProductTable>
            <thead>
              <tr>
                <th>{t('NAME', 'Name')}</th>
                <th>{t('PRICE', 'Price')}</th>
                <th>{t('QTY', 'QTY')}</th>
                <th>{t('DISC.', 'Disc.')}</th>
                <th>{t('Total', 'Total')}</th>
              </tr>
            </thead>

            <tbody>
              {order.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <ProductImageContainer>
                        <WrapperProductImage>
                          <AccordionImage bgimage={product.images} />
                        </WrapperProductImage>
                        {product.name}
                      </ProductImageContainer>
                    </td>
                    <td>{parsePrice(product?.price)}</td>
                    <td>X {product.quantity}</td>
                    <td>{product.comment}</td>
                    <td>{parsePrice(order?.subtotal)}</td>
                  </tr>
                )
              })}

              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('SUBTOTAL', 'Subtotal')}</td>
                <td>{parsePrice(order?.subtotal)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                <td>{parsePrice(order?.totalTax)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                <td>{parsePrice(order?.deliveryFee)}</td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                <td>{parsePrice(order?.serviceFee || 0)}</td>
              </tr>
              {order?.discount > 0 && (
                <tr>
                  <td />
                  <td />
                  <td />
                  <td>{t('DISCOUNT', 'Discount')}</td>
                  <td>{parsePrice(order?.discount)}</td>
                </tr>
              )}
              <tr className='totalFee'>
                <td />
                <td />
                <td />
                <td>{t('TOTAL', 'Total')}</td>
                <td>{parsePrice(order?.total)}</td>
              </tr>
            </tbody>
          </ProductTable>
        </OrderProductsInner>
      </OrderProductsQuickDetailContainer>

    </AccordionSection>
  )
}
