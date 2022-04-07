import React from 'react'
// import { BusinessDeliveryZoneShare as BusinessDeliveryZoneShareController } from 'ordering-components-admin'
import { BusinessDeliveryZoneShare as BusinessDeliveryZoneShareController } from './nest'
import { SelectBusinesses } from '../../Shared'

export const BusinessDeliveryZoneShareUI = (props) => {
  const {
    actionState,
    selectedBusinessIds,
    businessesState,
    handleSelectBusiness,
    handleSelectAllBusiness,
    handleShareBusinesses
  } = props

  return (
    <>
      <SelectBusinesses
        isSkeleton={businessesState.loading}
        allBusinesses={businessesState.businesses}
        selectedBusinessIds={selectedBusinessIds}
        handleSelectBusiness={handleSelectBusiness}
        handleSelectAllBusinesses={() => handleSelectAllBusiness(true)}
        handleSelectNoneBusinesses={() => handleSelectAllBusiness(false)}
        isDisabled={actionState.loading || businessesState.loading}
        handleUpdateClick={handleShareBusinesses}
      />
    </>
  )
}

export const BusinessDeliveryZoneShare = (props) => {
  const BusinessDeliveryZoneShareProps = {
    ...props,
    UIComponent: BusinessDeliveryZoneShareUI
  }
  return (
    <BusinessDeliveryZoneShareController {...BusinessDeliveryZoneShareProps} />
  )
}
