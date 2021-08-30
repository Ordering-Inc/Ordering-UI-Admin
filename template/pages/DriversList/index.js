import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { DriversManager as DriversManagerController } from '../../../src/components/DriversManager'

export const DriversList = (props) => {
  const [events] = useEvent()
  const driversListProps = {
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
      <HelmetTags page='drivers_dashboard' />
      <DriversManagerController {...driversListProps} />
    </>
  )
}
