import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import moment from 'moment'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Calendar4 } from 'react-bootstrap-icons'
import { AnalyticsCalendarContainer, Container, PlaceholderTitle } from './styles'

export const DateTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeDateRange
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
      const from = moment(item.selection.startDate).format('YYYY-MM-DD HH:mm:ss')
      const to = moment(item.selection.endDate).format('YYYY-MM-DD HH:mm:ss')
      handleChangeDateRange && handleChangeDateRange('term', from, to)
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
    setDateRange([{
      startDate: filterValues?.deliveryFromDatetime ? new Date(moment(filterValues?.deliveryFromDatetime).format('YYYY-MM-DD')) : null,
      endDate: filterValues?.deliveryEndDatetime ? new Date(moment(filterValues?.deliveryEndDatetime).format('YYYY-MM-DD')) : null,
      key: 'selection'
    }])
  }, [])

  return (
    <Container className='ordering-calendar-btn'>
      <PlaceholderTitle onClick={handleOpenCalendar}>
        <Calendar4 />
        {
          dateRange[0].startDate
            ? dateFormat(dateRange[0].startDate, dateRange[0].endDate)
            : t('SELECT_DATE_RANGE', 'Select Date Range')
        }
      </PlaceholderTitle>
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
    </Container>
  )
}
