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

  const productItems = [
    {
      key: 'store_app',
      type: 1,
      title: t('ORDERING_STORE_APP', 'Store App _version_').replace('_version_', '2.0'),
      short_description: t('STORE_APP_SHORT_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.'),
      long_description: t('STORE_APP_LONG_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.\n\nUse it Branded on your business at no cost.\nAll you need to do is use the Business Owners Credentials that you currently have on your Dashboard.'),
      icon: <CartPlusFill />,
      image: theme.images.apps.storeApp,
      app_store: 'https://apps.apple.com/us/app/store-app-2-0/id1608192050',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.storeappv5'
    },
    {
      key: 'driver_app',
      type: 1,
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      short_description: t('DRIVER_APP_SHORT_DESCRIPTION', 'Use it Branded on your business at no cost.'),
      long_description: t('DRIVER_APP_LONG_DESCRIPTION', 'Use it Branded on your business at no cost.\nAll you need to do is use the Driver Credentials that you currently have on your Dashboard.'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />,
      image: theme.images.apps.driverApp,
      app_store: 'https://apps.apple.com/us/app/driver-app-2-0/id1606257815',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.deliveryv5'
    },
    {
      key: 'pos_app',
      type: 1,
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      short_description: t('POS_APP_SHORT_DESCRIPTION', 'Create orders in your system without the hassle and auto-complete information.'),
      long_description: t('POS_APP_LONG_DESCRIPTION', 'POS Ordering System: Take orders on the phone easily\nCreate orders in your system without the hassle and auto-complete information.\nSave customer info with their number'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />,
      image: theme.images.apps.posApp,
      app_store: 'https://apps.apple.com/us/app/ordering-pos-2-0/id1609520468',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.posv5&hl=en&gl=US'
    },
    {
      key: 'kiosk_app',
      type: 1,
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      short_description: t('KIOSK_APP_SHORT_DESCRIPTION', 'Ordering Kiosk completes that final step for each sale'),
      long_description: t('KIOSK_APP_LONG_DESCRIPTION', 'Did you know that 7 out of 10 customers prefer to make their orders themselves?\nOrdering Kiosk completes that final step for each sale.'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />,
      image: theme.images.apps.kioskApp,
      app_store: 'https://apps.apple.com/us/app/ordering-kiosk-2-0/id1609314960',
      google_play_store: 'https://play.google.com/store/apps/details?id=com.ordering.orderingkioskv5&hl=en&gl=US'
    },
    {
      key: 'call_center',
      type: 2,
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      short_description: t('CALL_CENTER_SHORT_DESCRIPTION', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
      long_description: t('CALL_CENTER_LONG_DESCRIPTION', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
      icon: <Headset />,
      image: theme.images.apps.callCenterApp,
      web_url: 'https://react-call-center.tryordering.com/'
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
              onClick={(e) => handleOpenProductDetails(e, product)}
            >
              <AppImageWrapper>
                <img src={product.image} alt='' />
              </AppImageWrapper>
              <AppDescriptionWarpper>
                <h3>{product.title}</h3>
                <p>{product.short_description}</p>
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
            <p>{selectedProduct.long_description}</p>
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
