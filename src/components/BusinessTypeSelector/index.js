import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import businessListData from '../../../template/assets/json/businessList.json'

import {
  PlaceholderTitle,
  Option,
  OptionContent,
  OptionName,
  OptionCategory
} from './styles'

export const BusinessTypeSelector = (props) => {
  const { handleChangeBusinessType } = props

  const [, t] = useLanguage()
  const [businessList, setBusinessList] = useState([])
  const [businessTypes, setBusinessTypes] = useState([])

  const placeholder = (
    <PlaceholderTitle>{t('BUSINESS', 'Business')}</PlaceholderTitle>
  )

  useEffect(() => {
    setBusinessList(businessListData)
  }, [])

  useEffect(() => {
    const businessTypesTemp = businessList.map((business) => {
      return {
        value: business.business_name,
        content: (
          <Option>
            <img src={require(`../../../template/assets/images/business/${business.logo}`)} alt={business.business_name} />
            <OptionContent>
              <OptionName>
                {business.business_name}
              </OptionName>
              <OptionCategory>
                {business.business_categroy}
              </OptionCategory>
            </OptionContent>
          </Option>
        )
      }
    })

    setBusinessTypes(businessTypesTemp)
  }, [businessList])

  return (
    <Select
      placeholder={placeholder}
      options={businessTypes}
      optionInnerMargin='10px'
      optionInnerMaxHeight='150px'
      optionBottomBorder
      onChange={(businessType) => handleChangeBusinessType(businessType)}
    />
  )
}
