import React from 'react'
import { useLanguage } from 'ordering-components'
import InputMask from 'react-input-mask'
import { useTheme } from 'styled-components'
import { Select } from '../../styles/Select'
import { Option, PlaceholderTitle, DateContainer } from './styles'

export const DateTypeSelector = (props) => {
  const { handleChangeDateType } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const dateTypes = [
    { value: 1, content: <Option>{t('TODAY', 'Today')}</Option> },
    { value: 2, content: <Option>{t('YESTERDAY', 'Yesterday')}</Option> },
    { value: 3, content: <Option>{t('LAST_7_DAYS', 'Last 7 dyas')}</Option> },
    { value: 4, content: <Option>{t('LAST_30_DAYS', 'Last 30 days')}</Option> },
    {
      value: 5,
      content: (
        <Option>
          <DateContainer>
            {t('FROM', 'From')}
            <InputMask mask='99/99/9999' placeholder='MM/DD/YYYY' name='date' />
          </DateContainer>
          <DateContainer>
            {t('TO', 'To')}
            <InputMask mask='99/99/9999' placeholder='MM/DD/YYYY' name='date' />
          </DateContainer>
        </Option>
      )
    }
  ]

  const placeholder = (
    <PlaceholderTitle>
      <img src={theme?.images?.icons?.calendar} alt='calendar' />
      {t('TODAY', 'Today')}
    </PlaceholderTitle>
  )

  return (
    <Select
      placeholder={placeholder}
      options={dateTypes}
      onChange={(dateType) => handleChangeDateType(dateType)}
    />
  )
}
