import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { OrdersFilterGroup } from '../OrdersFilterGroup'
import { Funnel, List as MenuIcon } from 'react-bootstrap-icons'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'

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
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

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
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
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
            <IconButton
              color='black'
              onClick={() => setFilterModalOpen(true)}
              name='filter-btn'
            >
              {filterApplied ? <Funnel /> : <MdcFilterOff />}
            </IconButton>
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
