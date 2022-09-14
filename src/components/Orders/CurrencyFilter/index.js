import React, { useEffect, useState } from 'react'
import { useLanguage, CountryList as CountryListControler } from 'ordering-components-admin'
import { MultiSelect } from '../../../styles/MultiSelect'
import { PlaceholderTitle, Option, SkeletonWrapper } from './styles'
import Skeleton from 'react-loading-skeleton'

const CurrencyFilterUI = (props) => {
  const {
    countriesState,
    filterValues,
    handleChangeCurrency
  } = props

  const [, t] = useLanguage()

  const placeholder = (
    <PlaceholderTitle>
      {t('SELECT_A_CURRENCY', 'Select a currency')}
    </PlaceholderTitle>
  )

  const [countryTypes, setCountryTypes] = useState([])

  useEffect(() => {
    const _countryList = []
    if (!countriesState.loading) {
      const _groupsOption = countriesState.countries.map((country) => {
        return {
          value: country.code,
          content: (
            <Option>{country.code}</Option>
          )
        }
      })

      for (const option of _groupsOption) {
        _countryList.push(option)
      }
    }
    setCountryTypes(_countryList)
  }, [countriesState])

  return (
    <>
      {!countriesState.loading ? (
        <MultiSelect
          placeholder={placeholder}
          defaultValue={filterValues.currency}
          options={countryTypes}
          onChange={(code) => handleChangeCurrency(code)}
          optionInnerMaxHeight='200px'
        />
      ) : (
        <SkeletonWrapper>
          <Skeleton style={{ height: '57px' }} />
        </SkeletonWrapper>
      )}
    </>
  )
}

export const CurrencyFilter = (props) => {
  const countryFilterProps = {
    ...props,
    UIComponent: CurrencyFilterUI
  }
  return <CountryListControler {...countryFilterProps} />
}
