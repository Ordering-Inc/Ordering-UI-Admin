import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { RecoveryActionListing as RecoveryActionListingController } from '../../../src/components/CartRecovery'

export const RecoveryActionListing = (props) => {
  const recoveryActionListProps = {
    ...props,
    isUseQuery: true
  }
  return (
    <>
      <HelmetTags page='recovery_actions' />
      <RecoveryActionListingController {...recoveryActionListProps} />
    </>
  )
}
