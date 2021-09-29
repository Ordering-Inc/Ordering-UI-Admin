import React, { useState, useEffect, useRef } from 'react'
import { countryList } from '../../config/constants'
import GoSearch from '@meronex/icons/go/GoSearch'
import { useLanguage } from 'ordering-components-admin'
import {
  TimeZoneSelectWrapper,
  TimeZoneSearchInput,
  TimeZoneSearchWrapper,
  SearchIconWrapper,
  TimeZoneListContainer,
  TimezoneListItem
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
  const [isShowTimeZone, setIsShowTimeZone] = useState(false)
  const timeZoneRef = useRef(null)

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
    if (!isShowTimeZone) return
    const outsideTimeZone = !timeZoneRef.current?.contains(e.target)
    if (outsideTimeZone) {
      setIsShowTimeZone(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowTimeZone])

  return (
    <TimeZoneSelectWrapper>
      {label && (
        <p>{label}</p>
      )}
      <TimeZoneSearchWrapper ref={timeZoneRef}>
        <TimeZoneSearchInput
          type='text'
          placeholder={t('TIMEZONE', 'Timezone')}
          value={searchVal}
          onChange={filterTimeZone}
          onClick={() => setIsShowTimeZone(true)}
        />
        <SearchIconWrapper>
          <GoSearch />
        </SearchIconWrapper>
      </TimeZoneSearchWrapper>
      {
        isShowTimeZone && (
          <TimeZoneListContainer>
            {
              timeZoneList && timeZoneList?.map((timezone, i) => (
                <TimezoneListItem
                  key={i}
                  onClick={() => handleChangeTimeZone(timezone.code.toLocaleLowerCase())}
                  active={timezone.code.toLocaleLowerCase() === searchVal}
                >
                  {timezone.name} ({timezone.code})
                </TimezoneListItem>
              ))
            }
          </TimeZoneListContainer>
        )
      }
    </TimeZoneSelectWrapper>
  )
}
