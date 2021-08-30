import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversGroupsListing as DriversGroupsListingController } from '../../../src/components/DriversGroupsListing'

export const DriversGroupsList = (props) => {
  return (
    <>
      <HelmetTags page='drivers_groups' />
      <DriversGroupsListingController {...props} />
    </>
  )
}
