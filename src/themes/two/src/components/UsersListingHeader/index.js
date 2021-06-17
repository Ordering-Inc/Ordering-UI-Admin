import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { SearchBar } from '../SearchBar'

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
    selectedUserActiveState,
    searchValue,
    onSearch
  } = props

  const [, t] = useLanguage()

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
        <SearchBar
          isCustomLayout
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
