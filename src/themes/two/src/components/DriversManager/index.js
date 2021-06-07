import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { DriversDashboard } from '../DriversDashboard'
import { DriverOrdersLateralBar } from '../DriverOrdersLateralBar'
import {
  DriversContainer,
  DriversContent
} from './styles'

const DriversManagerUI = (props) => {
  const {
    onOrderRedirect
  } = props

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDriverOrders, setIsOpenDriverOrders] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
    onOrderRedirect()
  }

  const handleChangeDriver = (driver) => {
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(null)      
    } else {
      setSelectedDriver(driver)
    }
  }

  useEffect(() => {
    if (!selectedDriver) return
    setIsOpenDriverOrders(true)
  }, [selectedDriver])

  return (
    <>
      <DriversContainer>
        <DriversContent>
          <DriversDashboard
            {...props}
            selectedDriver={selectedDriver}
            handleChangeDriver={handleChangeDriver}
          />
        </DriversContent>

        {isOpenDriverOrders && (
          <DriverOrdersLateralBar
            open={isOpenDriverOrders}
          />
        )}
      </DriversContainer>
    </>
  )
}

export const DriversManager = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriversManagerUI,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
