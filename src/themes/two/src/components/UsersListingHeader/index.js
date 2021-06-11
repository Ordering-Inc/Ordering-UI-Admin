import React from 'react'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import {
  HeaderContainer,
  ActionContainer
} from './styles'

export const UsersListingHeader = (props) => {
  const {
    title,
    selectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers,
    userTypesSelected,
    selectedUserActiveState
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
        <UsersExportCSV
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
