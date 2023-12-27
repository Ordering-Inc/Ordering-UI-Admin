import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, useConfig, OrdersFilter as OrdersFilterController } from 'ordering-components-admin'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DriverMultiSelector } from '../DriverMultiSelector'
import { Input } from '../../../styles'
import {
  WrapperRow,
  Option
} from './styles'
import { useFilterValues } from '../../../contexts/FilterValuesContext'

const OrdersHeaderFilterGroupUI = (props) => {
  const {
    filterValues,
    driverGroupList,
    driversList,
    handleChangeDriver,
    handleChangeFilterValues,
    handleChangeExternalId,
    handleChangeGroupUnassigned
  } = props

  const [, t] = useLanguage()
  const [isShow, setIsShow] = useState(false)
  const metafieldRef = useRef()
  const [{ configs }] = useConfig()
  const configFilter = configs?.filter_order_options?.value.split('|').map(value =>(value)) || []

  const handleClickOutside = (e) => {
    if (!isShow) return
    const outsideCalendar = !metafieldRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShow])

  useEffect(() => {
    if (Object.keys(filterValues).length > 0) {
      handleChangeFilterValues(filterValues)
    }
  }, [filterValues])

  return (
    <>
      <WrapperRow>
        {configFilter.includes('external_id') && (
          <Input
            type='text'
            placeholder={t('EXTERNAL_ID', 'External Id')}
            autoComplete='off'
            value={filterValues?.externalId || ''}
            onChange={handleChangeExternalId}
          />
        )}
        {configFilter.includes('driver') && (
          <DriverMultiSelector
            drivers={driversList.drivers}
            filterValues={filterValues}
            handleChangeDriver={handleChangeDriver}
          />
        )}
        {configFilter.includes('driver_group_general') && (
          <DriversGroupTypeSelector
            driverGroupList={driverGroupList}
            handleChangeGroup={handleChangeGroupUnassigned}
            filterValues={filterValues.groupTypesUnassigned}
            title={t('DRIVER_GROUP_NOT_ASSIGNED', 'Driver group (general)')}
          />
        )}
      </WrapperRow>
    </>
  )
}

export const OrdersHeaderFilterGroup = (props) => {
  const [filterValues, { handleFilterValues }] = useFilterValues()

  const FilterControlProps = {
    ...props,
    UIComponent: OrdersHeaderFilterGroupUI,
    driverGroupList: props.driverGroupList,
    filterValues: filterValues,
    setFilterValues: handleFilterValues
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
