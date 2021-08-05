import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const DriverAnalytics = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [filterList, setFilterList] = useState({ lapse: 'today', userIds: null, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
  const [ordersList, setOrdersList] = useState({ loading: false, data: [], error: null })
  const [salesList, setSalesList] = useState({ loading: false, data: [], error: null })
  const [topProductList, setTopProductList] = useState({ loading: false, data: [], error: null })
  const [topCategoryList, setTopCategoryList] = useState({ loading: false, data: [], error: null })
  const [orderStatusList, setOrderStatusList] = useState({ loading: false, data: [], error: null })
  const [topOrdersList, setTopOrdersList] = useState({ loading: false, data: [], error: null })
  const [spendTimesList, setSpendTimesList] = useState({ loading: false, data: [], error: null })
  const [availableTimesList, setAvailableTimesList] = useState({ loading: false, data: [], error: null })
  const [busyTimesList, setBusyTimesList] = useState({ loading: false, data: {}, error: null })
  const [customerSatisfactionList, setCustomerSatisfactionList] = useState({ loading: false, data: [], error: null })
  const [ordersAcceptSpendList, setOrdersAcceptSpendList] = useState({ loading: false, data: [], error: null })
  const [arrivedPickUpSpendList, setArrivedPickUpSpendList] = useState({ loading: false, data: [], error: null })
  const [orderLocationList, setOrderLocationList] = useState({ loading: false, data: [], error: null })
  const [completeSpendList, setCompleteSpendList] = useState({ loading: false, data: [], error: null })
  const [pickUpSpendList, setPickUpSpendList] = useState({ loading: false, data: [], error: null })
  const [deliverySpendList, setDeliverySpendList] = useState({ loading: false, data: [], error: null })

  const paramsForAPI = (type) => {
    const rootUrl = `${ordering.root}/reports/${type}`
    let params = `lapse=${filterList?.lapse}&timezone=${filterList?.timeZone}`
    if (filterList?.userIds) params = `${params}&drivers=${filterList?.userIds?.toString()}`
    return `${rootUrl}?${params}`
  }
  /**
   * Method to get orders list
   */
  const getOrders = async () => {
    if (loading) return
    try {
      setOrdersList({ ...ordersList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('orders_drivers')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setOrdersList({
          ...ordersList,
          loading: false,
          data: result
        })
      } else {
        setOrdersList({
          ...ordersList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setOrdersList({
        ...ordersList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get sales list
   */
  const getSales = async () => {
    if (loading) return
    try {
      setSalesList({ ...salesList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_sales')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setSalesList({
          ...salesList,
          loading: false,
          data: result
        })
      } else {
        setSalesList({
          ...salesList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setSalesList({
        ...salesList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get top product list
   */
  const getTopProducts = async () => {
    if (loading) return
    try {
      setTopProductList({ ...topProductList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_top_selling')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setTopProductList({
          ...topProductList,
          loading: false,
          data: result
        })
      } else {
        setTopProductList({
          ...topProductList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setTopProductList({
        ...topProductList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get top category list
   */
  const getTopCategories = async () => {
    if (loading) return
    try {
      setTopCategoryList({ ...topCategoryList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_top_categories')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setTopCategoryList({
          ...topCategoryList,
          loading: false,
          data: result
        })
      } else {
        setTopCategoryList({
          ...topCategoryList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setTopCategoryList({
        ...topCategoryList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get order status List
   */
  const getOrderStatus = async () => {
    if (loading) return
    try {
      setOrderStatusList({ ...orderStatusList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_orders_status')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setOrderStatusList({
          ...orderStatusList,
          loading: false,
          data: result
        })
      } else {
        setOrderStatusList({
          ...orderStatusList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setOrderStatusList({
        ...orderStatusList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get top orders list
   */
  const getTopOrders = async () => {
    if (loading) return
    try {
      setTopOrdersList({ ...topOrdersList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_top_orders')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setTopOrdersList({
          ...topOrdersList,
          loading: false,
          data: result
        })
      } else {
        setTopOrdersList({
          ...topOrdersList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setTopOrdersList({
        ...topOrdersList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get complete spend List
   */
  const getCustomerSatisfaction = async () => {
    if (loading) return
    try {
      setCustomerSatisfactionList({ ...customerSatisfactionList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('customer_satisfaction')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setCustomerSatisfactionList({
          ...customerSatisfactionList,
          loading: false,
          data: result
        })
      } else {
        setCustomerSatisfactionList({
          ...customerSatisfactionList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setCustomerSatisfactionList({
        ...customerSatisfactionList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get complete spend List
   */
  const getCompleteSpend = async () => {
    if (loading) return
    try {
      setCompleteSpendList({ ...completeSpendList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_complete_spend')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setCompleteSpendList({
          ...completeSpendList,
          loading: false,
          data: result
        })
      } else {
        setCompleteSpendList({
          ...completeSpendList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setCompleteSpendList({
        ...completeSpendList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get spend times list
   */
  const getSpendTimes = async () => {
    if (loading) return
    try {
      setSpendTimesList({ ...spendTimesList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_spend_times')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setSpendTimesList({
          ...spendTimesList,
          loading: false,
          data: result
        })
      } else {
        setSpendTimesList({
          ...spendTimesList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setSpendTimesList({
        ...spendTimesList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get available times list
   */
  const getAvailableTimes = async () => {
    if (loading) return
    try {
      setAvailableTimesList({ ...availableTimesList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_available_times')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setAvailableTimesList({
          ...availableTimesList,
          loading: false,
          data: result
        })
      } else {
        setAvailableTimesList({
          ...availableTimesList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setAvailableTimesList({
        ...availableTimesList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to busy times list
   */
  const getBusyTimes = async () => {
    if (loading) return
    try {
      setBusyTimesList({ ...busyTimesList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_busy_times')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBusyTimesList({
          ...busyTimesList,
          loading: false,
          data: result
        })
      } else {
        setBusyTimesList({
          ...busyTimesList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setBusyTimesList({
        ...busyTimesList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get orders accept spend list
   */
  const getOrdersAcceptSpend = async () => {
    if (loading) return
    try {
      setOrdersAcceptSpendList({ ...ordersAcceptSpendList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_accept_spend')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setOrdersAcceptSpendList({
          ...ordersAcceptSpendList,
          loading: false,
          data: result
        })
      } else {
        setOrdersAcceptSpendList({
          ...ordersAcceptSpendList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setOrdersAcceptSpendList({
        ...ordersAcceptSpendList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get drivers arrived pickup spend list
   */
  const getArrivedPickeUpSpend = async () => {
    if (loading) return
    try {
      setArrivedPickUpSpendList({ ...arrivedPickUpSpendList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_arrived_pickup_spend')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setArrivedPickUpSpendList({
          ...arrivedPickUpSpendList,
          loading: false,
          data: result
        })
      } else {
        setArrivedPickUpSpendList({
          ...arrivedPickUpSpendList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setArrivedPickUpSpendList({
        ...arrivedPickUpSpendList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get location List
   */
  const getLocations = async () => {
    if (loading) return
    try {
      setOrderLocationList({ ...orderLocationList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_order_location')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setOrderLocationList({
          ...orderLocationList,
          loading: false,
          locations: result
        })
      } else {
        setOrderLocationList({
          ...orderLocationList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setOrderLocationList({
        ...orderLocationList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get arrived pickup spend list
   */
  const getPickUpSpend = async () => {
    if (loading) return
    try {
      setPickUpSpendList({ ...pickUpSpendList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_pickup_spend')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setPickUpSpendList({
          ...pickUpSpendList,
          loading: false,
          data: result
        })
      } else {
        setPickUpSpendList({
          ...pickUpSpendList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setPickUpSpendList({
        ...pickUpSpendList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get arrived pickup spend list
   */
  const getDeliverySpend = async () => {
    if (loading) return
    try {
      setDeliverySpendList({ ...deliverySpendList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = paramsForAPI('drivers_delivery_spend')

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setDeliverySpendList({
          ...deliverySpendList,
          loading: false,
          data: result
        })
      } else {
        setDeliverySpendList({
          ...deliverySpendList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setDeliverySpendList({
        ...deliverySpendList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getOrders()
    getSales()
    getTopProducts()
    getTopCategories()
    getOrderStatus()
    getTopOrders()
    getSpendTimes()
    getAvailableTimes()
    getBusyTimes()
    getCustomerSatisfaction()
    getOrdersAcceptSpend()
    getCompleteSpend()
    getArrivedPickeUpSpend()
    getPickUpSpend()
    getLocations()
    getDeliverySpend()
  }, [filterList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterList={filterList}
          ordersList={ordersList}
          salesList={salesList}
          topProductList={topProductList}
          topCategoryList={topCategoryList}
          orderStatusList={orderStatusList}
          topOrdersList={topOrdersList}
          customerSatisfactionList={customerSatisfactionList}
          ordersAcceptSpendList={ordersAcceptSpendList}
          arrivedPickUpSpendList={arrivedPickUpSpendList}
          orderLocationList={orderLocationList}
          spendTimesList={spendTimesList}
          availableTimesList={availableTimesList}
          busyTimesList={busyTimesList}
          completeSpendList={completeSpendList}
          pickUpSpendList={pickUpSpendList}
          deliverySpendList={deliverySpendList}
          handleChangeFilterList={setFilterList}
        />
      )}
    </>
  )
}

DriverAnalytics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriverAnalytics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
