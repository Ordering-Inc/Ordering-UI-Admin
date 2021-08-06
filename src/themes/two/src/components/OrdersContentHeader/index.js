import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { OrdersFilterGroup } from '../OrdersFilterGroup'
import { Funnel } from 'react-bootstrap-icons'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { IconButton as FilterButton } from '../../styles/Buttons'

import {
  OrderContentHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  WrapperSearchAndFilter
} from './styles'

export const OrdersContentHeader = (props) => {
  const {
    isDisableTitle,
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
  return (
    <>
      <OrderContentHeaderContainer
        isDisableControl={isDisableControl}
      >
        {!isDisableTitle && (
          <HeaderSection>
            <HeaderTitle>
              {title}
            </HeaderTitle>
          </HeaderSection>
        )}
        <TopRightSection>
          {!isDisableControl && (
            <OrdersDashboardControls
              selectedOrderNumber={selectedOrderIds?.length}
              filterValues={filterValues}
              handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              handleDeleteMultiOrders={handleDeleteMultiOrders}
            />
          )}
          <WrapperSearchAndFilter
            fullWidth={isDisableTitle && isDisableControl}
          >
            <SearchBar
              isCustomLayout
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
            <FilterButton
              color='black'
              onClick={() => setFilterModalOpen(true)}
              name='filter-btn'
            >
              {filterApplied ? <Funnel /> : <MdcFilterOff />}
            </FilterButton>
          </WrapperSearchAndFilter>
        </TopRightSection>
      </OrderContentHeaderContainer>

      <OrdersFilterGroup
        open={filterModalOpen}
        handleCloseFilterModal={() => setFilterModalOpen(false)}
        driverGroupList={driverGroupList}
        driversList={driversList}
        paymethodsList={paymethodsList}
        businessesList={businessesList}
        handleChangeFilterValues={handleChangeFilterValues}
      />
    </>
  )
}
