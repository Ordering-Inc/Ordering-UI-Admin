import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import {
  Option
} from './styles'

export const OrderBySelector = (props) => {
  const {
    defaultValue,
    setOrderBy
  } = props

  const [, t] = useLanguage()

  const selectTypes = [
    { value: 'id', content: <Option>{t('ORDER_NUMBER', 'Order number')}</Option> },
    { value: 'last_direct_message_at', content: <Option>{t('NEWEST', 'Newest')}</Option> }
  ]

  return (
    <Select
      defaultValue={defaultValue}
      options={selectTypes}
      onChange={(type) => setOrderBy(type)}
    />
  )
}
