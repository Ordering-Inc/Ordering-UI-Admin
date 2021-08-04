import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const DriverAnalytics = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [filterList, setFilterList] = useState({ lapse: 'today', businessIds: null, app_id: 'all', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
  const [ordersList, setOrdersList] = useState({ loading: false, data: [], error: null })
  const [salesList, setSalesList] = useState({ loading: false, data: [], error: null })
  const [topProductList, setTopProductList] = useState({ loading: false, data: [], error: null })
  const [topCategoryList, setTopCategoryList] = useState({ loading: false, data: [], error: null })
  const [orderStatusList, setOrderStatusList] = useState({ loading: false, data: [], error: null })
  const [registerUsersList, setRegisterUsersList] = useState({ loading: false, data: [], error: null })
  const [customerSatisfactionList, setCustomerSatisfactionList] = useState({ loading: false, data: [], error: null })
  const [ordersAcceptSpendList, setOrdersAcceptSpendList] = useState({ loading: false, data: [], error: null })
  const [arrivedPickUpSpendList, setArrivedPickUpSpendList] = useState({ loading: false, data: [], error: null })
  const [orderLocationList, setOrderLocationList] = useState({ loading: false, data: [], error: null })

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
      const rootUrl = `${ordering.root}/reports/orders`
      let params = `lapse=${filterList?.lapse}&timezone=${filterList?.timeZone}`
      if (filterList?.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList?.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/sales`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/top_selling`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/top_categories`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/orders_status`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
   * Method to get register users list
   */
  const getRegisterUsers = async () => {
    if (loading) return
    try {
      setRegisterUsersList({ ...registerUsersList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const rootUrl = `${ordering.root}/reports/users`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setRegisterUsersList({
          ...registerUsersList,
          loading: false,
          data: result
        })
      } else {
        setRegisterUsersList({
          ...registerUsersList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setRegisterUsersList({
        ...registerUsersList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get customer satisfaction List
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
      const rootUrl = `${ordering.root}/reports/customer_satisfaction`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/orders_accept_spend`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
   * Method to get arrived pickup spend list
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
      const rootUrl = `${ordering.root}/reports/arrived_pickup_spend`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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
      const rootUrl = `${ordering.root}/reports/order_location`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      const functionFetch = `${rootUrl}?${params}`

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

  useEffect(() => {
    getOrders()
    getSales()
    getTopProducts()
    getTopCategories()
    getOrderStatus()
    getRegisterUsers()
    getCustomerSatisfaction()
    getOrdersAcceptSpend()
    getArrivedPickeUpSpend()
    getLocations()
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
          registerUsersList={registerUsersList}
          customerSatisfactionList={customerSatisfactionList}
          ordersAcceptSpendList={ordersAcceptSpendList}
          arrivedPickUpSpendList={arrivedPickUpSpendList}
          orderLocationList={orderLocationList}
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
