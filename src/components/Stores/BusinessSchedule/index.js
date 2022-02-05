import React from 'react'
import {
  useLanguage,
  BusinessSchedule as BusinessScheduleController
} from 'ordering-components-admin'
import { Schedule } from '../../Shared'
import { Button } from '../../../styles'

import {
  ScheduleContainer,
  Title,
  ScheduleSection,
  BottomActionContainer,
  SkipButton
} from './styles'

const BusinessScheduleUI = (props) => {
  const {
    business,
    formState,
    handleChangeScheduleState,
    handleUpdateSchedule,
    isTutorialMode,
    handleTutorialSkip
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
        <BottomActionContainer>
          <div>
            {isTutorialMode && (
              <SkipButton
                onClick={() => handleTutorialSkip()}
              >
                {t('TUTORIAL_SKIP', 'Skip')}
              </SkipButton>
            )}
            <Button
              color='primary'
              borderRadius='8px'
              disabled={Object.keys(formState?.changes).length === 0 || formState?.loading}
              onClick={() => handleUpdateSchedule()}
            >
              {
                formState?.loading
                  ? t('LOADING', 'Loading')
                  : isTutorialMode ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('SAVE', 'Save')
              }
            </Button>
          </div>
        </BottomActionContainer>
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
