import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriversGroupsListing as DriversGroupsListingController } from '../../../src/components/Delivery'

export const DriversGroupsList = (props) => {
  return (
    <>
      <HelmetTags page='drivers_groups' />
      <DriversGroupsListingController {...props} />
    </>
  )
}
