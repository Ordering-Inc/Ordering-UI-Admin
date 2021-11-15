import React, { useEffect, useState } from 'react'
import { Input, Button, DefaultSelect, Checkbox } from '../../styles'
import { Alert } from '../Confirm'
import { BusinessScheduleCopyTimes } from '../BusinessScheduleCopyTimes'

import {
  Circle,
  RecordCircleFill,
  Trash,
  PlusSquare,
  PlusCircleFill
} from 'react-bootstrap-icons'

import { useLanguage } from 'ordering-components-admin'

import {
  ScheduleContainer,
  ScheduleInnerContainer,
  SectionContainer,
  SubTitle,
  SubDescription,
  DateRangeItemWrapper,
  RadioButtonWrapper,
  TimeScheduleItemContainer,
  Option,
  SplitLine,
  ScheduleTypeContainer,
  IconWrapper,
  AddScheduleIconWrapper
} from './styles'

export const DriversCompanyScheduleDetails = (props) => {
  const {
    driversCompany,
    driverCompanySchedule,
    handleAddSchedule,
    isConflict,
    setIsConflict,
    isTimeChangeError,
    setIsTimeChangeError,
    handleChangeScheduleTime,
    changesState,
    actionState,
    addScheduleTime,
    handleChangeAddScheduleTime,
    handleOpenAddSchedule,
    openAddSchedule,
    handleDeleteSchedule,

    cleanSelectedCopyDays,
    selectedCopyDays,
    handleSelectCopyTimes,
    handleApplyScheduleCopyTimes,
    handleEnabledSchedule,
    handleUpdateDriversCompany
  } = props

  const [, t] = useLanguage()
  const [scheduleOptions, setScheduleOptions] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tue'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thu'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]

  const scheduleTypes = [
    { value: 1, content: t('CUSTOMIZE_SCHEDULE', 'Customize schedule') }
  ]

  const closeAlert = () => {
    setIsConflict(false)
    setIsTimeChangeError(false)
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!isTimeChangeError) return
    setAlertState({
      open: true,
      content: [t('END_TIME_LATER', 'Choose an end time later than the start time.')]
    })
  }, [isTimeChangeError])

  useEffect(() => {
    if (!isConflict) return
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    })
  }, [isConflict])

  useEffect(() => {
    const _scheduleOptions = []
    for (let hour = 0; hour < 24; hour++) {
      for (let min = 0; min < 4; min++) {
        _scheduleOptions.push({
          value: hour + ':' + min * 15,
          content: (
            <Option>
              {hour < 10 ? `0${hour}` : hour} : {min === 0 ? '00' : min * 15}
            </Option>
          )
        })
      }
    }
    setScheduleOptions(_scheduleOptions)
  }, [])

  return (
    <>
      <ScheduleContainer>
        <ScheduleInnerContainer>
          <SectionContainer>
            <SubTitle>{t('DATE_RANGE', 'Date Range')}</SubTitle>
            <SubDescription>
              {t('CUSTOMERS_CAN_SCHEDULE', 'Customers can schedule...')}
            </SubDescription>
            <DateRangeItemWrapper>
              <RadioButtonWrapper
                active
              >
                <RecordCircleFill />
                {/* <Circle /> */}
              </RadioButtonWrapper>
              <Input
                placeholder='00'
              />
              <SubDescription>{t('DAYS_INTO_FUTURE', 'days into the future')}</SubDescription>
            </DateRangeItemWrapper>
            <DateRangeItemWrapper>
              <RadioButtonWrapper
                active
              >
                <RecordCircleFill />
                {/* <Circle /> */}
              </RadioButtonWrapper>
              <SubDescription>{t('WITHIN_A_DATE_RANGE', 'Within a date range')}</SubDescription>
            </DateRangeItemWrapper>
            <DateRangeItemWrapper>
              <RadioButtonWrapper
                active
              >
                <RecordCircleFill />
                {/* <Circle /> */}
              </RadioButtonWrapper>
              <SubDescription>{t('INDEFINITELY_INTO_FUTURE', 'Indefinitely into the future')}</SubDescription>
            </DateRangeItemWrapper>
          </SectionContainer>

          <SectionContainer>
            <SubTitle>{t('SCHEDULE', 'Schedule')}</SubTitle>

            <ScheduleTypeContainer>
              <DefaultSelect
                options={scheduleTypes}
                defaultValue={1}
                onChange={val => console.log(val)}
              />
            </ScheduleTypeContainer>

            {driverCompanySchedule.map((schedule, daysOfWeekIndex) => (
              <TimeScheduleItemContainer
                key={daysOfWeekIndex}
              >
                <div>
                  <Checkbox
                    defaultChecked={schedule?.enabled}
                    onChange={e => handleEnabledSchedule(daysOfWeekIndex, e.target.checked)}
                  />
                  <h4>{daysOfWeek[daysOfWeekIndex]}</h4>
                </div>
                {schedule?.enabled ? (
                  <div>
                    {schedule?.lapses.map((lapse, index) => (
                      <div
                        key={index}
                      >
                        <DefaultSelect
                          noSelected
                          options={scheduleOptions}
                          defaultValue={
                            `${lapse?.open?.hour}:${parseInt(lapse?.open?.minute / 15) * 15}`
                          }
                          onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, true)}
                          optionInnerMaxHeight='300px'
                        />
                        <SplitLine />
                        <DefaultSelect
                          noSelected
                          options={scheduleOptions}
                          defaultValue={
                            `${lapse?.close?.hour}:${parseInt(lapse?.close?.minute / 15) * 15}`
                          }
                          onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, false)}
                          optionInnerMaxHeight='300px'
                        />
                        <IconWrapper
                          isHide={schedule?.lapses.length <= 1}
                        >
                          <Trash
                            onClick={() => handleDeleteSchedule(daysOfWeekIndex, index)}
                          />
                        </IconWrapper>
                      </div>
                    ))}
                    {openAddSchedule[daysOfWeekIndex] && (
                      <div>
                        <DefaultSelect
                          noSelected
                          options={scheduleOptions}
                          defaultValue={
                            `${addScheduleTime?.open?.hour}:${parseInt(addScheduleTime?.open?.minute / 15) * 15}`
                          }
                          optionInnerMaxHeight='300px'
                          onChange={val => handleChangeAddScheduleTime(val, true)}
                        />
                        <SplitLine />
                        <DefaultSelect
                          noSelected
                          options={scheduleOptions}
                          defaultValue={
                            `${addScheduleTime?.close?.hour}:${parseInt(addScheduleTime?.close?.minute / 15) * 15}`
                          }
                          optionInnerMaxHeight='300px'
                          onChange={val => handleChangeAddScheduleTime(val, false)}
                        />
                        <AddScheduleIconWrapper>
                          <PlusCircleFill
                            onClick={() => handleAddSchedule(daysOfWeekIndex)}
                          />
                        </AddScheduleIconWrapper>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <p>{t('UNAVAILABLE', 'Unavailable')}</p>
                  </div>
                )}
                <div>
                  <IconWrapper
                    isHide={!schedule?.enabled}
                  >
                    <PlusSquare
                      onClick={() => handleOpenAddSchedule(daysOfWeekIndex)}
                    />
                  </IconWrapper>
                  <BusinessScheduleCopyTimes
                    disabled={!schedule?.enabled}
                    cleanSelectedCopyDays={cleanSelectedCopyDays}
                    open={isOpenCopytimes === daysOfWeekIndex}
                    daysOfWeekIndex={daysOfWeekIndex}
                    onClick={setIsOpenCopytimes}
                    onClose={() => setIsOpenCopytimes(null)}
                    selectedCopyDays={selectedCopyDays}
                    handleSelectDays={(value) => handleSelectCopyTimes(value)}
                    handleApplyScheduleCopyTimes={handleApplyScheduleCopyTimes}
                  />
                </div>
              </TimeScheduleItemContainer>
            ))}
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

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
