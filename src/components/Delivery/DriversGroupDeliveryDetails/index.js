import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  DriverGroupDeliveryDetails as DriverGroupDeliveryDetailsController
} from 'ordering-components-admin'
import { DriverGroupDeliveryZoneList } from '../DriversGroupDeliveryZoneList'
import { Button } from '../../../styles'
import { Alert } from '../../Shared'

import {
  Container,
} from './styles'

const DriverGroupDeliveryDetailsUI = (props) => {
  const {
    drivergroup,
    setIsExtendExtraOpen,
    formState,
    onDeliveryStateSave,
    actionState,
    zoneListState,
    handleChangeZoneState,
    handleChangeAllZoneState,
    handleParentSidebarMove,
    zoneList,
    setZoneList,
    setIsOpenDetails,
    isOpenDetails
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <Container>
      <DriverGroupDeliveryZoneList
        setZoneList={setZoneList}
        handleParentSidebarMove={handleParentSidebarMove}
        drivergroup={drivergroup}
        zoneList={zoneList}
        setIsExtendExtraOpen={setIsExtendExtraOpen}
        onClose={() => setIsExtendExtraOpen(false)}
        zoneListState={zoneListState}
        handleChangeZoneState={handleChangeZoneState}
        handleChangeAllZoneState={handleChangeAllZoneState}
        setIsOpenDetails={setIsOpenDetails}
        isOpenDetails={isOpenDetails}
      />
      <Button
        borderRadius='8px'
        color='primary'
        disabled={actionState?.loading || (Object?.keys(formState?.changes)?.length === 0 && !zoneListState?.isDirty)}
        onClick={() => onDeliveryStateSave()}
      >
        {t('SAVE', 'Save')}
      </Button>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState?.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const DriverGroupDeliveryDetails = (props) => {
  const driverGroupDeliveryProps = {
    ...props,
    UIComponent: DriverGroupDeliveryDetailsUI
  }
  return <DriverGroupDeliveryDetailsController {...driverGroupDeliveryProps} />
}
