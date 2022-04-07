import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
import { useSession, useApi } from 'ordering-components-admin'

export const OpenCartListing = (props) => {
  const {
    UIComponent,
    isSearchByCartId,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone,
    isSearchByBusinessName,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [{ user, token, loading }] = useSession()

  const requestsState = {}
  const [searchValue, setSearchValue] = useState(null)
  const [filterValues, setFilterValues] = useState({})
  const [startMulitOrderDelete, setStartMulitOrderDelete] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedCartId, setDeletedCartId] = useState(null)
  const [cartList, setCartList] = useState({ loading: false, carts: [], error: null })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  /**
   * Object to save businesses
   */
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  /**
   * Array to save the cities
   */
  const [citiesList, setCitiesList] = useState([])

  /**
   * Object to save selected cart ids
   */
  const [selectedCartIds, setSelectedCartIds] = useState([])

  /**
   * Save ids of carts selected
   * @param {string} cartId cart id
   */
  const handleSelectedCartIds = (cartId) => {
    let _ids = [...selectedCartIds]
    if (!_ids.includes(cartId)) {
      _ids.push(cartId)
    } else {
      _ids = _ids.filter((_id) => _id !== cartId)
    }
    setSelectedCartIds(_ids)
  }
  /**
   * Remove id of cart updated or delected
   * @param {string} cartId cart id
   */
  const handleRemoveSelectedCartId = (cartId) => {
    let _ids = [...selectedCartIds]
    _ids = _ids.filter((_id) => _id !== cartId)
    setSelectedCartIds(_ids)
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
   * Delete carts for carts selected
   */
  const handleDeleteMultiCarts = () => {
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
        setDeletedCartId(id)
        const _cartIds = [...setSelectedCartIds]
        _cartIds.shift()
        if (_cartIds.length === 0) {
          setStartMulitOrderDelete(false)
        }
        setSelectedCartIds(_cartIds)
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
        setBusinessesList({
          ...businessesList,
          loading: false,
          businesses: content.result.businesses
        })
      } else {
        setActionStatus({ loading: false, error: content?.result })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get cartlist from API
   * @param {number} page page number
   */
  const getCartList = async (pageSize, page) => {
    try {
      setCartList({ ...cartList, loading: true })
      let where = null
      const conditions = []

      if (searchValue) {
        const searchConditions = []
        if (isSearchByCartId) {
          searchConditions.push(
            {
              attribute: 'id',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByCustomerEmail) {
          searchConditions.push(
            {
              attribute: 'user',
              conditions: [
                {
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI(`%${searchValue}%`)
                  }
                }
              ]
            }
          )
        }

        if (isSearchByCustomerPhone) {
          searchConditions.push(
            {
              attribute: 'user',
              conditions: [
                {
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI(`%${searchValue}%`)
                  }
                }
              ]
            }
          )
        }

        if (isSearchByBusinessName) {
          searchConditions.push(
            {
              attribute: 'business',
              conditions: [
                {
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI(`%${searchValue}%`)
                  }
                }
              ]
            }
          )
        }

        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (Object.keys(filterValues).length) {
        const filterConditons = []
        if (filterValues?.cartId) {
          filterConditons.push(
            {
              attribute: 'id',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues?.cartId}%`)
              }
            }
          )
        }
        if (filterValues.deliveryFromDatetime !== null) {
          filterConditons.push(
            {
              attribute: 'delivery_datetime',
              value: {
                condition: '>=',
                value: encodeURI(filterValues.deliveryFromDatetime)
              }
            }
          )
        }
        if (filterValues.deliveryEndDatetime !== null) {
          filterConditons.push(
            {
              attribute: 'delivery_datetime',
              value: {
                condition: '<=',
                value: filterValues.deliveryEndDatetime
              }
            }
          )
        }
        if (filterValues.businessIds.length !== 0) {
          filterConditons.push(
            {
              attribute: 'business_id',
              value: filterValues.businessIds
            }
          )
        }
        if (filterValues.customerIds.length !== 0) {
          filterConditons.push(
            {
              attribute: 'user_id',
              value: filterValues.customerIds
            }
          )
        }
        if (filterValues.cityIds.length !== 0) {
          filterConditons.push(
            {
              attribute: 'city_id',
              value: filterValues.cityIds
            }
          )
        }

        if (filterConditons.length) {
          conditions.push({
            conector: 'AND',
            conditions: filterConditons
          })
        }
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
        ? `${ordering.root}/carts/dashboard?page=${page}&page_size=${pageSize}&where=${JSON.stringify(where)}`
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
  * Listening mulit carts delete action start
  */
  useEffect(() => {
    if (!startMulitOrderDelete || setSelectedCartIds.length === 0) return
    deleteCart(setSelectedCartIds[0])
  }, [setSelectedCartIds, startMulitOrderDelete])

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
          businessesList={businessesList}
          citiesList={citiesList}
          filterValues={filterValues}
          selectedCartIds={selectedCartIds}
          deletedCartId={deletedCartId}
          startMulitOrderDelete={startMulitOrderDelete}
          handleSelectedCartIds={handleSelectedCartIds}
          handleRemoveSelectedCartId={handleRemoveSelectedCartId}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          handleDeleteMultiCarts={handleDeleteMultiCarts}
          setSelectedCartIds={setSelectedCartIds}
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
   * Components types before my carts
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my carts
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my carts
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my carts
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
