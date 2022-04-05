import React, { useEffect, useState } from 'react'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Square, CheckSquareFill } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'
import {
  CartsContainer,
  Table,
  OrderTbody,
  OrderNumberContainer,
  CheckBox,
  WrapperImage,
  Image,
  BusinessInfo,
  CustomerInfo,
  WrapOrderStatusSelector,
  WrapperPagination
} from './styles'

export const OpenCartsList = (props) => {
  const {
    isSelectedOrders,
    cartList,
    pagination,
    selectedOrderIds,
    cartDetailId,
    getCartList,
    handleSelectedOrderIds,
    handleOpenOrderDetail,
    setSelectedOrderIds
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parsePrice, parseDate, optimizeImage }] = useUtils()

  const [isAllChecked, setIsAllChecked] = useState(false)

  const handleChangePage = (page) => {
    getCartList(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getCartList(pageSize, expectedPage)
  }

  const [openPopover, setOpenPopover] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    id: true,
    business: true,
    customer: true,
    city: true,
    last_update: true,
    total: true
  })

  const optionsDefault = [
    {
      value: 'id',
      content: t('ID', 'ID')
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
      value: 'city',
      content: t('CITY', 'City')
    },
    {
      value: 'last_update',
      content: t('LAST_UPDATE', 'Last update')
    },
    {
      value: 'total',
      content: t('EXPORT_TOTAL', 'Total')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const handleClickOrder = (cart, e) => {
    const inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'))
    if (inValid) return
    handleOpenOrderDetail(cart)
  }

  const handleSelecteAllOrder = () => {
    const orderIds = cartList.carts.reduce((ids, cart) => [...ids, cart.id], [])
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

  useEffect(() => {
    if (cartList.loading) return
    const orderIds = cartList.carts.reduce((ids, cart) => [...ids, cart.id], [])
    const _isAllChecked = orderIds.every(elem => selectedOrderIds.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [cartList.carts, selectedOrderIds])

  return (
    <>
      <CartsContainer
        id='cartTable'
        isSelectedOrders={isSelectedOrders}
      >
        <Table
          className='carts_table'
          isSelectedOrders={isSelectedOrders}
        >
          <thead>
            <tr>
              <th className='carts-id'>
                <CheckBox
                  isChecked={!cartList.loading && isAllChecked}
                  onClick={() => handleSelecteAllOrder()}
                  className='orderCheckBox'
                >
                  {(!cartList.loading && isAllChecked) ? (
                    <CheckSquareFill />
                  ) : (
                    <Square />
                  )}
                </CheckBox>
                {allowColumns?.id && <span className='bold'>{t('ID', 'ID')}</span>}
              </th>
              {allowColumns?.business && (
                <th className='businessInfo'>{t('BUSINESS', 'Business')}</th>
              )}
              {allowColumns?.customer && (
                <th className='customerInfo'>{t('CUSTOMER', 'Customer')}</th>
              )}
              {allowColumns?.last_update && (
                <th className='last-update'>{t('LAST_UPDATE', 'Last update')}</th>
              )}
              {allowColumns?.total && (
                <th className='total'>{t('TOTAL', 'Total')}</th>
              )}
              <th className='allow-colums'>
                <ColumnAllowSettingPopover
                  open={openPopover}
                  title={t('DISPLAYED_DATA_ORDER', 'Displayed data the order')}
                  allowColumns={allowColumns}
                  optionsDefault={optionsDefault}
                  onClick={() => setOpenPopover(!openPopover)}
                  onClose={() => setOpenPopover(false)}
                  handleChangeAllowColumns={handleChangeAllowColumns}
                />
              </th>
            </tr>
          </thead>
          {cartList.loading ? (
            [...Array(10).keys()].map(i => (
              <OrderTbody key={i}>
                <tr>
                  <td className='carts-id'>
                    <OrderNumberContainer>
                      <CheckBox>
                        <Skeleton width={20} height={20} />
                      </CheckBox>
                      <div className='info'>
                        {allowColumns?.id && (
                          <p><Skeleton width={50} height={25} /></p>
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
                      <div>
                        <CustomerInfo>
                          <Skeleton width={45} height={45} />
                          <div className='info'>
                            <p className='bold'><Skeleton width={100} /></p>
                            <p><Skeleton width={100} /></p>
                          </div>
                        </CustomerInfo>
                      </div>
                    </td>
                  )}
                  {allowColumns?.last_update && (
                    <td className='last-update'>
                      <WrapOrderStatusSelector>
                        <Skeleton width={120} height={20} />
                      </WrapOrderStatusSelector>
                    </td>
                  )}
                  {allowColumns?.total && (
                    <td className='total'>
                      <WrapOrderStatusSelector>
                        <Skeleton width={100} height={20} />
                      </WrapOrderStatusSelector>
                    </td>
                  )}
                  <td>
                    <div className='info'>
                      <p className='bold'><Skeleton width={60} /></p>
                    </div>
                  </td>
                </tr>
              </OrderTbody>
            ))
          ) : (
            cartList.carts.map((cart, i) => (
              <OrderTbody
                key={i}
                className={parseInt(cartDetailId) === cart.id ? 'active' : ''}
                isCustomStyle={isSelectedOrders}
                onClick={(e) => handleClickOrder(cart, e)}
              >
                <tr>
                  <td
                    className='carts-id'
                  >
                    <OrderNumberContainer>
                      {!isSelectedOrders && (
                        <CheckBox
                          isChecked={selectedOrderIds.includes(cart?.id)}
                          onClick={() => handleSelectedOrderIds(cart.id)}
                          className='orderCheckBox'
                        >
                          {selectedOrderIds.includes(cart?.id) ? (
                            <CheckSquareFill />
                          ) : (
                            <Square />
                          )}
                        </CheckBox>
                      )}
                      <div className='info'>
                        {allowColumns?.id && (
                          <p className='bold'>{cart?.id}</p>
                        )}
                      </div>
                    </OrderNumberContainer>
                  </td>
                  {allowColumns?.business && (
                    <td className='businessInfo'>
                      <BusinessInfo>
                        <WrapperImage>
                          <Image bgimage={optimizeImage(cart.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                        </WrapperImage>
                        <div className='info'>
                          <p className='bold'>{cart?.business?.name}</p>
                          {allowColumns?.city && (
                            <p>{cart?.business?.address}</p>
                          )}
                        </div>
                      </BusinessInfo>
                    </td>
                  )}
                  {allowColumns?.customer && (
                    <td className='customerInfo'>
                      <div>
                        <CustomerInfo>
                          <WrapperImage>
                            {cart?.user?.photo ? (
                              <Image bgimage={optimizeImage(cart?.user?.photo, 'h_50,c_limit')} />
                            ) : (
                              <FaUserAlt />
                            )}
                          </WrapperImage>
                          <div className='info'>
                            <p className='bold'>{cart?.user?.name} {cart?.user?.lastname}</p>
                            <p>{cart?.user?.cellphone || cart?.user?.phone}</p>
                          </div>
                        </CustomerInfo>
                      </div>
                    </td>
                  )}
                  {allowColumns?.last_update && (
                    <td className='last-update'>
                      <div className='info'>
                        <p className='bold'>
                          {cart?.updated_at && parseDate(cart?.updated_at, { outputFormat: 'MM/DD/YY • HH:mm a' })}
                        </p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.total && (
                    <td className='total'>
                      <div className='info'>
                        <p className='bold'>{parsePrice(cart?.summary?.total)}</p>
                      </div>
                    </td>
                  )}
                  <td />
                </tr>
              </OrderTbody>
            ))
          )}
        </Table>
      </CartsContainer>

      {pagination && (
        <WrapperPagination>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            handleChangePage={handleChangePage}
            defaultPageSize={pagination.pageSize}
            handleChangePageSize={handleChangePageSize}
          />
        </WrapperPagination>
      )}
    </>
  )
}
