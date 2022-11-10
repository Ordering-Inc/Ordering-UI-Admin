import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { CustomerApp as CustomerAppController } from '../../../src/components/MyProducts'

export const CustomerApp = (props) => {
  return (
    <>
      <HelmetTags page='customer_app' />
      <CustomerAppController {...props} />
    </>
  )
}
