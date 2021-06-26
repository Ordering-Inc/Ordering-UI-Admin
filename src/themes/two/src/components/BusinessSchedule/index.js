import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSchedule as BusinessScheduleController } from './naked'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BiMinus from '@meronex/icons/bi/BiMinus'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { Alert } from '../Confirm'

import {
  ScheduleContainer,
  Title,
  ScheduleSection,
  ScheduleBlock,
  CheckBoxWrapper,
  CheckboxContainer,
  TimeSectionContainer,
  TimeSection,
  TimeSelect,
  TimeSelectContainer,
  DeleteButton,
  ScheduleActionBlock
} from './styles'
import { BusinessScheduleCopyTimes } from '../BusinessScheduleCopyTimes'

const BusinessScheduleUI = (props) => {
  const {
    formState,
    business,
    handleChangeTime,
    handleAddScheduleTime,
    handleDeleteScheduleTime,
    handleScheduleTimeActiveState,
    selectedCopyDays,
    handleSelectCopyTimes,
    cleanSelectedCopyDays,
    isConflict,
    setIsConflict
  } = props
  const [, t] = useLanguage()
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]

  const closeAlert = () => {
    setIsConflict(false)
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!isConflict) return
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    })
  }, [isConflict])

  return (
    <>
      <ScheduleContainer>
        <Title>{t('SCHEDULE', 'Schedule')}</Title>
        <ScheduleSection>
          {business?.schedule.map((schedule, daysOfWeekIndex) => (
            <ScheduleBlock key={daysOfWeekIndex}>
              <CheckboxContainer>
                <CheckBoxWrapper
                  active={schedule?.enabled}
                  onClick={() => handleScheduleTimeActiveState(daysOfWeekIndex)}
                >
                  {schedule?.enabled ? <RiCheckboxFill /> : <RiCheckboxBlankLine />}
                </CheckBoxWrapper>
                <h4>{daysOfWeek[daysOfWeekIndex]}</h4>
              </CheckboxContainer>
              <TimeSectionContainer>
                {schedule?.enabled ? (
                  <>
                    {schedule.lapses.map((laps, index) => (
                      <TimeSection key={index}>
                        <TimeSelectContainer>
                          <TimeSelect
                            value={
                              formState?.result?.result
                                ? formState?.result?.result?.schedule[daysOfWeekIndex].lapses[index].open.hour
                                : formState?.changes?.schedule
                                  ? formState?.changes?.schedule[daysOfWeekIndex]?.lapses[index]?.open.hour
                                  : laps.open.hour
                            }
                            onChange={(e) => handleChangeTime(daysOfWeekIndex, true, true, index, e.target.value)}
                          >
                            {[...Array(24)].map((v, i) => (
                              <option
                                key={i}
                                value={i}
                              >
                                {i < 10 ? `0${i}` : i}
                              </option>
                            ))}
                          </TimeSelect>
                          :
                          <TimeSelect
                            value={
                              formState?.result?.result
                                ? formState?.result?.result?.schedule[daysOfWeekIndex].lapses[index].open.minute
                                : formState?.changes?.schedule
                                  ? formState?.changes?.schedule[daysOfWeekIndex]?.lapses[index]?.open.minute
                                  : laps.open.minute
                            }
                            onChange={(e) => handleChangeTime(daysOfWeekIndex, true, false, index, e.target.value)}
                          >
                            {[...Array(60)].map((v, i) => (
                              <option
                                key={i}
                                value={i}
                              >
                                {i < 10 ? `0${i}` : i}
                              </option>
                            ))}
                          </TimeSelect>
                        </TimeSelectContainer>
                        <BiMinus />
                        <TimeSelectContainer>
                          <TimeSelect
                            value={
                              formState?.result?.result
                                ? formState?.result?.result?.schedule[daysOfWeekIndex].lapses[index].close.hour
                                : formState?.changes?.schedule
                                  ? formState?.changes?.schedule[daysOfWeekIndex]?.lapses[index]?.close.hour
                                  : laps.close.hour
                            }
                            onChange={(e) => handleChangeTime(daysOfWeekIndex, false, true, index, e.target.value)}
                          >
                            {[...Array(24)].map((v, i) => (
                              <option
                                key={i}
                                value={i}
                              >
                                {i < 10 ? `0${i}` : i}
                              </option>
                            ))}
                          </TimeSelect>
                          :
                          <TimeSelect
                            value={
                              formState?.result?.result
                                ? formState?.result?.result?.schedule[daysOfWeekIndex].lapses[index].close.minute
                                : formState?.changes?.schedule
                                  ? formState?.changes?.schedule[daysOfWeekIndex]?.lapses[index]?.close.minute
                                  : laps.close.minute
                            }
                            onChange={(e) => handleChangeTime(daysOfWeekIndex, false, false, index, e.target.value)}
                          >
                            {[...Array(60)].map((v, i) => (
                              <option
                                key={i}
                                value={i}
                              >
                                {i < 10 ? `0${i}` : i}
                              </option>
                            ))}
                          </TimeSelect>
                        </TimeSelectContainer>
                        <DeleteButton
                          disabled={schedule.lapses.length === 1}
                          onClick={() => handleDeleteScheduleTime(daysOfWeekIndex, index)}
                        >
                          <BsTrash />
                        </DeleteButton>
                      </TimeSection>
                    ))}
                  </>
                ) : (
                  <p>{t('UNAVAILABLE', 'Unavailable')}</p>
                )}
              </TimeSectionContainer>
              <ScheduleActionBlock>
                <BsPlusSquare
                  onClick={() => handleAddScheduleTime(daysOfWeekIndex)}
                />
                <BusinessScheduleCopyTimes
                  cleanSelectedCopyDays={cleanSelectedCopyDays}
                  open={isOpenCopytimes === daysOfWeekIndex}
                  daysOfWeekIndex={daysOfWeekIndex}
                  onClick={setIsOpenCopytimes}
                  onClose={() => setIsOpenCopytimes(null)}
                  selectedCopyDays={selectedCopyDays}
                  handleSelectDays={(value) => handleSelectCopyTimes(value, daysOfWeekIndex)}
                />
              </ScheduleActionBlock>
            </ScheduleBlock>
          ))}
        </ScheduleSection>
      </ScheduleContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
