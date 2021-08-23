import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DriversCompaniesList as DriversCompaniesListController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../styles/Buttons'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { SearchBar } from '../SearchBar'
import { DriversCompaniesList } from '../DriversCompaniesList'

import {
  DriversCompaniesListContainer,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderRightContainer
} from './styles'

const DriversCompaniesListingUI = (props) => {
  const {
    driversCompaniesState
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)

  return (
    <DriversCompaniesListContainer>
      <HeaderContainer>
        <HeaderLeftContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('DRIVERS_COMPANIES', 'Drivers companies')}</h1>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            // onClick={() => handleOpenUserAddForm()}
          >
            {t('ADD_DRIVER_COMPANY', 'Add driver company')}
          </Button>
          {/* <UsersExportCSV
            userTypesSelected={userTypesSelected}
            selectedUserActiveState={selectedUserActiveState}
          /> */}
          {/* <UsersDeleteButton
            selectedUsers={selectedUsers}
            deleteUsersActionState={deleteUsersActionState}
            handleDeleteSeveralUsers={handleDeleteSeveralUsers}
          /> */}
          <SearchBar
            onSearch={val => setSearchValue(val)}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </HeaderRightContainer>
      </HeaderContainer>
      <DriversCompaniesList
        driversCompaniesState={driversCompaniesState}
        searchValue={searchValue}
      />
    </DriversCompaniesListContainer>
  )
}

export const DriversCompaniesListing = (props) => {
  const driversCompaniesProps = {
    ...props,
    UIComponent: DriversCompaniesListingUI
  }
  return <DriversCompaniesListController {...driversCompaniesProps} />
}
