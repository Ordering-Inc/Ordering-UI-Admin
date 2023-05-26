import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { AllInOne as AllInOneController } from '../../../src/components/Orders'

export const AllInOne = (props) => {
  const [events] = useEvent()
  const ordersListProps = {
    ...props,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return events.emit('go_to_page', { page: 'all_in_one', replace: true })
      }
      return events.emit('go_to_page', { page: 'all_in_one', search: `?id=${orderId}` })
    }
  }
  return (
    <>
      <HelmetTags page='all_in_one' />
      <AllInOneController {...ordersListProps} />
    </>
  )
}
