import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { PlaceListing as PlaceListingController } from '../../../src/components/Settings'

export const PlacesList = (props) => {
  return (
    <>
      <HelmetTags page='places' />
      <PlaceListingController {...props} />
    </>
  )
}
