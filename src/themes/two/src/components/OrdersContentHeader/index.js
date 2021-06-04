import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import { SearchBar } from '../../../../../components/SearchBar'
import { Modal } from '../../../../../components/Modal'
import { FilterGroupList } from '../../../../../components/FilterGroupList'
import { DeadlineSettingInterface } from '../../../../../components/DeadlineSettingInterface'
import MdcFilterOutline from '@meronex/icons/mdc/MdcFilterOutline'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
import { OrdersDashboardControls } from '../OrdersDashboardControls'

import {
  OrderContentHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  FilterButton,
  WrapperSearchAndFilter
} from './styles'

export const OrdersContentHeader = (props) => {
  const {
    isDisableControl,
    title,
    handleChangeSearch,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    filterValues,
    selectedOrderIds,
    handleChangeFilterValues,
    handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus
  } = props
  const [, t] = useLanguage()
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [filterApplied, setFilterApplied] = useState(false)

  const [deadlineSettingModalOpen, setDeadlineSettingModalOpen] = useState(false)

  const handleDeadlineSetting = () => {
    setDeadlineSettingModalOpen(false)
  }

  const handleCloseFilterModal = () => {
    setFilterModalOpen(false)
  }

  const closeModal = (e) => {
    if (e.code === 'Escape') setFilterModalOpen(false)
  }

  useEffect(() => {
    let _filterApplied = false
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false
    } else {
      _filterApplied = filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 ||
       filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.deliveryTypes.length > 0 ||
       filterValues.driverIds.length > 0 || filterValues.paymethodIds.length > 0 || filterValues.statuses.length > 0
    }
    setFilterApplied(_filterApplied)
  }, [filterValues])

  useEffect(() => {
    if (!filterModalOpen) return
    document.addEventListener('keydown', closeModal)
    return () => document.removeEventListener('keydown', closeModal)
  }, [filterModalOpen])

  return (
    <>
      <OrderContentHeaderContainer
        isDisableControl={isDisableControl}
      >
        <HeaderSection>
          <HeaderTitle>
            {title}
          </HeaderTitle>
        </HeaderSection>
        <TopRightSection>
          {!isDisableControl && (
            <OrdersDashboardControls
              selectedOrderNumber={selectedOrderIds?.length}
              filterValues={filterValues}
              handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              handleDeleteMultiOrders={handleDeleteMultiOrders}
            />
          )}
          <WrapperSearchAndFilter>
            <SearchBar
              isCustomLayout
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
            <FilterButton onClick={() => setFilterModalOpen(true)} name='filter-btn'>
              {filterApplied ? <MdcFilterOutline /> : <MdcFilterOff />}
            </FilterButton>
          </WrapperSearchAndFilter>
        </TopRightSection>
      </OrderContentHeaderContainer>

      <FilterGroupList
        open={filterModalOpen}
        handleCloseFilterModal={handleCloseFilterModal}
        driverGroupList={driverGroupList}
        driversList={driversList}
        paymethodsList={paymethodsList}
        businessesList={businessesList}
        handleChangeFilterValues={handleChangeFilterValues}
      />

      <Modal
        title={t('SETTINGS', 'Settings')}
        width='50%'
        padding='30px'
        open={deadlineSettingModalOpen}
        onClose={() => setDeadlineSettingModalOpen(false)}
        acceptText={t('ACCEPT', 'Accept')}
        onAccept={() => handleDeadlineSetting()}
      >
        <DeadlineSettingInterface />
      </Modal>
    </>
  )
}
