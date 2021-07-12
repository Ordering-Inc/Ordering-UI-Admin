import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Settings as SettingsController } from '../../../src/themes/two/src/components/Settings'

export const OperationSettings = (props) => {
  const operationSettingsProps = {
    ...props,
    settingsType: 'operation'
  }

  return (
    <>
      <HelmetTags page='operationSettings' />
      <SettingsController {...operationSettingsProps} />
    </>
  )
}
