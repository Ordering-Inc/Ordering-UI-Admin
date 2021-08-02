import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const AnalyticsBusinessFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList
  } = props

  const [ordering] = useApi()

  /**
   * This state save the business type info from API
   */
  const [businessList, setBusinessList] = useState({ loading: true, error: null, businesses: [], pagination: null })
  const [businessIds, setBusinessIds] = useState(null)

  const handleChangeBusinessId = (id) => {
    const found = businessIds.find(businessId => businessId === id)
    if (found) {
      const _businessIds = businessIds.filter(businessId => businessId !== id)
      setBusinessIds(_businessIds)
    } else {
      const _businessIds = [...businessIds]
      _businessIds.push(id)
      setBusinessIds(_businessIds)
    }
  }

  const handleClickFilterButton = () => {
    console.log('businessIds')
    const _businessIds = [...businessIds]
    handleChangeFilterList({ ...filterList, businessIds: _businessIds })
  }

  /**
   * Method to get business types from API
   */
  const getBusinessTypes = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const { content: { error, result, pagination } } = await ordering.businesses().asDashboard().get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result,
          pagination
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    getBusinessTypes()
  }, [])

  useEffect(() => {
    if (businessList?.businesses?.length > 0) {
      const _businessIds = []
      for (const business of businessList.businesses) {
        _businessIds.push(business.id)
      }
      setBusinessIds(_businessIds)
    }
  }, [businessList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          businessIds={businessIds}
          handleChangeBusinessId={handleChangeBusinessId}
          handleClickFilterButton={handleClickFilterButton}
        />
      )}
    </>
  )
}

AnalyticsBusinessFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AnalyticsBusinessFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
