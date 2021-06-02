import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { DriverSelector } from '../DriverSelector'

import {
  OrdersListContainer,
  OrderCard,
  OrderHeader,
  ViewDetails,
  BusinessInfo,
  WrapperImage,
  Image,
  CardContent,
  DriverSelectorWrapper
} from './styles'

export const OrdersCards = (props) => {
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

  return (
    <OrdersListContainer>
      {!(orderList.loading || driversList.loading) ? orderList?.orders.map(order => (
        <OrderCard key={order.id}>
          <OrderHeader>
            <h2>{t('ORDER_NO', 'Order No.')} {order?.id}</h2>
            <div>
              <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
              <ViewDetails>
                {t('VIEW_DETAILS', 'View details')}
              </ViewDetails>
            </div>
          </OrderHeader>
          <CardContent>
            <BusinessInfo>
              <WrapperImage>
                <Image bgimage={optimizeImage(order.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              </WrapperImage>
              <div className='info'>
                <p className='bold'>{order?.business?.name}</p>
                <p>{order?.business?.city?.name}</p>
              </div>
            </BusinessInfo>
            <DriverSelectorWrapper>
              <DriverSelector
                orderView
                padding='5px 0'
                defaultValue={order?.driver_id ? order.driver_id : 'default'}
                drivers={driversList.drivers}
                order={order}
              />
            </DriverSelectorWrapper>
          </CardContent>
        </OrderCard>
      )) : (
        <Skeleton width={100} />
      )}
    </OrdersListContainer>
  )
}
