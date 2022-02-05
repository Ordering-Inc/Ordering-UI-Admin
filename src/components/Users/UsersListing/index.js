import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UsersList as UsersListController } from 'ordering-components-admin'
import { UsersList } from '../UsersList'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { CustomerDetails } from '../CustomerDetails'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { SideBar } from '../../Shared'
import { UserAddForm } from '../UserAddForm'

import {
  UsersListingContainer
} from './styles'

const UsersListingUI = (props) => {
  const {
    deafultUserTypesSelected,
    disabledActiveStateCondition,
    headerTitle,
    isShowActiveStateFilter,
    isShowUserTypeFilter,

    isCustomersPage,

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
    handleSuccessAddUser,
    handleSuccessDeleteUser
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [queryId, setQueryId] = useState(null)
  const [isOpenUserDetails, setIsOpenUserDetails] = useState(false)
  const [openUser, setOpenUser] = useState(null)
  const [openUserAddForm, setOpenUserAddForm] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

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
          deafultUserTypesSelected={deafultUserTypesSelected}
          disabledActiveStateCondition={disabledActiveStateCondition}
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
        isCustomersPage ? (
          <SideBar
            sidebarId='customer_details'
            open={isOpenUserDetails}
            onClose={() => handleBackRedirect()}
            defaultSideBarWidth={500 + moveDistance}
            moveDistance={moveDistance}
          >
            <CustomerDetails
              user={openUser}
              userId={openUser?.id || queryId}
              handleSuccessUpdate={handleSuccessUpdate}
              handleSuccessDeleteUser={handleSuccessDeleteUser}
              onClose={() => handleBackRedirect()}
              handleParentSidebarMove={val => setMoveDistance(val)}
            />
          </SideBar>
        ) : (
          <UserDetailsLateralBar
            open={isOpenUserDetails}
            user={openUser}
            userId={openUser?.id || queryId}
            onClose={() => handleBackRedirect()}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessDeleteUser={handleSuccessDeleteUser}
          />
        )
      )}
      {openUserAddForm && (
        <SideBar
          sidebarId='user_add_form'
          open={openUserAddForm}
          onClose={() => setOpenUserAddForm(false)}
        >
          <UserAddForm
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
