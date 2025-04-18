import React, { useState, useEffect } from 'react'
import { useConfig, DriversList as DriversController } from 'ordering-components-admin'
import { OrdersLateralBar } from '../../OrdersLateralBar'
import { GoogleMapsApiKeySettingButton } from '../../GoogleMapsApiKeySettingButton'
import { DriversOnlineOfflineFilter } from '../../DriversOnlineOfflineFilter'
import { DriversBusyStatusFilter } from '../../DriversBusyStatusFilter'
import { DriversList } from '../../DriversList'

import {
  DriversHeader,
  DriversContainer,
  DriversContent,

  DriverListContainer,
  FilterContainer,
  WrapperDriversList
} from './styles'

const DriversManagerUI = (props) => {
  const {
    driversIsOnline,
    driversList,
    handleChangeDriverIsOnline,
    driversSubfilter,
    handleChangeDriversSubFilter,
    onlineDrivers,
    offlineDrivers,
    setMapsData,
    selectedDriver,
    setSelectedDriver,
    assignedOrders,
    handleUpdateAssignedOrders,
    showCompressedInfo,
    handleEmtpyOrderSelected,
    orderForMap
  } = props

  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const numberOfonlineDrivers = onlineDrivers.length
  const numberOfofflineDrivers = offlineDrivers.length
  const numberOfbusyDrivers = driversIsOnline ? onlineDrivers.filter(ele => ele.busy).length : offlineDrivers.filter(ele => ele.busy).length
  const numberOfnotBusyDrivers = driversIsOnline ? onlineDrivers.filter(ele => !ele.busy).length : offlineDrivers.filter(ele => !ele.busy).length

  const [isOpenDriverOrders, setIsOpenDriverOrders] = useState(false)
  const [openDriver, setOpenDriver] = useState(null)

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
  }

  const handleChangeDriver = (driver) => {
    handleEmtpyOrderSelected && handleEmtpyOrderSelected()
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(null)
    } else {
      setSelectedDriver(driver)
    }
  }

  const handleOpenDriverOrders = (driver) => {
    setOpenDriver(driver)
    setIsOpenDriverOrders(true)
  }

  useEffect(() => {
    setSelectedDriver(null)
  }, [driversIsOnline])

  useEffect(() => {
    setMapsData({
      driversIsOnline: driversIsOnline,
      onlineDrivers: onlineDrivers,
      offlineDrivers: offlineDrivers,
      selectedDriver: selectedDriver
    })
  }, [driversIsOnline, selectedDriver, onlineDrivers, offlineDrivers])

  useEffect(() => {
    if (orderForMap === null) {
      setSelectedDriver(null)
    }
  }, [orderForMap])

  useEffect(() => {
    handleUpdateAssignedOrders && handleUpdateAssignedOrders(assignedOrders)
  }, [assignedOrders])

  return (
    <>
      <DriversContainer>
        <DriversHeader>
          {!googleMapsApiKey && (
            <GoogleMapsApiKeySettingButton />
          )}
        </DriversHeader>
        <DriversContent>
          <DriverListContainer showCompressedInfo={showCompressedInfo}>
            <FilterContainer>
              <DriversOnlineOfflineFilter
                driversIsOnline={driversIsOnline}
                handleChangeDriverIsOnline={handleChangeDriverIsOnline}
                numberOfonlineDrivers={numberOfonlineDrivers}
                numberOfofflineDrivers={numberOfofflineDrivers}
                showCompressedInfo={showCompressedInfo}
              />
              <DriversBusyStatusFilter
                driversSubfilter={driversSubfilter}
                handleChangeDriversSubFilter={handleChangeDriversSubFilter}
                numberOfbusyDrivers={numberOfbusyDrivers}
                numberOfnotBusyDrivers={numberOfnotBusyDrivers}
                showCompressedInfo={showCompressedInfo}
              />
            </FilterContainer>
            <WrapperDriversList>
              <DriversList
                hidePhoto
                loading={driversList.loading}
                driversIsOnline={driversIsOnline}
                onlineDrivers={onlineDrivers}
                offlineDrivers={offlineDrivers}
                selectedDriver={selectedDriver}
                handleChangeDriver={handleChangeDriver}
                handleOpenDriverOrders={handleOpenDriverOrders}
                showCompressedInfo={showCompressedInfo}
              />
            </WrapperDriversList>
          </DriverListContainer>
        </DriversContent>

        {isOpenDriverOrders && openDriver && (
          <OrdersLateralBar
            isDriver
            open={isOpenDriverOrders}
            user={openDriver}
            onClose={() => handleBackRedirect()}
          />
        )}
      </DriversContainer>
    </>
  )
}

export const DriversManager = (props) => {
  const DriversControlProps = {
    ...props,
    asDashboard: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'photo'],
    UIComponent: DriversManagerUI
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
