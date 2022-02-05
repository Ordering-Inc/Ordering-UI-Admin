import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { SearchBar } from '../../Shared'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer
} from './styles'

export const UsersListingHeader = (props) => {
  const {
    deafultUserTypesSelected,
    disabledActiveStateCondition,
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
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{title}</h1>
      </HeaderTitleContainer>
      <ActionContainer>
        <Button
          borderRadius='8px'
          color='lightPrimary'
          onClick={() => handleOpenUserAddForm()}
          data-tour='tour_add'
        >
          {t('ADD_USER', 'Add user')}
        </Button>
        <UsersExportCSV
          deafultUserTypesSelected={deafultUserTypesSelected}
          disabledActiveStateCondition={disabledActiveStateCondition}
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
        />
        <UsersDeleteButton
          selectedUsers={selectedUsers}
          deleteUsersActionState={deleteUsersActionState}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
        />
        <SearchBar
          lazyLoad
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
