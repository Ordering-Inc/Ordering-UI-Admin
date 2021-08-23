import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const DriversCompaniesList = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [driversCompaniesState, setDriversCompaniesState] = useState({ companies: [], loading: false, error: null })

  /**
   * Method to get the drivers companies from API
   */
  const getDriversCompanies = async () => {
    try {
      setDriversCompaniesState({ ...driversCompaniesState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/driver_companies`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversCompaniesState({ ...driversCompaniesState, companies: content.result, loading: false })
      }
    } catch (err) {
      setDriversCompaniesState({ ...driversCompaniesState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getDriversCompanies()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            driversCompaniesState={driversCompaniesState}
          />
        )
      }
    </>
  )
}

DriversCompaniesList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers companies list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers companies list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers companies list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers companies list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversCompaniesList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
