import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components'

export const AdminOrders = (props) => {
  const {
    UIComponent,
    isSearchByOrderNumber,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone
  } = props

  const [ordering] = useApi()
  const requestsState = {}
  const [searchValue, setSearchValue] = useState(null)
  const [ordersStatusSelected, setOrdersStatusSelected] = useState('pending')

  /**
   * Get token session
   */
  const [{ token }] = useSession()
  /**
   * Array to save pending orders
   */
  const [pendingOrdersStatus, setPendingOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save accepted by business orders
   */
  const [acceptedByBusinessOrdersStatus, setAcceptedByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save accepted by driver orders
   */
  const [acceptedByDriverOrdersStatus, setAcceptedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save driver arrived by business orders
   */
  const [driverArrivedByBusinessOrdersStatus, setDriverArrivedByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save completed by admin orders
   */
  const [completedByAdminOrdersStatus, setCompletedByAdminOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save delivery completed by driver orders
   */
  const [deliveryCompletedByDriverOrdersStatus, setDeliveryCompletedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save rejected by admin orders
   */
  const [rejectedByAdminOrdersStatus, setRejectedByAdminOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save reject by business orders
   */
  const [rejectByBusinessOrdersStatus, setRejectByBusinessOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save reject by driver orders
   */
  const [rejectByDriverOrdersStatus, setRejectByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save pickup failed by driver orders
   */
  const [pickupFailedByDriverOrdersStatus, setPickupFailedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })
  /**
   * Array to save delivery failed by driver orders
   */
  const [deliveryFailedByDriverOrdersStatus, setDeliveryFailedByDriverOrdersStatus] = useState({ loading: true, orders: [], error: null })

  /**
   * Change orders status selected
   * @param {string} ordersStatus orders status
   */
  const handleChangeOrdersStatus = (ordersStatus) => {
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

  const isMatchSearch = (id, email, phone) => {
    if (!searchValue) return true
    if (phone === null) phone = ''
    return (id.toString().toLowerCase().includes(searchValue.toLowerCase()) && isSearchByOrderNumber) ||
      (email.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByCustomerEmail) ||
      (phone.toString().toLowerCase().includes(searchValue.toLowerCase()) && isSearchByCustomerPhone)
  }

  /**
   * Method to get pending orders from API
   */
  const getPendingOrders = async () => {
    try {
      setPendingOrdersStatus({ ...pendingOrdersStatus, loading: true })
      const source = {}
      requestsState.pendingOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [0] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setPendingOrdersStatus({
        ...pendingOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setPendingOrdersStatus({
        ...pendingOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get accepted by business orders from API
   */
  const getAcceptedByBusinessOrders = async () => {
    try {
      setAcceptedByBusinessOrdersStatus({ ...acceptedByBusinessOrdersStatus, loading: true })
      const source = {}
      requestsState.acceptedByBusinessOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [7] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setAcceptedByBusinessOrdersStatus({
        ...acceptedByBusinessOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setAcceptedByBusinessOrdersStatus({
        ...acceptedByBusinessOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get accepted by driver orders from API
   */
  const getAcceptedByDriverOrders = async () => {
    try {
      setAcceptedByDriverOrdersStatus({ ...acceptedByDriverOrdersStatus, loading: true })
      const source = {}
      requestsState.acceptedByDriverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [8] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setAcceptedByDriverOrdersStatus({
        ...acceptedByDriverOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setAcceptedByDriverOrdersStatus({
        ...acceptedByDriverOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get driver arrived by business orders from API
   */
  const getDriverArrivedByBusinessOrders = async () => {
    try {
      setDriverArrivedByBusinessOrdersStatus({ ...driverArrivedByBusinessOrdersStatus, loading: true })
      const source = {}
      requestsState.driverArrivedByBusinessOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [3] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setDriverArrivedByBusinessOrdersStatus({
        ...driverArrivedByBusinessOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setDriverArrivedByBusinessOrdersStatus({
        ...driverArrivedByBusinessOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get completed by admin orders from API
   */
  const getCompletedByAdminOrders = async () => {
    try {
      setCompletedByAdminOrdersStatus({ ...completedByAdminOrdersStatus, loading: true })
      const source = {}
      requestsState.completedByAdminOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [1] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setCompletedByAdminOrdersStatus({
        ...completedByAdminOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setCompletedByAdminOrdersStatus({
        ...completedByAdminOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get delivery completed by driver orders from API
   */
  const getDeliveryCompletedByDriverOrders = async () => {
    try {
      setDeliveryCompletedByDriverOrdersStatus({ ...deliveryCompletedByDriverOrdersStatus, loading: true })
      const source = {}
      requestsState.deliveryCompletedByDriverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [11] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setDeliveryCompletedByDriverOrdersStatus({
        ...deliveryCompletedByDriverOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setDeliveryCompletedByDriverOrdersStatus({
        ...deliveryCompletedByDriverOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get rejected by admin orders from API
   */
  const getRejectedByAdminOrdersOrders = async () => {
    try {
      setRejectedByAdminOrdersStatus({ ...rejectedByAdminOrdersStatus, loading: true })
      const source = {}
      requestsState.rejectedByAdminOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [2] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setRejectedByAdminOrdersStatus({
        ...rejectedByAdminOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setRejectedByAdminOrdersStatus({
        ...rejectedByAdminOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get rejected by business orders from API
   */
  const getRejectByBusinessOrders = async () => {
    try {
      setRejectByBusinessOrdersStatus({ ...rejectByBusinessOrdersStatus, loading: true })
      const source = {}
      requestsState.rejectByBusinessOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [5] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setRejectByBusinessOrdersStatus({
        ...rejectByBusinessOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setRejectByBusinessOrdersStatus({
        ...rejectByBusinessOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get reject by driver orders from API
   */
  const getRejectByDriverOrders = async () => {
    try {
      setRejectByDriverOrdersStatus({ ...rejectByDriverOrdersStatus, loading: true })
      const source = {}
      requestsState.rejectByDriverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [6] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setRejectByDriverOrdersStatus({
        ...rejectByDriverOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setRejectByDriverOrdersStatus({
        ...rejectByDriverOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get pickup failed by driver orders from API
   */
  const getPickupFailedByDriverOrders = async () => {
    try {
      setPickupFailedByDriverOrdersStatus({ ...pickupFailedByDriverOrdersStatus, loading: true })
      const source = {}
      requestsState.pickupFailedByDriverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [10] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setPickupFailedByDriverOrdersStatus({
        ...pickupFailedByDriverOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setPickupFailedByDriverOrdersStatus({
        ...pickupFailedByDriverOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to get delivery failed by driver orders from API
   */
  const getDeliveryFailedByDriverOrders = async () => {
    try {
      setDeliveryFailedByDriverOrdersStatus({ ...deliveryFailedByDriverOrdersStatus, loading: true })
      const source = {}
      requestsState.deliveryFailedByDriverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where([
        { attribute: 'status', value: [12] }
      ]).get({ cancelToken: source })

      const _result = result.filter(
        order => isMatchSearch(order.id, order.customer.email, order.customer.phone)
      )

      setDeliveryFailedByDriverOrdersStatus({
        ...deliveryFailedByDriverOrdersStatus,
        loading: false,
        orders: _result
      })
    } catch (err) {
      setDeliveryFailedByDriverOrdersStatus({
        ...deliveryFailedByDriverOrdersStatus,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Listening orders status filter
   */
  useEffect(() => {
    if (ordersStatusSelected === 'pending') {
      getPendingOrders()
    }
    if (ordersStatusSelected === 'inProgress') {
      getAcceptedByBusinessOrders()
      getAcceptedByDriverOrders()
      getDriverArrivedByBusinessOrders()
    }
    if (ordersStatusSelected === 'completed') {
      getCompletedByAdminOrders()
      getDeliveryCompletedByDriverOrders()
    }
    if (ordersStatusSelected === 'cancelled') {
      getRejectedByAdminOrdersOrders()
      getRejectByBusinessOrders()
      getRejectByDriverOrders()
      getPickupFailedByDriverOrders()
      getDeliveryFailedByDriverOrders()
    }
  }, [ordersStatusSelected, searchValue])

  useEffect(() => {
    getPendingOrders()

    return () => {
      if (requestsState.pendingOrders) {
        requestsState.pendingOrders.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          pendingOrders={pendingOrdersStatus}
          acceptedByBusinessOrders={acceptedByBusinessOrdersStatus}
          acceptedByDriverOrders={acceptedByDriverOrdersStatus}
          driverArrivedByBusinessOrders={driverArrivedByBusinessOrdersStatus}
          completedByAdminOrders={completedByAdminOrdersStatus}
          deliveryCompletedByDriverOrders={deliveryCompletedByDriverOrdersStatus}
          rejectedByAdminOrders={rejectedByAdminOrdersStatus}
          rejectByBusinessOrders={rejectByBusinessOrdersStatus}
          rejectByDriverOrders={rejectByDriverOrdersStatus}
          pickupFailedByDriverOrders={pickupFailedByDriverOrdersStatus}
          deliveryFailedByDriverOrders={deliveryFailedByDriverOrdersStatus}

          searchValue={searchValue}
          ordersStatusSelected={ordersStatusSelected}
          handleChangeSearch={handleChangeSearch}
          handleChangeOrdersStatus={handleChangeOrdersStatus}
        />
      )}
    </>
  )
}

AdminOrders.propTypes = {
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

AdminOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
