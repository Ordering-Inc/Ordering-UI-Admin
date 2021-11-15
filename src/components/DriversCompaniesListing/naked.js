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
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedCompanyList, setSelectedCompanyList] = useState([])
  const [startSeveralDeleteStart, setStartSeveralDeleteStart] = useState(false)

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

  /**
   * Method to update the selected drivers company from API
   * @param {Number} driverCompanyId
   */
  const handleUpdateDriversCompany = async (driverCompanyId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/driver_companies/${driverCompanyId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = driversCompaniesState.companies.filter(company => {
          if (company.id === driverCompanyId) {
            Object.assign(company, content.result)
          }
          return true
        })
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the selected drivers company from API
   * @param {Number} driverCompanyId
   */
  const handleDeleteDriversCompany = async (driverCompanyId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/driver_companies/${driverCompanyId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = driversCompaniesState.companies.filter(company => company.id !== driverCompanyId)
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('DRIVER_COMPANY_DELETED', 'Driver company deleted'))
        if (startSeveralDeleteStart) {
          const companyList = [...selectedCompanyList]
          companyList.shift()
          if (companyList.length === 0) {
            setStartSeveralDeleteStart(false)
          }
          setSelectedCompanyList(companyList)
        }
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
        setStartSeveralDeleteStart(false)
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  const handleSelectCompany = (driversCompanyId) => {
    let ids = []
    if (selectedCompanyList.includes(driversCompanyId)) {
      ids = selectedCompanyList.filter(id => id !== driversCompanyId)
    } else {
      ids = [...selectedCompanyList, driversCompanyId]
    }
    setSelectedCompanyList(ids)
  }

  const handleAllSelectCompany = () => {
    const allIds = driversCompaniesState.companies.reduce((ids, company) => [...ids, company.id], [])
    if (selectedCompanyList.length === allIds.length) {
      setSelectedCompanyList([])
    } else {
      setSelectedCompanyList(allIds)
    }
  }

  useEffect(() => {
    if (!startSeveralDeleteStart || selectedCompanyList.length === 0) return
    handleDeleteDriversCompany(selectedCompanyList[0])
  }, [selectedCompanyList, startSeveralDeleteStart])

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
            setDriversCompaniesState={setDriversCompaniesState}
            actionState={actionState}
            openDetails={openDetails}
            setOpenDetails={setOpenDetails}
            handleUpdateDriversCompany={handleUpdateDriversCompany}
            handleDeleteDriversCompany={handleDeleteDriversCompany}
            handleSelectCompany={handleSelectCompany}
            selectedCompanyList={selectedCompanyList}
            handleAllSelectCompany={handleAllSelectCompany}
            handleDeleteSelectedCompanies={() => setStartSeveralDeleteStart(true)}
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
