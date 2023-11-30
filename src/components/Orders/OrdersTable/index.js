import React, { memo, useEffect, useState } from 'react'
import moment from 'moment'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'
import { getCurrenySymbol, addQueryToUrl } from '../../../utils'

import {
  OrdersContainer,
  Table,
  OrderTbody,
  OrderNumberContainer,
  CheckBox,
  BusinessInfo,
  CustomerInfo,
  DriversInfo,
  OrderType,
  WrapOrderStatusSelector,
  WrapperPagination,
  StatusInfo,
  Timestatus,
  DragTh
} from './styles'
import { Order } from './Order'

const OrderTablePropsAreEqual = (prevProps, nextProps) => {
  return prevProps.isSelectedOrders === nextProps.isSelectedOrders &&
    JSON.stringify(prevProps.orderList) === JSON.stringify(nextProps.orderList) &&
    JSON.stringify(prevProps.pagination) === JSON.stringify(nextProps.pagination) &&
    JSON.stringify(prevProps.selectedOrderIds) === JSON.stringify(nextProps.selectedOrderIds) &&
    JSON.stringify(prevProps.isTourOpen) === JSON.stringify(nextProps.isTourOpen) &&
    prevProps.groupStatus === nextProps.groupStatus &&
    JSON.stringify(prevProps.allowColumns) === JSON.stringify(nextProps.allowColumns) &&
    prevProps.isUseQuery === nextProps.isUseQuery
}

export const OrdersTable = memo((props) => {
  const {
    hidePhoto,
    isSelectedOrders,
    orderList,
    pagination,
    selectedOrderIds,
    orderDetailId,
    getPageOrders,
    handleSelectedOrderIds,
    handleOpenOrderDetail,
    setSelectedOrderIds,
    currentTourStep,
    isTourOpen,
    handleOpenTour,
    setIsTourOpen,
    groupStatus,
    allowColumns,
    setAllowColumns,
    handleDrop,
    saveUserSettings,
    isUseQuery,
    franchisesList
  } = props
  const [{ dictionary }, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate }] = useUtils()
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [dragOverd, setDragOverd] = useState('')
  const handleChangePage = (page) => {
    getPageOrders(pagination.pageSize, page)
  }
  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageOrders(pageSize, expectedPage)
  }
  const [configState] = useConfig()
  const isEnabledRowInColor = configState?.configs?.row_in_color_enabled?.value === '1'
  const showExternalId = configState?.configs?.change_order_id?.value === '1'

  const franchiseImages = !franchisesList?.error && franchisesList?.franchises?.reduce((imageKeys, franchise) => {
    imageKeys[franchise.id] = franchise.logo
    return imageKeys
  }, {})

  const optionsDefault = [
    {
      value: 'status',
      content: t('STATUS', 'Status')
    },
    {
      value: 'orderNumber',
      content: t('INVOICE_ORDER_NO', 'Order No.')
    },
    {
      value: 'agent',
      content: t('AGENT', 'Agent')
    },
    {
      value: 'cartGroupId',
      content: t('GROUP_ORDER', 'Group Order')
    },
    {
      value: 'driverGroupId',
      content: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id')
    },
    {
      value: 'dateTime',
      content: t('DATE_TIME', 'Date and time')
    },
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'customer',
      content: t('CUSTOMER', 'Customer')
    },
    {
      value: 'driver',
      content: t('DRIVER', 'Driver')
    },
    {
      value: 'advanced',
      content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
    },
    {
      value: 'timer',
      content: t('SLA_TIMER', 'SLA’s timer')
    },
    {
      value: 'eta',
      content: t('ETA', 'ETA')
    },
    {
      value: 'total',
      content: t('EXPORT_TOTAL', 'Total')
    },
    {
      value: 'externalId',
      content: t('EXTERNAL_ID', 'External id')
    },
    {
      value: 'channel',
      content: t('CHANNEL', 'Channel')
    }
  ]

  const getDelayMinutes = (order) => {
    // targetMin = delivery_datetime  + eta_time - now()
    const offset = 300
    const cdtToutc = moment(order?.delivery_datetime).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    const _delivery = order?.delivery_datetime_utc
      ? parseDate(order?.delivery_datetime_utc)
      : parseDate(cdtToutc)
    const _eta = order?.eta_time
    const diffTimeAsSeconds = moment(_delivery).add(_eta, 'minutes').diff(moment().utc(), 'seconds')
    return Math.ceil(diffTimeAsSeconds / 60)
  }

  const displayDelayedTime = (order) => {
    let tagetedMin = getDelayMinutes(order)
    // get day, hour and minutes
    const sign = tagetedMin >= 0 ? '' : '- '
    tagetedMin = Math.abs(tagetedMin)
    let day = Math.floor(tagetedMin / 1440)
    const restMinOfTargetedMin = tagetedMin - 1440 * day
    let restHours = Math.floor(restMinOfTargetedMin / 60)
    let restMins = restMinOfTargetedMin - 60 * restHours
    // make standard time format
    day = day === 0 ? '' : `${day + ' ' + t('DAY', 'day') + ' '}`
    restHours = restHours < 10 ? '0' + restHours : restHours
    restMins = restMins < 10 ? '0' + restMins : restMins

    const finalTaget = sign + day + restHours + ':' + restMins
    return finalTaget
  }

  // const getStatusClassName = (minutes) => {
  //   if (isNaN(Number(minutes))) return 'in_time'
  //   const delayTime = configState?.configs?.order_deadlines_delayed_time?.value
  //   return minutes > 0 ? 'in_time' : Math.abs(minutes) <= delayTime ? 'at_risk' : 'delayed'
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(Date.now())
  //   }, slaSettingTime)

  //   return () => clearInterval(interval)
  // }, [])

  const getLogisticTag = (status) => {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In progress')
      case 2:
        return t('IN_QUEUE', 'In queue')
      case 3:
        return t('EXPIRED', 'Expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getPriorityTag = (priority) => {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low')
      case 0:
        return t('NORMAL', 'Normal')
      case 1:
        return t('HIGH', 'High')
      case 2:
        return t('URGENT', 'Urgent')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const getOrderStatus = (s) => {
    if (!dictionary) return s

    const orderStatus = {
      0: dictionary?.PENDING ?? 'Pending',
      1: dictionary?.COMPLETED_BY_ADMIN ?? 'Completed by admin',
      2: dictionary?.REJECTED ?? 'Rejected',
      3: dictionary?.ORDER_STATUS_IN_BUSINESS ?? 'Driver arrived to business',
      4: dictionary?.PREPARATION_COMPLETED ?? 'Preparation Completed',
      5: dictionary?.REJECTED_BY_BUSINESS ?? 'Rejected by business',
      6: dictionary?.REJECTED_BY_DRIVER ?? 'Rejected by Driver',
      7: dictionary?.ACCEPTED_BY_BUSINESS ?? 'Accepted by business',
      8: dictionary?.ACCEPTED_BY_DRIVER ?? 'Accepted by driver',
      9: dictionary?.PICK_UP_COMPLETED_BY_DRIVER ?? 'Pick up completed by driver',
      10: dictionary?.PICK_UP_FAILED_BY_DRIVER ?? 'Pick up Failed by driver',
      11: dictionary?.DELIVERY_COMPLETED_BY_DRIVER ?? 'Delivery completed by driver',
      12: dictionary?.DELIVERY_FAILED_BY_DRIVER ?? 'Delivery Failed by driver',
      13: dictionary?.PREORDER ?? 'PreOrder',
      14: dictionary?.ORDER_NOT_READY ?? 'Order not ready',
      15: dictionary?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER ?? 'Order picked up completed by customer',
      16: dictionary?.ORDER_STATUS_CANCELLED_BY_CUSTOMER ?? 'Order cancelled by customer',
      17: dictionary?.ORDER_NOT_PICKEDUP_BY_CUSTOMER ?? 'Order not picked up by customer',
      18: dictionary?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS ?? 'Driver almost arrived to business',
      19: dictionary?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER ?? 'Driver almost arrived to customer',
      20: dictionary?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS ?? 'Customer almost arrived to business',
      21: dictionary?.ORDER_CUSTOMER_ARRIVED_BUSINESS ?? 'Customer arrived to business',
      22: dictionary?.ORDER_LOOKING_FOR_DRIVER ?? 'Looking for driver',
      23: dictionary?.ORDER_DRIVER_ON_WAY ?? 'Driver on way',
      24: dictionary?.ORDER_STATUS_DRIVER_WAITING_FOR_ORDER ?? 'Driver waiting for order',
      25: dictionary?.ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY ?? 'Accepted by driver company',
      26: dictionary?.ORDER_DRIVER_ARRIVED_CUSTOMER ?? 'Driver arrived to customer'
    }

    return orderStatus?.[Number(s)] ?? s
  }

  const handleChangeAllowColumns = (type) => {
    const _column = allowColumns[type]
    const updatedAllowColumns = {
      ...allowColumns,
      [type]: { ..._column, visable: !_column?.visable }
    }
    setAllowColumns(updatedAllowColumns)
    saveUserSettings(JSON.parse(JSON.stringify(updatedAllowColumns)))
  }

  const handleClickOrder = (order, e) => {
    const inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'))
    if (inValid) return
    handleOpenOrderDetail(order)
  }

  const handleSelecteAllOrder = () => {
    const orderIds = orderList.orders?.reduce((ids, order) => [...ids, order.id], [])
    if (!isAllChecked) {
      setSelectedOrderIds([...selectedOrderIds, ...orderIds])
    } else {
      const orderIdsToDeleteSet = new Set(orderIds)
      const updatedSelectedOrderIds = selectedOrderIds.filter((name) => {
        return !orderIdsToDeleteSet.has(name)
      })
      setSelectedOrderIds(updatedSelectedOrderIds)
    }
  }
  /**
   * Method to handle drag start
   */
  const handleDragStart = (event, columnName) => {
    event.dataTransfer.setData('transferColumnName', columnName)
    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = allowColumns[columnName]?.title
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }
  /**
   * Method to handle drag over
   */
  const handleDragOver = (event, columnName) => {
    event.preventDefault()
    setDragOverd(columnName)
  }

  /**
   * Method to handle drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    setDragOverd('')
  }

  useEffect(() => {
    if (orderList.loading) return
    const orderIds = orderList.orders?.reduce((ids, order) => [...ids, order.id], [])
    const _isAllChecked = orderIds.every(elem => selectedOrderIds.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [orderList.orders, selectedOrderIds])

  const handleChangeKeyboard = (evt) => {
    if (evt.code === 'Escape') setIsTourOpen && setIsTourOpen(false)
    if (evt.keyCode === 37 && currentTourStep === 1) handleOpenTour()
    if (evt.keyCode === 37 && currentTourStep === 4) handleOpenOrderDetail(orderList?.orders[0], true)
    if (evt.keyCode === 39 && currentTourStep === 0) handleOpenOrderDetail(orderList?.orders[0])
  }

  useEffect(() => {
    if (!isTourOpen) return
    document.addEventListener('keydown', handleChangeKeyboard)
    return () => document.removeEventListener('keydown', handleChangeKeyboard)
  }, [isTourOpen, currentTourStep])

  useEffect(() => {
    if (!isUseQuery || !pagination?.currentPage || !pagination?.pageSize || !pagination?.total) return
    addQueryToUrl({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    })
  }, [pagination?.currentPage, pagination?.pageSize, pagination?.total])

  return (
    <>
      <OrdersContainer
        id='orderTable'
        isSelectedOrders={isSelectedOrders}
        noScroll={isTourOpen && currentTourStep === 0}
      >
        <Table
          className='orders_table'
          noFixedHeader={!orderList.loading && orderList.orders?.length <= 5}
        >
          {!isSelectedOrders && (
            <thead>
              <tr>
                {allowColumns && (Object.keys(allowColumns).filter(col => allowColumns[col]?.visable && allowColumns[col]?.order !== 0).length === 0
                  ? (
                    <th className='orderPrice'>
                      <ColumnAllowSettingPopover
                        allowColumns={allowColumns}
                        optionsDefault={optionsDefault}
                        handleChangeAllowColumns={handleChangeAllowColumns}
                        isOrder
                      />
                    </th>
                  ) : (
                    Object.keys(allowColumns).filter(col => allowColumns[col]?.visable && allowColumns[col]?.order !== 0)
                      .sort((col1, col2) => allowColumns[col1]?.order - allowColumns[col2]?.order)
                      .map((column, i, array) => {
                        if (column === 'slaBar') {
                          return
                        }
                        if (column === 'orderNumber') {
                          return (
                            <React.Fragment key={i}>
                              <th
                                className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'orderNo small' : 'orderNo'}
                                key={`noDragTh-${i}`}
                                colSpan={allowColumns?.slaBar?.visable ? 2 : 1}
                              >
                                <CheckBox
                                  isChecked={!orderList.loading && isAllChecked}
                                  onClick={() => handleSelecteAllOrder()}
                                  className='orderCheckBox'
                                >
                                  {(!orderList.loading && isAllChecked) ? (
                                    <RiCheckboxFill />
                                  ) : (
                                    <RiCheckboxBlankLine />
                                  )}
                                </CheckBox>
                                {showExternalId ? t('DATE', 'Date') : t('ORDER', 'Order')}
                              </th>
                              {column === [...array].pop() && (
                                <th className='orderPrice' key={`noDragTh-${i}`}>
                                  <ColumnAllowSettingPopover
                                    allowColumns={allowColumns}
                                    optionsDefault={optionsDefault}
                                    handleChangeAllowColumns={handleChangeAllowColumns}
                                    isOrder
                                  />
                                </th>
                              )}
                            </React.Fragment>
                          )
                        }
                        if (column === 'externalId') {
                          return (
                            <DragTh
                              key={`dragTh-${i}`}
                              onDragOver={e => handleDragOver?.(e, column)}
                              onDrop={e => handleDrop(e, column)}
                              onDragEnd={e => handleDragEnd(e)}
                              colSpan={allowColumns[column]?.colSpan ?? 1}
                              className={allowColumns[column]?.className}
                              selectedDragOver={column === dragOverd}
                            >
                              <div draggable onDragStart={e => handleDragStart?.(e, column)}>
                                <img
                                  src={theme.images.icons?.sixDots}
                                  alt='six dots'
                                />
                                <span>{allowColumns[column]?.title}</span>
                              </div>
                            </DragTh>
                          )
                        }
                        if (column === 'channel' || (column !== 'channel' && column === [...array].pop())) {
                          return (
                            <React.Fragment key={i}>
                              {(column !== 'total' && column === [...array].pop()) && (
                                <DragTh
                                  key={`dragTh-${i}`}
                                  onDragOver={e => handleDragOver?.(e, column)}
                                  onDrop={e => handleDrop(e, column)}
                                  onDragEnd={e => handleDragEnd(e)}
                                  colSpan={allowColumns[column]?.colSpan ?? 1}
                                  className={allowColumns[column]?.className}
                                  selectedDragOver={column === dragOverd}
                                >
                                  <div draggable onDragStart={e => handleDragStart?.(e, column)}>
                                    <img
                                      src={theme.images.icons?.sixDots}
                                      alt='six dots'
                                    />
                                    <span>{allowColumns[column]?.title}</span>
                                  </div>
                                </DragTh>
                              )}
                              <th className='orderPrice' key={`noDragTh-${i}`}>
                                <ColumnAllowSettingPopover
                                  allowColumns={allowColumns}
                                  optionsDefault={optionsDefault}
                                  handleChangeAllowColumns={handleChangeAllowColumns}
                                  isOrder
                                />
                              </th>
                            </React.Fragment>
                          )
                        }
                        return (column !== 'timer' || (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress'))) && (
                          <DragTh
                            key={`dragTh-${i}`}
                            onDragOver={e => handleDragOver?.(e, column)}
                            onDrop={e => handleDrop(e, column)}
                            onDragEnd={e => handleDragEnd(e)}
                            colSpan={allowColumns[column]?.colSpan ?? 1}
                            className={allowColumns[column]?.className}
                            selectedDragOver={column === dragOverd}
                          >
                            <div draggable onDragStart={e => handleDragStart?.(e, column)}>
                              <img
                                src={theme.images.icons?.sixDots}
                                alt='six dots'
                              />
                              <span>{allowColumns[column]?.title}</span>
                            </div>
                          </DragTh>)
                      })
                  ))}
              </tr>
            </thead>
          )}
          {(orderList.loading || !allowColumns) ? (
            [...Array(10).keys()].map(i => (
              <OrderTbody key={i}>
                <tr>
                  {allowColumns?.slaBar?.visable && (
                    <td>
                      <Timestatus />
                    </td>
                  )}
                  <td
                    className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'orderNo small' : 'orderNo'}
                  >
                    <OrderNumberContainer>
                      <CheckBox>
                        <Skeleton width={25} height={25} style={{ margin: '10px' }} />
                      </CheckBox>
                      <div className='info'>
                        {allowColumns?.orderNumber?.visable && (
                          <p><Skeleton width={100} /></p>
                        )}
                        {allowColumns?.dateTime?.visable && (
                          <Skeleton width={120} />
                        )}
                      </div>
                    </OrderNumberContainer>
                  </td>
                  {allowColumns?.externalId?.visable && (
                    <td className='externalId'>
                      <StatusInfo>
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                        </div>
                      </StatusInfo>
                    </td>
                  )}
                  {allowColumns?.cartGroupId?.visable && (
                    <td className='statusInfo'>
                      <StatusInfo>
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                        </div>
                      </StatusInfo>
                    </td>
                  )}
                  {allowColumns?.driverGroupId?.visable && (
                    <td className='statusInfo'>
                      <StatusInfo>
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                        </div>
                      </StatusInfo>
                    </td>
                  )}
                  {allowColumns?.status?.visable && !isSelectedOrders && (
                    <td className='statusInfo'>
                      <StatusInfo>
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                        </div>
                      </StatusInfo>
                    </td>
                  )}
                  {allowColumns?.business?.visable && (
                    <td className='businessInfo'>
                      <BusinessInfo>
                        {!hidePhoto && (
                          <Skeleton width={45} height={45} />
                        )}
                        <div className='info'>
                          <p className='bold'><Skeleton width={80} /></p>
                          <p><Skeleton width={100} /></p>
                        </div>
                      </BusinessInfo>
                    </td>
                  )}
                  {allowColumns?.customer?.visable && (
                    <td className='customerInfo'>
                      <CustomerInfo>
                        {!hidePhoto && (
                          <Skeleton width={45} height={45} />
                        )}
                        <div className='info'>
                          <p className='bold'><Skeleton width={100} /></p>
                          <p><Skeleton width={100} /></p>
                        </div>
                      </CustomerInfo>
                    </td>
                  )}
                  {allowColumns?.driver?.visable && !isSelectedOrders && (
                    <td className='driverInfo'>
                      <DriversInfo className='d-flex align-items-center'>
                        {!hidePhoto && (
                          <Skeleton width={45} height={45} />
                        )}
                        <Skeleton width={100} style={{ margin: '10px' }} />
                      </DriversInfo>
                    </td>
                  )}
                  {allowColumns?.deliveryType?.visable && !isSelectedOrders && (
                    <td className='orderType'>
                      <OrderType>
                        <Skeleton width={35} height={35} />
                      </OrderType>
                    </td>
                  )}
                  {allowColumns?.status?.visable && !isSelectedOrders && (
                    <td className='orderStatusTitle'>
                      <WrapOrderStatusSelector>
                        <Skeleton width={100} height={30} />
                      </WrapOrderStatusSelector>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='logistic'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='attempts'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.advanced?.visable && !isSelectedOrders && (
                    <td className='priority'>
                      <div className='info'>
                        <p className='bold'><Skeleton width={60} /></p>
                        <p><Skeleton width={60} /></p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.channel?.visable && !isSelectedOrders && (
                    <td className='orderStatusTitle'>
                      <WrapOrderStatusSelector>
                        <Skeleton width={100} height={30} />
                      </WrapOrderStatusSelector>
                    </td>
                  )}
                  {!isSelectedOrders && (
                    <td className='orderPrice'>
                      <div className='info'>
                        {allowColumns?.total?.visable && (
                          <p className='bold'><Skeleton width={60} /></p>
                        )}
                        <p>
                          <Skeleton width={100} />
                        </p>
                      </div>
                    </td>
                  )}
                </tr>
              </OrderTbody>
            ))
          ) : (
            <OrderTbody>
              {orderList.orders.map((order, i) => (
                <Order
                  key={order?.id}
                  i={i}
                  order={order}
                  orderDetailId={orderDetailId}
                  isEnabledRowInColor={isEnabledRowInColor}
                  handleClickOrder={handleClickOrder}
                  allowColumns={allowColumns}
                  isSelectedOrders={isSelectedOrders}
                  selectedOrderIds={selectedOrderIds}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  showExternalId={showExternalId}
                  getOrderStatus={getOrderStatus}
                  hidePhoto={hidePhoto}
                  getLogisticTag={getLogisticTag}
                  getPriorityTag={getPriorityTag}
                  groupStatus={groupStatus}
                  displayDelayedTime={displayDelayedTime}
                  getCurrenySymbol={getCurrenySymbol}
                  franchiseImages={franchiseImages}
                />
              ))}
            </OrderTbody>
          )}
        </Table>
      </OrdersContainer>

      {pagination && (
        <WrapperPagination>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
            handleChangePage={handleChangePage}
            defaultPageSize={pagination.pageSize}
            handleChangePageSize={handleChangePageSize}
          />
        </WrapperPagination>
      )}
    </>
  )
}, OrderTablePropsAreEqual)
