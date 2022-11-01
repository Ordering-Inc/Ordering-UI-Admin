import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage ad banners behavior without UI component
 */
export const AdBannersList = (props) => {
  const {
    defaultPosition,
    UIComponent,
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [bannersListState, setBannersListState] = useState({ loading: true, banners: [], error: null })

  /**
   * Method to get the ad banners from API
   */
  const getAdBanners = async () => {
    try {
      setBannersListState({
        ...bannersListState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      let where = []
      const conditions = []
      if (defaultPosition) {
        conditions.push(
          {
            attribute: 'position',
            value: defaultPosition
          }
        )
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const response = await fetch(`${ordering.root}/banners?where=${JSON.stringify(where)}`, requestOptions)
      const content = await response.json()
      setBannersListState({
        loading: false,
        banners: content.error ? [] : content.result,
        error: content.error ? content.result : null
      })
    } catch (error) {
      setBannersListState({
        ...bannersListState,
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    getAdBanners()
  }, [defaultPosition])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          bannersListState={bannersListState}
        />
      )}
    </>
  )
}

AdBannersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

AdBannersList.defaultProps = {}
