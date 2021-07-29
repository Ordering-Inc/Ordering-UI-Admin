import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessAnalytics = (props) => {
  const {
    UIComponent
  } = props

  const [analyticsStatus, setAnalyticsStatus] = useState('today')

  const changeAnalyticsStatus = (status) => {
    setAnalyticsStatus(status)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          selectedAnalyticsStatus={analyticsStatus}
          changeAnalyticsStatus={changeAnalyticsStatus}
        />
      )}
    </>
  )
}

BusinessAnalytics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessAnalytics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
