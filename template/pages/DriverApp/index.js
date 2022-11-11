import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriverApp as DriverAppController } from '../../../src/components/MyProducts'

export const DriverApp = (props) => {
  return (
    <>
      <HelmetTags page='driver_app' />
      <DriverAppController {...props} />
    </>
  )
}
