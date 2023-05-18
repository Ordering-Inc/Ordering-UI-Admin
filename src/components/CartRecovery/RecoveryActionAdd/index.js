import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  RecoveryActionDetail as RecoveryActionDetailController
} from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon
} from 'react-bootstrap-icons'
import NumericInput from 'react-numeric-input'
import { Button, Input, TextArea } from '../../../styles'
import { Alert, HtmlEditor } from '../../Shared'
import { Select } from '../../../styles/Select'

import {
  RecoveryActionAddContainer,
  CardContainer,
  ButtonsContainer,
  InputWrapper,
  LastTimeWrapper,
  TypeWrapper,
  ParentCheckBoxWrapper,
  TimeBlock,
  TimeContent,
  DaysContent,
  Option
} from './styles'

export const RecoveryActionAddUI = (props) => {
  const {
    onClose,
    formState,
    handleAddRecoveryAction,
    handleChangeInput,
    handleChangeItem,
    actionState
  } = props

  const [, t] = useLanguage()
  const { register, handleSubmit, errors, setValue } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [seconds, setSeconds] = useState([])
  const [curPreorderTime, setCurPreorderTime] = useState({ hour: '0', minute: '0', second: '0' })
  const [curDayTime, setCurDayTime] = useState(0)
  const [isTime, setIsTime] = useState(true)

  const channelList = [
    { value: 'email', content: <Option>{t('EMAIL', 'Email')}</Option> },
    { value: 'sms', content: <Option>{t('SMS', 'SMS')}</Option> },
    { value: 'notification', content: <Option>{t('PUSH_NOTIFICATION', 'Push notification')}</Option> }
  ]

  const setTimeList = () => {
    const _hours = []
    const _minutes = []
    const _seconds = []
    for (let i = 0; i < 24; i++) {
      const text = (i < 10 ? '0' : ' ') + i
      _hours.push({
        text: text,
        hour: i
      })
    }
    for (let i = 0; i < 60; i++) {
      const text = (i < 10 ? '0' : '') + i
      _minutes.push({
        text: text,
        minute: i
      })
      _seconds.push({
        text: text,
        second: i
      })
    }
    setHours(_hours)
    setMinutes(_minutes)
    setSeconds(_seconds)
  }

  const handleChangePreorderTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
    setCurPreorderTime({
      ...curPreorderTime,
      [type]: value
    })
    let preorderTime = 0
    if (type === 'hour') preorderTime = parseInt(value) * 3600 + parseInt(curPreorderTime?.minute) * 60 + parseInt(curPreorderTime?.second)
    else if (type === 'minute') preorderTime = parseInt(curPreorderTime?.hour) * 3600 + parseInt(value) * 60 + parseInt(curPreorderTime?.second)
    else preorderTime = parseInt(curPreorderTime?.hour) * 3600 + parseInt(curPreorderTime?.minute) * 60 + parseInt(value)
    handleChangeItem({ times: [preorderTime], launch_type: 'times' })
  }

  const handleChangeDay = (value) => {
    setCurDayTime(value)
    handleChangeItem({ times: [value * 24 * 3600], launch_type: 'times' })
  }

  const onSubmit = () => {
    if (!formState.changes?.times?.[0]) {
      setAlertState({
        open: true,
        content: [t(
          'VALIDATION_ERROR_REQUIRED',
          'Name is required'
        ).replace('_attribute_', t('TIME', 'Time'))]
      })
      return
    }
    if (!formState.changes?.channel) {
      setAlertState({
        open: true,
        content: [t(
          'VALIDATION_ERROR_REQUIRED',
          'Name is required'
        ).replace('_attribute_', t('CHANNEL', 'Channel'))]
      })
      return
    }
    if (!formState.changes?.body) {
      setAlertState({
        open: true,
        content: [t(
          'VALIDATION_ERROR_REQUIRED',
          'Name is required'
        ).replace('_attribute_', t('MESSAGE', 'Message'))]
      })
      return
    }
    handleAddRecoveryAction()
  }

  const handleSwitchTime = () => {
    let preorderTime
    if (!isTime) {
      preorderTime = parseInt(curPreorderTime?.hour) * 3600 + parseInt(curPreorderTime?.minute) * 60 + parseInt(curPreorderTime?.second)
    } else {
      preorderTime = curDayTime * 24 * 3600
    }
    handleChangeItem({ times: [preorderTime], launch_type: 'times' })
    setIsTime(prev => !prev)
  }

  useEffect(() => {
    setTimeList()
  }, [])

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  return (
    <>
      <RecoveryActionAddContainer onSubmit={handleSubmit(onSubmit)}>
        <CardContainer>
          <h2>{t('GENERAL', 'General')}</h2>
          <InputWrapper>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              type='text'
              placeholder={t('NAME', 'name')}
              value={formState?.changes?.name ?? ''}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Name is required'
                ).replace('_attribute_', t('NAME', 'Name'))
              })}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('DESCRIPTION', 'Description')}</label>
            <TextArea
              placeholder={t('WRITE_LITTLE_DESCRIPTION', 'Write a little description')}
              name='description'
              rows={3}
              value={
                formState?.changes?.description ?? ''
              }
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <LastTimeWrapper>
            <h3>{t('LAST_TIME_CART_WAS_OPENED', 'Last time the cart was opened')}</h3>
            <TypeWrapper>
              <ParentCheckBoxWrapper>
                <div onClick={() => handleSwitchTime()}>
                  {isTime ? <CheckIcon className='checked-icon' /> : <UnCheckIcon />}
                  <span>{t('TIME', 'Time')}</span>
                </div>
              </ParentCheckBoxWrapper>
              {isTime && (
                <TimeContent>
                  <TimeBlock>
                    <select
                      value={curPreorderTime?.hour}
                      name='hour'
                      onChange={handleChangePreorderTime}
                    >
                      {
                        hours?.map((hour, i) => (
                          <option value={hour.hour} key={i}>{hour.text}</option>
                        ))
                      }
                    </select>
                    <span>:</span>
                    <select
                      value={curPreorderTime?.minute}
                      name='minute'
                      onChange={handleChangePreorderTime}
                    >
                      {minutes?.map((minute, i) => (
                        <option value={minute.minute} key={i}>{minute.text}</option>
                      ))}
                    </select>
                    <span>:</span>
                    <select
                      value={curPreorderTime?.second}
                      name='second'
                      onChange={handleChangePreorderTime}
                    >
                      {seconds?.map((second, i) => (
                        <option value={second.second} key={i}>{second.text}</option>
                      ))}
                    </select>
                  </TimeBlock>
                </TimeContent>
              )}
            </TypeWrapper>
            <TypeWrapper>
              <ParentCheckBoxWrapper>
                <div onClick={() => handleSwitchTime()}>
                  {!isTime ? <CheckIcon className='checked-icon' /> : <UnCheckIcon />}
                  <span>{t('DAYS', 'Days')}</span>
                </div>
              </ParentCheckBoxWrapper>
              {!isTime && (
                <DaysContent>
                  <NumericInput
                    placeholder='00'
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    value={curDayTime || ''}
                    onChange={(value) => handleChangeDay(value)}
                    min={0}
                  />
                </DaysContent>
              )}
            </TypeWrapper>
          </LastTimeWrapper>
        </CardContainer>
        <CardContainer>
          <h2>{t('NOTIFICATIONS', 'Notifications')}</h2>
          <InputWrapper>
            <label>{t('TITLE', 'Title')}</label>
            <Input
              name='title'
              placeholder={t('TITLE', 'Title')}
              defaultValue={formState?.changes?.title ?? ''}
              onChange={handleChangeInput}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Name is required'
                ).replace('_attribute_', t('TITLE', 'Title'))
              })}
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('CHANNEL', 'Channel')}</label>
            <Select
              placeholder={<Option>{t('SELECT_CHANNEL', 'Select a channel')}</Option>}
              defaultValue={formState?.changes?.channel ?? ''}
              options={channelList}
              onChange={val => {
                setValue('body', '')
                handleChangeItem({ channel: val, body: '' })
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('MESSAGE', 'Message')}</label>
            {formState.changes?.channel === 'email' ? (
              <HtmlEditor
                handleChangeBody={val => handleChangeItem({ body: val })}
              />
            ) : (
              <TextArea
                name='body'
                rows={3}
                placeholder={t('WRITE_MESSAGE', 'Write a message')}
                defaultValue={formState?.changes?.body ?? ''}
                onChange={handleChangeInput}
                ref={register({
                  required: t(
                    'VALIDATION_ERROR_REQUIRED',
                    'Name is required'
                  ).replace('_attribute_', t('MESSAGE', 'Message'))
                })}
              />
            )}
          </InputWrapper>
        </CardContainer>
        <ButtonsContainer>
          <Button
            color='secundary'
            onClick={() => onClose()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            color='primary'
            type='submit'
            disabled={Object.keys(formState.changes).length === 0 || formState.loading}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ButtonsContainer>
      </RecoveryActionAddContainer>
      <Alert
        title={t('RECOVERY_ACTIONS', 'Recovery actions')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const RecoveryActionAdd = (props) => {
  const recoveryActionDetailProps = {
    ...props,
    UIComponent: RecoveryActionAddUI
  }
  return <RecoveryActionDetailController {...recoveryActionDetailProps} />
}
