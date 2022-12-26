import React, { useEffect, useState, useCallback } from 'react'
import { useLanguage, ProfessionalSchedule as ProfessionalScheduleController } from 'ordering-components-admin'
import { Circle as UnCheckIcon, RecordCircleFill as CheckIcon } from 'react-bootstrap-icons'
import { Schedule } from './Schedule'
import { Button, Input } from '../../../styles'

import {
  Container,
  DateRangeWrapper,
  RangeItem,
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

  const handleIndefinitelyClick = () => {
    handleChangeItem({ max_days_in_future: null })
    setIsMaxDays(false)
  }

  const handlClickFutureDay = (e) => {
    if (e.target.closest('.max_days_in_future')) return
    setIsMaxDays(true)
  }

  const onSubmit = () => {
    handleUpdateClick && handleUpdateClick()
  }

  const changeSchedule = useCallback((val) => handleChangeItem({ schedule: val }), [])

  useEffect(() => {
    if (typeof user?.max_days_in_future === 'number') setIsMaxDays(true)
  }, [user])

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
        <Schedule
          key={user?.id}
          scheduleList={user?.schedule}
          handleChangeScheduleState={changeSchedule}
        />
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
