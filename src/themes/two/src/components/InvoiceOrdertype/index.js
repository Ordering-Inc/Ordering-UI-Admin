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
    orderTypes
  } = props
  const [, t] = useLanguage()
  const [orderStatus, setOrderStatus] = useState(null)

  const saveFormData = () => {
    handleChangeOrderTypes(orderStatus)
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

  useEffect(() => {
    if (orderTypes?.length > 0) setOrderStatus(orderTypes)
  }, [orderTypes])

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
