import React from 'react'
// import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { useLanguage } from 'ordering-components-admin'
import { UsersList as UsersListController } from './naked'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'

import {
  UsersListingContainer
} from './styles'
import { UserActiveStateFilter } from '../UserActiveStateFilter'

const UsersListingUI = (props) => {
  const {
    usersList,
    handleSelectedUserTypes,
    paginationProps,
    getUserById,
    getUsers,
    setUsersList,
    filterValues,
    setFilterValues,
    searchVal,
    onSearch,
    spinLoading,
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
          // getUserById={getUserById}
          // setUsersList={setUsersList}
          // spinLoading={spinLoading}
          paginationDetail={paginationDetail}
          handleChangeUserType={handleChangeUserType}
          handleChangeActiveUser={handleChangeActiveUser}
          handleDeleteUser={handleDeleteUser}
          selectedUsers={selectedUsers}
          handleSelectedUsers={handleSelectedUsers}
        />
      </UsersListingContainer>
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
