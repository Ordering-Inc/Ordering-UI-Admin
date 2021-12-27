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
    businessesList,
    sitesState,
    UIComponent,
    handleSuccessUpdatePromotions,
    handleSuccessAddPromotion,
    handleSuccessDeletePromotion
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [promotionState, setPromotionState] = useState({ promotion: promotion, loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {} })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [isAddMode, setIsAddMode] = useState(false)
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])
  const [selectedSitesIds, setSelectedSitesIds] = useState([])
  const [selectedProductsIds, setSelectedProductsIds] = useState([])
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([])

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
  const handleSelectSite = (checked, siteId) => {
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
    setSelectedSitesIds(sites)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sites: sites
      }
    })
  }

  const handleSelectAllBusiness = (isAll) => {
    const businessIds = businessesList?.businesses?.reduce((ids, business) => [...ids, business.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...businessIds]
    } else {
      filteredIds = []
    }
    setSelectedBusinessIds(filteredIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        businesses: filteredIds
      }
    })
  }

  const handleSelectBusiness = (businessId, checked) => {
    const businessIds = [...selectedBusinessIds]
    let filteredIds = []
    if (checked) {
      filteredIds = [...businessIds, businessId]
    } else {
      filteredIds = businessIds.filter(id => id !== businessId)
    }
    setSelectedBusinessIds(filteredIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        businesses: filteredIds
      }
    })
  }

  const handleSelectAllSites = (isAll) => {
    const sitesIds = sitesState.sites?.reduce((ids, site) => [...ids, site.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...sitesIds]
    } else {
      filteredIds = []
    }
    setSelectedSitesIds(filteredIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sties: filteredIds
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
      const changes = { ...formState?.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
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
        cleanFormState()
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
      const changes = { ...formState?.changes }
      if (changes?.schedule) {
        changes.schedule = JSON.stringify(changes.schedule)
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/offers`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ error: null, loading: false })
        handleSuccessAddPromotion && handleSuccessAddPromotion(content.result)
        showToast(ToastType.Success, t('PROMOTION_ADDED', 'Promotion added'))
        props.onClose && props.onClose()
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
   * Method to delete the business promotion
   * @param {Number} promotionId promotion id
   */
  const handleDeletePromotion = async () => {
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
      const response = await fetch(`${ordering.root}/offers/${promotion.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        handleSuccessDeletePromotion && handleSuccessDeletePromotion(promotion.id)
        showToast(ToastType.Success, t('OFFER_DELETED', 'Offer deleted'))
        props.onClose && props.onClose()
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (Object.keys(promotion).length === 0) {
      setIsAddMode(true)
      setFormState({
        ...formState,
        changes: {
          enabled: true,
          auto: false,
          public: true,
          condition_type: 1,
          type: 1,
          target: 1,
          rate_type: 1,
          stackable: false,
          rate: 5
        }
      })
    } else {
      setIsAddMode(false)
      cleanFormState()
      const businessIds = promotion?.businesses?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds || [])
      const sitesIds = promotion?.sites?.reduce((ids, site) => [...ids, site.id], [])
      setSelectedSitesIds(sitesIds || [])
      const _selectedProductsIds = promotion?.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
      const _selectedCategoryIds = promotion?.categories.reduce((ids, category) => [...ids, category.id], [])
      setSelectedCategoryIds(_selectedCategoryIds)
    }
    setPromotionState({ ...promotionState, promotion: promotion })
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
            selectedBusinessIds={selectedBusinessIds}
            selectedSitesIds={selectedSitesIds}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            selectedCategoryIds={selectedCategoryIds}
            setSelectedCategoryIds={setSelectedCategoryIds}
            handleChangeImage={handleChangeImage}
            handleChangeInput={handleChangeInput}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
            handleDeletePromotion={handleDeletePromotion}
            handleChangeItem={handleChangeItem}
            handleSelectSite={handleSelectSite}
            handleSelectAllBusiness={handleSelectAllBusiness}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllSites={handleSelectAllSites}
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
