import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/UsersListing'

export const CustomersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const usersProps = {
    ...props,
    headerTitle: t('CUSTOMERS', 'Customers'),
    isShowActiveStateFilter: true,
    deafultUserTypesSelected: [3],
    onUserRedirect: (userId) => {
      if (!userId) {
        return events.emit('go_to_page', { page: 'customers', replace: true })
      }
      return events.emit('go_to_page', { page: 'customers', search: `?id=${userId}` })
    }
  }
  return (
    <>
      <HelmetTags page='customers' />
      <UsersListing {...usersProps} />
    </>
  )
}
