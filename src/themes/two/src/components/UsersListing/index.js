import React from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'

import {
  UsersListingContainer
} from './styles'

const UsersListingUI = (props) => {
  const {
    usersList,
    handleSelectedUserTypes,
    paginationProps,
    getUsers,
    searchValue,
    onSearch,
    userTypesSelected,
    paginationDetail,
    selectedUserActiveState,
    handleChangeUserActiveState,
    handleChangeUserType,
    handleChangeActiveUser,
    handleDeleteUser,
    selectedUsers,
    handleSelectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          title={t('USERS', 'Users')}
          selectedUsers={selectedUsers}
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
          deleteUsersActionState={deleteUsersActionState}
          searchValue={searchValue}
          onSearch={onSearch}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
        />
        <UserActiveStateFilter
          selectedUserActiveState={selectedUserActiveState}
          handleChangeUserActiveState={handleChangeUserActiveState}
        />
        <UserTypeFilter
          handleChangeUserType={handleSelectedUserTypes}
        />
        <UsersList
          usersList={usersList}
          getUsers={getUsers}
          paginationProps={paginationProps}
          paginationDetail={paginationDetail}
          handleChangeUserType={handleChangeUserType}
          handleChangeActiveUser={handleChangeActiveUser}
          handleDeleteUser={handleDeleteUser}
          selectedUsers={selectedUsers}
          handleSelectedUsers={handleSelectedUsers}
        />
      </UsersListingContainer>
      
      <UserDetailsLateralBar
        open
      />
    </>
  )
}

export const UsersListing = (props) => {
  const usersListingProps = {
    ...props,
    UIComponent: UsersListingUI,
    isSearchByUserId: true,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true
  }
  return (
    <UsersListController {...usersListingProps} />
  )
}
