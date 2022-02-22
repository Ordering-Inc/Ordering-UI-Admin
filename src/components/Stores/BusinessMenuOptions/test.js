import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    menu,
    UIComponent,
    handleUpdateBusinessState,
    isSelectedSharedMenus,
    sitesState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [subCategoriesList, setSubCategoriesList] = useState([])

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
   * Method to update the busienss menu option from API
   */
  const handleUpdateBusinessMenuOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, result: { error: false } })
      const changes = { ...formState.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menu?.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: content.error,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        const _business = { ...business }
        _business.menus.filter(menu => {
          if (menu.id === content.result.id) {
            Object.assign(menu, content.result)
            const isUpdatedProducts = typeof (changes?.products) !== 'undefined'
            if (isUpdatedProducts) {
              menu.products = [...selectedProducts]
            }
          }
          return true
        })

        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_SAVED', 'Products catalog saved'))
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
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, result: { error: false } })

      const changes = { ...formState?.changes }
      if (changes?.products) {
        changes.products = JSON.stringify(changes?.products)
      }
      if (changes?.schedule) {
        changes.schedule = JSON.stringify(changes?.schedule)
      } else {
        const schedule = []
        for (var i = 0; i < 7; i++) {
          schedule.push({
            enabled: true,
            lapses: [
              {
                open: {
                  hour: 0,
                  minute: 0
                },
                close: {
                  hour: 23,
                  minute: 45
                }
              }
            ]
          })
        }
        changes.schedule = JSON.stringify(schedule)
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: content.error,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
        const _business = { ...business }
        let _menu = { ...content.result, enabled: true }

        let allProducts = []
        business.categories.forEach(function iterate(category) {
          allProducts = [...allProducts, ...category.products]
          Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
        })

        let products = []
        if (changes?.all_products) {
          products = [...allProducts]
        } else {
          products = allProducts.filter(product => _menu.products.includes(product.id))
        }
        _menu = { ..._menu, products: products }
        _business.menus.push(_menu)
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_ADDED', 'Products catalog added'))
        props.onClose() && props.onClose()
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  const handleDeleteMenu = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const endPoint = isSelectedSharedMenus
        ? `${ordering.root}/business/${business.id}/menus_shared/${menu.id}`
        : `${ordering.root}/business/${business.id}/menus/${menu.id}`
      const response = await fetch(endPoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({
          ...formState,
          loading: false,
          error: null
        })
        let _business = null
        if (isSelectedSharedMenus) {
          const menusShared = business.menus_shared.filter(_menu => _menu.id !== menu.id)
          _business = { ...business, menus_shared: menusShared }
        } else {
          const menus = business.menus.filter(_menu => _menu.id !== menu.id)
          _business = { ...business, menus: menus }
        }
        handleUpdateBusinessState && handleUpdateBusinessState(_business)
        showToast(ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'))
        props.onClose && props.onClose()
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err
      })
    }
  }

  const handleChangeScheduleState = (scheduleChanges) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        schedule: scheduleChanges
      }
    })
  }

  const handleChangeMenuSite = (site) => {
    const sites = [
      ...menu?.sites?.map(s => s.id).filter(s => formState.changes.sites ? formState.changes.sites?.includes(s) : true),
      ...formState.changes.sites || []
    ]
    const isRemove = sites.includes(site)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sites:
          isRemove
            ? sites.filter(s => s !== site)
            : [...sites, site]
      }
    })
  }

  const handleSelectAllChannels = () => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sites: sitesState?.sites.map(s => s.id)
      }
    })
  }

  const handleSelectNoneChannels = () => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        sites: []
      }
    })
  }

  useEffect(() => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: selectedProductsIds
      }
    })
  }, [selectedProductsIds])

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
    let _selectedProductsIds = []
    if (Object.keys(menu).length) {
      _selectedProductsIds = menu.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
      setSelectedProducts(menu.products)
    } else {
      setSelectedProductsIds([])
      setSelectedProducts([])
      setOrderTypeSate({
        delivery: true,
        pickup: true,
        eatin: false,
        curbside: false,
        driver_thru: false
      })
      setFormState({
        ...formState,
        changes: {
          delivery: true,
          pickup: true
        }
      })
    }
    handleSetSubCategoryList(_selectedProductsIds)
  }, [menu])

  const handleSetSubCategoryList = (_selectedProductsIds) => {
    if (business?.categories.length) {
      const _subCategoriesList = []
      const iterateCategories = (categories) => {
        return (
          categories?.length > 0 && categories?.forEach(category => {
            let productIds = []
            const _productIds = category.products.reduce((ids, product) => [...ids, product.id], [])
            productIds = [...productIds, ..._productIds]
            if (category?.subcategories?.length) {
              category.subcategories.forEach(function iterate(category) {
                const _productIds = category.products.reduce((ids, product) => [...ids, product.id], [])
                productIds = [...productIds, ..._productIds]
                Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
              })
            }

            _subCategoriesList.push({
              id: category.id,
              name: category.name,
              productIds: productIds,
              isChecked:
                productIds.length === 0
                  ? false
                  : productIds.every(id => _selectedProductsIds.includes(id))
            })
            iterateCategories(category.subcategories)
          })
        )
      }
      setSubCategoriesList(_subCategoriesList)
      iterateCategories(business?.categories)
    }
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenuState={businessMenuState}
            formState={formState}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
            handleChangeScheduleState={handleChangeScheduleState}
            handleDeleteMenu={handleDeleteMenu}
            handleChangeMenuSite={handleChangeMenuSite}
            handleSelectAllChannels={handleSelectAllChannels}
            handleSelectNoneChannels={handleSelectNoneChannels}
            subCategoriesList={subCategoriesList}
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
