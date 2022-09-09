import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { SideBar } from '../../Shared'
import { useTheme } from 'styled-components'
import { List as MenuIcon, CartPlusFill, Headset } from 'react-bootstrap-icons'
import {
  FreeProductsListContainer,
  HeaderTitleContainer,
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
  const productsRef = useRef(null)
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isOpenProduct, setIsOpenProduct] = useState(false)

  const productItems = [
    {
      key: 'store_app',
      type: 1,
      title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
      short_description: t('STORE_APP_SHORT_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole businesses incoming orders on the go by installing a branded app on any mobile device they have.'),
      long_description: t('STORE_APP_LONG_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole businesses incoming orders on the go by installing a branded app on any mobile device they have.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
      icon: <CartPlusFill />,
      image: theme.images.apps.storeApp,
      app_store: 'https://apps.apple.com/us/app/store-app-2-0/id1608192050',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.storeappv5'
    },
    {
      key: 'driver_app',
      type: 1,
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      short_description: t('DRIVER_APP_SHORT_DESCRIPTION', 'Your fleet´s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.'),
      long_description: t('DRIVER_APP_LONG_DESCRIPTION', 'Your fleet´s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />,
      image: theme.images.apps.driverApp,
      app_store: 'https://apps.apple.com/us/app/driver-app-2-0/id1606257815',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.deliveryv5'
    },
    {
      key: 'pos_app',
      type: 1,
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      short_description: t('POS_APP_SHORT_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.'),
      long_description: t('POS_APP_LONG_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />,
      image: theme.images.apps.posApp,
      app_store: 'https://apps.apple.com/us/app/ordering-pos-2-0/id1609520468',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.posv5&hl=en&gl=US'
    },
    {
      key: 'kiosk_app',
      type: 1,
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      short_description: t('KIOSK_APP_SHORT_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.'),
      long_description: t('KIOSK_APP_LONG_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />,
      image: theme.images.apps.kioskApp,
      app_store: 'https://apps.apple.com/us/app/ordering-kiosk-2-0/id1609314960',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.orderingkioskv5&hl=en&gl=US'
    },
    {
      key: 'call_center',
      type: 2,
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      short_description: t('CALL_CENTER_SHORT_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.'),
      long_description: t('CALL_CENTER_LONG_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.<br /><sub>This is a branded Ordering.co product; use it with your project, email, and password for free; features might be limited.</sub>'),
      icon: <Headset />,
      image: theme.images.apps.callCenterApp,
      web_url: 'https://callcenter.tryordering.com/search'
    }
  ]

  const handleOpenProductDetails = (e, product) => {
    const isInvalid = e.target.closest('.download-link')
    if (isInvalid) return
    setSelectedProduct(product)
    setIsOpenProduct(true)
  }

  const handleCloseProduct = () => {
    setIsOpenProduct(false)
    setSelectedProduct(null)
  }

  const handleClickOutside = (e) => {
    const isInvalid = e.target.closest('.free-product-row') || !productsRef.current?.contains(e.target)
    if (isInvalid) return
    handleCloseProduct()
  }

  useEffect(() => {
    if (!isOpenProduct) return
    window.addEventListener('mouseup', handleClickOutside)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
    }
  }, [isOpenProduct])

  return (
    <>
      <FreeProductsListContainer ref={productsRef}>
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
              className='free-product-row'
              active={product.key === selectedProduct?.key}
              onClick={(e) => handleOpenProductDetails(e, product)}
            >
              <AppImageWrapper>
                <img src={product.image} alt='' />
              </AppImageWrapper>
              <AppDescriptionWarpper>
                <h3>{product.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
              </AppDescriptionWarpper>
              <AppDownloadLinksWrapper>
                {product.type === 1 && (
                  <>
                    <DownloadLink href={product.app_store} target='_blank' className='download-link'>
                      <img src={theme.images.general.appStore} alt='App store' />
                    </DownloadLink>
                    <DownloadLink href={product.google_play_store} target='_blank' className='download-link'>
                      <img src={theme.images.general.googlePlay} alt='Google play' />
                    </DownloadLink>
                  </>
                )}
                {product.type === 2 && (
                  <DownloadLink href={product.web_url} target='_blank' isSingle={product.type === 2} className='download-link'>
                    {product.title}
                  </DownloadLink>
                )}
              </AppDownloadLinksWrapper>
            </ProductRow>
          ))}
        </ProductsRowListContainer>
      </FreeProductsListContainer>
      {isOpenProduct && selectedProduct && (
        <SideBar
          open={isOpenProduct}
          onClose={() => handleCloseProduct()}
        >
          <ProductDetailsContainer>
            <h1>{selectedProduct.title}</h1>
            <div className='description' dangerouslySetInnerHTML={{ __html: selectedProduct.long_description }} />
            <DownloadLinksContainer>
              {selectedProduct.type === 1 && (
                <>
                  <DownloadLink href={selectedProduct.app_store} target='_blank'>
                    <img src={theme.images.general.appStore} alt='App store' />
                  </DownloadLink>
                  <DownloadLink href={selectedProduct.google_play_store} target='_blank'>
                    <img src={theme.images.general.googlePlay} alt='Google play' />
                  </DownloadLink>
                </>
              )}
              {selectedProduct.type === 2 && (
                <DownloadLink href={selectedProduct.web_url} target='_blank'>
                  {selectedProduct.title}
                </DownloadLink>
              )}
            </DownloadLinksContainer>
          </ProductDetailsContainer>
        </SideBar>
      )}
    </>
  )
}
