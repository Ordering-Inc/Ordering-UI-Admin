import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { OpenCartsDetail as OpenCartsDetailController } from './naked'
import { ProductItemAccordion } from '../../Orders/ProductItemAccordion'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { OrderBill } from '../../Orders/OrderBill'
import { OpenCartsContactInformation } from '../OpenCartsContactInformation'
import { NotFoundSource } from '../../Shared'
import { IconButton as ButtonLink } from '../../../styles'
import { XLg as CloseIcon } from 'react-bootstrap-icons'

import {
  Container,
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
    cart
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ parseDate }] = useUtils()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    >
      {cart && Object.keys(cart).length > 0 && (
        <OrderDetailsContent>
          <HeaderContainer>
            <OrderInfoWrapper>
              <h1>{('ID', 'ID')} {cart?.id}</h1>
              <p>
                <span>{t('LAST_UPDATED', 'Last updated')}:</span>
                {cart?.updated_at && parseDate(cart?.updated_at, { outputFormat: 'MM/DD/YY • HH:mm a' })}
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
              cart={cart}
              driversList={driversList}
            />
            <OrderProducts>
              <h2>{t('ORDER_DETAILS', 'Order details')}</h2>
              {cart?.products?.length && cart?.products.map((product) => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                />
              ))}
            </OrderProducts>
            <OrderBill
              order={cart}
            />
          </div>
        </OrderDetailsContent>
      )}

      {!cart && (
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
    <OpenCartsDetailController {...orderDetailsProps} />
  )
}
