import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  UsersList as UsersListController,
  useLanguage
} from 'ordering-components-admin'
import { UsersList } from '../UsersList'
import { UsersListingHeader } from '../UsersListingHeader'
import { UserActiveStateFilter } from '../UserActiveStateFilter'
import { CustomerDetails } from '../CustomerDetails'
import { SideBar } from '../../Shared'
import { UserAddForm } from '../UserAddForm'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { Button } from '../../../styles'
import { X as CloseIcon } from 'react-bootstrap-icons'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  UsersListingContainer,
  ActionsContainer,
  VerifiedStatusFilterContainer,
  ActionButtonsGroup
} from './styles'

const CustomersListingUI = (props) => {
  const {
    defaultUserTypesSelected,
    disabledActiveStateCondition,
    headerTitle,

    usersList,
    paginationProps,
    getUsers,
    searchValue,
    onSearch,
    userTypesSelected,
    // isVerified,
    // setIsVerified,
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
    orderFilterValue,
    handleChangeOrderFilterValue,
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
  const [sideBarWidth, setSideBarWidth] = useState(500)
  const [moveDistance, setMoveDistance] = useState(0)

  const orderList = [
    { id: 1, name: t('NO_ORDERS', 'No orders'), value: 0 },
    { id: 2, name: t('WITH_ORDERS', 'With orders'), value: 1 },
    { id: 3, name: t('WITH_5_ORDERS', 'With 5+ orders'), value: 5 }
  ]

  const handleBackRedirect = () => {
    setIsOpenUserDetails(false)
    setOpenUser(null)
    setQueryId(null)
    setSideBarWidth(500)
    moveDistance && setMoveDistance(0)
    removeQueryToUrl(['id', 'section', 'tab'])
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
          multiFilterValues={multiFilterValues}
          handleChangeMultiFilterValues={handleChangeMultiFilterValues}
          isCustomers
        />
        <UserActiveStateFilter
          selectedUserActiveState={selectedUserActiveState}
          handleChangeUserActiveState={handleChangeUserActiveState}
        />
        <ActionsContainer>
          <VerifiedStatusFilterContainer>
            <Button
              color={(orderFilterValue === '' || orderFilterValue === null) ? 'primary' : 'secundaryDark'}
              onClick={() => handleChangeOrderFilterValue(null)}
            >
              {t('ALL', 'All')}
            </Button>
            {orderList.map((item, i) => (
              <Button
                key={i}
                color={orderFilterValue === item.value ? 'primary' : 'secundaryDark'}
                onClick={() => handleChangeOrderFilterValue(prev => prev === item.value ? null : item.value)}
              >
                {item.name}
                {orderFilterValue === item.value && <CloseIcon />}
              </Button>
            ))}
          </VerifiedStatusFilterContainer>
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
              multiFilterValues={multiFilterValues}
            />
            <UsersDeleteButton
              selectedUsers={selectedUsers}
              deleteUsersActionState={deleteUsersActionState}
              handleDeleteSeveralUsers={handleDeleteSeveralUsers}
            />
          </ActionButtonsGroup>
        </ActionsContainer>
        <UsersList
          isCustomer
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
        <SideBar
          sidebarId='customer_details'
          open={isOpenUserDetails}
          onClose={() => handleBackRedirect()}
          defaultSideBarWidth={sideBarWidth}
          moveDistance={moveDistance}
        >
          <CustomerDetails
            user={openUser}
            userId={openUser?.id || queryId}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessDeleteUser={handleSuccessDeleteUser}
            onClose={() => handleBackRedirect()}
            handleParentSidebarMove={val => setMoveDistance(val)}
            setSideBarWidth={setSideBarWidth}
            handleChangeActiveUser={handleChangeActiveUser}
          />
        </SideBar>
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

export const CustomersListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const defaultUserActiveState = query.get('enabled') !== 'inactive'
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const customersProps = {
    ...props,
    defaultUserActiveState,
    UIComponent: CustomersListingUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    propsToFetch: [
      'name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'loyalty_level', 'loyalty_level_id', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'phone_verified', 'email_verified', 'wallets', 'orders_count', 'push_tokens'
    ]
  }
  return (
    <UsersListController {...customersProps} />
  )
}
