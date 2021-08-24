import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, DefaultSelect, Button } from '../../styles'
import { timezones } from '../../config/constants'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'

import {
  DetailsContainer,
  Header,
  FormContainer,
  GroupContainer,
  InputWrapper,
  SubTitle
} from './styles'

export const DriversCompanyDetailsForm = (props) => {
  const {
    driversCompany,
    changesState,
    actionState,
    handleChangesState,
    handleUpdateDriversCompany,
    handleAddDriversCompany
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const timezonesOptions = timezones.map(timezone => {
    return {
      value: timezone,
      content: timezone
    }
  })
  const priorityOptions = [
    { value: -1, content: t('LOW', 'Low') },
    { value: 0, content: t('NORMAL', 'Normal') },
    { value: 1, content: t('HIGH', 'High') },
    { value: 2, content: t('URGENT', 'Urgent') }
  ]

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
    driversCompany ? handleUpdateDriversCompany(driversCompany.id, changesState) : handleAddDriversCompany()
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
    <DetailsContainer>
      <Header>
        <h1>{t('CITY_SETTINGS', 'City settings')}</h1>
      </Header>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <GroupContainer>
          <InputWrapper>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              value={changesState?.name ?? driversCompany?.name ?? ''}
              onChange={e => handleChangesState('name', e.target.value)}
              placeholder={t('NAME', 'Name')}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Name is required'
                ).replace('_attribute_', t('NAME', 'Name'))
              })}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('LIMIT', 'Limit')}</label>
            <Input
              name='limit'
              value={changesState?.limit ?? driversCompany?.limit ?? ''}
              onChange={e => handleChangesState('limit', e.target.value)}
              placeholder={t('LIMIT', 'Limit')}
              autoComplete='off'
            />
          </InputWrapper>
        </GroupContainer>
        <GroupContainer>
          <InputWrapper>
            <label>{t('PRIORITY', 'Priority')}</label>
            <DefaultSelect
              placeholder={t('SELECT_PRIORITY', 'Select priority')}
              defaultValue={changesState?.priority ?? driversCompany?.priority}
              options={priorityOptions}
              onChange={val => handleChangesState('priority', val)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('TIMEZONE', 'Timezone')}</label>
            <DefaultSelect
              placeholder={t('SELECT_TIMEZONE', 'Select a timezone')}
              defaultValue={changesState?.timezone ?? driversCompany?.timezone}
              options={timezonesOptions}
              onChange={val => handleChangesState('timezone', val)}
              optionInnerMaxHeight='60vh'
            />
          </InputWrapper>
        </GroupContainer>
        <InputWrapper>
          <label>{t('ADDRESS', 'Address')}</label>
          <Input
            name='address'
            value={changesState?.address ?? driversCompany?.address ?? ''}
            placeholder={t('ADDRESS', 'Address')}
            onChange={e => handleChangesState('address', e.target.value)}
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('ADDRESS', 'Address'))
            })}
            autoComplete='off'
          />
        </InputWrapper>
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
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </DetailsContainer>
  )
}
