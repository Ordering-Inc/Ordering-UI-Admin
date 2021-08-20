import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const BusinessReviewsList = (props) => {
  const {
    UIComponent,
    propsToFetch
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [reviewsListState, setReviewsListState] = useState({ reviews: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get business reviews from API
   */
  const getBusinessReviews = async () => {
    try {
      setReviewsListState({ ...reviewsListState, loading: true })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .businesses()
        .select(propsToFetch)
        .asDashboard()
        .get()
      if (!error) {
        const reviews = []
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].reviews.reviews.length; j++) {
            result[i].reviews.reviews[j].business_id = result[i].id
            result[i].reviews.reviews[j].business_name = result[i].name
            result[i].reviews.reviews[j].business_logo = result[i].logo
            result[i].reviews.reviews[j].city_name = result[i].city?.name
            reviews.push(result[i].reviews.reviews[j])
          }
        }
        if (reviews.length > 0) {
          reviews.sort((a, b) => b.id - a.id)
        }
        setReviewsListState({ ...reviewsListState, loading: false, reviews: reviews })
      }
    } catch (err) {
      setReviewsListState({ ...reviewsListState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the business review from API
   */
  const handleUpdateReview = async (businessId, reviewId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))

      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/reviews/${reviewId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const reviews = reviewsListState.reviews.filter(review => {
          if (review.id === reviewId) {
            Object.assign(review, content.result)
          }
          return true
        })
        setReviewsListState({ ...reviewsListState, reviews: reviews })
        showToast(ToastType.Success, t('REVIEW_UPDATED', 'Review updated'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the business review from API
   */
  const handleDeleteReview = async (businessId, reviewId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/reviews/${reviewId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const reviews = reviewsListState.reviews.filter(review => review.id !== reviewId)
        setReviewsListState({ ...reviewsListState, reviews: reviews })
        showToast(ToastType.Success, t('REVIEW_REMOVED', 'Review removed'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getBusinessReviews()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviewsListState={reviewsListState}
          actionState={actionState}
          handleUpdateReview={handleUpdateReview}
          handleDeleteReview={handleDeleteReview}
        />
      )}
    </>
  )
}

BusinessReviewsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before reviews list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after reviews list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before reviews list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after reviews list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessReviewsList.defaultProps = {
  propsToFetch: ['reviews', 'name', 'logo', 'city'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
