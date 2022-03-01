import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useSession } from 'ordering-components-admin'
import { OpenCartsHeader } from '../OpenCartsHeader'
import { OpenCarts as OpenCartsController } from './naked'
import { OpenCartsDashboard } from '../OpenCartsDashboard'
import {
  OpenCartsContainer,
  OpenCartsContent,
  OpenCartsInnerContent,
  WrapItemView
} from './styles'
import { OpenCartsDetail } from '../OpenCartsDetail'

const OpenCartsUI = (props) => {
  const {
    isSelectedOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    selectedOrderIds,
    onOrderRedirect,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus,
    handleCustomOrderDetail,
    setSelectedOrderIds
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    setDetailsOrder(null)
    setOrderDetailId(null)
    if (!isSelectedOrders) {
      onOrderRedirect()
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(false)
    }
  }

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
    if (!isSelectedOrders) {
      onOrderRedirect(order.id)
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true)
    }
  }

  useEffect(() => {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedOrderIds.length)
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete])

  useEffect(() => {
    if (selectedOrderIds.length === 0) {
      setTimeout(() => {
        setTotalSelectedOrder(0)
      }, 500)
    }
  }, [selectedOrderIds])

  useEffect(() => {
    if (isSelectedOrders) return
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      if (user?.level === 5) {
        handleBackRedirect()
      } else {
        setOrderDetailId(id)
        onOrderRedirect && onOrderRedirect(id)
        setIsOpenOrderDetail(true)
      }
    }
  }, [user])

  return (
    <>
      <OpenCartsContainer>
        <OpenCartsHeader />
        <OpenCartsContent>
          <OpenCartsInnerContent className='order-content'>
            <WrapItemView>
              <OpenCartsDashboard
                isSelectedOrders={isSelectedOrders}
                driverId={props.driverId}
                customerId={props.customerId}
                businessId={props.businessId}
                searchValue={searchValue}
                filterValues={filterValues}
                selectedOrderIds={selectedOrderIds}
                deletedOrderId={deletedOrderId}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                selectedSubOrderStatus={selectedSubOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
                orderDetailId={orderDetailId}
                handleOpenOrderDetail={handleOpenOrderDetail}
                setSelectedOrderIds={setSelectedOrderIds}
              />
            </WrapItemView>
          </OpenCartsInnerContent>
        </OpenCartsContent>
      </OpenCartsContainer>
      {isOpenOrderDetail && (
        <OpenCartsDetail
          isSelectedOrders={isSelectedOrders}
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          driversList={driversList}
          onClose={() => handleBackRedirect()}
        />
      )}
    </>

  )
}

export const OpenCarts = (props) => {
  const openCartsProps = {
    ...props,
    UIComponent: OpenCartsUI
  }
  return <OpenCartsController {...openCartsProps} />
}
