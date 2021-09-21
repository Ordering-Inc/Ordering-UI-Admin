import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Support as SupportController } from '../../../src/components/Support'

export const Support = (props) => {
  return (
    <>
      <HelmetTags page='support' />
      <SupportController {...props} />
    </>
  )
}
