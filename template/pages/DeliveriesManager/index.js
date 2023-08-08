import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DeliveriesManager as DeliveriesManagerController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const DeliveriesManager = (props) => {
  const deliveriesManagerProps = {
    ...props,
    isUseQuery: true,
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
