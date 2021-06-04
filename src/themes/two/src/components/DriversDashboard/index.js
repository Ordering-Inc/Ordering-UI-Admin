import React, { useState } from 'react'
import { DriversLocation } from '../DriversLocation'
import { DriversList } from '../DriversList'
import { DriversOnlineOfflineFilter } from '../DriversOnlineOfflineFilter'
import { DriversBusyStatusFilter } from '../DriversBusyStatusFilter'
import {
  DriversDashboardContainer,
  DriversContainer,
  FilterContainer,
  WrapperDriversList,
  WrapperDriversLocation
} from './styles'

export const DriversDashboard = (props) => {
  const {
    driversList
  } = props
  return (
    <DriversDashboardContainer>
      <DriversContainer>
        <FilterContainer>
          <DriversOnlineOfflineFilter />
          <DriversBusyStatusFilter />
        </FilterContainer>
        <WrapperDriversList id='driversList'>
          <DriversList
            driversList={driversList}
          />
        </WrapperDriversList>
      </DriversContainer>
      <WrapperDriversLocation>
        <DriversLocation
          driversList={driversList}
          driverAvailable='all'
          interActionMapOrder={null}
        />
      </WrapperDriversLocation>
    </DriversDashboardContainer>
  )
}
