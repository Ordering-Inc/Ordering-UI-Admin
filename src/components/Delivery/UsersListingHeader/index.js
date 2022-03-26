import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { UsersDeleteButton, UsersExportCSV } from '../../Users'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

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
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip>
                {t('START_TUTORIAL', 'Start tutorial')}
              </Tooltip>
            }
          >
            <IconButton
              color='dark'
              className='tour_btn'
              onClick={() => handleOpenTour()}
            >
              <LifePreserver />
            </IconButton>
          </OverlayTrigger>
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
          isCustomLayout
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
