import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, Button } from '../../styles'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'

import {
  FormContainer,
  SubTitle,
  InputWrapper
} from './styles'

export const DriversCompanyWebhooksDetails = (props) => {
  const {
    driversCompany,
    actionState,
    changesState,
    handleChangesState,
    handleUpdateDriversCompany,
    handleAddDriversCompany
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = () => {
    if (!(changesState?.timezone || driversCompany?.timezone)) {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Name is required'
        ).replace('_attribute_', t('TIMEZONE', 'Timezone'))
      })
      return
    }
    driversCompany ? handleUpdateDriversCompany() : handleAddDriversCompany()
  }

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
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>{t('WEBHOOK', 'Webhook')}</SubTitle>
        <InputWrapper>
          <label>{t('WEBHOOK_NEW_ORDER', 'Webhook new order')}</label>
          <Input
            name='webhook_new_order'
            value={changesState?.webhook_new_order ?? driversCompany?.webhook_new_order ?? ''}
            onChange={e => handleChangesState('webhook_new_order', e.target.value)}
            placeholder={t('WEBHOOK_NEW_ORDER', 'Webhook new order')}
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('WEBHOOK_NEW_ORDER', 'Webhook new order'))
            })}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request')}</label>
          <Input
            name='webhook_cancel_request'
            value={changesState?.webhook_cancel_request ?? driversCompany?.webhook_cancel_request ?? ''}
            onChange={e => handleChangesState('webhook_cancel_request', e.target.value)}
            placeholder={t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request')}
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request'))
            })}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed')}</label>
          <Input
            name='webhook_order_status_changed'
            value={changesState?.webhook_order_status_changed ?? driversCompany?.webhook_order_status_changed ?? ''}
            onChange={e => handleChangesState('webhook_order_status_changed', e.target.value)}
            placeholder={t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed')}
            autoComplete='off'
          />
        </InputWrapper>
        {driversCompany && (
          <InputWrapper>
            <label>{t('API_KEY', 'API Key')}</label>
            <Input
              name='api_key'
              value={driversCompany?.api_key ?? ''}
              disabled
              placeholder={t('API_KEY', 'API Key')}
              autoComplete='off'
            />
          </InputWrapper>
        )}
        <Button
          borderRadius='8px'
          color='primary'
          type='submit'
          disabled={Object.keys(changesState).length === 0 || actionState.loading}
        >
          {driversCompany ? t('SAVE', 'Save') : t('ADD', 'Add')}
        </Button>
      </FormContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
