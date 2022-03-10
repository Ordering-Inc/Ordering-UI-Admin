import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../../styles/Inputs'
import { Alert } from '../../Shared'

import {
  BusinessEmailAndPhoneContainer,
  SectionTitle,
  FormControl,
  Label,
  OrdersAppPushContainer
} from './styles'

export const BusinessEmailAndPhone = (props) => {
  const {
    business,
    setFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  let timeout1 = null
  let timeout2 = null
  let timeout3 = null

  const saveEmailOrders = (email) => {
    clearTimeout(timeout1)
    timeout1 = setTimeout(() => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (email.trim() === '' || !re.test(email)) return
      setFormState({
        ...formState,
        changes: { email: email }
      })
    }, 500)
  }

  const saveBusinessTel = (phone) => {
    clearTimeout(timeout2)
    timeout2 = setTimeout(() => {
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
    }, 500)
  }

  const saveBusinessCel = (cellphone) => {
    clearTimeout(timeout3)
    timeout3 = setTimeout(() => {
      if (cellphone.length >= 10 || cellphone.length === 0) {
        setFormState({
          ...formState,
          changes: { cellphone: cellphone || '' }
        })
      }
    }, 500)
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
        <SectionTitle>{t('EMAILS_NOTIFICATIONS', 'Email notifications')}</SectionTitle>
        <FormControl>
          <Label>{t('EMAIL_RECEIVE_ORDERS', 'Email to receive orders')}</Label>
          <Input
            type='text'
            defaultValue={business?.email ?? ''}
            placeholder={t('EMAIL_RECEIVE_ORDERS', 'Email to receive orders')}
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
      </BusinessEmailAndPhoneContainer>

      <OrdersAppPushContainer>
        <SectionTitle>{t('ORDERS_APP_PUSH')}</SectionTitle>
        <p>{t('ORDERS_APP_PUSH_DESC')}</p>
      </OrdersAppPushContainer>

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
