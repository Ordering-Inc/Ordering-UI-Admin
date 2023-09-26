import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AllInOne as AllInOneController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'
import settings from '../../config.json'

export const AllInOne = (props) => {
  const ordersListProps = {
    ...props,
    isUseQuery: true,
    useBatchSockets: settings?.use_batch_sockets,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return removeQueryToUrl(['id', 'section', 'tab'])
      }
      return addQueryToUrl({ id: orderId })
    }
  }
  return (
    <>
      <HelmetTags page='all_in_one' />
      <AllInOneController {...ordersListProps} />
    </>
  )
}
