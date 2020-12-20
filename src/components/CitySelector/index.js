import React from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../styles/MultiSelect'
import {
  PlaceholderTitle,
  Option
} from './styles'

export const CitySelector = (props) => {
  const {
    filterValues,
    handleChangeCity
  } = props

  const [, t] = useLanguage()

  const cityTypes = [
    { value: 1, content: <Option>{t('AUSTIN', 'Austin')}</Option> },
    { value: 2, content: <Option>{t('NEW_YORK', 'New York')}</Option> },
    { value: 3, content: <Option>{t('SAN_FRANCISCO', 'San Francisco')}</Option> }
  ]

  const placeholder = <PlaceholderTitle>{t('SELECT_CITY', 'Select City')}</PlaceholderTitle>

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.cityIds}
      options={cityTypes}
      onChange={(city) => handleChangeCity(city)}
    />
  )
}
