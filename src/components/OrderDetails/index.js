import React, { useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useSession, OrderDetails as OrderDetailsController } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsBell from '@meronex/icons/bs/BsBell'
import BsChat from '@meronex/icons/bs/BsChat'
import HiOutlinePhone from '@meronex/icons/hi/HiOutlinePhone'
import HiOutlineLocationMarker from '@meronex/icons/hi/HiOutlineLocationMarker'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import GrClose from '@meronex/icons/gr/GrClose'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import EnDotsThreeVertical from '@meronex/icons/en/EnDotsThreeVertical'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { Messages } from '../Messages'
import { MetaFields } from '../MetaFields'
import { Modal } from '../Modal'
import {
  Container,
  WrapperContainer,
  OrderInfoContent,
  PhotoWrapper,
  Photo,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  StatusImage,
  SectionTitle,
  SectionContainer,
  InfoBlock,
  CustomerContactBlock,
  OrderProducts,
  OrderBill,
  SkeletonBlockWrapp,
  SkeletonBlock,
  SkeletonInfoCell,
  SkeletonInnerBlock,
  WrapperSkeletonBottom,
  WrapperSkeletonText,
  PayAndOrderTypeInfo,
  WrapperSkeletonButton,
  Paymethod,
  PaymethodContent,
  PaymethodCreatedDate,
  PaymethodCreatedDateContent,
  OrderTypeInfo,
  OrderTypeContent,
  ContactInfoContent,
  ContactInfoHeader,
  WrapperButton,
  ButtonLink,
  DriverSelectorContainer,
  PrintButtonContainer,
  ChatContainer,
  PhoneNumber,
  OrderDetailCloseButton,
  MessageContactInfo,
  ContactBlock,
  InfonContent,
  WrapperMoreInformationButton,
  NotificationIcon
} from './styles'
import { useTheme } from 'styled-components'

const OrderDetailsUI = (props) => {
  const {
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
    handleOpenOrderDetail
  } = props
  const [, t] = useLanguage()
  const [openMessages, setOpenMessages] = useState({ customer: false, business: false, driver: false, history: false })
  const [openMetaFields, setOpenMetaFields] = useState(false)
  const theme = useTheme()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const [{ user }] = useSession()

  const orderDetail = useRef(null)

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

  const getImage = (status) => {
    try {
      return theme.images?.order?.[`status${status}`]
    } catch (error) {
      return 'https://picsum.photos/75'
    }
  }

  const handleOpenMessages = (openMessage) => {
    if (openMessage === 'customer') {
      orderDetail.current.style.display = 'none'
      setOpenMessages({ customer: true, business: false, driver: false, history: false })
    }
    if (openMessage === 'business') {
      orderDetail.current.style.display = 'none'
      setOpenMessages({ customer: false, business: true, driver: false, history: false })
    }
    if (openMessage === 'driver') {
      orderDetail.current.style.display = 'none'
      setOpenMessages({ customer: false, business: false, driver: true, history: false })
    }
    if (openMessage === 'history') {
      setOpenMessages({ customer: false, business: false, driver: false, history: true })
    }
  }

  const handleCloseMessages = () => {
    orderDetail.current.style.display = 'flex'
    setOpenMessages({ customer: false, business: false, driver: false, history: false })
  }

  return (
    <Container className='order-detail' messageDashboardView={messageDashboardView}>
      {order && Object.keys(order).length > 0 && !loading && (
        <WrapperContainer ref={orderDetail} messageDashboardView={messageDashboardView}>
          <OrderInfoContent className='order-info' messageDashboardView={messageDashboardView}>
            <OrderInfo>
              <OrderData messageDashboardView={messageDashboardView}>
                <h1>{t('ORDER_NO', 'Order No')}. #{order?.id}</h1>
                {/* <p className='uuid'>{order?.uuid}</p> */}
                <p>{t('DATE_TIME_FOR_ORDER', 'Date and time for your order')}</p>
                <p className='date'>
                  {parseDate(order?.delivery_datetime, { utc: false })}
                </p>
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
              </OrderData>
              <OrderStatus>
                {(!pendingOrder && !preOrder) && (
                  <span>{getOrderStatus(parseInt(order?.status))?.value}</span>
                )}
                {pendingOrder && (
                  <span>{t('PENDING', 'Pending')}</span>
                )}
                {preOrder && (
                  <span>{t('PREORDER', 'Preorder')}</span>
                )}
                <StatusImage>
                  <img src={getImage(order?.status || 0)} alt='status' />
                </StatusImage>
              </OrderStatus>
              {messageDashboardView && (
                <OrderDetailCloseButton>
                  <GrClose onClick={() => handleMessageOrderDetail(false)} />
                </OrderDetailCloseButton>
              )}
            </OrderInfo>

            {messageDashboardView && (
              <MessageContactInfo>
                <ContactBlock
                  active={messageType === 'business'}
                  onClick={() => handleOpenMessage(order, 'business')}
                >
                  <PhotoWrapper messageDashboardView={messageDashboardView}>
                    {order?.business?.logo ? (
                      <Photo bgimage={order?.business?.logo} />
                    ) : (
                      <BisBusiness />
                    )}
                  </PhotoWrapper>
                  <InfonContent>
                    <p>{order?.business?.name}</p>
                    <p>{order?.business?.address}</p>
                  </InfonContent>
                </ContactBlock>
                <ContactBlock
                  active={messageType === 'customer'}
                  onClick={() => handleOpenMessage(order, 'customer')}
                >
                  <PhotoWrapper messageDashboardView={messageDashboardView}>
                    {order?.customer?.photo ? (
                      <Photo bgimage={order?.customer?.photo} />
                    ) : (
                      <FaUserAlt />
                    )}
                  </PhotoWrapper>
                  <InfonContent>
                    <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                    <p>{order?.customer?.cellphone}</p>
                  </InfonContent>
                </ContactBlock>
                {order?.driver_id && (
                  <ContactBlock
                    active={messageType === 'driver'}
                    onClick={() => handleOpenMessage(order, 'driver')}
                  >
                    <PhotoWrapper messageDashboardView={messageDashboardView}>
                      {order?.driver?.photo ? (
                        <Photo bgimage={order?.driver?.photo} />
                      ) : (
                        <FaUserAlt />
                      )}
                    </PhotoWrapper>
                    <InfonContent>
                      <p>{order?.driver?.name} {order?.driver?.lastname}</p>
                      <p>{t('DRIVER', 'Driver')}</p>
                    </InfonContent>
                  </ContactBlock>
                )}
              </MessageContactInfo>
            )}

            <PayAndOrderTypeInfo>
              <Paymethod>
                <p>{t('PAYMETHOD', 'Paymethod')}</p>
                <PaymethodContent>
                  <img src={theme?.images?.icons?.cash} alt='cash' />
                  {order?.paymethod?.name}
                </PaymethodContent>
              </Paymethod>
              <PaymethodCreatedDate>
                <PaymethodCreatedDateContent>
                  <p>{t('DATE', 'Date')}</p>
                  <p>
                    {parseDate(order?.delivery_datetime, { utc: false })}
                  </p>
                </PaymethodCreatedDateContent>
              </PaymethodCreatedDate>
              <OrderTypeInfo>
                <p>{t('ORDER_TYPE', 'Order Type')}</p>
                <OrderTypeContent>
                  {order?.delivery_type === 1 && (
                    <>
                      <img src={theme?.images?.icons?.driverDelivery} alt='order type' />
                      {t('DELIVERY', 'Delivery')}
                    </>
                  )}
                  {order?.delivery_type === 2 && (
                    <>
                      <img src={theme?.images?.icons?.pickUp} alt='pickup' />
                      {t('PICKUP', 'Pickup')}
                    </>
                  )}
                  {order?.delivery_type === 3 && (
                    <>
                      <AiFillShop />
                      {t('EAT_IN', 'Eat in')}
                    </>
                  )}
                  {order?.delivery_type === 4 && (
                    <>
                      <GiFoodTruck />
                      {t('CURBSIDE', 'Curbside')}
                    </>
                  )}
                  {order?.delivery_type === 5 && (
                    <>
                      <FaCarSide />
                      {t('DRIVE_THRU', 'Drive thru')}
                    </>
                  )}
                </OrderTypeContent>
              </OrderTypeInfo>
            </PayAndOrderTypeInfo>

            <OrderProducts>
              {order?.products?.length && order?.products.map((product) => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                />
              ))}
            </OrderProducts>

            <OrderBill>
              <table>
                <tbody>
                  <tr>
                    <td>{t('SUBTOTAL', 'Subtotal')}</td>
                    <td>{parsePrice(order?.summary?.subtotal)}</td>
                  </tr>
                  {order?.summary?.discount > 0 && (
                    <tr>
                      <td>{t('DISCOUNT', 'Discount')}</td>
                      <td>-{parsePrice(order?.summary?.discount)}</td>
                    </tr>
                  )}
                  {order?.summary?.tax > 0 && (
                    <tr>
                      <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                      <td>{parsePrice(order?.summary?.tax)}</td>
                    </tr>
                  )}
                  {(order?.summary?.delivery_price > 0) && (
                    <tr>
                      <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                      <td>{parsePrice(order?.summary?.delivery_price)}</td>
                    </tr>
                  )}
                  <tr>
                    <td>{t('DRIVER_TIP', 'Driver tip')}</td>
                    <td>{parsePrice(order?.summary?.driver_tip)}</td>
                  </tr>
                  {order?.summary?.service_fee > 0 && (
                    <tr>
                      <td>{t('SERVICE FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                      <td>{parsePrice(order?.summary?.service_fee)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className='total'>
                <tbody>
                  <tr>
                    <td>{t('TOTAL', 'Total')}</td>
                    <td>{parsePrice(order?.summary?.total)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderBill>
            {messageDashboardView && (
              <WrapperMoreInformationButton>
                <Button color='darkBlue' onClick={() => handleOpenOrderDetail(order.id)}>
                  {t('MORE_INFORMATION', 'More information')}
                </Button>
              </WrapperMoreInformationButton>
            )}
          </OrderInfoContent>
          {!messageDashboardView && (
            <ContactInfoContent className='contact-info'>
              <ContactInfoHeader>
                <OrderStatusTypeSelector
                  orderId={order.id}
                  deliveryType={order?.delivery_type}
                  defaultValue={parseInt(order.status)}
                  pendingOrder={pendingOrder}
                  preOrder={preOrder}
                  handleUpdateOrderStatus={handleUpdateOrderStatus}
                />
                <WrapperButton>
                  <ButtonLink onClick={() => setOpenMetaFields(true)}>
                    <EnDotsThreeVertical />
                  </ButtonLink>
                  <ButtonLink onClick={() => handleOpenMessages('history')}>
                    <img src={theme?.images?.icons?.timeline} alt='timeline' />
                  </ButtonLink>
                </WrapperButton>
              </ContactInfoHeader>
              <SectionTitle>
                {t('CUSTOMER', 'Customer')}
              </SectionTitle>
              <SectionContainer>
                <PhotoWrapper>
                  {order?.customer?.photo ? (
                    <Photo bgimage={order?.customer?.photo} />
                  ) : (
                    <FaUserAlt />
                  )}
                </PhotoWrapper>
                <InfoBlock>
                  <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                  {order?.customer?.address && (
                    <span><HiOutlineLocationMarker /> {order?.customer?.address}</span>
                  )}
                  <CustomerContactBlock>
                    <button onClick={() => handleOpenMessages('customer')}>
                      <BsChat /> {t('CHAT', 'Chat')}
                    </button>
                    {order?.unread_count > 0 && (
                      <NotificationIcon>
                        <BsBell />
                      </NotificationIcon>
                    )}
                    {order?.customer?.cellphone && (
                      <button onClick={() => window.open(`tel:${order?.customer?.cellphone}`)}>
                        <HiOutlinePhone /> {t('CALL', 'Call')}
                      </button>
                    )}
                  </CustomerContactBlock>
                  {order?.customer?.cellphone && (
                    <PhoneNumber>
                      <HiOutlinePhone /> {order?.customer?.cellphone}
                    </PhoneNumber>
                  )}
                </InfoBlock>
              </SectionContainer>
              {user?.level === 0 && (
                <>
                  <SectionTitle>
                    {t('BUSINESS', 'Business')}
                  </SectionTitle>
                  <SectionContainer>
                    <PhotoWrapper>
                      <Photo bgimage={order?.business?.logo} />
                    </PhotoWrapper>
                    <InfoBlock>
                      <h1>{order?.business?.name}</h1>
                      {order?.business?.address && (
                        <span><HiOutlineLocationMarker />{order?.business?.address}</span>
                      )}
                      <CustomerContactBlock>
                        <button onClick={() => handleOpenMessages('business')}>
                          <BsChat /> {t('CHAT', 'Chat')}
                        </button>
                        <NotificationIcon>
                          <BsBell />
                        </NotificationIcon>
                        {order?.business?.phone && (
                          <button onClick={() => window.open(`tel:${order.business.phone}`)}>
                            <HiOutlinePhone /> {t('CALL', 'Call')}
                          </button>
                        )}
                      </CustomerContactBlock>
                      {order?.business?.phone && (
                        <PhoneNumber>
                          <HiOutlinePhone /> {order.business.phone}
                        </PhoneNumber>
                      )}
                    </InfoBlock>
                  </SectionContainer>
                </>
              )}

              {order?.delivery_type === 1 && (
                <>
                  <SectionTitle>
                    {t('DRIVER', 'Driver')}
                  </SectionTitle>
                  <SectionContainer>
                    <PhotoWrapper>
                      {order?.driver?.photo ? (
                        <Photo bgimage={order?.driver?.photo} />
                      ) : (
                        <FaUserAlt />
                      )}
                    </PhotoWrapper>
                    {order.driver_id ? (
                      <InfoBlock>
                        <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                        <CustomerContactBlock>
                          <button onClick={() => handleOpenMessages('driver')}>
                            <BsChat /> {t('CHAT', 'Chat')}
                          </button>
                          <NotificationIcon>
                            <BsBell />
                          </NotificationIcon>
                          {order?.driver?.cellphone && (
                            <button onClick={() => window.open(`tel:${order.driver.cellphone}`)}>
                              <HiOutlinePhone /> {t('CALL', 'Call')}
                            </button>
                          )}
                        </CustomerContactBlock>
                        <PhoneNumber>
                          <HiOutlinePhone /> {order?.driver?.cellphone}
                        </PhoneNumber>
                      </InfoBlock>
                    ) : (
                      <InfoBlock>
                        <h1>{t('NO_DRIVER', 'No driver')}</h1>
                      </InfoBlock>
                    )}
                  </SectionContainer>
                  <SectionTitle driver>
                    {t('SELECT_DRIVER', 'Select Driver')}
                  </SectionTitle>
                  <DriverSelectorContainer>
                    <DriverSelector
                      drivers={driversList.drivers}
                      isPhoneView
                      defaultValue={order?.driver?.id ? order.driver.id : 'default'}
                      order={order}
                    />
                  </DriverSelectorContainer>
                </>
              )}

              <PrintButtonContainer>
                <Button color='darkBlue' onClick={() => window.print()}>
                  {t('PRINT', 'Print')}
                </Button>
              </PrintButtonContainer>
            </ContactInfoContent>
          )}
        </WrapperContainer>
      )}

      {loading && (
        <WrapperContainer className='skeleton-loading'>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={100}>
              <Skeleton height={75} />
              <Skeleton height={100} />
              <Skeleton height={250} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
            </SkeletonBlock>
          </SkeletonBlockWrapp>
          {!messageDashboardView && (
            <SkeletonBlockWrapp>
              <SkeletonBlock width={100}>
                <Skeleton height={50} />
                {[...Array(3)].map((item, i) => (
                  <SkeletonInfoCell key={i}>
                    <Skeleton width={80} height={20} />
                    <SkeletonInnerBlock>
                      <Skeleton width={80} height={80} />
                      <WrapperSkeletonText>
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                        <WrapperSkeletonButton>
                          <Skeleton width={80} height={30} />
                          <Skeleton width={80} height={30} />
                        </WrapperSkeletonButton>
                      </WrapperSkeletonText>
                    </SkeletonInnerBlock>
                  </SkeletonInfoCell>
                ))}
                <Skeleton width={120} height={25} />
                <WrapperSkeletonBottom>
                  <Skeleton height={50} />
                  <Skeleton height={50} />
                </WrapperSkeletonBottom>
              </SkeletonBlock>
            </SkeletonBlockWrapp>
          )}
        </WrapperContainer>
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
