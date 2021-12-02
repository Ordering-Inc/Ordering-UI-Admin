import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DeliveriesManager } from '../DeliveriesManager'
import { DriversManager } from '../DriversManager'
import { useConfig, useEvent } from 'ordering-components-admin'
import {
  Container,
  ChildrenWrapper,
  MemoComponents,
  DeliveryDashboardWrapper,
  DriversDashboardWrapper,
  MemoWrapper
} from './styles'

export const PageContentWrapper = ({ children, props }) => {
  const location = useLocation()
  const isDeliveryDashboard = location.pathname === '/deliveries'
  const isDriversDashboard = location.pathname === '/drivers'
  const childrenWrapper = useRef(null)
  const memoComponents = useRef(null)
  const deliveriesManager = useRef(null)
  const driversManager = useRef(null)
  const [configState] = useConfig()
  const [mapReady, setMapReady] = useState(false)
  const [events] = useEvent()
  let driverEl, deliveryEl

  const driversListProps = {
    ...props,
    isSearchByName: true,
    isSearchByCellphone: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification'],
    onDriverRedirect: (driverId) => {
      if (!driverId) {
        return events.emit('go_to_page', { page: 'drivers', replace: true })
      }
      return events.emit('go_to_page', { page: 'drivers', search: `?id=${driverId}` })
    }
  }

  const deliveriesManagerProps = {
    ...props,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return events.emit('go_to_page', { page: 'deliveries', replace: true })
      }
      return events.emit('go_to_page', { page: 'deliveries', search: `?id=${orderId}` })
    }
  }

  const activeMemoElements = () => {
    childrenWrapper.current.style.display = 'none'
    memoComponents.current.style.display = 'block'
  }

  const activeChildrens = () => {
    childrenWrapper.current.style.display = 'block'
    memoComponents.current.style.display = 'none'
  }

  const addShowClass = (el) => {
    el.classList.add('show')
    el.classList.remove('hide')
  }

  const removeShowClass = (el) => {
    el.classList.remove('show')
    el.classList.add('hide')
  }

  const showDriversManager = () => {
    if (driverEl && deliveryEl) {
      addShowClass(driverEl)
      removeShowClass(deliveryEl)
    }
  }

  const showDeliveryManager = () => {
    if (driverEl && deliveryEl) {
      addShowClass(deliveryEl)
      removeShowClass(driverEl)
    }
  }

  useEffect(() => {
    if (mapReady && isDeliveryDashboard) {
      driverEl = driversManager.current
      deliveryEl = deliveriesManager.current
      activeMemoElements()
      showDeliveryManager()
      return
    }
    if (mapReady && isDriversDashboard) {
      driverEl = driversManager.current
      deliveryEl = deliveriesManager.current
      activeMemoElements()
      showDriversManager()
      return
    }
    activeChildrens()
  }, [location, mapReady])

  useEffect(() => {
    const _mapkey = configState?.configs?.google_maps_api_key?.value
    if (typeof _mapkey !== 'undefined') {
      setMapReady(true)
    }
  }, [configState])

  return (
    <Container id='page-content-wrapper'>
      <ChildrenWrapper ref={childrenWrapper}>
        {children}
      </ChildrenWrapper>
      <MemoComponents ref={memoComponents}>
        {mapReady && (
          <MemoWrapper>
            <DeliveryDashboardWrapper ref={deliveriesManager} className='deliveriesManager hide'>
              <DeliveriesManager {...deliveriesManagerProps} />
            </DeliveryDashboardWrapper>
            <DriversDashboardWrapper ref={driversManager} className='driversManager hide'>
              <DriversManager {...driversListProps} />
            </DriversDashboardWrapper>
          </MemoWrapper>
        )}
      </MemoComponents>
    </Container>
  )
}
