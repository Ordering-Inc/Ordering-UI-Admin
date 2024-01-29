import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession, useApi, useWebsocket, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const DriversList = (props) => {
  const {
    drivers,
    UIComponent,
    propsToFetch,
    isSearchByName,
    isSearchByCellphone,
    isOrderDrivers,
    isSearchFilterValue,
    orderId,
    setCommentInfostate,
    disableSocketRoomDriver,
    useBatchSockets,
    filterValues,
    searchFilterValue,
    driverGroupList
  } = props

  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const requestsState = {}
  const [driverActionStatus, setDriverActionStatus] = useState({ loading: true, error: null })
  const [companyActionStatus, setCompanyActionStatus] = useState({ loading: true, error: null })
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [assignedOrders, setAssignedOrders] = useState({ loading: false, error: null, orders: [] })
  const controller = new AbortController();
  const signal = controller.signal

  const activeOrderStatuses = [0, 13, 7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23]

  const socket = useWebsocket()

  /**
   * Get session
   */
  const [session] = useSession()

  /**
   * Array to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Array to save companys
   */
  const [companysList, setCompanysList] = useState({ companys: [], loading: true, error: null })
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
   * search value
   */
  const [searchValue, setSearchValue] = useState(null)

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    if (search !== searchValue) {
      setSearchValue(search)
    }
  }

  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */
  const handleAssignDriver = async (assign) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setDriverActionStatus({ ...driverActionStatus, loading: true })

      const source = {}
      requestsState.assignDriver = source
      const { content } = await ordering.setAccessToken(session.token).orders(assign.orderId).save({ driver_id: assign.driverId }, { cancelToken: source })

      setDriverActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })

      if (!content.error) {
        if (assign.driverId) {
          showToast(ToastType.Success, t('ORDER_DRIVER_ASSIGNED', 'Driver assigned to order'))
        } else {
          showToast(ToastType.Success, t('ORDER_DRIVER_REMOVED', 'Driver removed from the order'))
        }
      }
    } catch (err) {
      setDriverActionStatus({ ...driverActionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to assign driver_company to order from API
   * @param {object} assign assigned order_id and driver_company_id
   */
  const handleAssignDriverCompany = async (assign) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setCompanyActionStatus({ ...companyActionStatus, loading: true })

      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({
          driver_company_id: assign.companyId
        })
      }
      const response = await fetch(`${ordering.root}/orders/${assign.orderId}`, requestOptions)
      const { error, result } = await response.json()

      setCompanyActionStatus({
        loading: false,
        error: result.error ? result.result : null
      })

      if (!error) {
        if (assign.driverId) {
          showToast(ToastType.Success, t('ORDER_COMPANY_ASSIGNED', 'Company assigned to order'))
        } else {
          showToast(ToastType.Success, t('ORDER_COMPANY_REMOVED', 'Company removed from the order'))
        }
      }
    } catch (err) {
      setCompanyActionStatus({ ...companyActionStatus, loading: false, error: [err.message] })
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
    let driversFiltered = drivers
    if (filterValues?.driverIds?.length > 0) {
      driversFiltered = driversFiltered.filter(driver => filterValues?.driverIds?.includes(driver?.id))
    }

    if (isSearchFilterValue && searchFilterValue) {
      const driverGroupFilter = driverGroupList?.groups?.find(({ name }) => (name.toLowerCase().includes(searchFilterValue.toLowerCase())))
      if (driverGroupFilter) {
        driversFiltered = driversFiltered.filter(driver => (driverGroupFilter.drivers.includes(driver.id)))
      }
    }

    if (driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(driver => driver.enabled && driver.available)
      _offlineDrivers = driversFiltered.filter(driver => driver.enabled && !driver.available)
    } else if (driversSubfilter.busy && !driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(driver => driver.enabled && driver.available && driver.busy)
      _offlineDrivers = driversFiltered.filter(driver => driver.enabled && !driver.available && driver.busy)
    } else if (!driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(driver => driver.enabled && driver.available && !driver.busy)
      _offlineDrivers = driversFiltered.filter(driver => driver.enabled && !driver.available && !driver.busy)
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

      let where = null
      const conditions = []
      conditions.push({ attribute: 'level', value: [4] })

      if (searchValue) {
        const searchConditions = []
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
          searchConditions.push(
            {
              attribute: 'lastname',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByCellphone) {
          searchConditions.push(
            {
              attribute: 'cellphone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const { content: { result } } = await ordering
        .setAccessToken(session.token)
        .users()
        .select(propsToFetch)
        .where(where)
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
   * Method to get the drivers of order from API
   */
  const getOrderDrivers = async () => {
    try {
      setDriversList({ ...driversList, loading: true })
      setCompanysList({ ...companysList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        signal
      }
      const response = await fetch(`${ordering.root}/controls/orders/${orderId}`, requestOptions)
      const { error, result } = await response.json()

      const drivers = result?.drivers?.map(driver => ({ ...driver, enabled: true }))
      setDriversList({
        loading: false,
        drivers: error ? [] : drivers,
        error: error ? result : null
      })
      setCompanysList({
        loading: false,
        companys: error ? [] : result?.driver_companies,
        error: error ? result : null
      })
    } catch (err) {
      setDriversList({
        ...driversList,
        loading: false,
        error: err.message
      })
      setCompanysList({
        ...companysList,
        loading: false,
        error: err.message
      })
    }
  }

  const getOrders = async () => {
    let options = null
    let where = []
    const conditions = []
    options = {
      query: {
        orderBy: '-id'
      }
    }

    conditions.push({
      attribute: 'products',
      conditions: [{
        attribute: 'type',
        value: {
          condition: '=',
          value: 'item'
        }
      }]
    })
    conditions.push({ attribute: 'status', value: activeOrderStatuses })
    conditions.push(
      {
        attribute: 'delivery_type',
        value: 1
      }
    )
    conditions.push(
      {
        attribute: 'driver_id',
        value: selectedDriver?.id
      }
    )

    if (conditions.length) {
      where = {
        conditions,
        conector: 'AND'
      }
    }

    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    const functionFetch = ordering.setAccessToken(session.token).orders().asDashboard().select(['business', 'customer']).where(where)
    return await functionFetch.get(options)
  }

  /**
   * Method to get the orders assigned to the driver
   */
  const loadAssignedOrders = async () => {
    try {
      setAssignedOrders({ ...assignedOrders, loading: true })
      const response = await getOrders()
      setAssignedOrders({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
    } catch (err) {
      setAssignedOrders({ ...assignedOrders, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (selectedDriver?.id) {
      loadAssignedOrders()
    } else {
      setAssignedOrders({
        loading: false,
        orders: [],
        error: null
      })
    }
  }, [selectedDriver?.id])

  /**
   * listen for busy/not busy filter
   */
  useEffect(() => {
    getOnlineOfflineDrivers(driversList.drivers)
  }, [driversSubfilter, filterValues?.driverIds, searchFilterValue])

  useEffect(() => {
    if (drivers) {
      setDriversList({ ...driversList, drivers: drivers, loading: false })
      getOnlineOfflineDrivers(drivers)
    } else {
      if (isOrderDrivers) {
        getOrderDrivers()
      } else {
        getDrivers()
      }
    }

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
      if (isOrderDrivers) {
        controller?.abort();
      }
    }
  }, [drivers, searchValue, orderId])

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (session?.loading) return
    const handleUpdateDriver = (driver) => {
      const found = driversList.drivers.find(_driver => _driver.id === driver.id)
      let _drivers = []
      if (found) {
        _drivers = driversList.drivers.filter(_driver => {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver)
          }
          return true
        })
      } else {
        if (!isOrderDrivers) {
          _drivers = [...driversList.drivers, driver]
        } else {
          _drivers = [...driversList.drivers]
        }
      }
      setDriversList({
        ...driversList,
        drivers: _drivers
      })
    }
    const handleTrackingDriver = (trackingData) => {
      let drivers = []
      drivers = driversList.drivers.filter(_driver => {
        if (_driver.id === trackingData.driver_id) {
          if (typeof trackingData.location === 'string') {
            const trackingLocation = trackingData.location
            const _location = trackingLocation.replaceAll('\\', '')
            const location = JSON.parse(_location)
            _driver.location = location
          } else {
            _driver.location = trackingData.location
          }
        }
        return true
      })
      setDriversList({ ...driversList, drivers: drivers })
    }
    const handleBatchDriverChanges = (changes) => {
      setDriversList((prevState) => {
        const updatedDrivers = prevState.drivers.map((driver) => {
          const changeData = changes.find((change) => change.driver_id === driver.id)
          if (changeData) {
            const updatedDriver = { ...driver }
            for (const change of changeData.changes) {
              updatedDriver[change.attribute] = change.new
            }
            return updatedDriver
          }
          return driver
        })
        return { ...prevState, drivers: updatedDrivers }
      })
    }
    const handleBatchDriverLocations = (locations) => {
      setDriversList((prevState) => {
        const updatedDrivers = prevState.drivers.map((driver) => {
          const locationData = locations.find((location) => location.driver_id === driver.id)
          if (locationData) {
            const updatedDriver = { ...driver }
            updatedDriver.location = locationData.location
            return updatedDriver
          }
          return driver
        })
        return { ...prevState, drivers: updatedDrivers }
      })
    }

    if (!disableSocketRoomDriver) {
      if (!useBatchSockets) {
        socket.on('drivers_update', handleUpdateDriver)
        socket.on('tracking_driver', handleTrackingDriver)
      } else {
        socket.on('batch_driver_locations', handleBatchDriverLocations)
        socket.on('batch_driver_changes', handleBatchDriverChanges)
      }
    }
    return () => {
      if (!disableSocketRoomDriver) {
        if (!useBatchSockets) {
          socket.off('drivers_update', handleUpdateDriver)
          socket.off('tracking_driver', handleTrackingDriver)
        } else {
          socket.off('batch_driver_locations', handleBatchDriverLocations)
          socket.off('batch_driver_changes', handleBatchDriverChanges)
        }
      }
    }
  }, [socket, session?.loading, driversList.drivers])

  const handleJoinMainRooms = () => {
    if (!useBatchSockets) {
      socket.join('drivers')
    } else {
      socket.join({
        room: 'driver_locations',
        user_id: session?.user?.id,
        role: 'manager'
      })
      socket.join({
        room: 'drivers',
        user_id: session?.user?.id,
        role: 'manager'
      })
    }
  }

  const handleLeaveMainRooms = () => {
    if (!useBatchSockets) {
      socket.leave('drivers')
    } else {
      socket.leave({
        room: 'driver_locations',
        user_id: session?.user?.id,
        role: 'manager'
      })
      socket.leave({
        room: 'drivers',
        user_id: session?.user?.id,
        role: 'manager'
      })
    }
  }

  const handleSocketDisconnect = () => {
    socket.socket.on('connect', handleJoinMainRooms)
  }

  useEffect(() => {
    if (!session?.auth || session?.loading || !socket?.socket || disableSocketRoomDriver) return
    handleJoinMainRooms()
    socket.socket.on('disconnect', handleSocketDisconnect)

    return () => {
      handleLeaveMainRooms()
      socket.socket.off('disconnect', handleSocketDisconnect)
    }
  }, [socket?.socket, session?.auth, session?.loading, disableSocketRoomDriver, useBatchSockets])

  useEffect(() => {
    getOnlineOfflineDrivers(driversList.drivers)
  }, [driversList.drivers])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driversList={driversList}
          companysList={companysList}
          onlineDrivers={onlineDrivers}
          offlineDrivers={offlineDrivers}
          driverActionStatus={driverActionStatus}
          companyActionStatus={companyActionStatus}
          driversIsOnline={driversIsOnline}
          driversSubfilter={driversSubfilter}
          searchValue={searchValue}
          handleAssignDriverCompany={handleAssignDriverCompany}
          handleChangeSearch={handleChangeSearch}
          handleChangeDriverIsOnline={handleChangeDriverIsOnline}
          handleChangeDriversSubFilter={handleChangeDriversSubFilter}
          handleAssignDriver={handleAssignDriver}
          selectedDriver={selectedDriver}
          setSelectedDriver={setSelectedDriver}
          assignedOrders={assignedOrders}
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
