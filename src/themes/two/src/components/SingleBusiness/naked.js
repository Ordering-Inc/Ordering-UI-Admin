import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessDetails = (props) => {
  const {
    business,
    businessId,
    propsToFetch,
    UIComponent,
    handleRemoveBusiness
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [businessState, setBusinessState] = useState({ business: null, loading: true,  error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * Method to get user from API
   */
  const getBusinesses = async () => {
    try {
      setBusinessState({
        ...businessState,
        loading: true
      })
      const fetchEndpoint = ordering.setAccessToken(session.token).businesses(businessId).select(propsToFetch)
      const { content: { result } } = await fetchEndpoint.get()
      const user = Array.isArray(result) ? null : result
      setBusinessState({
        ...businessState,
        loading: false,
        user
      })
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to change business enable/disable
   * @param {Boolean} enabled business enable state
   */

  const handleChangeActiveBusiness = async (enabled) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).businesses(businessId).save({ enabled: enabled })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        handleRemoveBusiness && handleRemoveBusiness(businessId)
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (business) {
      setBusinessState({
        ...businessState,
        loading: false,
        business: business
      })
    } else {
      getBusinesses()
    }
  }, [businessId, business])

  return (
    <>
    {
      UIComponent && (
        <UIComponent
          {...props}
          businessState={businessState}
          handleChangeActiveBusiness={handleChangeActiveBusiness}
        />
      )
    }
    </>
  )
}

BusinessDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
  * This must be contains businessId to fetch
  */
  businessId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
  * User, this must be contains an object with all user info
  */
  business: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
   beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
   /**
    * Components types after order details
    * Array of type components, the parent props will pass to these components
    */
   afterComponents: PropTypes.arrayOf(PropTypes.elementType),
   /**
    * Elements before order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
   beforeElements: PropTypes.arrayOf(PropTypes.element),
   /**
    * Elements after order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
   afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'city', 'enabled', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
