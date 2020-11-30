import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import {
  Option
} from './styles'

export const DeliveryTypeSelector = (props) => {
  const {
    handleChangeDeliveryType
  } = props

  const [, t] = useLanguage()

  const deliveryTypes = [
    { value: 'default', content: <Option>{t('SELECT_A_DELIVERY_TYPE', 'Select a delivery type')}</Option>, disabled: 'disabled' },
    { value: 1, content: <Option>{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option>{t('PICKUP', 'Pickup')}</Option> },
    { value: 3, content: <Option>{t('EAT_IN', 'Eat in')}</Option> }
  ]

  return (
    <Select
      defaultValue='default'
      options={deliveryTypes}
      onChange={(deliveryType) => handleChangeDeliveryType(deliveryType)}
    />
  )
}
