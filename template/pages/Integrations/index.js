import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Integrations as IntegrationsController } from '../../../src/themes/two/src/components/Integrations'

export const Integrations = (props) => {
  return (
    <>
      <HelmetTags page='integrations' />
      <IntegrationsController {...props} />
    </>
  )
}
