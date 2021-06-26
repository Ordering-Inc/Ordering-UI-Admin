import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    menu,
    UIComponent
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])

  /**
   * Update business menu name and comment
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    const currentChanges = {
      [e.target.name]: e.target.value
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */
  const handleCheckOrderType = (orderType) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [orderType]: !orderTypeState[orderType]
      }
    })
    setOrderTypeSate({ ...orderTypeState, [orderType]: !orderTypeState[orderType] })
  }

  /**
   * Method to control category selection
   * @param {*} categoryId category id
   */
  const handleClickCategory = (categoryId) => {
    const businessCategoryProducts = business.categories.find(category => category.id === categoryId).products
    const businessCategoryProductsIds = businessCategoryProducts.reduce((ids, product) => [...ids, product.id], [])
    let _selectedProductsIds = [...selectedProductsIds]
    if (businessCategoryProductsIds.every(elem => selectedProductsIds.includes(elem))) {
      _selectedProductsIds = _selectedProductsIds.filter(el => !businessCategoryProductsIds.includes(el))
    } else if (businessCategoryProductsIds.some(elem => selectedProductsIds.includes(elem))) {
      _selectedProductsIds = [...selectedProductsIds, ...businessCategoryProductsIds]
      _selectedProductsIds = [...new Set(_selectedProductsIds)]
    } else {
      _selectedProductsIds = [...selectedProductsIds, ...businessCategoryProductsIds]
    }
    setSelectedProductsIds(_selectedProductsIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: _selectedProductsIds
      }
    })
  }

  /**
   * Method to control category selection
   * @param {Number} categoryId category id
   */
  const handleCheckCategory = (categoryId) => {
    const businessCategoryProducts = business.categories.find(category => category.id === categoryId).products
    const businessCategoryProductsIds = businessCategoryProducts.reduce((ids, product) => [...ids, product.id], [])
    let result
    if (businessCategoryProductsIds.every(elem => selectedProductsIds.includes(elem))) {
      result = 'all'
    } else if (businessCategoryProductsIds.some(elem => selectedProductsIds.includes(elem))) {
      result = 'some'
    } else {
      result = 'nothing'
    }
    return result
  }

  /**
   * Method to control prodcut selection
   * @param {Number} productId product id
   */
  const handleCheckProduct = (productId) => {
    let _selectedProductsIds = [...selectedProductsIds]
    if (_selectedProductsIds.includes(productId)) {
      _selectedProductsIds = _selectedProductsIds.filter(id => id !== productId)
    } else {
      _selectedProductsIds.push(productId)
    }
    setSelectedProductsIds(_selectedProductsIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: _selectedProductsIds
      }
    })
  }

  /**
   * Method to update the busienss menu option from API
   */
  const handleUpdateBusinessMenuOption = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menu?.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  /**
   * Method to add the busienss menu option from API
   */
  const handleAddBusinessMenuOption = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
    setBusinessMenuState({ ...businessMenuState, menu: menu || {} })
    setOrderTypeSate({
      delivery: menu?.delivery,
      pickup: menu?.pickup,
      eatin: menu?.eatin,
      curbside: menu?.curbside,
      driver_thru: menu?.driver_thru
    })
    if (Object.keys(menu).length) {
      const _selectedProductsIds = menu.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      setSelectedProductsIds([])
    }
  }, [menu])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenuState={businessMenuState}
            formState={formState}
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleCheckCategory={handleCheckCategory}
            handleClickCategory={handleClickCategory}
            handleCheckProduct={handleCheckProduct}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
          />
        )
      }
    </>
  )
}

BusinessMenuOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
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

BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
