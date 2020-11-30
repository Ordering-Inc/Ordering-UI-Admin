import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Select } from '../../styles/Select'
import { Option, PlaceholderTitle, DateContainer } from './styles'

export const DateTypeSelector = (props) => {
  // const { handleChangeDateType } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const dateTypes = [
    { value: 'today', content: <Option>{t('TODAY', 'Today')}</Option> },
    { value: 'yesterday', content: <Option>{t('YESTERDAY', 'Yesterday')}</Option> },
    { value: 'last_7', content: <Option>{t('LAST_7_DAYS', 'Last 7 dyas')}</Option> },
    { value: 'last_30', content: <Option>{t('LAST_30_DAYS', 'Last 30 days')}</Option> },
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
            <input type='date' name='endDate' min='2020-01-01' value={endDate} onChange={(e) => handleChangeDate(e)} />
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

  const placeholder = (
    <PlaceholderTitle>
      <img src={theme?.images?.icons?.calendar} alt='calendar' />
      {t('TODAY', 'Today')}
    </PlaceholderTitle>
  )

  const changeDateType = (dateType) => {

  }

  return (
    <Select
      placeholder={placeholder}
      options={dateTypes}
      notAsync
      onChange={(dateType) => changeDateType(dateType)}
    />
  )
}
