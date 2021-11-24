import React from 'react'
import { Button } from '../../styles'
import { Schedule } from '../Schedule'
import { useLanguage } from 'ordering-components-admin'

import {
  ScheduleContainer,
  ScheduleInnerContainer,
  SectionContainer,
  SubTitle
} from './styles'

export const DriversCompanyScheduleDetails = (props) => {
  const {
    driversCompany,
    changesState,
    actionState,
    handleUpdateDriversCompany,
    handleChangeScheduleState
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <ScheduleContainer>
        <ScheduleInnerContainer>
          <SectionContainer>
            <SubTitle>{t('SCHEDULE', 'Schedule')}</SubTitle>

            <Schedule
              scheduleList={driversCompany?.schedule}
              handleChangeScheduleState={handleChangeScheduleState}
            />

          </SectionContainer>
        </ScheduleInnerContainer>
        <Button
          borderRadius='8px'
          color='primary'
          type='submit'
          disabled={Object.keys(changesState).length === 0 || actionState.loading}
          onClick={() => handleUpdateDriversCompany()}
        >
          {driversCompany ? t('SAVE', 'Save') : t('ADD', 'Add')}
        </Button>
      </ScheduleContainer>
    </>
  )
}
