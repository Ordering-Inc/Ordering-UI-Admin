import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { UsersListing } from '../../../src/themes/two/src/components/UsersListing'

export const DeliveryDriversList = (props) => {
  const [events] = useEvent()
  const usersProps = {
    ...props,
    deafultUserTypesSelected: [4],
    disabledActiveStateCondition: true,
    isDelivery: true,
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
