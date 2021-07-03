import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container,
  SandboxWrapper,
  FieldName,
  Header,
  CloseButton
} from './styles'

export const PaymethodOptionPaypalExpress = (props) => {
  const {
    open,
    onClose,
    changesState,
    cleanChangesState,
    actionState,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick,
    businessPaymethod
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('paypal_express').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('paypal_express').style.width = '100%'
      } else {
        document.getElementById('paypal_express').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    cleanChangesState({
      sandbox: businessPaymethod?.sandbox
    })
  }, [businessPaymethod?.sandbox])
  return (
    <Container id='paypal_express'>
      <Header>
        <h1>{t('PAYPAL_EXPRESS', 'Paypal express')}</h1>
        <CloseButton>
          <MdcClose
            onClick={() => onClose()}
          />
        </CloseButton>
      </Header>
      <SandboxWrapper
        onClick={() => handleChangeSandbox()}
      >
        {changesState?.sandbox ? (
          <RiCheckboxFill className='fill' />
        ) : (
          <RiCheckboxBlankLine />
        )}
        <span>{t('SANDBOX', 'Sandbox')}</span>
      </SandboxWrapper>
      <FieldName>{t('CLIENT_ID', 'Client ID')}</FieldName>
      <Input
        name='client_id'
        defaultValue={
          changesState?.data?.client_id
            ? changesState?.data?.client_id
            : businessPaymethod?.data?.client_id
        }
        placeholder={t('CLIENT_ID', 'Client ID')}
        onChange={e => handleChangeInput(e, false)}
      />
      <FieldName>{t('CLIENT_ID', 'Client ID')} ({t('SANDBOX', 'Sandbox')})</FieldName>
      <Input
        name='client_id'
        defaultValue={
          changesState?.data_sandbox?.client_id
            ? changesState?.data_sandbox?.client_id
            : businessPaymethod?.data_sandbox?.client_id
        }
        placeholder={`${t('CLIENT_ID', 'Client ID')} (${t('SANDBOX', 'Sandbox')}`}
        onChange={e => handleChangeInput(e, true)}
      />
      <Button
        borderRadius='5px'
        color='primary'
        disabled={actionState.loading || Object.keys(changesState).length === 0}
        onClick={() => handleSaveClick(businessPaymethod.id)}
      >
        {actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
