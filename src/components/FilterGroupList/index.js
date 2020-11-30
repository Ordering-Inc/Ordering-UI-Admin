import React from 'react'
import { OrdersFilter as OrdersFilterController } from '../OrdersFilterController'
import { GroupTypeSelector } from '../GroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { BusinessesSelector } from '../BusinessesSelector'
import { DriverSelector } from '../DriverSelector'
import { CitySelector } from '../CitySelector'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymethodTypeSelector } from '../PaymethodTypeSelector'

import {
  FilterGroupListContainer
} from './styles'

const FilterGroupListUI = (props) => {
  const {
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusSelected,
    handleChangeGroup,
    handleChangeDateType,
    handleChangeBusinesses,
    handleChangeDriver,
    handleChangeCity,
    handleChangeOrderStatus,
    handleChangeDeliveryType,
    handleChangePaymethodType
  } = props

  return (
    <FilterGroupListContainer>
      <GroupTypeSelector
        handleChangeGroup={handleChangeGroup}
      />
      <DateTypeSelector
        handleChangeDateType={handleChangeDateType}
      />
      <BusinessesSelector
        handleChangeBusinesses={handleChangeBusinesses}
        businessesList={businessesList}
      />
      <DriverSelector
        isPhoneView
        isFilterView
        drivers={driversList.drivers}
        handleChangeDriver={handleChangeDriver}
      />
      <CitySelector
        handleChangeCity={handleChangeCity}
      />
      <OrderStatusTypeSelector
        modalFilter
        ordersStatusSelected={ordersStatusSelected}
        handleChangeOrderStatus={handleChangeOrderStatus}
      />
      <DeliveryTypeSelector
        handleChangeDeliveryType={handleChangeDeliveryType}
      />
      <PaymethodTypeSelector
        paymethodsList={paymethodsList}
        handleChangePaymethodType={handleChangePaymethodType}
      />
    </FilterGroupListContainer>
  )
}

export const FilterGroupList = (props) => {
  const FilterControlProps = {
    ...props,
    UIComponent: FilterGroupListUI
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
