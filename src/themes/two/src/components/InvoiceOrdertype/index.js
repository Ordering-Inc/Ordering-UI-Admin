import React, { useEffect, useState } from 'react'
import { Checkbox } from '../../styles/Checkbox'
import { Button } from '../../styles/Buttons'
import {
  InvoiceOrderTypeContainer,
  CheckboxWrapper,
  ActionBtnWrapper
} from './styles'
import { useLanguage } from 'ordering-components-admin'

export const InvoiceOrderType = (props) => {
  const {
    handleChangeOrderTypes,
    orderTypes,
    invocing,
    handleChangeInvocing
  } = props
  const [, t] = useLanguage()
  const [orderStatus, setOrderStatus] = useState(null)
  const [invoiceState, setInvoiceState] = useState(null)

  const orderTypeList = [
    { value: 1, name: t('DELIVERY', 'Delivery'), enabled: false },
    { value: 2, name: t('PICKUP', 'Pickup'), enabled: false },
    { value: 3, name: t('EAT_IN', 'Eat in'), enabled: false },
    { value: 4, name: t('CURBSIDE', 'Curbside'), enabled: false },
    { value: 5, name: t('DRIVE_THRU', 'Drive thru'), enabled: false }
  ]

  const saveFormData = () => {
    handleChangeOrderTypes(orderStatus)
    handleChangeInvocing({ ...invocing, ...invoiceState })
  }

  const handleChangeCheckBox = (value, checked) => {
    const _orderStatus = orderStatus.map(item => {
      if (item.value === value) {
        return {
          ...item,
          enabled: checked
        }
      }
      return item
    })
    setOrderStatus(_orderStatus)
  }

  const handleChangeInvocingCheckBox = (key, checked) => {
    setInvoiceState({ ...invoiceState, [key]: checked })
  }

  useEffect(() => {
    if (orderTypes) setOrderStatus(orderTypes)
    else setOrderStatus(orderTypeList)
  }, [orderTypes])

  useEffect(() => {
    setInvoiceState(invocing)
  }, [invocing])

  return (
    <InvoiceOrderTypeContainer>
      {
        orderStatus?.map((item, i) => (
          <CheckboxWrapper key={i}>
            <Checkbox
              defaultChecked={item.enabled}
              id={item.value}
              onClick={(e) => handleChangeCheckBox(item.value, e.target.checked)}
            />
            <label htmlFor={item.value}>{item.name}</label>
          </CheckboxWrapper>
        ))
      }
      <CheckboxWrapper>
        <Checkbox
          defaultChecked={invoiceState?.cancelled}
          id='cancelled'
          onClick={(e) => handleChangeInvocingCheckBox('cancelled', e.target.checked)}
        />
        <label htmlFor='cancelled'>{t('INCLUDE_CANCELED_ORDERS', 'Include canceled orders')}</label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          defaultChecked={invoiceState?.discounts}
          id='discounts'
          onClick={(e) => handleChangeInvocingCheckBox('discounts', e.target.checked)}
        />
        <label htmlFor='discounts'>{t('INCLUDE_DISCOUNTS_BY_PLATFORM', 'Include discounts done by platform')}</label>
      </CheckboxWrapper>
      <ActionBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          onClick={saveFormData}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ActionBtnWrapper>
    </InvoiceOrderTypeContainer>
  )
}
