import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import {
  AnalyticsCalendarContainer
} from './styles'
import DateRangePicker from 'react-daterange-picker'
import FiCalendar from '@meronex/icons/fi/FiCalendar'
import 'react-daterange-picker/dist/css/react-calendar.css'

export const AnalyticsCalendar = (props) => {
  const {
    filterList,
    handleChangeFilterList
  } = props
  const [, t] = useLanguage()
  const [dates, setDates] = useState(null)
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const calendarRef = useRef()

  const onSelect = dates => setDates(dates)

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (dates) {
      handleChangeFilterList({ ...filterList, lapse: `${dates?.start?.format('YYYY-MM-DD')},${dates?.end?.format('YYYY-MM-DD')}` })
    }
  }, [dates])

  return (
    <>
      <Button onClick={() => setIsShowCalendar(true)}>
        <FiCalendar />
        {
          dates ? `${dates?.start?.format('YYYY-MM-DD')}~${dates?.end?.format('YYYY-MM-DD')}` : t('SELECT_DATE_RANGE', 'Select Date Range')
        }
      </Button>
      {
        isShowCalendar && (
          <AnalyticsCalendarContainer ref={calendarRef}>
            <DateRangePicker
              onSelect={onSelect}
              value={dates}
            />
          </AnalyticsCalendarContainer>
        )
      }
    </>
  )
}
