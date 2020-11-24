import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  BusinessList as BusinessListController
} from 'ordering-components'
import { Select } from '../../styles/Select'
import {
  Option,
  OptionContent,
  OptionName,
  OptionCategory,
  WrapperBusinessImage,
  BusinessImage
} from './styles'

const BusinessTypeSelectorUI = (props) => {
  const {
    businessesList,
    paginationProps,
    getBusinesses,
    handleSelectedBusinessType
  } = props

  const [, t] = useLanguage()
  const [businessTypes, setBusinessTypes] = useState([])

  const businessesLoading = [{ value: 0, content: <Option>{t('BUSINESSES_LOADING', 'Businesses loading')}...</Option> }]
  useEffect(() => {
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (!hasMore || businessesList.loading) return
    getBusinesses()
  }, [paginationProps.currentPage])

  useEffect(() => {
    const _businessesOptionList = [{ value: 0, content: <Option>{t('BUSINESS', 'Business')}</Option> }]
    if (!businessesList.loading) {
      const _businessTypesTemp = businessesList.businesses.map((business) => {
        return {
          value: business.id,
          content: (
            <Option>
              <WrapperBusinessImage>
                {business.logo && <BusinessImage bgimage={business.logo} />}
              </WrapperBusinessImage>
              <OptionContent>
                <OptionName>
                  {business.name}
                </OptionName>
                <OptionCategory>
                  {business.alcohol && t('ALCOHOL', 'Alcohol')}
                  {business.food && t('FOOD', 'Food')}
                  {business.groceries && t('GROCERIES', 'Groceries')}
                  {business.laundry && t('LAUNDRY', 'Laundry')}
                </OptionCategory>
              </OptionContent>
            </Option>
          )
        }
      })

      for (const option of _businessTypesTemp) {
        _businessesOptionList.push(option)
      }
    }

    setBusinessTypes(_businessesOptionList)
  }, [businessesList])

  return (
    <>
      {!businessesList.loading ? (
        <Select
          defaultValue={0}
          options={businessTypes}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(businessType) => handleSelectedBusinessType(businessType)}
        />
      ) : (
        <Select
          defaultValue={0}
          options={businessesLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
        />
      )}
    </>
  )
}

export const BusinessTypeSelector = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessTypeSelectorUI,
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }
  return <BusinessListController {...businessListingProps} />
}
