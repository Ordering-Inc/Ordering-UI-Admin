import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import { Option } from './styles'
import { useTheme } from 'styled-components'

export const OrderStatusTypeSelector = (props) => {
  const {
    defaultValue,
    mutiOrdersChange,
    orderId,
    preOrder,
    pendingOrder,
    type,
    noPadding,
    noSelected,
    isFilterView,
    filterValues,
    ordersStatusSelected,
    handleUpdateOrderStatus,
    handleChangeMultiOrdersStatus,
    handleChangeOrderStatus
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOptionValue, setDefaultOptionValue] = useState(defaultValue)
  const [filteredOrderStatuses, setFilteredOrderStatuses] = useState([])

  const orderStatuses = [
    {
      value: 'default',
      content: <Option noPadding={noPadding}><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>,
      disabled: 'disabled'
    },
    {
      value: 0,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.pending} alt='pending' />
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      )
    },
    {
      value: 'pending',
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PENDING_ORDER', 'Pending Order')}</p>
        </Option>
      ),
      color: 'primary',
      disabled: 'disabled'
    },
    {
      value: 'preorder',
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PREORDER', 'Preorder')}</p>
        </Option>
      ),
      color: 'primary',
      disabled: 'disabled'
    },
    {
      value: 'inProgress',
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.inProgress} alt='progress' />
          <p>{t('IN_PROGRESS', 'In Progress')}</p>
        </Option>
      ),
      disabled: 'disabled'
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
      value: null,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.completed} alt='completed' />
          <p>{t('COMPLETED', 'Completed')}</p>
        </Option>
      ),
      disabled: 'disabled'
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
      value: null,
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.cancelled} alt='cancelled' />
          <p>{t('CACELLED', 'Cancelled')}</p>
        </Option>
      ),
      disabled: 'disabled'
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

  const changeOrderStatus = (orderStatus) => {
    if (isFilterView) {
      if (orderStatus === 'default') {
        handleChangeOrderStatus(null)
      } else {
        handleChangeOrderStatus(orderStatus)
      }
      return
    }
    if (orderStatus !== 'default' && orderStatus !== defaultValue) {
      if (orderStatus === 13) {
        orderStatus = 0
      }

      if (!mutiOrdersChange) {
        if (orderStatus === orderId) return
        handleUpdateOrderStatus({ id: orderId, newStatus: orderStatus })
      } else {
        handleChangeMultiOrdersStatus(orderStatus)
      }
    }
  }

  useEffect(() => {
    if (!isFilterView) {
      setFilteredOrderStatuses(orderStatuses)
    } else {
      const _defaultOption = [
        {
          value: 'default',
          content: <Option noPadding={noPadding}><p>{t('SELECT_STATUS', 'Select Status')}</p></Option>
        }
      ]
      let _filteredOrderStatues = []
      switch (ordersStatusSelected) {
        case 'pending':
          _filteredOrderStatues = orderStatuses.splice(1, 1)
          break
        case 'inProgress':
          _filteredOrderStatues = orderStatuses.splice(5, 5)
          break
        case 'completed':
          _filteredOrderStatues = orderStatuses.splice(11, 2)
          break
        case 'cancelled':
          _filteredOrderStatues = orderStatuses.splice(14, 5)
          break
      }
      const filteredOrderStatus = _defaultOption.concat(_filteredOrderStatues)
      setFilteredOrderStatuses(filteredOrderStatus)
    }
  }, [])

  useEffect(() => {
    if (isFilterView) {
      if (filterValues.status === null) {
        setDefaultOptionValue('default')
      } else {
        setDefaultOptionValue(filterValues.status)
      }
    }
  }, [filterValues])

  useEffect(() => {
    if (pendingOrder) {
      setDefaultOptionValue('pending')
    }

    if (preOrder) {
      setDefaultOptionValue('preorder')
    }
  }, [pendingOrder, preOrder])

  return (
    <Select
      type={type}
      noSelected={noSelected}
      defaultValue={defaultOptionValue}
      options={filteredOrderStatuses}
      onChange={(orderStatus) => changeOrderStatus(orderStatus)}
      selectName='orderStatus'
    />
  )
}
