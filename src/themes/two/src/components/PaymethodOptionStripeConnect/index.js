import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container,
  FieldName,
  Header,
  CloseButton,
  InputGroup,
  InputWrapper
} from './styles'

export const PaymethodOptionStripeConnect = (props) => {
  const {
    open,
    onClose,
    changesState,
    cleanChangesState,
    actionState,
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
    document.getElementById('stripe_connect').style.width = value
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('stripe_connect').style.width = '100vw'
      } else {
        document.getElementById('stripe_connect').style.width = '500px'
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
    <Container id='stripe_connect'>
      <Header>
        <h1>{t('STRIPE_CONNECT', 'Stripe connect')}</h1>
        <CloseButton>
          <MdcClose
            onClick={() => onClose()}
          />
        </CloseButton>
      </Header>
      <FieldName>{t('ACCESS_TOKEN_ID', 'Access token ID')}</FieldName>
      <Input
        name='secret'
        defaultValue={
          changesState?.data?.secret
            ? changesState?.data?.secret
            : businessPaymethod?.data?.secret
        }
        placeholder={t('ACCESS_TOKEN_ID', 'Access token ID')}
        onChange={e => handleChangeInput(e, false)}
      />

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

      <FieldName>{t('ID_USER', 'User ID')}</FieldName>
      <Input
        name='secret'
        defaultValue={
          changesState?.data?.secret
            ? changesState?.data?.secret
            : businessPaymethod?.data?.secret
        }
        placeholder={t('ID_USER', 'User ID')}
        onChange={e => handleChangeInput(e, false)}
      />

      <FieldName>{t('REFRESH_TOKEN', 'Refresh token')}</FieldName>
      <Input
        name='publishable'
        defaultValue={
          changesState?.data_sandbox?.publishable
            ? changesState?.data_sandbox?.publishable
            : businessPaymethod?.data_sandbox?.publishable
        }
        placeholder={t('REFRESH_TOKEN', 'Refresh token')}
        onChange={e => handleChangeInput(e, true)}
      />

      <InputGroup>
        <InputWrapper>
          <FieldName>{t('FIXED_FEE', 'Fixed fee')}</FieldName>
          <Input
            name='secret'
            defaultValue={
              changesState?.data_sandbox?.secret
                ? changesState?.data_sandbox?.secret
                : businessPaymethod?.data_sandbox?.secret
            }
            placeholder={t('FIXED_FEE', 'Fixed fee')}
            onChange={e => handleChangeInput(e, true)}
          />
        </InputWrapper>

        <InputWrapper>
          <FieldName>{t('PERCENTAGE_FEE', 'Percentage fee')}</FieldName>
          <Input
            name='secret'
            defaultValue={
              changesState?.data_sandbox?.secret
                ? changesState?.data_sandbox?.secret
                : businessPaymethod?.data_sandbox?.secret
            }
            placeholder={t('PERCENTAGE_FEE', 'Percentage fee')}
            onChange={e => handleChangeInput(e, true)}
          />
        </InputWrapper>
      </InputGroup>

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
