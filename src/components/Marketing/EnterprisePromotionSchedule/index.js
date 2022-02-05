import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { Schedule } from '../../Shared'

import {
  ScheduleContainer
} from './styles'

export const EnterprisePromotionSchedule = (props) => {
  const {
    promotionState,
    handleChangeItem,
    onClickDone
  } = props

  const [, t] = useLanguage()

  return (
    <ScheduleContainer>
      <h1>{t('SCHEDULE_LIMIT', 'Schedule limit')}</h1>
      <Schedule
        scheduleList={
          promotionState.promotion?.schedule
        }
        handleChangeScheduleState={val => handleChangeItem({ schedule: val })}
      />
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </ScheduleContainer>
  )
}
