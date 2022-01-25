import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UsersList as UsersListController } from 'ordering-components-admin'
import { getStorageItem, removeStorageItem, setStorageItem } from '../../utils'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { SideBar } from '../SideBar'
import { UserAddForm } from '../UserAddForm'

import { WizardDelivery } from '../WizardDelivery'

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

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(isDriversManagersPage ? 2 : 0)

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

    if (isTourOpen) {
      setTimeout(() => {
        setCurrentTourStep(isDriversManagersPage ? 3 : 1)
      }, 600)
    }
  }

  const handleOpenTour = () => {
    setCurrentTourStep(isDriversManagersPage ? 2 : 0)
    setIsOpenUserDetails(false)
    setOpenUserAddForm(false)
    setIsTourOpen(true)
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

  const handleSetStorage = async () => {
    const isVisited = await getStorageItem('isVistedDriverPage', true)
    if (!isVisited) {
      await setStorageItem('isVistedDriverPage', true)
      if (isDriversPage) {
        handleOpenTour()
      }
    }
  }
  const getDataFromStorage = async () => {
    const value = await getStorageItem('isFromDeliveryDrivers', true)
    if (isDriversManagersPage && value) {
      removeStorageItem('isFromDeliveryDrivers')
      handleOpenTour()
    }
  }
  useEffect(() => {
    handleSetStorage()
    getDataFromStorage()
  }, [])

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          deafultUserTypesSelected={deafultUserTypesSelected}
          disabledActiveStateCondition={disabledActiveStateCondition}
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

          handleOpenTour={() => handleOpenTour()}
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
            isTourOpen={isTourOpen}
          />
        </SideBar>
      )}

      {isTourOpen && (
        <WizardDelivery
          isTourOpen={isTourOpen}
          setIsTourOpen={setIsTourOpen}
          currentStep={currentTourStep}
        />
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
