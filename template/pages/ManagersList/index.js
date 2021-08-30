import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/UsersListing'

export const ManagersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const usersProps = {
    ...props,
    headerTitle: t('MANAGERS', 'Managers'),
    isShowActiveStateFilter: true,
    isShowUserTypeFilter: true,
    deafultUserTypesSelected: [0, 1, 2],
    onUserRedirect: (userId) => {
      if (!userId) {
        return events.emit('go_to_page', { page: 'managers', replace: true })
      }
      return events.emit('go_to_page', { page: 'managers', search: `?id=${userId}` })
    }
  }
  return (
    <>
      <HelmetTags page='managers' />
      <UsersListing {...usersProps} />
    </>
  )
}
