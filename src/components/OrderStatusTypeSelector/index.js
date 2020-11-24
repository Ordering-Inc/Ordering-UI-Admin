import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import { Option } from './styles'
import { useTheme } from 'styled-components'

export const OrderStatusTypeSelector = (props) => {
  const {
    defaultValue,
    orderId,
    type,
    noPadding,
    handleUpdateOrdersStatus
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const orderStatuses = [
    {
      value: 'default',
      content: <Option noPadding={noPadding}><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>
    },
    {
      value: 20,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.pending} alt='pending' />
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      )
    },
    {
      value: 14,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PREORDER', 'Preorder')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 0,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PENDING_ORDER', 'Pending Order')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 30,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.inProgress} alt='progress' />
          <p>{t('IN_PROGRESS', 'In Progress')}</p>
        </Option>
      )
    },
    {
      value: 7,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 8,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 4,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('READY_FOR_PICKUP', 'Ready for pickup')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 9,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 3,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by Business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 40,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.completed} alt='completed' />
          <p>{t('COMPLETED', 'Completed')}</p>
        </Option>
      )
    },
    {
      value: 1,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('COMPLETED_BY_ADMIN', 'Completed by Admin')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 11,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery Completed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 50,
      content: (
        <Option noPadding={noPadding}>
          <p><img src={theme?.images?.orderStatus?.cancelled} alt='cancelled' /></p>
          {t('CACELLED', 'Cancelled')}
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 2,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECT_BY_BUSINESS', 'Reject by Admin')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 5,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECT_BY_BUSINESS', 'Reject by Business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 6,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('REJECT_BY_DRIVER', 'Reject by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 10,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PICKUP_FAILED_BY_DRIVER', 'Pickup Failed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 12,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by Driver')}</p>
        </Option>
      ),
      color: 'primary'
    }
  ]

  const handleChangeOrderStatus = (orderStatus) => {
    console.log(orderStatus)
    if (orderStatus !== 'default' && orderStatus !== 20 && orderStatus !== 30 && orderStatus !== 40 && orderStatus !== 50) {
      handleUpdateOrdersStatus({ ids: orderId, status: orderStatus })
    }
  }

  return (
    <Select
      type={type}
      defaultValue={defaultValue}
      options={orderStatuses}
      onChange={(orderStatus) => handleChangeOrderStatus(orderStatus)}
    />
  )
}
