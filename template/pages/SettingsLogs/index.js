import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { SettingsLogs as SettingsLogsController } from '../../../src/components/Settings/SettingsLogs'

export const SettingsLogs = (props) => {
  return (
    <>
      <HelmetTags page='logs' />
      <SettingsLogsController {...props} />
    </>
  )
}
