import React from 'react'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from './naked'
import { BusinessListingHeader } from '../BusinessListingHeader'
import {
  BusinessListingContainer
} from './styles'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'

const BusinessessListingUI = (props) => {
  const {
    businessList,
    selectedBusinessActiveState,
    handleChangeBusinessActiveState,
    handleChangeBusinessType
  } = props

  return (
    <BusinessListingContainer>
      <BusinessListingHeader />
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
      />
    </BusinessListingContainer>
  )
}

export const BusinessessListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessessListingUI,
    initialPageSize: 50,
    loadMorePageSize: 10
  }
  return (
    <BusinessListController {...businessListingProps} />
  )
}
