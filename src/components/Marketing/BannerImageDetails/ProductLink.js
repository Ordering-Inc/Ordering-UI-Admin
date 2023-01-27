import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { DefaultSelect as Select } from '../../../styles'
import { SelectBusinessProducts } from './SelectBusinessProducts'
import {
  ProductLinkContainer,
  FormController,
  SelectWrapper,
  Option
} from './styles'

export const ProductLink = (props) => {
  const {
    businessList,
    selectedBusinessId,
    setSelectedBusinessId,
    selectedProductId,
    setSelectedProductId,
    selectedCategoryId,
    setSelectedCategoryId
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [businessOptions, setBusinessOptions] = useState([])
  const [selectedBusinessSlug, setSelectedBusinessSlug] = useState(null)

  useEffect(() => {
    if (businessList.loading) return
    const _businessOptions = businessList.businesses.map(business => {
      return {
        value: business.id,
        content: (
          <Option>
            <img src={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} alt='' />
            <span><b>{business?.name}</b>{business?.city?.name}</span>
          </Option>
        )
      }
    })
    setBusinessOptions(_businessOptions)
  }, [businessList])

  useEffect(() => {
    if (!selectedBusinessId) {
      setSelectedBusinessSlug(null)
      return
    }
    const selectedBusiness = businessList.businesses.find(business => business.id === selectedBusinessId)
    setSelectedBusinessSlug(selectedBusiness?.slug)
  }, [selectedBusinessId, businessList])

  return (
    <ProductLinkContainer>
      <FormController>
        <label>{t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}</label>
        <SelectWrapper>
          <Select
            defaultValue={selectedBusinessId}
            placeholder={t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}
            options={businessOptions}
            onChange={val => setSelectedBusinessId(val)}
            optionInnerMaxHeight='300px'
          />
        </SelectWrapper>
      </FormController>

      {selectedBusinessSlug && (
        <>
          <SelectBusinessProducts
            slug={selectedBusinessSlug}
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        </>
      )}
    </ProductLinkContainer>
  )
}
