import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage product extras behavior without UI component
 */
export const ProductExtraOptions = (props) => {
  const {
    UIComponent,
    business,
    extra,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [extraState, setExtraState] = useState({ extra: extra, loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [editOptionId, setEditOptionId] = useState(null)

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} optionId
   */
  const handleChangeInput = (e, optionId) => {
    setEditOptionId(optionId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Method to save the new ingredient from API
   */
  const handleUpdateOption = async () => {
    try {
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${editOptionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const options = extraState.extra.options.filter(option => {
          if (option.id === content.result.id) {
            Object.assign(option, content.result)
          }
          return true
        })
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })

        if (handleUpdateBusinessState) {
          const updatedExtras = business.extras.filter(extra => {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra)
            }
            return true
          })
          const businessState = { ...business, extras: updatedExtras }
          const categories = businessState.categories.map(item => {
            const _products = item.products.map(prod => {
              const _extras = prod.extras.filter(extra => {
                if (extra.id === updatedExtra.id) {
                  Object.assign(extra, updatedExtra)
                }
                return true
              })
              return { ...prod, extras: _extras }
            })
            const _item = { ...item, products: _products }
            return _item
          })
          const updatedBusiness = { ...businessState, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    if (Object.keys(formState.changes).length) {
      handleUpdateOption()
    }
  }, [formState])

  useEffect(() => {
    setExtraState({ ...extraState, extra: extra })
  }, [extra])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          extraState={extraState}
          handleChangeInput={handleChangeInput}
        />
      )}
    </>
  )
}

ProductExtraOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product extra options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product extra options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductExtraOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
