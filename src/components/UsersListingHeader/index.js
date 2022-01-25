import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UsersDeleteButton } from '../UsersDeleteButton'
import { UsersExportCSV } from '../UsersExportCSV'
import { SearchBar } from '../SearchBar'
import { List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer
} from './styles'

export const UsersListingHeader = (props) => {
  const {
    deafultUserTypesSelected,
    disabledActiveStateCondition,
    title,
    selectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers,
    userTypesSelected,
    selectedUserActiveState,
    searchValue,
    onSearch,
    handleOpenUserAddForm,
    isDriversPage,
    isDriversManagersPage,

    handleOpenTour
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{title}</h1>
        {(isDriversPage || isDriversManagersPage) && (
          <IconButton
            color='dark'
            className='tour_btn'
            onClick={() => handleOpenTour()}
          >
            <LifePreserver />
          </IconButton>
        )}
      </HeaderTitleContainer>
      <ActionContainer>
        <Button
          borderRadius='8px'
          color='lightPrimary'
          onClick={() => handleOpenUserAddForm()}
          data-tour='tour_add'
        >
          {
            isDriversPage
              ? t('ADD_DRIVER', 'Add driver')
              : isDriversManagersPage
                ? t('ADD_DRIVER_MANAGER', 'Add driver manager')
                : t('ADD_USER', 'Add user')
          }
        </Button>
        <UsersExportCSV
          deafultUserTypesSelected={deafultUserTypesSelected}
          disabledActiveStateCondition={disabledActiveStateCondition}
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
        />
        <UsersDeleteButton
          selectedUsers={selectedUsers}
          deleteUsersActionState={deleteUsersActionState}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
        />
        <SearchBar
          lazyLoad
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
