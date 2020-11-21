import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import { Option } from './styles'
import { useTheme } from 'styled-components'

export const OrderStatusTypeSelector = (props) => {
  const {
    defaultValue,
    type,
    noPadding,
    handleChangeOrderStatusType
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const orderTypes = [
    {
      value: 60,
      content: <Option noPadding={noPadding}>{t('CHANGE_STATUS', 'Change Status')}</Option>
    },
    {
      value: 20,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.pending} alt='pending' />
          {t('PENDING', 'Pending')}
        </Option>
      )
    },
    {
      value: 14,
      content: (
        <Option noPadding={noPadding}>
          {t('PREORDER', 'Preorder')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 0,
      content: (
        <Option noPadding={noPadding}>
          {t('PENDING_ORDER', 'Pending Order')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 30,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.inProgress} alt='progress' />
          {t('IN_PROGRESS', 'In Progress')}
        </Option>
      )
    },
    {
      value: 7,
      content: (
        <Option noPadding={noPadding}>
          {t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 8,
      content: (
        <Option noPadding={noPadding}>
          {t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 3,
      content: (
        <Option noPadding={noPadding}>
          {t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by Business')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 40,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.completed} alt='completed' />
          {t('COMPLETED', 'Completed')}
        </Option>
      )
    },
    {
      value: 1,
      content: (
        <Option noPadding={noPadding}>
          {t('COMPLETED_BY_ADMIN', 'Completed by Admin')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 11,
      content: (
        <Option noPadding={noPadding}>
          {t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 50,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.cancelled} alt='cancelled' />
          {t('CACELLED', 'Cancelled')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 2,
      content: (
        <Option noPadding={noPadding}>
          {t('REJECT_BY_BUSINESS', 'Reject by Admin')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 5,
      content: (
        <Option noPadding={noPadding}>
          {t('REJECT_BY_BUSINESS', 'Reject by Business')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 6,
      content: (
        <Option noPadding={noPadding}>
          {t('REJECT_BY_DRIVER', 'Reject by Driver')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 10,
      content: (
        <Option noPadding={noPadding}>
          {t('PICKUP_FAILED_BY_DRIVER', 'Pickup Failed by Driver')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 12,
      content: (
        <Option noPadding={noPadding}>
          {t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver')}
        </Option>
      ),
      color: 'primary'
    }
  ]

  return (
    <Select
      type={type}
      defaultValue={defaultValue}
      options={orderTypes}
      onChange={(orderType) => handleChangeOrderStatusType(orderType)}
    />
  )
}
