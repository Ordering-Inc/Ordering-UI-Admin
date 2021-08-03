import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const DriverAnalytics = (props) => {
  const {
    UIComponent
  } = props

  const [filterList, setFilterList] = useState({ lapse: 'today', businessIds: null, app_id: 'all', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone })
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [ordersList, setOrdersList] = useState({ loading: false, data: [], error: null })

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
      const rootUrl = `${ordering.root}/reports/orders_drivers`
      let params = `lapse=${filterList?.lapse}`
      if (filterList.businessIds) params = `${params}&businesses=${filterList?.businessIds?.toString()}`
      if (filterList.app_id && filterList.app_id !== 'all') params = `${params}&app_id=${filterList?.app_id}`
      if (filterList?.timezone) params = `${params}&timezone=${filterList?.timezone}`
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

  useEffect(() => {
    getOrders()
  }, [filterList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterList={filterList}
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
