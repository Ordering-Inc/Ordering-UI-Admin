import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/Users'

export const ManagersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const usersProps = {
    ...props,
    headerTitle: t('MANAGERS', 'Managers'),
    deafultUserTypesSelected: [0, 1, 2],
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone',
      'country_phone_code', 'city_id', 'city', 'address', 'addresses',
      'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
      'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups',
      'phone_verified', 'email_verified', 'wallets'
    ],
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
