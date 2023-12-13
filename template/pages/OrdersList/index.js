import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrdersManager as OrdersManagerController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'
import settings from '../../config.json'

export const OrdersList = (props) => {
  const ordersListProps = {
    ...props,
    franchiseId: settings?.franchiseId,
    isUseQuery: true,
    disableSocketRoomDriver: true,
    useFranchiseImages: settings?.use_franchise_images,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return removeQueryToUrl(['id', 'section', 'tab'])
      }
      return addQueryToUrl({ id: orderId })
    }
  }
  return (
    <>
      <HelmetTags page='orders' />
      <OrdersManagerController {...ordersListProps} />
    </>
  )
}
