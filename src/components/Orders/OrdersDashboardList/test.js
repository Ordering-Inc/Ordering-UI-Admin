/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import {
  useSession,
  useApi,
  useWebsocket,
  useEvent
} from 'ordering-components-admin'

export const DashboardOrdersList = (props) => {
  const {
    UIComponent,
    propsToFetch,
    orders,
    isOnlyDelivery,
    driverId,
    customerId,
    businessId,
    orderIds,
    deletedOrderIds,
    orderStatus,
    orderBy,
    orderDirection,
    useDefualtSessionManager,
    paginationSettings,
    filterValues,
    searchValue,
    isSearchByOrderId,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone,
    isSearchByBusinessName,
    isSearchByDriverName,
    orderIdForUnreadCountUpdate,
    timeStatus,
    driversList,
    allowColumns,
    setAllowColumns
  } = props

  const [ordering] = useApi()
  const [events] = useEvent()
  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: {} })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage : 1,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()
  const socket = useWebsocket()
  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  const requestsState = {}
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const firstRender = useRef(true)

  const sortOrdersArray = (option, array, resArray = false) => {
    if (resArray) {
      if (option === 'id') {
        if (orderDirection === 'desc') {
          return array.sort((a, b) => b.id - a.id)
        }
        if (orderDirection === 'asc') {
          return array.sort((a, b) => a.id - b.id)
        }
      }
      if (option === 'last_direct_message_at') {
        return array.sort((a, b) => new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at))
      }
      return array
    } else {
      return sortOrdersObject(option, array)
    }
  }

  const sortOrdersObject = (option, obj) => {
    if (typeof obj !== 'object') {
      if (Array.isArray(obj)) {
        obj = obj.reduce((acc, item) => {
          acc[item.id] = item
          return acc
        }, {})
      }
    }

    const sortedKeys = Object.keys(obj)

    if (option === 'id') {
      sortedKeys.sort((a, b) => {
        const idA = Number(a)
        const idB = Number(b)
        if (orderDirection === 'desc') {
          return idB - idA
        }
        if (orderDirection === 'asc') {
          return idA - idB
        }
        return 0
      })
    } else if (option === 'last_direct_message_at') {
      sortedKeys.sort((a, b) => {
        const dateA = new Date(obj[b].last_direct_message_at)
        const dateB = new Date(obj[a].last_direct_message_at)
        return dateB - dateA
      })
    }

    const sortedObj = {}
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key]
    }

    return sortedObj
  }

  const ArrayToObject = (array) => {
    return array.reduce((res, item) => {
      res[item.id] = item
      return res
    }, {})
  }

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  const handleUpdateOrderStatus = async (order) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const source = {}
      requestsState.updateOrders = source
      const { content } = await ordering.setAccessToken(accessToken).orders(order?.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const _orders = orderList.orders
        _orders?.[order?.id] && (delete _orders[order?.id])
        setOrderList({
          ...orderList,
          orders: _orders
        })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  const getOrders = async (pageSize, page) => {
    let where = []
    const conditions = []
    const options = {
      query: {
        orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
        page: page,
        page_size: pageSize
      }
    }

    conditions.push({
      attribute: 'products',
      conditions: [{
        attribute: 'type',
        value: {
          condition: '=',
          value: 'item'
        }
      }]
    })

    if (orderIds) {
      conditions.push({ attribute: 'id', value: orderIds })
    }

    if (Object.keys(filterValues).length === 0) {
      if (orderStatus) {
        conditions.push({ attribute: 'status', value: orderStatus })
      }
    } else {
      if (filterValues.statuses.length > 0) {
        // const checkInnerContain = filterValues.statuses.every((el) => {
        //   return orderStatus.indexOf(el) !== -1
        // })

        // const checkOutContain = orderStatus.every((el) => {
        //   return filterValues.statuses.indexOf(el) !== -1
        // })

        // if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
        // if (checkOutContain) {
        //   if (orderStatus) {
        //     conditions.push({ attribute: 'status', value: orderStatus })
        //   }
        // }
        const getFilterStatusInOrderStatus = filterValues.statuses.filter(status => orderStatus.includes(status))
        conditions.push({ attribute: 'status', value: getFilterStatusInOrderStatus })
      } else {
        if (orderStatus) {
          conditions.push({ attribute: 'status', value: orderStatus })
        }
      }
    }

    if (isOnlyDelivery) {
      conditions.push(
        {
          attribute: 'delivery_type',
          value: 1
        }
      )
    }
    if (driverId) {
      conditions.push(
        {
          attribute: 'driver_id',
          value: driverId
        }
      )
    }

    if (customerId) {
      conditions.push(
        {
          attribute: 'customer_id',
          value: customerId
        }
      )
    }

    if (businessId) {
      conditions.push(
        {
          attribute: 'business_id',
          value: businessId
        }
      )
    }

    if (timeStatus) {
      conditions.push(
        {
          attribute: 'time_status',
          value: timeStatus
        }
      )
    }

    if (searchValue) {
      const searchConditions = []
      if (isSearchByOrderId) {
        searchConditions.push(
          {
            attribute: 'id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
        searchConditions.push(
          {
            attribute: 'external_id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
        searchConditions.push(
          {
            attribute: 'customer',
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
        searchConditions.push(
          {
            attribute: 'cellphone',
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
            attribute: 'customer',
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
            attribute: 'customer',
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

      if (isSearchByDriverName) {
        searchConditions.push(
          {
            attribute: 'driver',
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
      if (filterValues?.orderId) {
        filterConditons.push(
          {
            attribute: 'id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${filterValues?.orderId}%`)
            }
          }
        )
      }
      if (filterValues?.logisticStatus !== null) {
        filterConditons.push(
          {
            attribute: 'logistic_status',
            value: filterValues?.logisticStatus
          }
        )
      }
      if (filterValues?.assigned !== null) {
        if (filterValues?.assigned === 0) {
          filterConditons.push(
            {
              attribute: 'driver_id',
              value: {
                condition: '>=',
                value: 0
              }
            }
          )
        }
        if (filterValues?.assigned === 1) {
          filterConditons.push(
            {
              attribute: 'driver_id',
              value: null
            }
          )
        }
      }
      if (filterValues?.externalId) {
        filterConditons.push(
          {
            attribute: 'external_id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${filterValues?.externalId}%`)
            }
          }
        )
      }
      if (filterValues?.metafield?.length > 0) {
        const metafieldConditions = filterValues?.metafield.map(item => (
          {
            attribute: 'metafields',
            conditions: [
              {
                attribute: 'key',
                value: item?.key
              },
              {
                attribute: 'value',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${item?.value}%`)
                }
              }
            ],
            conector: 'AND'
          }
        ))
        filterConditons.push({
          conector: 'OR',
          conditions: metafieldConditions
        })
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
      if (filterValues?.countryCode.length !== 0) {
        filterConditons.push(
          {
            attribute: 'country_code',
            value: filterValues?.countryCode
          }
        )
      }
      if (filterValues?.currency.length !== 0) {
        filterConditons.push(
          {
            attribute: 'currency',
            value: filterValues?.currency
          }
        )
      }
      if (filterValues.driverIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues.driverIds
          }
        )
      }
      if (filterValues.deliveryTypes.length !== 0) {
        filterConditons.push(
          {
            attribute: 'delivery_type',
            value: filterValues.deliveryTypes
          }
        )
      }
      if (filterValues.driverGroupIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues.driverGroupIds
          }
        )
      }
      if (filterValues.paymethodIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'paymethod_id',
            value: filterValues.paymethodIds
          }
        )
      }
      if (filterValues?.cityIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'business',
            conditions: [
              {
                attribute: 'city_id',
                value: filterValues?.cityIds
              }
            ]
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

    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    let functionFetch
    if (propsToFetch) {
      functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where)
    } else {
      functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where)
    }
    return await functionFetch.get(options)
  }

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  const isFilteredOrder = (order, lastHistoryData) => {
    let filterCheck = true
    if (searchValue) {
      let searchCheck = false
      const lowerCaseSearchValue = searchValue.toLowerCase()
      if (isSearchByOrderId) {
        if ((order?.id?.toString() || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true
      }
      if (isSearchByCustomerEmail) {
        if ((order?.customer?.email || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true
      }

      if (isSearchByCustomerPhone) {
        if ((order?.customer?.cellphone || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true
      }

      if (isSearchByBusinessName) {
        if ((order?.business?.name || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true
      }

      if (isSearchByDriverName) {
        if ((order?.driver?.name || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true
      }
      if (!searchCheck) filterCheck = false
    }

    if (orderStatus !== undefined && orderStatus.length > 0) {
      const lastStatus = lastHistoryData?.find(item => item.attribute === 'status')?.old
      if (!orderStatus.includes(parseInt(order.status)) && !orderStatus.includes(parseInt(lastStatus))) {
        filterCheck = false
      }
    }

    if (filterValues?.orderId) {
      if (!order?.id?.toString().includes(filterValues?.orderId)) filterCheck = false
    }
    if (filterValues?.externalId) {
      if (!order?.external_id?.toString().includes(filterValues?.externalId)) filterCheck = false
    }
    if (filterValues?.deliveryFromDatetime) {
      const isBefore = moment(order?.delivery_datetime).isBefore(filterValues?.deliveryFromDatetime, 'second')
      if (isBefore) filterCheck = false
    }
    if (filterValues.deliveryEndDatetime) {
      const isAfter = moment(order?.delivery_datetime).isAfter(filterValues?.deliveryEndDatetime, 'second')
      if (isAfter) filterCheck = false
    }
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false
      }
    }
    if (filterValues?.countryCode?.length > 0) {
      if (!filterValues.countryCode.includes(order?.country_code)) filterCheck = false
    }
    if (filterValues?.cityIds?.length > 0) {
      if (!filterValues.cityIds.includes(order.city_id)) {
        filterCheck = false
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      const lastDriverId = lastHistoryData?.find(item => item.attribute === 'driver_id')?.old
      if (!filterValues.driverIds.includes(order.driver_id) && !filterValues.driverIds.includes(lastDriverId)) {
        filterCheck = false
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false
      }
    }
    if (filterValues?.driverGroupIds?.length > 0) {
      const lastDriverId = lastHistoryData?.find(item => item.attribute === 'driver_id')?.old
      if (!filterValues.driverGroupIds.includes(order.driver_id) && !filterValues.driverGroupIds.includes(lastDriverId)) {
        filterCheck = false
      }
    }
    if (filterValues?.currency?.length > 0) {
      if (!filterValues.currency.includes(order?.currency)) filterCheck = false
    }
    if (filterValues?.logisticStatus) {
      const lastLogisticStatus = lastHistoryData?.find(item => item.attribute === 'logistic_status')?.old
      if (order?.logistic_status !== parseInt(filterValues?.logisticStatus) && lastLogisticStatus !== parseInt(filterValues?.logisticStatus)) filterCheck = false
    }
    if (filterValues?.metafield?.length > 0) {
      filterValues.metafield.forEach(item => {
        const found = order?.metafields?.find(meta => meta.key === item.key && meta.value.includes(item.value))
        if (!found) {
          filterCheck = false
        }
      })
    }
    return filterCheck
  }

  const loadOrders = async () => {
    if (!session.token) return
    try {
      setOrderList({ ...orderList, loading: true })
      const response = await getOrders(pagination.pageSize, firstRender.current ? pagination.currentPage : 1)

      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }

      setOrderList({
        loading: false,
        orders: response.content.error
          ? {}
          : ArrayToObject(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      firstRender.current = false
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }

  const loadMoreOrders = async () => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pagination.pageSize, pagination.currentPage + 1)

      const _orders = orderList.orders

      if (!response.content.error) {
        response.content.result.forEach((item) => {
          _orders[item.id] = item
        })
      }

      setOrderList({
        loading: false,
        orders: _orders,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }

  const getPageOrders = async (pageSize, page) => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pageSize, page)
      setOrderList({
        loading: false,
        orders: response.content.error
          ? orderList.orders
          : ArrayToObject(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }

  /**
 * Method to handle drag drop
 */
  const handleDrop = (event, columnName) => {
    event.preventDefault()
    const transferColumnName = event.dataTransfer.getData('transferColumnName')
    if (columnName === transferColumnName) return
    const transferColumnOrder = allowColumns[transferColumnName]?.order
    const currentColumnOrder = allowColumns[columnName]?.order

    const [lessOrder, greaterOrder] = transferColumnOrder < currentColumnOrder ? [transferColumnOrder, currentColumnOrder] : [currentColumnOrder, transferColumnOrder]
    const _remainAllowColumns = {}
    const shouldUpdateColumns = Object.keys(allowColumns).filter(col => col !== transferColumnName && allowColumns[col]?.order >= lessOrder && allowColumns[col]?.order <= greaterOrder)
    shouldUpdateColumns.forEach(col => {
      _remainAllowColumns[col] = {
        ...allowColumns[col],
        order: allowColumns[col]?.order + ((transferColumnOrder < currentColumnOrder) ? -1 : 1)
      }
    })

    const _allowColumnsUpdated = {
      ...allowColumns,
      [transferColumnName]: { ...allowColumns[transferColumnName], order: currentColumnOrder },
      ..._remainAllowColumns
    }
    saveUserSettings(_allowColumnsUpdated)
    setAllowColumns(_allowColumnsUpdated)
  }

  const saveUserSettings = async (allowColumnsUpdated) => {
    try {
      if (!session?.user?.id) return
      const _settings = session?.user?.settings
      const _allowColumnsUpdated = { ...allowColumnsUpdated, timer: { ...allowColumnsUpdated?.timer, visable: false } }
      await ordering.users(session?.user?.id).save({ settings: { ..._settings, orderColumns: _allowColumnsUpdated } }, {
        accessToken: accessToken
      })
    } catch (err) {
      console.warn(err, 'error')
    }
  }
  /**
   * Listening order id to update for unread_count parameter
   */
  useEffect(() => {
    if (orderIdForUnreadCountUpdate === null || Object.keys(orderList.orders).length === 0) return
    const _orders = orderList.orders
    _orders[orderIdForUnreadCountUpdate] = {
      ..._orders[orderIdForUnreadCountUpdate],
      unread_count: 0,
      unread_general_count: 0,
      unread_direct_count: 0
    }
    setOrderList({ ...orderList, orders: _orders })
  }, [orderIdForUnreadCountUpdate])

  /**
   * Listening deleted order
   */
  useEffect(() => {
    if (!deletedOrderIds) return
    let totalDeletedCount = 0
    const _orders = {}

    for (const key in orderList.orders) {
      if (!deletedOrderIds.includes(key)) {
        _orders[key] = orderList.orders[key]
      } else {
        totalDeletedCount++
      }
    }

    setOrderList({ ...orderList, orders: _orders })
    setPagination({
      ...pagination,
      total: pagination?.total - totalDeletedCount
    })
  }, [JSON.stringify(deletedOrderIds)])

  /**
   * Listening sesssion and filter values change
   */
  useEffect(() => {
    if (session?.loading) return
    if (orders) {
      setOrderList({
        ...orderList,
        orders: sortOrdersArray(orderBy, orders)
      })
    } else {
      loadOrders()
    }
    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [session, searchValue, orderBy, filterValues, isOnlyDelivery, driverId, customerId, businessId, orders, orderStatus, timeStatus])

  const handleUpdateOrder = (order) => {
    if (order?.products?.[0]?.type === 'gift_card') return
    if (customerId && order?.customer_id !== customerId) return
    if (driverId && order?.driver_id !== driverId) return
    if (isOnlyDelivery && order?.delivery_type !== 1) return
    if (typeof order.status === 'undefined') return
    if (!isFilteredOrder(order)) {
      const length = order?.history?.length
      const lastHistoryData = order?.history[length - 1]?.data
      if (isFilteredOrder(order, lastHistoryData)) {
        setPagination(prevPagination => ({ ...prevPagination, total: prevPagination.total - 1 }))
      }

      setOrderList((prevState) => {
        const updatedOrders = prevState.orders
        if (order?.id && updatedOrders.hasOwnProperty(order.id)) {
          delete updatedOrders[order.id]
        }
        return { ...prevState, orders: updatedOrders }
      })
      return
    }

    const updatedOrder = order
    if (!order?.driver && order?.driver_id) {
      const updatedDriver = driversList?.drivers.find(driver => driver.id === order?.driver_id)
      if (updatedDriver) {
        updatedOrder.driver = { ...updatedDriver }
      }
    }

    const found = orderList.orders?.[updatedOrder?.id] ?? null
    if (found) {
      const updatedOrders = orderList.orders

      if (updatedOrders[order?.id]) {
        updatedOrders[order.id] = { ...updatedOrders[order.id], ...updatedOrder }
      }

      const _orders = sortOrdersArray(orderBy, updatedOrders)
      setOrderList(prevState => ({ ...prevState, orders: _orders }))
    } else {
      const statusChange = order?.history?.[order?.history?.length - 1]?.data?.find(({ attribute }) => attribute === 'status')
      const updatedOrders = {
        ...orderList.orders,
        [order?.id]: order
      }
      const _orders = sortOrdersArray(orderBy, updatedOrders)
      setOrderList(prevState => ({
        ...prevState,
        orders: Object.fromEntries(Object.entries(_orders).slice(0, pagination.pageSize))
      }))
      if (statusChange) {
        const from = parseInt(statusChange.old)
        if (!orderStatus.includes(from)) {
          setPagination(prevPagination => ({ ...prevPagination, total: prevPagination.total + 1 }))
        }
      }
    }
  }

  const handleRegisterOrder = (order) => {
    if (order?.products?.[0]?.type === 'gift_card') return
    if (customerId && order?.customer_id !== customerId) return
    if (driverId && order?.driver_id !== driverId) return
    if (isOnlyDelivery && order?.delivery_type !== 1) return
    const found = orderList.orders?.[order?.id] ?? null
    if (found) return
    if (!isFilteredOrder(order)) return
    setPagination(prevPagination => ({ ...prevPagination, total: prevPagination.total + 1 }))
    setOrderList(prevState => {
      const found = prevState.orders?.[order?.id] ?? null
      if (found) return prevState
      const updatedOrders = {
        ...prevState.orders,
        [order?.id]: order
      }
      const sortedOrders = sortOrdersArray(orderBy, updatedOrders)

      return {
        ...prevState,
        orders: Object.fromEntries(Object.entries(sortedOrders).slice(0, pagination.pageSize))
      }
    })
  }

  const handleNewMessage = (message) => {
    if (Object.keys(orderList.orders).length === 0) return
    const _orders = orderList.orders
    const orderToUpdate = _orders[message.order?.id]

    if (orderToUpdate) {
      if (orderToUpdate.last_message_at !== message.created_at) {
        if (message.type === 1) {
          orderToUpdate.last_general_message_at = message.created_at
          if (message.author.level !== 0) {
            orderToUpdate.unread_general_count += 1
          }
        } else {
          orderToUpdate.last_direct_message_at = message.created_at
          if (message.author.level !== 0) {
            orderToUpdate.unread_direct_count += 1
          }
        }

        orderToUpdate.last_message_at = message.created_at
        if (message.author.level !== 0) {
          orderToUpdate.unread_count += 1
        }

        const updatedOrders = { ..._orders }
        updatedOrders[message.order.id] = orderToUpdate

        const sortedOrders = sortOrdersArray(orderBy, updatedOrders)
        setOrderList((prevOrderList) => ({
          ...prevOrderList,
          orders: sortedOrders
        }))
      }
    }
  }

  useEffect(() => {
    if (orderList.loading) return
    if (pagination?.currentPage !== 0 && pagination?.total !== 0) {
      if (Math.ceil(pagination?.total / pagination.pageSize) >= pagination?.currentPage) {
        if (Object.keys(orderList.orders).length === 0) {
          getPageOrders(pagination.pageSize, pagination.currentPage)
        }
      } else {
        getPageOrders(pagination.pageSize, pagination.currentPage - 1)
      }
    }
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleRegisterOrder)
    socket.on('message', handleNewMessage)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleRegisterOrder)
      socket.off('message', handleNewMessage)
    }
  }, [orderList.orders, pagination, orderBy, socket, driversList, customerId, driverId])

  // Listening for customer rating
  useEffect(() => {
    const handleCustomerReviewed = (review) => {
      const _orders = orderList.orders
      const orderToUpdate = _orders[review.order_id]

      if (orderToUpdate) {
        orderToUpdate.user_review = review

        const updatedOrders = { ..._orders }
        updatedOrders[review.order_id] = orderToUpdate

        const sortedOrders = sortOrdersArray(orderBy, updatedOrders)
        setOrderList((prevOrderList) => ({
          ...prevOrderList,
          orders: sortedOrders
        }))
      }
    }
    events.on('customer_reviewed', handleCustomerReviewed)
    return () => {
      events.off('customer_reviewed', handleCustomerReviewed)
    }
  }, [orderList, orderBy])

  const reloadPageOrders = () => {
    getPageOrders(pagination.pageSize, pagination.currentPage)
  }

  useEffect(() => {
    events.on('websocket_connected', reloadPageOrders)
    return () => {
      events.off('websocket_connected', reloadPageOrders)
    }
  }, [pagination])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          getPageOrders={getPageOrders}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          allowColumns={allowColumns}
          setAllowColumns={setAllowColumns}
          handleDrop={handleDrop}
          saveUserSettings={saveUserSettings}
        />
      )}
    </>
  )
}

DashboardOrdersList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
