import React from 'react'
import { BusinessMenuShare as BusinessMenuShareController } from 'ordering-components-admin'
import { SelectBusinesses } from '../SelectBusinesses'

const BusinessMenuShareUI = (props) => {
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

export const BusinessMenuShare = (props) => {
  const businessMenuShareProps = {
    ...props,
    UIComponent: BusinessMenuShareUI
  }
  return (
    <BusinessMenuShareController {...businessMenuShareProps} />
  )
}
