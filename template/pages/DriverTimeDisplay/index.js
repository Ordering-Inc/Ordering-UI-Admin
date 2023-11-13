import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import {DriversTimeDisplay as DriversTimeDisplayController} from '../../../src/components/Delivery/DriversTimeDisplay'

export const DriversTimeDisplay = (props) => {
  return (
    <>
      <HelmetTags page='drivers_time_display' />
      <DriversTimeDisplayController {...props} />
    </>
  )
}
