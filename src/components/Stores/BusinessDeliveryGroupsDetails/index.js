import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, DriversGroupsList as DriversGroupsListController } from 'ordering-components-admin'
import { getStorageItem, removeStorageItem } from '../../../utils'
import { Alert, Confirm, SearchBar, SideBar } from '../../Shared'
import { DriversGroupDetails } from '../../Delivery/DriversGroupDetails'
import { WizardDelivery } from '../../Delivery/WizardDelivery'
import { DriversGroupsList } from '../../Delivery/DriversGroupsList'

import {
  DriversGroupsListingContainer,
  SearchContainer
} from './styles'

const DriversGroupsListingDetailsUI = (props) => {
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
    actionState,
    handleUpdateDriversGroup,
    handleDeleteDriversGroup,
    driversCompanyList
  } = props

  const history = useHistory()
  const [, t] = useLanguage()
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
      <SearchContainer>
        <SearchBar
          lazyLoad
          isCustomLayout
          onSearch={val => setSearchValue(val)}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
          customClass='searchBar'
        />
      </SearchContainer>
      <DriversGroupsListingContainer>
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

export const DriversGroupsListingDetails = (props) => {
  const driversGroupsListProps = {
    ...props,
    isDriversMangersRequired: true,
    UIComponent: DriversGroupsListingDetailsUI
  }
  return (
    <DriversGroupsListController {...driversGroupsListProps} />
  )
}
