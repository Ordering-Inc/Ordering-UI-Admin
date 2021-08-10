import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const Home = (props) => {
  const {
    UIComponent
  } = props
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  /** this is dumy data */
  const dumyDataList = [
    { id: 1, name: 'Create a store', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 2, name: 'Fill up your business information', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 3, name: 'Add your first category', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 4, name: 'Add your first product', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 5, name: 'Create a business menu', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 6, name: 'Create a delivery zone', addText: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false },
    { id: 7, name: 'Payment method', addText: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cras iaculis ac ipsum. Facilisis ligula dui posuere et, id sem massa. Ullamcorper magna urna in aliquam ornare velit tempus. Lorem ut .', completed: false }
  ]

  const [ordersList, setOrdersList] = useState({ loading: false, orders: 0, error: null })
  const [todaySalelsList, setTodaySalesList] = useState({ loading: false, sales: 0, error: null })
  const [monthSalesList, setMonthSalesList] = useState({ loading: false, sales: [], error: null })
  const [taskList, setTaskList] = useState({ loading: false, data: [], error: null })

  /**
   * Method to get task list
   */
  const getTasks = () => {
    setTaskList({
      ...taskList,
      data: dumyDataList
    })
  }

  /**
   * Method to update task list
   */
  const handleUpdateTaskList = (data) => {
    setTaskList({ ...taskList, data: data })
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
      const functionFetch = `${ordering.root}/reports/orders?lapse=today`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        let totalOrders = 0
        if (result?.length > 0) {
          for (const order of result) {
            totalOrders += parseInt(order.orders)
          }
        }
        setOrdersList({
          ...ordersList,
          loading: false,
          orders: totalOrders
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
      setTodaySalesList({ ...todaySalelsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/reports/sales?lapse=today`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        let totalSales = 0
        if (result?.length > 0) {
          for (const sale of result) {
            totalSales += sale.sales
          }
        }
        setTodaySalesList({
          ...todaySalelsList,
          loading: false,
          sales: totalSales
        })
      } else {
        setTodaySalesList({
          ...todaySalelsList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setTodaySalesList({
        ...todaySalelsList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get sales list
   */
  const getMonthSales = async () => {
    if (loading) return
    try {
      setMonthSalesList({ ...monthSalesList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const lapse = getCurrentDateRange()
      const functionFetch = `${ordering.root}/reports/sales?lapse=${lapse}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setMonthSalesList({
          ...monthSalesList,
          loading: false,
          sales: result
        })
      } else {
        setMonthSalesList({
          ...monthSalesList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setMonthSalesList({
        ...monthSalesList,
        loading: false,
        error: err
      })
    }
  }

  const getCurrentDateRange = () => {
    const newDate = new Date()
    const date = newDate.getDate()
    const fullDate = date < 10 ? `0${date}` : date
    const month = newDate.getMonth() + 1
    const fullMonth = month < 10 ? `0${month}` : month
    const year = newDate.getFullYear()
    return `${year}-${fullMonth}-01,${year}-${fullMonth}-${fullDate}`
  }

  useEffect(() => {
    getOrders()
    getSales()
    getMonthSales()
    getTasks()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          ordersList={ordersList}
          todaySalelsList={todaySalelsList}
          monthSalesList={monthSalesList}
          taskList={taskList}
          getCurrentDateRange={getCurrentDateRange}
          handleUpdateTaskList={handleUpdateTaskList}
        />
      )}
    </>
  )
}

Home.propTypes = {
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

Home.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
