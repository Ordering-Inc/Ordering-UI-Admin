import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { SideBar } from '../../Shared'
import { useTheme } from 'styled-components'
import { List as MenuIcon, CartPlusFill, Headset } from 'react-bootstrap-icons'
import {
  ProductsListContainer,
  HeaderTitleContainer,
  ProductDetailsContainer,
  DownloadLinksContainer,
  DownloadLink,
  AppImageWrapper,
  AppDescriptionWarpper,
  ProductsTableWrapper,
  ProductsTable,
  ProductTboday,
  AppHeaderTitle,
  ButtonWrapper
} from './styles'

export const PurchasedProductsList = (props) => {
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
      short_description: t('STORE_APP_SHORT_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business´s incoming orders on the go by installing a branded app on any mobile device they have.'),
      long_description: t('STORE_APP_LONG_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business´s incoming orders on the go by installing a branded app on any mobile device they have.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
      icon: <CartPlusFill />,
      image: theme.images.apps.storeApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717'
    },
    {
      key: 'driver_app',
      type: 1,
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      short_description: t('DRIVER_APP_SHORT_DESCRIPTION', 'Your fleets best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.'),
      long_description: t('DRIVER_APP_LONG_DESCRIPTION', 'Your fleets best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders timing, and control their busy times.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />,
      image: theme.images.apps.driverApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718'
    },
    {
      key: 'pos_app',
      type: 1,
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      short_description: t('POS_APP_SHORT_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.'),
      long_description: t('POS_APP_LONG_DESCRIPTION', 'Create a loyal and returning community by offering the best customer experience; customer service is always the definite factor for users to keep returning; this fast software will help you understand customers, save their numbers, and order quickly.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />,
      image: theme.images.apps.posApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793'
    },
    {
      key: 'kiosk_app',
      type: 1,
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      short_description: t('KIOSK_APP_SHORT_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.'),
      long_description: t('KIOSK_APP_LONG_DESCRIPTION', 'Simplify the ordering process inside your store. Allow your customers to select what they want to purchase products and pay directly in this kiosk—made with the highest tech, intuitive, and modern.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />,
      image: theme.images.apps.kioskApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794'
    },
    {
      key: 'call_center',
      type: 2,
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      short_description: t('CALL_CENTER_SHORT_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.'),
      long_description: t('CALL_CENTER_LONG_DESCRIPTION', 'Take orders over the phone, too; agents will take orders over the phone and create the order for your customers in just a few minutes, using this friendly and intuitive software.<br /><sub>This App is delivered in less than 5 working days, fully branded with your guidelines.</sub>'),
      icon: <Headset />,
      image: theme.images.apps.callCenterApp,
      web_url: 'https://apps.tryordering.com/store/marketplace?category=306&product=1792'
    }
  ]

  const handleOpenProductDetails = (e, product) => {
    const isInvalid = e.target.closest('.purchase-btn')
    if (isInvalid) return
    setSelectedProduct(product)
    setIsOpenProduct(true)
  }

  const handleCloseProduct = () => {
    setIsOpenProduct(false)
    setSelectedProduct(null)
  }

  const handleClickOutside = (e) => {
    const isInvalid = e.target.closest('.purchased-product-row') || !productsRef.current?.contains(e.target)
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
      <ProductsListContainer ref={productsRef}>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('PURCHASED_PRODUCTS', 'Purchased Products')}</h1>
        </HeaderTitleContainer>

        <ProductsTableWrapper>
          <ProductsTable>
            <thead>
              <tr>
                <th>
                  <AppImageWrapper isHeader>
                    <AppHeaderTitle>{t('PRODUCTS', 'Products')}</AppHeaderTitle>
                  </AppImageWrapper>
                </th>
                <th>
                  <AppDescriptionWarpper isHeader>
                    <AppHeaderTitle>{t('DESCRIPTION', 'Description')}</AppHeaderTitle>
                  </AppDescriptionWarpper>
                </th>
                <th>
                  <AppHeaderTitle isCenter>
                    <img src={theme.images.icons.apple} alt='apple icon' />
                    <span>iOS</span>
                  </AppHeaderTitle>
                </th>
                <th>
                  <AppHeaderTitle isCenter>
                    <img src={theme.images.icons.android} alt='android icon' />
                    <span>Android</span>
                  </AppHeaderTitle>
                </th>
              </tr>
            </thead>
            {productItems.map(product => (
              <ProductTboday
                key={product.key}
                className='purchased-product-row'
                active={product.key === selectedProduct?.key}
                onClick={(e) => handleOpenProductDetails(e, product)}
              >
                <tr>
                  <td>
                    <AppImageWrapper>
                      <img src={product.image} alt='' />
                    </AppImageWrapper>
                  </td>
                  <td>
                    <AppDescriptionWarpper>
                      <h3>{product.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
                    </AppDescriptionWarpper>
                  </td>
                  {product.type === 1 && (
                    <>
                      <td>
                        <ButtonWrapper className='purchase-btn'>
                          <Button
                            color='primary'
                            borderRadius='8px'
                            onClick={() => window.open(`${product.app_store}`, '_blank')}
                          >
                            {t('PURCHASE_NOW', 'Purchase now')}
                          </Button>
                        </ButtonWrapper>
                      </td>
                      <td>
                        <ButtonWrapper className='purchase-btn'>
                          <Button
                            color='primary'
                            borderRadius='8px'
                            onClick={() => window.open(`${product.google_play_store}`, '_blank')}
                          >
                            {t('PURCHASE_NOW', 'Purchase now')}
                          </Button>
                        </ButtonWrapper>
                      </td>
                    </>
                  )}
                  {product.type === 2 && (
                    <td colSpan={2}>
                      <ButtonWrapper className='purchase-btn'>
                        <Button
                          color='primary'
                          borderRadius='8px'
                          onClick={() => window.open(`${product.web_url}`, '_blank')}
                        >
                          {t('PURCHASE_NOW', 'Purchase now')}
                        </Button>
                      </ButtonWrapper>
                    </td>
                  )}
                </tr>
              </ProductTboday>
            ))}
          </ProductsTable>
        </ProductsTableWrapper>
      </ProductsListContainer>
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
                  <DownloadLink
                    onClick={() => window.open(`${selectedProduct.app_store}`, '_blank')}
                  >
                    <img src={theme.images.general.appStore} alt='App store' />
                  </DownloadLink>
                  <DownloadLink
                    onClick={() => window.open(`${selectedProduct.google_play_store}`, '_blank')}
                  >
                    <img src={theme.images.general.googlePlay} alt='Google play' />
                  </DownloadLink>
                </>
              )}
              {selectedProduct.type === 2 && (
                <DownloadLink
                  onClick={() => window.open(`${selectedProduct.web_url}`, '_blank')}
                >
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
