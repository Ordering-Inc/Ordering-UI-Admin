import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { ProductReviewsList as ProductReviewsController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Pagination } from '../Pagination'
import { ThreeDotsVertical, StarFill } from 'react-bootstrap-icons'
import { Switch } from '../../styles'

import {
  ProductReviewsContainer,
  Header,
  ReviewsTable,
  ReviewTbody,
  ReviewObject,
  InfoBlock,
  CustomerWrapper,
  ReviewMarkerWrapper,
  CommentsWrapper,
  ActionsWrapper,
  PagesBottomContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  WrapperImage,
  Image
} from './styles'

const ProductReviewsUI = (props) => {
  const {
    reviewsListState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parseNumber }] = useUtils()

  const [currentPage, setCurrentPage] = useState(1)
  const [reviewssPerPage, setReviewsPerPage] = useState(10)
  const [currentReviews, setCurrentReviews] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * reviewssPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setReviewsPerPage(pageSize)
  }

  useEffect(() => {
    if (reviewsListState.loading) return
    const reviews = [...reviewsListState.reviews]
    const _totalPages = Math.ceil(reviews.length / reviewssPerPage)
    const indexOfLastPost = currentPage * reviewssPerPage
    const indexOfFirstPost = indexOfLastPost - reviewssPerPage
    const _currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentReviews(_currentReviews)
  }, [reviewsListState, currentPage, reviewssPerPage])
  return (
    <ProductReviewsContainer>
      <Header>
        <h1>{t('REVIEWS', 'Reviews')}</h1>
      </Header>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject isHeader>{t('PRODUCT', 'Product')}</ReviewObject></th>
            <th><CustomerWrapper isHeader>{t('CUSTOMER', 'Customer')}</CustomerWrapper></th>
            <th><ReviewMarkerWrapper isHeader>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th>
            <th><CommentsWrapper isHeader>{t('COMMENTS', 'Comments')}</CommentsWrapper></th>
            <th><ActionsWrapper isHeader>{t('ACTIONS', 'Actions')}</ActionsWrapper></th>
          </tr>
        </thead>
        {reviewsListState.loading ? (
          [...Array(10).keys()].map(i => (
            <ReviewTbody key={i}>
              <tr>
                <td><ReviewObject><Skeleton width={100} /></ReviewObject></td>
                <td><CustomerWrapper><Skeleton width={100} /></CustomerWrapper></td>
                <td><ReviewMarkerWrapper><Skeleton width={20} /></ReviewMarkerWrapper></td>
                <td><CommentsWrapper><Skeleton width={150} /></CommentsWrapper></td>
                <td><ActionsWrapper><Skeleton width={100} /></ActionsWrapper></td>
              </tr>
            </ReviewTbody>
          ))
        ) : (
          currentReviews.map(review => (
            <ReviewTbody
              key={review.id}
              // onClick={e => handleClickReview(e, review)}
            >
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(review?.photo || theme.images?.dummies?.businessLogo)} />
                    </WrapperImage>
                    <InfoBlock>
                      <p className='bold'>{review?.name}</p>
                    </InfoBlock>
                  </ReviewObject>
                </td>
                <td>
                  <CustomerWrapper>
                    <InfoBlock>
                      <p className='bold'>
                        {review?.user?.name} {review?.user?.lastname}
                      </p>
                      <p>{review?.user?.email}</p>
                    </InfoBlock>
                  </CustomerWrapper>
                </td>
                <td>
                  <ReviewMarkerWrapper>
                    <StarFill />
                    <p>{parseNumber(review?.total)}</p>
                  </ReviewMarkerWrapper>
                </td>
                <td>
                  <CommentsWrapper>
                    <p>
                      {review?.comment}
                    </p>
                  </CommentsWrapper>
                </td>
                <td>
                  <ActionsWrapper>
                    <EnableWrapper className='review-enabled'>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={review?.enabled}
                        // onChange={enabled => handleUpdateReview(review?.business_id, review.id, { enabled: enabled })}
                      />
                    </EnableWrapper>
                    <ActionSelectorWrapper className='review-actions'>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          // onClick={() => handleOpenReview(review)}
                        >
                          {t('DETAILS', 'Details')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          // onClick={() => onClickDeleteReview(review?.business_id, review.id)}
                        >
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </ActionSelectorWrapper>
                  </ActionsWrapper>
                </td>
              </tr>
            </ReviewTbody>
          ))
        )}
      </ReviewsTable>
      {!reviewsListState.loading && (
        <PagesBottomContainer>
          {currentReviews?.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangePage={handleChangePage}
              defaultPageSize={reviewssPerPage}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </PagesBottomContainer>
      )}
    </ProductReviewsContainer>
  )
}

export const ProductReviews = (props) => {
  const reviewsProps = {
    ...props,
    UIComponent: ProductReviewsUI
  }
  return <ProductReviewsController {...reviewsProps} />
}
