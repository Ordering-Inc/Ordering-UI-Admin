import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessesSelector } from '../BusinessesSelector'
import { CitySelector } from '../CitySelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { Modal } from '../../Shared'
import { Button, Input } from '../../../styles'
import { OpenCartFilter as OpenCartFilterController } from './naked'

import {
  FilterGroupListContainer,
  WrapperRow,
  ButtonGroup
} from './styles'
import { CustomerSelector } from '../CustomerSelector'

const OpenCartsFilterGroupUI = (props) => {
  const {
    open,
    handleCloseFilterModal,
    filterValues,
    businessesList,
    citiesList,
    handleChangeDateRange,
    handleChangeBusinesses,
    handleChangeCity,
    handleResetFilterValues,
    handleChangeFilterValues,
    handleChangeCartId,
    handleChangeCustomers
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
            value={filterValues?.cartId || ''}
            onChange={(e) => handleChangeCartId(e)}
          />
        </WrapperRow>
        <WrapperRow>
          <BusinessesSelector
            filterValues={filterValues}
            businessesList={businessesList}
            handleChangeBusinesses={handleChangeBusinesses}
          />
          <CustomerSelector
            cartFilterValues={filterValues}
            handleChangeCustomers={handleChangeCustomers}
          />
        </WrapperRow>
        <WrapperRow className='city-filter'>
          <CitySelector
            cities={citiesList}
            filterValues={filterValues}
            handleChangeCity={handleChangeCity}
          />
          <DateTypeSelector
            handleChangeDateRange={handleChangeDateRange}
            filterValues={filterValues}
          />
        </WrapperRow>
        <ButtonGroup>
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleAcceptFilter()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            color='secundaryDark'
            borderRadius='8px'
            onClick={() => handleClearFilter()}
          >
            {t('CLEAR', 'Clear')}
          </Button>
        </ButtonGroup>
      </FilterGroupListContainer>
    </Modal>
  )
}

export const OpenCartsFilterGroup = (props) => {
  const openCartFilterGroupProps = {
    ...props,
    UIComponent: OpenCartsFilterGroupUI
  }

  return <OpenCartFilterController {...openCartFilterGroupProps} />
}
