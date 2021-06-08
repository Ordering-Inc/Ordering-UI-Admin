import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { DriversManager as DriversManagerController } from '../../../src/themes/two/src/components/DriversManager'

export const DriversManager = (props) => {
  const [events] = useEvent()
  const driversManagerProps = {
    ...props,
    isSearchByName: true,
    isSearchByCellphone: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification'],
    onDriverRedirect: (driverId) => {
      if (!driverId) {
        return events.emit('go_to_page', { page: 'drivers', replace: true })
      }
      return events.emit('go_to_page', { page: 'drivers', search: `?id=${driverId}` })
    }
  }

  return (
    <>
      <HelmetTags page='deliveries' />
      <DriversManagerController {...driversManagerProps} />
    </>
  )
}
