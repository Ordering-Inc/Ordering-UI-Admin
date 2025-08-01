import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useLanguage } from 'ordering-components-admin'
import { UsersListing } from '../../../src/components/Users'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const ManagersList = (props) => {
  const [, t] = useLanguage()
  const usersProps = {
    ...props,
    isUseQuery: true,
    headerTitle: t('MANAGERS', 'Managers'),
    defaultUserTypesSelected: [0, 2, 9],
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone',
      'country_phone_code', 'city_id', 'city', 'address', 'addresses',
      'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
      'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups',
      'phone_verified', 'email_verified', 'wallets', 'push_tokens', 'businesses_agent'
    ],
    onUserRedirect: (userId) => {
      if (!userId) {
        return removeQueryToUrl(['id', 'section', 'tab'])
      }
      return addQueryToUrl({ id: userId })
    }
  }
  return (
    <>
      <HelmetTags page='managers' />
      <UsersListing {...usersProps} />
    </>
  )
}
