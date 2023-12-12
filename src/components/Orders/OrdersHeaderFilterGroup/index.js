import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, useConfig, OrdersFilter as OrdersFilterController } from 'ordering-components-admin'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DriverMultiSelector } from '../DriverMultiSelector'
import { Input } from '../../../styles'
import {
  WrapperRow,
  Option
} from './styles'

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
  const [filterApplied, setFilterApplied] = useState(false)
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
    let _filterApplied = false
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false
    } else {
      Object.values(filterValues).forEach(value => {
        if (Array.isArray(value)) {
          if (value.length > 0) _filterApplied = true
        } else {
          if (value) _filterApplied = true
        }
      })
      handleChangeFilterValues(filterValues)
    }
    setFilterApplied(_filterApplied)
  }, [filterValues])

  return (
    <>
        <WrapperRow>
        { configFilter.includes('external_id') && (
         <Input
              type='text'
              placeholder={t('EXTERNAL_ID', 'External Id')}
              autoComplete='off'
              value={filterValues?.externalId || ''}
              onChange={handleChangeExternalId}
            /> 
           )
       }
       { configFilter.includes('driver') && (
          <DriverMultiSelector
          drivers={driversList.drivers}
          filterValues={filterValues}
          handleChangeDriver={handleChangeDriver}
          />
         )
       }
       { configFilter.includes('driver_group_general') && (
            <DriversGroupTypeSelector
            driverGroupList={driverGroupList}
            handleChangeGroup={handleChangeGroupUnassigned}
            filterValues={filterValues.groupTypesUnassigned}
            title={t('DRIVER_GROUP_NOT_ASSIGNED', 'Driver group (general)')}
          />
        )
       }
       </WrapperRow>
    </>
  )
}

export const OrdersHeaderFilterGroup = (props) => {
  const FilterControlProps = {
    ...props,
    UIComponent: OrdersHeaderFilterGroupUI,
    driverGroupList: props.driverGroupList
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
