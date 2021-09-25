import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const DriverReviewDetails = (props) => {
  const {
    userId,
    UIComponent
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [driverReviewState, setDriverReviewState] = useState({ reviews: [], loading: false, error: null })

  /**
   * Method to get the driver reviews from API
   */
  const getDriverReviews = async () => {
    try {
      setDriverReviewState({ ...driverReviewState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/users/${userId}/reviews`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriverReviewState({ reviews: content.result, loading: false, error: null })
      }
    } catch (err) {
      setDriverReviewState({
        ...driverReviewState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!userId) return
    getDriverReviews()
  }, [userId])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            driverReviewState={driverReviewState}
          />
        )
      }
    </>
  )
}

DriverReviewDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before driver review details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after driver review details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before driver review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after driver review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriverReviewDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
