import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { SearchBar } from '../SearchBar'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { Switch } from '../../styles/Switch'
import { Pagination } from '../Pagination'
import { productsList } from './dumy'
import { OrderingProductsDetail } from '../OrderingProductsDetail'
import {
  OrderingProductsContainer,
  HeaderContainer,
  ActionsGroup,
  HeaderTitleContainer,
  ProductListTable,
  PageTbody,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  PagesBottomContainer,
  AddNewPageButton,
  ProductListTableWrapper
} from './styles'

export const OrderingProducts = (props) => {
  const [, t] = useLanguage()
  const [orderingProductsList, setorderingProductsList] = useState({ products: [], loading: false, error: null })
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openProductDetail, setOpenProductDetail] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchValue, setSearchValue] = useState(null)

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const onClickPage = (e, pageId) => {
    const isInvalid = e.target.closest('.product-enabled') || e.target.closest('.product-actions')
    if (isInvalid) return
    handleEditProduct(pageId)
  }

  const handleEditProduct = (id) => {
    setOpenProductDetail(true)
    if (id) {
      const product = orderingProductsList?.products.find(product => product.id === id)
      setSelectedProduct(product)
    } else {
      setSelectedProduct(null)
    }
  }

  const handleChangeState = (id, type, value) => {
    const products = orderingProductsList?.products.map(product => {
      if (id === product.id) {
        return {
          ...product,
          [type]: value
        }
      }
      return product
    })
    handleUpdateOrderingProducts(products)
  }

  const handleDeleteProduct = (id) => {
    const products = orderingProductsList?.products.filter(product => product.id !== id)
    setorderingProductsList({ ...orderingProductsList, products: products })
  }

  const handleUpdateOrderingProducts = (products) => {
    setorderingProductsList({ ...orderingProductsList, products: products })
    if (selectedProduct) {
      const product = products.find(item => item.id === selectedProduct.id)
      setSelectedProduct(product)
    }
  }

  const handleCloseDetail = () => {
    setOpenProductDetail(false)
    setSelectedProduct(null)
  }

  useEffect(() => {
    if (orderingProductsList.loading) return
    let _totalPages
    if (orderingProductsList.products.length > 0) {
      _totalPages = Math.ceil(orderingProductsList.products.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentProducts = orderingProductsList.products.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentProducts)
  }, [orderingProductsList, currentPage, pagesPerPage])

  useEffect(() => {
    setorderingProductsList({ ...orderingProductsList, products: productsList })
  }, [])

  useEffect(() => {
    if (searchValue) {
      const products = productsList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      setorderingProductsList({ ...orderingProductsList, products: products })
    } else {
      setorderingProductsList({ ...orderingProductsList, products: productsList })
    }
  }, [searchValue])

  return (
    <>
      <OrderingProductsContainer>
        <HeaderContainer>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('ORDERING_PRODUCTS', 'Ordering Products')}</h1>
          </HeaderTitleContainer>
          <ActionsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleEditProduct()}
            >
              {t('ADD_PRODUCT', 'Add product')}
            </Button>
            <SearchBar
              search={searchValue}
              onSearch={(value) => setSearchValue(value)}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsGroup>
        </HeaderContainer>
        <ProductListTableWrapper>
          <ProductListTable>
            <thead>
              <tr>
                <th className='product'>{t('PRODUCT', 'Product')}</th>
                <th className='description'>{t('DESCRIPTION', 'Description')}</th>
                <th className='action'>{t('ACTIONS', 'Actions')}</th>
              </tr>
            </thead>
            {orderingProductsList.loading ? (
              [...Array(pagesPerPage).keys()].map(i => (
                <PageTbody key={i}>
                  <tr>
                    <td className='product'><Skeleton width={100} /></td>
                    <td className='description'><Skeleton width={150} /></td>
                    <td className='action'>
                      <ActionsContainer>
                        <EnableWrapper>
                          <Skeleton width={50} />
                        </EnableWrapper>
                        <ActionSelectorWrapper>
                          <Skeleton width={15} />
                        </ActionSelectorWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </PageTbody>
              ))
            ) : (
              currentPages.map(product => (
                <PageTbody
                  key={product.id}
                  onClick={e => onClickPage(e, product.id)}
                  active={selectedProduct?.id === product.id}
                >
                  <tr>
                    <td className='product'>
                      {product?.name}
                    </td>
                    <td className='description'>
                      <div>
                        {product?.description}
                      </div>
                    </td>
                    <td className='action'>
                      <ActionsContainer>
                        <EnableWrapper className='product-enabled'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            defaultChecked={product?.enabled}
                            onChange={(enabled) => handleChangeState(product.id, 'enabled', enabled)}
                          />
                        </EnableWrapper>
                        <ActionSelectorWrapper className='product-actions'>
                          <DropdownButton
                            menuAlign={theme?.rtl ? 'left' : 'right'}
                            title={<FiMoreVertical />}
                            id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                          >
                            <Dropdown.Item
                              onClick={() => handleEditProduct(product.id)}
                            >
                              {t('EDIT', 'Edit')}
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              {t('DELETE', 'Delete')}
                            </Dropdown.Item>
                          </DropdownButton>
                        </ActionSelectorWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </PageTbody>
              ))
            )}
          </ProductListTable>
        </ProductListTableWrapper>

        {!orderingProductsList.loading && (
          <PagesBottomContainer>
            <AddNewPageButton onClick={() => handleEditProduct(null)}>
              {t('ADD_PRODUCT', 'Add product')}
            </AddNewPageButton>
            {orderingProductsList?.products?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pagesPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </OrderingProductsContainer>
      {
        openProductDetail && (
          <OrderingProductsDetail
            open={openProductDetail}
            onClose={handleCloseDetail}
            product={selectedProduct}
            handleChangeState={handleChangeState}
            orderingProductsList={orderingProductsList}
            handleUpdateOrderingProducts={handleUpdateOrderingProducts}
          />
        )
      }
    </>
  )
}
