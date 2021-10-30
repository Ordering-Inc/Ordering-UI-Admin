import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

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
   * This state save the business type info from API
   */
  const [driverList, setDriverList] = useState({ loading: true, error: null, drivers: [], pagination: null })
  const [driverIds, setDriverIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)

  /**
   * Method to change business id
   * @param {number} id
   */
  const handleChangeDriverId = (id) => {
    const found = driverIds?.find(driverId => driverId === id)
    if (found) {
      const _driverIds = driverIds?.filter(driverId => driverId !== id)
      setDriverIds(_driverIds)
      setIsAllCheck(false)
    } else {
      const _driverIds = driverIds ? [...driverIds] : []
      _driverIds.push(id)
      if (_driverIds.length === driverList?.drivers.length) setIsAllCheck(true)
      setDriverIds(_driverIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _driverIds = driverIds ? [...driverIds] : null
    handleChangeFilterList({ ...filterList, drivers_ids: _driverIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setDriverIds(null)
    } else {
      const _driverIds = []
      for (const driver of driverList.drivers) {
        _driverIds.push(driver.id)
      }
      setDriverIds(_driverIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get driver list from API
   */

  const getDrivers = async () => {
    try {
      setDriverList({
        ...driverList,
        loading: true
      })
      const where = [{ attribute: 'level', value: '4' }]
      const { content: { error, result, pagination } } = await ordering.users().asDashboard().select(propsToFetch).where(where).get()
      if (!error) {
        setDriverList({
          ...driverList,
          loading: false,
          drivers: result,
          pagination
        })
      } else {
        setDriverList({
          ...driverList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setDriverList({
        ...driverList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getDrivers()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (driverList?.drivers?.length === 0) return
    const _driverIds = driverList?.drivers.reduce((prev, cur) => [...prev, cur.id], [])
    setDriverIds([...filterList?.drivers_ids || _driverIds])
    if (!filterList?.drivers_ids || filterList?.drivers_ids?.length === driverList?.drivers.length) setIsAllCheck(true)
  }, [driverList?.drivers])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverList={driverList}
          driverIds={driverIds}
          handleChangeDriverId={handleChangeDriverId}
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
  * Method to close business filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReportsDriverGroupFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
