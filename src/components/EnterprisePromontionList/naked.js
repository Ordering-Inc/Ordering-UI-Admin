import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const EnterprisePromontionList = (props) => {
  const {
    business,
    businessId,
    promotions,
    UIComponent,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [promotionListState, setPromotionListState] = useState({ promotions: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the business promotions from API
   */
  const getBusinessesPromotions = async () => {
    try {
      setPromotionListState({ ...promotionListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/offers`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPromotionListState({ promotions: content.result, loading: false, error: null })
      }
    } catch (err) {
      setPromotionListState({
        ...promotionListState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to control the business promotion enabled state
   * @param {Number} promotionId promotion id
   */
  const handleChangePromotionActiveState = async (enabled, promotionId) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ enabled: enabled })
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/offers/${promotionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const _promotions = promotionListState.promotions.filter(promotion => {
          if (promotion.id === promotionId) {
            Object.assign(promotion, content.result)
          }
          return true
        })
        setPromotionListState({ ...promotionListState, promotions: _promotions })

        if (handleSuccessUpdate) {
          handleSuccessUpdate({ ...business, offers: _promotions })
        }
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the business promotion
   * @param {Number} promotionId promotion id
   */
  const handleDeletePromotion = async (promotionId) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/offers/${promotionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const _promotions = promotionListState.promotions.filter(promotion => promotion.id !== promotionId)
        setPromotionListState({ ...promotionListState, promotions: _promotions })

        if (handleSuccessUpdate) {
          handleSuccessUpdate({ ...business, offers: _promotions })
        }
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  // useEffect(() => {
  //   if (promotions) {
  //     setPromotionListState({
  //       ...promotionListState,
  //       loading: false,
  //       promotions: promotions
  //     })
  //   } else {
  //     getBusinessesPromotions()
  //   }
  // }, [promotions])

  useEffect(() => {
    getBusinessesPromotions()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            promotionListState={promotionListState}
            handleChangePromotionActiveState={handleChangePromotionActiveState}
            handleDeletePromotion={handleDeletePromotion}
          />
        )
      }
    </>
  )
}

EnterprisePromontionList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business promotions
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after business promotions
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before business promotions
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after business promotions
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

EnterprisePromontionList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
