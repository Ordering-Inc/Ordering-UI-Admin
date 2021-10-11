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
  const [isShowStock, setIsShowStock] = useState(false)

  const handleClickSku = (e) => {
    if (e.target.checked) {
      setIsShowSku(true)
    } else {
      setIsShowSku(false)
      handleClickProperty('sku', -1)
    }
  }

  const handleClickStock = (e) => {
    handleClickProperty('inventoried', e.target.checked)
    if (e.target.checked) {
      setIsShowStock(true)
    } else {
      setIsShowStock(false)
    }
  }

  const hanldeClickStockInput = (value) => {
    if (value === '') handleClickProperty('quantity', productState?.quantity)
    else handleClickProperty('quantity', value)
  }

  useEffect(() => {
    if (productState?.sku && parseInt(productState?.sku) !== -1) setIsShowSku(true)
    else setIsShowSku(false)
    if (productState?.inventoried) setIsShowStock(true)
  }, [])

  return (
    <PropertiesContainer>
      <h1>{t('PROPERTIES', 'Properties')}</h1>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.featured}
          onClick={(e) => handleClickProperty('featured', e.target.checked)}
          id='featured'
        />
        <label htmlFor='featured'>{t('FEATURED', 'Featured')}</label>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.upselling}
          onClick={(e) => handleClickProperty('upselling', e.target.checked)}
          id='upselling'
        />
        <label htmlFor='upselling'>{t('UPSELLING', 'Upselling')}</label>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.inventoried}
          onClick={(e) => handleClickStock(e)}
          id='inventoried'
        />
        <label htmlFor='inventoried'>{t('INVENTORIED', 'Limit product quantity')}</label>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={(productState?.sku && parseInt(productState?.sku) !== -1)}
          onClick={(e) => handleClickSku(e)}
          id='sku'
        />
        <label htmlFor='sku'>{t('SKU', 'Stock Keeping Unit (SKU)')}</label>
      </PropertyOption>
      {isShowSku && (
        <Input
          name='sku'
          placeholder={t('SKU', 'Stock Keeping Unit (SKU)')}
          defaultValue={parseInt(productState?.sku) !== -1 ? productState?.sku : ''}
          onChange={(e) => handleClickProperty('sku', e.target.value)}
        />
      )}
      {isShowStock && (
        <Input
          name='sku'
          placeholder={t('STOCK', 'Stock')}
          defaultValue={parseInt(productState?.quantity)}
          onChange={(e) => hanldeClickStockInput(e.target.value)}
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
