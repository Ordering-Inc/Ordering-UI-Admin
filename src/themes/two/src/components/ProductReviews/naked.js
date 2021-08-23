import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const ProductReviewsList = (props) => {
  const {
    UIComponent,
    businessId,
    productId
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [reviewsListState, setReviewsListState] = useState({ reviews: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the reviews from API
   */
  const getProdutReviews = async () => {
    try {
      setReviewsListState({ ...reviewsListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/product_reviews/${productId}/reviews`, requestOptions)
      const content = await response.json()

      // setReviewsListState({ ...reviewsListState, loading: true })
      // const requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: JSON.stringify({ qualification: 4, comment: 'good product' })
      // }
      // const response = await fetch(`${ordering.root}/orders/821/product_reviews/1318`, requestOptions)
      // const content = await response.json()

      if (!content.error) {
        setReviewsListState({ ...reviewsListState, loading: false, reviews: content.result })
      }
    } catch (err) {
      setReviewsListState({ ...reviewsListState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getProdutReviews()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviewsListState={reviewsListState}
          actionState={actionState}
        />
      )}
    </>
  )
}

ProductReviewsList.propTypes = {
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

ProductReviewsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
