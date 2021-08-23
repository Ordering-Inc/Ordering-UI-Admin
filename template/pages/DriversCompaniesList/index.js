import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversCompaniesListing as DriversCompaniesListingController } from '../../../src/themes/two/src/components/DriversCompaniesListing'

export const DriversCompaniesList = (props) => {
  return (
    <>
      <HelmetTags page='drivers_companies' />
      <DriversCompaniesListingController {...props} />
    </>
  )
}
