import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversCompaniesListing as DriversCompaniesListingController } from '../../../src/components/Delivery'

export const DriversCompaniesList = (props) => {
  return (
    <>
      <HelmetTags page='drivers_companies' />
      <DriversCompaniesListingController {...props} />
    </>
  )
}
