import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage Settings page behavior without UI component
 */
export const BusinessMoreDetail = (props) => {
  const {
    UIComponent
  } = props

  const [formState, setFormState] = useState({ changes: null, loading: false, result: { error: null } })

  const handleChnageFormState = (changes) => {
    setFormState({
      ...formState,
      changes: { ...changes }
    })
  }

  useEffect(() => {
    console.log(formState, 'this is formState')
  }, [formState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeFormState={handleChnageFormState}
        />
      )}
    </>
  )
}

BusinessMoreDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessMoreDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
