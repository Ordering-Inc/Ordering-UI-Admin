import React, { useState, useEffect } from 'react'
import { useLanguage, CityList as CityListController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { MultiSelect } from '../../../styles/MultiSelect'
import Skeleton from 'react-loading-skeleton'
import {
  PlaceholderTitle,
  Option
} from './styles'

const CitySelectorUI = (props) => {
  const {
    citiesList,
    isDefault,
    filterValues,
    defaultValue,
    handleChangeCity
  } = props

  const [cityOptions, setCityOptions] = useState([])
  const [, t] = useLanguage()
  const placeholder = <PlaceholderTitle isDefault={isDefault}>{t('SELECT_CITY', 'Select City')}</PlaceholderTitle>

  useEffect(() => {
    if (citiesList?.loading) return
    const _cityOptions = citiesList?.cities.map(city => {
      return {
        value: city.id,
        content: <Option noPadding isDefault={isDefault}>{city?.name}</Option>,
        showOnSelected: <Option isDefault={isDefault}>{city?.name}</Option>
      }
    })
    setCityOptions(_cityOptions)
  }, [citiesList, isDefault])

  return (
    <>
      {citiesList?.loading ? (
        <div>
          <Skeleton style={{ height: '100%', lineHeight: 'normal' }} />
        </div>
      ) : (
        <>
          {isDefault ? (
            <Select
              placeholder={placeholder}
              defaultValue={defaultValue}
              options={cityOptions}
              onChange={(city) => handleChangeCity(city)}
            />
          ) : (
            <MultiSelect
              placeholder={placeholder}
              defaultValue={filterValues?.cityIds}
              options={cityOptions}
              onChange={(city) => handleChangeCity(city)}
            />
          )}
        </>
      )}
    </>
  )
}

export const CitySelector = (props) => {
  const cityListProps = {
    ...props,
    UIComponent: CitySelectorUI
  }
  return <CityListController {...cityListProps} />
}
