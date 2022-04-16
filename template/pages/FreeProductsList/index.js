import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { FreeProductsList as FreeProductsListController } from '../../../src/components/downloads'

export const FreeProductsList = (props) => {
  return (
    <>
      <HelmetTags page='free_products' />
      <FreeProductsListController {...props} />
    </>
  )
}
