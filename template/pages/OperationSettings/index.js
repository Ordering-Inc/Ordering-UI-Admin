import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/components/Settings'

export const OperationSettings = (props) => {
  const operationSettingsProps = {
    ...props,
    settingsType: 2
  }

  return (
    <>
      <HelmetTags page='operationSettings' />
      <SettingsController {...operationSettingsProps} />
    </>
  )
}
