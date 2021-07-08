import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const ProductExtraMetaFields = (props) => {
  const {
    businessId,
    extraId,
    metafields,
    UIComponent,
    handleSuccessAddMetaFields,
    handleSuccessDeleteBusinessMetaFields
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  /**
   * Array to save meta fields
   */
  const [metaFieldsList, setMetaFieldsList] = useState({ metaFields: [], loading: false, error: null })
  /**
   * object to save action state
   */
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })

  /**
   * Method to get meta fields from API
   */
  const getMetaFields = async () => {
    try {
      setMetaFieldsList({ ...metaFieldsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/extras/${extraId}/metafields`, requestOptions)
      const { result } = await response.json()
      setMetaFieldsList({ ...metaFieldsList, loading: false, metaFields: result })
    } catch (err) {
      setMetaFieldsList({ ...metaFieldsList, loading: false, error: err.message })
    }
  }

  /**
   * Method to delete meta fields from API
   */
  const handleDeleteMetaField = async (metaFieldId) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/extras/${extraId}/metafields/${metaFieldId}`, requestOptions)
      if (response.ok) {
        const metaFields = metaFieldsList.metaFields.filter(_metaField => {
          return _metaField.id !== metaFieldId
        })
        setMetaFieldsList({ ...metaFieldsList, metaFields: metaFields })
        setActionState({
          loading: false,
          result: {
            error: false
          }
        })
        handleSuccessDeleteBusinessMetaFields && handleSuccessDeleteBusinessMetaFields(metaFieldId)
      }
    } catch (error) {
      setActionState({
        result: {
          error: true,
          result: error.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to add meta fields from API
   */
  const handeAddMetaField = async (values) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(values)
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/extras/${extraId}/metafields`, requestOptions)
      const { error, result } = await response.json()
      if (error) {
        setActionState({
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      } else {
        let metafields = []
        metafields = [...metaFieldsList.metaFields, result]
        setMetaFieldsList({
          ...metaFieldsList,
          metaFields: metafields
        })
        setActionState({
          loading: false,
          result: {
            error: false
          }
        })
        if (handleSuccessAddMetaFields) {
          handleSuccessAddMetaFields(result)
        }
      }
    } catch (error) {
      setActionState({
        result: {
          error: true,
          result: error.message
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    if (metafields) {
      setMetaFieldsList({ ...metaFieldsList, metaFields: metafields })
    } else {
      getMetaFields()
    }
  }, [metafields])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          metaFieldsList={metaFieldsList}
          actionState={actionState}
          handleDeleteMetaField={handleDeleteMetaField}
          handeAddMetaField={handeAddMetaField}
        />
      )}
    </>
  )
}

ProductExtraMetaFields.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductExtraMetaFields.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
