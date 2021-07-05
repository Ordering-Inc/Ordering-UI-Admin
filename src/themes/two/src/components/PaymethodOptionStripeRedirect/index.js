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

export const PaymethodOptionStripeRedirect = (props) => {
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
    document.getElementById('stripe_redirect').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('stripe_redirect').style.width = '100%'
      } else {
        document.getElementById('stripe_redirect').style.width = '500px'
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
    <Container id='stripe_redirect'>
      <Header>
        <h1>{t('STRIPE_REDIRECT', 'Stripe redirect')}</h1>
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
      <FieldName>{t('PUBLISHABLE_KEY', 'Publishable key')}</FieldName>
      <Input
        name='publishable'
        defaultValue={
          changesState?.data?.publishable
            ? changesState?.data?.publishable
            : businessPaymethod?.data?.publishable
        }
        placeholder={t('PUBLISHABLE_KEY', 'Publishable key')}
        onChange={e => handleChangeInput(e, false)}
      />
      <FieldName>{t('SECRET_KEY', 'Secret key')}</FieldName>
      <Input
        name='secret'
        defaultValue={
          changesState?.data?.secret
            ? changesState?.data?.secret
            : businessPaymethod?.data?.secret
        }
        placeholder={t('SECRET_KEY', 'Secret key')}
        onChange={e => handleChangeInput(e, false)}
      />
      <FieldName>{t('PUBLISHABLE_KEY', 'Publishable key')} ({t('SANDBOX', 'Sandbox')})</FieldName>
      <Input
        name='publishable'
        defaultValue={
          changesState?.data_sandbox?.publishable
            ? changesState?.data_sandbox?.publishable
            : businessPaymethod?.data_sandbox?.publishable
        }
        placeholder={`${t('PUBLISHABLE_KEY', 'Publishable key')} (${t('SANDBOX', 'Sandbox')})`}
        onChange={e => handleChangeInput(e, true)}
      />
      <FieldName>{t('SECRECT_KEY', 'Secret key')} ({t('SANDBOX', 'Sandbox')})</FieldName>
      <Input
        name='secret'
        defaultValue={
          changesState?.data_sandbox?.secret
            ? changesState?.data_sandbox?.secret
            : businessPaymethod?.data_sandbox?.secret
        }
        placeholder={`${t('SECRECT_KEY', 'Secret key')} (${t('SANDBOX', 'Sandbox')})`}
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
