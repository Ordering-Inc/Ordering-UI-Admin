import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversGroupsListing as DriversGroupsListingController } from '../../../src/themes/two/src/components/DriversGroupsListing'

export const DriversGroupsList = (props) => {
  return (
    <>
      <HelmetTags page='drivers_groups' />
      <DriversGroupsListingController {...props} />
    </>
  )
}
