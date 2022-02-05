import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/Users'

export const CustomersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const usersProps = {
    ...props,
    headerTitle: t('CUSTOMERS', 'Customers'),
    isShowActiveStateFilter: true,
    deafultUserTypesSelected: [3],
    isCustomersPage: true,
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone',
      'country_phone_code', 'city_id', 'city', 'address', 'addresses',
      'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
      'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups',
      'phone_verified', 'email_verified'
    ],
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
