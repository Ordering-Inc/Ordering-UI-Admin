import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { SingleBusinessProduct } from '../SingleBusinessProduct'
import { ColumnAllowSettingPopover } from '../ColumnAllowSettingPopover'
import { BusinessProductCreator } from '../BusinessProductCreator'
import { BusinessSpreadSheet } from '../BusinessSpreadSheet'

import {
  ListContent,
  ProductListContainer,
  BusinessProductListTable,
  WrapperNotFound,
  AddProductBtn,
  ProductListSpreadContainer
} from './styles'

export const BusinessProductList = (props) => {
  const {
    productDetailsId,
    categoryState,
    viewMethod,
    businessState,
    searchValue,
    errorQuantityProducts,
    handleSearchRedirect,
    handleChangeSearch,
    handleOpenProductDetails,
    isParentProductAdd
  } = props
  const [, t] = useLanguage()

  const [openPopover, setOpenPopover] = useState(false)
  const [isAddProduct, setIsAddProduct] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    business: true,
    price: true,
    description: true
  })

  const optionsDefault = [
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'price',
      content: t('PRICE', 'Price')
    },
    {
      value: 'description',
      content: t('DESCRIPTION', 'Description')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  return (
    <ListContent>
      {viewMethod === 'list' && (
        <>
          <ProductListContainer>
            <BusinessProductListTable>
              <thead>
                <tr>
                  {allowColumns?.business && (
                    <th className='business'>{t('BUSINESS', 'Business')}</th>
                  )}
                  {allowColumns?.price && (
                    <th className='price'>{t('PRICE', 'Price')}</th>
                  )}
                  {allowColumns?.description && (
                    <th className='description'>{t('DESCRIPTION', 'Description')}</th>
                  )}
                  <th>{t('ACTIONS', 'Actions')}</th>
                  <th className='more'>
                    <ColumnAllowSettingPopover
                      open={openPopover}
                      allowColumns={allowColumns}
                      optionsDefault={optionsDefault}
                      onClick={() => setOpenPopover(!openPopover)}
                      onClose={() => setOpenPopover(false)}
                      handleChangeAllowColumns={handleChangeAllowColumns}
                    />
                  </th>
                </tr>
              </thead>
              {(categoryState.loading || businessState.loading) ? (
                [...Array(30).keys()].map(i => (
                  <SingleBusinessProduct
                    key={i}
                    isSkeleton
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                  />
                ))
              ) : (
                <>
                  {
                    categoryState.products.map((product, i) => (
                      <SingleBusinessProduct
                        {...props}
                        key={i}
                        productDetailsId={productDetailsId}
                        product={product}
                        allowColumns={allowColumns}
                        business={businessState?.business}
                        handleOpenProductDetails={handleOpenProductDetails}
                      />
                    ))
                  }
                  {
                    (isAddProduct || isParentProductAdd) && (
                      <BusinessProductCreator
                        {...props}
                        allowColumns={allowColumns}
                        setIsAddProduct={setIsAddProduct}
                        business={businessState?.business}
                      />
                    )
                  }
                </>
              )}
            </BusinessProductListTable>
            {
              !businessState.loading && !isAddProduct && (
                <AddProductBtn onClick={() => setIsAddProduct(true)}>{t('ADD_NEW_PRODUCT', 'Add new product')}</AddProductBtn>
              )
            }
          </ProductListContainer>

          {
            !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !((searchValue && errorQuantityProducts) || (!searchValue && !errorQuantityProducts)) && (
              <WrapperNotFound>
                <NotFoundSource
                  content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
                  btnTitle={!searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters')}
                  onClickButton={() => !searchValue ? handleSearchRedirect() : handleChangeSearch('')}
                />
              </WrapperNotFound>
            )
          }
        </>
      )}

      {
        viewMethod === 'spreedsheet' && (
          <>
            <ProductListSpreadContainer>
              {(categoryState.loading || businessState.loading) ? (
                [...Array(30).keys()].map(i => (
                  <SingleBusinessProduct
                    key={i}
                    isSkeleton
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                  />
                ))
              ) : (
                <BusinessSpreadSheet
                  {...props}
                  business={businessState?.business}
                />
              )}
            </ProductListSpreadContainer>
            {
              !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !((searchValue && errorQuantityProducts) || (!searchValue && !errorQuantityProducts)) && (
                <WrapperNotFound>
                  <NotFoundSource
                    content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
                    btnTitle={!searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters')}
                    onClickButton={() => !searchValue ? handleSearchRedirect() : handleChangeSearch('')}
                  />
                </WrapperNotFound>
              )
            }
          </>
        )
      }
    </ListContent>
  )
}
