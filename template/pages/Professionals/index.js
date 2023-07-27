import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useLanguage } from 'ordering-components-admin'
import { ProfessionalListing } from '../../../src/components/Users'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const Professionals = (props) => {
  const [, t] = useLanguage()
  const professionalProps = {
    ...props,
    isUseQuery: true,
    headerTitle: t('PROFESSIONALS', 'Professionals'),
    defaultUserTypesSelected: [8],
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'schedule',
      'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'max_days_in_future',
      'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
      'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups',
      'phone_verified', 'email_verified', 'wallets', 'occupation_id', 'session', 'session_strategy'
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
      <HelmetTags page='professionals' />
      <ProfessionalListing {...professionalProps} />
    </>
  )
}
