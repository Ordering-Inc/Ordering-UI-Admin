import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../../styles'
import {
  OrderTypeFilterContainer,
  OrderTypeFilterOption,
  OrderTypeName,
  FilterBtnWrapper
} from './styles'

export const ReportsOrderTypeFilter = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    onClose
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [orderTypeIds, setOrderTypeIds] = useState(null)

  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const defaultOrderTypes = [
    { value: 1, name: t('DELIVERY', 'Delivery'), enabled: true },
    { value: 2, name: t('PICKUP', 'Pickup'), enabled: true },
    { value: 3, name: t('EAT_IN', 'Eat in'), enabled: true },
    { value: 4, name: t('CURBSIDE', 'Curbside'), enabled: true },
    { value: 5, name: t('DRIVE_THRU', 'Drive thru'), enabled: true }
  ]

  const [orderTypes, setOrderTypes] = useState(
    defaultOrderTypes.filter(type => configTypes?.includes(type.value))
  )

  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setOrderTypeIds(null)
    } else {
      const _orderTypeIds = []
      for (const type of orderTypes) {
        _orderTypeIds.push(type.value)
      }
      setOrderTypeIds(_orderTypeIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  const handleChangeOrderTypeId = (id) => {
    const found = orderTypeIds?.find(typeId => typeId === id)
    if (found) {
      const _orderTypeIds = orderTypeIds?.filter(orderTypeId => orderTypeId !== id)
      setOrderTypeIds(_orderTypeIds)
      setIsAllCheck(false)
    } else {
      const _orderTypeIds = orderTypeIds ? [...orderTypeIds] : []
      _orderTypeIds.push(id)
      if (_orderTypeIds.length === orderTypes.length) setIsAllCheck(true)
      setOrderTypeIds(_orderTypeIds)
    }
  }

  const isCheckEnableSate = (id) => {
    const found = orderTypeIds?.find(typeId => typeId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  const handleClickFilterButton = () => {
    const _orderTypeIds = orderTypeIds ? [...orderTypeIds] : null
    handleChangeFilterList({ ...filterList, delivery_types_ids: _orderTypeIds })
    onClose && onClose()
  }

  useEffect(() => {
    const _orderTypeIds = orderTypes.reduce((prev, cur) => [...prev, cur.value], [])
    setOrderTypeIds([...filterList?.delivery_types_ids || _orderTypeIds])
    if (!filterList?.delivery_types_ids || filterList?.delivery_types_ids?.length === orderTypes.length) setIsAllCheck(true)
  }, [])

  return (
    <>
      <OrderTypeFilterContainer>
        <OrderTypeFilterOption
          onClick={handleChangeAllCheck}
        >
          {isAllCheck ? (
            <RiCheckboxFill className='fill' />
          ) : (
            <RiCheckboxBlankLine />
          )}
          <OrderTypeName>{t('ALL', 'All')}</OrderTypeName>
        </OrderTypeFilterOption>
        {orderTypes.map((type, i) => (
          <OrderTypeFilterOption
            key={i}
            onClick={() => handleChangeOrderTypeId(type?.value)}
          >
            {isCheckEnableSate(type.value) ? (
              <RiCheckboxFill className='fill' />
            ) : (
              <RiCheckboxBlankLine />
            )}
            <OrderTypeName>{type?.name}</OrderTypeName>
          </OrderTypeFilterOption>
        ))}
      </OrderTypeFilterContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}
