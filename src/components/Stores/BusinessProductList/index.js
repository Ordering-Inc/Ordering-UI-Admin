import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ColumnAllowSettingPopover, NotFoundSource, Pagination, SideBar } from '../../Shared'
import { SingleBusinessProduct } from '../SingleBusinessProduct'
import { BusinessSpreadSheet } from '../BusinessSpreadSheet'
import { BusinessProductAddForm } from '../BusinessProductAddForm'

import {
  ListContent,
  ProductListContainer,
  BusinessProductListTable,
  WrapperNotFound,
  AddProductBtn,
  ProductListSpreadContainer,
  ProductListBottom
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
    isParentProductAdd,
    handleParentProductAdd,
    allowSpreadColumns
  } = props
  const [, t] = useLanguage()

  const [openPopover, setOpenPopover] = useState(false)
  const [isAddProduct, setIsAddProduct] = useState(false)
  const [dataSelected, setDataSelected] = useState('')
  const [allowColumns, setAllowColumns] = useState({
    products: true,
    description: true,
    price: true,
    // offer_price: true,
    cost_price: true,
    tax: true,
    fee: true
  })

  const optionsDefault = [
    {
      value: 'products',
      content: t('PRODUCTS', 'Products')
    },
    {
      value: 'description',
      content: t('DESCRIPTION', 'Description')
    },
    {
      value: 'price',
      content: t('PRICE', 'Price')
    },
    // {
    //   value: 'offer_price',
    //   content: t('REQULAR_PRICE', 'Regular Price')
    // },
    {
      value: 'cost_price',
      content: t('PRODUCT_COST', 'Product cost')
    },
    {
      value: 'tax',
      content: t('TAX', 'Tax')
    },
    {
      value: 'fee',
      content: t('FEE', 'Fee')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)

  // Get current products
  const [currentProducts, setCurrentProducts] = useState([])

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * productsPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setProductsPerPage(pageSize)
  }

  useEffect(() => {
    if (categoryState.loading) return
    const indexOfLastPost = currentPage * productsPerPage
    const indexOfFirstPost = indexOfLastPost - productsPerPage
    const _currentProducts = categoryState.products.slice(indexOfFirstPost, indexOfLastPost)
    setCurrentProducts(_currentProducts)
  }, [categoryState, currentPage, productsPerPage])

  return (
    <ListContent>
      {viewMethod === 'list' && (
        <>
          <ProductListContainer>
            <BusinessProductListTable>
              <thead>
                <tr>
                  {allowColumns?.products && (
                    <th>{t('PRODUCTS', 'Products')}</th>
                  )}
                  {allowColumns?.description && (
                    <th className='description'>{t('DESCRIPTION', 'Description')}</th>
                  )}
                  {allowColumns?.price && (
                    <th className='price'>{t('PRICE', 'Price')}</th>
                  )}
                  {allowColumns?.offer_price && (
                    <th className='regular-price'>{t('REGULAR_PRICE', 'Regular Price')}</th>
                  )}
                  {allowColumns?.cost_price && (
                    <th className='regular-price'>{t('PRODUCT_COST', 'Product cost')}</th>
                  )}
                  {allowColumns?.tax && (
                    <th className='tax'>{t('TAX', 'Tax')}</th>
                  )}
                  {allowColumns?.fee && (
                    <th className='fee'>{t('FEE', 'Fee')}</th>
                  )}
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
                    currentProducts.sort((a, b) => a.rank - b.rank).map((product, i) => (
                      <SingleBusinessProduct
                        {...props}
                        key={i}
                        productDetailsId={productDetailsId}
                        product={product}
                        allowColumns={allowColumns}
                        business={businessState?.business}
                        handleOpenProductDetails={handleOpenProductDetails}
                        dataSelected={dataSelected}
                        setDataSelected={setDataSelected}
                        category={categoryState}
                        isLastProduct={currentProducts.length - 1 === i}
                      />
                    ))
                  }
                </>
              )}
            </BusinessProductListTable>
          </ProductListContainer>
          <ProductListBottom>
            {
              !businessState.loading && businessState?.business?.categories?.length > 0 && (
                <AddProductBtn
                  onClick={() => handleParentProductAdd(true)}
                >
                  {t('ADD_NEW_PRODUCT', 'Add new product')}
                </AddProductBtn>
              )
            }

            {
              !businessState.loading && categoryState?.products?.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(categoryState?.pagination?.totalItems / productsPerPage)}
                  handleChangePage={handleChangePage}
                  defaultPageSize={productsPerPage}
                  handleChangePageSize={handleChangePageSize}
                />
              )
            }
          </ProductListBottom>

          {
            !businessState.loading && businessState?.business?.categories?.length === 0 && (
              <WrapperNotFound>
                {t('CREATE_CATEGORY_BEFORE_PRODUCT', 'Please create a category before adding your products.')}
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
                  allowSpreadColumns={allowSpreadColumns}
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
      {
        (isAddProduct || isParentProductAdd) && (
          <SideBar
            sidebarId='productAddForm'
            open={isAddProduct || isParentProductAdd}
            onClose={() => {
              setIsAddProduct(false)
              handleParentProductAdd && handleParentProductAdd(false)
            }}
          >
            <BusinessProductAddForm
              {...props}
              business={businessState?.business}
              setIsAddProduct={setIsAddProduct}
            />
          </SideBar>
        )
      }
    </ListContent>
  )
}
