import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const DriversGroupsList = (props) => {
  const {
    UIComponent,
    isDriversMangersRequired
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [driversGroupsState, setDriversGroupsState] = useState({ groups: [], loading: false, error: null })
  const [driversManagersList, setDriversManagersList] = useState({ managers: [], loading: false, error: null })
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: false, error: null })
  const [openDetails, setOpenDetails] = useState(false)
  const [changesState, setChangesState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [curDriversGroup, setCurDriversGroup] = useState(null)
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])

  /**
   * Method to get the drivers groups from API
   */
  const getDriversGroups = async () => {
    try {
      setDriversGroupsState({ ...driversGroupsState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversGroupsState({ ...driversGroupsState, groups: content.result, loading: false })
      }
    } catch (err) {
      setDriversGroupsState({ ...driversGroupsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to  get the driver managers from API
   */
  const getDriverManagers = async () => {
    try {
      setDriversManagersList({ ...driversManagersList, loading: false })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .users()
        .where([{ attribute: 'level', value: 5 }])
        .select(['name']).get()
      if (!error) {
        setDriversManagersList({ ...driversManagersList, loading: false, managers: result })
      }
    } catch (err) {
      setDriversManagersList({ ...driversManagersList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get businesses from API
   */
  const getBusinesses = async () => {
    try {
      setBusinessesList({ ...businessesList, loading: false })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .businesses()
        .select(['name', 'logo'])
        .asDashboard()
        .get()
      if (!error) {
        setBusinessesList({ ...businessesList, loading: false, businesses: result })
      }
    } catch (err) {
      setBusinessesList({ ...businessesList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update selected drivers group from API
   * @param {Number} driverGroupId
   * @param {Object} changes
   */
  const handleUpdateDriversGroup = async (driverGroupId, changes) => {
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
      const response = await fetch(`${ordering.root}/drivergroups/${driverGroupId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const groups = driversGroupsState.groups.filter(group => {
          if (group.id === driverGroupId) {
            Object.assign(group, content.result)
          }
          return true
        })
        setDriversGroupsState({ ...driversGroupsState, groups: groups })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
        setChangesState({})
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  const handleChangesState = (key, val) => {
    setChangesState({
      ...changesState,
      [key]: val
    })
  }

  const handleSelectBusiness = (businessId, checked) => {
    const businessIds = [...selectedBusinessIds]
    let filteredIds = []
    if (checked) {
      filteredIds = [...businessIds, businessId]
    } else {
      filteredIds = businessIds.filter(id => id !== businessId)
    }
    setSelectedBusinessIds(filteredIds)
    setChangesState({
      business: JSON.stringify(filteredIds)
    })
  }

  const handleSelectAllBusiness = (isAll) => {
    const businessIds = businessesList?.businesses?.reduce((ids, business) => [...ids, business.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...businessIds]
    } else {
      filteredIds = []
    }
    setSelectedBusinessIds(filteredIds)
    setChangesState({
      business: JSON.stringify(filteredIds)
    })
  }

  useEffect(() => {
    const businessIds = curDriversGroup?.business?.reduce((ids, business) => [...ids, business.id], [])
    setSelectedBusinessIds(businessIds)
  }, [curDriversGroup])

  useEffect(() => {
    getDriversGroups()
    if (isDriversMangersRequired) {
      getDriverManagers()
    }
    getBusinesses()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            driversGroupsState={driversGroupsState}
            driversManagersList={driversManagersList}
            businessesList={businessesList}
            openDetails={openDetails}
            setOpenDetails={setOpenDetails}
            cleanChagesState={() => setChangesState({})}
            changesState={changesState}
            actionState={actionState}
            handleChangesState={handleChangesState}
            handleUpdateDriversGroup={handleUpdateDriversGroup}
            curDriversGroup={curDriversGroup}
            setCurDriversGroup={setCurDriversGroup}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllBusiness={handleSelectAllBusiness}
            selectedBusinessIds={selectedBusinessIds}
          />
        )
      }
    </>
  )
}

DriversGroupsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversGroupsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
