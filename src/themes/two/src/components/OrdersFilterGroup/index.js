import React from 'react'
import { useLanguage, OrdersFilter as OrdersFilterController } from 'ordering-components-admin'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { BusinessesSelector } from '../BusinessesSelector'
import { DriverSelector } from '../DriverSelector'
import { CitySelector } from '../CitySelector'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymethodTypeSelector } from '../PaymethodTypeSelector'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'

import {
  FilterGroupListContainer,
  WrapperRow,
  MultiSelectContainer,
  ButtonGroup
} from './styles'

const OrdersFilterGroupUI = (props) => {
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
    handleChangeOrderId
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
    >
      <FilterGroupListContainer className='filter-modal'>
        <WrapperRow>
          <Input
            type='text'
            placeholder='ID'
            autoComplete='off'
            value={filterValues?.orderId || ''}
            onChange={(e) => handleChangeOrderId(e)}
          />
        </WrapperRow>
        <WrapperRow>
          <DriversGroupTypeSelector
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
        <WrapperRow>
          <CitySelector
            filterValues={filterValues}
            handleChangeCity={handleChangeCity}
          />
          <MultiSelectContainer>
            <OrderStatusTypeSelector
              isFilterView
              filterValues={filterValues}
              handleChangeOrderStatus={handleChangeOrderStatus}
            />
          </MultiSelectContainer>
        </WrapperRow>
        <WrapperRow>
          <DeliveryTypeSelector
            filterValues={filterValues}
            handleChangeDeliveryType={handleChangeDeliveryType}
          />
          <PaymethodTypeSelector
            paymethodsList={paymethodsList}
            filterValues={filterValues}
            handleChangePaymethodType={handleChangePaymethodType}
          />
        </WrapperRow>
        <ButtonGroup>
          <Button
            color='primary'
            borderRadius='5px'
            onClick={() => handleAcceptFilter()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            color='secundary'
            borderRadius='5px'
            onClick={() => handleClearFilter()}
          >
            {t('CLEAR', 'Clear')}
          </Button>
        </ButtonGroup>
      </FilterGroupListContainer>
    </Modal>
  )
}

export const OrdersFilterGroup = (props) => {
  const FilterControlProps = {
    ...props,
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
