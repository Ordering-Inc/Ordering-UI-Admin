import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { DeliveriesManager as DeliveriesManagerController } from '../../../src/themes/two/src/components/DeliveriesManager'
export const DeliveriesManager = (props) => {
  const [events] = useEvent()
  const deliveriesManagerProps = {
    ...props,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return events.emit('go_to_page', { page: 'deliveries', replace: true })
      }
      return events.emit('go_to_page', { page: 'deliveries', search: `?id=${orderId}` })
    }
  }
  return (
    <>
      <HelmetTags page='deliveries' />
      <DeliveriesManagerController {...deliveriesManagerProps} />
    </>
  )
}
