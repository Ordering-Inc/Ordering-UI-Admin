import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Alert, Confirm } from '../../Shared'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { RecoveryActionDetail as RecoveryActionDetailController } from './naked'
import { ThreeDots } from 'react-bootstrap-icons'
import { Switch } from '../../../styles'
import { useTheme } from 'styled-components'

import {
  RecoveryActionDetailContainer,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  BusinessName,
  ActionSelectorWrapper,
  Tabs,
  Tab
} from './styles'
import { RecoveryGeneral } from '../RecoveryGeneral'
import { RecoveryNotificationList } from '../RecoveryNotificationList'

const RecoveryActionDetailUI = (props) => {
  const {
    recoveryActionState,
    formState,
    handleChangeItem,
    isAddMode,
    actionState,
    handleDeleteRecoveryAction
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const [selectedOption, setSelectedOption] = useState('general')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const recoveryOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'notifications', name: t('NOTIFICATIONS', 'Notifications') }
  ]

  const handleSelectOption = (key) => {
    if (key === 'notifications' && isAddMode) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'The action field is required').replace('_attribute_', t('Action', 'action'))
      })
      return
    }
    setSelectedOption(key)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDeleteRecoveryAction = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('RECOVERY_ACTION', 'Recovery action')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteRecoveryAction()
      }
    })
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  return (
    <>
      <RecoveryActionDetailContainer>
        <DetailsHeader>
          <LeftHeader>
            {(formState.changes?.name || recoveryActionState?.action?.name) && (
              <BusinessName>{formState.changes?.name ?? recoveryActionState?.action?.name}</BusinessName>
            )}
            <Switch
              defaultChecked={
                typeof formState.changes?.enabled !== 'undefined'
                  ? formState.changes?.enabled
                  : recoveryActionState.action?.enabled ?? false
              }
              onChange={val => handleChangeItem({ enabled: val })}
            />
          </LeftHeader>
          {!isAddMode && (
            <RightHeader>
              <ActionSelectorWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  {/* <Dropdown.Item>
                    {t('CUSTOM_FIELDS', 'Custom fields')}
                  </Dropdown.Item> */}
                  <Dropdown.Item onClick={() => onClickDeleteRecoveryAction()}>
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            </RightHeader>
          )}
        </DetailsHeader>
        <Tabs>
          {recoveryOptionList.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => handleSelectOption(option.key)}
            >
              {option.name}
            </Tab>
          ))}
        </Tabs>
        {selectedOption === 'general' && (
          <RecoveryGeneral
            {...props}
          />
        )}
        {selectedOption === 'notifications' && (
          <RecoveryNotificationList
            {...props}
          />
        )}
      </RecoveryActionDetailContainer>
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

export const RecoveryActionDetail = (props) => {
  const recoveryActionDetailProps = {
    ...props,
    UIComponent: RecoveryActionDetailUI
  }
  return <RecoveryActionDetailController {...recoveryActionDetailProps} />
}
