import React from 'react'
import { useLanguage, useConfig, OrderTypeControl } from 'ordering-components-admin'
import { DefaultSelect as Select } from '../../../../styles'

import {
  SelectWrapper,
  Option
} from './styles'

const OrderTypeSelectorUI = (props) => {
  const {
    typeSelected,
    defaultValue,
    orderTypes,
    handleChangeOrderType
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]

  return (
    <SelectWrapper>
      <p>{t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')}</p>
      <Select
        placeholder={<Option>{t('SELECT_DELIVERY_TYPE', 'Select delivery type')}</Option>}
        options={configTypes
          ? orderTypes.filter(type => configTypes?.includes(type.value))
          : orderTypes}
        defaultValue={defaultType || typeSelected || defaultValue}
        onChange={(orderType) => handleChangeOrderType(orderType)}
      />
    </SelectWrapper>
  )
}

export const OrderTypeSelector = (props) => {
  const [, t] = useLanguage()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: <Option>{t('DELIVERY', 'Delivery')}</Option>
      },
      {
        value: 2,
        content: <Option>{t('PICKUP', 'Pickup')}</Option>
      },
      {
        value: 3,
        content: <Option>{t('EAT_IN', 'Eat in')}</Option>
      },
      {
        value: 4,
        content: <Option>{t('CURBSIDE', 'Curbside')}</Option>
      },
      {
        value: 5,
        content: <Option>{t('DRIVE_THRU', 'Drive thru')}</Option>
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}
