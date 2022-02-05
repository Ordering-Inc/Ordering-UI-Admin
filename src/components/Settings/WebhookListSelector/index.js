import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select'
import { Option } from './styles'

export const WebhookListSelector = (props) => {
  const {
    defaultValue,
    handleChangeHook
  } = props

  const [, t] = useLanguage()

  const hookOptions = [
    { value: 'users_register', content: <Option>{t('USERS_REGISTER', 'New user')}</Option> },
    { value: 'orders_register', content: <Option>{t('NOTIFICATION_NEW_ORDER', 'New order')}</Option> },
    { value: 'orders_status_updated', content: <Option>{t('ORDERS_STATUS_UPDATED', 'Order status update')}</Option> },
    { value: 'orders_update_driver', content: <Option>{t('ORDERS_UPDATE_DRIVER', 'Order update by driver')}</Option> },
    { value: 'orders_pending', content: <Option>{t('ORDERS_PENDING', 'Order pending')}</Option> },
    { value: 'orders_completed', content: <Option>{t('TUTORIAL_ORDER_COMPLETED', 'Order completed')}</Option> },
    { value: 'orders_rejected', content: <Option>{t('ORDERS_REJECTED', 'Order rejected')}</Option> },
    { value: 'orders_rejected_business', content: <Option>{t('ORDERS_REJECTED_BUSINESS', 'Order rejected by business')}</Option> },
    { value: 'orders_rejected_driver', content: <Option>{t('ORDERS_REJECTED_DRIVER', 'Order rejected by driver')}</Option> },
    { value: 'orders_accepted_business', content: <Option>{t('ORDERS_ACCEPTED_BUSINESS', 'Order accepted by business')}</Option> },
    { value: 'orders_accepted_driver', content: <Option>{t('ORDERS_ACCEPTED_DRIVER', 'Order accepted by driver')}</Option> },
    { value: 'orders_pickup_completed_driver', content: <Option>{t('ORDERS_PICKUP_COMPLETED_DRIVER', 'Order pickup completed by driver')}</Option> },
    { value: 'orders_pickup_failed_driver', content: <Option>{t('ORDERS_PICKUP_FAILED_DRIVER', 'Order pickup failed by driver')}</Option> },
    { value: 'orders_delivery_completed_driver', content: <Option>{t('ORDERS_DELIVERY_COMPLETED_DRIVER', 'Order delivery completed by driver')}</Option> },
    { value: 'orders_delivery_failed_driver', content: <Option>{t('ORDERS_DELIVERY_FAILED_DRIVER', 'Order delivery failed by driver')}</Option> }
  ]

  const placeholder = <Option>{t('SELECT_HOOK', 'Select a hook')}</Option>

  return (
    <>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={hookOptions}
        onChange={hook => handleChangeHook(hook)}
      />
    </>
  )
}
