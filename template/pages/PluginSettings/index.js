import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/components/Settings'

export const PluginSettings = (props) => {
  const pluginSettingsProps = {
    ...props,
    settingsType: 'key_plugin'
  }
  return (
    <>
      <HelmetTags page='plugin_settings' />
      <SettingsController {...pluginSettingsProps} />
    </>
  )
}
