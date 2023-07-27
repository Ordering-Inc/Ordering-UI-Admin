import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AllInOne as AllInOneController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const AllInOne = (props) => {
  const ordersListProps = {
    ...props,
    isUseQuery: true,
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
