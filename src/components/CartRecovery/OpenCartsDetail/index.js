import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useSession, useUtils, OrderDetails as OrderDetailsController } from 'ordering-components-admin'
import { ProductItemAccordion } from '../../Orders/ProductItemAccordion'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { OrderBill } from '../../Orders/OrderBill'
import { OpenCartsContactInformation } from '../OpenCartsContactInformation'
import { NotFoundSource } from '../../Shared'
import { IconButton as ButtonLink } from '../../../styles'
import { XLg as CloseIcon } from 'react-bootstrap-icons'

import {
  Container,
  SkeletonWrapper,
  OrderDetailsContent,
  OrderProducts,
  HeaderContainer,
  OrderInfoWrapper,
  ButtonGroup
} from './styles'

const OpenCartsDetailUI = (props) => {
  const {
    isSelectedOrders,
    open,
    driversList,
    handleBackRedirect,
    messages
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ user }] = useSession()
  const [{ parseDate }] = useUtils()

  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false, customer: false })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {
    order,
    loading
  } = props.order

  const unreadMessages = () => {
    const unreadedMessages = messages?.messages.filter(message => !message?.read && message?.can_see?.includes(0) && message?.author_id !== user.id)
    const customer = unreadedMessages?.some(message => message?.author?.level === 3)
    const business = unreadedMessages?.some(message => message?.author?.level === 2)
    const driver = unreadedMessages?.some(message => message?.author?.level === 4)
    setUnreadAlert({ business, driver, customer })
  }

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderDetails').style.width = '100vw'
      } else {
        document.getElementById('orderDetails').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <Container
      isSelectedOrders={isSelectedOrders}
      id='orderDetails'
      isSkeleton={loading}
    >
      {loading && (
        <SkeletonWrapper>
          <Skeleton height={75} count={3} style={{ marginBottom: '10px' }} />
          <Skeleton height={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={30} style={{ marginBottom: '10px' }} />
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
          <Skeleton height={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
        </SkeletonWrapper>
      )}
      {order && Object.keys(order).length > 0 && !loading && (
        <OrderDetailsContent>
          <HeaderContainer>
            <OrderInfoWrapper>
              <h1>{('ID', 'ID')} {order?.id}</h1>
              <p>
                <span>{t('LAST_UPDATED', 'Last updated')}:</span>
                {order?.delivery_datetime_utc
                  ? parseDate(order?.delivery_datetime_utc, { outputFormat: 'MM/DD/YY • HH:mm a' })
                  : parseDate(order?.delivery_datetime, { utc: false })}
              </p>
            </OrderInfoWrapper>
            <ButtonGroup>
              <ButtonLink
                color='black'
                onClick={() => props.onClose() && props.onClose()}
              >
                <CloseIcon />
              </ButtonLink>
            </ButtonGroup>
          </HeaderContainer>

          <div>
            <OpenCartsContactInformation
              order={order}
              unreadAlert={unreadAlert}
              driversList={driversList}
            />
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
          </div>
        </OrderDetailsContent>
      )}

      {!loading && !order && (
        <NotFoundSource
          content={t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.')}
          btnTitle={t('PROFILE_ORDERS_REDIRECT', 'Go to Orders')}
          onClickButton={handleBackRedirect}
        />
      )}
    </Container>
  )
}
export const OpenCartsDetail = (props) => {
  const orderDetailsProps = {
    ...props,
    asDashboard: true,
    driversList: props.driversList,
    UIComponent: OpenCartsDetailUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
