import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderingProducts as OrderingProductsController } from '../../../src/components/OrderingProducts'

export const OrderingProducts = (props) => {
  return (
    <>
      <HelmetTags page='ordering_products' />
      <OrderingProductsController {...props} />
    </>
  )
}
