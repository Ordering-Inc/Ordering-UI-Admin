import React, { useState } from 'react'
import { useLanguage, BusinessSchedule as BusinessScheduleController } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BiMinus from '@meronex/icons/bi/BiMinus'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
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
    business,
    handleChangeTime,
    handleAddScheduleTime,
    handleDeleteScheduleTime,
    handleScheduleTimeActiveState,
    selectedCopyDays,
    handleSelectCopyTimes,
    cleanSelectedCopyDays
  } = props
  const [, t] = useLanguage()
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)
  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]

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
                            defaultValue={laps.open.hour}
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
                            defaultValue={laps.open.minute}
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
                            defaultValue={laps.close.hour}
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
                            defaultValue={laps.close.minute}
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
