import React, { useCallback, useEffect, useState } from 'react'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { DriverSelector } from '../DriverSelector'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { ColumnAllowSettingPopover } from '../ColumnAllowSettingPopover'
import {
  OrdersContainer,
  Table,
  OrderNumberContainer,
  CheckBox,
  WrapperImage,
  Image,
  BusinessInfo,
  CustomerInfo,
  DriversInfo,
  OrderType,
  WrapOrderStatusSelector
} from './styles'

export const OrdersTable = (props) => {
  const {
    orderList,
    driversList,
    pagination,
    selectedOrderIds,
    loadMoreOrders,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage, getTimeAgo }] = useUtils()

  const [openPopover, setOpenPopover] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    orderNumber: true,
    dateTime: true,
    business: true,
    customer: true,
    driver: true,
    advanced: true,
    total: true,
    status: true,
    deliveryType: true
  })

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

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const handleClickOrder = (orderId, e) => {
    if (e.target.closest('.orderNo') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle')) return
    handleOpenOrderDetail(orderId)
  }

  const handleScroll = useCallback(() => {
    const ordersContent = document.getElementById('orders')
    const hasMore = pagination.to < pagination.total
    if (orderList.loading || !hasMore) return
    if ((ordersContent?.scrollTop + 50) >= (ordersContent?.scrollHeight - ordersContent?.offsetHeight)) {
      loadMoreOrders()
    }
  }, [orderList, pagination])

  useEffect(() => {
    const ordersContent = document.getElementById('orders')

    ordersContent.addEventListener('scroll', handleScroll)
    return () => ordersContent.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <OrdersContainer>
      <Table>
        <thead>
          <tr>
            <th
              className={!(allowColumns?.orderNumber || allowColumns?.dateTime) ? 'orderNo small' : 'orderNo'}
            >
              {t('ORDER', 'Order')}
            </th>
            {allowColumns?.business && (
              <th className='businessInfo'>{t('BUSINESS', 'Business')}</th>
            )}
            {allowColumns?.customer && (
              <th className='customerInfo'>{t('CUSTOMER', 'Customer')}</th>
            )}
            {allowColumns?.driver && (
              <th className='driverInfo'>{t('DRIVER', 'Driver')}</th>
            )}
            {allowColumns?.deliveryType && (
              <th className='orderType'>{t('DELIVERY_TYPE', 'Delivery type')}</th>
            )}
            {allowColumns?.status && (
              <th className='orderStatusTitle'>{t('ORDER_STATUS', 'Order status')}</th>
            )}
            {allowColumns?.advanced && (
              <th colSpan={3} className='advanced'>{t('ADVANCE_LOGISTICS', 'Advance logistics')}</th>
            )}
            <th className='orderPrice'>
              <ColumnAllowSettingPopover
                open={openPopover}
                allowColumns={allowColumns}
                onClick={() => setOpenPopover(!openPopover)}
                onClose={() => setOpenPopover(false)}
                handleChangeAllowColumns={handleChangeAllowColumns}
              />
            </th>
          </tr>
        </thead>
        <tbody id='orders'>
          {orderList?.orders?.map(order => (
            <tr
              key={order.id}
              onClick={(e) => handleClickOrder(order.id, e)}
            >
              <td
                className={!(allowColumns?.orderNumber || allowColumns?.dateTime) ? 'orderNo small' : 'orderNo'}
              >
                <OrderNumberContainer
                  onClick={() => handleSelectedOrderIds(order.id)}
                >
                  <CheckBox isChecked={selectedOrderIds.includes(order?.id)}>
                    {selectedOrderIds.includes(order?.id) ? (
                      <RiCheckboxFill />
                    ): (
                      <RiCheckboxBlankLine />
                    )}
                  </CheckBox>
                  <div className='info'>
                    {allowColumns?.orderNumber && (
                      <p className='bold'>{t('ORDER_NO', 'Order No.')} {order?.id}</p>
                    )}
                    {allowColumns?.dateTime && (
                      <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
                    )}
                  </div>
                </OrderNumberContainer>
              </td>
              {allowColumns?.business && (
                <td className='businessInfo'>
                  <BusinessInfo>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                    </WrapperImage>
                    <div className='info'>
                      <p className='bold'>{order?.business?.name}</p>
                      <p>{order?.business?.city?.name}</p>
                    </div>
                  </BusinessInfo>
                </td>
              )}
              {allowColumns?.customer && (
                <td className='customerInfo'>
                  <CustomerInfo>
                    <WrapperImage>
                      {order?.customer?.photo ? (
                        <Image bgimage={order?.customer?.photo} />
                      ) : (
                        <FaUserAlt />
                      )}
                    </WrapperImage>
                    <div className='info'>
                      <p className='bold'>{order?.customer?.name}</p>
                      <p>{order?.customer?.cellphone}</p>
                    </div>
                  </CustomerInfo>
                </td>
              )}
              {allowColumns?.driver && (
                <td className='driverInfo'>
                  {order?.delivery_type === 1 && (
                    <DriversInfo>
                      <DriverSelector
                        orderView
                        padding='5px 0'
                        defaultValue={order?.driver_id ? order.driver_id : 'default'}
                        drivers={driversList.drivers}
                        order={order}
                      />
                    </DriversInfo>
                  )}
                </td>
              )}
              {allowColumns?.deliveryType && (
                <td className='orderType'>
                  <OrderType>
                    {order?.delivery_type === 1 && (
                      <img
                        src={theme?.images?.icons?.driverDelivery}
                        alt='Delivery'
                      />
                    )}
                    {order?.delivery_type === 2 && (
                      <img
                        src={theme?.images?.icons?.pickUp}
                        alt='pick up'
                      />
                    )}
                    {order?.delivery_type === 3 && (
                      <AiFillShop />
                    )}
                    {order?.delivery_type === 4 && (
                      <GiFoodTruck />
                    )}
                    {order?.delivery_type === 5 && (
                      <FaCarSide />
                    )}
                  </OrderType>
                </td>
              )}
              {allowColumns?.status && (
                <td className='orderStatusTitle'>
                  <WrapOrderStatusSelector>
                    <OrderStatusTypeSelector
                      defaultValue={parseInt(order.status)}
                      orderId={order.id}
                      deliveryType={order?.delivery_type}
                      noPadding
                      handleUpdateOrderStatus={handleUpdateOrderStatus}
                    />
                  </WrapOrderStatusSelector>
                </td>
              )}
              {allowColumns?.advanced && (
                <td className='logistic'>
                  <div className='info'>
                    <p className='bold'>{t('LOGISTIC', 'Logistic')}</p>
                    <p>{getLogisticTag(order?.logistic_status)}</p>
                  </div>
                </td>
              )}
              {allowColumns?.advanced && (
                <td className='attempts'>
                  <div className='info'>
                    <p className='bold'>{t('ATTEMPTS', 'Attempts')}</p>
                    <p>{order?.logistic_attemps}</p>
                  </div>
                </td>
              )}
              {allowColumns?.advanced && (
                <td className='priority'>
                  <div className='info'>
                    <p className='bold'>{t('PRIORITY', 'Priority')}</p>
                    <p>{getPriorityTag(order?.priority)}</p>
                  </div>
                </td>
              )}
              <td className='orderPrice'>
                <div className='info'>
                  {allowColumns?.total && (
                    <p className='bold'>{parsePrice(order?.summary?.total)}</p>
                  )}
                  <p>
                    {order?.delivery_datetime_utc
                      ? getTimeAgo(order?.delivery_datetime_utc)
                      : getTimeAgo(order?.delivery_datetime, { utc: false })}
                    </p>
                </div>
              </td>
            </tr>
          ))}
          {orderList.loading &&
            [...Array(10).keys()].map(i => (
              <tr key={i}>
                <td
                  className={!(allowColumns?.orderNumber || allowColumns?.dateTime) ? 'orderNo small' : 'orderNo'}
                >
                  <OrderNumberContainer>
                    <CheckBox>
                      <Skeleton width={25} height={25} style={{ margin: '10px' }} />
                    </CheckBox>
                    <div className='info'>
                      {allowColumns?.orderNumber && (
                        <Skeleton width={100} />
                      )}
                      {allowColumns?.dateTime && (
                        <Skeleton width={120} />
                      )}
                    </div>
                  </OrderNumberContainer>
                </td>
                {allowColumns?.business && (
                  <td className='businessInfo'>
                    <BusinessInfo>
                      <Skeleton width={45} height={45} />
                      <div className='info'>
                        <p className='bold'><Skeleton width={80} /></p>
                        <p><Skeleton width={100} /></p>
                      </div>
                    </BusinessInfo>
                  </td>
                )}
                {allowColumns?.customer && (
                  <td className='customerInfo'>
                    <CustomerInfo>
                      <Skeleton width={45} height={45} />
                      <div className='info'>
                        <p className='bold'><Skeleton width={100} /></p>
                        <p><Skeleton width={100} /></p>
                      </div>
                    </CustomerInfo>
                  </td>
                )}
                {allowColumns?.driver && (
                  <td className='driverInfo'>
                    <DriversInfo className='d-flex align-items-center'>
                      <Skeleton width={45} height={45} />
                      <Skeleton width={100} style={{ margin: '10px' }} />
                    </DriversInfo>
                  </td>
                )}
                {allowColumns?.deliveryType && (
                  <td className='orderType'>
                    <OrderType>
                      <Skeleton width={35} height={35} />
                    </OrderType>
                  </td>
                )}
                {allowColumns?.status && (
                  <td className='orderStatusTitle'>
                    <WrapOrderStatusSelector>
                      <Skeleton width={100} height={30} />
                    </WrapOrderStatusSelector>
                  </td>
                )}
                {allowColumns?.advanced && (
                  <td className='logistic'>
                    <div className='info'>
                      <p className='bold'><Skeleton width={60} /></p>
                      <p><Skeleton width={60} /></p>
                    </div>
                  </td>
                )}
                {allowColumns?.advanced && (
                  <td className='attempts'>
                    <div className='info'>
                      <p className='bold'><Skeleton width={60} /></p>
                      <p><Skeleton width={60} /></p>
                    </div>
                  </td>
                )}
                {allowColumns?.advanced && (
                  <td className='priority'>
                    <div className='info'>
                      <p className='bold'><Skeleton width={60} /></p>
                      <p><Skeleton width={60} /></p>
                    </div>
                  </td>
                )}
                <td className='orderPrice'>
                  <div className='info'>
                    {allowColumns?.total && (
                      <p className='bold'><Skeleton width={60} /></p>
                    )}
                    <p>
                      <Skeleton width={100} />
                    </p>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      </OrdersContainer>
  )
}
