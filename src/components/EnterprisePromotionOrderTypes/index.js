import React from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { Button, Checkbox } from '../../styles'

import {
  OrderTypesContainer,
  OrderTypeItem
} from './styles'

export const EnterprisePromotionOrderTypes = (props) => {
  const {
    promotionState,
    formState,
    handleChangeItem,
    onClickDone
  } = props

  const [, t] = useLanguage()

  const [configState] = useConfig()
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []
  const orderTypes = [
    { value: 1, content: t('DELIVERY', 'Delivery') },
    { value: 2, content: t('PICKUP', 'Pickup') },
    { value: 3, content: t('EAT_IN', 'Eat in') },
    { value: 4, content: t('CURBSIDE', 'Curbside') },
    { value: 5, content: t('DRIVE_THRU', 'Drive thru') }
  ]

  const handleChangeOrderTypes = (checked, orderType) => {
    let orderTypes = []
    if (formState.changes?.order_types_allowed) {
      orderTypes = [...formState.changes?.order_types_allowed]
    } else {
      if (Array.isArray(promotionState.promotion?.order_types_allowed)) {
        orderTypes = [...promotionState.promotion?.order_types_allowed]
      }
    }
    if (checked) {
      orderTypes.push(orderType)
    } else {
      orderTypes = orderTypes.filter(value => value !== orderType)
    }
    handleChangeItem({ order_types_allowed: orderTypes })
  }

  const isDefaultChecked = (orderType) => {
    if (Array.isArray(promotionState.promotion?.order_types_allowed)) {
      if (promotionState.promotion?.order_types_allowed.includes(orderType)) return true
      else return false
    } else return false
  }

  const isChangesChecked = (orderType) => {
    const found = formState.changes?.order_types_allowed.find(value => value === orderType)
    if (found) return true
    else return false
  }

  return (
    <OrderTypesContainer>
      <h1>{t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')}</h1>
      {orderTypes.filter(type => configTypes?.includes(type.value)).map(orderType => (
        <OrderTypeItem
          key={orderType.value}
        >
          <Checkbox
            checked={
              formState.changes?.order_types_allowed
                ? isChangesChecked(orderType.value)
                : isDefaultChecked(orderType.value)
            }
            onChange={(e) => handleChangeOrderTypes(e.target.checked, orderType.value)}
          />
          <span>{orderType.content}</span>
        </OrderTypeItem>
      ))}
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </OrderTypesContainer>
  )
}
