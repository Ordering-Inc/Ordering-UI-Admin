import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { getStorageItem, removeStorageItem, setStorageItem, addQueryToUrl } from '../../../utils'

import { UsersListingHeader } from '../UsersListingHeader'
import { UserTypeFilter } from '../UserTypeFilter'
import { UsersList } from '../UsersList'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { UserAddForm } from '../UserAddForm'
import { WizardDelivery } from '../WizardDelivery'
import { Alert, SideBar } from '../../Shared'

import {
  UsersListingContainer
} from './styles'

const DeliveryUsersListingUI = (props) => {
  const {
    defaultUserTypesSelected,
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
    handleChangeAvailable,
    handleDeleteUser,
    selectedUsers,
    handleSelectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers,
    onUserRedirect,
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleSuccessDeleteUser,
    actionDisabled,
    driversGroupsState,
    setSelectedUsers,
    actionStatus,
    isUseQuery
  } = props

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const [queryId, setQueryId] = useState(null)
  const [isOpenUserDetails, setIsOpenUserDetails] = useState(false)
  const [openUser, setOpenUser] = useState(null)
  const [openUserAddForm, setOpenUserAddForm] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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
    addQueryToUrl({ id: user.id })
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
      }, 50)
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
    if (id === null) {
      !isDriversManagersPage && setIsOpenUserDetails(false)
    } else {
      const user = usersList.users.find(_user => _user.id === parseInt(id))
      if (user) {
        setOpenUser(user)
      } else {
        setQueryId(parseInt(id))
      }
      setIsOpenUserDetails(true)
    }
  }, [usersList])

  const handleCloseAddForm = () => {
    setOpenUserAddForm(false)
    if (isTourOpen) {
      setIsTourOpen(false)
    }
  }

  const handleSetStorage = async () => {
    const preVisited = await getStorageItem('visited', true)
    if (!preVisited?.drivers_page) {
      const visited = {
        ...preVisited,
        drivers_page: true
      }
      await setStorageItem('visited', visited, true)
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
    if (usersList.loading) return
    handleSetStorage()
    getDataFromStorage()
  }, [usersList.loading])

  useEffect(() => {
    if (!actionStatus?.error) return
    setAlertState({
      open: true,
      content: actionStatus?.error
    })
  }, [actionStatus?.error])

  return (
    <>
      <UsersListingContainer>
        <UsersListingHeader
          defaultUserTypesSelected={defaultUserTypesSelected}
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
          actionDisabled={actionDisabled}
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
          handleChangeAvailable={handleChangeAvailable}
          handleDeleteUser={handleDeleteUser}
          selectedUsers={selectedUsers}
          handleSelectedUsers={handleSelectedUsers}
          userDetailsId={openUser?.id || queryId}
          handleOpenUserDetails={handleOpenUserDetails}
          handleOpenUserAddForm={handleOpenUserAddForm}
          actionDisabled={actionDisabled}
          setSelectedUsers={setSelectedUsers}
          isUseQuery={isUseQuery}
        />
      </UsersListingContainer>

      {isOpenUserDetails && (
        <UserDetailsLateralBar
          isDriversPage={isDriversPage}
          isDriversManagersPage={isDriversManagersPage}
          open={isOpenUserDetails}
          user={openUser}
          handleDeleteUser={handleDeleteUser}
          userId={openUser?.id || queryId}
          onClose={() => handleBackRedirect()}
          handleSuccessUpdate={handleSuccessUpdate}
          handleSuccessDeleteUser={handleSuccessDeleteUser}
          handleChangeActiveUser={handleChangeActiveUser}
          actionDisabled={actionDisabled}
        />
      )}
      {openUserAddForm && (
        <SideBar
          open={openUserAddForm}
          noAnimation={isTourOpen}
          onClose={() => handleCloseAddForm()}
          showExpandIcon
        >
          <UserAddForm
            isDriversPage={isDriversPage}
            isDriversManagersPage={isDriversManagersPage}
            handleSuccessAdd={handleSuccessAddUser}
            onClose={() => setOpenUserAddForm(false)}
            isTourOpen={isTourOpen}
            driversGroupsState={driversGroupsState}
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

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DeliveryUsersListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const usersListingProps = {
    ...props,
    UIComponent: DeliveryUsersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    isDriver: true,
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
