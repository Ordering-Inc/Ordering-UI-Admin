import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { BusinessReviewsList as BusinessReviewsListController } from './naked'
import { Switch } from '../../styles/Switch'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Pagination } from '../Pagination'
import { ThreeDotsVertical, StarFill } from 'react-bootstrap-icons'
import { Confirm } from '../Confirm'
import { SideBar } from '../SideBar'
import { ReviewDetails } from '../ReviewDetails'

import {
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

const BusinessReviewsListingUI = (props) => {
  const {
    reviewsListState,
    searchValue,
    handleUpdateReview,
    handleDeleteReview
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parseNumber }] = useUtils()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openReview, setOpenReview] = useState(false)
  const [curReview, setCurReview] = useState(null)

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

  const onClickDeleteReview = (businessId, reviewId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_REVIEW', 'Are you sure to delete this review?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteReview(businessId, reviewId)
      }
    })
  }

  const handleOpenReview = (review) => {
    setCurReview(review)
    setOpenReview(true)
  }

  const handleClickReview = (e, review) => {
    const isInvalid = e.target.closest('.review-enabled') || e.target.closest('.review-actions')
    if (isInvalid) return
    handleOpenReview(review)
  }

  return (
    <>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject isHeader>{t('BUSINESS', 'Business')}</ReviewObject></th>
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
            <ReviewTbody key={review.id} onClick={e => handleClickReview(e, review)}>
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
                        onChange={enabled => handleUpdateReview(review?.business_id, review.id, { enabled: enabled })}
                      />
                    </EnableWrapper>
                    <ActionSelectorWrapper className='review-actions'>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={() => handleOpenReview(review)}
                        >
                          {t('DETAILS', 'Details')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => onClickDeleteReview(review?.business_id, review.id)}
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
      {openReview && (
        <SideBar
          sidebarId='review-details'
          defaultSideBarWidth={550}
          open={openReview}
          onClose={() => {
            setCurReview(null)
            setOpenReview(false)
          }}
        >
          <ReviewDetails
            review={curReview}
            handleUpdateReview={handleUpdateReview}
          />
        </SideBar>
      )}
      <Confirm
        title={t('ORDERING', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
