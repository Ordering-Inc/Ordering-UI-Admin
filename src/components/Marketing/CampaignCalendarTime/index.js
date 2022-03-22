import React, { useState, useEffect } from 'react'
import { Calendar4 } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import {
  DateTimeWrapper
} from './styles'

export const CampaignCalendarTime = (props) => {
  const { showTime, dateTime, handleChangeDateTime } = props

  const [startDate, setStartDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOutside = (e) => {
    if (e.target.closest('.calendar-box') || !isOpen) return
    setIsOpen(false)
  }

  const handleChangeDate = (date) => {
    setStartDate(date)
    handleChangeDateTime && handleChangeDateTime(moment(date).format('YYYY-MM-DD HH:mm:ss'))
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    if (dateTime) setStartDate(new Date(dateTime))
  }, [dateTime])

  return (
    <>
      <DateTimeWrapper className='calendar-box'>
        <Button
          onClick={() => setIsOpen(true)}
        >
          <Calendar4 />
          {showTime ? moment(startDate).format('DD MMM, YYYY h:m A') : moment(startDate).format('DD MMM, YYYY')}
        </Button>
        <DatePicker
          selected={startDate}
          showTimeSelect={showTime}
          onChange={(date) => handleChangeDate(date)}
          open={isOpen}
        />
      </DateTimeWrapper>
    </>
  )
}
