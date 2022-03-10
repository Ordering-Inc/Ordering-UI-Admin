import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  BusinessNotificationsContainer,
  Title
} from './styles'
import { BusinessEmailAndPhone } from '../BusinessEmailAndPhone'
import { BusinessGprsPrinters } from '../BusinessGprsPrinters'

export const BusinessNotifications = (props) => {
  const {
    formState,
    handleUpdateBusinessClick
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  return (
    <BusinessNotificationsContainer>
      <Title>{t('NOTIFICATIONS', 'Notifications')}</Title>
      <BusinessEmailAndPhone {...props} />
      <BusinessGprsPrinters {...props} />
    </BusinessNotificationsContainer>
  )
}
