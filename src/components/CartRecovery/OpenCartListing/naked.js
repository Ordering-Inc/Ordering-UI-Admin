import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
import { useSession, useApi } from 'ordering-components-admin'

export const OpenCartListing = (props) => {
  const {
    UIComponent,
    isSearchByName,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [{ user, token, loading }] = useSession()

  const requestsState = {}
  const [searchValue, setSearchValue] = useState(null)
  const [filterValues, setFilterValues] = useState({})
  const [startMulitOrderDelete, setStartMulitOrderDelete] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedOrderId, setDeletedOrderId] = useState(null)
  const [cartList, setCartList] = useState({ loading: false, carts: [], error: null })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  /**
   * Object to save driver group list
   */
  const [driverGroupList, setDriverGroupList] = useState({ groups: [], loading: false, error: null })
  /**
   * Object to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Object to save paymethods
   */
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  /**
   * Object to save businesses
   */
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  /**
   * Array to save the cities
   */
  const [citiesList, setCitiesList] = useState([])

  /**
   * Object to save selected order ids
   */
  const [selectedOrderIds, setSelectedOrderIds] = useState([])

  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  const handleSelectedOrderIds = (orderId) => {
    let _ids = [...selectedOrderIds]
    if (!_ids.includes(orderId)) {
      _ids.push(orderId)
    } else {
      _ids = _ids.filter((_id) => _id !== orderId)
    }
    setSelectedOrderIds(_ids)
  }
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */
  const handleRemoveSelectedOrderId = (orderId) => {
    let _ids = [...selectedOrderIds]
    _ids = _ids.filter((_id) => _id !== orderId)
    setSelectedOrderIds(_ids)
  }

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }
  /**
   * Save filter type values
   * @param {object} types
   */
  const handleChangeFilterValues = (types) => {
    setFilterValues(types)
  }

  /**
   * Delete orders for orders selected
   */
  const handleDeleteMultiOrders = () => {
    setStartMulitOrderDelete(true)
  }

  /**
   * Method to delete order from API
   */
  const deleteCart = async (id) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const source = {}
      requestsState.deleteOrder = source
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/carts/dashboard/${id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setDeletedOrderId(id)
        const _ordersIds = [...selectedOrderIds]
        _ordersIds.shift()
        if (_ordersIds.length === 0) {
          setStartMulitOrderDelete(false)
        }
        setSelectedOrderIds(_ordersIds)
      }
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
      setStartMulitOrderDelete(false)
    }
  }

  const getControlsOrders = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/controls/orders`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCitiesList(content.result.cities)
        setDriverGroupList({
          ...driverGroupList,
          loading: false,
          groups: content.result.driver_groups
        })
        setPaymethodsList({
          ...paymethodsList,
          loading: false,
          paymethods: content.result.paymethods
        })
        setBusinessesList({
          ...businessesList,
          loading: false,
          businesses: content.result.businesses
        })
        if (user?.level !== 0 && user?.level !== 2) {
          setDriversList({
            ...driversList,
            drivers: content.result.drivers
          })
        }
      } else {
        setActionStatus({ loading: false, error: content?.result })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  const getCartList = async (pageSize, page) => {
    try {
      setCartList({ ...cartList, loading: true })
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
        ? `${ordering.root}/carts/dashboard?page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/carts/dashboard?page=${page}&page_size=${pageSize}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCartList({
          loading: false,
          carts: content.result,
          error: null
        })
        setPagination({
          ...pagination,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      } else {
        setCartList({
          ...cartList,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCartList({
        ...cartList,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
  * Listening mulit orders delete action start
  */
  useEffect(() => {
    if (!startMulitOrderDelete || selectedOrderIds.length === 0) return
    deleteCart(selectedOrderIds[0])
  }, [selectedOrderIds, startMulitOrderDelete])

  useEffect(() => {
    if (loading) return
    getControlsOrders()

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [user, loading])

  useEffect(() => {
    if (cartList.loading) return
    getCartList(pagination.pageSize, 1)
  }, [searchValue])

  useEffect(() => {
    if ((Object.keys(filterValues).length > 0) && !cartList.loading) getCartList(pagination.pageSize, 1)
  }, [filterValues])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          citiesList={citiesList}
          filterValues={filterValues}
          selectedOrderIds={selectedOrderIds}
          deletedOrderId={deletedOrderId}
          startMulitOrderDelete={startMulitOrderDelete}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleRemoveSelectedOrderId={handleRemoveSelectedOrderId}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          setSelectedOrderIds={setSelectedOrderIds}
          getCartList={getCartList}
          pagination={pagination}
          cartList={cartList}
        />
      )}
    </>
  )
}

OpenCartListing.propTypes = {
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

OpenCartListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
