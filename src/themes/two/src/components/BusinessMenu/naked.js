import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessMenu = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessBusinessMenu
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [businessMenusState, setBusinessMenusState] = useState({ menus: [], loading: false, error: null })

  /**
   * Method to get the business menus from API
   */
  const getBusinessMenus = async () => {
    try {
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          menus: content.result
        })
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to control business menu active state from API
   * @param {Number} menuId menu id to change the business menu state
   */
  const handleChangeBusinessMenuActiveState = async (menuId) => {
    try {
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const businessMenu = businessMenusState.menus.find(menu => menu.id === menuId)
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ enabled: !businessMenu.enabled })
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menuId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const menus = businessMenusState.menus.filter(menu => {
          if (menu.id === menuId) {
            Object.assign(menu, content.result)
          }
          return true
        })
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          menus: menus
        })
        const _business = { ...business, menus: menus }
        handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business)
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to delete the business menu from API
   * @param {Number} menuId menu id to delete the business menu
   */
  const handleDeleteBusinessMenu = async (menuId) => {
    try {
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menuId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const menus = businessMenusState.menus.filter(menu => menu.id !== menuId)
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          menus: menus
        })
        const _business = { ...business, menus: menus }
        handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business)
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (business?.menus) {
      setBusinessMenusState({ ...businessMenusState, menus: business?.menus })
    } else {
      getBusinessMenus()
    }
  }, [business])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenusState={businessMenusState}
            handleChangeBusinessMenuActiveState={handleChangeBusinessMenuActiveState}
            handleDeleteBusinessMenu={handleDeleteBusinessMenu}
          />
        )
      }
    </>
  )
}

BusinessMenu.propTypes = {
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

BusinessMenu.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
