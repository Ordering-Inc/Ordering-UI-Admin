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
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'
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
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleSuccessDeleteUser,
    setSelectedUsers,
    handleChangeMultiFilterValues,
    multiFilterValues,
    isUseQuery
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
    removeQueryToUrl(['id', 'tab'])
  }

  const handleOpenUserDetails = (user) => {
    addQueryToUrl({ id: user?.id })
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
          handleChangeMultiFilterValues={handleChangeMultiFilterValues}
          multiFilterValues={multiFilterValues}
          isManagers
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
          isUseQuery={isUseQuery}
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
          showExpandIcon
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
  const query = new URLSearchParams(useLocation().search)
  const defaultUserActiveState = query.get('enabled') !== 'inactive'
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const usersListingProps = {
    ...props,
    defaultUserActiveState,
    UIComponent: UsersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }
  return (
    <UsersListController {...usersListingProps} />
  )
}
