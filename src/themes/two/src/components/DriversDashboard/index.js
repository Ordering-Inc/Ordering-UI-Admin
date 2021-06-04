import React, { useState } from 'react'
import { DriversLocation } from '../DeliveriesLocation'
import { OrdersDashboardList } from '../OrdersDashboardList'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
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
          filter
        </FilterContainer>
        <WrapperDriversList id='driversList'>
          drivers list
        </WrapperDriversList>
      </DriversContainer>
      <WrapperDriversLocation>
        {/* <DriversLocation
          driversList={driversList}
          driverAvailable='all'
          interActionMapOrder={null}
        /> */}
      </WrapperDriversLocation>
    </DriversDashboardContainer>
  )
}
