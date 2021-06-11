import React from 'react'
import { UsersDeleteButton } from '../UsersDeleteButton'
import {
  HeaderContainer,
  ActionContainer
} from './styles'

export const UsersListingHeader = (props) => {
  const {
    title,
    selectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers
  } = props
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <ActionContainer>
        <UsersDeleteButton
          selectedUsers={selectedUsers}
          deleteUsersActionState={deleteUsersActionState}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
