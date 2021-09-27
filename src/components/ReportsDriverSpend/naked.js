import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'

/**
 * Component to manage Reports Order Distance page behavior without UI component
 */
export const ReportsDriverSpend = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [orderDistanceList, setOrderDistanceList] = useState({ distances: [], loading: false, error: null })
  const [filterList, setFilterList] = useState({ from: '', to: '', businessIds: null, drivers_ids: null, franchises_id: null, driver_companies_ids: null })

  const getOrderDistanceList = async () => {
    if (loading) return
    try {
      setOrderDistanceList({ ...orderDistanceList, loading: true })
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

      const functionFetch = `${ordering.root}/reports/driver_companies_spend_times?${params}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setOrderDistanceList({
          ...orderDistanceList,
          loading: false,
          distances: result
        })
      } else {
        setOrderDistanceList({
          ...orderDistanceList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setOrderDistanceList({
        ...orderDistanceList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getOrderDistanceList()
  }, [filterList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterList={filterList}
          handleChangeFilterList={setFilterList}
          orderDistanceList={orderDistanceList}
        />
      )}
    </>
  )
}

ReportsDriverSpend.propTypes = {
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

ReportsDriverSpend.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
