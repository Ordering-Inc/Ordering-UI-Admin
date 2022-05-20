import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { CustomersListing } from '../../../src/components/Users'

export const CustomersList = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const customersProps = {
    ...props,
    headerTitle: t('CUSTOMERS', 'Customers'),
    defaultUserTypesSelected: [3],
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone',
      'country_phone_code', 'city_id', 'city', 'address', 'addresses',
      'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
      'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups',
      'phone_verified', 'email_verified', 'wallets'
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
      <CustomersListing {...customersProps} />
    </>
  )
}
