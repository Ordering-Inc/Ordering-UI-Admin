import React, { memo } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Schedule as ScheduleController } from '../../../Shared'
import {
  ScheduleContainer
} from './styles'

export const Schedule = memo((props) => {
  const {
    handleChangeSchedule
  } = props

  const [, t] = useLanguage()

  return (
    <ScheduleContainer>
      <h2>{t('SCHEDULE', 'Schedule')}</h2>
      <ScheduleController
        handleChangeScheduleState={val => handleChangeSchedule(val)}
      />
    </ScheduleContainer>
  )
})
