import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  useConfig,
  useUtils,
  Schedule as ScheduleController
} from 'ordering-components-admin'
import {
  PlusSquare,
  PlusCircleFill,
  DashCircleFill,
  Trash
} from 'react-bootstrap-icons'
import { Alert, Confirm } from '../Confirm'
import { ScheduleCopyTimes } from '../ScheduleCopyTimes'
import { SecondSelect as DefaultSelect, Checkbox } from '../../../styles'

import {
  ScheduleContainer,
  TimeScheduleItemContainer,
  Option,
  SplitLine,
  IconWrapper,
  SelectWrapper,
  AddScheduleIconWrapper,
  TrashIconWrapper,
  DateWrapper
} from './styles'

const ScheduleUI = (props) => {
  const {
    scheduleState,
    isConflict,
    setIsConflict,
    isTimeChangeError,
    addScheduleTime,
    openAddSchedule,
    setIsTimeChangeError,
    handleEnabledSchedule,
    handleChangeScheduleTime,
    handleDeleteSchedule,
    handleOpenAddSchedule,
    handleChangeAddScheduleTime,
    handleAddSchedule,
    selectedCopyDays,
    cleanSelectedCopyDays,
    handleSelectCopyTimes,
    handleApplyScheduleCopyTimes,
    isShowDate,
    disableSchedule,
    useDaysAbbrevation
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()

  const is12Hours = configs?.general_hour_format?.value?.includes('hh:mm')

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const minuteOptions = useRef([])
  const hourOptions = useRef([])
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)

  const daysOfWeek = [
    t(`SUNDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Sunday'),
    t(`MONDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Monday'),
    t(`TUESDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Tuesday'),
    t(`WEDNESDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Wednesday'),
    t(`THURSDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Thursday'),
    t(`FRIDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Friday'),
    t(`SATURDAY${useDaysAbbrevation ? '_ABBREVIATION' : ''}`, 'Saturday')
  ]

  const closeAlert = () => {
    setIsConflict(false)
    setIsTimeChangeError(false)
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDelete = (daysOfWeekIndex, index) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('SCHEDULE', 'Schedule')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSchedule(daysOfWeekIndex, index)
      }
    })
  }

  const getNextDate = (x) => {
    const now = new Date()
    now.setDate(now.getDate() + (x + (7 - now.getDay())) % 7)
    return now
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
    const generateOptions = (count, formatFn) => {
      return Array.from({ length: count }, (_, i) => ({
        value: i,
        content: <Option>{formatFn(i)}</Option>
      }))
    }

    const formatMinute = (i) => (i < 10 ? `0${i}` : i)
    const formatHour = (hour) => {
      if (!is12Hours) return hour < 10 ? `0${hour}` : hour
      if (hour === 0) return `12 ${t('AM', 'AM')}`
      if (hour < 12) return `${hour} ${t('AM', 'AM')}`
      if (hour === 12) return `12 ${t('PM', 'PM')}`
      return `${hour - 12} ${t('PM', 'PM')}`
    }
    minuteOptions.current = generateOptions(60, formatMinute)
    hourOptions.current = generateOptions(24, formatHour)
  }, [is12Hours])

  return (
    <>
      <ScheduleContainer>
        {scheduleState.map((schedule, daysOfWeekIndex) => (
          <TimeScheduleItemContainer
            key={daysOfWeekIndex}
          >
            <div className='day-title'>
              {!disableSchedule && (
                <Checkbox
                  checked={schedule?.enabled}
                  onChange={e => handleEnabledSchedule(daysOfWeekIndex, e.target.checked)}
                />
              )}
              <DateWrapper>
                <h4>{daysOfWeek[daysOfWeekIndex]}</h4>
                {isShowDate && (
                  <h4 className='date'>{parseDate(getNextDate(daysOfWeekIndex), { outputFormat: 'YYYY-MM-DD' })}</h4>
                )}
              </DateWrapper>
            </div>
            <div className='day-selector'>
              {schedule?.enabled
                ? (
                  <div className='days'>
                    {schedule?.lapses.map((lapse, index) => (
                      <div
                        key={index}
                      >
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={hourOptions.current}
                            defaultValue={lapse?.open?.hour}
                            onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, true, 'hour')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={minuteOptions.current}
                            defaultValue={lapse?.open?.minute}
                            onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, true, 'minute')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SplitLine />
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={hourOptions.current}
                            defaultValue={lapse?.close?.hour}
                            onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, false, 'hour')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={minuteOptions.current}
                            defaultValue={lapse?.close?.minute}
                            onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, false, 'minute')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <TrashIconWrapper
                          isHide={schedule?.lapses.length <= 1}
                        >
                          {!disableSchedule && (
                            <Trash
                              onClick={() => onClickDelete(daysOfWeekIndex, index)}
                            />
                          )}
                        </TrashIconWrapper>
                      </div>
                    ))}
                    {openAddSchedule[daysOfWeekIndex] && (
                      <div>
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={hourOptions.current}
                            defaultValue={addScheduleTime?.open?.hour}
                            onChange={val => handleChangeAddScheduleTime(val, true, 'hour')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={minuteOptions.current}
                            defaultValue={addScheduleTime?.open?.minute}
                            onChange={val => handleChangeAddScheduleTime(val, true, 'minute')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SplitLine />
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={hourOptions.current}
                            defaultValue={addScheduleTime?.close?.hour}
                            onChange={val => handleChangeAddScheduleTime(val, false, 'hour')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <SelectWrapper>
                          <DefaultSelect
                            noSelected
                            options={minuteOptions.current}
                            defaultValue={addScheduleTime?.close?.minute}
                            onChange={val => handleChangeAddScheduleTime(val, false, 'minute')}
                            optionInnerMaxHeight='300px'
                          />
                        </SelectWrapper>
                        <AddScheduleIconWrapper>
                          <PlusCircleFill
                            onClick={() => handleAddSchedule(daysOfWeekIndex)}
                          />
                          <DashCircleFill
                            onClick={() => handleOpenAddSchedule(null)}
                          />
                        </AddScheduleIconWrapper>
                      </div>
                    )}
                  </div>
                )
                : (
                  <div className='days'>
                    <p>{t('UNAVAILABLE', 'Unavailable')}</p>
                  </div>
                )}
              {!disableSchedule && (
                <div className='icons'>
                  <IconWrapper
                    isHide={!schedule?.enabled}
                  >
                    <PlusSquare
                      onClick={() => handleOpenAddSchedule(daysOfWeekIndex)}
                    />
                  </IconWrapper>
                  <ScheduleCopyTimes
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
              )}
            </div>
          </TimeScheduleItemContainer>
        ))}
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
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const Schedule = (props) => {
  const scheduleProps = {
    ...props,
    UIComponent: ScheduleUI
  }
  return (
    <ScheduleController {...scheduleProps} />
  )
}
