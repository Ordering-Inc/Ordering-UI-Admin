import React, { useState, useRef, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { useLanguage, useUtils } from 'ordering-components-admin'
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
import { OrderProductsQuickDetail } from '../OrderProductQuickDetail'

import {
  AccordionSection,
  OrderItemAccordionContainer,
  OrderItemAccordionCell,
  CheckBoxContainer,
  TextBlockContainer,
  BigText,
  SmallText,
  WrapperAccordionImage,
  AccordionImage,
  WrapperDriverSelector,
  DeliveryTypeContainer,
  DeliveryIcon,
  DeliveryName,
  OrderDetailToggleButton,
  OrderInfoContainer,
  WrapperGeneralInfo,
  WrapperOrderlabel,
  WrapOrderQuickDetail
} from './styles'

export const OrderItemAccordion = (props) => {
  const {
    order,
    drivers,
    selectedOrderIds,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage, getTimeAgo }] = useUtils()
  const history = useHistory()

  const [setActive, setActiveState] = useState('')
  // const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [openOrderQuickDetail, setOpenOrderQuickDetail] = useState(false)
  const [loadedOrderQuickDetail, setLoadedOrderQuickDetail] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const checkbox = useRef(null)
  // const content = useRef(null)
  const toggleBtn = useRef(null)
  const driverSelectorRef = useRef(null)
  const [diffTime, setDiffTime] = useState(
    order?.delivery_datetime_utc
      ? getTimeAgo(order?.delivery_datetime_utc)
      : getTimeAgo(order?.delivery_datetime, { utc: false })
  )

  const toggleOrderSelect = (id) => {
    setIsChecked(!isChecked)
    handleSelectedOrderIds(id)
  }
  const toggleAccordion = () => {
    setLoadedOrderQuickDetail(true)
    setActiveState(setActive === '' ? 'active' : '')
    // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )
    setOpenOrderQuickDetail(!openOrderQuickDetail)
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
    const deActive = order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12
    if (deActive) return
    const timer = setInterval(() => {
      const diff = order?.delivery_datetime_utc
        ? getTimeAgo(order?.delivery_datetime_utc)
        : getTimeAgo(order?.delivery_datetime, { utc: false })
      setDiffTime(diff)
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
            <WrapperGeneralInfo>
              <OrderItemAccordionCell className='order-item-business'>
                <WrapperAccordionImage>
                  <AccordionImage bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
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
                  {parsePrice(order?.summary?.total)}
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

        <WrapOrderQuickDetail style={{ display: `${openOrderQuickDetail ? 'block' : 'none'}` }}>
          {loadedOrderQuickDetail && (
            <OrderProductsQuickDetail
              orderId={order?.id}
            />
          )}
        </WrapOrderQuickDetail>
      </AccordionSection>
    </>
  )
}
