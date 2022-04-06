import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { OpenCartsDetail as OpenCartsDetailController } from './naked'
import { ProductItemAccordion } from '../../Orders/ProductItemAccordion'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { OpenCartBill } from '../OpenCartBill'
import { OpenCartsContactInformation } from '../OpenCartsContactInformation'
import { NotFoundSource } from '../../Shared'
import { IconButton as ButtonLink } from '../../../styles'
import { XLg as CloseIcon } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  OrderDetailsContent,
  OrderProducts,
  HeaderContainer,
  OrderInfoWrapper,
  ButtonGroup,
  SkeletonWrapper
} from './styles'

const OpenCartsDetailUI = (props) => {
  const {
    isSelectedOrders,
    open,
    handleBackRedirect,
    cartState
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
      {cartState?.loading ? (
        <SkeletonWrapper>
          <Skeleton height={75} count={3} style={{ marginBottom: '10px' }} />
          <Skeleton height={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={50} style={{ marginBottom: '10px' }} />
        </SkeletonWrapper>
      ) : (
        <>
          {cartState?.cart && Object.keys(cartState?.cart).length > 0 && (
            <OrderDetailsContent>
              <HeaderContainer>
                <OrderInfoWrapper>
                  <h1>{('ID', 'ID')} {cartState?.cart?.id}</h1>
                  <p>
                    <span>{t('LAST_UPDATED', 'Last updated')}:</span>
                    {cartState?.cart?.updated_at && parseDate(cartState?.cart?.updated_at, { outputFormat: 'MM/DD/YY • HH:mm a' })}
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
                  cart={cartState?.cart}
                />
                <OrderProducts>
                  <h2>{t('ORDER_DETAILS', 'Order details')}</h2>
                  {cartState?.cart?.products?.length && cartState?.cart?.products.map((product) => (
                    <ProductItemAccordion
                      key={product.id}
                      product={product}
                    />
                  ))}
                </OrderProducts>
                <OpenCartBill
                  cart={cartState?.cart}
                />
              </div>
            </OrderDetailsContent>
          )}
        </>
      )}

      {!cartState?.loading && !cartState?.cart && (
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
