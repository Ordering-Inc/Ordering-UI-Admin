import React from 'react'
import { RecoveryActionHeader } from '../RecoveryActionHeader'
import { RecoveryActions as RecoveryActionsController } from './naked'
import {
  RecoveryActionsContainer
} from './styles'

const RecoveryActionsUI = (props) => {
  return (
    <RecoveryActionsContainer>
      <RecoveryActionHeader
        {...props}
      />
    </RecoveryActionsContainer>
  )
}

export const RecoveryActions = (props) => {
  const recoveryActionsProps = {
    ...props,
    UIComponent: RecoveryActionsUI
  }
  return <RecoveryActionsController {...recoveryActionsProps} />
}
