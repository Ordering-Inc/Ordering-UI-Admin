import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AdvancedSettings as AdvancedSettingsController } from '../../../src/themes/two/src/components/AdvancedSettings'

export const AdvancedSettings = (props) => {
  return (
    <>
      <HelmetTags page='advancedSettings' />
      <AdvancedSettingsController {...props} />
    </>
  )
}
