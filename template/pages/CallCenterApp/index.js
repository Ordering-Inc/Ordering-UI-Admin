import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { CallCenterApp as CallCenterAppController } from '../../../src/components/MyProducts'

export const CallCenterApp = (props) => {
  return (
    <>
      <HelmetTags page='call_center_app' />
      <CallCenterAppController {...props} />
    </>
  )
}
