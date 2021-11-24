import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const CheckoutFieldsSetting = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const hideSettingList = ['city_dropdown_option', 'address', 'zipcode', 'address_notes']

  const [checkoutFieldsState, setCheckoutFieldsState] = useState({ fields: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the checkout fields from API
   */
  const getCheckoutFields = async () => {
    try {
      setCheckoutFieldsState({ ...checkoutFieldsState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/checkoutfields`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const checkoutFields = content.result.filter(field => !hideSettingList.includes(field.code))
        const orderValidationFields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email', 'mobile_phone', 'city_dropdown_option', 'address', 'zipcode', 'address_notes', 'coupon', 'driver_tip']
        const validationF = []
        orderValidationFields.forEach(field => {
          const sort = checkoutFields.findIndex(validationfields => {
            return validationfields.code === field
          })
          if (sort !== -1) {
            const item = checkoutFields[sort]
            checkoutFields.splice(sort, 1)
            validationF.push(item)
          }
        })
        setCheckoutFieldsState({ fields: validationF, loading: false })
      }
    } catch (err) {
      setCheckoutFieldsState({ ...checkoutFieldsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the checkout fields setting from API
   * @param {Number} fieldId selected field id
   * @param {Object} changes changes
   */
  const handleChangeCheckoutFieldSetting = async (fieldId, changes) => {
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
      const response = await fetch(`${ordering.root}/checkoutfields/${fieldId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('FIELD_SAVED', 'Field saved'))
        const fields = checkoutFieldsState.fields.filter(field => {
          if (field.id === fieldId) {
            Object.assign(field, content.result)
          }
          return true
        })
        setCheckoutFieldsState({ ...checkoutFieldsState, fields: fields })
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getCheckoutFields()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          checkoutFieldsState={checkoutFieldsState}
          handleChangeCheckoutFieldSetting={handleChangeCheckoutFieldSetting}
        />
      )}
    </>
  )
}

CheckoutFieldsSetting.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before checkout fields
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after checkout fields
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before checkout fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after checkout fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CheckoutFieldsSetting.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
