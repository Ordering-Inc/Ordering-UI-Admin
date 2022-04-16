import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { SideBar } from '../../Shared'
import { useTheme } from 'styled-components'
import { List as MenuIcon, CartPlusFill, Headset } from 'react-bootstrap-icons'
import {
  FreeProductsListContainer,
  HeaderTitleContainer,
  ContentWrapper,
  ProductItemWrapper,
  ProductItemContainer,
  ProductTitleContainer,
  IconWrapper,
  ProductItemContent,
  ProductTitle,
  ProductItemDescription,
  ProductDetailsContainer,
  DownloadLinksContainer,
  DownloadLink
} from './styles'

export const FreeProductsList = (props) => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isOpenProduct, setIsOpenProduct] = useState(false)
  const productItems = [
    {
      key: 'store_app',
      title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <CartPlusFill />
    },
    {
      key: 'driver_app',
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />
    },
    {
      key: 'pos_app',
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />
    },
    {
      key: 'kiosk_app',
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />
    },
    {
      key: 'call_center',
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <Headset />
    }
  ]

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product)
    setIsOpenProduct(true)
  }

  const handleCloseProduct = () => {
    setIsOpenProduct(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <FreeProductsListContainer>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('FREE_PRODUCTS', 'Free products')}</h1>
        </HeaderTitleContainer>
        <ContentWrapper className='row'>
          {productItems.map(product => (
            <ProductItemContainer
              key={product.key}
              className='col-md-4 col-sm-6'
              onClick={() => handleOpenProductDetails(product)}
            >
              <ProductItemWrapper active={product.key === selectedProduct?.key}>
                <IconWrapper>{product.icon}</IconWrapper>
                <ProductItemContent>
                  <ProductTitleContainer>
                    <ProductTitle>{product.title}</ProductTitle>
                  </ProductTitleContainer>
                  <ProductItemDescription>{product.description}</ProductItemDescription>
                </ProductItemContent>
              </ProductItemWrapper>
            </ProductItemContainer>
          ))}
        </ContentWrapper>
      </FreeProductsListContainer>
      {isOpenProduct && selectedProduct && (
        <SideBar
          open={isOpenProduct}
          onClose={() => handleCloseProduct()}
        >
          <ProductDetailsContainer>
            <h1>{selectedProduct.title}</h1>
            <p>{selectedProduct.description}</p>
            <DownloadLinksContainer>
              <DownloadLink href='https://www.apple.com/app-store' target='_blank'>
                <img src={theme.images.general.appStore} alt='App store' />
              </DownloadLink>
              <DownloadLink href='https://play.google.com/store' target='_blank'>
                <img src={theme.images.general.googlePlay} alt='Google play' />
              </DownloadLink>
            </DownloadLinksContainer>
          </ProductDetailsContainer>
        </SideBar>
      )}
    </>
  )
}
