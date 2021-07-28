import React, { useState } from 'react'
import { AnalyticsCalendar as AnalyticsCalendarController } from './naked'
import {
  AnalyticsCalendarContainer
} from './styles'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

const AnalyticsCalendarUI = (props) => {
  const [dates, setDates] = useState(null)

  const onSelect = dates => setDates(dates)

  return (
    <AnalyticsCalendarContainer>
      <DateRangePicker
        onSelect={onSelect}
        value={dates}
      />
    </AnalyticsCalendarContainer>
  )
}

export const AnalyticsCalendar = (props) => {
  const analyticsCalendarProps = {
    ...props,
    UIComponent: AnalyticsCalendarUI
  }

  return (
    <AnalyticsCalendarController {...analyticsCalendarProps} />
  )
}
