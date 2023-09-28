import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import { Button, IconButton, LinkButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { UsersDeleteButton, UsersExportCSV } from '../../Users'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer,
  WarningMessage
} from './styles'
import TiWarningOutline from '@meronex/icons/ti/TiWarningOutline'

export const UsersListingHeader = (props) => {
  const {
    defaultUserTypesSelected,
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

    handleOpenTour,
    actionDisabled
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const handleClearFilters = () => {
    if (searchValue) onSearch('')
  }

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
          disabled={actionDisabled}
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
          defaultUserTypesSelected={defaultUserTypesSelected}
          disabledActiveStateCondition={disabledActiveStateCondition}
          userTypesSelected={userTypesSelected}
          selectedUserActiveState={selectedUserActiveState}
          disabled={actionDisabled}
        />
        <UsersDeleteButton
          selectedUsers={selectedUsers}
          deleteUsersActionState={deleteUsersActionState}
          handleDeleteSeveralUsers={handleDeleteSeveralUsers}
          disabled={actionDisabled}
        />
        {(!!searchValue) && (
          <WarningMessage>
            <TiWarningOutline />
            <span>{t('WARNING_FILTER_APPLIED', 'Filters applied. You may miss new orders.')}</span>
            <LinkButton onClick={() => handleClearFilters()}>{t('CLEAR_FILTERS', 'Clear filters')}</LinkButton>
          </WarningMessage>
        )}
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
