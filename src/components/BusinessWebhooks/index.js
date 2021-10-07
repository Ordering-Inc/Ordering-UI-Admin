import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessWebhooks as BusinessWebhooksController } from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { Select } from '../../styles/Select'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { Trash } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import { useForm } from 'react-hook-form'
import {
  Title,
  WebhooksContainer,
  WebhookAddForm,
  WebhookAddContainer,
  UrlInputWrapper,
  HookSelectWrapper,
  DelaySelectWrapper
} from './styles'

const BusinessWebhooksUI = (props) => {
  const {
    business,
    handleChangeSelect,
    handleChangeInput,
    hookFormState,
    handleUpdateAddClick,
    handleDeleteWebhook,
    handleChangeDelay
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const webhookList = [
    { value: '', content: t('SELECT_HOOK', 'Select a hook') },
    { value: 'orders_register', content: t('ORDERS_REGISTER') },
    { value: 'orders_status_updated', content: t('ORDERS_STATUS_UPDATED') },
    { value: 'orders_update_driver', content: t('ORDERS_UPDATE_DRIVER') },
    { value: 'orders_pending', content: t('ORDERS_PENDING') },
    { value: 'orders_completed', content: t('ORDERS_COMPLETED') },
    { value: 'orders_rejected', content: t('ORDERS_REJECTED') },
    { value: 'orders_rejected_business', content: t('ORDERS_REJECTED_BUSINESS') },
    { value: 'orders_rejected_driver', content: t('ORDERS_REJECTED_DRIVER') },
    { value: 'orders_accepted_business', content: t('ORDERS_ACCEPTED_BUSINESS') },
    { value: 'orders_accepted_driver', content: t('ORDERS_ACCEPTED_DRIVER') },
    { value: 'orders_pickup_completed_driver', content: t('ORDERS_PICKUP_COMPLETED_DRIVER') },
    { value: 'orders_pickup_failed_driver', content: t('ORDERS_PICKUP_FAILED_DRIVER') },
    { value: 'orders_delivery_completed_driver', content: t('ORDERS_DELIVERY_COMPLETED_DRIVER') },
    { value: 'orders_delivery_failed_driver', content: t('ORDERS_DELIVERY_FAILED_DRIVER') }

  ]
  const timeList = [
    { value: '', content: t('SELECT_DELAY', 'Select a delay') },
    { value: '0', content: t('IMMEDIATELY', 'Immediately') },
    { value: 'delivery_time', content: t('DELIVERY_TIME', 'Delivery time') },
    { value: 'pickup_time', content: t('PICKUP_TIME', 'Pickup time') },
    { value: '300', content: `5 ${t('MINUTES', 'Minutes')}` },
    { value: '600', content: `10 ${t('MINUTES', 'Minutes')}` },
    { value: '900', content: `15 ${t('MINUTES', 'Minutes')}` }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (Object.keys(hookFormState?.changes).length > 0) {
      console.log('ddd')
      handleUpdateAddClick()
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (hookFormState?.result.error) {
      setAlertState({
        open: true,
        content: hookFormState?.result?.result
      })
    }
  }, [hookFormState?.result])

  return (
    <>
      <WebhooksContainer>
        <Title>{t('WEBHOOKS', 'WEbhooks')}</Title>
        {
          business?.webhooks?.length > 0 && business?.webhooks.map((webhook, i) => (
            <WebhookAddContainer key={i}>
              <HookSelectWrapper inActive>
                <Select
                  defaultValue={webhook?.hook}
                  options={webhookList}
                  onChange={(value) => handleChangeSelect(value, 'hook')}
                />
              </HookSelectWrapper>
              <UrlInputWrapper inActive>
                <input
                  type='text'
                  name='url'
                  defaultValue={webhook?.url || ''}
                />
              </UrlInputWrapper>
              <DelaySelectWrapper>
                <Select
                  defaultValue={webhook?.delay ?? ''}
                  options={timeList}
                  onChange={(value) => handleChangeDelay(value, webhook)}
                  notAsync
                />
              </DelaySelectWrapper>

              <IconButton
                color='black'
                onClick={() => handleDeleteWebhook(webhook.id)}
              >
                <Trash />
              </IconButton>
            </WebhookAddContainer>
          ))
        }
        <WebhookAddForm onSubmit={handleSubmit(onSubmit)}>
          <WebhookAddContainer>
            <HookSelectWrapper>
              <Select
                defaultValue={hookFormState?.changes?.hook || ''}
                options={webhookList}
                onChange={(value) => handleChangeSelect(value, 'hook')}
              />
            </HookSelectWrapper>
            <UrlInputWrapper>
              <input
                type='text'
                name='url'
                value={hookFormState?.changes?.url || ''}
                onChange={(e) => handleChangeInput(e)}
                ref={register({
                  required: t(
                    'VALIDATION_ERROR_REQUIRED',
                    'Value is required'
                  ).replace('_attribute_', t('URL', 'Url'))
                })}
              />
            </UrlInputWrapper>
            <DelaySelectWrapper>
              <Select
                defaultValue={hookFormState?.changes?.delay || ''}
                options={timeList}
                onChange={(value) => handleChangeSelect(value, 'delay')}
              />
            </DelaySelectWrapper>

            <IconButton
              color='primary'
              type='submit'
            >
              <BsPlusSquare />
            </IconButton>
          </WebhookAddContainer>
        </WebhookAddForm>
      </WebhooksContainer>
      <Alert
        title={t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessWebhooks = (props) => {
  const businessWebhooksProps = {
    ...props,
    asDashboard: true,
    UIComponent: BusinessWebhooksUI
  }
  return <BusinessWebhooksController {...businessWebhooksProps} />
}
