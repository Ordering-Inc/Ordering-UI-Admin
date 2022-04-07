import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { OpenCartsHeader } from '../OpenCartsHeader'
import { OpenCartListing as OpenCartListingController } from './naked'
import { OpenCartsDetail } from '../OpenCartsDetail'
import { OpenCartList } from '../OpenCartList'
import {
  OpenCartsContainer,
  OpenCartsContent,
  OpenCartsInnerContent,
  WrapItemView,
  WrapperIndicator
} from './styles'

const OpenCartListingUI = (props) => {
  const {
    searchValue,
    businessesList,
    citiesList,
    filterValues,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleDeleteMultiOrders,
    handleSelectedCartIds,
    selectedCartIds,
    setSelectedCartIds,
    cartList,
    pagination,
    getCartList,
    onCartRedirect
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [isOpenCartDetail, setIsOpenCartDetail] = useState(false)
  const [cartDetailId, setCartDetailId] = useState(null)
  const [detailsCart, setDetailsCart] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)

  const handleBackRedirect = () => {
    setIsOpenCartDetail(false)
    setDetailsCart(null)
    setCartDetailId(null)
    onCartRedirect()
  }

  const handleOpenCartDetail = (cart) => {
    setDetailsCart(cart)
    setCartDetailId(cart.id)
    setIsOpenCartDetail(true)
    onCartRedirect(cart?.id)
  }

  useEffect(() => {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedCartIds.length)
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete])

  useEffect(() => {
    if (selectedCartIds.length === 0) {
      setTimeout(() => {
        setTotalSelectedOrder(0)
      }, 500)
    }
  }, [selectedCartIds])

  useEffect(() => {
    const id = query.get('id')
    if (id === null || (!cartList?.loading && cartList?.carts.length === 0)) {
      setIsOpenCartDetail(false)
      return
    }
    if (!cartList?.loading) {
      const found = cartList?.carts.find(_cart => _cart.id === parseInt(id))
      setCartDetailId(parseInt(id))
      if (found) {
        setDetailsCart(found)
        setIsOpenCartDetail(true)
      } else {
        handleBackRedirect()
      }
    }
  }, [cartList])

  return (
    <>
      <OpenCartsContainer>
        <OpenCartsHeader
          searchValue={searchValue}
          citiesList={citiesList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedCartIds={selectedCartIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
        />
        <OpenCartsContent>
          <OpenCartsInnerContent className='order-content'>
            <WrapItemView>
              <OpenCartList
                setSelectedCartIds={setSelectedCartIds}
                cartList={cartList}
                pagination={pagination}
                selectedCartIds={selectedCartIds}
                cartDetailId={cartDetailId}
                getCartList={getCartList}
                handleSelectedCartIds={handleSelectedCartIds}
                handleOpenCartDetail={handleOpenCartDetail}
              />
            </WrapItemView>
          </OpenCartsInnerContent>
        </OpenCartsContent>
      </OpenCartsContainer>
      {isOpenCartDetail && (
        <OpenCartsDetail
          open={isOpenCartDetail}
          cart={detailsCart}
          cartId={cartDetailId}
          onClose={() => handleBackRedirect()}
        />
      )}
      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {setSelectedCartIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}
    </>

  )
}

export const OpenCartListing = (props) => {
  const openCartsProps = {
    ...props,
    UIComponent: OpenCartListingUI,
    isSearchByCartId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    isSearchByBusinessName: true
  }
  return <OpenCartListingController {...openCartsProps} />
}
