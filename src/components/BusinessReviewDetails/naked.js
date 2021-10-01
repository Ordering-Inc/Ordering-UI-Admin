import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessReviewDetails = (props) => {
  const {
    businessId,
    businessReviews,
    propsToFetch,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [businessReviewState, setBusinessReviewState] = useState({ reviews: [], loading: false, error: null })

  /**
   * Method to get the driver reviews from API
   */
  const getBusinessReviews = async () => {
    try {
      setBusinessReviewState({ ...businessReviewState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/business/${businessId}/reviews?params=${propsToFetch.toString()}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessReviewState({ reviews: content.result, loading: false, error: null })
      }
    } catch (err) {
      setBusinessReviewState({
        ...businessReviewState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (businessReviews) {
      setBusinessReviewState({
        ...businessReviewState,
        reviews: businessReviews
      })
    } else {
      getBusinessReviews()
    }
  }, [businessId, businessReviews])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessReviewState={businessReviewState}
          />
        )
      }
    </>
  )
}

BusinessReviewDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business review details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after business review details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before business review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after business review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessReviewDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['user', 'created_at']
}
