import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'

import { useSession, useApi } from 'ordering-components-admin'

export const DriversList = (props) => {
  const {
    drivers,
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const requestsState = {}
  const [driverActionStatus, setDriverActionStatus] = useState({ loading: true, error: null })

  /**
   * Get session
   */
  const [session] = useSession()

  /**
   * Array to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Array to save online drivers
   */
  const [onlineDrivers, setOnlineDrivers] = useState([])
  /**
   * Array to save offline drivers
   */
  const [offlineDrivers, setOfflineDrivers] = useState([])
  /**
   * state for drivers online / offline filter
   */
  const [driversIsOnline, setDriversIsOnline] = useState(true)
  /**
   * state for drivers busy / not busy sub filter
   */
  const [driversSubfilter, setDriversSubfilter] = useState({
    busy: true,
    notBusy: true
  })

  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */
  const handleAssignDriver = async (assign) => {
    try {
      setDriverActionStatus({ ...driverActionStatus, loading: true })

      const source = {}
      requestsState.assignDriver = source
      const { content } = await ordering.setAccessToken(session.token).orders(assign.orderId).save({ driver_id: assign.driverId }, { cancelToken: source })

      setDriverActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setDriverActionStatus({ ...driverActionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * change online state for drivers
   * @param {Boolean} isOnline 
   */
  const handleChangeDriverIsOnline = (isOnline) => {
    setDriversIsOnline(isOnline)
  }

  /**
   * sub filter for drivers
   * @param {Object} subFilter 
   */
  const handleChangeDriversSubFilter = (subFilter) => {
    setDriversSubfilter(subFilter)
  }

  /**
   * Method to get online/offline drivers
   * @param {Array} drivers
   */
  const getOnlineOfflineDrivers = (drivers) => {
    let _onlineDrivers
    let _offlineDrivers
    if (driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(driver => driver.enabled && driver.available)
      _offlineDrivers = drivers.filter(driver => driver.enabled && !driver.available)
    } else if (driversSubfilter.busy && !driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(driver => driver.enabled && driver.available && driver.busy)
      _offlineDrivers = drivers.filter(driver => driver.enabled && !driver.available && driver.busy)
    } else if (!driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(driver => driver.enabled && driver.available && !driver.busy)
      _offlineDrivers = drivers.filter(driver => driver.enabled && !driver.available && !driver.busy)
    } else {
      _onlineDrivers = []
      _offlineDrivers = []
    }
    setOnlineDrivers(_onlineDrivers)
    setOfflineDrivers(_offlineDrivers)
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      setDriversList({ ...driversList, loading: true })
      const source = {}
      requestsState.drivers = source
      const { content: { result } } = await ordering
        .setAccessToken(session.token)
        .users()
        .select(propsToFetch)
        .where([{ attribute: 'level', value: [4] }])
        .get({ cancelToken: source })

      setDriversList({
        ...driversList,
        loading: false,
        drivers: result
      })
      getOnlineOfflineDrivers(result)
    } catch (err) {
      setDriversList({
        ...driversList,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * listen for busy/not busy filter
   */

  useEffect(() => {
    getOnlineOfflineDrivers(driversList.drivers)
  }, [driversSubfilter])

  useEffect(() => {
    if (drivers) {
      setDriversList({ ...driversList, drivers: drivers, loading: false })
      getOnlineOfflineDrivers(drivers)
    } else {
      getDrivers()
    }

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [drivers])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driversList={driversList}
          onlineDrivers={onlineDrivers}
          offlineDrivers={offlineDrivers}
          driverActionStatus={driverActionStatus}
          driversIsOnline={driversIsOnline}
          driversSubfilter={driversSubfilter}
          handleChangeDriverIsOnline={handleChangeDriverIsOnline}
          handleChangeDriversSubFilter={handleChangeDriversSubFilter}
          handleAssignDriver={handleAssignDriver}
        />
      )}
    </>
  )
}

DriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversList.defaultProps = {
  propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
