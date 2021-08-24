import React, { useState, useEffect } from 'react'
import { DriversGroupsList as DriversGroupsListController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { Button, IconButton } from '../../styles/Buttons'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { SearchBar } from '../SearchBar'
import { DriversGroupsList } from '../DriversGroupsList'
import { Alert, Confirm } from '../Confirm'
import { SideBar } from '../SideBar'
import { DriversGroupDetails } from '../DriversGroupDetails'

import {
  DriversGroupsListingContainer,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderRightContainer
} from './styles'

const DriversGroupsListingUI = (props) => {
  const {
    driversGroupsState,
    driversManagersList,
    businessesList,
    openDetails,
    setOpenDetails,
    cleanChagesState,
    changesState,
    actionState,
    handleChangesState,
    handleUpdateDriversGroup,
    curDriversGroup,
    setCurDriversGroup,
    handleSelectBusiness,
    handleSelectAllBusiness,
    selectedBusinessIds
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleOpenDetails = (driverGroup) => {
    cleanChagesState()
    setCurDriversGroup(driverGroup)
    setOpenDetails(true)
  }

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <DriversGroupsListingContainer>
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
            <h1>{t('DRIVERS_GROUPS', 'Drivers groups')}</h1>
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleOpenDetails(null)}
            >
              {t('ADD_DRIVER_GROUP', 'Add driver group')}
            </Button>
            <Button
              borderRadius='8px'
              color='secundary'
              // disabled={selectedCompanyList.length === 0}
              // onClick={() => onClickSelectedCompaniesDelete()}
            >
              {t('DELETE', 'Delete')}
            </Button>
            <SearchBar
              onSearch={val => setSearchValue(val)}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
          </HeaderRightContainer>
        </HeaderContainer>
        <DriversGroupsList
          driversGroupsState={driversGroupsState}
          searchValue={searchValue}
          handleOpenDetails={handleOpenDetails}
          handleUpdateDriversGroup={handleUpdateDriversGroup}
        />
      </DriversGroupsListingContainer>
      {openDetails && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550}
          open={openDetails}
          onClose={() => {
            setCurDriversGroup(null)
            setOpenDetails(false)
          }}
        >
          <DriversGroupDetails
            driversGroup={curDriversGroup}
            driversManagers={driversManagersList?.managers}
            businesses={businessesList?.businesses}
            changesState={changesState}
            actionState={actionState}
            handleChangesState={handleChangesState}
            handleUpdateDriversGroup={handleUpdateDriversGroup}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllBusiness={handleSelectAllBusiness}
            selectedBusinessIds={selectedBusinessIds}
            // handleAddDriversCompany={handleAddDriversCompany}
          />
        </SideBar>
      )}
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('ORDERING', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DriversGroupsListing = (props) => {
  const driversGroupsListProps = {
    ...props,
    isDriversMangersRequired: true,
    UIComponent: DriversGroupsListingUI
  }
  return (
    <DriversGroupsListController {...driversGroupsListProps} />
  )
}
