import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon
} from 'react-bootstrap-icons'
import { Button } from '../../../styles'

import {
  Container,
  RadioCheckWrapper,
  ButtonWrapper,
  Title,
  DateRangeWrapper,
  CalendarWrapper
} from './styles'
import { RangeCalendar } from '../../Shared'
import { CampaignCalendarTime } from '../CampaignCalendarTime'

export const CampaignSignUpOption = (props) => {
  const { title } = props

  const [, t] = useLanguage()

  const [selectedOption, setSelectedOption] = useState('')

  const optionList = [
    { key: 'after', title: t('AFTER', 'After') },
    { key: 'on', title: t('ON', 'On') },
    { key: 'before', title: t('BEFORE', 'Before') }
  ]

  const handleChangeDate = (date1, date2) => {
    console.log(date1, date2)
  }

  const handleChangeOption = (index) => {
    setSelectedOption(index)
  }

  return (
    <>
      <Container>
        <Title>{title}</Title>
        {optionList.map(option => (
          <React.Fragment key={option.key}>
            <RadioCheckWrapper onClick={() => handleChangeOption(option.key)}>
              {selectedOption === option.key ? <CheckIcon className='fill' /> : <UnCheckIcon />}
              <span>{option.title}</span>
            </RadioCheckWrapper>
            {selectedOption === option.key && (
              <CalendarWrapper>
                <CampaignCalendarTime />
              </CalendarWrapper>
            )}
          </React.Fragment>
        ))}
        <RadioCheckWrapper onClick={() => handleChangeOption('range')}>
          {selectedOption === 'range' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
          <span>{t('DATE_RANGE', 'Date range')}</span>
        </RadioCheckWrapper>
        {selectedOption === 'range' && (
          <DateRangeWrapper>
            <RangeCalendar
              handleChangeDate={handleChangeDate}
              isLeft
            />
          </DateRangeWrapper>
        )}
      </Container>
      <ButtonWrapper>
        <Button color='primary' borderRadius='8px'>{t('DONE', 'Done')}</Button>
      </ButtonWrapper>
    </>
  )
}
