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
    isSearchByName,
    isSearchByLastName,
    availableDriverIds,
    paginationSettings
  } = props

  const [ordering] = useApi()

  /**
   * This state save the business type info from API
   */
  const [driverList, setDriverList] = useState({ loading: true, error: null, drivers: [], pagination: null })
  const [driverIds, setDriverIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [searchValue, setSearchValue] = useState(null)
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
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
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */

  const getDrivers = async (page, pageSize) => {
    try {
      setDriverList({
        ...driverList,
        loading: true
      })
      let parameters = {}

      const paginationParams = {
        page: page,
        page_size: pageSize || paginationProps.pageSize
      }

      parameters = { ...paginationParams }

      let where = null
      const conditions = [{ attribute: 'level', value: '4' }]
      if (availableDriverIds?.length > 0) {
        conditions.push({ attribute: 'id', value: availableDriverIds })
      }

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
        if (isSearchByLastName) {
          searchConditions.push(
            {
              attribute: 'lastname',
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
        ? ordering.users().asDashboard().select(propsToFetch).parameters(parameters).where(where)
        : ordering.users().asDashboard().select(propsToFetch).parameters(parameters)
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
        let nextPageItems = 0
        if (pagination.current_page !== pagination.total_pages) {
          const remainingItems = pagination.total - driverList.drivers.length
          nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
        }
        setPaginationProps({
          ...paginationProps,
          currentPage: pagination.current_page,
          totalPages: pagination.total_pages,
          totalItems: pagination.total,
          from: pagination.from,
          to: pagination.to,
          nextPageItems
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
    getDrivers(1, null)
    return controller.abort()
  }, [searchValue])

  useEffect(() => {
    if (driverList?.drivers?.length === 0) return
    const _driverIds = driverList?.drivers.reduce((prev, cur) => [...prev, cur.id], [])
    const filterDriverIds = filterList?.drivers_ids?.length > 0
      ? filterList?.drivers_ids.filter(driverId => _driverIds.includes(driverId))
      : _driverIds
    setDriverIds([...filterDriverIds])
    if (!filterList?.drivers_ids || filterDriverIds?.length === driverList?.drivers.length) setIsAllCheck(true)
  }, [driverList?.drivers])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverList={driverList}
          driverIds={driverIds}
          paginationProps={paginationProps}
          getDrivers={getDrivers}
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
  ],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
