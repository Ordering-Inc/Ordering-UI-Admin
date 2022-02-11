import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  Schedule as ScheduleController
} from 'ordering-components-admin'
import {
  Trash,
  PlusSquare,
  PlusCircleFill,
  DashCircleFill
} from 'react-bootstrap-icons'
import { Alert } from '../Confirm'
import { ScheduleCopyTimes } from '../ScheduleCopyTimes'
import { DefaultSelect, Checkbox } from '../../../styles'

import {
  ScheduleContainer,
  TimeScheduleItemContainer,
  Option,
  SplitLine,
  IconWrapper,
  SelectWrapper,
  AddScheduleIconWrapper,
  TrashIconWrapper
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
    handleApplyScheduleCopyTimes
  } = props

  const [, t] = useLanguage()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [scheduleOptions, setScheduleOptions] = useState([])
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
    _scheduleOptions.push({
      value: '23:59',
      content: (
        <Option>23 : 59</Option>
      )
    })
    setScheduleOptions(_scheduleOptions)
  }, [])

  return (
    <>
      <ScheduleContainer>
        {scheduleState.map((schedule, daysOfWeekIndex) => (
          <TimeScheduleItemContainer
            key={daysOfWeekIndex}
          >
            <div>
              <Checkbox
                checked={schedule?.enabled}
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
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          lapse?.open?.hour === 23 && lapse?.open?.minute === 59
                            ? `${lapse?.open?.hour}:${lapse?.open?.minute}`
                            : `${lapse?.open?.hour}:${parseInt(lapse?.open?.minute / 15) * 15}`
                        }
                        onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, true)}
                        optionInnerMaxHeight='300px'
                      />
                    </SelectWrapper>
                    <SplitLine />
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          lapse?.close?.hour === 23 && lapse?.close?.minute === 59
                            ? `${lapse?.close?.hour}:${lapse?.close?.minute}`
                            : `${lapse?.close?.hour}:${parseInt(lapse?.close?.minute / 15) * 15}`
                        }
                        onChange={val => handleChangeScheduleTime(val, daysOfWeekIndex, index, false)}
                        optionInnerMaxHeight='300px'
                      />
                    </SelectWrapper>
                    <TrashIconWrapper
                      isHide={schedule?.lapses.length <= 1}
                    >
                      <Trash
                        onClick={() => handleDeleteSchedule(daysOfWeekIndex, index)}
                      />
                    </TrashIconWrapper>
                  </div>
                ))}
                {openAddSchedule[daysOfWeekIndex] && (
                  <div>
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          addScheduleTime?.open?.hour === 23 && addScheduleTime?.open?.minute === 59
                            ? `${addScheduleTime?.open?.hour}:${addScheduleTime?.open?.minute}`
                            : `${addScheduleTime?.open?.hour}:${parseInt(addScheduleTime?.open?.minute / 15) * 15}`
                        }
                        optionInnerMaxHeight='300px'
                        onChange={val => handleChangeAddScheduleTime(val, true)}
                      />
                    </SelectWrapper>
                    <SplitLine />
                    <SelectWrapper>
                      <DefaultSelect
                        noSelected
                        options={scheduleOptions}
                        defaultValue={
                          addScheduleTime?.close?.hour === 23 && addScheduleTime?.close?.minute === 59
                            ? `${addScheduleTime?.close?.hour}:${addScheduleTime?.close?.minute}`
                            : `${addScheduleTime?.close?.hour}:${parseInt(addScheduleTime?.close?.minute / 15) * 15}`
                        }
                        optionInnerMaxHeight='300px'
                        onChange={val => handleChangeAddScheduleTime(val, false)}
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
