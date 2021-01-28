import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'
import {
  DeadlineSettingContainer,
  TopContainer,
  BorderContainer,
  BottomContainer,
  DeadlineInputContainer,
  Input
} from './styles'

export const DeadlineSettingInterface = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const [deadlineOkDate, setDeadlineOKDate] = useState(0)
  const [deadlineDelayedDate, setDeadlineDelayedDate] = useState(10)

  const handleChangeDeadlineDate = (e) => {
    if (e.target.name === 'deadlineOkDate') setDeadlineOKDate(e.target.value)
    if (e.target.name === 'deadlineDelayedDate') setDeadlineDelayedDate(e.target.value)
  }

  return (
    <DeadlineSettingContainer>
      <TopContainer>
        <BorderContainer>{t('AT_RISK', 'At Risk')}</BorderContainer>
      </TopContainer>
      <BottomContainer>
        <DeadlineInputContainer color={theme?.colors?.deadlineOk}>
          <Input
            borderColor={theme?.colors?.deadlineOk}
            value={deadlineOkDate}
            name='deadlineOkDate'
            onChange={handleChangeDeadlineDate}
          />
          {t('OK', 'OK')}
        </DeadlineInputContainer>

        <DeadlineInputContainer color={theme?.colors?.deadlineDelayed}>
          <Input
            borderColor={theme?.colors?.deadlineDelayed}
            value={deadlineDelayedDate}
            name='deadlineDelayedDate'
            onChange={handleChangeDeadlineDate}
          />
          {t('DELAYED', 'Delayed')}
        </DeadlineInputContainer>
      </BottomContainer>
    </DeadlineSettingContainer>
  )
}
