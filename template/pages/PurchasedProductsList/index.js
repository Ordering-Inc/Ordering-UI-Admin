import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { PurchasedProductsList as PurchasedProductsListController } from '../../../src/components/Downloads'

export const PurchasedProductsList = (props) => {
  return (
    <>
      <HelmetTags page='purchased_products' />
      <PurchasedProductsListController {...props} />
    </>
  )
}
