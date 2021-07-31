import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const AnalyticsCustomerSatisfaction = (props) => {
  const {
    UIComponent
  } = props
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [analyticsDataList, setAnalyticsDataList] = useState({ loading: false, data: [], error: null })

  /**
   * Method to get location List
   */
  const getProductOrCategories = async () => {
    if (loading) return
    try {
      setAnalyticsDataList({ ...analyticsDataList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/reports/customer_satisfaction?lapse=last_30_days`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setAnalyticsDataList({
          ...analyticsDataList,
          loading: false,
          data: result
        })
      } else {
        setAnalyticsDataList({
          ...analyticsDataList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setAnalyticsDataList({
        ...analyticsDataList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getProductOrCategories()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          customerSatisfactionList={analyticsDataList}
        />
      )}
    </>
  )
}

AnalyticsCustomerSatisfaction.propTypes = {
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

AnalyticsCustomerSatisfaction.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
