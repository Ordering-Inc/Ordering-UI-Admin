import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/UsersListing'

export const DeliveryDriversList = (props) => {
  const [events] = useEvent()
  const [, t] = useLanguage()
  const usersProps = {
    ...props,
    headerTitle: t('DRIVERS', 'Drivers'),
    deafultUserTypesSelected: [4],
    disabledActiveStateCondition: true,
    isDriversPage: true,
    onUserRedirect: (userId) => {
      if (!userId) {
        return events.emit('go_to_page', { page: 'delivery_drivers', replace: true })
      }
      return events.emit('go_to_page', { page: 'delivery_drivers', search: `?id=${userId}` })
    }
  }
  return (
    <>
      <HelmetTags page='delivery_drivers' />
      <UsersListing {...usersProps} />
    </>
  )
}
