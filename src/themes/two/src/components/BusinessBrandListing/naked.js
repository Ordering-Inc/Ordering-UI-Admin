import React from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'

/**
 * Component to manage BusinessBrandListing behavior without UI component
 */
export const BusinessBrandListing = (props) => {
  const {
    UIComponent
  } = props

  // const [ordering] = useApi()
  // const [, t] = useLanguage()
  // const [{ loading }] = useSession()
  // const [, { showToast }] = useToast()

  /**
   * Method to get translation list from API
   */
  // const getTranslations = async () => {
  //   if (loading) return
  //   try {
  //     setTranslationList({ ...translationList, loading: true })

  //     const { content: { error, result } } = await ordering.translations().get()
  //     if (!error) {
  //       setTranslationList({
  //         ...translationList,
  //         loading: false,
  //         translations: result
  //       })
  //     } else {
  //       setTranslationList({
  //         ...translationList,
  //         loading: false,
  //         error: result
  //       })
  //     }
  //   } catch (err) {
  //     setTranslationList({
  //       ...translationList,
  //       loading: false,
  //       error: err
  //     })
  //   }
  // }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

BusinessBrandListing.propTypes = {
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

BusinessBrandListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
