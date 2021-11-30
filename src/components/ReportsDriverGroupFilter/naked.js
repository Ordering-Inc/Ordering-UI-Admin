import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const ReportsDriverGroupFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose,
    setAvailableDriverIds
  } = props

  const [ordering] = useApi()
  const [driverGroupList, setDriverGroupList] = useState({ loading: true, error: null, driverGroups: [], pagination: null })
  const [driverGroupIds, setDriverGroupIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [{ token, loading }] = useSession()

  /**
   * Method to change driver group id
   * @param {number} id
   */
  const handleChangeDriverGroupId = (id) => {
    const found = driverGroupIds?.find(groupId => groupId === id)
    if (found) {
      const _groupIds = driverGroupIds?.filter(groupId => groupId !== id)
      setDriverGroupIds(_groupIds)
      setIsAllCheck(false)
    } else {
      const _groupIds = driverGroupIds ? [...driverGroupIds] : []
      _groupIds.push(id)
      if (_groupIds.length === driverGroupList?.driverGroups.length) setIsAllCheck(true)
      setDriverGroupIds(_groupIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _groupIds = driverGroupIds ? [...driverGroupIds] : null
    handleChangeFilterList({ ...filterList, driver_groups_ids: _groupIds })
    onClose && onClose()
    setAvailableDriverIds && handleChnageAvailbeDriverIds(_groupIds)
  }

  const handleChnageAvailbeDriverIds = (groupIds) => {
    if (!groupIds) {
      setAvailableDriverIds(null)
      return
    }
    const _availableIds = []
    driverGroupList.driverGroups.forEach(driverGroup => {
      if (groupIds.includes(driverGroup.id)) {
        driverGroup.drivers.forEach(driver => {
          _availableIds.push(driver.id)
        })
      }
    })
    const uniqueIds = _availableIds.filter((v, i, a) => a.indexOf(v) === i)
    setAvailableDriverIds(uniqueIds)
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setDriverGroupIds(null)
    } else {
      const _groupIds = []
      for (const group of driverGroupList.driverGroups) {
        _groupIds.push(group.id)
      }
      setDriverGroupIds(_groupIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get driver group list
   */
  const getDriverGroups = async () => {
    if (loading) return
    try {
      setDriverGroupList({ ...driverGroupList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/drivergroups?params=${propsToFetch}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result, pagination } = await response.json()
      if (!error) {
        const enabledDriverGroups = result?.filter(group => group.enabled)
        setDriverGroupList({
          ...driverGroupList,
          loading: false,
          driverGroups: enabledDriverGroups,
          pagination
        })
      } else {
        setDriverGroupList({
          ...driverGroupList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setDriverGroupList({
        ...driverGroupList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getDriverGroups()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (driverGroupList?.driverGroups?.length === 0) return
    const _groupIds = driverGroupList?.driverGroups.reduce((prev, cur) => [...prev, cur.id], [])
    setDriverGroupIds([...filterList?.driver_groups_ids || _groupIds])
    if (!filterList?.driver_groups_ids || filterList?.driver_groups_ids?.length === driverGroupList?.driverGroups.length) setIsAllCheck(true)
  }, [driverGroupList?.driverGroups])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverGroupList={driverGroupList}
          driverGroupIds={driverGroupIds}
          handleChangeDriverGroupId={handleChangeDriverGroupId}
          handleClickFilterButton={handleClickFilterButton}
          isAllCheck={isAllCheck}
          handleChangeAllCheck={handleChangeAllCheck}
        />
      )}
    </>
  )
}

ReportsDriverGroupFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * filterList, this must be contains an object with filter list
   */
  filterList: PropTypes.object,
  /**
  * Method to change filter list
  */
  handleChangeFilterList: PropTypes.func,
  /**
  * Method to close driver group filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of driver group props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before driver group filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after driver group filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before driver group type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after driver group type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReportsDriverGroupFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'enabled', 'type']
}
