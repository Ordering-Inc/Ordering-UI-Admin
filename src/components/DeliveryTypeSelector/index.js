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
    { value: 0, content: <Option>{t('DELIVERY_TYPE', 'Delivery type')}</Option> },
    { value: 1, content: <Option>{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option>{t('PICKUP', 'Pickup')}</Option> }
  ]

  return (
    <Select
      defaultValue={0}
      options={deliveryTypes}
      onChange={(deliveryType) => handleChangeDeliveryType(deliveryType)}
    />
  )
}
