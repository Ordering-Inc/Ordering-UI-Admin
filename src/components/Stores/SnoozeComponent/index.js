import React, { useState } from 'react'
import { Calendar4 } from 'react-bootstrap-icons'
import DatePicker from 'react-datepicker'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import moment from 'moment'
import * as locales from 'react-date-range/dist/locale'

import { useLanguage } from 'ordering-components-admin'
import { getLocale } from '../../../utils'

import {
  SnoozeContainer,
  SnoozeTitle,
  SnoozeWrapper,
  Button,
  ButtonOptions,
  ButtonWrapper,
  DateContainer,
  IconContainer,
  InfoContainer
} from './styles'

export const SnoozeComponent = (props) => {
  const {
    isAutomaticUpdate,
    dataState,
    handleUpdate,
    onClose,
    setFormState,
    handleChangeFormState,
    formState
  } = props
  const [state, t] = useLanguage()

  const [selectedDate, setSelectedDate] = useState(() => {
      const today = new Date()
      today.setDate(today.getDate() + 1)
      return today
  })
  const [openCalendar, setOpenCalendar] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleRemoveSnooze = () => {
    handleChangeFormState && handleChangeFormState({ snooze_until: null })
    setFormState && setFormState(prevState => ({ ...prevState, changes: { ...prevState?.changes, snooze_until: null } }))
  }

  const handleChangeOption = (value) => {
    setSelectedOption(value)
    if (value === 'until_date') return
    const currentDate = new Date()
    let newDate = null

    if (value === 'off') {
      handleRemoveSnooze()
      return
    }
    if (value === '1') {
      newDate = new Date(currentDate.getTime() + 60 * 60 * 1000)
    } else if (value === '2') {
      newDate = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000)
    } else if (value === '4') {
      newDate = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000)
    } else if (value === '6') {
      newDate = new Date(currentDate.getTime() + 6 * 60 * 60 * 1000)
    } else if (value === '12') {
      newDate = new Date(currentDate.getTime() + 12 * 60 * 60 * 1000)
    } else if (value === 'indefinitely') {
      newDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 2))
    }

    if (newDate) {
      handleChangeFormState && handleChangeFormState({ snooze_until: moment(newDate).utc().format('YYYY-MM-DD HH:mm:ss') })
      setFormState && setFormState(prevState => ({
        ...prevState,
        changes: {
          ...prevState?.changes,
          snooze_until: moment(newDate).utc().format('YYYY-MM-DD HH:mm:ss')
        }
      }))
    }
  }

  const handleSelectDate = (date) => {
    const currentDate = new Date()
    const diffInHours = Math.abs((date - currentDate) / 36e5)

    const tolerance = .15 // 10 minutes tolerance

    let matchedOption = ''

    if (Math.abs(diffInHours - 1) <= tolerance) {
      matchedOption = '1'
    } else if (Math.abs(diffInHours - 2) <= tolerance) {
      matchedOption = '2'
    } else if (Math.abs(diffInHours - 4) <= tolerance) {
      matchedOption = '4'
    } else if (Math.abs(diffInHours - 6) <= tolerance) {
      matchedOption = '6'
    } else if (Math.abs(diffInHours - 12) <= tolerance) {
      matchedOption = '12'
    }

    setSelectedDate(date)
    if (matchedOption) {
      setSelectedOption(matchedOption)
    }

    handleChangeFormState && handleChangeFormState({ snooze_until: moment(date).utc().format('YYYY-MM-DD HH:mm:ss') })
    setFormState && setFormState(prevState => ({
      ...prevState,
      changes: { ...prevState?.changes, snooze_until: moment(date).utc().format('YYYY-MM-DD HH:mm:ss') }
    }))
  }

  const handleUpdateClick = () => {
    onClose && onClose()
    if (isAutomaticUpdate) {
      handleUpdate && handleUpdate(formState?.changes)
      return
    }
    if (Object.keys(formState?.changes)?.length) {
      handleUpdate && handleUpdate()
    }
  }

  const dateOptions = ['or', 'until_date']

  const snoozeOptions = [
    {
      value: 'off',
      content: t('SNOOZE_OFF', 'Off')
    },
    {
      value: '1',
      content: t('SNOOZE_ONE_HOUR', '1H')
    },
    {
      value: '2',
      content: t('SNOOZE_TWO_HOUR', '2H')
    },
    {
      value: '4',
      content: t('SNOOZE_FOUR_HOUR', '4H')
    },
    {
      value: '6',
      content: t('SNOOZE_SIX_HOUR', '6H')
    },
    {
      value: '12',
      content: t('SNOOZE_TWELVE_HOUR', '12H')
    },
    {
      value: 'indefinitely',
      content: t('SNOOZE_INDEFINITELY', 'Indefinitely')
    },
    {
      value: 'or',
      content: t('SNOOZE_OR', 'or')
    },
    {
      value: 'until_date'
    }
  ]

  return (
    <>
      <SnoozeContainer openCalendar={openCalendar}>
        <SnoozeTitle>
          {t('SNOOZE_TITLE', 'Disable for:')}
        </SnoozeTitle>
        <SnoozeWrapper>
          {snoozeOptions?.map((option, i) => (
            <div key={i}>
              {option.value === 'until_date' && (
                <DateContainer active={option.value === selectedOption || openCalendar}>
                  <IconContainer>
                    <Calendar4 />
                  </IconContainer>
                  <DatePicker
                    locale={getLocale(state?.language?.code, locales)}
                    selected={selectedDate}
                    minDate={new Date()}
                    onChange={handleSelectDate}
                    onCalendarOpen={() => {
                      setSelectedOption('until_date')
                      setOpenCalendar(true)
                    }}
                    onCalendarClose={() => setOpenCalendar(false)}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    timeCaption='Time'
                    dateFormat='MMMM d, yyyy HH:mm'
                  />
                </DateContainer>
              )}
              {option.value === 'or' && (
                <p>{option.content}</p>
              )}
              {!dateOptions.includes(option.value) && (
                <ButtonOptions
                  onClick={() => handleChangeOption(option.value)}
                  active={option.value === selectedOption}
                >{option.content}
                </ButtonOptions>
              )}
            </div>
          ))}
        </SnoozeWrapper>
        <InfoContainer hasSnooze={dataState?.snooze_until}>
          <ButtonWrapper>
            <Button color='primary' onClick={() => handleUpdateClick()}>{selectedOption === 'off' ? t('DISABLE_SNOOZE', 'Disable Snooze') : t('SNOOZE_SAVE', 'Snooze')}</Button>
            <Button onClick={() => onClose()}>{t('CANCEL', 'Cancel')}</Button>
          </ButtonWrapper>
          {dataState?.snooze_until && (
            <span><strong>{t('SNOOZED_UNTIL', 'Snoozed until:')}</strong> {moment.utc(dataState?.snooze_until).local().format('YYYY-MM-DD HH:mm')}</span>
          )}
        </InfoContainer>
      </SnoozeContainer>
    </>
  )
}
