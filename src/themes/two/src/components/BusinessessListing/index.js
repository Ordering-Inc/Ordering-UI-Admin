import React from 'react'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { BusinessListingHeader } from '../BusinessListingHeader'
import {
  BusinessListingContainer
} from './styles'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'

const BusinessessListingUI = (props) => {
  const {
    businessList,
    pagination,
    searchValue,
    selectedBusinessActiveState,
    handleChangeBusinessActiveState,
    handleChangeBusinessType,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness,
    onSearch
  } = props

  return (
    <BusinessListingContainer>
      <BusinessListingHeader
        searchValue={searchValue}
        onSearch={onSearch}
      />
      <BusinessActiveStateFilter
        selectedBusinessActiveState={selectedBusinessActiveState}
        handleChangeBusinessActiveState={handleChangeBusinessActiveState}
      />
      <BusinessTypeFilter
        businessTypes={props.businessTypes}
        defaultBusinessType={props.defaultBusinessType}
        handleChangeBusinessType={handleChangeBusinessType}
      />
      <BusinessList
        businessList={businessList}
        pagination={pagination}
        loadMoreBusinesses={loadMoreBusinesses}
        handleSucessRemoveBusiness={handleSucessRemoveBusiness}
        handleSucessAddBusiness={handleSucessAddBusiness}
      />
    </BusinessListingContainer>
  )
}

export const BusinessessListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessessListingUI,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  }
  return (
    <BusinessListController {...businessListingProps} />
  )
}
