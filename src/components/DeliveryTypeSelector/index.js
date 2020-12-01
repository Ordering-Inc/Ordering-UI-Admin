import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import {
  Option
} from './styles'

export const DeliveryTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeDeliveryType
  } = props

  const [, t] = useLanguage()

  const deliveryTypes = [
    { value: 'default', content: <Option>{t('SELECT_A_DELIVERY_TYPE', 'Select a delivery type')}</Option> },
    { value: 1, content: <Option>{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option>{t('PICKUP', 'Pickup')}</Option> },
    { value: 3, content: <Option>{t('EAT_IN', 'Eat in')}</Option> }
  ]

  const changeDeliveryType = (deliveryType) => {
    if (deliveryType === 'default') {
      handleChangeDeliveryType(null)
    } else {
      handleChangeDeliveryType(deliveryType)
    }
  }

  return (
    <Select
      defaultValue={filterValues.deliveryType || 'default'}
      options={deliveryTypes}
      onChange={(deliveryType) => changeDeliveryType(deliveryType)}
    />
  )
}
