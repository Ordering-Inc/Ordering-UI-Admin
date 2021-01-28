import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import { Option } from './styles'

export const PaymentTypeSelector = (props) => {
  const { handleChangePaymentType } = props

  const [, t] = useLanguage()

  const paymentTypes = [
    { value: 0, content: <Option>{t('PAYMENT', 'Payment')}</Option> },
    { value: 1, content: <Option>{t('CASH', 'Cash')}</Option> },
    { value: 2, content: <Option>{t('PAYPAL', 'Paypal')}</Option> }
  ]

  return (
    <Select
      defaultValue={0}
      options={paymentTypes}
      onChange={(paymentType) => handleChangePaymentType(paymentType)}
    />
  )
}
