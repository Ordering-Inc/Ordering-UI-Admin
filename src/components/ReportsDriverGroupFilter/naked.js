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
    onClose
  } = props

  const [ordering] = useApi()

  /**
   * This state save the brand type info from API
   */
  const [driverGroupList, setDriverGroupList] = useState({ loading: true, error: null, driverGroups: [], pagination: null })
  const [driverGroupIds, setDriverGroupIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [{ token, loading }] = useSession()

  /**
   * Method to change brand id
   * @param {number} id
   */
  const handleChangeBrandId = (id) => {
    const found = driverGroupIds?.find(brandId => brandId === id)
    if (found) {
      const _brandIds = driverGroupIds?.filter(brandId => brandId !== id)
      setDriverGroupIds(_brandIds)
      setIsAllCheck(false)
    } else {
      const _brandIds = driverGroupIds ? [...driverGroupIds] : []
      _brandIds.push(id)
      if (_brandIds.length === driverGroupList?.driverGroups.length) setIsAllCheck(true)
      setDriverGroupIds(_brandIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _brandIds = driverGroupIds ? [...driverGroupIds] : null
    handleChangeFilterList({ ...filterList, driver_groups_ids: _brandIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setDriverGroupIds(null)
    } else {
      const _brandIds = []
      for (const brand of driverGroupList.driverGroups) {
        _brandIds.push(brand.id)
      }
      setDriverGroupIds(_brandIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get brand list
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
    const _brandIds = driverGroupList?.driverGroups.reduce((prev, cur) => [...prev, cur.id], [])
    setDriverGroupIds([...filterList?.driver_groups_ids || _brandIds])
    if (!filterList?.driver_groups_ids || filterList?.driver_groups_ids?.length === driverGroupList?.driverGroups.length) setIsAllCheck(true)
  }, [driverGroupList?.driverGroups])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverGroupList={driverGroupList}
          driverGroupIds={driverGroupIds}
          handleChangeBrandId={handleChangeBrandId}
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
  * Method to close brand filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of brand props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before brand type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after brand type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before brand type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after brand type filter
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
