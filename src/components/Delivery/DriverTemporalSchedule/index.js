import React, { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import moment from 'moment'
import * as locales from 'react-date-range/dist/locale'
import { useLanguage } from 'ordering-components-admin'

import { getLocale } from '../../../utils'
import { Button } from '../../../styles'

import {
  DateContainer,
  Container
} from './styles'

export const DriverTemporalSchedule = (props) => {
  const {
    driverSchedule,
    handleSelectDriverTemporary,
    onClose
  } = props

  const [state, t] = useLanguage()
  const datePickerRef = useRef(null)

  const [selectedDate, setSelectedDate] = useState(driverSchedule?.temporary_at ? new Date(driverSchedule?.temporary_at) : new Date())

  const handleSelect = (date) => {
    setSelectedDate(date)
    handleSelectDriverTemporary(driverSchedule?.id, true, moment(date).format('YYYY-MM-DD HH:mm:ss'))
  }

  const handleOnClick = () => {
    onClose()
  }

  useEffect(() => {
    datePickerRef.current.setOpen(true)
  }, [])

  return (
    <Container>
      <DateContainer>
        <DatePicker
          ref={datePickerRef}
          locale={getLocale(state?.language?.code, locales)}
          selected={selectedDate}
          minDate={new Date()}
          onChange={handleSelect}
          onCalendarClose={onClose}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          timeCaption='Time'
          dateFormat='MMMM d, yyyy HH:mm'
        />
      </DateContainer>
      <Button
        borderRadius='8px'
        color='primary'
        type='submit'
        onClick={() => (handleOnClick())}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
