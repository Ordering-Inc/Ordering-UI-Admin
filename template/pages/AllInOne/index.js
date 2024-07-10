import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AllInOne as AllInOneController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'
import settings from '../../config.json'
import { useFilterValues } from '../../../src/contexts/FilterValuesContext'

export const AllInOne = (props) => {
  const [filterValues] = useFilterValues()

  const ordersListProps = {
    ...props,
    isUseQuery: true,
    useBatchSockets: settings?.use_batch_sockets,
    defaultFilterValues: filterValues,
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
