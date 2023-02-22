import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import BiImage from '@meronex/icons/bi/BiImage'
import { XLg, ThreeDots, Laptop, Phone, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { Switch } from '../../../styles/Switch'
import { IconButton } from '../../../styles'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm, Modal, ProgressRing } from '../../Shared'
import { ProductDesktopPreview } from '../ProductDesktopPreview'

import {
  ProductDetailsContainer,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  ProductName,
  ProductImageWrapper,
  ProductImage,
  ProductDetailsContent,
  // ProductPrice,
  ProductDescription,
  ProductConfigsContainer,
  ProductConfigOption,
  ActionSelectorWrapper,
  ProductPreviewHeader,
  ProductSummaryContent,
  ProductSales,
  RolWrapper,
  ProductDetails,
  FieldsItem,
  PriceDuration
} from './styles'

export const ProductSummary = (props) => {
  const {
    actionSidebar,
    showOption,
    handleShowOption,
    handleChangeProductActiveState,
    productState,
    productCart,
    handleDeleteProduct,
    showProductOption,
    extraOpen
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parsePrice }] = useUtils()

  const [isEditMode, setIsEditMode] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isProductPreview, setIsProductPreview] = useState(false)
  const [selectedView, setSelectedView] = useState('desktop')
  const [isExpand, setIsExpand] = useState(false)

  const productConfigOptions = [
    {
      key: 'product_details',
      value: t('PRODUCT_DETAILS', 'Product details')
    },
    {
      key: 'ingredients',
      value: <span>{t('INGREDIENTS', 'Ingredients')} / {t('PROPERTIES', 'Properties')}</span>
    },
    {
      key: 'product_options',
      value: t('PRODUCT_OPTIONS', 'Product options')
    },
    {
      key: 'product_images',
      value: t('PRODUCT_IMAGES', 'Product images')
    },
    {
      key: 'product_video',
      value: t('PRODUCT_VIDEO', 'Product video')
    }
    // {
    //   key: 'custom_fields',
    //   value: t('CUSTOM_FIELDS', 'Custom fields')
    // },
    // {
    //   key: 'personalization',
    //   value: t('PERSONALIZATION', 'Personalization')
    // }
  ]

  const serviceConfigOptions = [
    {
      key: 'service_details',
      value: t('SERVICE_DETAILS', 'Service details')
    },
    {
      key: 'professionals',
      value: t('PROFESSIONALS', 'Professionals')
    },
    {
      key: 'product_options',
      value: t('PRODUCT_OPTIONS', 'Product options')
    },
    {
      key: 'product_images',
      value: t('PRODUCT_IMAGES', 'Product images')
    }
  ]

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: () => {
        handleDeleteProduct()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const getPercentage = () => {
    if (productState.product) {
      if (productState?.product?.price) {
        return (productState?.product?.price - productState?.product?.cost_price) * 100 / productState?.product?.price
      } else {
        return 100
      }
    } else {
      return 0
    }
  }

  const expandSideBar = () => {
    const element = document.getElementById('product_details')
    if (!element) return

    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (extraOpen) setIsExpand(false)
  }, [extraOpen])

  return (
    <>
      <ProductDetailsContainer disabled={productState.loading}>
        <DetailsHeader>
          <LeftHeader>
            <ProductName>
              {productState?.product?.name}
            </ProductName>
            <Switch
              defaultChecked={productState?.product?.enabled || false}
              onChange={handleChangeProductActiveState}
            />
          </LeftHeader>
          <RightHeader>
            <IconButton
              color='black'
              onClick={() => expandSideBar()}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </IconButton>
            <ActionSelectorWrapper>
              <DropdownButton
                className='product_actions'
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item
                  onClick={() => setIsProductPreview(true)}
                >
                  {t('PREVIEW', 'Preview')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleShowOption('custom_fields')}
                >
                  {t('CUSTOM_FIELDS', 'Custom fields')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleShowOption('personalization')}
                >
                  {t('PERSONALIZATION', 'Personalization')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDeleteClick()}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionSelectorWrapper>
            <IconButton
              color='black'
              onClick={() => isEditMode ? setIsEditMode(false) : actionSidebar(false)}
            >
              <XLg />
            </IconButton>
          </RightHeader>
        </DetailsHeader>
        <ProductSummaryContent>
          <ProductImageWrapper>
            {productState?.product?.images ? (
              <ProductImage bgimage={optimizeImage(productState?.product?.images, 'h_200,c_limit')} />
            ) : (
              <BiImage />
            )}
          </ProductImageWrapper>
          {productState?.product?.type !== 'service' && (
            <ProductSales>
              <ProgressRing
                isShowPercent
                percent={getPercentage()}
                size={70}
                lineWidth={8}
                progressColor={theme.colors.primary}
                trackColor={theme.colors.borderColor}
                caps='round'
                children
                spin={false}
                transitionDuration={200}
              />
              <RolWrapper>
                <h4>{parsePrice(productState?.product?.price - productState?.product?.cost_price)}</h4>
                <p>{t('PRODUCT_SALES_ROI', 'Product sales ROI')}</p>
              </RolWrapper>
            </ProductSales>
          )}
        </ProductSummaryContent>

        <ProductDetailsContent>
          {productState?.product?.type !== 'service' && (
            <ProductDetails>
              <FieldsItem>
                <h4>{parsePrice(productState?.product?.price)}</h4>
                <p>{t('PRODUCT_SELLING_PRICE', 'Selling price')}</p>
              </FieldsItem>
              {productState?.product?.in_offer && (
                <FieldsItem>
                  <h4>{parsePrice(productState?.product?.offer_price)}</h4>
                  <p>{t('REGULAR_PRICE', 'Regular Price')}</p>
                </FieldsItem>
              )}
              {productState?.product?.cost_price && (
                <FieldsItem>
                  <h4>{parsePrice(productState?.product?.cost_price)}</h4>
                  <p>{t('PRODUCT_COST', 'Product cost')}</p>
                </FieldsItem>
              )}
              {productState?.product?.cost_offer_price && (
                <FieldsItem>
                  <h4>{parsePrice(productState?.product?.cost_offer_price)}</h4>
                  <p>{t('PRODUCT_REGULAR_COST', 'Product cost - regular price')}</p>
                </FieldsItem>
              )}
            </ProductDetails>
          )}
          {productState?.product?.type === 'service' && (
            <>
              <PriceDuration>
                <span>{parsePrice(productState?.product?.price)}</span>
                <span className='dot'>•</span>
                <span>{productState?.product?.duration}min</span>
              </PriceDuration>
              {productState?.product?.description && (
                <ProductDescription>{productState?.product?.description}</ProductDescription>
              )}
            </>
          )}
          {/* <ProductPrice>
            {parsePrice(productState?.product?.price)}
            {productState?.product?.in_offer && productState?.product?.offer_price && (
              <span>{parsePrice(productState?.product?.offer_price)}</span>
            )}
          </ProductPrice>
          <ProductDescription>{productState?.product?.description}</ProductDescription> */}
          <ProductConfigsContainer>
            {(productState?.product?.type === 'service' ? serviceConfigOptions : productConfigOptions).map(config => (
              <ProductConfigOption
                key={config.key}
                active={showOption === config.key}
                onClick={() => handleShowOption(config.key)}
              >
                <span>{config.value}</span>
                <BsChevronRight />
              </ProductConfigOption>
            ))}
          </ProductConfigsContainer>
        </ProductDetailsContent>
      </ProductDetailsContainer>
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />

      <Modal
        width='900px'
        open={isProductPreview}
        onClose={() => {
          setIsProductPreview(false)
          setSelectedView('desktop')
        }}
      >
        <ProductPreviewHeader>
          <h1>{t('PREVIEW', 'Preview')}</h1>
          <div>
            <IconButton
              color={selectedView === 'desktop' ? 'primary' : 'black'}
              onClick={() => setSelectedView('desktop')}
            >
              <Laptop />
            </IconButton>
            <IconButton
              color={selectedView === 'mobile' ? 'primary' : 'black'}
              onClick={() => setSelectedView('mobile')}
            >
              <Phone />
            </IconButton>
          </div>
        </ProductPreviewHeader>
        <ProductDesktopPreview
          isMobileView={selectedView === 'mobile'}
          product={productState?.product}
          productCart={productCart}
          showProductOption={showProductOption}
        />
      </Modal>
    </>
  )
}
