import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../styles/Buttons'
import { timezones } from '../../config/constants'
import GoSearch from '@meronex/icons/go/GoSearch'
import { useLanguage } from 'ordering-components-admin'
import {
  AnalyticsTimeZoneContainer,
  TimeZoneSelectWrapper,
  TimeZoneSearchInput,
  TimeZoneSearchWrapper,
  SearchIconWrapper,
  TimeZoneListContainer,
  TimezoneListItem
} from './styles'

export const AnalyticsFilterTimeZone = (props) => {
  const {
    filterList,
    handleChangeFilterList
  } = props
  const [, t] = useLanguage()
  const [timeZoneList, setTimeZoneList] = useState(timezones)
  const [searchVal, setSearchVal] = useState('')
  const [isShowTimeZone, setIsShowTimeZone] = useState(false)
  const timeZoneRef = useRef(null)

  const filterTimeZone = (evt) => {
    const timeZoneToFilter = timezones
    const _timeZoneList = timeZoneToFilter?.filter(item => item?.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase()))
    setTimeZoneList(_timeZoneList)
    setSearchVal(evt.target.value)
  }

  const handleChangeTimeZone = (code) => {
    handleChangeFilterList({ ...filterList, timeZone: code })
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
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShowTimeZone])

  return (
    <AnalyticsTimeZoneContainer>
      <Button
        borderRadius='7.6px'
        onClick={() => setIsShowTimeZone(!isShowTimeZone)}
      >
        {filterList?.timeZone}
      </Button>
      {
        isShowTimeZone && (
          <TimeZoneSelectWrapper ref={timeZoneRef}>
            <TimeZoneSearchWrapper>
              <TimeZoneSearchInput
                type='text'
                placeholder={t('TIMEZONE', 'Timezone')}
                value={searchVal}
                onChange={filterTimeZone}
              />
              <SearchIconWrapper>
                <GoSearch />
              </SearchIconWrapper>
            </TimeZoneSearchWrapper>
            <TimeZoneListContainer>
              {
                timeZoneList && timeZoneList.map((timezone, i) => (
                  <TimezoneListItem
                    key={i}
                    onClick={() => handleChangeTimeZone(timezone)}
                  >
                    {timezone}
                  </TimezoneListItem>
                ))
              }
            </TimeZoneListContainer>
          </TimeZoneSelectWrapper>
        )
      }

    </AnalyticsTimeZoneContainer>
  )
}
