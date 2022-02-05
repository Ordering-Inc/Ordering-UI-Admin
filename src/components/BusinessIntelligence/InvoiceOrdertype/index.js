import React, { useEffect, useState } from 'react'
import { Button, Checkbox } from '../../../styles'
import { useLanguage, useToast, ToastType } from 'ordering-components-admin'
import {
  InvoiceOrderTypeContainer,
  CheckboxWrapper,
  ActionBtnWrapper
} from './styles'

export const InvoiceOrderType = (props) => {
  const {
    handleChangeOrderTypes,
    orderTypes,
    invocing,
    handleChangeInvocing
  } = props

  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [orderStatus, setOrderStatus] = useState(orderTypes)
  const [invoiceState, setInvoiceState] = useState(null)

  const saveFormData = () => {
    handleChangeOrderTypes(orderStatus)
    handleChangeInvocing(invoiceState)
    showToast(ToastType.Success, t('INVOICE_DATA_SAVED', 'Invoice data saved'))
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
