import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../../../styles'
import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  InputWrapper
} from './styles'

export const WebhooksForm = (props) => {
  const {
    changesState,
    handleChangesState
  } = props

  const [, t] = useLanguage()
  const { register } = useFormContext()

  return (
    <>
      <FormContainer>
        <h2>{t('WEBHOOKS', 'Webhooks')}</h2>
        <InputWrapper>
          <label>{t('WEBHOOK_NEW_ORDER', 'Webhook new order')}</label>
          <Input
            name='webhook_new_order'
            defaultValue={changesState?.webhook_new_order ?? ''}
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
            defaultValue={changesState?.webhook_cancel_request ?? ''}
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
            defaultValue={changesState?.webhook_order_status_changed ?? ''}
            onChange={e => handleChangesState('webhook_order_status_changed', e.target.value)}
            placeholder={t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed')}
            autoComplete='off'
          />
        </InputWrapper>
      </FormContainer>
    </>
  )
}
