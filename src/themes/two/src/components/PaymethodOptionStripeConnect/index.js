import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import BilStripe from '@meronex/icons/bi/BilStripe'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container,
  FieldName,
  Header,
  CloseButton,
  InputGroup,
  InputWrapper,
  StripeConnectButton
} from './styles'

export const PaymethodOptionStripeConnect = (props) => {
  const {
    business,
    open,
    onClose,
    changesState,
    cleanChangesState,
    actionState,
    handleStripeConnect,
    handleChangeStripeInput,
    handleStripeSave,
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
    cleanChangesState({})
  }, [])
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
      <StripeConnectButton
        onClick={() => handleStripeConnect()}
      >
        <span><BilStripe /></span>
        <span>{t('CONNECT_WITH_STRIPE', 'Connect with stripe')}</span>
      </StripeConnectButton>
      <FieldName>{t('ACCESS_TOKEN_ID', 'Access token ID')}</FieldName>
      <Input
        name='token'
        defaultValue={
          changesState?.data?.token
            ? changesState?.data?.token
            : businessPaymethod?.data?.token
        }
        placeholder={t('ACCESS_TOKEN_ID', 'Access token ID')}
        disabled
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
        disabled
      />

      <FieldName>{t('ID_USER', 'User ID')}</FieldName>
      <Input
        name='user'
        defaultValue={
          changesState?.data?.user
            ? changesState?.data?.user
            : businessPaymethod?.data?.user
        }
        placeholder={t('ID_USER', 'User ID')}
        disabled
      />

      <FieldName>{t('REFRESH_TOKEN', 'Refresh token')}</FieldName>
      <Input
        name='refresh_token'
        defaultValue={
          changesState?.data_sandbox?.refresh_token
            ? changesState?.data_sandbox?.refresh_token
            : businessPaymethod?.data_sandbox?.refresh_token
        }
        placeholder={t('REFRESH_TOKEN', 'Refresh token')}
        disabled
      />

      <InputGroup>
        <InputWrapper>
          <FieldName>{t('FIXED_FEE', 'Fixed fee')}</FieldName>
          <Input
            type='number'
            name='fixed_usage_fee'
            defaultValue={
              changesState?.fixed_usage_fee
                ? changesState?.fixed_usage_fee
                : business?.fixed_usage_fee
            }
            placeholder={t('FIXED_FEE', 'Fixed fee')}
            onChange={e => handleChangeStripeInput(e)}
          />
        </InputWrapper>

        <InputWrapper>
          <FieldName>{t('PERCENTAGE_FEE', 'Percentage fee')}</FieldName>
          <Input
            type='number'
            name='percentage_usage_fee'
            defaultValue={
              changesState?.percentage_usage_fee
                ? changesState?.percentage_usage_fee
                : business?.percentage_usage_fee
            }
            placeholder={t('PERCENTAGE_FEE', 'Percentage fee')}
            onChange={e => handleChangeStripeInput(e)}
          />
        </InputWrapper>
      </InputGroup>

      <Button
        borderRadius='5px'
        color='primary'
        disabled={actionState.loading || Object.keys(changesState).length === 0}
        onClick={() => handleStripeSave(businessPaymethod.id)}
      >
        {actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
