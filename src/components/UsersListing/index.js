import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UsersList as UsersListController } from 'ordering-components-admin'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { SideBar } from '../SideBar'
import { UserAddForm } from '../UserAddForm'

import {
  UsersListingContainer
} from './styles'

const UsersListingUI = (props) => {
  const {
    headerTitle,
    isShowActiveStateFilter,
    isShowUserTypeFilter,

    isDriversPage,
    isDriversManagersPage,

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
    handleDeleteSeveralUsers,
    onUserRedirect,
    handleSuccessUpdate,
    handleSuccessAddUser
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [queryId, setQueryId] = useState(null)
  const [isOpenUserDetails, setIsOpenUserDetails] = useState(false)
  const [openUser, setOpenUser] = useState(null)
  const [openUserAddForm, setOpenUserAddForm] = useState(false)

  const handleBackRedirect = () => {
    setIsOpenUserDetails(false)
    setOpenUser(null)
    setQueryId(null)
    onUserRedirect()
  }

  const handleOpenUserDetails = (user) => {
    onUserRedirect(user?.id)
    setOpenUser(user)
    setOpenUserAddForm(false)
    setIsOpenUserDetails(true)
  }

  const handleOpenUserAddForm = () => {
    const id = query.get('id')
    if (id) {
      handleBackRedirect()
    }
    setIsOpenUserDetails(false)
    setOpenUserAddForm(true)
  }

  useEffect(() => {
    if (usersList.loading) return
    const id = query.get('id')
    if (id === null) setIsOpenUserDetails(false)
    else {
      const user = usersList.users.find(_user => _user.id === parseInt(id))
      if (user) {
        setOpenUser(user)
      } else {
        setQueryId(parseInt(id))
      }
      setIsOpenUserDetails(true)
    }
  }, [usersList])

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          isDriversPage={isDriversPage}
          isDriversManagersPage={isDriversManagersPage}
          title={headerTitle}
          selectedUsers={selectedUsers}
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
          deleteUsersActionState={deleteUsersActionState}
          searchValue={searchValue}
          onSearch={onSearch}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
          handleOpenUserAddForm={handleOpenUserAddForm}
        />
        {isShowActiveStateFilter && (
          <UserActiveStateFilter
            selectedUserActiveState={selectedUserActiveState}
            handleChangeUserActiveState={handleChangeUserActiveState}
          />
        )}
        {isShowUserTypeFilter && (
          <UserTypeFilter
            handleChangeUserType={handleSelectedUserTypes}
          />
        )}
        <UsersList
          isDriversPage={isDriversPage}
          isDriversManagersPage={isDriversManagersPage}
          usersList={usersList}
          getUsers={getUsers}
          paginationProps={paginationProps}
          paginationDetail={paginationDetail}
          handleChangeUserType={handleChangeUserType}
          handleChangeActiveUser={handleChangeActiveUser}
          handleDeleteUser={handleDeleteUser}
          selectedUsers={selectedUsers}
          handleSelectedUsers={handleSelectedUsers}
          userDetailsId={openUser?.id || queryId}
          handleOpenUserDetails={handleOpenUserDetails}
          handleOpenUserAddForm={handleOpenUserAddForm}
        />
      </UsersListingContainer>

      {isOpenUserDetails && (
        <UserDetailsLateralBar
          isDriversPage={isDriversPage}
          isDriversManagersPage={isDriversManagersPage}
          open={isOpenUserDetails}
          user={openUser}
          userId={openUser?.id || queryId}
          onClose={() => handleBackRedirect()}
          handleSuccessUpdate={handleSuccessUpdate}
        />
      )}
      {openUserAddForm && (
        <SideBar
          sidebarId='userAddForm'
          open={openUserAddForm}
          onClose={() => setOpenUserAddForm(false)}
        >
          <UserAddForm
            isDriversPage={isDriversPage}
            isDriversManagersPage={isDriversManagersPage}
            handleSuccessAdd={handleSuccessAddUser}
            onClose={() => setOpenUserAddForm(false)}
          />
        </SideBar>
      )}
    </>
  )
}

export const UsersListing = (props) => {
  const usersListingProps = {
    ...props,
    UIComponent: UsersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  }
  return (
    <UsersListController {...usersListingProps} />
  )
}
