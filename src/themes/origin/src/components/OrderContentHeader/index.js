import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import { SearchBar } from '../SearchBar'
import { Modal } from '../Modal'
// import { DeadlinesTypeSelector } from '../DeadlinesTypeSelector'
import { OrdersDashboardSwitch } from '../OrdersDashboardSwitch'
import { FilterGroupList } from '../FilterGroupList'
import { DeadlineSettingInterface } from '../DeadlineSettingInterface'
import MdcFilterOutline from '@meronex/icons/mdc/MdcFilterOutline'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'

import {
  OrderContentHeaderContainer,
  HeaderSection,
  WrapperHeaderRightSection,
  HeaderTitle,
  TopRightSection,
  FilterButton,
  WrapperDeadlineAndSwitch,
  WrapperSearchAndFilter
} from './styles'

export const OrderContentHeader = (props) => {
  const {
    activeSwitch,
    handleChangeSearch,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    filterValues,
    handleChangeFilterValues,
    handleSwitch
  } = props
  const [, t] = useLanguage()
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [filterApplied, setFilterApplied] = useState(false)

  const [deadlineSettingModalOpen, setDeadlineSettingModalOpen] = useState(false)
  // const [deadlineType, setDeadlineType] = useState(0)

  // const handleChangeDeadlineType = (deadlineType) => {
  //   setDeadlineType(deadlineType)

  //   if (deadlineType === 4) {
  //     setDeadlineSettingModalOpen(true)
  //   }
  // }

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
      <OrderContentHeaderContainer>
        <HeaderSection>
          <HeaderTitle>
            {activeSwitch?.orders && t('ORDERS', 'orders')}
            {activeSwitch?.deliveries && t('DASHBOARD', 'Dashboard')}
            {activeSwitch?.messages && t('MESSAGES', 'Messages')}
          </HeaderTitle>
          <WrapperHeaderRightSection>
            {/* <DeadlinesTypeSelector
              defaultValue={deadlineType}
              handleChangeDeadlineType={(deadlineType) => handleChangeDeadlineType(deadlineType)}
            /> */}
            <OrdersDashboardSwitch
              activeSwitch={activeSwitch}
              handleSwitch={handleSwitch}
            />
          </WrapperHeaderRightSection>
        </HeaderSection>
        <TopRightSection>
          <WrapperSearchAndFilter>
            <SearchBar
              lazyLoad
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
            <FilterButton onClick={() => setFilterModalOpen(true)} name='filter-btn'>
              {filterApplied ? <MdcFilterOutline /> : <MdcFilterOff />}
            </FilterButton>
          </WrapperSearchAndFilter>

          <WrapperDeadlineAndSwitch>
            {/* <DeadlinesTypeSelector
              defaultValue={deadlineType}
              handleChangeDeadlineType={(deadlineType) => handleChangeDeadlineType(deadlineType)}
            /> */}
            <OrdersDashboardSwitch
              activeSwitch={activeSwitch}
              handleSwitch={handleSwitch}
            />
          </WrapperDeadlineAndSwitch>
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
