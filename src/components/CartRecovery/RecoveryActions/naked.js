import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
import { useApi, useSession } from 'ordering-components-admin'
export const RecoveryActions = (props) => {
  const {
    UIComponent,
    paginationSettings,
    isSearchByName,
    isSearchByDescription
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [searchValue, setSearchValue] = useState(null)
  const [recoveryActionList, setRecoveryActionList] = useState({ actions: [], loading: false, error: null })
  const [filterValues, setFilterValues] = useState({ clear: false, changes: {} })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  /**
   * Method to get the sites from API
   */
  const getRecoveryList = async (page, pageSize) => {
    try {
      setRecoveryActionList({ ...recoveryActionList, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByDescription) {
          searchConditions.push(
            {
              attribute: 'description',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
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
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = where
        ? `${ordering.root}/event_rules?page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/event_rules?page=${page}&page_size=${pageSize}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setRecoveryActionList({
          loading: false,
          actions: content.result,
          error: null
        })
        setPaginationProps({
          ...paginationProps,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      } else {
        setRecoveryActionList({
          ...recoveryActionList,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setRecoveryActionList({
        ...recoveryActionList,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (recoveryActionList.loading) return
    getRecoveryList(1, paginationProps.pageSize)
  }, [searchValue])

  useEffect(() => {
    if ((Object.keys(filterValues?.changes).length > 0 || filterValues.clear) && !recoveryActionList.loading) getRecoveryList(1, paginationProps.pageSize)
  }, [filterValues])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          handleChangeSearch={handleChangeSearch}
          paginationProps={paginationProps}
          setPaginationProps={setPaginationProps}
          recoveryActionList={recoveryActionList}
          getRecoveryList={getRecoveryList}
        />
      )}
    </>
  )
}

RecoveryActions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

RecoveryActions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
