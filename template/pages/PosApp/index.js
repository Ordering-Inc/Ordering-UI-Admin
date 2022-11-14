import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { PosApp as PosAppController } from '../../../src/components/MyProducts'

export const PosApp = (props) => {
  return (
    <>
      <HelmetTags page='pos_app' />
      <PosAppController {...props} />
    </>
  )
}
