import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import moment from 'moment'
import { DateRange, Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Calendar4 } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import { AnalyticsCalendarContainer } from './styles'
import * as locales from 'react-date-range/dist/locale'
import { getLocale } from '../../../utils'

export const AnalyticsCalendar = (props) => {
  const {
    handleChangeDate,
    defaultValue,
    leftAlign,
    isSingleDate
  } = props

  const [state, t] = useLanguage()

  const [date, setDate] = useState(null)
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

  const handleChangeSingleDate = (selectedDate) => {
    handleChangeDate(moment(selectedDate).format('YYYY-MM-DD'), moment(selectedDate).format('YYYY-MM-DD'))
    setDate(selectedDate)
  }

  const dateFormat = (date1, date2) => {
    let formattedDate = `${moment(date1).format('YYYY-MM-DD')}~${moment(date2).format('YYYY-MM-DD')}`
    if (moment(date1).format('YYYY') === moment(date2).format('YYYY')) {
      if (moment(date1).format('MM') === moment(date2).format('MM')) formattedDate = `${moment(date1).format('DD')} - ${moment(date2).format('DD')} ${moment(date2).format('MMM')}, ${moment(date1).format('YYYY')}`
      else formattedDate = `${moment(date1).format('MM-DD')} ~ ${moment(date2).format('MM-DD')}, ${moment(date1).format('YYYY')}`
    }
    return formattedDate
  }

  const singleDateFormat = (selectedDate) => {

  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (isSingleDate && defaultValue) {
      setDate(new Date(defaultValue?.from))
      console.log('this is date')
      return
    }

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
        <Calendar4 />
        {
          isSingleDate
            ? (date ? moment(date).format('YYYY-MM-DD') : t('SELECT_DATE', 'Select a Date'))
            : (dateRange[0].startDate ? dateFormat(dateRange[0].startDate, dateRange[0].endDate) : t('SELECT_DATE_RANGE', 'Select Date Range'))
        }
      </Button>
      {
        isShowCalendar && (
          <AnalyticsCalendarContainer className='ordering-calendar' ref={calendarRef} leftAlign={leftAlign}>
            {isSingleDate ? (
              <Calendar
                locale={getLocale(state?.language?.code, locales)}
                date={date}
                onChange={(date) => handleChangeSingleDate(date)}
                startDatePlaceholder={t('EARLY', 'Early')}
                endDatePlaceholder={t('CONTINUOUS', 'Continuous')}
              />
            ) : (
              <DateRange
                editableDateInputs
                locale={getLocale(state?.language?.code, locales)}
                onChange={item => handleChangeDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                startDatePlaceholder={t('EARLY', 'Early')}
                endDatePlaceholder={t('CONTINUOUS', 'Continuous')}
              />
            )}
          </AnalyticsCalendarContainer>
        )
      }
    </>
  )
}
