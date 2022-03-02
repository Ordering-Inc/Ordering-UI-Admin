import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { RecoveryActions as RecoveryActionsController } from '../../../src/components/CartRecovery'

export const RecoveryActions = (props) => {
  return (
    <>
      <HelmetTags page='recovery_actions' />
      <RecoveryActionsController {...props} />
    </>
  )
}
