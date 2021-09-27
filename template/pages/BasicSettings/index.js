import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/components/Settings'

export const BasicSettings = (props) => {
  const basicSettingsProps = {
    ...props,
    settingsType: 1
  }
  return (
    <>
      <HelmetTags page='basicSettings' />
      <SettingsController {...basicSettingsProps} />
    </>
  )
}
