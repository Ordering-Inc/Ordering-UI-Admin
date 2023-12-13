import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DeliveriesManager as DeliveriesManagerController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'
import settings from '../../config.json'

export const DeliveriesManager = (props) => {
  const deliveriesManagerProps = {
    ...props,
    isUseQuery: true,
    franchiseId: settings?.franchiseId,
    useBatchSockets: settings?.use_batch_sockets,
    useFranchiseImages: settings?.use_franchise_images,
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
