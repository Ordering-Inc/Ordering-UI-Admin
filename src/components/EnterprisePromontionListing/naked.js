import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'

import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const EnterprisePromontionList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    propsToFetch,
    isSearchByPromotionName,
    isSearchByPromotionDescription
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [promotionListState, setPromotionListState] = useState({ promotions: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [searchValue, setSearchValue] = useState(null)
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [dataSelected, setDataSelected] = useState(null)
  const [sitesState, setSitesState] = useState({ loading: false, sites: [], error: null })

  /**
   * Method to get the promotions from API
   */
  const getPromotions = async (page, pageSize) => {
    try {
      setPromotionListState({ ...promotionListState, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        if (isSearchByPromotionName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByPromotionDescription) {
          searchConditions.push(
            {
              attribute: 'description',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = where
        ? `${ordering.root}/offers?page=${page}&page_size=${pageSize}8&params=${propsToFetch.toString()}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/offers?page=${page}&page_size=${pageSize}8&params=${propsToFetch.toString()}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPromotionListState({ promotions: content.result, loading: false, error: null })
        setPaginationProps({
          ...paginationProps,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      } else {
        setPromotionListState({
          ...promotionListState,
          loading: false,
          error: content.result
        })
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
  const handleEnablePromotion = async (promotionId, enabled) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ enabled: enabled })
      }
      const response = await fetch(`${ordering.root}/offers/${promotionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const _promotions = promotionListState.promotions.filter(promotion => {
          if (promotion.id === promotionId) {
            Object.assign(promotion, content.result)
          }
          return true
        })
        setPromotionListState({ ...promotionListState, promotions: _promotions })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
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
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/offers/${promotionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const _promotions = promotionListState.promotions.filter(promotion => promotion.id !== promotionId)
        setPromotionListState({ ...promotionListState, promotions: _promotions })
        setPaginationProps({
          ...paginationProps,
          to: paginationProps?.to - 1,
          total: paginationProps?.total - 1
        })
        showToast(ToastType.Success, t('OFFER_DELETED', 'Offer deleted'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to handle drag start
   */
  const handleDragStart = (event, promotion) => {
    event.dataTransfer.setData('transferPromotionId', promotion.id)

    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = promotion?.name
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }

  /**
   * Method to handle drag over
   */
  const handleAllowDrop = (event, promotionId) => {
    event.preventDefault()
    setDataSelected(promotionId)
  }

  /**
   * Method to handle drag drop
   */
  const handleDrop = (event, promotion) => {
    event.preventDefault()
    const transferPromotionId = parseInt(event.dataTransfer.getData('transferPromotionId'))

    const transferPromotion = promotionListState.promotions.find(_promotion => _promotion.id === transferPromotionId)
    const transferPromotionRank = transferPromotion?.rank
    let dropPromotionRank = promotion?.rank
    if (transferPromotionRank === null && dropPromotionRank === null) {
      dropPromotionRank = 1
    }
    // handleChangeCategoryRank(transferPromotionId, { rank: dropPromotionRank })
  }

  /**
   * Method to handle drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    setDataSelected('')
  }

  /**
   * Method to change the rank of transfer category
   */
  const handleChangeCategoryRank = async (transferCategoryId, params) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/offers/${transferCategoryId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        showToast(ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'))
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to update the promotion list
   */
  const handleSuccessUpdatePromotions = (updatedPromotions) => {
    setPromotionListState({
      ...promotionListState,
      promotions: updatedPromotions
    })
  }

  /**
   * Method to add the promotion in the promotion list
   * @param {Object} promotion promotion to add
   */
  const handleSuccessAddPromotion = (promotion) => {
    const promotions = [...promotionListState.promotions, promotion]
    setPaginationProps({
      ...paginationProps,
      to: paginationProps?.to + 1,
      total: paginationProps?.total + 1
    })
    setPromotionListState({ ...promotionListState, promotions })
  }

  /**
   * Method to get all the sites from API
   */
  const getSites = async () => {
    try {
      setSitesState({ ...sitesState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setSitesState({ sites: content.result, loading: false, error: null })
      }
    } catch (err) {
      setSitesState({
        ...sitesState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (promotionListState.loading) return
    getPromotions(1, paginationProps.pageSize)
  }, [searchValue])

  useEffect(() => {
    getSites()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            sitesState={sitesState}
            promotionListState={promotionListState}
            paginationProps={paginationProps}
            setPaginationProps={setPaginationProps}
            searchValue={searchValue}
            onSearch={setSearchValue}
            getPromotions={getPromotions}
            dataSelected={dataSelected}
            handleDragStart={handleDragStart}
            handleAllowDrop={handleAllowDrop}
            handleDrop={handleDrop}
            handleDragEnd={handleDragEnd}
            handleEnablePromotion={handleEnablePromotion}
            handleDeletePromotion={handleDeletePromotion}
            handleSuccessUpdatePromotions={handleSuccessUpdatePromotions}
            handleSuccessAddPromotion={handleSuccessAddPromotion}
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
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
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
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  propsToFetch: [
    'name', 'auto', 'enabled', 'end', 'description', 'image', 'label', 'order_priority', 'sites', 'stackable', 'start', 'target', 'type',
    'limit_per_user', 'user_order_count', 'user_order_count_condition', 'valid_from_after_user_last_order_minutes', 'valid_until_after_user_last_order_minutes',
    'users', 'delivery_zones', 'paymethods', 'order_types_allowed', 'max_discount', 'rank', 'rate_type', 'rate', 'public', 'coupon', 'businesses', 'condition_type',
    'minimum', 'products', 'categories', 'schedule', 'limit'
  ]
}
