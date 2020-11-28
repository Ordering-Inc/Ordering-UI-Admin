import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'
import { useSession, useApi, useWebsocket } from 'ordering-components'

// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrderList = (props) => {
  const {
    UIComponent,
    orders,
    orderIds,
    orderStatus,
    orderBy,
    orderDirection,
    paginationSettings,
    asDashboard
  } = props

  const [ordering] = useApi()
  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()
  const socket = useWebsocket()
  const [{ token }] = useSession()
  const requestsState = {}
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  const sortOrdersArray = (option, array) => {
    if (option === 'desc') {
      return array.sort((a, b) => b.id - a.id)
    }
    if (option === 'asc') {
      return array.sort((a, b) => a.id - b.id)
    }
    return array
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
      const { content } = await ordering.setAccessToken(token).orders(order.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const orders = orderList.orders.filter(_order => {
          return _order.id !== order.id
        })
        setOrderList({ ...orderList, orders })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  const getOrders = async (page) => {
    let options = null
    if (!asDashboard) {
      options = {
        query: {
          orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
          page: page,
          page_size: paginationSettings.pageSize
        }
      }
    } else {
      options = {
        query: {
          orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy
        }
      }
    }
    if (orderIds || orderStatus) {
      options.query.where = []
      if (orderIds) {
        options.query.where.push({ attribute: 'id', value: orderIds })
      }
      if (orderStatus) {
        options.query.where.push({ attribute: 'status', value: orderStatus })
      }
    }
    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    const functionFetch = asDashboard
      ? ordering.setAccessToken(token).orders().asDashboard()
      : ordering.setAccessToken(token).orders()
    return await functionFetch.get(options)
  }

  const loadOrders = async () => {
    if (!session.token) return
    try {
      const response = await getOrders(pagination.currentPage + 1)
      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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

  useEffect(() => {
    if (orders) {
      setOrderList({
        ...orderList,
        orders
      })
    } else {
      loadOrders()
    }
    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [session])

  useEffect(() => {
    if (orderList.loading) return
    const handleUpdateOrder = (order) => {
      const found = orderList.orders.find(_order => _order.id === order.id)
      let orders = []
      if (found) {
        orders = orderList.orders.filter(_order => {
          if (_order.id === order.id) {
            delete order.total
            delete order.subtotal
            Object.assign(_order, order)
          }
          const valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))
          if (!valid) {
            pagination.total--
            setPagination({
              ...pagination
            })
          }
          return valid
        })
        setOrderList({
          ...orderList,
          orders
        })
      } else {
        const isOrderStatus = orderStatus.includes(parseInt(order.status))
        if (isOrderStatus) {
          orders = [...orderList.orders, order]
          const _ordres = sortOrdersArray(orderDirection, orders)
          pagination.total++
          setPagination({
            ...pagination
          })
          setOrderList({
            ...orderList,
            orders: _ordres
          })
        }
      }
    }
    socket.on('update_order', handleUpdateOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
    }
  }, [orderList.orders, pagination, socket])

  useEffect(() => {
    if (!session.user) return

    if (asDashboard) {
      socket.join('orders')
    } else {
      socket.join(`orders_${session?.user?.id}`)
    }
    return () => {
      if (asDashboard) {
        socket.leave('orders')
      } else {
        socket.leave(`orders_${session?.user?.id}`)
      }
    }
  }, [socket, session])

  const loadMoreOrders = async () => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pagination.currentPage + 1)
      setOrderList({
        loading: false,
        orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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

  const goToPage = async (page) => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(page)
      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
        />
      )}
    </>
  )
}

OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: PropTypes.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: PropTypes.arrayOf(object),
  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: PropTypes.arrayOf(number),
  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: PropTypes.arrayOf(number),
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: PropTypes.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: PropTypes.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    controlType: PropTypes.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
