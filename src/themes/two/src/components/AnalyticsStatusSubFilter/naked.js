import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const AnalyticsStatusSubFilter = (props) => {
  const {
    UIComponent
  } = props
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [appIdList, setAppIdList] = useState({ loading: false, ids: [], error: null })

  /**
   * Method to get App_id List
   */
  const getAppIds = async () => {
    if (loading) return
    try {
      setAppIdList({ ...appIdList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const functionFetch = `${ordering.root}/reports/app_ids`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setAppIdList({
          ...appIdList,
          loading: false,
          ids: result
        })
      } else {
        setAppIdList({
          ...appIdList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setAppIdList({
        ...appIdList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getAppIds()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          appIdList={appIdList}
        />
      )}
    </>
  )
}

AnalyticsStatusSubFilter.propTypes = {
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

AnalyticsStatusSubFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
