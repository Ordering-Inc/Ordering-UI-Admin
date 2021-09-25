import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import {
  Calendar4
} from 'react-bootstrap-icons'
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
      startDate: new Date(),
      endDate: new Date(),
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

  const dateFormat = (date1, date2) => {
    let formattedDate = `${moment(date1).format('YYYY-MM-DD')}~${moment(date2).format('YYYY-MM-DD')}`
    if (moment(date1).format('YYYY') === moment(date2).format('YYYY')) {
      if (moment(date1).format('MM') === moment(date2).format('MM')) formattedDate = `${moment(date1).format('DD')} - ${moment(date2).format('DD')} ${moment(date2).format('MMM')}, ${moment(date1).format('YYYY')}`
      else formattedDate = `${moment(date1).format('MM-DD')} ~ ${moment(date2).format('MM-DD')}, ${moment(date1).format('YYYY')}`
    }
    return formattedDate
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
  }, [defaultValue])

  return (
    <>
      <Button onClick={handleOpenCalendar}>
        <Calendar4 />
        {
          dateRange[0].startDate ? dateFormat(dateRange[0].startDate, dateRange[0].endDate) : t('SELECT_DATE_RANGE', 'Select Date Range')
        }
      </Button>
      {
        isShowCalendar && (
          <AnalyticsCalendarContainer ref={calendarRef}>
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
