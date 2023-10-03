import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi, useWebsocket, useConfig, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const OrdersManage = (props) => {
  const {
    UIComponent,
    statusGroup,
    driversPropsToFetch,
    disableSocketRoomDriver,
    useBatchSockets,
    useFranchiseImages
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ auth, user, token, loading }] = useSession()
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const requestsState = {}
  const orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23, 24, 25],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  }

  const [searchValue, setSearchValue] = useState(null)
  const [ordersStatusGroup, setOrdersStatusGroup] = useState(statusGroup || 'pending')
  const [filterValues, setFilterValues] = useState({})
  const [timeStatus, setTimeStatus] = useState(null)
  const [updateStatus, setUpdateStatus] = useState(null)
  const [startMulitOrderStatusChange, setStartMulitOrderStatusChange] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedOrderIds, setDeletedOrderIds] = useState([])
  const allowColumnsModel = {
    slaBar: { visable: false, title: '', className: '', draggable: false, colSpan: 1, order: -2 },
    orderNumber: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: -1 },
    dateTime: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 0 },
    externalId: { visable: false, title: t('EXTERNAL_ID', 'External id'), className: 'externalId', draggable: true, colSpan: 1, order: 1 },
    status: { visable: true, title: t('STATUS', 'Status'), className: 'statusInfo', draggable: true, colSpan: 1, order: 2 },
    cartGroupId: { visable: true, title: t('GROUP_ORDER', 'Group Order'), className: 'groupOrderId', draggable: true, colSpan: 1, order: 3 },
    driverGroupId: { visable: true, title: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'), className: 'driverGroupId', draggable: true, colSpan: 1, order: 4 },
    business: { visable: true, title: t('BUSINESS', 'Business'), className: 'businessInfo', draggable: true, colSpan: 1, order: 5 },
    customer: { visable: true, title: t('CUSTOMER', 'Customer'), className: 'customerInfo', draggable: true, colSpan: 1, order: 6 },
    driver: { visable: true, title: t('DRIVER', 'Driver'), className: 'driverInfo', draggable: true, colSpan: 1, order: 7 },
    advanced: { visable: true, title: t('ADVANCED_LOGISTICS', 'Advanced logistics'), className: 'advanced', draggable: true, colSpan: 3, order: 8 },
    timer: { visable: false, title: t('SLA_TIMER', 'SLA’s timer'), className: 'timer', draggable: true, colSpan: 1, order: 9 },
    eta: { visable: true, title: t('ETA', 'ETA'), className: 'eta', draggable: true, colSpan: 1, order: 10 },
    total: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 11 }
  }
  const [allowColumns, setAllowColumns] = useState(allowColumnsModel)
  const [franchisesList, setFranchisesList] = useState({ loading: false, franchises: [], error: null })

  /**
   * Object to save driver group list
   */
  const [driverGroupList, setDriverGroupList] = useState({ groups: [], loading: false, error: null })
  /**
   * Object to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Object to save paymethods
   */
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  /**
   * Object to save businesses
   */
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  /**
   * Array to save the cities
   */
  const [citiesList, setCitiesList] = useState([])

  /**
   * Object to save selected order ids
   */
  const [selectedOrderIds, setSelectedOrderIds] = useState([])
  /**
   * Object to save order substatuses
   */
  const [selectedSubOrderStatus, setSelectedSubOrderStatus] = useState({
    pending: orderStatuesList?.pending,
    inProgress: orderStatuesList?.inProgress,
    completed: orderStatuesList?.completed,
    cancelled: orderStatuesList?.cancelled,
    all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  })

  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  const handleSelectedOrderIds = (orderId) => {
    let _ids = [...selectedOrderIds]
    if (!_ids.includes(orderId)) {
      _ids.push(orderId)
    } else {
      _ids = _ids.filter((_id) => _id !== orderId)
    }
    setSelectedOrderIds(_ids)
  }
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */
  const handleRemoveSelectedOrderId = (orderId) => {
    let _ids = [...selectedOrderIds]
    _ids = _ids.filter((_id) => _id !== orderId)
    setSelectedOrderIds(_ids)
  }

  /**
   * Change orders filter by statuses selected
   * @param {string} ordersStatusGroup orders status
   */
  const handleOrdersStatusGroupFilter = (statusGroup) => {
    if (statusGroup === ordersStatusGroup) return
    setOrdersStatusGroup(statusGroup)
    setSelectedOrderIds([])
  }
  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }
  /**
   * Save filter type values
   * @param {object} types
   */
  const handleChangeFilterValues = (types) => {
    setFilterValues(types)
  }

  /**
   * save status for multi orders selected
   * @param {number} status order status
   */
  const handleChangeMultiOrdersStatus = (status) => {
    setUpdateStatus(status)
    setStartMulitOrderStatusChange(true)
  }
  /**
   * Method to change multi orders status from API
   */
  const handleChangeMultiOrderStatus = async (orderId) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: updateStatus })
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}`, requestOptions)
      const { result, error } = await response.json()

      if (parseInt(result.status) === updateStatus) {
        const _ordersIds = [...selectedOrderIds]
        _ordersIds.shift()
        if (_ordersIds.length === 0) {
          setStartMulitOrderStatusChange(false)
        }
        setSelectedOrderIds(_ordersIds)
      }
      setActionStatus({
        loading: false,
        error: error ? result : null
      })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
      setStartMulitOrderStatusChange(false)
    }
  }

  /**
   * Delete orders for orders selected
   */
  const handleDeleteMultiOrders = async (code) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })

      const payload = {
        orders_id: selectedOrderIds
      }
      if (code) {
        payload.deleted_action_code = code
      }
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }
      const response = await fetch(`${ordering.root}/orders`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDeletedOrderIds(selectedOrderIds)
        setSelectedOrderIds([])
        showToast(ToastType.Success, t('ORDERS_DELETED', 'Orders deleted'))
      } else {
        setActionStatus({
          loading: true,
          error: content.result
        })
      }
    } catch (error) {
      setActionStatus({ loading: false, error: [error.message] })
    }
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      const source = {}
      requestsState.drivers = source

      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .select(driversPropsToFetch)
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

  const getControlsOrders = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/controls/orders`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCitiesList(content.result.cities)
        setDriverGroupList({
          ...driverGroupList,
          loading: false,
          groups: content.result.driver_groups
        })
        setPaymethodsList({
          ...paymethodsList,
          loading: false,
          paymethods: content.result.paymethods
        })
        setBusinessesList({
          ...businessesList,
          loading: false,
          businesses: content.result.businesses
        })
        setActionStatus({ ...actionStatus, loading: false })
      } else {
        setActionStatus({ loading: false, error: content?.result })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  const getFranchises = async () => {
    try {
      setFranchisesList({ ...franchisesList, loading: true })
      let where = null
      const conditions = []
      conditions.push({
        attribute: 'enabled',
        value: true
      })
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/franchises?where=${JSON.stringify(where)}`
      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFranchisesList({
          ...franchisesList,
          loading: false,
          franchises: result
        })
      } else {
        setFranchisesList({
          ...franchisesList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setFranchisesList({
        ...franchisesList,
        loading: false,
        error: err
      })
    }
  }

  const handleJoinMainRooms = () => {
    if (!useBatchSockets) {
      socket.join('drivers')
    } else {
      socket.join({
        room: 'driver_locations',
        user_id: user?.id,
        role: 'manager'
      })
      socket.join({
        room: 'drivers',
        user_id: user?.id,
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
        user_id: user?.id,
        role: 'manager'
      })
      socket.leave({
        room: 'drivers',
        user_id: user?.id,
        role: 'manager'
      })
    }
  }

  const handleSocketDisconnect = () => {
    socket.socket.on('connect', handleJoinMainRooms)
  }

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (loading) return
    const handleUpdateDriver = (driver) => {
      setDriversList(prevState => {
        const driverIndex = prevState.drivers.findIndex(_driver => _driver.id === driver.id)
        if (driverIndex !== -1) {
          const updatedDrivers = [...prevState.drivers]
          Object.assign(updatedDrivers[driverIndex], driver)
          return { ...prevState, drivers: updatedDrivers }
        } else {
          const updatedDrivers = [...prevState.drivers, driver]
          return { ...prevState, drivers: updatedDrivers }
        }
      })
    }
    const handleTrackingDriver = (trackingData) => {
      setDriversList(prevState => {
        const updatedDrivers = prevState.drivers.map(driver => {
          if (driver.id === trackingData.driver_id) {
            const updatedDriver = { ...driver }
            if (typeof trackingData.location === 'string') {
              const trackingLocation = trackingData.location
              const _location = trackingLocation.replaceAll('\\', '')
              const location = JSON.parse(_location)
              updatedDriver.location = location
            } else {
              updatedDriver.location = trackingData.location
            }
            return updatedDriver
          }
          return driver
        })

        return { ...prevState, drivers: updatedDrivers }
      })
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
        return { ...prevState, drivers: updatedDrivers };
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
  }, [socket, loading, useBatchSockets])

  useEffect(() => {
    if (!auth || loading || !socket?.socket || disableSocketRoomDriver) return
    handleJoinMainRooms()
    socket.socket.on('disconnect', handleSocketDisconnect)

    return () => {
      handleLeaveMainRooms()
      socket.socket.off('disconnect', handleSocketDisconnect)
    }
  }, [socket?.socket, auth, loading, disableSocketRoomDriver, useBatchSockets])

  /**
   * Listening multi orders action start to change status
   */
  useEffect(() => {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return
    handleChangeMultiOrderStatus(selectedOrderIds[0])
  }, [selectedOrderIds, startMulitOrderStatusChange])

  useEffect(() => {
    if (loading) return
    if (user?.level === 0 || user?.level === 2 || user?.level === 5) {
      getDrivers()
    }
    getControlsOrders()

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [user, loading])

  useEffect(() => {
    if (!user.id || configState?.loading) return
    const getUser = async () => {
      try {
        const response = await ordering.users(user.id).select(['settings']).get()
        const { content: { error, result } } = response
        if (!error && result.settings?.orderColumns) {
          setAllowColumns(result.settings?.orderColumns)
          return
        }

        setAllowColumns({
          ...allowColumnsModel,
          slaBar: { ...allowColumnsModel?.slaBar, visable: configState?.configs?.order_deadlines_enabled?.value === '1' },
          timer: { ...allowColumnsModel?.timer, visable: configState?.configs?.order_deadlines_enabled?.value === '1' }
        })
      } catch (err) {
        setAllowColumns({
          ...allowColumnsModel,
          slaBar: { ...allowColumnsModel?.slaBar, visable: configState?.configs?.order_deadlines_enabled?.value === '1' },
          timer: { ...allowColumnsModel?.timer, visable: configState?.configs?.order_deadlines_enabled?.value === '1' }
        })
      }
    }
    getUser()
  }, [user, configState])

  useEffect(() => {
    if (!ordering || !token || !useFranchiseImages) return
    getFranchises()
  }, [ordering, token, useFranchiseImages])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          citiesList={citiesList}
          ordersStatusGroup={ordersStatusGroup}
          filterValues={filterValues}
          multiOrderUpdateStatus={updateStatus}
          selectedOrderIds={selectedOrderIds}
          deletedOrderIds={deletedOrderIds}
          startMulitOrderStatusChange={startMulitOrderStatusChange}
          selectedSubOrderStatus={selectedSubOrderStatus}
          handleSelectedSubOrderStatus={setSelectedSubOrderStatus}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleRemoveSelectedOrderId={handleRemoveSelectedOrderId}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          handleOrdersStatusGroupFilter={handleOrdersStatusGroupFilter}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          setSelectedOrderIds={setSelectedOrderIds}
          allowColumns={allowColumns}
          setAllowColumns={setAllowColumns}
          timeStatus={timeStatus}
          setTimeStatus={setTimeStatus}
          franchisesList={franchisesList}
        />
      )}
    </>
  )
}

OrdersManage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

OrdersManage.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
