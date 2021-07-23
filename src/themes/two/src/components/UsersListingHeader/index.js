import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { SearchBar } from '../SearchBar'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'

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
    onSearch,
    handleOpenUserAddForm
  } = props

  const [, t] = useLanguage()

  return (
    <HeaderContainer>
      <div>
        <h1>{title}</h1>
        <BsPlusSquare onClick={() => handleOpenUserAddForm()} />
      </div>
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
