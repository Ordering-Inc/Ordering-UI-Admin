import React, { useState } from 'react'
import {
  useLanguage,
  BusinessSharedMenuProductDetails as BusinessSharedMenuProductDetailsController
} from 'ordering-components-admin'
import { Checkbox, Input, Switch } from '../../../styles'
import { SearchBar } from '../../Shared'

import {
  DetailsContainer,
  InputWrapper,
  SwitchWrapper,
  QuantityWrapper,
  SearchbarWrapper,
  ProductExtraWrapper,
  ProductOptionWrapper,
  ProductSuboptionWrapper
} from './styles'

const BusinessSharedMenuProductDetailsUI = (props) => {
  const {
    productState,
    formState,
    handleChangeInput,
    handleChangeItem,
    handleUpdateExtra,
    handleUpdateOption,
    handleUpdateSuboption
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState('')

  const showExtra = (extra) => {
    let valid = false
    if (extra.name?.toLowerCase().includes(searchValue)) valid = true
    else {
      extra.options.forEach(option => {
        if (option.name?.toLowerCase().includes(searchValue)) {
          valid = true
        }
        option.suboptions.forEach(suboption => {
          if (suboption.name?.toLowerCase().includes(searchValue)) {
            valid = true
          }
        })
      })
    }
    return valid
  }

  const showOption = (option) => {
    let valid = false
    if (option.name?.toLowerCase().includes(searchValue)) valid = true
    else {
      option.suboptions.forEach(suboption => {
        if (suboption.name?.toLowerCase().includes(searchValue)) {
          valid = true
        }
      })
    }
    return valid
  }

  const showSuboption = (suboption) => {
    let valid = false
    if (suboption.name?.toLowerCase().includes(searchValue)) valid = true
    return valid
  }

  return (
    <DetailsContainer>
      <h1>{productState.product.name}</h1>
      <InputWrapper>
        <label>{t('PRICE', 'Price')}</label>
        <Input
          placeholder='$0.00'
          name='price'
          value={formState?.changes?.price ?? productState.product?.price ?? ''}
          onChange={e => handleChangeInput(e)}
          onKeyPress={(e) => {
            if (!/^[0-9.]$/.test(e.key)) {
              e.preventDefault()
            }
          }}
        />
      </InputWrapper>
      <SwitchWrapper>
        <label>{t('INVENTORIED', 'Limit product quantity')}</label>
        <Switch
          defaultChecked={productState.product.inventoried}
          onChange={enabled => handleChangeItem({ inventoried: enabled })}
        />
      </SwitchWrapper>
      <QuantityWrapper>
        <Input
          placeholder='0'
          name='quantity'
          value={formState?.changes?.quantity ?? productState.product?.quantity ?? ''}
          onChange={e => handleChangeInput(e)}
          onKeyPress={(e) => {
            if (!/^[0-9]$/.test(e.key)) {
              e.preventDefault()
            }
          }}
        />
      </QuantityWrapper>
      <SwitchWrapper>
        <label>{t('FEATURED', 'Featured')}</label>
        <Switch
          defaultChecked={productState.product.featured}
          onChange={enabled => handleChangeItem({ featured: enabled })}
        />
      </SwitchWrapper>
      <SwitchWrapper>
        <label>{t('UPSELLING', 'Upselling')}</label>
        <Switch
          defaultChecked={productState.product.upselling}
          onChange={enabled => handleChangeItem({ upselling: enabled })}
        />
      </SwitchWrapper>
      {productState.product?.extras?.length > 0 && (
        <>
          <SearchbarWrapper>
            <label>{t('PRODUCT_OPTIONS', 'Product options')}</label>
            <SearchBar
              placeholder={t('SEARCH', 'Search')}
              isCustomLayout
              search={searchValue}
              onSearch={val => setSearchValue(val?.toLowerCase())}
            />
          </SearchbarWrapper>
          {productState.product.extras.map(extra => (
            showExtra(extra) && (
              <div key={extra.id}>
                <ProductExtraWrapper>
                  <Checkbox
                    defaultChecked={extra.enabled}
                    onChange={e => handleUpdateExtra(extra.id, e.target.checked)}
                  />
                  <span>{extra.name}</span>
                </ProductExtraWrapper>
                {extra.options.map(option => (
                  showOption(option) && (
                    <div key={option.id}>
                      <ProductOptionWrapper>
                        <Checkbox
                          defaultChecked={option.enabled}
                          onChange={e => handleUpdateOption(option.id, e.target.checked)}
                        />
                        <span>{option.name}</span>
                      </ProductOptionWrapper>
                      {option?.suboptions.map(suboption => (
                        showSuboption(suboption) && (
                          <div key={suboption.id}>
                            <ProductSuboptionWrapper>
                              <Checkbox
                                defaultChecked={suboption.enabled}
                                onChange={e => handleUpdateSuboption(suboption.id, e.target.checked)}
                              />
                              <span>{suboption.name}</span>
                            </ProductSuboptionWrapper>
                          </div>
                        )
                      ))}
                    </div>
                  )
                ))}
              </div>
            )
          ))}
        </>
      )}
    </DetailsContainer>
  )
}

export const BusinessSharedMenuProductDetails = (props) => {
  const detailsProps = {
    ...props,
    UIComponent: BusinessSharedMenuProductDetailsUI
  }
  return <BusinessSharedMenuProductDetailsController {...detailsProps} />
}
