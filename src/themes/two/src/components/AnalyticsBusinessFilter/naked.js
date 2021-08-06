import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const AnalyticsBusinessFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose
  } = props

  const [ordering] = useApi()

  /**
   * This state save the business type info from API
   */
  const [businessList, setBusinessList] = useState({ loading: true, error: null, businesses: [], pagination: null })
  const [businessIds, setBusinessIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)

  /**
   * Method to change business id
   * @param {number} id
   */
  const handleChangeBusinessId = (id) => {
    const found = businessIds?.find(businessId => businessId === id)
    if (found) {
      const _businessIds = businessIds?.filter(businessId => businessId !== id)
      setBusinessIds(_businessIds)
      setIsAllCheck(false)
    } else {
      const _businessIds = businessIds ? [...businessIds] : []
      _businessIds.push(id)
      if (_businessIds.length === businessList?.businesses.length) setIsAllCheck(true)
      setBusinessIds(_businessIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _businessIds = businessIds ? [...businessIds] : null
    handleChangeFilterList({ ...filterList, businessIds: _businessIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setBusinessIds(null)
    } else {
      const _businessIds = []
      for (const business of businessList.businesses) {
        _businessIds.push(business.id)
      }
      setBusinessIds(_businessIds)
    }
    setIsAllCheck(!isAllCheck)
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
      const { content: { error, result, pagination } } = await ordering.businesses().asDashboard().select(propsToFetch).get()
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
    const controller = new AbortController()
    getBusinessTypes()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (businessList?.businesses?.length > 0) {
      const _businessIds = []
      for (const business of businessList.businesses) {
        _businessIds.push(business.id)
      }
      if (filterList?.businessIds) {
        setBusinessIds([...filterList?.businessIds])
      } else {
        setBusinessIds(_businessIds)
        setIsAllCheck(true)
      }
    }
  }, [businessList?.businesses])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          businessIds={businessIds}
          isAllCheck={isAllCheck}
          handleChangeBusinessId={handleChangeBusinessId}
          handleClickFilterButton={handleClickFilterButton}
          handleChangeAllCheck={handleChangeAllCheck}
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
   * filterList, this must be contains an object with filter list
   */
  filterList: PropTypes.object,
  /**
  * Method to change filter list
  */
  handleChangeFilterList: PropTypes.func,
  /**
  * Method to close business filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
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
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
