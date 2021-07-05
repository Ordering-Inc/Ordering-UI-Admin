import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BasicSettings as BasicSettingsController } from '../../../src/themes/two/src/components/BasicSettings'

export const BasicSettings = (props) => {
  return (
    <>
      <HelmetTags page='basicSettings' />
      <BasicSettingsController {...props} />
    </>
  )
}
