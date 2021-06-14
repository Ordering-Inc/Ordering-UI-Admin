import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { UsersListing } from '../../../src/themes/two/src/components/UsersListing'

export const UsersList = (props) => {
  const [events] = useEvent()
  const usersProps = {
    ...props,
    onUserRedirect: (userId) => {
      if (!userId) {
        return events.emit('go_to_page', { page: 'users', replace: true })
      }
      return events.emit('go_to_page', { page: 'users', search: `?id=${userId}` })
    }
  }
  return (
    <>
      <HelmetTags page='deliveries' />
      <UsersListing {...usersProps} />
    </>
  )
}
