import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { PlaceListing as PlaceListingController } from '../../../src/components/PlaceListing'

export const PlacesList = (props) => {
  return (
    <>
      <HelmetTags page='places' />
      <PlaceListingController {...props} />
    </>
  )
}
