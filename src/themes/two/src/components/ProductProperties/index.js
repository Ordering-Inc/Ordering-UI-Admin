import React, { useState, useEffect } from 'react'
import { useLanguage, ProductProperties as ProductPropertiesController } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Checkbox } from '../../styles/Checkbox'
import {
  PropertiesContainer,
  PropertyOption
} from './styles'

const ProductPropertiesUI = (props) => {
  const {
    productState,
    handleClickProperty
  } = props

  const [, t] = useLanguage()
  const [isShowSku, setIsShowSku] = useState(false)

  const handleClickSku = (e) => {
    if (e.target.checked) {
      setIsShowSku(true)
    } else {
      setIsShowSku(false)
      handleClickProperty('sku', -1)
    }
  }

  useEffect(() => {
    if (productState?.sku && parseInt(productState?.sku) !== -1) {
      setIsShowSku(true)
    } else {
      setIsShowSku(false)
    }
  }, [])

  return (
    <PropertiesContainer>
      <h1>{t('PROPERTIES', 'Properties')}</h1>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.featured}
          onClick={(e) => handleClickProperty('featured', e.target.checked)}
        />
        <span>{t('FEATURED', 'Featured')}</span>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.upselling}
          onClick={(e) => handleClickProperty('upselling', e.target.checked)}
        />
        <span>{t('UPSELLING', 'Upselling')}</span>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.inventoried}
          onClick={(e) => handleClickProperty('inventoried', e.target.checked)}
        />
        <span>{t('INVENTORIED', 'Limit product quantity')}</span>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={(productState?.sku && parseInt(productState?.sku) !== -1)}
          onClick={(e) => handleClickSku(e)}
        />
        <span>{t('SKU', 'Stock Keeping Unit (SKU)')}</span>
      </PropertyOption>
      {isShowSku && (
        <Input
          name='sku'
          defaultValue={parseInt(productState?.sku) !== -1 ? productState?.sku : ''}
          onChange={(e) => handleClickProperty('sku', e.target.value)}
        />
      )}
    </PropertiesContainer>
  )
}

export const ProductProperties = (props) => {
  const productProperties = {
    ...props,
    UIComponent: ProductPropertiesUI
  }
  return <ProductPropertiesController {...productProperties} />
}
