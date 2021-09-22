import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import FiCalendar from '@meronex/icons/fi/FiCalendar'
import moment from 'moment'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  AnalyticsCalendarContainer
} from './styles'

export const AnalyticsCalendar = (props) => {
  const {
    handleChangeDate,
    defaultValue
  } = props

  const [, t] = useLanguage()
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const calendarRef = useRef()

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  const handleOpenCalendar = (evt) => {
    evt.preventDefault()
    setIsShowCalendar(true)
  }

  const handleChangeDates = (item) => {
    if (item.selection?.startDate && item.selection?.endDate) {
      handleChangeDate(moment(item.selection.startDate).format('YYYY-MM-DD'), moment(item.selection.endDate).format('YYYY-MM-DD'))
    }
    setDateRange([item.selection])
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (defaultValue && defaultValue?.from !== '' && defaultValue?.to !== '') {
      setDateRange([
        {
          startDate: new Date(defaultValue?.from),
          endDate: new Date(defaultValue?.to),
          key: 'selection'
        }
      ])
    }
  }, [])

  return (
    <>
      <Button onClick={handleOpenCalendar}>
        <FiCalendar />
        {
          dateRange[0].startDate ? `${moment(dateRange[0].startDate).format('YYYY-MM-DD')}~${moment(dateRange[0].endDate).format('YYYY-MM-DD')}` : t('SELECT_DATE_RANGE', 'Select Date Range')
        }
      </Button>
      {
        isShowCalendar && (
          <AnalyticsCalendarContainer ref={calendarRef} notSelected={!dateRange[0]?.startDate}>
            <DateRange
              editableDateInputs
              onChange={item => handleChangeDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
            />
          </AnalyticsCalendarContainer>
        )
      }
    </>
  )
}
