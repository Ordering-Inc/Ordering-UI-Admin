import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select'
import { Option } from './styles'

export const WebhookDelaySelector = (props) => {
  const {
    defaultValue,
    handleChangeDelay
  } = props

  const [, t] = useLanguage()

  const delayOptions = [
    { value: '0', content: <Option>0 {t('MINUTES', 'Minutes')}</Option> },
    { value: '300', content: <Option>5 {t('MINUTES', 'Minutes')}</Option> },
    { value: '600', content: <Option>10 {t('MINUTES', 'Minutes')}</Option> },
    { value: '900', content: <Option>15 {t('MINUTES', 'Minutes')}</Option> },
    { value: 'delivery_time', content: <Option>{t('DELIVERY_TIME', 'Delivery time')}</Option> },
    { value: 'pickup_time', content: <Option>{t('PICKUP_TIME', 'Pickup time')}</Option> }
  ]
  return (
    <>
      <Select
        options={delayOptions}
        defaultValue={defaultValue}
        onChange={delay => handleChangeDelay(delay)}
      />
    </>
  )
}
