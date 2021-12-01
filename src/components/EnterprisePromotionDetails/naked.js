import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const EnterprisePromotionDetails = (props) => {
  const {
    promotion,
    promotionsList,
    UIComponent,
    handleSuccessUpdatePromotions,
    handleSuccessAddPromotion
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [promotionState, setPromotionState] = useState({ promotion: promotion, loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {} })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [isAddMode, setIsAddMode] = useState(false)

  /**
   * Clean formState
   */
  const cleanFormState = () => setFormState({ loading: false, changes: {} })

  /**
   * Update business promotion image data
   * @param {File} file Image to change business promotion image
   */
  const handleChangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          image: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [e.target.name]: e.target.value }
    })
  }

  /**
   * Update parameter data
   * @param {changes} changes parameters to change
   */
  const handleChangeItem = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        ...changes
      }
    })
  }

  /**
   * Method to change the sites
   */
  const handleChangeSites = (checked, siteId) => {
    let sites = []
    if (formState.changes?.sites) {
      sites = [...formState.changes?.sites]
    } else {
      sites = promotion?.sites.reduce((ids, site) => [...ids, site.id], [])
    }
    if (checked) {
      sites.push(siteId)
    } else {
      sites = sites.filter(id => id !== siteId)
    }
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sites: sites
      }
    })
  }

  /**
   * Default fuction for business profile workflow
   */
  const handleUpdateClick = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }

      const response = await fetch(`${ordering.root}/offers/${promotion.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setPromotionState({
          ...promotionState,
          promotion: content.result
        })
        setActionState({ ...actionState, loading: false })
        if (handleSuccessUpdatePromotions) {
          const updatedPromotions = promotionsList.filter(_promotion => {
            if (_promotion.id === promotion.id) {
              Object.assign(_promotion, content.result)
            }
            return true
          })
          handleSuccessUpdatePromotions(updatedPromotions)
        }
        showToast(ToastType.Success, t('PROMOTION_SAVED', 'Promotion saved'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to add new promotion from API
   */
  const handleAddPromotion = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }

      const response = await fetch(`${ordering.root}/offers`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleSuccessAddPromotion && handleSuccessAddPromotion(content.result)
        showToast(ToastType.Success, t('PROMOTION_ADDED', 'Promotion added'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    if (Object.keys(promotion).length === 0) {
      setIsAddMode(true)
      setFormState({
        ...formState,
        changes: {
          auto: false,
          public: true,
          condition_type: 1,
          businesses: [3, 20],
          sites: [1]
        }
      })
    } else setIsAddMode(false)
    setPromotionState({ ...promotionState, promotion: promotion })
    cleanFormState()
  }, [promotion])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            isAddMode={isAddMode}
            promotionState={promotionState}
            formState={formState}
            actionState={actionState}
            handleChangeImage={handleChangeImage}
            handleChangeInput={handleChangeInput}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
            handleChangeItem={handleChangeItem}
            handleChangeSites={handleChangeSites}
          />
        )
      }
    </>
  )
}

EnterprisePromotionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

EnterprisePromotionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
