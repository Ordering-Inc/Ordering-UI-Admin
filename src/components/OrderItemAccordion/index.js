import React, { useState, useRef, useEffect } from 'react'
import { getAgoMinutes } from '../../utils'

import { useHistory } from 'react-router-dom'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'

import BlankCheckbox from '@meronex/icons/ri/RiCheckboxBlankCircleFill'
import Checkbox from '@meronex/icons/ri/RiCheckboxCircleFill'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'

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
  ProductComment,
  OrderInfoContainer,
  WrapperGeneralInfo,
  WrapperOrderlabel
} from './styles'

export const OrderItemAccordion = (props) => {
  const {
    order,
    drivers,
    size,
    selectedOrderIds,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const history = useHistory()

  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [isChecked, setIsChecked] = useState(false)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const [subTotalPrice, setSubTotalPrice] = useState(0)
  const checkbox = useRef(null)
  const content = useRef(null)
  const toggleBtn = useRef(null)
  const driverSelectorRef = useRef(null)
  const [diffTime, setDiffTime] = useState(getAgoMinutes(order?.delivery_datetime))

  const toggleOrderSelect = (id) => {
    setIsChecked(!isChecked)
    handleSelectedOrderIds(id)
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
      history.push(`/orders-deliveries?id=${order.id}`)
      handleOpenOrderDetail(order.id)
    }
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position ? `(${position})` : ''
      return price > 0 ? `${name} ${pos} ${parsePrice(quantity * price)}` : `${name} ${pos}`
    } else {
      return 'No'
    }
  }

  const getProductPrice = (product) => {
    let subOptionPrice = 0
    if (product.options.length > 0) {
      for (const option of product.options) {
        for (const suboption of option.suboptions) {
          subOptionPrice += suboption.quantity * suboption.price
        }
      }
    }

    const price = product.quantity * (product.price + subOptionPrice)
    return parseFloat(price.toFixed(2))
  }

  const getTaxPrice = () => {
    let taxPrice = 0
    if (order.tax_type === 2) {
      if (order.discount > 0) {
        taxPrice = (subTotalPrice - order.discount) * order?.tax / 100
      } else {
        taxPrice = subTotalPrice * order?.tax / 100
      }
    }
    if (order.tax_type === 1) {
      taxPrice = order.tax
    }
    return parseFloat(taxPrice.toFixed(2))
  }

  const getServiceFee = () => {
    let serviceFee = 0
    if (order.service_fee > 0) {
      if (order.discount > 0) {
        serviceFee = (subTotalPrice - order.discount) * order?.service_fee / 100
      } else {
        serviceFee = subTotalPrice * order?.service_fee / 100
      }
    }
    return parseFloat(serviceFee.toFixed(2))
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
    if (!selectedOrderIds) {
      setIsChecked(false)
      return
    }
    if (selectedOrderIds.includes(order.id)) setIsChecked(true)
  }, [])

  useEffect(() => {
    let _orderSubprice = 0
    for (const product of order.products) {
      _orderSubprice += getProductPrice(product)
    }
    if (order?.subtotal > 0) {
      _orderSubprice = order.subtotal
    }
    _orderSubprice = parseFloat(_orderSubprice.toFixed(2))
    setSubTotalPrice(_orderSubprice)
  }, [order])

  useEffect(() => {
    let _orderTotalPrice = subTotalPrice
    if (order?.service_fee > 0) {
      const taxPrice = getTaxPrice()
      const serviceFee = getServiceFee()
      _orderTotalPrice += taxPrice + serviceFee
    }
    if (order?.delivery_zone_price > 0) {
      _orderTotalPrice += order.delivery_zone_price
    }
    if (order?.driver_tip > 0) {
      _orderTotalPrice += subTotalPrice * order.driver_tip / 100
    }

    if (order.discount > 0) {
      _orderTotalPrice -= order.discount
    }
    _orderTotalPrice = parseFloat(_orderTotalPrice.toFixed(2))
    setOrderTotalPrice(_orderTotalPrice)
  }, [subTotalPrice])

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
    <>
      <AccordionSection>
        <OrderItemAccordionContainer
          className={setActive}
          filterColor={
            order?.logistic_status === -1 || order?.logistic_status === 0
              ? theme?.colors?.deadlineOk
              : order.logistic_status === 1
                ? theme?.colors?.deadlineDelayed
                : theme?.colors?.deadlineRisk
          }
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
              <SmallText>
                {parseDate(order?.delivery_datetime, { utc: false })}
              </SmallText>
            </TextBlockContainer>
          </OrderItemAccordionCell>
          <OrderInfoContainer>
            <WrapperGeneralInfo size={size}>
              <OrderItemAccordionCell className='order-item-business'>
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
                {order?.delivery_type === 1 && (
                  <WrapperDriverSelector ref={driverSelectorRef}>
                    <DriverSelector
                      orderView
                      padding='5px 0'
                      defaultValue={order?.driver_id ? order.driver_id : 'default'}
                      drivers={drivers}
                      order={order}
                    />
                  </WrapperDriverSelector>
                )}
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
                </DeliveryTypeContainer>
              </OrderItemAccordionCell>

              <OrderItemAccordionCell>
                <OrderStatusTypeSelector
                  defaultValue={parseInt(order.status)}
                  orderId={order.id}
                  deliveryType={order?.delivery_type}
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
            </WrapperGeneralInfo>
            <WrapperOrderlabel>
              <OrderItemAccordionCell>
                <TextBlockContainer>
                  <BigText>{t('LOGISTIC', 'Logistic')}</BigText>
                  <SmallText>{getLogisticTag(order?.logistic_status)}</SmallText>
                </TextBlockContainer>
              </OrderItemAccordionCell>
              <OrderItemAccordionCell>
                <TextBlockContainer>
                  <BigText>{t('ATTEMPTS', 'Attempts')}</BigText>
                  <SmallText>{order?.logistic_attemps}</SmallText>
                </TextBlockContainer>
              </OrderItemAccordionCell>
              <OrderItemAccordionCell>
                <TextBlockContainer>
                  <BigText>{t('PRIORITY', 'Priority')}</BigText>
                  <SmallText>{getPriorityTag(order?.priority)}</SmallText>
                </TextBlockContainer>
              </OrderItemAccordionCell>
              <OrderItemAccordionCell>
                {!(order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12) && (
                  <>
                    {diffTime}
                  </>
                )}
              </OrderItemAccordionCell>
            </WrapperOrderlabel>
          </OrderInfoContainer>
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
                                      <React.Fragment key={suboption.id}>
                                        <li>
                                          <span>
                                            {getFormattedSubOptionName({
                                              quantity: suboption.quantity,
                                              name: suboption.name,
                                              position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                                              price: suboption.price
                                            })}
                                          </span>
                                        </li>
                                      </React.Fragment>
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
                      <td>{parsePrice(getProductPrice(product))}</td>
                    </tr>
                  )
                })}

                <tr className='subFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('SUBTOTAL', 'Subtotal')}</td>
                  <td>
                    {order?.subtotal ? parsePrice(order.subtotal) : parsePrice(subTotalPrice)}
                  </td>
                </tr>
                {order?.discount > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('DISCOUNT', 'Discount')}</td>
                    <td>-{parsePrice(order?.discount)}</td>
                  </tr>
                )}
                {order?.service_fee > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                    <td>
                      {parsePrice(getTaxPrice())}
                    </td>
                  </tr>
                )}
                <tr className='subFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                  <td>{parsePrice(order?.delivery_zone_price)}</td>
                </tr>
                {order?.driver_tip > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('DRIVER_TIP', 'Driver Tip')}</td>
                    <td>{parsePrice(subTotalPrice * order?.driver_tip / 100)}</td>
                  </tr>
                )}
                {order?.service_fee > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                    <td>{parsePrice(getServiceFee())}</td>
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
