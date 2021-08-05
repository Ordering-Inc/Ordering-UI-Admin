import React, { useState } from 'react'
import { useLanguage, useUtils, ProductDetatils as ProductDetatilsController } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { XLg } from 'react-bootstrap-icons'
import { Switch } from '../../styles/Switch'
import { ProductDetatilsEditForm } from '../ProductDetatilsEditForm'
import { Button, IconButton } from '../../styles/Buttons'

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
  ProductConfigOption
} from './styles'

const ProductMainDetailsUI = (props) => {
  const {
    actionSidebar,
    showOption,
    handleShowOption,
    handleChangeProductActiveState,
    productState,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage, parsePrice }] = useUtils()
  const [isEditMode, setIsEditMode] = useState(false)

  const configsOptions = [
    {
      key: 'properties',
      value: t('PROPERTIES', 'Properties')
    },
    {
      key: 'ingredients',
      value: t('INGREDIENTS', 'Ingredients')
    },
    {
      key: 'product_extras',
      value: t('PRODUCT_EXTRAS', 'Product extras')
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
            <IconButton
              color='black'
              onClick={() => isEditMode ? setIsEditMode(false) : actionSidebar(false)}
            >
              <XLg />
            </IconButton>
          </RightHeader>
        </DetailsHeader>
        {!isEditMode ? (
          <>
            <ProductImage bgimage={optimizeImage(productState?.product?.images, 'h_400,c_limit')} />
            <ProductDetailsContent>
              <ProductPrice>{parsePrice(productState?.product?.price)}</ProductPrice>
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
            <Button
              color='secundaryDark'
              borderRadius='7.6px'
              onClick={() => setIsEditMode(true)}
            >
              {t('EDIT', 'Edit')}
            </Button>
          </>
        ) : (
          <ProductDetatilsEditForm
            onCancel={() => setIsEditMode(false)}
            product={productState?.product}
            formState={formState}
            handlechangeImage={handlechangeImage}
            handleChangeInput={handleChangeInput}
            handleButtonUpdateClick={handleUpdateClick}
          />
        )}

      </ProductDetailsContainer>
    </>
  )
}

export const ProductMainDetails = (props) => {
  const productDetailsProps = {
    ...props,
    UIComponent: ProductMainDetailsUI
  }
  return <ProductDetatilsController {...productDetailsProps} />
}
