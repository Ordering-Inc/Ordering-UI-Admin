import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import {
  BusinessEmailAndPhoneContainer,
  FormControl,
  Label
} from './styles'

export const BusinessEmailAndPhone = (props) => {
  const {
    business,
    setFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const saveEmailOrders = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.trim() === '' || !re.test(email)) return
    setFormState({
      ...formState,
      changes: { email: email }
    })
  }

  const saveBusinessTel = (phone) => {
    if (phone.trim() === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('PHONE_REQUIRED')]
      })
      return
    }
    if (phone.length >= 7) {
      setFormState({
        ...formState,
        changes: { phone: phone }
      })
    }
  }

  const saveBusinessCel = (cellphone) => {
    if (cellphone.length >= 10 || cellphone.length === 0) {
      setFormState({
        ...formState,
        changes: { cellphone: cellphone || '' }
      })
    }
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  return (
    <>
      <BusinessEmailAndPhoneContainer>
        <FormControl>
          <Label>{t('EMAIL_RECEIVE_ORDERS')}</Label>
          <Input
            type='text'
            defaultValue={business?.email ?? ''}
            placeholder={t('EMAIL_RECEIVE_ORDERS')}
            onChange={(e) => saveEmailOrders(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Label>{t('PHONE_NUMBER')}</Label>
          <Input
            type='text'
            defaultValue={business?.phone ?? ''}
            placeholder={t('PHONE_NUMBER')}
            onChange={(e) => saveBusinessTel(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Label>{t('MOBILE_NUMBER')} ({t('OPTIONAL')})</Label>
          <Input
            type='text'
            defaultValue={business?.cellphone ?? ''}
            placeholder={t('MOBILE_NUMBER')}
            onChange={(e) => saveBusinessCel(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Label>{t('ORDERS_APP_PUSH')}</Label>
          <span className='info'>{t('ORDERS_APP_PUSH_DESC')}</span>
        </FormControl>
      </BusinessEmailAndPhoneContainer>
      <Alert
        title={t('EMAILS_AND_PHONES', 'Emails and phones')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
