import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import dayjs from 'dayjs'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'

import BlankCheckbox from '@meronex/icons/ri/RiCheckboxBlankCircleFill'
import Checkbox from '@meronex/icons/ri/RiCheckboxCircleFill'

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
  WrapperDriverSelector,
  DeliveryTypeContainer,
  DeliveryIcon,
  DeliveryName,
  OrderDetailToggleButton,
  OrderProductsQuickDetailContainer,
  OrderProductsInner,
  ProductTable,
  ProductImageContainer,
  AccordionContent,
  ProductOptionsList,
  ProductComment
} from './styles'

export const OrderItemAccordion = (props) => {
  const {
    order,
    drivers,
    preOrder,
    pendingOrder,
    selectedOrderIds,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseNumber }] = useUtils()
  const history = useHistory()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [isChecked, setIsChecked] = useState(false)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const checkbox = useRef(null)
  const content = useRef(null)
  const toggleBtn = useRef(null)
  const driverSelectorRef = useRef(null)

  const toggleOrderSelect = (id) => {
    setIsChecked(!isChecked)
    handleSelectedOrderIds(id)
    handleOrderIds(id)
  }
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const handleGoToPage = (e) => {
    const isActionClick = checkbox.current?.contains(e.target) || driverSelectorRef.current?.contains(e.target) || toggleBtn.current?.contains(e.target) || e.target.closest('.orderStatus')

    if (!isActionClick) {
      history.push(`/orders?id=${order.id}`)
      handleOpenOrderDetail(order.id, pendingOrder, preOrder)
    }
  }

  const handleSelectedDriver = (driver) => {
    console.log(driver)
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position ? `(${position})` : ''
      return `${name} ${pos} ${parsePrice(quantity * price)}`
    } else {
      return 'No'
    }
  }

  const getProductPrice = (product) => {
    let price = product.quantity * product.price
    if (product.options.length > 0) {
      for (const option of product.options) {
        for (const suboption of option.suboptions) {
          price += suboption.quantity * suboption.price
        }
      }
    }
    return parsePrice(price)
  }

  useEffect(() => {
    if (selectedOrderIds.includes(order.id)) setIsChecked(true)
  }, [])

  useEffect(() => {
    let _orderTotalPrice = order.subtotal
    if (order?.service_fee > 0) {
      _orderTotalPrice += order?.subtotal * order?.tax / 100 + order?.subtotal * order?.service_fee / 100
    }
    if (order?.deliveryFee > 0) {
      _orderTotalPrice += order?.deliveryFee
    }
    if (order?.driver_tip > 0) {
      _orderTotalPrice += order?.subtotal * order?.driver_tip / 100
    }
    if (order.discount > 0) {
      _orderTotalPrice -= order.discount
    }

    setOrderTotalPrice(_orderTotalPrice)
  }, [])

  return (
    <>
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

          onClick={(e) => handleGoToPage(e)}
        >
          <OrderItemAccordionCell>
            <CheckBoxContainer ref={checkbox} onClick={() => toggleOrderSelect(order.id)}>
              {isChecked ? (
                <Checkbox />
              ) : (
                <BlankCheckbox />
              )}
            </CheckBoxContainer>
            <TextBlockContainer>
              <BigText>{t('ORDER_NO', 'Order No.')} {order?.id}</BigText>
              <SmallText>{dayjs(order?.delivery_datetime).format('YYYY-MM-DD HH:mm')}</SmallText>
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
              <SmallText>{order?.customer?.cellphone}</SmallText>
            </TextBlockContainer>
          </OrderItemAccordionCell>

          <OrderItemAccordionCell>
            {order?.driver_id ? (
              <WrapperDriverSelector ref={driverSelectorRef}>
                <DriverSelector
                  defaultValue={order?.driver_id ? order.driver_id : 'default'}
                  drivers={drivers}
                  order={order}
                  handleSelectedDriver={(driver) => handleSelectedDriver(driver)}
                />
              </WrapperDriverSelector>
            ) : (
              <WrapperAccordionImage>
                <AccordionImage bgimage={theme?.images?.icons?.noDriver} />
              </WrapperAccordionImage>
            )}

            <TextBlockContainer>
              <BigText>
                {!order?.driver_id && 'No Driver'}
              </BigText>
            </TextBlockContainer>
          </OrderItemAccordionCell>

          <OrderItemAccordionCell>
            <DeliveryTypeContainer>
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
            </DeliveryTypeContainer>
          </OrderItemAccordionCell>

          <OrderItemAccordionCell>
            <OrderStatusTypeSelector
              defaultValue={order.status}
              orderId={order.id}
              pendingOrder={pendingOrder}
              preOrder={preOrder}
              noPadding
              handleUpdateOrderStatus={handleUpdateOrderStatus}
            />
          </OrderItemAccordionCell>

          <OrderItemAccordionCell>
            <BigText
              ref={toggleBtn}
              onClick={() => toggleAccordion()}
            >
              {parsePrice(orderTotalPrice)}
              <OrderDetailToggleButton>
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

                        <AccordionContent>
                          {product.ingredients.length > 0 && product.ingredients.some(ingredient => !ingredient.selected) && (
                            <ProductOptionsList>
                              <p>{t('INGREDIENTS', 'Ingredients')}</p>
                              {product.ingredients.map((ingredient) => !ingredient.selected && (
                                <li className='ingredient' key={ingredient.id}>
                                  <span>{t('NO', 'No')} {ingredient.name}</span>
                                </li>
                              ))}
                            </ProductOptionsList>
                          )}
                          {product.options.length > 0 && (
                            <ProductOptionsList>
                              {product.options.map((option, i) => (
                                <li key={i}>
                                  <p>{option.name}</p>
                                  <ProductOptionsList className='suboption'>
                                    {option.suboptions.map(suboption => (
                                      <li key={suboption.id}>
                                        <span>
                                          {getFormattedSubOptionName({
                                            quantity: suboption.quantity,
                                            name: suboption.name,
                                            position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                                            price: suboption.price
                                          })}
                                        </span>
                                      </li>
                                    ))}
                                  </ProductOptionsList>
                                </li>
                              ))}
                            </ProductOptionsList>
                          )}
                          {product.comment && (
                            <ProductComment>
                              <p>{t('COMMENT', 'Comment')}</p>
                              <h3>{product.comment}</h3>
                            </ProductComment>
                          )}
                        </AccordionContent>

                      </td>
                      <td>{parsePrice(product?.price)}</td>
                      <td>X {product.quantity}</td>
                      <td>{product.comment}</td>
                      <td>{getProductPrice(product)}</td>
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
                {order?.service_fee > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                    <td>{parsePrice(order?.subtotal * order?.tax / 100)}</td>
                  </tr>
                )}
                <tr className='subFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                  <td>{parsePrice(order?.deliveryFee)}</td>
                </tr>
                {order?.driver_tip > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('DRIVER_TIP', 'Driver Tip')}</td>
                    <td>{parsePrice(order?.driver_tip)}</td>
                  </tr>
                )}
                {order?.service_fee > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                    <td>{parsePrice(order?.serviceFee || 0)}</td>
                  </tr>
                )}
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
                  <td>{parsePrice(orderTotalPrice)}</td>
                </tr>
              </tbody>
            </ProductTable>
          </OrderProductsInner>
        </OrderProductsQuickDetailContainer>
      </AccordionSection>
    </>
  )
}
