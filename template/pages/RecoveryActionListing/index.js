import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { RecoveryActionListing as RecoveryActionListingController } from '../../../src/components/CartRecovery'

export const RecoveryActionListing = (props) => {
  return (
    <>
      <HelmetTags page='recovery_actions' />
      <RecoveryActionListingController {...props} />
    </>
  )
}
