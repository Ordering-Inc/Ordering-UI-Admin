import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversCompaniesListing as DriversCompaniesListingController } from '../../../src/components/Delivery'

export const DriversCompaniesList = (props) => {
  const driversCompaniesProps = {
    ...props,
    isUseQuery: true
  }
  return (
    <>
      <HelmetTags page='drivers_companies' />
      <DriversCompaniesListingController {...driversCompaniesProps} />
    </>
  )
}
