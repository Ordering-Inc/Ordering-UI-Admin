import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DeliveriesManager as DeliveriesManagerController } from '../../../src/themes/two/src/components/DeliveriesManager'
export const DeliveryDashboard = (props) => {
  return (
    <>
      <HelmetTags page='deliveries' />
      <DeliveriesManagerController />
    </>
  )
}
