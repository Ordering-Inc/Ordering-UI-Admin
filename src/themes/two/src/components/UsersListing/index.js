import React from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
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
    paginationDetail,
    selectedUserActiveState,
    handleChangeUserActiveState,
    handleChangeUserType,
    handleChangeActiveUser
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          title={t('USERS', 'Users')}
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
