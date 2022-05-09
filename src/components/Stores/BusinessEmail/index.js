import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../../styles/Inputs'
import { Alert } from '../../Shared'

import {
  BusinessEmailContainer,
  SectionTitle,
  FormControl,
  Label,
  OrdersAppPushContainer
} from './styles'

export const BusinessEmail = (props) => {
  const {
    business,
    setFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  let timeout1 = null

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

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  return (
    <>
      <BusinessEmailContainer>
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
      </BusinessEmailContainer>

      <OrdersAppPushContainer>
        <SectionTitle>{t('ORDERS_APP_PUSH')}</SectionTitle>
        <p>{t('ORDERS_APP_PUSH_DESC')}</p>
      </OrdersAppPushContainer>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
