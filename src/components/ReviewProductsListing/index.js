import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, BusinessProductsListing as BusinessProductsListingController } from 'ordering-components-admin'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { List as MenuIcon, StarFill, ImageFill } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { SearchBar } from '../SearchBar'
import { IconButton } from '../../styles'
import { Pagination } from '../Pagination'
import { SideBar } from '../SideBar'
import { ProductReviewDetails } from '../ProductReviewDetails'

import {
  ReviewsListingContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ReviewsTable,
  ReviewTbody,
  WrapperImage,
  Image,
  ReviewObject,
  ReviewMarkerWrapper,
  PagesBottomContainer
} from './styles'

export const ReviewProductsListingUI = (props) => {
  const {
    businessState,
    categoryState,
    handleChangeSearch,
    searchValue
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openReview, setOpenReview] = useState(false)
  const [curProduct, setCurProduct] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)
  const [currentProducts, setCurrentProducts] = useState([])
  const [totalPages, setTotalPages] = useState(null)

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
    let _totalPages
    if (categoryState.products.length > 0) {
      _totalPages = Math.ceil(categoryState.products.length / productsPerPage)
    }
    const indexOfLastPost = currentPage * productsPerPage
    const indexOfFirstPost = indexOfLastPost - productsPerPage
    const _currentProducts = categoryState.products.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentProducts(_currentProducts)
  }, [categoryState, currentPage, productsPerPage])

  const handleOpenReview = (product) => {
    setCurProduct(product)
    setOpenReview(true)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchValue])

  return (
    <>
      <ReviewsListingContainer>
        <Header>
          <HeaderLeft>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{businessState?.loading ? <Skeleton width={150} /> : businessState?.business?.name}</h1>
          </HeaderLeft>
          <HeaderRight>
            <SearchBar
              placeholder={t('SEARCH', 'Search')}
              searchValue={searchValue}
              onSearch={handleChangeSearch}
            />
          </HeaderRight>
        </Header>
        <ReviewsTable>
          <thead>
            <tr>
              <th><ReviewObject isHeader>{t('PRODUCT', 'Product')}</ReviewObject></th>
              {/* <th><ReviewMarkerWrapper isHeader>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th> */}
            </tr>
          </thead>
          {(businessState?.loading || categoryState?.loading) ? (
            [...Array(10).keys()].map(i => (
              <ReviewTbody key={i}>
                <tr>
                  <td>
                    <ReviewObject>
                      <WrapperImage isSkeleton>
                        <Skeleton width={45} height={45} />
                      </WrapperImage>
                      <p><Skeleton width={80} /></p>
                    </ReviewObject>
                  </td>
                  {/* <td><ReviewMarkerWrapper><Skeleton width={20} /></ReviewMarkerWrapper></td> */}
                </tr>
              </ReviewTbody>
            ))
          ) : (
            currentProducts.map(product => (
              <ReviewTbody
                key={product.id}
                active={product.id === curProduct?.id}
                onClick={() => handleOpenReview(product)}
              >
                <tr>
                  <td>
                    <ReviewObject>
                      <WrapperImage>
                        {product?.images ? (
                          <Image bgimage={optimizeImage(product?.images)} />
                        ) : (
                          <ImageFill />
                        )}
                      </WrapperImage>
                      <p>{product?.name}</p>
                    </ReviewObject>
                  </td>
                  {/* <td>
                    <ReviewMarkerWrapper>
                      <StarFill />
                      <p>{product?.reviews?.total}</p>
                    </ReviewMarkerWrapper>
                  </td> */}
                </tr>
              </ReviewTbody>
            ))
          )}
        </ReviewsTable>

        {
          !businessState.loading && categoryState?.products?.length > 0 && (
            <PagesBottomContainer>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={productsPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            </PagesBottomContainer>
          )
        }
      </ReviewsListingContainer>

      {openReview && (
        <SideBar
          sidebarId='review-details'
          defaultSideBarWidth={550}
          open={openReview}
          onClose={() => {
            setCurProduct(null)
            setOpenReview(false)
          }}
        >
          <ProductReviewDetails
            businessId={businessState?.business?.id}
            product={curProduct}
            productId={curProduct?.id}
          />
        </SideBar>
      )}
    </>
  )
}

export const ReviewProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    isAllCategoryProducts: true,
    UIComponent: ReviewProductsListingUI,
    isInitialRender,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessProductsListingController {...businessProductslistingProps} />
  )
}
