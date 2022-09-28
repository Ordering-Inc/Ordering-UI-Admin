import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/components/Settings'

export const BasicSettings = (props) => {
  const basicSettingsProps = {
    ...props,
    settingsType: 'key_basic'
  }
  return (
    <>
      <HelmetTags page='basic_settings' />
      <SettingsController {...basicSettingsProps} />
    </>
  )
}
