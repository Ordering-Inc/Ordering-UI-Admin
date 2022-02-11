import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, DriversGroupsList as DriversGroupsListController } from 'ordering-components-admin'
import { List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { getStorageItem, removeStorageItem } from '../../../utils'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { Alert, Confirm, SearchBar, SideBar } from '../../Shared'
import { WizardDelivery } from '../WizardDelivery'
import { DriversGroupsList } from '../DriversGroupsList'
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

  const history = useHistory()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [moveDistance, setMoveDistance] = useState(0)
  const [openDetails, setOpenDetails] = useState(false)
  const [curDriversGroup, setCurDriversGroup] = useState(null)

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(4)

  const handleOpenDetails = (driverGroup) => {
    setMoveDistance(0)
    setCurDriversGroup(driverGroup)
    setOpenDetails(true)

    if (!driverGroup) {
      setTimeout(() => {
        setCurrentTourStep(5)
      }, 50)
    }
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

  const handleOpenTour = () => {
    setOpenDetails(false)
    setCurrentTourStep(4)
    setIsTourOpen(true)
  }

  useEffect(() => {
    if (history.location?.state?.isFromTourDriversGroup) {
      handleOpenTour()
    }
  }, [history.location?.state?.isFromTourDriversGroup])

  const handleNextTour = () => {
    setTimeout(() => {
      setCurrentTourStep(6)
    }, 50)
  }

  const handleDeliveryTourCompleted = () => {
    setTimeout(() => {
      setCurrentTourStep(7)
    }, 50)
  }

  const getDataFromStorage = async () => {
    const value = await getStorageItem('isFromDeliveryDriversGroup', true)
    if (value) {
      removeStorageItem('isFromDeliveryDriversGroup')
      handleOpenTour()
    }
  }
  useEffect(() => {
    getDataFromStorage()
  }, [])

  return (
    <>
      <DriversGroupsListingContainer>
        <HeaderContainer>
          <HeaderLeftContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse()}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('DRIVERS_GROUPS', 'Drivers groups')}</h1>
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
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              data-tour='tour_add_group'
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
          sidebarId='driver_group_details'
          defaultSideBarWidth={550 + moveDistance}
          open={openDetails}
          moveDistance={moveDistance}
          noAnimation={isTourOpen}
          onClose={() => {
            setCurDriversGroup(null)
            setOpenDetails(false)
            setIsTourOpen(false)
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
            onClose={() => {
              setOpenDetails(false)
              if (isTourOpen) {
                handleDeliveryTourCompleted()
              }
            }}
            isTourOpen={isTourOpen}
            handleNextTour={handleNextTour}
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
