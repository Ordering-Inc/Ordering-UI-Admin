import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useSession, OrderDetails as OrderDetailsController } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsBell from '@meronex/icons/bs/BsBell'
import BsChat from '@meronex/icons/bs/BsChat'
import HiOutlinePhone from '@meronex/icons/hi/HiOutlinePhone'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { Messages } from '../../../../../components/Messages'
import { MetaFields } from '../../../../../components/MetaFields'
import { Modal } from '../../../../../components/Modal'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { OrderDetailsHeader } from '../OrderDetailsHeader'
import { OrderBill } from '../OrderBill'

import {
  Container,
  ChatContainer,
  ButtonLink,
  OrderStatus,
  StatusBarContainer,
  StatusBar,
  AdvancedLogistic,
  BusinessInfo,
  Photo,
  PhotoWrapper,
  InfoContent,
  NotificationIcon,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo,
  DriverSelectorContainer,
  OrderProducts,
} from './styles'
import { useTheme } from 'styled-components'

const OrderDetailsUI = (props) => {
  const {
    open,
    pendingOrder,
    preOrder,
    driversList,
    handleBackRedirect,
    handleUpdateOrderStatus,
    messageDashboardView,
    handleMessageOrderDetail,
    messageType,
    handleOpenMessage,
    handleUpdateOrderForUnreadCount,
    handleOpenOrderDetail,
    actionStatus,
    messages
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openMessages, setOpenMessages] = useState({ customer: false, business: false, driver: false, history: false })
  const [openMetaFields, setOpenMetaFields] = useState(false)
  const theme = useTheme()
  const [{ parseDate }] = useUtils()
  const [{ user }] = useSession()

  const orderDetail = useRef(null)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false, customer: false })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const printRef = useRef()

  const {
    order,
    loading
  } = props.order

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 25 },
      { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
      { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
      { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Ready for pickup', slug: 'READY_FOR_PICKUP', percentage: 70 },
      { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
      { key: 6, value: 'Reject by driver', slug: 'REJECT_BY_DRIVER', percentage: 0 },
      { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: 'Preorder', slug: 'PREORDER', percentage: 25 },
      { key: 14, value: 'Order not ready', slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: 'Pickup completed by customer', slug: 'PICKUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: 'Canceled by customer', slug: 'CANCELED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: 'Not picked by customer', slug: 'NOT_PICKED_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: 'Driver almost arrived to business', slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 19, value: 'Driver almost arrived to customer', slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', percentage: 90 },
      { key: 20, value: 'Customer almost arrived to business', slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 21, value: 'Customer arrived to business', slug: 'CUSTOMER_ARRIVED_TO_BUSINESS', percentage: 60 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
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


  const unreadMessages = () => {
    const unreadedMessages = messages?.messages.filter(message => !message?.read && message?.can_see?.includes(0) && message?.author_id !== user.id)
    const customer = unreadedMessages?.some(message => message?.author?.level === 3)
    const business = unreadedMessages?.some(message => message?.author?.level === 2)
    const driver = unreadedMessages?.some(message => message?.author?.level === 4)
    setUnreadAlert({ business, driver, customer })
  }

  const handleOpenMessages = (openMessage) => {
    if (openMessage === 'customer') {
      orderDetail.current.style.display = 'none'
      setOpenMessages({ customer: true, business: false, driver: false, history: false })
      setUnreadAlert({ ...unreadAlert, customer: false })
    }
    if (openMessage === 'business') {
      setOpenMessages({ customer: false, business: true, driver: false, history: false })
      setUnreadAlert({ ...unreadAlert, business: false })
    }
    if (openMessage === 'driver') {
      orderDetail.current.style.display = 'none'
      setOpenMessages({ customer: false, business: false, driver: true, history: false })
      setUnreadAlert({ ...unreadAlert, driver: false })
    }
    if (openMessage === 'history') {
      setOpenMessages({ customer: false, business: false, driver: false, history: true })
    }
  }

  const handleCloseMessages = () => {
    setOpenMessages({ customer: false, business: false, driver: false, history: false })
  }

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('orderDetails').style.width = value
    ? width > 599 ? '600px' : '100vw'
    : '0'
    if (!value) {
      props.onClose()
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 700) {
        document.getElementById('orderDetails').style.width = '100vw'
      } else {
        document.getElementById('orderDetails').style.width = '600px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])


  return (
    <Container
      id='orderDetails'
    >
      {order && Object.keys(order).length > 0 && !loading && (
        <>
          <OrderDetailsHeader
            order={order}
            actionSidebar={actionSidebar}
            setOpenMetaFields={setOpenMetaFields}
            handleOpenMessages={handleOpenMessages}
          />
          <OrderStatus>
            <div>
              <h2>{t('ORDER_STATUS', 'Order status')}</h2>
              <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
            </div>
            <OrderStatusTypeSelector
              orderId={order.id}
              deliveryType={order?.delivery_type}
              defaultValue={parseInt(order.status)}
              pendingOrder={pendingOrder}
              preOrder={preOrder}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
            />
          </OrderStatus>
          <StatusBarContainer>
            <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
          </StatusBarContainer>
          <AdvancedLogistic>
            <div>
              <p>{t('LOGISTIC', 'Logistic')}</p>
              <p>{getLogisticTag(order?.logistic_status)}</p>
            </div>
            <div>
              <p>{t('ATTEMPTS', 'Attempts')}</p>
              <p>{order?.logistic_attemps}</p>
            </div>
            <div>
              <p>{t('PRIORITY', 'Priority')}</p>
              <p>{getPriorityTag(order?.priority)}</p>
            </div>
          </AdvancedLogistic>
          <BusinessInfo>
            <PhotoWrapper>
              {order?.business?.logo ? (
                <Photo bgimage={order?.business?.logo} />
              ) : (
                <BisBusiness />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p>{order?.business?.name}</p>
                <ButtonLink
                  onClick={() => handleOpenMessages('business')}
                >
                  <BsChat />
                </ButtonLink>
                {order?.unread_count > 0 && unreadAlert.business && (
                  <NotificationIcon>
                    <BsBell />
                  </NotificationIcon>
                )}
                {order?.business?.phone && (
                  <ButtonLink
                    onClick={() => window.open(`tel:${order.business.phone}`)}
                  >
                    <HiOutlinePhone />
                  </ButtonLink>
                )}
              </div>
              <p>{order?.business?.address}</p>
            </InfoContent>
          </BusinessInfo>
          <CustomerInfo>
            <PhotoWrapper>
              {order?.business?.photo ? (
                <Photo bgimage={order?.customer?.photo} />
              ) : (
                <FaUserAlt />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                <ButtonLink
                  onClick={() => handleOpenMessages('customer')}
                >
                  <BsChat />
                </ButtonLink>
                {order?.unread_count > 0 && unreadAlert.customer && (
                  <NotificationIcon>
                    <BsBell />
                  </NotificationIcon>
                )}
                {order?.customer?.cellphone && (
                  <ButtonLink
                    onClick={() => window.open(`tel:${order?.customer?.cellphone }`)}
                  >
                    <HiOutlinePhone />
                  </ButtonLink>
                )}
              </div>
              <p>{order?.customer?.cellphone}</p>
            </InfoContent>
          </CustomerInfo>
          {order?.delivery_type === 1 && (
            <DriverInfoContainer>
              <DriverInfo>
                <PhotoWrapper>
                  {order?.driver?.photo ? (
                    <Photo bgimage={order?.driver?.photo} />
                  ) : (
                    <FaUserAlt />
                  )}
                </PhotoWrapper>
                {order.driver_id ? (
                  <InfoContent>
                    <div>
                      <p>{order?.driver?.name} {order?.driver?.lastname}</p>
                      <ButtonLink
                        onClick={() => handleOpenMessages('driver')}
                      >
                        <BsChat />
                      </ButtonLink>
                      {order?.unread_count > 0 && unreadAlert.driver && (
                        <NotificationIcon>
                          <BsBell />
                        </NotificationIcon>
                      )}
                      {order?.driver?.cellphone && (
                        <ButtonLink
                          onClick={() => window.open(`tel:${order?.driver?.cellphone }`)}
                        >
                          <HiOutlinePhone />
                        </ButtonLink>
                      )}
                    </div>
                    <p>{t('DRIVER', 'Driver')}</p>
                  </InfoContent>
                ) : (
                  <InfoContent>
                    <div>
                      <p>{t('NO_DRIVER', 'No driver')}</p>
                    </div>
                  </InfoContent>
                )}
              </DriverInfo>
              <DriverSelectorContainer>
                <DriverSelector
                  drivers={driversList.drivers}
                  isPhoneView
                  defaultValue={order?.driver?.id ? order.driver.id : 'default'}
                  order={order}
                />
              </DriverSelectorContainer>
            </DriverInfoContainer>
          )}
          <OrderProducts>
            <h2>{t('ORDER_DETAILS', 'Order details')}</h2>
            {order?.products?.length && order?.products.map((product) => (
              <ProductItemAccordion
                key={product.id}
                product={product}
              />
            ))}
          </OrderProducts>
          <OrderBill
            order={order}
          />
        </>
      )}

      {loading && (
        <>
          <Skeleton height={75} count={3} style={{ marginBottom: '10px'}} />
          <Skeleton height={200} style={{ marginBottom: '10px'}} />
          <Skeleton height={30} style={{ marginBottom: '10px'}}  />
          <Skeleton height={50} style={{ marginBottom: '10px'}}  />
          <Skeleton height={200} style={{ marginBottom: '10px'}} />
          <Skeleton height={50} style={{ marginBottom: '10px'}}  />
        </>
      )}

      {!loading && !order && (
        <NotFoundSource
          content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
          btnTitle={t('PROFILE_ORDERS_REDIRECT', 'Go to Orders')}
          onClickButton={handleBackRedirect}
        />
      )}
      {(openMessages.driver || openMessages.business || openMessages.customer) && (
        <ChatContainer>
          <Messages
            orderId={order?.id}
            order={order}
            customer={openMessages.customer}
            business={openMessages.business}
            driver={openMessages.driver}
            history={openMessages.history}
            handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
            onClose={() => handleCloseMessages()}
            messages={messages}
          />
        </ChatContainer>
      )}

      <Modal
        width='70%'
        height='70vh'
        open={openMessages.history}
        onClose={() => handleCloseMessages()}
      >
        <Messages
          orderId={order?.id}
          order={order}
          history={openMessages.history}
          handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
          messages={messages}
        />
      </Modal>

      <Modal
        width='70%'
        height='70vh'
        open={openMetaFields}
        onClose={() => setOpenMetaFields(false)}
      >
        <MetaFields
          orderId={order?.id}
        />
      </Modal>
    </Container>
  )
}
export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
    asDashboard: true,
    driversList: props.driversList,
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
