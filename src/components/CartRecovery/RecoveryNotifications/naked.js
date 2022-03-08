import React from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const RecoveryNotifications = (props) => {
  const {
    // action,
    UIComponent
  } = props

  // const [, t] = useLanguage()
  // const [ordering] = useApi()
  // const [{ token }] = useSession()
  // const [, { showToast }] = useToast()

  // const [formState, setFormState] = useState({ loading: false, changes: {} })

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
          />
        )
      }
    </>
  )
}

RecoveryNotifications.propTypes = {
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

RecoveryNotifications.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
