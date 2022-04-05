import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession } from 'ordering-components-admin'
import { OpenCartsHeader } from '../OpenCartsHeader'
import { OpenCartListing as OpenCartListingController } from './naked'
import { OpenCartsList } from '../OpenCartsList'
import {
  OpenCartsContainer,
  OpenCartsContent,
  OpenCartsInnerContent,
  WrapItemView,
  WrapperIndicator
} from './styles'
import { OpenCartsDetail } from '../OpenCartsDetail'

const OpenCartListingUI = (props) => {
  const {
    isSelectedOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    filterValues,
    // deletedOrderId,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    selectedOrderIds,
    setSelectedOrderIds,
    cartList,
    pagination,
    getCartList
  } = props
  const [{ user }] = useSession()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [cartDetailId, setCartDetailId] = useState(null)
  const [detailsCart, setDetailsCart] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    setDetailsCart(null)
    setCartDetailId(null)
  }

  const handleOpenOrderDetail = (cart) => {
    setDetailsCart(cart)
    setCartDetailId(cart.id)
    setIsOpenOrderDetail(true)
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
        setCartDetailId(id)
        setIsOpenOrderDetail(true)
      }
    }
  }, [user])

  return (
    <>
      <OpenCartsContainer>
        <OpenCartsHeader
          isDisableTitle={isSelectedOrders}
          isDisableControl={isSelectedOrders}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          citiesList={citiesList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
        />
        <OpenCartsContent>
          <OpenCartsInnerContent className='order-content'>
            <WrapItemView>
              <OpenCartsList
                setSelectedOrderIds={setSelectedOrderIds}
                isSelectedOrders={isSelectedOrders}
                cartList={cartList}
                driversList={driversList}
                pagination={pagination}
                selectedOrderIds={selectedOrderIds}
                cartDetailId={cartDetailId}
                getCartList={getCartList}
                handleSelectedOrderIds={handleSelectedOrderIds}
                handleOpenOrderDetail={handleOpenOrderDetail}
              />
            </WrapItemView>
          </OpenCartsInnerContent>
        </OpenCartsContent>
      </OpenCartsContainer>
      {isOpenOrderDetail && (
        <OpenCartsDetail
          isSelectedOrders={isSelectedOrders}
          open={isOpenOrderDetail}
          cart={detailsCart}
          cartId={cartDetailId}
          driversList={driversList}
          onClose={() => handleBackRedirect()}
        />
      )}
      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}
    </>

  )
}

export const OpenCartListing = (props) => {
  const openCartsProps = {
    ...props,
    UIComponent: OpenCartListingUI
  }
  return <OpenCartListingController {...openCartsProps} />
}
