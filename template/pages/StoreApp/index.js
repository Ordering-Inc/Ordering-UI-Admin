import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { StoreApp as StoreAppController } from '../../../src/components/MyProducts'

export const StoreApp = (props) => {
  return (
    <>
      <HelmetTags page='store_app' />
      <StoreAppController {...props} />
    </>
  )
}
