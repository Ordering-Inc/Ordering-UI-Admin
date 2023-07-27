import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useLanguage } from 'ordering-components-admin'
import { DeliveryUsersListing as DriversManagersListingController } from '../../../src/components/Delivery'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const DriversManagersList = (props) => {
  const [, t] = useLanguage()
  const usersProps = {
    ...props,
    isUseQuery: true,
    headerTitle: t('DRIVERS_MANAGERS', 'Drivers managers'),
    defaultUserTypesSelected: [5],
    disabledActiveStateCondition: true,
    isDriversManagersPage: true,
    onUserRedirect: (userId) => {
      if (!userId) {
        return removeQueryToUrl(['id', 'tab'])
      }
      return addQueryToUrl({ id: userId })
    }
  }
  return (
    <>
      <HelmetTags page='drivers_managers' />
      <DriversManagersListingController {...usersProps} />
    </>
  )
}
