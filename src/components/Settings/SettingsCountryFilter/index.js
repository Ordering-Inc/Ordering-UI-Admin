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
    label
  } = props
  const [, t] = useLanguage()
  const [timeZoneList, setTimeZoneList] = useState(countryList)
  const [searchVal, setSearchVal] = useState(defaultValue)
  const [isShowCountryList, setIsShowCountryList] = useState(false)
  const countryRef = useRef(null)

  const filterTimeZone = (evt) => {
    const timeZoneToFilter = [...countryList]
    const _timeZoneList = timeZoneToFilter?.filter(item => item?.code?.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase()))
    setTimeZoneList(_timeZoneList)
    setSearchVal(evt.target.value)
  }

  const handleChangeTimeZone = (code) => {
    handleSelectChange(code)
    setSearchVal(code)
  }

  const handleClickOutside = (e) => {
    if (!isShowCountryList) return
    const outsideTimeZone = !countryRef.current?.contains(e.target)
    if (outsideTimeZone) {
      setIsShowCountryList(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCountryList])

  return (
    <CountrySelectWrapper>
      {label && (
        <p>{label}</p>
      )}
      <CountrySearchWrapper ref={countryRef}>
        <CountrySearchInput
          type='text'
          placeholder={t('SELECT_A_OPTION', 'Select a option')}
          value={searchVal}
          onChange={filterTimeZone}
          onClick={() => setIsShowCountryList(true)}
        />
        <SearchIconWrapper>
          <GoSearch />
        </SearchIconWrapper>
      </CountrySearchWrapper>
      {
        isShowCountryList && (
          <CountryListContainer>
            {
              timeZoneList && timeZoneList?.map((timezone, i) => (
                <CountryListItem
                  key={i}
                  onClick={() => handleChangeTimeZone(timezone.code.toLocaleLowerCase())}
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
