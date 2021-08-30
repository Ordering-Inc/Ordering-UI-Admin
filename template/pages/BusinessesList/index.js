import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { BusinessessListing } from '../../../src/components/BusinessessListing'

export const BusinessesList = (props) => {
  const [events] = useEvent()
  const businessesProps = {
    ...props,
    onBusinessRedirect: (businessId) => {
      if (!businessId) {
        return events.emit('go_to_page', { page: 'businesses', replace: true })
      }
      return events.emit('go_to_page', { page: 'businesses', search: `?id=${businessId}` })
    }
  }
  return (
    <>
      <HelmetTags page='businesses' />
      <BusinessessListing {...businessesProps} />
    </>
  )
}
