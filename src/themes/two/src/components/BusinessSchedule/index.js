import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSchedule as BusinessScheduleController } from './naked'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BiMinus from '@meronex/icons/bi/BiMinus'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import MdcContentCopy from '@meronex/icons/mdc/MdcContentCopy'
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

const BusinessScheduleUI = (props) => {
  const {
    business,
    handleChangeTime,
    handleAddScheduleTime,
    handleDeleteScheduleTime
  } = props
  const [, t] = useLanguage()
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
                <CheckBoxWrapper active={schedule?.enabled}>
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
                        <DeleteButton>
                          <BsTrash
                            onClick={() => handleDeleteScheduleTime(daysOfWeekIndex, index)}
                          />
                        </DeleteButton>
                      </TimeSection>
                    ))}
                  </>
                ) : (
                  <span>{t('UNAVAILABLE', 'Unavailable')}</span>
                )}
              </TimeSectionContainer>
              <ScheduleActionBlock>
                <BsPlusSquare
                  onClick={() => handleAddScheduleTime(daysOfWeekIndex)}
                />
                <MdcContentCopy />
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
