import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DeliveriesManager as DeliveriesManagerController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'
import settings from '../../config.json'
import { useFilterValues } from '../../../src/contexts/FilterValuesContext'

export const DeliveriesManager = (props) => {
  const [filterValues] = useFilterValues()

  const deliveriesManagerProps = {
    ...props,
    isUseQuery: true,
    franchiseId: settings?.franchiseId,
    useBatchSockets: settings?.use_batch_sockets,
    useFranchiseImages: settings?.use_franchise_images,
    defaultFilterValues: filterValues,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return removeQueryToUrl(['id'])
      }
      return addQueryToUrl({ id: orderId })
    }
  }
  return (
    <>
      <HelmetTags page='deliveries' />
      <DeliveriesManagerController {...deliveriesManagerProps} />
    </>
  )
}
