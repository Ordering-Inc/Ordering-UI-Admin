import React from 'react'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from './naked'
import { BusinessListingHeader } from '../BusinessListingHeader'
import {
  BusinessListingContainer
} from './styles'

const BusinessessListingUI = (props) => {
  const {
    businessList
  } = props

  return (
    <BusinessListingContainer>
      <BusinessListingHeader />
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
