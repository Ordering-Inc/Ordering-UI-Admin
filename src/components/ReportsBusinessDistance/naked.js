import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'
import data from './data.json'

/**
 * Component to manage Reports Business Distance page behavior without UI component
 */
export const ReportsBusinessDistance = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [businessDistanceList, setBusinessDistanceList] = useState({ distances: [], loading: false, error: null })
  const [filterList, setFilterList] = useState({ from: '', to: '', businessIds: null, drivers_ids: null, franchises_id: null, driver_companies_ids: null })

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
      if (filterList?.from !== '' && filterList?.to !== '') params = `from=${filterList?.from} 00:00:00&to=${filterList?.to} 00:00:00`
      if (filterList?.businessIds && filterList?.businessIds.length > 0) params = `${params}&businesses_ids=${JSON.stringify(filterList?.businessIds)}`
      if (filterList?.drivers_ids && filterList?.drivers_ids.length > 0) params = `${params}&drivers_ids=${JSON.stringify(filterList?.drivers_ids)}`
      if (filterList?.franchises_id && filterList?.franchises_id.length > 0) params = `${params}&franchises_id=${JSON.stringify(filterList?.franchises_id)}`
      if (filterList?.driver_companies_ids && filterList?.drivers_ids.length > 0) params = `${params}&driver_companies_ids=${JSON.stringify(filterList?.driver_companies_ids)}`

      const functionFetch = `${ordering.root}/reports/business_distance_average?${params}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBusinessDistanceList({
          ...businessDistanceList,
          loading: false,
          distances: data
        })
      } else {
        setBusinessDistanceList({
          ...businessDistanceList,
          loading: true,
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
          businessDistanceList={businessDistanceList}
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
