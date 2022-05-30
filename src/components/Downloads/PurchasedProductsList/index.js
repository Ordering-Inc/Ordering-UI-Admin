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
      short_description: t('STORE_APP_SHORT_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.'),
      long_description: t('STORE_APP_LONG_DESCRIPTION', 'Allow your restaurants or business owners to receive their orders on your own white-labeled Orders Manager app.<br /><br />Use it Branded on your business at no cost.<br />All you need to do is use the Business Owners Credentials that you currently have on your Dashboard.'),
      icon: <CartPlusFill />,
      image: theme.images.apps.storeApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1717'
    },
    {
      key: 'driver_app',
      type: 1,
      title: t('ORDERING_DRIVER_APP', 'Driver App _version_').replace('_version_', '2.0'),
      short_description: t('DRIVER_APP_SHORT_DESCRIPTION', 'Use it Branded on your business at no cost.'),
      long_description: t('DRIVER_APP_LONG_DESCRIPTION', 'Use it Branded on your business at no cost.<br />All you need to do is use the Driver Credentials that you currently have on your Dashboard.'),
      icon: <img src={theme.images.icons.delivery} alt='delivery app icon' />,
      image: theme.images.apps.driverApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1718'
    },
    {
      key: 'pos_app',
      type: 1,
      title: t('ORDERING_POS', 'POS _version_').replace('_version_', '2.0'),
      short_description: t('POS_APP_SHORT_DESCRIPTION', 'Create orders in your system without the hassle and auto-complete information.'),
      long_description: t('POS_APP_LONG_DESCRIPTION', 'POS Ordering System: Take orders on the phone easily<br />Create orders in your system without the hassle and auto-complete information.<br />Save customer info with their number'),
      icon: <img src={theme.images.icons.posTerminal} alt='pos app icon' />,
      image: theme.images.apps.posApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1793'
    },
    {
      key: 'kiosk_app',
      type: 1,
      title: t('ORDERING_KIOSK', 'Ordering Kiosk _version_').replace('_version_', '2.0'),
      short_description: t('KIOSK_APP_SHORT_DESCRIPTION', 'Ordering Kiosk completes that final step for each sale'),
      long_description: t('KIOSK_APP_LONG_DESCRIPTION', 'Did you know that 7 out of 10 customers prefer to make their orders themselves?<br />Ordering Kiosk completes that final step for each sale.'),
      icon: <img src={theme.images.icons.poster} alt='kiosk app icon' />,
      image: theme.images.apps.kioskApp,
      app_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794',
      google_play_store: 'https://apps.tryordering.com/store/marketplace?category=306&product=1794'
    },
    {
      key: 'call_center',
      type: 2,
      title: t('ORDERING_CALL_CENTER', 'Call Center _version_').replace('_version_', '2.0'),
      short_description: t('CALL_CENTER_SHORT_DESCRIPTION', 'Improving your <b>Customer Experience</b> and your <b>Orders Management</b> team processes.<br />Seamlessly integrated with your Ordering Solution.'),
      long_description: t('CALL_CENTER_LONG_DESCRIPTION', 'Improving your <b>Customer Experience</b> and your <b>Orders Management</b> team processes.<br />Seamlessly integrated with your Ordering Solution.'),
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
