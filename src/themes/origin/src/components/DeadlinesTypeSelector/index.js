import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import { Option, DeadlineOk, DeadlineRisk, DeadlineDelayed } from './styles'
import { useTheme } from 'styled-components'

export const DeadlinesTypeSelector = (props) => {
  const { defaultValue, handleChangeDeadlineType } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const deadlineTypes = [
    {
      value: 0,
      content: (
        <Option>
          <img src={theme?.images?.icons?.deadline} alt='deadline' />
          {t('DEADLINES', 'deadlines')}
        </Option>
      )
    },
    {
      value: 1,
      content: (
        <Option>
          <img src={theme?.images?.icons?.deadlineOK} alt='deadline OK' />
          <DeadlineOk>{t('OK', 'ok')}</DeadlineOk>
        </Option>
      )
    },
    {
      value: 2,
      content: (
        <Option>
          <img src={theme?.images?.icons?.deadlineRisk} alt='deadline risk' />
          <DeadlineRisk>{t('AT_RISK', 'at risk')}</DeadlineRisk>
        </Option>
      )
    },
    {
      value: 3,
      content: (
        <Option>
          <img src={theme?.images?.icons?.deadlineDelayed} alt='deadline delayed' />
          <DeadlineDelayed>{t('DELAYED', 'delayed')}</DeadlineDelayed>
        </Option>
      )
    },
    {
      value: 4,
      content: (
        <Option>
          <img src={theme?.images?.icons?.deadlineSetting} alt='deadline setting' />
          {t('SETTINGS', 'settings')}
        </Option>
      )
    }
  ]

  return (
    <Select
      defaultValue={defaultValue}
      options={deadlineTypes}
      onChange={(deadlineType) => handleChangeDeadlineType(deadlineType)}
    />
  )
}
