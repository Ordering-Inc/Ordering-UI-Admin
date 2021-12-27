import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Button, DefaultSelect } from '../../styles'
import { SelectBusinessCategories } from '../SelectBusinessCategories'

import {
  Container,
  BusinessSelectorContainer,
  Label,
  NoSelectedBusiness,
  BusinessSelectWrapper,
  Option
} from './styles'

export const EnterprisePromotionSpecficCategory = (props) => {
  const {
    promotionState,
    handleChangeItem,
    onClickDone,
    selectedCategoryIds,
    setSelectedCategoryIds,
    businessesList
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [businessOptions, setBusinessOptions] = useState([])
  const [selectedBusinessSlug, setSelectedBusinessSlug] = useState(null)

  useEffect(() => {
    const businessIds = promotionState?.promotion.businesses.reduce((ids, business) => [...ids, business.id], [])
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
  }, [])

  useEffect(() => {
    const filteredCategories = []
    selectedCategoryIds.forEach(id => {
      filteredCategories.push({ id: id, is_condition: true })
    })
    handleChangeItem({ categories: filteredCategories })
  }, [selectedCategoryIds])

  useEffect(() => {
    const _selectedCategoryIds = promotionState?.promotion.categories.reduce((ids, category) => [...ids, category.id], [])
    setSelectedCategoryIds(_selectedCategoryIds)
  }, [])

  return (
    <Container>
      <h1>{t('CATEGORY_SPECIFIC', 'Category specific')}</h1>
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
      <Label>{t('SELECT_PRODUCT', 'Select product')}</Label>
      {selectedBusinessSlug ? (
        <SelectBusinessCategories
          slug={selectedBusinessSlug}
          selectedCategoryIds={selectedCategoryIds}
          setSelectedCategoryIds={setSelectedCategoryIds}
        />
      ) : (
        <NoSelectedBusiness>
          {t('SELECT_BUSINESS_BEFORE_CATEGORY', 'Please select a business before selecting your cateogries.')}
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
