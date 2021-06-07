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
    driversList,
    onlineDrivers,
    offlineDrivers,
    driversIsOnline,
    driversSubfilter,
    selectedDriver,
    handleChangeDriver,
    handleChangeDriverIsOnline,
    handleChangeDriversSubFilter,
    handleOpenDriverOrders
  } = props

  return (
    <DriversDashboardContainer>
      <DriversContainer>
        <FilterContainer>
          <DriversOnlineOfflineFilter
            driversIsOnline={driversIsOnline}
            handleChangeDriverIsOnline={handleChangeDriverIsOnline}
          />
          <DriversBusyStatusFilter
            driversSubfilter={driversSubfilter}
            handleChangeDriversSubFilter={handleChangeDriversSubFilter}
          />
        </FilterContainer>
        <WrapperDriversList id='driversList'>
          <DriversList
            loading={driversList.loading}
            driversIsOnline={driversIsOnline}
            onlineDrivers={onlineDrivers}
            offlineDrivers={offlineDrivers}
            selectedDriver={selectedDriver}
            handleChangeDriver={handleChangeDriver}
            handleOpenDriverOrders={handleOpenDriverOrders}
          />
        </WrapperDriversList>
      </DriversContainer>
      <WrapperDriversLocation>
        <DriversLocation
          driversIsOnline={driversIsOnline}
          selectedDriver={selectedDriver}
          onlineDrivers={onlineDrivers}
          offlineDrivers={offlineDrivers}
          driversList={driversList}
        />
      </WrapperDriversLocation>
    </DriversDashboardContainer>
  )
}
