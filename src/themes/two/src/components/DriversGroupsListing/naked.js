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
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: false, error: null })
  const [driversList, setDriversList] = useState({ drivers: [], loading: false, error: null })
  const [driversCompanyList, setDriversCompanyList] = useState({ companies: [], loading: false, error: null })

  const [startSeveralDeleteStart, setStartSeveralDeleteStart] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)
  const [changesState, setChangesState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [curDriversGroup, setCurDriversGroup] = useState(null)
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])
  const [selectedPaymethodIds, setSelectedPaymethodIds] = useState([])
  const [selectedDriverIds, setSelectedDriverIds] = useState([])
  const [selectedDriversCompanyIds, setSelectedDriversCompanyIds] = useState([])
  const [selectedGroupList, setSelectedGroupList] = useState([])

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
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      setDriversList({ ...driversList, loading: false })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .users()
        .where([{ attribute: 'level', value: 4 }])
        .select(['name', 'lastname', 'email', 'photo']).get()
      if (!error) {
        setDriversList({ ...driversList, loading: false, drivers: result })
      }
    } catch (err) {
      setDriversList({ ...driversList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the paymethods from API
   */
  const getPaymethods = async () => {
    try {
      setPaymethodsList({ ...paymethodsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/paymethods?params=name&where={%22enabled%22:true}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPaymethodsList({ ...paymethodsList, paymethods: content.result, loading: false })
      }
    } catch (err) {
      setPaymethodsList({ ...paymethodsList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the drivers companies from API
   */
  const getDriversCompanies = async () => {
    try {
      setDriversCompanyList({ ...driversCompanyList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/driver_companies?params=name`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversCompanyList({ ...driversCompanyList, companies: content.result, loading: false })
      }
    } catch (err) {
      setDriversCompanyList({ ...driversCompanyList, loading: false, error: [err.message] })
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
      setActionState({ ...actionState, loading: true, error: null })
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

  /**
   * Method to delete the drivers group from API
   * @param {Number} driversGroupId
   */
  const handleDeleteDriversGroup = async (driversGroupId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true, error: null })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups/${driversGroupId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const groups = driversGroupsState.groups.filter(group => group.id !== driversGroupId)
        setDriversGroupsState({ ...driversGroupsState, groups: groups })
        showToast(ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'))
        if (startSeveralDeleteStart) {
          const groupList = [...selectedGroupList]
          groupList.shift()
          if (groupList.length === 0) {
            setStartSeveralDeleteStart(false)
          }
          setSelectedGroupList(groupList)
        }
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
        setStartSeveralDeleteStart(false)
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new drivers group from API
   */
  const handleAddDriversGroup = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const extraAttributes = {
        enabled: true,
        autoassign_amount_drivers: 1,
        autoassign_autoaccept_by_driver: false,
        autoassign_autoreject_time: 30,
        autoassign_increment_radius: 100,
        autoassign_initial_radius: 500,
        autoassign_max_in_accepted_by_business: 5,
        autoassign_max_in_accepted_by_driver: 5,
        autoassign_max_in_driver_in_business: 5,
        autoassign_max_in_pending: 5,
        autoassign_max_in_pickup_completed: 5,
        autoassign_max_in_ready_for_pickup: 5,
        autoassign_max_orders: 5,
        autoassign_max_radius: 1000,
        orders_group_max_distance_between_delivery: 200,
        orders_group_max_distance_between_pickup: 200,
        orders_group_max_orders: 1,
        orders_group_max_time_between: 5,
        orders_group_max_time_between_delivery: 600,
        orders_group_max_time_between_pickup: 600,
        orders_group_start_in_status: '7',
        orders_group_use_maps_api: false
      }
      const changes = { ...changesState, ...extraAttributes }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/drivergroups`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const groups = [...driversGroupsState.groups, content.result]
        setDriversGroupsState({ ...driversGroupsState, groups: groups })
        showToast(ToastType.Success, t('DRIVER_GROUP_ADDED', 'Driver group added'))
        setChangesState({})
        setOpenDetails(false)
      } else {
        setActionState({ loading: false, error: content.result })
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

  const handleSelectGroup = (groupId) => {
    let ids = []
    if (selectedGroupList.includes(groupId)) {
      ids = selectedGroupList.filter(id => id !== groupId)
    } else {
      ids = [...selectedGroupList, groupId]
    }
    setSelectedGroupList(ids)
  }

  const handleAllSelectGroup = () => {
    const allIds = driversGroupsState.groups.reduce((ids, group) => [...ids, group.id], [])
    if (selectedGroupList.length === allIds.length) {
      setSelectedGroupList([])
    } else {
      setSelectedGroupList(allIds)
    }
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
      ...changesState,
      business: JSON.stringify(filteredIds)
    })
  }

  const handleSelectPaymethod = (paymethodId, checked) => {
    const paymethodIds = [...selectedPaymethodIds]
    let filteredIds = []
    if (checked) {
      filteredIds = [...paymethodIds, paymethodId]
    } else {
      filteredIds = paymethodIds.filter(id => id !== paymethodId)
    }
    setSelectedPaymethodIds(filteredIds)
    setChangesState({
      ...changesState,
      allowed_paymethods: JSON.stringify(filteredIds)
    })
  }

  const handleSelectDriver = (driverId, checked) => {
    const driverIds = [...selectedDriverIds]
    let filteredIds = []
    if (checked) {
      filteredIds = [...driverIds, driverId]
    } else {
      filteredIds = driverIds.filter(id => id !== driverId)
    }
    setSelectedDriverIds(filteredIds)
    setChangesState({
      ...changesState,
      drivers: JSON.stringify(filteredIds)
    })
  }

  const handleSelectDriversCompany = (driverCompanyId, checked) => {
    const driverCompanyIds = [...selectedDriversCompanyIds]
    let filteredIds = []
    if (checked) {
      filteredIds = [...driverCompanyIds, driverCompanyId]
    } else {
      filteredIds = driverCompanyIds.filter(id => id !== driverCompanyId)
    }
    setSelectedDriversCompanyIds(filteredIds)
    setChangesState({
      ...changesState,
      driver_companies: JSON.stringify(filteredIds)
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
      ...changesState,
      business: JSON.stringify(filteredIds)
    })
  }

  const handleSelectAllPaymethod = (isAll) => {
    const paymethodIds = paymethodsList?.paymethods?.reduce((ids, paymethod) => [...ids, paymethod.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...paymethodIds]
    } else {
      filteredIds = []
    }
    setSelectedPaymethodIds(filteredIds)
    setChangesState({
      ...changesState,
      allowed_paymethods: JSON.stringify(filteredIds)
    })
  }

  const handleSelectAllDriver = (isAll) => {
    const driverIds = driversList?.drivers?.reduce((ids, driver) => [...ids, driver.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...driverIds]
    } else {
      filteredIds = []
    }
    setSelectedDriverIds(filteredIds)
    setChangesState({
      ...changesState,
      drivers: JSON.stringify(filteredIds)
    })
  }

  const handleSelectAllDriversCompany = (isAll) => {
    const driverCompanyIds = driversCompanyList?.companies?.reduce((ids, company) => [...ids, company.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...driverCompanyIds]
    } else {
      filteredIds = []
    }
    setSelectedDriversCompanyIds(filteredIds)
    setChangesState({
      ...changesState,
      driver_companies: JSON.stringify(filteredIds)
    })
  }

  useEffect(() => {
    if (!startSeveralDeleteStart || selectedGroupList.length === 0) return
    handleDeleteDriversGroup(selectedGroupList[0])
  }, [selectedGroupList, startSeveralDeleteStart])

  useEffect(() => {
    if (curDriversGroup) {
      const businessIds = curDriversGroup?.business?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds)
      setSelectedPaymethodIds(curDriversGroup?.allowed_paymethods)
      const drivers = curDriversGroup?.drivers.reduce((ids, driver) => [...ids, driver.id], [])
      setSelectedDriverIds(drivers)
      const companyIds = curDriversGroup?.driver_companies.reduce((ids, company) => [...ids, company.id], [])
      setSelectedDriversCompanyIds(companyIds)
    } else {
      setSelectedBusinessIds([])
      setSelectedPaymethodIds([])
      setSelectedDriverIds([])
      setSelectedDriversCompanyIds([])
    }
  }, [curDriversGroup])

  useEffect(() => {
    getDriversGroups()
    if (isDriversMangersRequired) {
      getDriverManagers()
    }
    getDrivers()
    getBusinesses()
    getPaymethods()
    getDriversCompanies()
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
            paymethodsList={paymethodsList}
            driversList={driversList}
            driversCompanyList={driversCompanyList}
            openDetails={openDetails}
            setOpenDetails={setOpenDetails}
            cleanChagesState={() => setChangesState({})}
            changesState={changesState}
            actionState={actionState}
            handleChangesState={handleChangesState}
            handleUpdateDriversGroup={handleUpdateDriversGroup}
            handleDeleteDriversGroup={handleDeleteDriversGroup}
            handleDeleteSelectedGroups={() => setStartSeveralDeleteStart(true)}
            curDriversGroup={curDriversGroup}
            setCurDriversGroup={setCurDriversGroup}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllBusiness={handleSelectAllBusiness}
            selectedBusinessIds={selectedBusinessIds}
            selectedPaymethodIds={selectedPaymethodIds}
            selectedDriverIds={selectedDriverIds}
            handleSelectDriver={handleSelectDriver}
            handleSelectAllDriver={handleSelectAllDriver}
            handleSelectPaymethod={handleSelectPaymethod}
            handleSelectAllPaymethod={handleSelectAllPaymethod}
            selectedDriversCompanyIds={selectedDriversCompanyIds}
            handleSelectDriversCompany={handleSelectDriversCompany}
            handleSelectAllDriversCompany={handleSelectAllDriversCompany}

            selectedGroupList={selectedGroupList}
            handleSelectGroup={handleSelectGroup}
            handleAllSelectGroup={handleAllSelectGroup}
            handleAddDriversGroup={handleAddDriversGroup}
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
