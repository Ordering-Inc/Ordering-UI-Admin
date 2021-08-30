import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'
import { Option } from './styles'

export const CountrySelector = (props) => {
  const {
    countries,
    defaultValue,
    handleChangeCountry
  } = props

  const [, t] = useLanguage()

  const options = countries.map(country => {
    return {
      value: country?.id,
      content: <Option>{country?.name}</Option>
    }
  })

  return (
    <Select
      defaultValue={defaultValue}
      placeholder={<Option>{t('SELECT_COUNTRY', 'Select a country')}</Option>}
      options={options}
      onChange={val => handleChangeCountry(val)}
    />
  )
}
