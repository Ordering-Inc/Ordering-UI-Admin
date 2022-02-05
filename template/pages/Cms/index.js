import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Cms as CmsController } from '../../../src/components/Settings'
export const Cms = (props) => {
  return (
    <>
      <HelmetTags page='pages' />
      <CmsController {...props} />
    </>
  )
}
