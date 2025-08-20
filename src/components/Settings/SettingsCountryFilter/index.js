import React, { useState, useEffect, useRef } from 'react'
import { countryList } from '../../../config/constants'
import GoSearch from '@meronex/icons/go/GoSearch'
import { useLanguage } from 'ordering-components-admin'
import {
  CountrySelectWrapper,
  CountrySearchInput,
  CountrySearchWrapper,
  SearchIconWrapper,
  CountryListContainer,
  CountryListItem
} from './styles'

export const SettingsCountryFilter = (props) => {
  const {
    defaultValue,
    handleSelectChange,
    label,
    description,
    formState
  } = props
  const [, t] = useLanguage()
  const [timeZoneList, setTimeZoneList] = useState(countryList)
  const [searchVal, setSearchVal] = useState('')
  const [isShowCountryList, setIsShowCountryList] = useState(false)
  const [countriesSelected, setCountriesSelected] = useState([])
  const countryRef = useRef(null)
  const countryListRef = useRef(null)

  const filterTimeZone = (evt) => {
    const timeZoneToFilter = [...countryList]
    const _timeZoneList = timeZoneToFilter?.filter(item => item?.code?.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase()))
    setTimeZoneList(_timeZoneList)
    setSearchVal(evt.target.value)
  }

  const handleToggleCountry = (code) => {
    if (code === '*') {
      setCountriesSelected('*')
      handleSelectChange(code)
      return
    }
    const countries = countriesSelected?.filter?.(item => item !== '*') || []
    const isSelected = countries.includes(code)
    if (!isSelected) {
      setCountriesSelected([...countries, code])
      handleSelectChange([...countries, code])
    } else {
      const newCountriesSelected = countries.filter(item => item !== code)
      setCountriesSelected(newCountriesSelected?.length > 0 ? newCountriesSelected : '*')
      handleSelectChange(newCountriesSelected?.length > 0 ? newCountriesSelected : '*')
    }
  }

  const handleClickOutside = (e) => {
    if (!isShowCountryList) return
    const outsideTimeZone = !countryRef.current?.contains(e.target)
    const outsideCountryList = !countryListRef.current?.contains(e.target)
    if (outsideTimeZone && outsideCountryList) {
      setIsShowCountryList(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCountryList])

  useEffect(() => {
    if (defaultValue && !formState?.loading) {
      setCountriesSelected(defaultValue || '*')
      setSearchVal('')
    }
  }, [formState?.loading])

  return (
    <CountrySelectWrapper>
      {label && (
        <label>{label}</label>
      )}
      {description && (
        <p>{description}</p>
      )}
      <CountrySearchWrapper ref={countryRef}>
        <CountrySearchInput
          type='text'
          placeholder={t('SELECT_A_OPTION', 'Select a option')}
          value={countriesSelected || '*'}
          onClick={() => setIsShowCountryList(true)}
          readOnly
        />
        <SearchIconWrapper>
          <GoSearch />
        </SearchIconWrapper>
      </CountrySearchWrapper>
      {
        isShowCountryList && (
          <CountryListContainer ref={countryListRef}>
            <CountrySearchInput
              type='text'
              placeholder={t('FILTER_BY_COUNTRY_CODE', 'Filter by country code')}
              value={searchVal}
              onChange={filterTimeZone}
              onClick={() => setIsShowCountryList(true)}
            />
            {
              timeZoneList && timeZoneList?.map((timezone, i) => (
                <CountryListItem
                  key={i}
                  onClick={() => handleToggleCountry(timezone.code.toLocaleLowerCase())}
                  active={timezone.code.toLocaleLowerCase() === searchVal}
                >
                  {timezone.name} ({timezone.code})
                </CountryListItem>
              ))
            }
          </CountryListContainer>
        )
      }
    </CountrySelectWrapper>
  )
}
