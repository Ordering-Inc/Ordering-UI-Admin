import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { DeliveryUsersListing as DriversManagersListingController } from '../../../src/components/Delivery'

export const DriversManagersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const usersProps = {
    ...props,
    headerTitle: t('DRIVERS_MANAGERS', 'Drivers managers'),
    defaultUserTypesSelected: [5],
    disabledActiveStateCondition: true,
    isDriversManagersPage: true,
    onUserRedirect: (userId) => {
      if (!userId) {
        return events.emit('go_to_page', { page: 'driver_managers', replace: true })
      }
      return events.emit('go_to_page', { page: 'driver_managers', search: `?id=${userId}` })
    }
  }
  return (
    <>
      <HelmetTags page='drivers_managers' />
      <DriversManagersListingController {...usersProps} />
    </>
  )
}
