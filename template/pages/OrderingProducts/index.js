import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderingProductsListing as OrderingProductsController } from '../../../src/components/OrderingProducts'

export const OrderingProducts = (props) => {
  const orderingProductsProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true
  }
  return (
    <>
      <HelmetTags page='ordering_products' />
      <OrderingProductsController {...orderingProductsProps} />
    </>
  )
}
