import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ProfessionalSchedule as ProfessionalScheduleController } from './naked'
import { Circle as UnCheckIcon, RecordCircleFill as CheckIcon } from 'react-bootstrap-icons'
import { Select } from '../../../styles/Select/FirstSelect'
import { Schedule } from '../../Shared'
import { Button, Input } from '../../../styles'

import {
  Container,
  DateRangeWrapper,
  RangeItem,
  ScheduleWrapper,
  SelectWrapper,
  Option,
  ScheduleContentWrapper,
  ButtonWrapper
} from './styles'

const ProfessionalScheduleUI = (props) => {
  const {
    formState,
    user,
    handleChangeInput,
    handleChangeItem,
    handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const [isMaxDays, setIsMaxDays] = useState(false)
  const [scheduleType, setScheduleType] = useState('')

  const defaultSchedule = [
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
    { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] }
  ]

  const typeList = [
    { value: 'default', content: <Option>{t('USE_DEFAULT_SCHEDULE', 'Use default schedule')}</Option> },
    { value: 'customize', content: <Option>{t('CUSTOMIZE_SCHEDULE', 'Customize schedule')}</Option> }
  ]

  const handleIndefinitelyClick = () => {
    handleChangeItem({ max_days_in_future: null })
    setIsMaxDays(false)
  }

  const handleChangeScheduleType = (val) => {
    setScheduleType(val)
    if (val === 'default') handleChangeItem({ schedule: defaultSchedule })
  }

  const handlClickFutureDay = (e) => {
    if (e.target.closest('.max_days_in_future')) return
    setIsMaxDays(true)
  }

  const onSubmit = () => {
    handleUpdateClick && handleUpdateClick()
  }

  useEffect(() => {
    if (typeof user?.max_days_in_future === 'number') setIsMaxDays(true)
    if (user?.schedule) setScheduleType('customize')
  }, [user])

  console.log(formState, 'This is formState')

  return (
    <>
      <Container>
        <DateRangeWrapper>
          <h1>{t('DATE_RANGE', 'Date range')}</h1>
          <p>{t('CUSTOMERS_CAN_SCHEDULE', 'Customers can schedule...')}</p>
          <RangeItem onClick={handlClickFutureDay}>
            <span>
              {isMaxDays ? <CheckIcon className='active' /> : <UnCheckIcon />}
            </span>
            <Input
              placeholder='00'
              className='max_days_in_future'
              name='max_days_in_future'
              value={(formState?.changes?.max_days_in_future ?? user?.max_days_in_future) || ''}
              onChange={handleChangeInput}
              disabled={!isMaxDays}
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
            <label>{t('DAYS_INTO_THE_FUTURE', 'days into the future')}</label>
          </RangeItem>
          <RangeItem onClick={handleIndefinitelyClick}>
            <span>
              {!isMaxDays ? <CheckIcon className='active' /> : <UnCheckIcon />}
            </span>
            <label>{t('INDEFINITELY_INTO_THE_FUTURE', 'Indefinitely into the future')}</label>
          </RangeItem>
        </DateRangeWrapper>
        <ScheduleWrapper>
          <h1>{t('SCHEDULE', 'Schedule')}</h1>
          <SelectWrapper>
            <Select
              options={typeList}
              className='select'
              defaultValue={scheduleType}
              placeholder={t('SELECT_OPTION', 'Select an option')}
              onChange={(value) => handleChangeScheduleType(value)}
            />
          </SelectWrapper>
          {scheduleType === 'customize' && (
            <ScheduleContentWrapper>
              <Schedule
                scheduleList={user?.schedule}
                handleChangeScheduleState={val => handleChangeItem({ schedule: val })}
              />
            </ScheduleContentWrapper>
          )}
        </ScheduleWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          borderRadius='8px'
          disabled={formState?.loading || Object.keys(formState?.changes).length === 0}
          onClick={onSubmit}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
    </>
  )
}

export const ProfessionalSchedule = (props) => {
  const professionalScheduleProps = {
    ...props,
    UIComponent: ProfessionalScheduleUI
  }
  return <ProfessionalScheduleController {...professionalScheduleProps} />
}
