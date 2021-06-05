import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { DriversDashboard } from '../DriversDashboard'

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

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
    onOrderRedirect()
  }

  const closeOrderDetailModal = (e) => {
    if (e.code === 'Escape') {
      handleBackRedirect()
    }
  }

  useEffect(() => {
    if (!isOpenDriverOrders) return
    document.addEventListener('keydown', closeOrderDetailModal)
    return () => document.removeEventListener('keydown', closeOrderDetailModal)
  }, [isOpenDriverOrders])

  return (
    <>
      <DriversContainer>
        <DriversContent>
          <DriversDashboard
            {...props}
          />
        </DriversContent>
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
