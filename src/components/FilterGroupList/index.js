import React from 'react'
import { useLanguage, OrdersFilter as OrdersFilterController } from 'ordering-components'
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
  FilterGroupListContainer,
  WrapperRow
} from './styles'

const FilterGroupListUI = (props) => {
  const {
    open,
    handleCloseFilterModal,
    filterValues,
    singleDriverIds,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
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
    handleChangeFilterValues,
    handleChangeIsPendingOrder,
    handleChangeIsPreOrder
  } = props

  const [, t] = useLanguage()

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
    handleCloseFilterModal()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  return (
    <Modal
      title={t('FILTER', 'Filter')}
      width='80%'
      padding='30px'
      open={open}
      onClose={() => handleCloseFilterModal()}
      acceptText={t('ACCEPT', 'Accept')}
      onAccept={() => handleAcceptFilter()}
      cancelText={t('CLEAR', 'Clear')}
      onCancel={() => handleClearFilter()}
    >
      <FilterGroupListContainer className='filter-modal'>
        <WrapperRow>
          <GroupTypeSelector
            driverGroupList={driverGroupList}
            handleChangeGroup={handleChangeGroup}
            filterValues={filterValues}
          />
          <DateTypeSelector
            filterValues={filterValues}
            handleChangeDateType={handleChangeDateType}
            handleChangeFromDate={handleChangeFromDate}
            handleChangeEndDate={handleChangeEndDate}
          />
        </WrapperRow>
        <WrapperRow>
          <BusinessesSelector
            filterValues={filterValues}
            businessesList={businessesList}
            handleChangeBusinesses={handleChangeBusinesses}
          />
          <DriverSelector
            isFilterView
            drivers={driversList.drivers}
            singleDriverIds={singleDriverIds}
            handleChangeDriver={handleChangeDriver}
          />
        </WrapperRow>
        <CitySelector
          filterValues={filterValues}
          handleChangeCity={handleChangeCity}
        />
        <OrderStatusTypeSelector
          isFilterView
          filterValues={filterValues}
          handleChangeOrderStatus={handleChangeOrderStatus}
          handleChangeIsPendingOrder={handleChangeIsPendingOrder}
          handleChangeIsPreOrder={handleChangeIsPreOrder}
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
    UIComponent: FilterGroupListUI,
    driverGroupList: props.driverGroupList
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
