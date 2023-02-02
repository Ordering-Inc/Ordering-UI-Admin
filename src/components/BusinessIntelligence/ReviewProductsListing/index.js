import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, ReviewProductList as ReviewProductListController } from 'ordering-components-admin'
import { ImageFill, StarFill } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { Pagination, SideBar } from '../../Shared'
import { ProductReviewDetails } from '../ProductReviewDetails'

import {
  ReviewsListingContainer,
  ReviewsTable,
  ReviewTbody,
  WrapperImage,
  Image,
  ReviewObject,
  PagesBottomContainer,
  ReviewMarkerWrapper
} from './styles'

export const ReviewProductsListingUI = (props) => {
  const {
    productState,
    handleChangeSearch,
    searchValue,
    parentSearchValue,
    businessId
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

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
    if (productState.loading) return
    let _totalPages
    if (productState.products.length > 0) {
      _totalPages = Math.ceil(productState.products.length / productsPerPage)
    }
    const indexOfLastPost = currentPage * productsPerPage
    const indexOfFirstPost = indexOfLastPost - productsPerPage
    const _currentProducts = productState.products.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentProducts(_currentProducts)
  }, [productState, currentPage, productsPerPage])

  const handleOpenReview = (product) => {
    setCurProduct(product)
    setOpenReview(true)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchValue])

  useEffect(() => {
    handleChangeSearch(parentSearchValue)
  }, [parentSearchValue])

  return (
    <>
      <ReviewsListingContainer>
        <ReviewsTable>
          <thead>
            <tr>
              <th><ReviewObject isHeader>{t('PRODUCT', 'Product')}</ReviewObject></th>
              <th><ReviewMarkerWrapper isHeader>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th>
            </tr>
          </thead>
          {productState?.loading ? (
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
                  <td><ReviewMarkerWrapper><Skeleton width={20} /></ReviewMarkerWrapper></td>
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
                          <Image bgimage={optimizeImage(product?.images, 'h_50,c_limit')} />
                        ) : (
                          <ImageFill />
                        )}
                      </WrapperImage>
                      <p>{product?.name}</p>
                    </ReviewObject>
                  </td>
                  <td>
                    <ReviewMarkerWrapper>
                      {product?.reviews?.total && (
                        <>
                          <StarFill />
                          <p>{product?.reviews?.total}</p>
                        </>
                      )}
                    </ReviewMarkerWrapper>
                  </td>
                </tr>
              </ReviewTbody>
            ))
          )}
        </ReviewsTable>

        {
          !productState.loading && productState?.products?.length > 0 && (
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
            businessId={businessId}
            product={curProduct}
            productId={curProduct?.id}
          />
        </SideBar>
      )}
    </>
  )
}

export const ReviewProductsListing = (props) => {
  const businessProductslistingProps = {
    ...props,
    UIComponent: ReviewProductsListingUI,
    isSearchByName: true,
    isSearchByDescription: true
  }
  return (
    <ReviewProductListController {...businessProductslistingProps} />
  )
}
