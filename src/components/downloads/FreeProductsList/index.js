import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { SideBar } from '../../Shared'
import { useTheme } from 'styled-components'
import { List as MenuIcon, CartPlusFill, Headset } from 'react-bootstrap-icons'
import BsViewList from '@meronex/icons/bs/BsViewList'
import BsTable from '@meronex/icons/bs/BsTable'
import {
  FreeProductsListContainer,
  HeaderTitleContainer,
  ViewMethodsConatiner,
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
  DownloadLink,
  ProductsRowListContainer,
  ProductRow,
  AppImageWrapper,
  AppDescriptionWarpper,
  AppDownloadLinksWrapper,
  AppHeaderTitle
} from './styles'

export const FreeProductsList = (props) => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isOpenProduct, setIsOpenProduct] = useState(false)
  const [viewMethod, setViewMethod] = useState('card')

  const productItems = [
    {
      key: 'store_app',
      title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <CartPlusFill />,
      image: theme.images.apps.storeApp
    },
    {
      key: 'driver_app',
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />,
      image: theme.images.apps.driverApp
    },
    {
      key: 'pos_app',
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />,
      image: theme.images.apps.posApp
    },
    {
      key: 'kiosk_app',
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />,
      image: theme.images.apps.kioskApp
    },
    {
      key: 'call_center',
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      description: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.'),
      icon: <Headset />,
      image: theme.images.apps.callCenterApp
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
        <ViewMethodsConatiner>
          <IconButton
            color={viewMethod === 'card' ? 'primary' : 'black'}
            onClick={() => setViewMethod('card')}
          >
            <BsViewList />
          </IconButton>
          <IconButton
            color={viewMethod === 'list' ? 'primary' : 'black'}
            onClick={() => setViewMethod('list')}
          >
            <BsTable />
          </IconButton>
        </ViewMethodsConatiner>
        {viewMethod === 'card' && (
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
        )}
        {viewMethod === 'list' && (
          <ProductsRowListContainer>
            <ProductRow isHeader>
              <AppImageWrapper>
                <AppHeaderTitle>{t('PRODUCTS', 'Products')}</AppHeaderTitle>
              </AppImageWrapper>
              <AppDescriptionWarpper isHeader>
                <AppHeaderTitle>{t('DESCRIPTION', 'Description')}</AppHeaderTitle>
              </AppDescriptionWarpper>
              <AppDownloadLinksWrapper isHeader>
                <AppHeaderTitle>{t('DOWNLOAD', 'Download')}</AppHeaderTitle>
              </AppDownloadLinksWrapper>
            </ProductRow>
            {productItems.map(product => (
              <ProductRow
                key={product.key}
                active={product.key === selectedProduct?.key}
                onClick={() => handleOpenProductDetails(product)}
              >
                <AppImageWrapper>
                  <img src={product.image} alt='' />
                </AppImageWrapper>
                <AppDescriptionWarpper>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </AppDescriptionWarpper>
                <AppDownloadLinksWrapper>
                  <DownloadLink href='https://www.apple.com/app-store' target='_blank'>
                    <img src={theme.images.general.appStore} alt='App store' />
                  </DownloadLink>
                  <DownloadLink href='https://play.google.com/store' target='_blank'>
                    <img src={theme.images.general.googlePlay} alt='Google play' />
                  </DownloadLink>
                </AppDownloadLinksWrapper>
              </ProductRow>
            ))}
          </ProductsRowListContainer>
        )}
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
