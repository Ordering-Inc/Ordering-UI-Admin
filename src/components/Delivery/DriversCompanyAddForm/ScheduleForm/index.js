import React from 'react'
import { Schedule } from '../../../Shared'
import { useLanguage } from 'ordering-components-admin'

import {
  ScheduleContainer,
  ScheduleInnerContainer
} from './styles'

export const ScheduleForm = (props) => {
  const {
    handleChangeScheduleState
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <ScheduleContainer>
        <h2>{t('SCHEDULE', 'Schedule')}</h2>
        <ScheduleInnerContainer>
          <Schedule
            handleChangeScheduleState={handleChangeScheduleState}
          />
        </ScheduleInnerContainer>
      </ScheduleContainer>
    </>
  )
}
