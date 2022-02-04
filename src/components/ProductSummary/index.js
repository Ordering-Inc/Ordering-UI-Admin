import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { XLg, ThreeDots, Laptop, Phone } from 'react-bootstrap-icons'
import { Switch } from '../../styles/Switch'
import { IconButton } from '../../styles/Buttons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { ProductDesktopPreview } from '../ProductDesktopPreview'

import {
  ProductDetailsContainer,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  ProductName,
  ProductImage,
  ProductDetailsContent,
  ProductPrice,
  ProductDescription,
  ProductConfigsContainer,
  ProductConfigOption,
  ActionSelectorWrapper,
  ProductPreviewHeader
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
    showProductOption
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parsePrice }] = useUtils()
  const [isEditMode, setIsEditMode] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isProductPreview, setIsProductPreview] = useState(false)
  const [selectedView, setSelectedView] = useState('desktop')

  const configsOptions = [
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
      key: 'custom_fields',
      value: t('CUSTOM_FIELDS', 'Custom fields')
    },
    {
      key: 'personalization',
      value: t('PERSONALIZATION', 'Personalization')
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
  return (
    <>
      <ProductDetailsContainer>
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
        <ProductImage bgimage={optimizeImage(productState?.product?.images, 'h_200,c_limit')} />
        <ProductDetailsContent>
          <ProductPrice>
            {parsePrice(productState?.product?.price)}
            {productState?.product?.in_offer && productState?.product?.offer_price && (
              <span>{parsePrice(productState?.product?.offer_price)}</span>
            )}
          </ProductPrice>
          <ProductDescription>{productState?.product?.description}</ProductDescription>
          <ProductConfigsContainer>
            {configsOptions.map(config => (
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
