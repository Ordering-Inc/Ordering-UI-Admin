import React, { useState } from 'react'
import { useLanguage, useSession, useOrder, useUtils, useConfig } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { GeoAlt, Cart3, List, PersonFill, StarFill, ArrowLeft, Search } from 'react-bootstrap-icons'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'
import { SearchBar, DragScroll } from '../../Shared'
import { Button } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Container,
  DesktopHeader,
  DesktopBackground,
  ProductInfoModalPreview,
  MobileContentMask,
  Contentheader,
  HeaderLogo,
  HeaderInfo,
  AddressWrapper,
  MomentWrapper,
  OrderTypeWrapper,
  CartWrapper,
  UserWrapper,
  ContentWrapper,
  BusinessInfoContainer,
  BusinessInfoContent,
  BusinessInfo,
  BusinessInfoItem,
  BusinessDetail,
  WrapperSearch,
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessMoreDetail,
  BusinessProductContainer,
  BusinessProductListWrapper,
  BusinessCartWrapper,
  CategoryWrapper,
  Tab,
  CardContainer,
  CardInfo,
  PriceWrapper,
  WrapLogo,
  CardLogo,
  SoldOut,
  BusinessProductList,
  ProductsListing,
  WrapAllCategories,
  BusinessCartContent,
  EmptyCart,
  EmptyBtnWrapper,
  MobileHeaderWrapper,
  MobileCartViewWrapper
} from './styles'

export const BusinessPreview = (props) => {
  const {
    business,
    isMobileView
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [sessionState] = useSession()
  const [orderState] = useOrder()
  const { width } = useWindowSize()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setSelectedCateogry] = useState({ id: 'all' })

  let pos = { top: 0, left: 0, x: 0, y: 0 }
  const ele = document.getElementById('product_mobile_view')

  const types = ['food', 'laundry', 'alcohol', 'groceries']

  const mouseDownHandler = (e) => {
    if (!isMobileView) return
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'
    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y
    ele.scrollTop = pos.top - dy
    ele.scrollLeft = pos.left - dx
  }

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')
  }

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  const convertHoursToMinutes = (time) => {
    const [, t] = useLanguage()
    if (!time) return '0min'
    const [hour, minute] = time.split(':')
    const result = (parseInt(hour, 10) * 60) + parseInt(minute, 10)
    return `${result}${t('MIN', 'min')}`
  }

  return (
    <Container
      isMobileView={isMobileView}
    >
      {!isMobileView && (
        <DesktopHeader>
          <div />
          <div />
          <div />
        </DesktopHeader>
      )}
      <DesktopBackground
        isMobileView={isMobileView}
      >
        <ProductInfoModalPreview
          isMobileView={isMobileView}
          src={theme.images.general.mobileCase}
        >
          <MobileContentMask
            isMobileView={isMobileView}
            src={theme.images.general.mobileMask}
            id='product_mobile_view'
            onMouseDown={mouseDownHandler}
          >
            {
              (!isMobileView && width > 650) && (
                <Contentheader>
                  <HeaderLogo>
                    <img alt='Logotype' width='100px' height='30px' src={theme?.images?.logos?.logotype} loading='lazy' />
                  </HeaderLogo>
                  <HeaderInfo>
                    <AddressWrapper>
                      <GeoAlt />
                      <span>New York</span>
                    </AddressWrapper>
                    <MomentWrapper>
                      <span>{t('ASAP_ABBREVIATION', 'ASAP')}</span>
                    </MomentWrapper>
                    <OrderTypeWrapper>
                      <span>{t('DELIVERY', 'Delivery')}</span>
                    </OrderTypeWrapper>
                  </HeaderInfo>
                  <CartWrapper>
                    <Cart3 />
                    <span>0</span>
                  </CartWrapper>
                  <UserWrapper>
                    <List />
                    <div>
                      {sessionState?.user?.photo ? (
                        <img src={sessionState?.user?.photo} />
                      ) : (
                        <PersonFill />
                      )}
                    </div>
                  </UserWrapper>
                </Contentheader>
              )
            }
            <ContentWrapper>
              {!isMobileView && (
                <BusinessInfoContainer isMobileView={isMobileView}>
                  <BusinessInfoContent>
                    <BusinessInfo className='info'>
                      <BusinessInfoItem>
                        <h2 className='bold'>{business?.name}</h2>
                        <p className='type'>{getBusinessType()}</p>
                        <BusinessDetail>
                          {orderState?.options.type === 1 && (
                            <>
                              <h5>
                                <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                                {business && parsePrice(business?.delivery_price || 0)}
                              </h5>
                              <span className='dot'>•</span>
                            </>
                          )}
                          {orderState?.options?.type === 1 ? (
                            <>
                              <h5>
                                {convertHoursToMinutes(business?.delivery_time)}
                              </h5>
                              <span className='dot'>•</span>
                            </>
                          ) : (
                            <>
                              <h5>
                                {convertHoursToMinutes(business?.pickup_time)}
                              </h5>
                              <span className='dot'>•</span>
                            </>
                          )}
                          <h5>
                            {parseDistance(business?.distance || 0)}
                          </h5>
                          <span className='dot'>•</span>
                          <div className='review'>
                            <StarFill className='start' />
                            <p>{business?.reviews?.total}</p>
                          </div>
                        </BusinessDetail>
                        <div className='preorder-Reviews'>
                          <span>{t('PREORDER', 'Preorder')}</span>
                          <span className='dot'>•</span>
                          {business.reviews?.reviews && <span>{t('REVIEWS', 'Reviews')}</span>}
                        </div>
                      </BusinessInfoItem>
                    </BusinessInfo>
                  </BusinessInfoContent>
                  <WrapperSearch>
                    <SearchBar
                      lazyLoad
                      placeholder={t('SEARCH', 'Search')}
                      searchValue={searchValue}
                      onSearch={val => setSearchValue(val)}
                    />
                  </WrapperSearch>
                </BusinessInfoContainer>
              )}
              {isMobileView && (
                <MobileHeaderWrapper>
                  <ArrowLeft />
                  <Search />
                </MobileHeaderWrapper>
              )}
              <BusinessContainer bgimage={business?.header} id='container' isClosed={!business?.open} isMobileView={isMobileView}>
                {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
                {!isMobileView && (
                  <BusinessContent>
                    <WrapperBusinessLogo>
                      <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                    </WrapperBusinessLogo>
                  </BusinessContent>
                )}
                <BusinessMoreDetail>
                  <BsInfoCircle />
                </BusinessMoreDetail>
              </BusinessContainer>
              {isMobileView && (
                <WrapperBusinessLogo isMobileView={isMobileView}>
                  <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                </WrapperBusinessLogo>
              )}
              {isMobileView && (
                <BusinessInfoContent>
                  <BusinessInfo className='info'>
                    <BusinessInfoItem>
                      <h2 className='bold'>{business?.name}</h2>
                      <p className='type'>{getBusinessType()}</p>
                      <BusinessDetail>
                        {orderState?.options.type === 1 && (
                          <>
                            <h5>
                              <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                              {business && parsePrice(business?.delivery_price || 0)}
                            </h5>
                            <span className='dot'>•</span>
                          </>
                        )}
                        {orderState?.options?.type === 1 ? (
                          <>
                            <h5>
                              {convertHoursToMinutes(business?.delivery_time)}
                            </h5>
                            <span className='dot'>•</span>
                          </>
                        ) : (
                          <>
                            <h5>
                              {convertHoursToMinutes(business?.pickup_time)}
                            </h5>
                            <span className='dot'>•</span>
                          </>
                        )}
                        <h5>
                          {parseDistance(business?.distance || 0)}
                        </h5>
                        <span className='dot'>•</span>
                        <div className='review'>
                          <StarFill className='start' />
                          <p>{business?.reviews?.total}</p>
                        </div>
                      </BusinessDetail>
                      <div className='preorder-Reviews'>
                        <span>{t('PREORDER', 'Preorder')}</span>
                        <span className='dot'>•</span>
                        {business.reviews?.reviews && <span>{t('REVIEWS', 'Reviews')}</span>}
                      </div>
                    </BusinessInfoItem>
                  </BusinessInfo>
                </BusinessInfoContent>
              )}
              <BusinessProductContainer>
                <BusinessProductListWrapper isMobileView={isMobileView}>
                  <CategoryWrapper className='order_status_filter'>
                    <DragScroll>
                      {business?.categories?.length > 0 && [{ id: 'all', name: t('ALL', 'All') }, ...business?.categories].map((category, i) => (
                        <Tab
                          key={i}
                          active={category?.id === selectedCategory?.id}
                          onClick={() => setSelectedCateogry(category)}
                        >
                          {category?.name}
                        </Tab>
                      ))}
                    </DragScroll>
                  </CategoryWrapper>
                  <BusinessProductList>
                    {selectedCategory?.id !== 'all' && (
                      <ProductsListing>
                        {
                          selectedCategory?.products?.map(product => (
                            <SingleProductCard
                              key={product?.id}
                              isSoldOut={(product.inventoried && !product.quantity)}
                              product={product}
                              businessId={business?.id}
                              isMobileView={isMobileView}
                            />
                          ))
                        }
                      </ProductsListing>
                    )}
                    {
                      selectedCategory?.id === 'all' && business?.categories?.map((category, i) => {
                        return (
                          <React.Fragment key={i}>
                            {
                              category?.products?.length > 0 && (
                                <WrapAllCategories id={`category${category?.id}`}>
                                  <div className='category-title'>
                                    {
                                      category?.image && (
                                        <img src={category.image} />
                                      )
                                    }
                                    <h3>{category?.name}</h3>
                                  </div>
                                  <ProductsListing>
                                    {
                                      category?.products?.map(product => (
                                        <SingleProductCard
                                          key={product?.id}
                                          isSoldOut={product.inventoried && !product.quantity}
                                          businessId={business?.id}
                                          product={product}
                                          isMobileView={isMobileView}
                                        />
                                      ))
                                    }
                                  </ProductsListing>
                                </WrapAllCategories>
                              )
                            }
                          </React.Fragment>
                        )
                      })
                    }
                  </BusinessProductList>
                </BusinessProductListWrapper>
                <BusinessCartWrapper isMobileView={isMobileView}>
                  <BusinessCartContent>
                    <EmptyCart>
                      <div className='empty-content'>
                        <Cart3 />
                        <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
                      </div>
                      <EmptyBtnWrapper>
                        <span>$0.00</span>
                        <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
                      </EmptyBtnWrapper>
                    </EmptyCart>
                  </BusinessCartContent>
                </BusinessCartWrapper>
              </BusinessProductContainer>
            </ContentWrapper>
            {isMobileView && (
              <MobileCartViewWrapper>
                <span>{parsePrice(0)}</span>
                <Button color='primary'>{t('VIEW_CART', 'View cart')}</Button>
              </MobileCartViewWrapper>
            )}
          </MobileContentMask>
        </ProductInfoModalPreview>
      </DesktopBackground>
    </Container>
  )
}

const SingleProductCard = (props) => {
  const { product, businessId, isSoldOut, isMobileView } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [stateConfig] = useConfig()
  const [orderState] = useOrder()
  const [{ parsePrice, optimizeImage }] = useUtils()

  const editMode = typeof product?.code !== 'undefined'

  const removeToBalance = editMode ? product?.quantity : 0
  const cart = orderState.carts?.[`businessId:${businessId}`]
  const productCart = cart?.products?.find(prod => prod.id === product?.id)
  const totalBalance = (productCart?.quantity || 0) - removeToBalance

  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  const productBalance = (cart?.products?.reduce((sum, _product) => sum + (product && _product.id === product?.id ? _product.quantity : 0), 0) || 0) - removeToBalance
  let maxCartProductInventory = (product?.inventoried ? product?.quantity : undefined) - productBalance
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  return (
    <CardContainer
      soldOut={isSoldOut || maxProductQuantity <= 0}
      isMobileView={isMobileView}
    >
      <CardInfo soldOut={isSoldOut || maxProductQuantity <= 0}>
        <h1>{product?.name}</h1>
        <PriceWrapper>
          <span>{parsePrice(product?.price)}</span>
        </PriceWrapper>
        <p>{product?.description}</p>
      </CardInfo>
      <WrapLogo>
        <CardLogo
          className='image'
          soldOut={isSoldOut || maxProductQuantity <= 0}
          bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_200,c_limit')}
        />
      </WrapLogo>
      {(isSoldOut || maxProductQuantity <= 0) && <SoldOut>{t('SOLD_OUT', 'SOLD OUT')}</SoldOut>}
    </CardContainer>
  )
}
