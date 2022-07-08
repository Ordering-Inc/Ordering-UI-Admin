import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UsersList as UsersListController, useLanguage } from 'ordering-components-admin'
import { ProfessionalList } from '../ProfessionalList'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { ProfessionalAddForm } from '../ProfessionalAddForm'
import { SideBar } from '../../Shared'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { Button } from '../../../styles'
import { OccupationsFilter } from '../OccupationsFilter'

import {
  UsersListingContainer,
  ActionsContainer,
  ActionButtonsGroup
} from './styles'

const ProfessionalListingUI = (props) => {
  const {
    defaultUserTypesSelected,
    disabledActiveStateCondition,
    headerTitle,

    usersList,
    // handleSelectedUserTypes,
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

    occupationsState,
    selectedOccupation,
    handleSelectOccupation
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
          <OccupationsFilter
            occupationsState={occupationsState}
            selectedOccupation={selectedOccupation}
            handleSelectOccupation={handleSelectOccupation}
          />
          <ActionButtonsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleOpenUserAddForm()}
            >
              {t('ADD_PROFESSIONAL', 'Add professional')}
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
        <ProfessionalList
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
        />
      </UsersListingContainer>

      {isOpenUserDetails && (
        <UserDetailsLateralBar
          isProfessionals
          open={isOpenUserDetails}
          user={openUser}
          userId={openUser?.id || queryId}
          occupations={occupationsState.occupations}
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
          <ProfessionalAddForm
            handleSuccessAdd={handleSuccessAddUser}
            onClose={() => setOpenUserAddForm(false)}
          />
        </SideBar>
      )}
    </>
  )
}

export const ProfessionalListing = (props) => {
  const usersListingProps = {
    ...props,
    UIComponent: ProfessionalListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  }
  return (
    <UsersListController {...usersListingProps} />
  )
}
