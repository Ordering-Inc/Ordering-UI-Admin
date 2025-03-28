import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, useConfig, OrdersFilter as OrdersFilterController } from 'ordering-components-admin'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DriverMultiSelector } from '../DriverMultiSelector'
import { Input } from '../../../styles'
import {
  WrapperRow
} from './styles'
import { useFilterValues } from '../../../contexts/FilterValuesContext'
import { SearchBar } from '../../Shared'

const OrdersHeaderFilterGroupUI = (props) => {
  const {
    filterValues,
    driversList,
    handleChangeDriver,
    handleChangeFilterValues,
    handleChangeExternalId,
    handleChangeGroup,
    isSelectedOrders,
    assignableDriverGroupList,
    disableSocketRoomDriver
  } = props

  const [{ dictionary }] = useLanguage()
  const wrapperRef = useRef(null)
  const [{ configs, loading }] = useConfig()
  const [wrapperSize, setWrapperSize] = useState({ width: null, height: null })

  const configFilter = configs?.filter_order_options?.value.split('|').map(value => (value)) || []

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef?.current) {
        const divWidth = wrapperRef?.current?.offsetWidth
        const divHeight = wrapperRef?.current?.offsetHeight
        setWrapperSize({ width: divWidth, height: divHeight })
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => (window.removeEventListener('resize', handleResize))
  }, [])

  useEffect(() => {
    if (Object.keys(filterValues).length > 0) {
      handleChangeFilterValues(filterValues)
    }
  }, [filterValues])

  return (
    <>
      <WrapperRow ref={wrapperRef} wrapperWidth={wrapperSize.width} isSelectedOrders={isSelectedOrders}>
        {!loading && configFilter.includes('external_id') && (
          <SearchBar
            placeholder={dictionary?.EXTERNAL_ID ?? 'External Id'}
            onChange={handleChangeExternalId}
            search={filterValues?.externalId || ''}
            isCustomLayout
            hideSearchIcon
            lazyLoad
            CustomInput={Input}
            onSearch={(value) => handleChangeExternalId({ target: { value } })}
            customClass='external_id'
          />
        )}
        {!loading && configFilter.includes('driver') && (
          <DriverMultiSelector
            useDriversByProps
            driversList={driversList}
            filterValues={filterValues}
            handleChangeDriver={handleChangeDriver}
            disableSocketRoomDriver={disableSocketRoomDriver}
          />
        )}
        {!loading && configFilter.includes('driver_group') && assignableDriverGroupList && (
          <DriversGroupTypeSelector
            driverGroupList={assignableDriverGroupList}
            handleChangeGroup={handleChangeGroup}
            filterValues={filterValues.driverGroupBusinessIds}
            title={dictionary?.DRIVER_GROUP_ASSIGNABLE ?? 'Driver group (assignable)'}
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
