import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Button, DefaultSelect } from '../../styles'
import { SelectBusinessProducts } from '../SelectBusinessProducts'

import {
  Container,
  BusinessSelectorContainer,
  Label,
  NoSelectedBusiness,
  Option,
  BusinessSelectWrapper
} from './styles'

export const EnterprisePromotionSpecficProducts = (props) => {
  const {
    formState,
    promotionState,
    handleChangeItem,
    onClickDone,
    selectedProductsIds,
    setSelectedProductsIds,
    businessesList
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [businessOptions, setBusinessOptions] = useState([])
  const [selectedBusinessSlug, setSelectedBusinessSlug] = useState(null)

  useEffect(() => {
    let businessIds = []
    if (Object.keys(promotionState?.promotion).length) {
      businessIds = promotionState?.promotion.businesses.reduce((ids, business) => [...ids, business.id], [])
    } else {
      businessIds = formState?.changes?.businesses ? [...formState?.changes?.businesses] : []
    }
    const _businessOptions = businessesList.businesses.filter(business => businessIds.includes(business.id)).map(business => {
      return {
        value: business.slug,
        content: (
          <Option>
            <img src={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} alt='' />
            <span><b>{business?.name}</b>{business?.city?.name}</span>
          </Option>
        )
      }
    })
    setBusinessOptions(_businessOptions)
    if (_businessOptions.length) {
      setSelectedBusinessSlug(_businessOptions[0]?.value)
    }
  }, [])

  useEffect(() => {
    const filteredProducts = []
    Object.values(selectedProductsIds).forEach(product => {
      filteredProducts.push({ id: product.id, include: product.include, is_condition: true })
    })
    handleChangeItem({ products: filteredProducts })
  }, [selectedProductsIds])

  useEffect(() => {
    if (!promotionState?.promotion?.products) return
    const _selectedProductsIds = promotionState?.promotion?.products.reduce((ids, product) => {
      ids[product.id] = { id: product.id, include: product.pivot.include }
      return ids
    }, {})
    setSelectedProductsIds(_selectedProductsIds)
  }, [])

  return (
    <Container>
      <h1>{t('PRODUCT_SPECIFIC', 'Product specific')}</h1>
      <Label>{t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}</Label>
      <BusinessSelectorContainer>
        <BusinessSelectWrapper>
          <DefaultSelect
            defaultValue={selectedBusinessSlug}
            placeholder={t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}
            options={businessOptions}
            onChange={val => setSelectedBusinessSlug(val)}
          />
        </BusinessSelectWrapper>
      </BusinessSelectorContainer>
      {selectedBusinessSlug ? (
        <>
          <Label>{t('SELECT_PRODUCT_INCLUDE', 'Select product to include')}</Label>
          <SelectBusinessProducts
            slug={selectedBusinessSlug}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            include
          />
          <Label>{t('SELECT_PRODUCT_EXCLUDE', 'Select product to exclude')}</Label>
          <SelectBusinessProducts
            slug={selectedBusinessSlug}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            include={false}
          />
        </>
      ) : (
        <NoSelectedBusiness>
          {t('SELECT_BUSINESS_BEFORE_PRODUCT', 'Please select a business before selecting your products.')}
        </NoSelectedBusiness>
      )}

      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </Container>
  )
}
