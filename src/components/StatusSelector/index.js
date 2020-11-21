import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import { PlaceholderTitle, Option } from './styles'

export const StatusSelector = (props) => {
  const { handleChangeStatus } = props

  const [, t] = useLanguage()

  const statusTypes = [
    { value: 15, content: <Option>{t('PENDING', 'Pending')}</Option> },
    { value: 0, content: <Option>{t('PREORDER', 'Preorder')}</Option> },
    {
      value: 1,
      content: <Option>{t('PENDING_ORDER', 'Pending Order')}</Option>
    },
    { value: 20, content: <Option>{t('IN_PROGRESS', 'In Progress')}</Option> },
    {
      value: 2,
      content: (
        <Option>{t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')}</Option>
      )
    },
    {
      value: 3,
      content: <Option>{t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')}</Option>
    },
    {
      value: 4,
      content: (
        <Option>
          {t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by Business')}
        </Option>
      )
    },
    { value: 30, content: <Option>{t('COMPLETED', 'Completed')}</Option> },
    {
      value: 5,
      content: <Option>{t('COMPLETED_BY_ADMIN', 'Completed by Admin')}</Option>
    },
    {
      value: 6,
      content: (
        <Option>
          {t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver')}
        </Option>
      )
    },
    { value: 40, content: <Option>{t('CANCELLED', 'Cancelled')}</Option> },
    {
      value: 7,
      content: <Option>{t('REJECT_BY_ADMIN', 'Reject by Admin')}</Option>
    },
    {
      value: 8,
      content: <Option>{t('REJECT_BY_BUSINESS', 'Reject by Business')}</Option>
    },
    {
      value: 9,
      content: <Option>{t('REJECT_BY_DRIVER', 'Reject by Driver')}</Option>
    },
    {
      value: 10,
      content: (
        <Option>
          {t('PICKUP_FAILED_BY_DRIVER', 'Pickup Failed by Driver')}
        </Option>
      )
    },
    {
      value: 11,
      content: (
        <Option>
          {t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver')}
        </Option>
      )
    }
  ]

  const placeholder = (
    <PlaceholderTitle>{t('STATUS', 'Status')}</PlaceholderTitle>
  )

  return (
    <Select
      placeholder={placeholder}
      options={statusTypes}
      onChange={(status) => handleChangeStatus(status)}
    />
  )
}
