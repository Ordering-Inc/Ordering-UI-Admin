import React, { useEffect, useRef } from 'react'
import { useLanguage, OpenCartFilter as OpenCartFilterController } from 'ordering-components-admin'
import { BusinessesSelector } from '../BusinessesSelector'
import { CitySelector } from '../CitySelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { Modal } from '../../Shared'
import { Button, Input } from '../../../styles'

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

  const contentEndRef = useRef()

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
    handleCloseFilterModal()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  const scrollDown = (e) => {
    if (!e.target.closest('.ordering-calendar-btn')) return

    const el = document.querySelector('.dialog-inner')
    if (el?.scrollHeight > el?.clientHeight) {
      const top = contentEndRef.current.offsetTop
      el.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    window.addEventListener('click', scrollDown)
    return () => window.removeEventListener('click', scrollDown)
  }, [])

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
      <div ref={contentEndRef} />
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
