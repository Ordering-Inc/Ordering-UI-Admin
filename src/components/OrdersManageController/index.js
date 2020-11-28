import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi, useWebsocket } from 'ordering-components'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'

export const OrdersManage = (props) => {
  const {
    UIComponent,
    statusGroup,
    driversPropsToFetch
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token, loading }] = useSession()

  const requestsState = {}
  const [searchValue, setSearchValue] = useState()
  const [ordersStatusGroup, setOrdersStatusGroup] = useState(statusGroup || 'pending')

  /**
   * Object to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Object to save driver orders
   */
  const [driverOrdersModal, setDriverOrdersModal] = useState({ id: null, orders: [], loading: true, error: null })
  /**
   * Object to update orders by selected status
   */
  const [updateOrders, setUpdateOrders] = useState({ ids: [], error: null })

  /**
   * Change orders filter by status selected
   * @param {string} ordersStatusGroup orders status
   */
  const handleOrdersStatusGroupFilter = (statusGroup) => {
    if (statusGroup === ordersStatusGroup) return
    setOrdersStatusGroup(statusGroup)
    setUpdateOrders({ ...updateOrders, ids: [] })
  }
  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }
  /**
   * Change driver id to get orders of a driver
   * @param {string} driverId driver id
   */
  const handleChangeDriverOrdersModal = (driverId) => {
    if (driverId !== driverOrdersModal.id) setDriverOrdersModal({ ...driverOrdersModal, id: driverId })
  }
  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  const handleSelectedOrderIds = (orderId) => {
    const _ids = updateOrders.ids
    if (!_ids.includes(orderId)) {
      _ids.push(orderId)
    } else {
      for (let i = 0; i < _ids.length; i++) {
        if (_ids[i] === orderId) {
          _ids.splice(i, 1)
          i--
        }
      }
    }
    setUpdateOrders({ ...updateOrders, ids: _ids })
  }
  /**
   * save status for multi orders selected
   * @param {number} status order status
   */
  const handleChangeMultiOrdersStatus = (status) => {
    const _ids = updateOrders.ids
    setUpdateOrders({ ...updateOrders, ids: [] })

    if (_ids.length !== 0) {
      for (let i = 0; i < _ids.length; i++) {
        updateOrderStatus(_ids[i], status)
      }
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
  /**
   * Method to get orders assigned for selected driver from API
   */
  const getDriverOrders = async () => {
    try {
      setDriverOrdersModal({ ...driverOrdersModal, loading: true })

      let where = null
      const conditions = []

      conditions.push({ attribute: 'status', value: [0, 3, 4, 7, 8, 9] })
      conditions.push({ attribute: 'driver_id', value: driverOrdersModal.id })

      where = {
        conditions,
        conector: 'AND'
      }
      const source = {}
      requestsState.driverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where(where).get({ cancelToken: source })
      setDriverOrdersModal({
        ...driverOrdersModal,
        id: null,
        loading: false,
        orders: result
      })
    } catch (err) {
      setDriverOrdersModal({
        ...driverOrdersModal,
        loading: false,
        error: err.message
      })
    }
  }
  /**
   * Method to change order status from API
   */
  const updateOrderStatus = async (id, status) => {
    try {
      setUpdateOrders({ ...updateOrders, loading: true, error: null })
      const source = {}
      requestsState.updateOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders(id).save({ status: status }, { cancelToken: source })
      console.log(`update order ${id}`, result)
    } catch (err) {
      // setUpdateOrders({ ...updateOrders, error: err })
      setUpdateOrders({ ...updateOrders, ids: [], error: err })
    }
  }

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (driversList.loading || loading) return
    const handleUpdateDriver = (order) => {
      getDrivers()
    }
    socket.join('drivers')
    socket.on('drivers_update', handleUpdateDriver)
    socket.on('tracking_driver', handleUpdateDriver)
    return () => {
      socket.leave('drivers')
      socket.off('drivers_update', handleUpdateDriver)
      socket.off('tracking_driver', handleUpdateDriver)
    }
  }, [socket, loading])

  useEffect(() => {
    if (driverOrdersModal.id === null) return
    getDriverOrders()
  }, [driverOrdersModal.id])

  useEffect(() => {
    getDrivers()

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
          searchValue={searchValue}
          driversList={driversList}
          driverOrders={driverOrdersModal}
          updateOrdersSelectedStatus={updateOrders}
          ordersStatusGroup={ordersStatusGroup}
          handleChangeSearch={handleChangeSearch}
          handleOrdersStatusGroupFilter={handleOrdersStatusGroupFilter}
          handleChangeDriverOrdersModal={handleChangeDriverOrdersModal}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
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
