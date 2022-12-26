import React, { memo } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Schedule as ScheduleController } from '../../../Shared'
import {
  ScheduleWrapper,
  ScheduleContentWrapper
} from '../styles'

function SchedulePropsAreEqual (prevProps, nextProps) {
  return JSON.stringify(prevProps.scheduleList) === JSON.stringify(nextProps.scheduleList)
}

export const Schedule = memo((props) => {
  const {
    handleChangeScheduleState,
    scheduleList
  } = props

  const [, t] = useLanguage()

  return (
    <ScheduleWrapper>
      <h1>{t('SCHEDULE', 'Schedule')}</h1>
      <ScheduleContentWrapper>
        <ScheduleController
          scheduleList={scheduleList}
          handleChangeScheduleState={val => handleChangeScheduleState(val)}
        />
      </ScheduleContentWrapper>
    </ScheduleWrapper>
  )
}, SchedulePropsAreEqual)
