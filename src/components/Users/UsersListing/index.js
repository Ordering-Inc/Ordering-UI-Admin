import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { UsersList } from '../UsersList'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { SideBar } from '../../Shared'
import { UserAddForm } from '../UserAddForm'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { Button } from '../../../styles'

import {
  UsersListingContainer,
  ActionsContainer,
  ActionButtonsGroup
} from './styles'

const UsersListingUI = (props) => {
  const {
    defaultUserTypesSelected,
    disabledActiveStateCondition,
    headerTitle,

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
    handleChangeActiveUser,
    selectedUsers,
    handleSelectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers,
    onUserRedirect,
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleSuccessDeleteUser,
    setSelectedUsers
  } = props

  const [, t] = useLanguage()
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
          title={headerTitle}
          searchValue={searchValue}
          onSearch={onSearch}
        />
        <UserActiveStateFilter
          selectedUserActiveState={selectedUserActiveState}
          handleChangeUserActiveState={handleChangeUserActiveState}
        />
        <ActionsContainer>
          <UserTypeFilter
            handleChangeUserType={handleSelectedUserTypes}
          />
          <ActionButtonsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleOpenUserAddForm()}
              data-tour='tour_add'
            >
              {t('ADD_USER', 'Add user')}
            </Button>
            <UsersExportCSV
              defaultUserTypesSelected={defaultUserTypesSelected}
              disabledActiveStateCondition={disabledActiveStateCondition}
              userTypesSelected={userTypesSelected}
              selectedUserActiveState={selectedUserActiveState}
            />
            <UsersDeleteButton
              selectedUsers={selectedUsers}
              deleteUsersActionState={deleteUsersActionState}
              handleDeleteSeveralUsers={handleDeleteSeveralUsers}
            />
          </ActionButtonsGroup>
        </ActionsContainer>
        <UsersList
          usersList={usersList}
          getUsers={getUsers}
          paginationProps={paginationProps}
          paginationDetail={paginationDetail}
          handleChangeActiveUser={handleChangeActiveUser}
          selectedUsers={selectedUsers}
          handleSelectedUsers={handleSelectedUsers}
          userDetailsId={openUser?.id || queryId}
          handleOpenUserDetails={handleOpenUserDetails}
          handleOpenUserAddForm={handleOpenUserAddForm}
          setSelectedUsers={setSelectedUsers}
        />
      </UsersListingContainer>

      {isOpenUserDetails && (
        <UserDetailsLateralBar
          isManagers
          open={isOpenUserDetails}
          user={openUser}
          userId={openUser?.id || queryId}
          onClose={() => handleBackRedirect()}
          handleSuccessUpdate={handleSuccessUpdate}
          handleSuccessDeleteUser={handleSuccessDeleteUser}
          handleChangeActiveUser={handleChangeActiveUser}
        />
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
