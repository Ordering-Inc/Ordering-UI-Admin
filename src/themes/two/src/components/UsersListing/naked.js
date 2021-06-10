import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const UsersList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    propsToFetch,
    isSearchByUserId,
    isSearchByUserEmail,
    isSearchByUserPhone
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [usersList, setUsersList] = useState({ users: [], loading: false, error: null })
  const [filterValues, setFilterValues] = useState({ clear: false, changes: {} })
  const [searchVal, setSearchVal] = useState(null)
  const [userTypesSelected, setUserTypesSelected] = useState([0, 1, 2, 3])
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [paginationDetail, setPaginationDetail] = useState({})
  const [spinLoading, setSpinLoading] = useState(false)
  const [selectedUserActiveState, setSelectedUserActiveState] = useState(true)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  const getUsers = async (newFetch, nextPage) => {
    try {
      setUsersList({ ...usersList, loading: true })
      let parameters = {}

      const paginationParams = {
        page: newFetch
          ? 1
          : (nextPage ? paginationProps.currentPage + 1 : paginationProps.currentPage - 1),
        page_size: paginationProps.pageSize
      }
      parameters = { ...parameters, ...paginationParams }

      let where = null
      const conditions = []

      conditions.push({ attribute: 'enabled', value: selectedUserActiveState })

      if (userTypesSelected.length > 0) {
        conditions.push({ attribute: 'level', value: userTypesSelected })
      }

      if (searchVal) {
        const searchConditions = []
        if (isSearchByUserId) {
          searchConditions.push(
            {
              attribute: 'id',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchVal}%`)
              }
            }
          )
        }
        if (isSearchByUserEmail) {
          searchConditions.push(
            {
              attribute: 'email',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchVal}%`)
              }
            }
          )
        }

        if (isSearchByUserPhone) {
          searchConditions.push(
            {
              attribute: 'cellphone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchVal}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (Object.keys(filterValues.changes).length) {
        const filterConditions = []
        if (filterValues?.changes?.name && filterValues?.changes?.name !== null) {
          filterConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues?.changes?.name}%`)
              }
            }
          )
        }
        if (filterValues.changes.lastname && filterValues.changes.lastname !== null) {
          filterConditions.push(
            {
              attribute: 'lastname',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.lastname}%`)
              }
            }
          )
        }
        if (filterValues.changes.email && filterValues.changes.email !== null) {
          filterConditions.push(
            {
              attribute: 'email',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.email}%`)
              }
            }
          )
        }
        if (filterValues.changes.email_verified !== undefined) {
          filterConditions.push(
            {
              attribute: 'email_verified',
              value: filterValues.changes.email_verified
            }
          )
        }
        if (filterValues.changes.phone && filterValues.changes.phone !== null) {
          filterConditions.push(
            {
              attribute: 'phone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.phone}%`)
              }
            }
          )
        }
        if (filterValues.changes.phone_verified !== undefined) {
          filterConditions.push(
            {
              attribute: 'phone_verified',
              value: filterValues.changes.phone_verified
            }
          )
        }
        if (filterValues.changes.id && parseInt(filterValues.changes.id) > 0) {
          filterConditions.push(
            {
              attribute: 'id',
              value: parseInt(filterValues.changes.id)
            }
          )
        }
        if (filterConditions.length) {
          conditions.push({
            conector: 'AND',
            conditions: filterConditions
          })
        }
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const fetchEndpoint = where
        ? ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters).where(where)
        : ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters)
      const { content: { result, pagination } } = await fetchEndpoint.get()
      usersList.users = result

      setUsersList({
        ...usersList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - usersList.users.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        nextPageItems
      })
      setPaginationDetail({ ...pagination })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUsersList({
          ...usersList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Edit a user by UserId, order options and filters
   * @param {number} userId Make a new request or next page
   */
  const getUserById = async (userId, enabled) => {
    try {
      setSpinLoading(true)

      const fetchEndpoint = ordering.users(userId)
      const { content: { result } } = await fetchEndpoint.save({ enabled: !enabled })
      const found = usersList.users.find(user => result.id === user.id)
      let users = []

      if (found) {
        users = usersList.users.filter(user => {
          if (result.id === user.id) user.enabled = result?.enabled
          return true
        })
      }

      setUsersList({
        ...usersList,
        users: users
      })
      setSpinLoading(false)
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUsersList({
          ...usersList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Change user type
   * @param {object} userType User type
   */
  const handleSelectedUserTypes = (userType) => {
    let _userTypesSelected
    if (userTypesSelected.includes(userType)) {
      _userTypesSelected = userTypesSelected.filter(type => type !== userType)
    } else {
      _userTypesSelected = [...userTypesSelected, userType]
    }
    setUserTypesSelected(_userTypesSelected)
  }

  /**
   * Method to change user active state for filter
   */
  const handleChangeUserActiveState = () => {
    setSelectedUserActiveState(!selectedUserActiveState)
  }

  /**
   * Method to change user type from API
   * @param {Object} user user id and new type
   */
  const handleChangeUserType = async (user) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestsState = {}
      const source = {}
      requestsState.updateOrder = source
      const { content: { error, result } } = await ordering.setAccessToken(session.token).users(user.id).save({ level: user.level }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        const users = usersList.users.filter(_user => {
          if (_user.id === user.id) {
            _user.level = user.level
          }
          return true
        })
        setUsersList({ ...usersList, users })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (usersList.loading) return
    getUsers(true, false)
  }, [userTypesSelected, selectedUserActiveState, searchVal])

  useEffect(() => {
    if ((Object.keys(filterValues?.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(true, false)
  }, [filterValues])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            usersList={usersList}
            setUsersList={setUsersList}
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            userTypesSelected={userTypesSelected}
            handleSelectedUserTypes={handleSelectedUserTypes}
            paginationProps={paginationProps}
            getUserById={getUserById}
            getUsers={getUsers}
            searchVal={searchVal}
            onSearch={setSearchVal}
            spinLoading={spinLoading}
            paginationDetail={paginationDetail}
            selectedUserActiveState={selectedUserActiveState}
            handleChangeUserActiveState={handleChangeUserActiveState}
            handleChangeUserType={handleChangeUserType}
          />
        )
      }
    </>
  )
}

UsersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable/Disable search option
   * Search Users list by a user ID
   */
  isSearchByUserId: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user email
   */
  isSearchByUserEmail: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user phone
   */
  isSearchByUserPhone: PropTypes.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

UsersList.defaultProps = {
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'city_id', 'city', 'address', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname'],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
