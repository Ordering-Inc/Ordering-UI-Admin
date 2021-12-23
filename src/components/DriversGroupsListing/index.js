import React, { useState, useEffect } from 'react'
import { useLanguage, DriversGroupsList as DriversGroupsListController } from 'ordering-components-admin'
import { Button, IconButton } from '../../styles/Buttons'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useInfoShare } from '../../contexts/InfoShareContext'
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
    setDriversGroupsState,
    driversManagersList,
    businessesList,
    paymethodsList,
    driversList,
    selectedGroupList,
    handleSelectGroup,
    handleAllSelectGroup,
    handleDeleteSelectedGroups,

    actionState,
    handleUpdateDriversGroup,
    handleDeleteDriversGroup,
    driversCompanyList
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [moveDistance, setMoveDistance] = useState(0)
  const [openDetails, setOpenDetails] = useState(false)
  const [curDriversGroup, setCurDriversGroup] = useState(null)

  const handleOpenDetails = (driverGroup) => {
    setMoveDistance(0)
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

  const onClickSelectedGroupsDelete = () => {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSelectedGroups()
      }
    })
  }

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
              disabled={selectedGroupList.length === 0}
              onClick={() => onClickSelectedGroupsDelete()}
            >
              {t('DELETE', 'Delete')}
            </Button>
            <SearchBar
              lazyLoad
              onSearch={val => setSearchValue(val)}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
          </HeaderRightContainer>
        </HeaderContainer>
        <DriversGroupsList
          curDriversGroup={curDriversGroup}
          driversGroupsState={driversGroupsState}
          searchValue={searchValue}
          handleOpenDetails={handleOpenDetails}
          handleUpdateDriversGroup={handleUpdateDriversGroup}
          handleDeleteDriversGroup={handleDeleteDriversGroup}
          selectedGroupList={selectedGroupList}
          handleSelectGroup={handleSelectGroup}
          handleAllSelectGroup={handleAllSelectGroup}
        />
      </DriversGroupsListingContainer>
      {openDetails && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550 + moveDistance}
          open={openDetails}
          moveDistance={moveDistance}
          onClose={() => {
            setCurDriversGroup(null)
            setOpenDetails(false)
          }}
        >
          <DriversGroupDetails
            driversGroupsState={driversGroupsState}
            setDriversGroupsState={setDriversGroupsState}
            curDriversGroup={curDriversGroup}
            driversManagers={driversManagersList?.managers}
            businesses={businessesList?.businesses}
            paymethods={paymethodsList?.paymethods}
            drivers={driversList?.drivers}
            companies={driversCompanyList?.companies}
            handleUpdateDriversGroup={handleUpdateDriversGroup}
            handleParentSidebarMove={val => setMoveDistance(val)}
            onClose={() => setOpenDetails(false)}
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
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
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
