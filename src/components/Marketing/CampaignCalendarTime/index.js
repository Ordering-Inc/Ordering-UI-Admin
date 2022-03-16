import React, { useState, useEffect } from 'react'
import { Calendar4 } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import {
  DateTimeWrapper
} from './styles'

export const CampaignCalendarTime = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOutside = (e) => {
    if (e.target.closest('.calendar-box') || !isOpen) return
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <>
      <DateTimeWrapper className='calendar-box'>
        <Button
          onClick={() => setIsOpen(true)}
        >
          <Calendar4 />
          {moment(startDate).format('DD MMM, YYYY h:m A')}
        </Button>
        <DatePicker
          selected={startDate}
          showTimeSelect
          onChange={(date) => setStartDate(date)}
          open={isOpen}
        />
      </DateTimeWrapper>
    </>
  )
}
