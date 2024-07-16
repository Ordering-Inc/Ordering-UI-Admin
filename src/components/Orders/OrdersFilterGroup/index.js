import React, { useState, useEffect, useRef } from 'react'
import { PlusCircle, Trash3, Funnel } from 'react-bootstrap-icons'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
import TiWarningOutline from '@meronex/icons/ti/TiWarningOutline'
import { useLanguage, useConfig, OrdersFilter as OrdersFilterController } from 'ordering-components-admin'
import { BusinessesSelector } from '../BusinessesSelector'
import { DriversGroupTypeSelector } from '../DriversGroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { DriverMultiSelector } from '../DriverMultiSelector'
import { CitySelector, Modal } from '../../Shared'
// import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymethodTypeSelector } from '../PaymethodTypeSelector'
import { CountryFilter } from '../CountryFilter'
import { Button, IconButton, Input, LinkButton } from '../../../styles'
import { CurrencyFilter } from '../CurrencyFilter'
import { AdminsSelector } from '../AdminsSelector'
import { getUniqueId } from '../../../utils'
import { Select } from '../../../styles/Select/FirstSelect'
import { useFilterValues } from '../../../contexts/FilterValuesContext'

import {
  FilterGroupListContainer,
  WrapperRow,
  // MultiSelectContainer,
  ButtonGroup,
  AddInputWrapper,
  AddMetaFiled,
  SelectWrapper,
  Option,
  WarningMessage
} from './styles'
import { LogisticStatusDot } from '../OrdersTable/styles'

const OrdersFilterGroupUI = (props) => {
  const {
    isLateralBar,
    filterModalOpen,
    setFilterModalOpen,
    searchValue,
    handleChangeSearch,
    filterValues,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    adminsList,
    handleChangeGroup,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate,
    handleChangeBusinesses,
    handleChangeDriver,
    handleChangeCity,
    // handleChangeOrderStatus,
    handleChangeDeliveryType,
    handleChangePaymethodType,
    handleResetFilterValues,
    handleChangeFilterValues,
    handleChangeOrderId,
    handleChangeCountryCode,
    handleChangeCurrency,
    handleChangeMetaFieldValue,
    handleAddMetaField,
    handleChangeAdmin,
    handleDeleteMetafield,
    handleChangeExternalId,
    handleChangeChildFilterValue,
    handleChangeGroupUnassigned,
    handleFilterValues,
    handleChangeOfferId
  } = props

  const [, t] = useLanguage()
  const [metafield, setMetaField] = useState({ key: '', value: '' })
  const [isShow, setIsShow] = useState(false)
  const [filterApplied, setFilterApplied] = useState(false)
  const metafieldRef = useRef()
  const [{ configs }] = useConfig()
  const [_filterValues] = useFilterValues()
  const configFilter = configs?.filter_order_options?.value.split('|').map(value => (value)) || []

  const logisticStatusList = [
    { value: 0, content: <Option>{t('PENDING', 'Pending')}<LogisticStatusDot status={0} /></Option> },
    { value: 1, content: <Option>{t('IN_PROGRESS', 'In progress')}<LogisticStatusDot status={1} /></Option> },
    { value: 2, content: <Option>{t('IN_QUEUE', 'In queue')}<LogisticStatusDot status={2} /></Option> },
    { value: 3, content: <Option>{t('EXPIRED', 'Expired')}<LogisticStatusDot status={3} /></Option> },
    { value: 4, content: <Option>{t('RESOLVED', 'Resolved')}<LogisticStatusDot status={4} /></Option> }
  ]

  const assignedFilterOptions = [
    { value: 0, content: <Option>{t('ASSIGNED', 'Assigned')}</Option> },
    { value: 1, content: <Option>{t('UNASSIGNED', 'Unassigned')}</Option> }
  ]

  const handleAcceptFilter = () => {
    handleChangeFilterValues(filterValues)
    handleFilterValues(filterValues)
    setFilterModalOpen(false)
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  const handleAddMetafieldValue = () => {
    handleAddMetaField({
      id: getUniqueId(),
      key: metafield?.key,
      value: metafield?.value
    })
    setMetaField({ key: '', value: '' })
    setIsShow(false)
  }

  const handleDeleteMetafieldValue = (id) => {
    handleDeleteMetafield(id)
  }

  const handleClearFilters = () => {
    if (searchValue) handleChangeSearch('')
    if (filterApplied) handleClearFilter()
  }

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
    if (Object.keys(_filterValues).length === 0) {
      _filterApplied = false
    } else {
      Object.values(_filterValues).forEach(value => {
        if (Array.isArray(value)) {
          if (value.length > 0) _filterApplied = true
        } else {
          if (value) _filterApplied = true
        }
      })
    }
    setFilterApplied(_filterApplied)
  }, [_filterValues])

  return (
    <>
      <IconButton
        color='black'
        onClick={() => setFilterModalOpen && setFilterModalOpen(true)}
        name='filter-btn'
      >
        {filterApplied ? <Funnel /> : <MdcFilterOff />}
      </IconButton>
      {(filterApplied || !!searchValue) && (
        <WarningMessage isLateralBar={isLateralBar}>
          <TiWarningOutline />
          <span>{t('WARNING_FILTER_APPLIED', 'Filters applied. You may miss new orders.')}</span>
          <LinkButton onClick={() => handleClearFilters()}>{t('CLEAR_FILTERS', 'Clear filters')}</LinkButton>
        </WarningMessage>
      )}
      <Modal
        width='80%'
        padding='0px'
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
      >
        <FilterGroupListContainer className='filter-modal'>
          <h1>{t('FILTER', 'Filter')}</h1>
          <WrapperRow>
            <Input
              type='text'
              placeholder='ID'
              autoComplete='off'
              value={filterValues?.orderId || ''}
              onChange={(e) => handleChangeOrderId(e)}
            />
            <DateTypeSelector
              filterValues={filterValues}
              handleChangeDateType={handleChangeDateType}
              handleChangeFromDate={handleChangeFromDate}
              handleChangeEndDate={handleChangeEndDate}
            />
            {/* <Input
                type='text'
                placeholder={t('EXTERNAL_ID', 'External Id')}
                autoComplete='off'
                value={filterValues?.externalId || ''}
                onChange={handleChangeExternalId}
              /> */}
          </WrapperRow>
          <WrapperRow>
            <Input
              type='text'
              placeholder={t('CUSTOMER_NAME', 'Customer Name')}
              autoComplete='off'
              value={filterValues?.customerName || ''}
              onChange={(e) => handleChangeChildFilterValue({ customerName: e?.target?.value })}
            />
            <Input
              type='text'
              placeholder={t('CUSTOMER_LASTNAME', 'Customer Lastname')}
              autoComplete='off'
              value={filterValues?.customerLastname || ''}
              onChange={(e) => handleChangeChildFilterValue({ customerLastname: e?.target?.value })}
            />
          </WrapperRow>
          <WrapperRow>
            <Input
              type='text'
              placeholder={t('CUSTOMER_EMAIL', 'Customer Email')}
              autoComplete='off'
              value={filterValues?.customerEmail || ''}
              onChange={(e) => handleChangeChildFilterValue({ customerEmail: e?.target?.value })}
            />
            <Input
              type='text'
              placeholder={t('CUSTOMER_CELLPHONE', 'Customer Cellphone')}
              autoComplete='off'
              value={filterValues?.customerCellphone || ''}
              onChange={(e) => handleChangeChildFilterValue({ customerCellphone: e?.target?.value })}
            />
          </WrapperRow>
          <WrapperRow>
            <DriversGroupTypeSelector
              driverGroupList={driverGroupList}
              handleChangeGroup={handleChangeGroupUnassigned}
              filterValues={filterValues.groupTypesUnassigned}
              title={t('DRIVER_GROUP_ASSIGNED', 'Driver group (assigned)')}
            />
            <BusinessesSelector
              filterValues={filterValues}
              businessesList={businessesList}
              handleChangeBusinesses={handleChangeBusinesses}
            />
          </WrapperRow>
          {/* <WrapperRow>
            <BusinessesSelector
              filterValues={filterValues}
              businessesList={businessesList}
              handleChangeBusinesses={handleChangeBusinesses}
            />
            <DriverMultiSelector
              drivers={driversList.drivers}
              filterValues={filterValues}
              handleChangeDriver={handleChangeDriver}
            />
          </WrapperRow> */}
          <WrapperRow>
            <CountryFilter
              filterValues={filterValues}
              handleChangeCountryCode={handleChangeCountryCode}
            />
            <CitySelector
              cities={citiesList}
              filterValues={filterValues}
              handleChangeCity={handleChangeCity}
            />
            {/* <MultiSelectContainer>
              <OrderStatusTypeSelector
                isFilterView
                filterValues={filterValues}
                handleChangeOrderStatus={handleChangeOrderStatus}
              />
            </MultiSelectContainer> */}
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
          <WrapperRow>
            <CurrencyFilter
              filterValues={filterValues}
              handleChangeCurrency={handleChangeCurrency}
            />
            <SelectWrapper>
              <Select
                options={logisticStatusList}
                className='select'
                defaultValue={filterValues?.logisticStatus ?? ''}
                placeholder={t('SELECT_LOGISTIC_STATUS', 'Select a logistic status')}
                onChange={(value) => handleChangeChildFilterValue({ logisticStatus: value })}
              />
            </SelectWrapper>
          </WrapperRow>
          <WrapperRow>
            <Input
              type='text'
              placeholder={t('OFFER_ID', 'Offer id')}
              autoComplete='off'
              value={filterValues?.offerId || ''}
              onChange={(e) => handleChangeOfferId(e)}
            />
            <Input
              type='text'
              placeholder={t('COUPON', 'Coupon')}
              autoComplete='off'
              value={filterValues?.coupon || ''}
              onChange={(e) => handleChangeChildFilterValue({ coupon: e?.target?.value })}
            />
          </WrapperRow>
          <WrapperRow>
            <SelectWrapper>
              <Select
                options={assignedFilterOptions}
                className='select'
                defaultValue={filterValues?.assigned ?? ''}
                placeholder={t('SELECT_DRIVER_STATUS', 'Select a driver status')}
                onChange={(value) => handleChangeChildFilterValue({ assigned: value })}
              />
            </SelectWrapper>
            <AdminsSelector
              filterValues={filterValues}
              adminsList={adminsList}
              handleChangeAdmin={handleChangeAdmin}
            />
          </WrapperRow>
          {filterValues?.metafield.map(item => (
            <WrapperRow key={item.id}>
              <Input
                type='text'
                name='key'
                placeholder={t('METAFIELD_NAME', 'Metafield name')}
                autoComplete='off'
                value={item.key || ''}
                onChange={(e) => handleChangeMetaFieldValue(e, item.id)}
              />
              {item?.key && (
                <AddInputWrapper>
                  <Input
                    type='text'
                    name='value'
                    placeholder={t('METAFIELD_VALUE', 'Metafield value')}
                    autoComplete='off'
                    value={item?.value || ''}
                    onChange={(e) => handleChangeMetaFieldValue(e, item.id)}
                  />
                  <IconButton
                    color='black'
                    onClick={() => handleDeleteMetafieldValue(item.id)}
                  >
                    <Trash3 />
                  </IconButton>
                </AddInputWrapper>
              )}
            </WrapperRow>
          ))}
          {!isShow && (
            <AddMetaFiled onClick={() => setIsShow(true)}>{t('ADD_METAFIELD', 'Add a metafield')}</AddMetaFiled>
          )}
          {isShow && (
            <WrapperRow ref={metafieldRef}>
              <Input
                type='text'
                name='key'
                placeholder={t('METAFIELD_NAME', 'Metafield name')}
                autoComplete='off'
                value={metafield.key || ''}
                onChange={(e) => setMetaField({ ...metafield, key: e.target.value })}
              />
              {metafield?.key && (
                <AddInputWrapper>
                  <Input
                    type='text'
                    name='value'
                    placeholder={t('METAFIELD_VALUE', 'Metafield value')}
                    autoComplete='off'
                    value={metafield.value || ''}
                    onChange={(e) => setMetaField({ ...metafield, value: e.target.value })}
                  />
                  <IconButton
                    color='primary'
                    onClick={handleAddMetafieldValue}
                  >
                    <PlusCircle />
                  </IconButton>
                </AddInputWrapper>
              )}
            </WrapperRow>
          )}
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
    </>
  )
}

export const OrdersFilterGroup = (props) => {
  const [filterValues, { handleFilterValues }] = useFilterValues()
  const [savedFilterValues, setSavedFilterValues] = useState(filterValues)

  useEffect(() => {
    setSavedFilterValues(filterValues)
  }, [filterValues])

  const FilterControlProps = {
    ...props,
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList,
    filterValues: savedFilterValues,
    setFilterValues: setSavedFilterValues,
    handleFilterValues: handleFilterValues
  }
  return (
    <>
      <OrdersFilterController {...FilterControlProps} />
    </>
  )
}
