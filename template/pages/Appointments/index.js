import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Appointments as AppointmentsController } from '../../../src/components/Orders'

export const Appointments = (props) => {
  return (
    <>
      <HelmetTags page='appointments' />
      <AppointmentsController {...props} />
    </>
  )
}
