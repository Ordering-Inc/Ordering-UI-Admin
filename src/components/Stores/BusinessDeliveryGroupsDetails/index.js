import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLanguage, DriversGroupsList as DriversGroupsListController } from 'ordering-components-admin'
import { getStorageItem, removeStorageItem } from '../../../utils'
import { Alert, Confirm } from '../../Shared'
import { WizardDelivery } from '../../Delivery/WizardDelivery'
import { DriversGroupsList } from '../../Delivery/DriversGroupsList'

import {
  DriversGroupsListingContainer,
  Description
} from './styles'

const DriversGroupsListingDetailsUI = (props) => {
  const {
    driversGroupsState,
    selectedGroupList,
    handleSelectGroup,
    handleAllSelectGroup,
    actionState,
    handleUpdateDriversGroup,
    paginationSettings,
    pagination,
    setPagination
  } = props

  const history = useHistory()
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(4)

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  const handleOpenTour = () => {
    setCurrentTourStep(4)
    setIsTourOpen(true)
  }

  useEffect(() => {
    if (history.location?.state?.isFromTourDriversGroup) {
      handleOpenTour()
    }
  }, [history.location?.state?.isFromTourDriversGroup])

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
      <Description>{t('BUSINESS_IN_FOLLOWING_DRIVER_GROUPS', 'This business is in the following driver groups')}</Description>
      <DriversGroupsListingContainer>
        <DriversGroupsList
          isFromStore
          driversGroupsState={driversGroupsState}
          handleUpdateDriversGroup={handleUpdateDriversGroup}
          selectedGroupList={selectedGroupList}
          handleSelectGroup={handleSelectGroup}
          handleAllSelectGroup={handleAllSelectGroup}
          paginationSettings={paginationSettings}
          pagination={pagination}
          setPagination={setPagination}
        />
      </DriversGroupsListingContainer>
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
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    UIComponent: DriversGroupsListingDetailsUI
  }
  return (
    <DriversGroupsListController {...driversGroupsListProps} />
  )
}
