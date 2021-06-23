import React from 'react'
import { useLanguage } from 'ordering-components-admin'
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
  TimeSection,
  TimeSelect,
  TimeSelectContainer,
  DeleteButton,
  ScheduleActionBlock
} from './styles'

export const BusinessSchedule = (props) => {
  const {
    business
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
          {business?.schedule.map((schedule, i) => (
            <ScheduleBlock key={i}>
              <CheckboxContainer>
                <CheckBoxWrapper active={schedule?.enabled}>
                  {schedule?.enabled ? <RiCheckboxFill /> : <RiCheckboxBlankLine />}
                </CheckBoxWrapper>
                <h4>{daysOfWeek[i]}</h4>
              </CheckboxContainer>
              <TimeSection>
                {schedule?.enabled ? (
                  <>
                    <TimeSelectContainer>
                      <TimeSelect
                        value={schedule.lapses[0].open.hour}
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
                        value={schedule.lapses[0].open.minute}
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
                    </TimeSelectContainer>
                    <BiMinus />
                    <TimeSelectContainer>
                      <TimeSelect
                        value={schedule.lapses[0].close.hour}
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
                        value={schedule.lapses[0].close.minute}
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
                    </TimeSelectContainer>
                    <DeleteButton>
                      <BsTrash />
                    </DeleteButton>
                  </>
                ) : (
                  <span>{t('UNAVAILABLE', 'Unavailable')}</span>
                )}
              </TimeSection>
              <ScheduleActionBlock>
                <BsPlusSquare />
                <MdcContentCopy />
              </ScheduleActionBlock>
            </ScheduleBlock>
          ))}
        </ScheduleSection>
      </ScheduleContainer>
    </>
  )
}
