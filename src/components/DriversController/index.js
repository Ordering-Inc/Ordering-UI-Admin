import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'

import { useSession, useApi } from 'ordering-components'

export const DriversList = (props) => {
  const {
    drivers,
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const requestsState = {}
  /**
   * Get token session
   */
  const [{ token }] = useSession()

  /**
   * Array to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Array to save order id and assigned driver id.
   */
  const [assignStatus, setAssignStatus] = useState({ assign: {}, loading: true, error: null })
  /**
   * Change driver
   * @param {object} assign assigned driver id and order is
   */
  const handleChangeDriver = (assign) => {
    setAssignStatus({ ...assignStatus, assign: assign })
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
        .setAccessToken(token)
        .users()
        .select(propsToFetch)
        .where([{ attribute: 'level', value: [4] }])
        .get({ cancelToken: source })

      setDriversList({
        ...driversList,
        loading: false,
        drivers: result
      })
    } catch (err) {
      setDriversList({
        ...driversList,
        loading: false,
        error: err.message
      })
    }
  }
  /**
   * Method to assign driver to order from API
   */
  const assignDriver = async () => {
    try {
      const response = await fetch(`${ordering.root}/paymethods`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      console.log(response)

      setAssignStatus({ ...assignStatus, loading: true })
      const source = {}
      requestsState.assignDriver = source
      const { content: { result } } = await ordering.setAccessToken(token).orders(assignStatus.assign.OrderId).asDashboard().save({
        driver_id: assignStatus.assign.driverId,
        paymethod_id: 1,
        business_id: 3,
        delivery_type: 1,
        customer_id: 13,
        products: assignStatus.assign.products
      }, { cancelToken: source })
      console.log('res', result)
    } catch (err) {
      console.log(err)
      setAssignStatus({ ...assignStatus, loading: false, error: err.message })
    }
  }

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (Object.keys(assignStatus.assign).length === 0) return
    assignDriver()
  }, [assignStatus.assign])

  useEffect(() => {
    if (drivers) {
      setDriversList({ ...driversList, drivers: drivers, loading: false })
    } else {
      getDrivers()
    }

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          drivers={driversList}
          handleChangeDriver={handleChangeDriver}
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
