import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import { Option, PlaceholderTitle } from './styles'
import { useTheme } from 'styled-components'
import { MultiSelect } from '../../styles/MultiSelect'

export const OrderStatusTypeSelector = (props) => {
  const {
    defaultValue,
    deliveryType,
    mutiOrdersChange,
    orderId,
    type,
    orderControl,
    noPadding,
    noSelected,
    isFilterView,
    filterValues,
    handleUpdateOrderStatus,
    handleChangeMultiOrdersStatus,
    handleChangeOrderStatus
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOptionValue, setDefaultOptionValue] = useState('default')
  const [filteredOrderStatuses, setFilteredOrderStatuses] = useState([])

  const placeholder = <PlaceholderTitle>{t('SELECT_STATUS', 'Select Status')}</PlaceholderTitle>

  const orderStatuses = [
    {
      value: 'default',
      content: <Option noPadding={noPadding}><p>{t('CHANGE_STATUS', 'Change Status')}</p></Option>,
      disabled: true
    },
    {
      value: 'pending',
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.pending} alt='pending' />
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      ),
      disabled: true
    },
    {
      value: 0,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PENDING', 'Pending')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 13,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PREORDER', 'Preorder')}</p>
        </Option>
      ),
      color: 'primary',
      disabled: true
    },
    {
      value: 'inProgress',
      content: (
        <Option noPadding={noPadding}>
          <img src={theme?.images?.orderStatus?.inProgress} alt='progress' />
          <p>{t('IN_PROGRESS', 'In Progress')}</p>
        </Option>
      ),
      disabled: true
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
      value: 4,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('READY_FOR_PICKUP', 'Ready for pickup')}</p>
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
      value: 3,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by Business')}</p>
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
      value: 14,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('ORDER_NOT_READY', 'Order not ready')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 18,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 19,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 20,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 21,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business')}</p>
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
      disabled: true
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
      value: 15,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')}</p>
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
      disabled: true
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
    },
    {
      value: 16,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer')}</p>
        </Option>
      ),
      color: 'primary'
    },
    {
      value: 17,
      content: (
        <Option noPadding={noPadding}>
          <p>{t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer')}</p>
        </Option>
      ),
      color: 'primary'
    }
  ]

  const changeOrderStatus = (orderStatus) => {
    if (orderStatus !== 'default' && orderStatus !== defaultValue) {
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
      if (orderControl) {
        setFilteredOrderStatuses(orderStatuses)
      } else if (deliveryType === 1) {
        let _filteredOrderStatues = []
        let extractOrderStatus = []
        extractOrderStatus = orderStatuses.slice(0, 12)
        _filteredOrderStatues = [...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(15, 18)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(19, 26)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        setFilteredOrderStatuses(_filteredOrderStatues)
      } else {
        let _filteredOrderStatues = []
        let extractOrderStatus = []
        extractOrderStatus = orderStatuses.slice(0, 7)
        _filteredOrderStatues = [...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(10, 11)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(13, 17)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(18, 22)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        extractOrderStatus = orderStatuses.slice(25, 27)
        _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

        setFilteredOrderStatuses(_filteredOrderStatues)
      }
    } else {
      let _filteredOrderStatues = []
      let extractOrderStatus = []
      extractOrderStatus = orderStatuses.slice(2, 4)
      _filteredOrderStatues = [...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(5, 15)
      _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(16, 19)
      _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

      extractOrderStatus = orderStatuses.slice(20, 27)
      _filteredOrderStatues = [..._filteredOrderStatues, ...extractOrderStatus]

      setFilteredOrderStatuses(_filteredOrderStatues)
    }
  }, [])

  useEffect(() => {
    setDefaultOptionValue(defaultValue)
  }, [defaultValue])

  const filterChangeOrderStatus = (status) => {
    handleChangeOrderStatus(status)
  }

  const [defaultFilterValues, setDefaultFilterValues] = useState([])

  useEffect(() => {
    if (isFilterView) {
      const _defaultFilterValues = [...filterValues.statuses]
      setDefaultFilterValues(_defaultFilterValues)
    }
  }, [filterValues])

  if (isFilterView) {
    return (
      <MultiSelect
        optionInnerMaxHeight='50vh'
        placeholder={placeholder}
        defaultValue={defaultFilterValues}
        options={filteredOrderStatuses}
        onChange={(orderStatus) => filterChangeOrderStatus(orderStatus)}
      />
    )
  } else {
    return (
      <Select
        type={type}
        optionInnerMaxHeight='50vh'
        noSelected={noSelected}
        defaultValue={defaultOptionValue}
        options={filteredOrderStatuses}
        onChange={(orderStatus) => changeOrderStatus(orderStatus)}
        className='orderStatus'
      />
    )
  }
}
