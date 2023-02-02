import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, PlatformProductsList as PlatformProductsListController } from 'ordering-components-admin'
import { Alert, NotFoundSource, SideBar, Modal } from '../../Shared'
// import { Switch } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { GiftCardDetail } from '../GiftCardDetail'

import {
  Container,
  Title,
  ProductContainer,
  ItemContainer,
  InfoWrapper,
  WrapperImage,
  ProductName,
  Image,
  BottomContainer,
  NotFoundSourceWrapper,
  PriceWrapper,
  HeaderContainer,
  RequireDescription
} from './styles'
import { Button } from '../../../styles'

const GiftCardsUI = (props) => {
  const {
    platformProductsListState,
    handleParentSidebarMove,
    handleSuccessDeleteProduct,
    handleSuccessUpdateProduct,
    handleSuccessAddProduct
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parsePrice }] = useUtils()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [extraOpen, setExtraOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleOpenDetail = (level) => {
    setSelectedProduct(level)
    setExtraOpen(true)
    if (width >= 1100) {
      handleParentSidebarMove(550)
    }
  }

  const handleGiftDetail = () => {
    setExtraOpen(false)
    setSelectedProduct(null)
    handleParentSidebarMove(0)
  }

  useEffect(() => {
    if (width < 1100) {
      handleParentSidebarMove(0)
    } else {
      if (extraOpen) handleParentSidebarMove(550)
    }
  }, [width, extraOpen])

  return (
    <Container>
      <HeaderContainer>
        <Title>{t('GIFT_CARD', 'Gift Card')}</Title>
        {/* <Switch
          defaultChecked={review?.enabled}
          onChange={val => handleChangeEnabled(val)}
        /> */}
      </HeaderContainer>
      <RequireDescription>
        <b>{t('', 'Stripe activation is required.')}</b> <i>{t('', 'Compatible only with Wallet.')}</i>
      </RequireDescription>
      <ProductContainer>
        {platformProductsListState?.loading ? (
          <>
            {
              [...Array(5).keys()].map(i => (
                <ItemContainer key={i}>
                  <InfoWrapper>
                    <WrapperImage>
                      <Skeleton className='d-flex h-100' />
                    </WrapperImage>
                    <ProductName>
                      <Skeleton width={100} />
                    </ProductName>
                  </InfoWrapper>
                  <Skeleton width={16} height={16} />
                </ItemContainer>
              ))
            }
          </>
        ) : (
          <>
            {platformProductsListState?.products?.length > 0 ? platformProductsListState?.products.map(product => (
              <ItemContainer
                key={product.id}
                onClick={() => handleOpenDetail(product)}
                active={product?.id === selectedProduct?.id}
              >
                <InfoWrapper>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(product?.image || theme.images?.dummies?.product)} />
                  </WrapperImage>
                  <ProductName>{product?.name}</ProductName>
                </InfoWrapper>
                <PriceWrapper>
                  <span>{parsePrice(product?.price)}</span>
                  <ChevronRight />
                </PriceWrapper>
              </ItemContainer>
            )) : (
              <NotFoundSourceWrapper>
                <NotFoundSource />
              </NotFoundSourceWrapper>
            )}
          </>
        )}
      </ProductContainer>
      <BottomContainer>
        <Button
          color='primary'
          borderRadius='8px'
          onClick={() => handleOpenDetail({})}
        >
          {t('ADD_NEW_GIFT_CARD', 'Add new gift card')}
        </Button>
      </BottomContainer>
      {extraOpen && (
        <>
          {width >= 1100 ? (
            <SideBar
              isBorderShow
              open={extraOpen}
              defaultSideBarWidth={550}
              sidebarId='loyaltyLevel'
              onClose={handleGiftDetail}
            >
              <GiftCardDetail
                product={selectedProduct}
                handleSuccessDeleteProduct={handleSuccessDeleteProduct}
                handleSuccessUpdateProduct={handleSuccessUpdateProduct}
                handleSuccessAddProduct={handleSuccessAddProduct}
                setSelectedProduct={setSelectedProduct}
                onClose={handleGiftDetail}
              />
            </SideBar>
          ) : (
            <Modal
              width='70%'
              height='90vh'
              padding='0px'
              open={extraOpen}
              onClose={handleGiftDetail}
            >
              <GiftCardDetail
                product={selectedProduct}
                handleSuccessDeleteProduct={handleSuccessDeleteProduct}
                handleSuccessUpdateProduct={handleSuccessUpdateProduct}
                handleSuccessAddProduct={handleSuccessAddProduct}
                setSelectedProduct={setSelectedProduct}
                onClose={handleGiftDetail}
              />
            </Modal>
          )}
        </>
      )}
      <Alert
        title={t('LEVELS', 'Levels')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const GiftCards = (props) => {
  const giftCardsProps = {
    ...props,
    UIComponent: GiftCardsUI
  }
  return <PlatformProductsListController {...giftCardsProps} />
}
