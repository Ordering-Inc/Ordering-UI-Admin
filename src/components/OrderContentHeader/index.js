import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'

import { SearchBar } from '../SearchBar'
import { Modal } from '../Modal'
// import { DeadlinesTypeSelector } from '../DeadlinesTypeSelector'
import { OrdersDashboardSwitch } from '../OrdersDashboardSwitch'
import { FilterGroupList } from '../FilterGroupList'
import { DeadlineSettingInterface } from '../DeadlineSettingInterface'

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
    active,
    handleChangeSearch,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusSelected,
    handleChangeFilterValues
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [filterModalOpen, setFilterModalOpen] = useState(false)

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

  return (
    <>
      <OrderContentHeaderContainer>
        <HeaderSection>
          <HeaderTitle>
            {active === 'orders' ? t('ORDERS', 'orders') : t('DASHBOARD', 'Dashboard ')}
          </HeaderTitle>
          <WrapperHeaderRightSection>
            {/* <DeadlinesTypeSelector
              defaultValue={deadlineType}
              handleChangeDeadlineType={(deadlineType) => handleChangeDeadlineType(deadlineType)}
            /> */}
            <OrdersDashboardSwitch active={active} />
          </WrapperHeaderRightSection>
        </HeaderSection>
        <TopRightSection>
          <WrapperSearchAndFilter>
            <SearchBar
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
            <FilterButton onClick={() => setFilterModalOpen(true)} name='filter-btn'>
              <img src={theme?.images?.icons?.filter} alt='filter' />
            </FilterButton>
          </WrapperSearchAndFilter>

          <WrapperDeadlineAndSwitch>
            {/* <DeadlinesTypeSelector
              defaultValue={deadlineType}
              handleChangeDeadlineType={(deadlineType) => handleChangeDeadlineType(deadlineType)}
            /> */}
            <OrdersDashboardSwitch active={active} />
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
        ordersStatusSelected={ordersStatusSelected}
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
