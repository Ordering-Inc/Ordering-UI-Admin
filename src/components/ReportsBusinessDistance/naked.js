import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'

/**
 * Component to manage Reports Distance page behavior without UI component
 */
export const ReportsBusinessDistance = (props) => {
  const {
    UIComponent
  } = props

  const [averageDistanceList, setAverageDistanceList] = useState({ distances: [], loading: false, error: null })
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const getAverageDistanceList = async () => {
    if (loading) return
    try {
      setAverageDistanceList({ ...averageDistanceList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const functionFetch = `${ordering.root}/reports/business_distance_average`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setAverageDistanceList({
          ...averageDistanceList,
          loading: false,
          distances: result
        })
      } else {
        setAverageDistanceList({
          ...averageDistanceList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setAverageDistanceList({
        ...averageDistanceList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getAverageDistanceList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

ReportsBusinessDistance.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

ReportsBusinessDistance.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
