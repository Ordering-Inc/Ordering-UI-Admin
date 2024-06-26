import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, RecoveryActionDetail as RecoveryActionDetailController } from 'ordering-components-admin'
import { Alert, Confirm } from '../../Shared'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { IconButton, Switch } from '../../../styles'
import { useTheme } from 'styled-components'
import { addQueryToUrl } from '../../../utils'

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
import { useWindowSize } from '../../../hooks/useWindowSize'

const RecoveryActionDetailUI = (props) => {
  const {
    recoveryActionState,
    formState,
    handleChangeItem,
    isAddMode,
    actionState,
    handleDeleteRecoveryAction
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [selectedOption, setSelectedOption] = useState('general')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isExpand, setIsExpand] = useState(false)

  const recoveryOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'notifications', name: t('NOTIFICATIONS', 'Notifications') }
  ]

  const handleSelectOption = (key, isInitialRender) => {
    if (key === 'notifications' && isAddMode) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'The action field is required').replace('_attribute_', t('Action', 'action'))
      })
      return
    }
    setSelectedOption(key)
    if (!isInitialRender) {
      addQueryToUrl({ tab: key })
    }
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

  const expandSidebar = () => {
    const element = document.getElementById('loyaltyWallet')
    if (isExpand) element.style.width = '550px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  useEffect(() => {
    if (Object.keys(recoveryActionState.action).length === 0) return
    const tab = query.get('tab')
    if (tab) {
      handleSelectOption(tab, true)
    } else {
      handleSelectOption(selectedOption)
    }
  }, [recoveryActionState.action])

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
          <RightHeader>
            {width > 576 && (
              <IconButton
                color='black'
                onClick={expandSidebar}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
            {!isAddMode && (
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
            )}
          </RightHeader>
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
            action={recoveryActionState.action}
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
