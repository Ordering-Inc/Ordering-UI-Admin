import React from 'react'
import { BusinessManagerBusinesses as BusinessManagerBusinessesController } from 'ordering-components-admin'
import { SelectBusinesses } from '../../Shared'

const BusinessManagerBusinessesUI = (props) => {
  const {
    actionState,
    selectedBusinessIds,
    businessesState,
    handleSelectBusiness,
    handleSelectAllBusiness,
    handleUpdateBusinesses
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
        handleUpdateClick={handleUpdateBusinesses}
      />
    </>
  )
}

export const BusinessManagerBusinesses = (props) => {
  const businessMenuShareProps = {
    ...props,
    UIComponent: BusinessManagerBusinessesUI
  }
  return (
    <BusinessManagerBusinessesController {...businessMenuShareProps} />
  )
}
