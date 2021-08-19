import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { BusinessReviewsList as BusinessReviewsListController } from './naked'
import { Switch } from '../../styles/Switch'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Pagination } from '../Pagination'
import { ThreeDotsVertical } from 'react-bootstrap-icons'

import {
  ReviewsTable,
  ReviewTbody,
  ReviewRowWrapper,
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

const BusinessReviewsListingUI = (props) => {
  const {
    reviewsListState,
    searchValue
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()

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
    let reviews = []
    if (searchValue) {
      reviews = reviewsListState.reviews.filter(city => city.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      reviews = [...reviewsListState.reviews]
    }
    const _totalPages = Math.ceil(reviews.length / reviewssPerPage)
    const indexOfLastPost = currentPage * reviewssPerPage
    const indexOfFirstPost = indexOfLastPost - reviewssPerPage
    const _currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentReviews(_currentReviews)
  }, [reviewsListState, currentPage, reviewssPerPage, searchValue])

  return (
    <>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject>{t('BUSINESS', 'Business')}</ReviewObject></th>
            <th><CustomerWrapper>{t('CUSTOMER', 'Customer')}</CustomerWrapper></th>
            <th><ReviewMarkerWrapper>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th>
            <th><CommentsWrapper>{t('COMMENTS', 'Comments')}</CommentsWrapper></th>
            <th><ActionsWrapper>{t('ACTIONS', 'Actions')}</ActionsWrapper></th>
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
            <ReviewTbody key={review.id}>
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(review?.business_logo || theme.images?.dummies?.businessLogo)} />
                    </WrapperImage>
                    <InfoBlock>
                      <p className='bold'>{review?.business_name}</p>
                      <p>{review?.city_name}</p>
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
                    {review?.total}
                  </ReviewMarkerWrapper>
                </td>
                <td>
                  <CommentsWrapper>
                    {review?.comment}
                  </CommentsWrapper>
                </td>
                <td>
                  <ActionsWrapper>
                    <EnableWrapper className='review-enabled'>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={review?.enabled}
                        // onChange={enabled => handleUpdateCity(city.country_id, city.id, { enabled: enabled })}
                      />
                    </EnableWrapper>
                    <ActionSelectorWrapper className='review-actions'>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          // onClick={() => handleOpenCityDetails(city)}
                        >
                          {t('EDIT', 'Edit')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          // onClick={() => onDeleteCity(city.country_id, city.id)}
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
    </>
  )
}

export const BusinessReviewList = (props) => {
  const reviewsProps = {
    ...props,
    UIComponent: BusinessReviewsListingUI
  }
  return <BusinessReviewsListController {...reviewsProps} />
}
