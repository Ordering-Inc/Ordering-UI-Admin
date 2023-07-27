import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useLanguage } from 'ordering-components-admin'
import { DeliveryUsersListing } from '../../../src/components/Delivery'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const DeliveryDriversList = (props) => {
  const [, t] = useLanguage()
  const usersProps = {
    ...props,
    isUseQuery: true,
    headerTitle: t('DRIVERS', 'Drivers'),
    defaultUserTypesSelected: [4],
    disabledActiveStateCondition: true,
    isDriversPage: true,
    onUserRedirect: (userId) => {
      if (!userId) {
        return removeQueryToUrl(['id', 'tab'])
      }
      return addQueryToUrl({ id: userId })
    }
  }
  return (
    <>
      <HelmetTags page='delivery_drivers' />
      <DeliveryUsersListing {...usersProps} />
    </>
  )
}
