import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, OpenCartsDetail as OpenCartsDetailController } from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { ProductItemAccordion } from '../../Orders/ProductItemAccordion'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { OpenCartBill } from '../OpenCartBill'
import { OpenCartsContactInformation } from '../OpenCartsContactInformation'
import { NotFoundSource, Confirm } from '../../Shared'
import { IconButton as ButtonLink } from '../../../styles'
import { ArrowsAngleContract, ArrowsAngleExpand, XLg as CloseIcon, ThreeDots } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  OrderDetailsContent,
  OrderProducts,
  HeaderContainer,
  OrderInfoWrapper,
  ButtonGroup,
  SkeletonWrapper,
  ActionSelectorWrapper
} from './styles'

const OpenCartsDetailUI = (props) => {
  const {
    isSelectedOrders,
    open,
    handleBackRedirect,
    cartState,
    handleDeleteCart
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ parseDate }] = useUtils()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('cartDetails').style.width = '100vw'
      } else {
        document.getElementById('cartDetails').style.width = '500px'
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
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose()
    }
  }

  const expandSidebar = () => {
    const element = document.getElementById('cartDetails')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  const onDeleteCart = (cart) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CART', 'Are you sure that you want to delete this cart?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteCart(cart)
      }
    })
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <Container
      isSelectedOrders={isSelectedOrders}
      id='cartDetails'
    >
      {cartState?.loading ? (
        <SkeletonWrapper>
          <Skeleton height={35} style={{ marginBottom: '10px' }} />
          <Skeleton height={20} width={200} style={{ marginBottom: '10px' }} />
          <Skeleton height={75} count={2} style={{ marginBottom: '15px' }} />
          <Skeleton height={25} width={150} style={{ marginBottom: '10px' }} />
          <Skeleton height={150} style={{ marginBottom: '10px' }} />
          <Skeleton height={15} count={5} style={{ marginBottom: '5px' }} />
          <Skeleton height={30} style={{ marginTop: '10px' }} />
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
                  {width > 576 && (
                    <ButtonLink
                      color='black'
                      onClick={expandSidebar}
                    >
                      {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                    </ButtonLink>
                  )}
                  <ActionSelectorWrapper>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={<ThreeDots />}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item onClick={() => onDeleteCart(cartState?.cart)}>
                        {t('DELETE', 'Delete')}
                      </Dropdown.Item>
                    </DropdownButton>
                  </ActionSelectorWrapper>
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
                      toppingsRemoved={cartState?.cart?.toppings_removed?.[product?.code]}
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

      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
