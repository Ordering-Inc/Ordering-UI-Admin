import React, { useState } from 'react'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { BusinessListingHeader } from '../BusinessListingHeader'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import BsGrid from '@meronex/icons/bs/BsGrid'
import BsViewList from '@meronex/icons/bs/BsViewList'

import {
  BusinessListingContainer,
  ViewContainer,
  WrapperView,
  ViewMethodButton
} from './styles'

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

  const [viewMethod, setViewMethod] = useState('list')

  return (
    <BusinessListingContainer>
      <BusinessListingHeader
        searchValue={searchValue}
        onSearch={onSearch}
      />
      <ViewContainer>
        <BusinessActiveStateFilter
          selectedBusinessActiveState={selectedBusinessActiveState}
          handleChangeBusinessActiveState={handleChangeBusinessActiveState}
        />
        <WrapperView>
          <ViewMethodButton
            active={viewMethod === 'card'}
            onClick={() => setViewMethod('card')}
          >
            <BsGrid />
          </ViewMethodButton>
          <ViewMethodButton
            active={viewMethod === 'list'}
            onClick={() => setViewMethod('list')}
          >
            <BsViewList />
          </ViewMethodButton>
        </WrapperView>
      </ViewContainer>
      <BusinessTypeFilter
        businessTypes={props.businessTypes}
        defaultBusinessType={props.defaultBusinessType}
        handleChangeBusinessType={handleChangeBusinessType}
      />
      <BusinessList
        viewMethod={viewMethod}
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
