import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useConfig, UsersList as UsersListController } from 'ordering-components-admin'
import { ProfessionalList } from '../ProfessionalList'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { UserDetailsLateralBar } from '../UserDetailsLateralBar'
import { ProfessionalAddForm } from '../ProfessionalAddForm'
import { Alert, SideBar } from '../../Shared'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { Button } from '../../../styles'
import { OccupationsFilter } from '../OccupationsFilter'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  UsersListingContainer,
  ActionsContainer,
  ActionButtonsGroup,
  WarningText
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
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleSuccessDeleteUser,

    occupationsState,
    selectedOccupation,
    handleSelectOccupation,
    setSelectedUsers,
    handleChangeMultiFilterValues,
    multiFilterValues
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const query = new URLSearchParams(useLocation().search)
  const [queryId, setQueryId] = useState(null)
  const [isOpenUserDetails, setIsOpenUserDetails] = useState(false)
  const [openUser, setOpenUser] = useState(null)
  const [openUserAddForm, setOpenUserAddForm] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const isEnabledAppointmentsFeature = configs?.appointments?.value

  const handleBackRedirect = () => {
    setIsOpenUserDetails(false)
    setOpenUser(null)
    setQueryId(null)
    removeQueryToUrl(['id'])
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

  useEffect(() => {
    if (!usersList?.error) return
    setAlertState({
      open: true,
      content: usersList?.error
    })
  }, [usersList?.error])

  return (
    <>
      <UsersListingContainer>
        {isEnabledAppointmentsFeature ? (
          <>
            <UsersListingHeader
              isProfessionals
              title={headerTitle}
              searchValue={searchValue}
              onSearch={onSearch}
              handleChangeMultiFilterValues={handleChangeMultiFilterValues}
              multiFilterValues={multiFilterValues}
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
              setSelectedUsers={setSelectedUsers}
            />
          </>
        ) : (
          <WarningText>{t('APPOINTMENTS_FEATURE_NOT_ENABLED', 'The appointments feature is not enabled.')}</WarningText>
        )}
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
          showExpandIcon
        >
          <ProfessionalAddForm
            occupations={occupationsState.occupations}
            handleSuccessAdd={handleSuccessAddUser}
            onClose={() => setOpenUserAddForm(false)}
          />
        </SideBar>
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

export const ProfessionalListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const defaultUserActiveState = query.get('enabled') !== 'inactive'
  const usersListingProps = {
    ...props,
    defaultUserActiveState,
    isProfessional: true,
    UIComponent: ProfessionalListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  }
  return (
    <UsersListController {...usersListingProps} />
  )
}
