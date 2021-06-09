import React from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'

import {
  UsersListingContainer
} from './styles'

const UsersListingUI = (props) => {
  const {
    usersList,
    handleChangeUserType,
    paginationProps,
    getUserById,
    getUsers,
    setUsersList,
    filterValues,
    setFilterValues,
    searchVal,
    onSearch,
    spinLoading,
    paginationDetail
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          title={t('USERS', 'Users')}
        />
        <UserTypeFilter
          handleChangeUserType={handleChangeUserType}
        />
        <UsersList
          usersList={usersList}
          // paginationProps={paginationProps}
          // getUserById={getUserById}
          // getUsers={getUsers}
          // setUsersList={setUsersList}
          // spinLoading={spinLoading}
          // paginationDetail={paginationDetail}
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
