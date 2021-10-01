import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/components/Settings'

export const OperationSettings = (props) => {
  const operationSettingsProps = {
    ...props,
    settingsType: 'key_operation'
  }

  return (
    <>
      <HelmetTags page='operationSettings' />
      <SettingsController {...operationSettingsProps} />
    </>
  )
}
