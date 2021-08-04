import React, { useState, useEffect, useRef } from 'react'
import { AnalyticsTimeZone as AnalyticsTimeZoneController } from './naked'
import { Button } from '../../styles/Buttons'
import timezones from 'timezones-list'
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

const AnalyticsTimeZoneUI = (props) => {
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
    const filterList = timezones
    const _timeZoneList = filterList?.filter(item => item.tzCode?.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase()))
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
                    onClick={() => handleChangeTimeZone(timezone.tzCode)}
                  >
                    {timezone?.tzCode}
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

export const AnalyticsTimeZone = (props) => {
  const analyticsTimeZoneProps = {
    ...props,
    UIComponent: AnalyticsTimeZoneUI
  }
  return <AnalyticsTimeZoneController {...analyticsTimeZoneProps} />
}
