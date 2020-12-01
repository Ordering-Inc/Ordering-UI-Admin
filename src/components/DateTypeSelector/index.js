import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import dayjs from 'dayjs'
import { Select } from '../../styles/Select'
import { Option, DateContainer } from './styles'

export const DateTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate
  } = props

  const [, t] = useLanguage()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const dateTypes = [
    { value: 'default', content: <Option>{t('SELECT_DATE', 'Select date')}</Option> },
    { value: 'today', content: <Option>{t('TODAY', 'Today')}</Option> },
    { value: 'yesterday', content: <Option>{t('YESTERDAY', 'Yesterday')}</Option> },
    { value: 'last7', content: <Option>{t('LAST_7_DAYS', 'Last 7 dyas')}</Option> },
    { value: 'last30', content: <Option>{t('LAST_30_DAYS', 'Last 30 days')}</Option> },
    {
      value: 'term',
      content: (
        <Option>
          <DateContainer>
            {t('FROM', 'From')}
            <input type='date' name='startDate' value={startDate} onChange={(e) => handleChangeDate(e)} />
          </DateContainer>
          <DateContainer>
            {t('TO', 'To')}
            <input type='date' id='endDate' min='' name='endDate' value={endDate} onChange={(e) => handleChangeDate(e)} />
          </DateContainer>
        </Option>
      )
    }
  ]

  const handleChangeDate = (e) => {
    if (e.target.name === 'startDate') {
      setStartDate(e.target.value)
    }
    if (e.target.name === 'endDate') {
      setEndDate(e.target.value)
    }
  }

  const changeDateType = (dateType) => {
    handleChangeDateType(dateType)
  }

  useEffect(() => {
    if (startDate === '' || startDate === null) return
    document.getElementById('endDate').min = startDate
    handleChangeFromDate(startDate)
  }, [startDate])

  useEffect(() => {
    if (endDate === '' || endDate === null) return
    handleChangeEndDate(endDate)
  }, [endDate])

  useEffect(() => {
    if (filterValues.dateType !== 'term') return

    if (filterValues.deliveryFromDatetime !== null) {
      setStartDate(dayjs(filterValues.deliveryFromDatetime).format('YYYY-MM-DD'))
    } else {
      setStartDate('')
    }

    if (filterValues.deliveryEndDatetime !== null) {
      setEndDate(dayjs(filterValues.deliveryEndDatetime).format('YYYY-MM-DD'))
    } else {
      setEndDate('')
    }
  }, [filterValues])

  return (
    <Select
      defaultValue={filterValues.dateType || 'default'}
      options={dateTypes}
      onChange={(dateType) => changeDateType(dateType)}
    />
  )
}
