import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { DriverSelector } from '../DriverSelector'
import { OrdersPagination } from '../../../../../components/OrdersPagination'

import {
  OrdersListContainer,
  OrderCard,
  OrderHeader,
  ViewDetails,
  BusinessInfo,
  WrapperImage,
  Image,
  CardContent,
  DriverSelectorWrapper,
  WrapperPagination
} from './styles'

export const OrdersCards = (props) => {
  const {
    orderList,
    driversList,
    pagination,
    loadMoreOrders,
    handleOpenOrderDetail,
    interActionMapOrder,
    handleLocation,
    handleUpdateDriverLocation
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage] = useState(10)

  // Get current orders
  const indexOfLastPost = currentPage * ordersPerPage
  const indexOfFirstPost = indexOfLastPost - ordersPerPage
  const [currentOrders, setCurrentOrders] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [totalOrders, setTotalOrders] = useState(null)

  // Change page
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== totalPages) {
      if (orderList.orders.length < ordersPerPage * currentPage + 1) {
        loadMoreOrders()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  const handleOrderClick = (e, order) => {
    const isInvalid = e.target.closest('.view-details') || e.target.closest('.driver-selector')
    if (isInvalid) return
    handleLocation(order)
  }

  useEffect(() => {
    if (orderList.loading || !interActionMapOrder) return
    const updatedOrder = orderList?.orders.find(order => order.id === interActionMapOrder?.id)
    if (updatedOrder) {
      handleUpdateDriverLocation && handleUpdateDriverLocation(updatedOrder)
    }
  }, [orderList?.orders])

  useEffect(() => {
    if (orderList.loading) return
    let _totalPages
    if (pagination?.total) {
      _totalPages = Math.ceil(pagination?.total / ordersPerPage)
    } else if (orderList.orders.length > 0) {
      _totalPages = Math.ceil(orderList.orders.length / ordersPerPage)
    }
    const _currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost)
    setTotalOrders(pagination?.total)
    setTotalPages(_totalPages)
    setCurrentOrders(_currentOrders)
  }, [orderList, currentPage, pagination])

  return (
    <>
      <OrdersListContainer>
        {orderList.loading ? (
          [...Array(10).keys()].map(i => (
            <OrderCard key={i}>
              <OrderHeader>
                <Skeleton width={100} height={30} />
                <div>
                  <Skeleton width={150} />
                  <ViewDetails>
                    <Skeleton width={100} />
                  </ViewDetails>
                </div>
              </OrderHeader>
              <CardContent>
                <BusinessInfo>
                  <WrapperImage isSkeleton>
                    <Skeleton width={45} height={45} />
                  </WrapperImage>
                  <div className='info'>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={100} /></p>
                  </div>
                </BusinessInfo>
                <BusinessInfo>
                  <WrapperImage isSkeleton>
                    <Skeleton width={45} height={45} />
                  </WrapperImage>
                  <div className='info'>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={100} /></p>
                  </div>
                </BusinessInfo>
              </CardContent>
            </OrderCard>
          ))
        ) : (
          <>
            {currentOrders?.map(order => (
              <OrderCard
                key={order.id}
                active={interActionMapOrder?.id === order.id}
                onClick={(e) => handleOrderClick(e, order)}
              >
                <OrderHeader>
                  <h2>{t('ORDER_NO', 'Order No.')} {order?.id}</h2>
                  <div>
                    <p>{parseDate(order?.delivery_datetime, { utc: false })}</p>
                    <ViewDetails
                      className='view-details'
                      onClick={() => handleOpenOrderDetail(order)}
                    >
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
                  <DriverSelectorWrapper
                    className='driver-selector'
                  >
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
            ))}
          </>
        )}
      </OrdersListContainer>
      {pagination && (
        <WrapperPagination>
          {!orderList.loading && totalPages > 0 && (
            <OrdersPagination
              ordersPerPage={ordersPerPage}
              totalOrders={totalOrders}
              currentPage={currentPage}
              totalPages={totalPages}
              prevPaginate={prevPaginate}
              nextPaginate={nextPaginate}
            />
          )}
        </WrapperPagination>
      )}
    </>
  )
}
