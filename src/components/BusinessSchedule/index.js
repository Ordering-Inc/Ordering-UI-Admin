import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSchedule as BusinessScheduleController } from './naked'
import { Schedule } from '../Schedule'
import { Button } from '../../styles'

import {
  ScheduleContainer,
  Title,
  ScheduleSection
} from './styles'

const BusinessScheduleUI = (props) => {
  const {
    business,
    formState,
    handleChangeScheduleState,
    handleUpdateSchedule
  } = props
  const [, t] = useLanguage()

  return (
    <>
      <ScheduleContainer>
        <Title>{t('SCHEDULE', 'Schedule')}</Title>
        <ScheduleSection>
          <Schedule
            scheduleList={business?.schedule}
            handleChangeScheduleState={handleChangeScheduleState}
          />
        </ScheduleSection>
        <Button
          color='primary'
          borderRadius='8px'
          disabled={Object.keys(formState?.changes).length === 0}
          onClick={() => handleUpdateSchedule()}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ScheduleContainer>
    </>
  )
}

export const BusinessSchedule = (props) => {
  const businessScheduleProps = {
    ...props,
    UIComponent: BusinessScheduleUI
  }
  return <BusinessScheduleController {...businessScheduleProps} />
}
