import React from 'react'
import { useLanguage } from 'ordering-components'
import { OrdersFilter as OrdersFilterController } from '../OrdersFilterController'
import { Modal } from '../Modal'
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
    open,
    handleCloseFilterModal,
    filterValues,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusSelected,
    handleChangeGroup,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate,
    handleChangeBusinesses,
    handleChangeDriver,
    handleChangeCity,
    handleChangeOrderStatus,
    handleChangeDeliveryType,
    handleChangePaymethodType,
    handleResetFilterValues,
    handleChangeFilterValues
  } = props

  const [, t] = useLanguage()

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  return (
    <Modal
      title={t('FILTER', 'Filter')}
      width='70%'
      padding='30px'
      open={open}
      onClose={() => handleCloseFilterModal(false)}
      acceptText={t('ACCEPT', 'Accept')}
      onAccept={() => handleAcceptFilter()}
      cancelText={t('CLEAR', 'Clear')}
      onCancel={() => handleClearFilter()}
    >
      <FilterGroupListContainer>
        <GroupTypeSelector
          handleChangeGroup={handleChangeGroup}
          filterValues={filterValues}
        />
        <DateTypeSelector
          filterValues={filterValues}
          handleChangeDateType={handleChangeDateType}
          handleChangeFromDate={handleChangeFromDate}
          handleChangeEndDate={handleChangeEndDate}
        />
        <BusinessesSelector
          filterValues={filterValues}
          businessesList={businessesList}
          handleChangeBusinesses={handleChangeBusinesses}
        />
        <DriverSelector
          isPhoneView
          isFilterView
          drivers={driversList.drivers}
          filterValues={filterValues}
          handleChangeDriver={handleChangeDriver}
        />
        <CitySelector
          filterValues={filterValues}
          handleChangeCity={handleChangeCity}
        />
        <OrderStatusTypeSelector
          isFilterView
          ordersStatusSelected={ordersStatusSelected}
          filterValues={filterValues}
          handleChangeOrderStatus={handleChangeOrderStatus}
        />
        <DeliveryTypeSelector
          filterValues={filterValues}
          handleChangeDeliveryType={handleChangeDeliveryType}
        />
        <PaymethodTypeSelector
          paymethodsList={paymethodsList}
          filterValues={filterValues}
          handleChangePaymethodType={handleChangePaymethodType}
        />
      </FilterGroupListContainer>
    </Modal>
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
