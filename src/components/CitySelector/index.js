import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import {
  PlaceholderTitle,
  Option
} from './styles'

export const CitySelector = (props) => {
  const {
    handleChangeCity
  } = props

  const [, t] = useLanguage()

  const cityTypes = [
    { value: 1, content: <Option>{t('AUSTIN', 'Austin')}</Option> },
    { value: 2, content: <Option>{t('NEW_YORK', 'New York')}</Option> },
    { value: 3, content: <Option>{t('SAN_FRANCISCO', 'San Francisco')}</Option> }
  ]

  const placeholder = <PlaceholderTitle>{t('CITY', 'City')}</PlaceholderTitle>

  return (
    <Select
      placeholder={placeholder}
      options={cityTypes}
      selectedHeight='65px'
      onChange={(city) => handleChangeCity(city)}
    />
  )
}
