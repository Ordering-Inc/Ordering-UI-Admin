import React, { useState, useEffect } from 'react'
import { useLanguage, SingleRecoveryNotification as SingleRecoveryNotificationController } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import { Select } from '../../../styles/Select'
import { Alert, Confirm } from '../../Shared'

import {
  Container,
  InputWrapper,
  ButtonGroup,
  Option
} from './styles'

const SingleRecoveryNotificationUI = (props) => {
  const {
    notification,
    formState,
    handleChangeInput,
    handleChangeSelect,
    handleUpdateClick,
    handleDeleteClick,
    isAdd,
    handleClickAddBtn
  } = props

  const [, t] = useLanguage()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const channelList = [
    { value: 'email', content: <Option>{t('EMAIL', 'Email')}</Option> },
    { value: 'sms', content: <Option>{t('SMS', 'SMS')}</Option> },
    { value: 'notification', content: <Option>{t('NOTIFICATION', 'Notification')}</Option> }
  ]

  const handleClickDeleteBtn = (id) => {
    handleDeleteClick && handleDeleteClick(id)
  }

  const handleClickUpdateBtn = (id) => {
    handleUpdateClick && handleUpdateClick(id, formState?.changes)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDeleteNotification = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('NOTIFICATION', 'Notification')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleClickDeleteBtn(id)
      }
    })
  }

  const placeholder = <Option>{t('SELECT_CHANNEL', 'Select a channel')}</Option>

  useEffect(() => {
    if (!formState?.error || formState.loading) return
    setAlertState({
      open: true,
      content: formState?.error
    })
  }, [formState?.error])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={
              formState?.changes?.title
                ? formState?.changes?.title
                : notification?.title ?? ''
            }
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGE', 'Message')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={
              formState?.changes?.body
                ? formState?.changes?.body
                : notification?.body ?? ''
            }
            onChange={handleChangeInput}
          />
        </InputWrapper>
        {isAdd && (
          <InputWrapper>
            <label>{t('CHANNEL', 'Channel')}</label>
            <Select
              placeholder={placeholder}
              defaultValue={
                formState?.changes?.channel
                  ? formState?.changes?.channel
                  : notification?.channel ?? ''
              }
              options={channelList}
              onChange={val => handleChangeSelect('channel', val)}
            />
          </InputWrapper>
        )}
      </Container>
      <ButtonGroup>
        {isAdd ? (
          <Button
            color='primary'
            borderRadius='8px'
            disabled={Object.keys(formState?.changes).length === 0 || formState?.loading}
            onClick={() => handleClickAddBtn()}
          >
            {t('ADD', 'Add')}
          </Button>
        ) : (
          <>
            <Button
              color='primary'
              borderRadius='8px'
              disabled={Object.keys(formState?.changes).length === 0 || formState?.loading}
              onClick={() => handleClickUpdateBtn(notification?.id)}
            >
              {t('ACCEPT', 'Accept')}
            </Button>
            <Button
              color='secundary'
              borderRadius='8px'
              onClick={() => onClickDeleteNotification(notification?.id)}
            >
              {t('DELETE', 'Delete')}
            </Button>
          </>
        )}
      </ButtonGroup>
      <Alert
        title={t('RECOVERY_ACTIONS', 'Recovery actions')}
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

export const SingleRecoveryNotification = (props) => {
  const singleRecoveryNotificationProps = {
    ...props,
    UIComponent: SingleRecoveryNotificationUI
  }
  return <SingleRecoveryNotificationController {...singleRecoveryNotificationProps} />
}
