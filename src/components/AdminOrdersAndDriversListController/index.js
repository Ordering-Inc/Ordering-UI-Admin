import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components'
dayjs.extend(utc)

export const AdminOrdersAndDriversList = (props) => {
  const {
    UIComponent,
    isSearchByOrderNumber,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone,
    driversPropsToFetch
  } = props

  const [ordering] = useApi()
  const requestsState = {}
  const [searchValue, setSearchValue] = useState(null)
  const [ordersStatusSelected, setOrdersStatusSelected] = useState('pending')
  const [driverOrdersId, setDriverOrdersId] = useState(null)

  /**
   * Get token session
   */
  const [{ token }] = useSession()
  /**
   * Object to save pending orders
   */
  const [pendingOrdersStatus, setPendingOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save preorders
   */
  const [preOrdersStatus, setPreOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save accepted by business orders
   */
  const [acceptedByBusinessOrdersStatus, setAcceptedByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save accepted by driver orders
   */
  const [acceptedByDriverOrdersStatus, setAcceptedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save ready for pickup orders
   */
  const [readyForPickupOrdersStatus, setReadyForPickupOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save pickup completed by driver orders
   */
  const [pickupCompletedByDriverOrdersStatus, setPickupCompletedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save driver arrived by business orders
   */
  const [driverArrivedByBusinessOrdersStatus, setDriverArrivedByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save completed by admin orders
   */
  const [completedByAdminOrdersStatus, setCompletedByAdminOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save delivery completed by driver orders
   */
  const [deliveryCompletedByDriverOrdersStatus, setDeliveryCompletedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save rejected by admin orders
   */
  const [rejectedByAdminOrdersStatus, setRejectedByAdminOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save reject by business orders
   */
  const [rejectByBusinessOrdersStatus, setRejectByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save reject by driver orders
   */
  const [rejectByDriverOrdersStatus, setRejectByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save pickup failed by driver orders
   */
  const [pickupFailedByDriverOrdersStatus, setPickupFailedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save delivery failed by driver orders
   */
  const [deliveryFailedByDriverOrdersStatus, setDeliveryFailedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Object to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Object to save driver orders
   */
  const [driverOrders, setDriverOrders] = useState({ orders: [], loading: true, error: null })
  /**
   * Object to update orders
   */
  const [updateOrdersSelectedStatus, setUpdateOrdersSelectedStatus] = useState({ ids: [], status: null, lading: true, error: null })

  /**
   * Change orders filter by status selected
   * @param {string} ordersStatus orders status
   */
  const handleOrdersStatusFilter = (ordersStatus) => {
    if (ordersStatus === ordersStatusSelected) return
    setOrdersStatusSelected(ordersStatus)
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
   * @param {int} driver_id driver id
   */
  const handleChangeDriverOrders = (driverId) => {
    if (driverId !== driverOrdersId) setDriverOrdersId(driverId)
  }

  /**
   * Update Orders status by order id
   * @param {object} ordersSelected order id and status
   */
  const handleUpdateOrderStatus = (orderSelected) => {
    const id = []
    id.push(orderSelected.id)
    setUpdateOrdersSelectedStatus({ ...updateOrdersSelectedStatus, ids: id, status: orderSelected.status })
  }

  /**
   * Save ids of orders selected
   * @param {int} orderId order id
   */
  const handleSelectedOrderIds = (orderId) => {
    const _ids = updateOrdersSelectedStatus.ids
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
    console.log('idss', _ids)
    setUpdateOrdersSelectedStatus({ ...updateOrdersSelectedStatus, ids: _ids })
  }
  /**
   * save status to change status for multi orders selected
   * @param {int} status order status
   */
  const handleChangeMultiOrdersStatus = (status) => {
    setUpdateOrdersSelectedStatus({ ...updateOrdersSelectedStatus, status: status })
  }

  const isMatchSearch = (id, email, phone) => {
    if (!searchValue) return true
    if (phone === null) phone = ''
    return (id.toString().toLowerCase().includes(searchValue.toLowerCase()) && isSearchByOrderNumber) ||
      (email.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByCustomerEmail) ||
      (phone.toString().toLowerCase().includes(searchValue.toLowerCase()) && isSearchByCustomerPhone)
  }

  const isPendingOrder = (time) => {
    const diff = ((dayjs().utc().local().unix() - dayjs.utc(time, 'YYYY-MM-DD HH:mm:ss').local().unix())) / 60
    return diff < 60
  }

  const isPreOrder = (time) => {
    const diff = ((dayjs().unix() - dayjs.utc(time, 'YYYY-MM-DD HH:mm:ss').local().unix())) / 60
    return diff > 60
  }

  /**
   * Method to get orders according to status from API
   */
  const getOrders = async (status) => {
    try {
      const source = {}
      requestsState.orders = source

      switch (status) {
        case 0:
          setPendingOrdersStatus({ ...pendingOrdersStatus, loading: true })
          setPreOrdersStatus({ ...preOrdersStatus, loading: true })
          break
        case 1:
          setCompletedByAdminOrdersStatus({ ...completedByAdminOrdersStatus, loading: true })
          break
        case 2:
          setRejectedByAdminOrdersStatus({ ...rejectedByAdminOrdersStatus, loading: true })
          break
        case 3:
          setDriverArrivedByBusinessOrdersStatus({ ...driverArrivedByBusinessOrdersStatus, loading: true })
          break
        case 4:
          setReadyForPickupOrdersStatus({ ...readyForPickupOrdersStatus, loading: true })
          break
        case 5:
          setRejectByBusinessOrdersStatus({ ...rejectByBusinessOrdersStatus, loading: true })
          break
        case 6:
          setRejectByDriverOrdersStatus({ ...rejectByDriverOrdersStatus, loading: true })
          break
        case 7:
          setAcceptedByBusinessOrdersStatus({ ...acceptedByBusinessOrdersStatus, loading: true })
          break
        case 8:
          setAcceptedByDriverOrdersStatus({ ...acceptedByDriverOrdersStatus, loading: true })
          break
        case 9:
          setPickupCompletedByDriverOrdersStatus({ ...pickupCompletedByDriverOrdersStatus, loading: true })
          break
        case 10:
          setPickupFailedByDriverOrdersStatus({ ...pickupFailedByDriverOrdersStatus, loading: true })
          break
        case 11:
          setDeliveryCompletedByDriverOrdersStatus({ ...deliveryCompletedByDriverOrdersStatus, loading: true })
          break
        case 12:
          setDeliveryFailedByDriverOrdersStatus({ ...deliveryFailedByDriverOrdersStatus, loading: true })
          break
      }

      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: status }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      switch (status) {
        case 0: {
          const _pendingResult = _result.filter(order => isPendingOrder(order.delivery_datetime))
          const _preResult = _result.filter(order => isPreOrder(order.delivery_datetime))
          setPendingOrdersStatus({ ...pendingOrdersStatus, loading: false, orders: _pendingResult })
          setPreOrdersStatus({ ...preOrdersStatus, loading: false, orders: _preResult })
          break
        }
        case 1:
          setCompletedByAdminOrdersStatus({ ...completedByAdminOrdersStatus, loading: false, orders: _result })
          break
        case 2:
          setRejectedByAdminOrdersStatus({ ...rejectedByAdminOrdersStatus, loading: false, orders: _result })
          break
        case 3:
          setDriverArrivedByBusinessOrdersStatus({ ...driverArrivedByBusinessOrdersStatus, loading: false, orders: _result })
          break
        case 4:
          setReadyForPickupOrdersStatus({ ...readyForPickupOrdersStatus, loading: false, orders: _result })
          break
        case 5:
          setRejectByBusinessOrdersStatus({ ...rejectByBusinessOrdersStatus, loading: false, orders: _result })
          break
        case 6:
          setRejectByDriverOrdersStatus({ ...rejectByDriverOrdersStatus, loading: false, orders: _result })
          break
        case 7:
          setAcceptedByBusinessOrdersStatus({ ...acceptedByBusinessOrdersStatus, loading: false, orders: _result })
          break
        case 8:
          setAcceptedByDriverOrdersStatus({ ...acceptedByDriverOrdersStatus, loading: false, orders: _result })
          break
        case 9:
          setPickupCompletedByDriverOrdersStatus({ ...pickupCompletedByDriverOrdersStatus, loading: false, orders: _result })
          break
        case 10:
          setPickupFailedByDriverOrdersStatus({ ...pickupFailedByDriverOrdersStatus, loading: false, orders: _result })
          break
        case 11:
          setDeliveryCompletedByDriverOrdersStatus({ ...deliveryCompletedByDriverOrdersStatus, loading: false, orders: _result })
          break
        case 12:
          setDeliveryFailedByDriverOrdersStatus({ ...deliveryFailedByDriverOrdersStatus, loading: false, orders: _result })
          break
      }
    } catch (err) {
      switch (status) {
        case 0:
          setPendingOrdersStatus({ ...pendingOrdersStatus, loading: false, error: err.message })
          setPreOrdersStatus({ ...preOrdersStatus, loading: false, error: err.message })
          break
        case 1:
          setCompletedByAdminOrdersStatus({ ...completedByAdminOrdersStatus, loading: false, error: err.message })
          break
        case 2:
          setRejectedByAdminOrdersStatus({ ...rejectedByAdminOrdersStatus, loading: false, error: err.message })
          break
        case 3:
          setDriverArrivedByBusinessOrdersStatus({ ...driverArrivedByBusinessOrdersStatus, loading: false, error: err.message })
          break
        case 4:
          setReadyForPickupOrdersStatus({ ...readyForPickupOrdersStatus, loading: false, error: err.message })
          break
        case 5:
          setRejectByBusinessOrdersStatus({ ...rejectByBusinessOrdersStatus, loading: false, error: err.message })
          break
        case 6:
          setRejectByDriverOrdersStatus({ ...rejectByDriverOrdersStatus, loading: false, error: err.message })
          break
        case 7:
          setAcceptedByBusinessOrdersStatus({ ...acceptedByBusinessOrdersStatus, loading: false, error: err.message })
          break
        case 8:
          setAcceptedByDriverOrdersStatus({ ...acceptedByDriverOrdersStatus, loading: false, error: err.message })
          break
        case 9:
          setPickupCompletedByDriverOrdersStatus({ ...pickupCompletedByDriverOrdersStatus, loading: false, error: err.message })
          break
        case 10:
          setPickupFailedByDriverOrdersStatus({ ...pickupFailedByDriverOrdersStatus, loading: false, error: err.message })
          break
        case 11:
          setDeliveryCompletedByDriverOrdersStatus({ ...deliveryCompletedByDriverOrdersStatus, loading: false, error: err.message })
          break
        case 12:
          setDeliveryFailedByDriverOrdersStatus({ ...deliveryFailedByDriverOrdersStatus, loading: false, error: err.message })
          break
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
      setDriverOrders({ ...driverOrders, loading: true })

      let where = null
      const conditions = []

      conditions.push({ attribute: 'status', value: [0, 3, 4, 7, 8, 9] })
      conditions.push({ attribute: 'driver_id', value: driverOrdersId })

      where = {
        conditions,
        conector: 'AND'
      }
      const source = {}
      requestsState.driverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where(where).get({ cancelToken: source })
      setDriverOrders({
        ...driverOrders,
        loading: false,
        orders: result
      })
    } catch (err) {
      setDriverOrders({
        ...driverOrders,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to change order status from API
   */
  const updateOrdersStatus = async () => {
    console.log('update', updateOrdersSelectedStatus.ids, updateOrdersSelectedStatus.status)
    try {
      setUpdateOrdersSelectedStatus({ ...updateOrdersSelectedStatus, loading: true, error: null })
      const source = {}
      requestsState.updateOrders = source
      for (const id of updateOrdersSelectedStatus.ids) {
        await ordering.setAccessToken(token).orders(id).save({ status: updateOrdersSelectedStatus.status }, { cancelToken: source })
      }
      setUpdateOrdersSelectedStatus({ ids: [], status: null, loading: false, error: null })
    } catch (err) {
      console.log(err)
      setUpdateOrdersSelectedStatus({ ...updateOrdersSelectedStatus, loading: false, error: err })
    }
  }

  /**
   * Listening orders ids to update status
   */
  useEffect(() => {
    if (updateOrdersSelectedStatus.ids.length !== 0 && updateOrdersSelectedStatus.status !== null) {
      updateOrdersStatus()
    }
  }, [updateOrdersSelectedStatus.ids, updateOrdersSelectedStatus.status])

  /**
   * Listening orders status filter
   */
  useEffect(() => {
    if (ordersStatusSelected === 'pending') {
      getOrders(0)
    }
    if (ordersStatusSelected === 'inProgress') {
      getOrders(3)
      getOrders(4)
      getOrders(7)
      getOrders(8)
      getOrders(9)
    }
    if (ordersStatusSelected === 'completed') {
      getOrders(1)
      getOrders(11)
    }
    if (ordersStatusSelected === 'cancelled') {
      getOrders(2)
      getOrders(5)
      getOrders(6)
      getOrders(10)
      getOrders(12)
    }
  }, [ordersStatusSelected, searchValue])

  /**
   * Listening orders status filter
   */
  useEffect(() => {
    if (driverOrdersId) getDriverOrders()
  }, [driverOrdersId])

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
          pendingOrders={pendingOrdersStatus}
          preOrders={preOrdersStatus}
          acceptedByBusinessOrders={acceptedByBusinessOrdersStatus}
          acceptedByDriverOrders={acceptedByDriverOrdersStatus}
          readyForPickupOrders={readyForPickupOrdersStatus}
          pickupCompletedByDriverOrders={pickupCompletedByDriverOrdersStatus}
          driverArrivedByBusinessOrders={driverArrivedByBusinessOrdersStatus}
          completedByAdminOrders={completedByAdminOrdersStatus}
          deliveryCompletedByDriverOrders={deliveryCompletedByDriverOrdersStatus}
          rejectedByAdminOrders={rejectedByAdminOrdersStatus}
          rejectByBusinessOrders={rejectByBusinessOrdersStatus}
          rejectByDriverOrders={rejectByDriverOrdersStatus}
          pickupFailedByDriverOrders={pickupFailedByDriverOrdersStatus}
          deliveryFailedByDriverOrders={deliveryFailedByDriverOrdersStatus}
          driversList={driversList}
          driverOrders={driverOrders}
          updateOrdersSelectedStatus={updateOrdersSelectedStatus}

          searchValue={searchValue}
          ordersStatusSelected={ordersStatusSelected}
          handleChangeSearch={handleChangeSearch}
          handleOrdersStatusFilter={handleOrdersStatusFilter}
          handleChangeDriverOrders={handleChangeDriverOrders}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
        />
      )}
    </>
  )
}

AdminOrdersAndDriversList.propTypes = {
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

AdminOrdersAndDriversList.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
