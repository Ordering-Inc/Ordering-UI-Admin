import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const ReportsDriverFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose,
    isSearchByName
  } = props

  const [ordering] = useApi()

  /**
   * This state save the business type info from API
   */
  const [driverList, setDriverList] = useState({ loading: true, error: null, drivers: [], pagination: null })
  const [driverIds, setDriverIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [searchValue, setSearchValue] = useState(null)
  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

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
      let where = null
      const conditions = [{ attribute: 'level', value: '4' }]
      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.users().asDashboard().select(propsToFetch).where(where)
        : ordering.users().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      // const where = [{ attribute: 'level', value: '4' }]
      // const { content: { error, result, pagination } } = await ordering.users().asDashboard().select(propsToFetch).where(where).get()
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
  }, [searchValue])

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
          searchValue={searchValue}
          onSearch={setSearchValue}
          handleChangeDriverId={handleChangeDriverId}
          handleClickFilterButton={handleClickFilterButton}
          isAllCheck={isAllCheck}
          handleChangeAllCheck={handleChangeAllCheck}
        />
      )}
    </>
  )
}

ReportsDriverFilter.propTypes = {
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

ReportsDriverFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: [
    'name', 'lastname', 'email', 'phone', 'photo', 'cellphone',
    'country_phone_code', 'city_id', 'city', 'address', 'addresses',
    'address_notes', 'dropdown_option_id', 'dropdown_option', 'location',
    'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups'
  ]
}
