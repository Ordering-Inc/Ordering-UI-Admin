import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import {
  useSession,
  useApi
} from 'ordering-components-admin'

/**
 * Component to manage Advance Reports page behavior without UI component
 */
export const ReportsOrders = (props) => {
  const {
    UIComponent,
    endpoint
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [businessDistanceList, setBusinessDistanceList] = useState({ content: [], loading: false, error: null })
  const [filterList, setFilterList] = useState(
    {
      from: '',
      to: '',
      businessIds: null,
      drivers_ids: null,
      franchises_id: null,
      driver_companies_ids: null,
      driver_groups_ids: null,
      delivery_types_ids: null
    }
  )

  /**
   * Function to get Business distance list from API
   */
  const getBusinessDistanceList = async () => {
    if (loading) return
    try {
      setBusinessDistanceList({ ...businessDistanceList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      let params = ''
      if (filterList?.from === '' && filterList?.to === '') params = 'lapse=today'
      else params = `lapse=${filterList?.from},${filterList?.to}`
      if (filterList?.businessIds && filterList?.businessIds.length > 0) params = `${params}&businesses_ids=${JSON.stringify(filterList?.businessIds)}`
      if (filterList?.franchises_id && filterList?.franchises_id.length > 0) params = `${params}&franchises_id=${JSON.stringify(filterList?.franchises_id)}`

      const functionFetch = `${ordering.root}/reports/${endpoint}?${params}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBusinessDistanceList({
          ...businessDistanceList,
          loading: false,
          content: result
        })
      } else {
        setBusinessDistanceList({
          ...businessDistanceList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setBusinessDistanceList({
        ...businessDistanceList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getBusinessDistanceList()
  }, [filterList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterList={filterList}
          handleChangeFilterList={setFilterList}
          reportData={businessDistanceList}
        />
      )}
    </>
  )
}

ReportsOrders.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * String to send API request
   */
  endpoint: PropTypes.string,
  /**
   * String to send API request
   */
  endpoint1: PropTypes.string,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReportsOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
