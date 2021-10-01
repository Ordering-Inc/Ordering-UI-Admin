import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Pagination } from '../Pagination'
import { ThreeDotsVertical, StarFill } from 'react-bootstrap-icons'
import { Confirm } from '../Confirm'
import { SideBar } from '../SideBar'
import { BusinessReviewDetails } from '../BusinessReviewDetails'

import {
  ReviewsTable,
  ReviewTbody,
  ReviewObject,
  InfoBlock,
  ReviewMarkerWrapper,
  PagesBottomContainer,
  WrapperImage,
  Image
} from './styles'

const BusinessReviewsListingUI = (props) => {
  const {
    businessList,
    pagination,
    searchValue,
    getPageBusinesses,
    handleUpdateReview,
    handleDeleteReview
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openReview, setOpenReview] = useState(false)
  const [curBusiness, setCurBusiness] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [businessesPerPage, setBusinessesPerPage] = useState(10)
  const [currentBusinessess, setCurrentBusinessess] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    if ((pagination.from <= page * businessesPerPage && page * businessesPerPage <= pagination.to) ||
      (pagination.from <= page * businessesPerPage && page * businessesPerPage > pagination.total)
    ) {
      setCurrentPage(page)
    } else {
      getPageBusinesses(businessesPerPage, page)
    }
  }

  const handleChangePageSize = (pageSize) => {
    setBusinessesPerPage(pageSize)
    const expectedPage = Math.ceil(pagination.from / pageSize)
    if ((pagination.from <= expectedPage * pageSize && expectedPage * pageSize <= pagination.to) ||
      (pagination.from <= expectedPage * pageSize && expectedPage * pageSize > pagination.total)
    ) {
      setCurrentPage(expectedPage)
    } else {
      setCurrentPage(expectedPage)
      getPageBusinesses(pageSize, expectedPage)
    }
  }

  useEffect(() => {
    if (businessList.loading) return
    let _totalPages
    if (pagination?.total) {
      _totalPages = Math.ceil(pagination?.total / businessesPerPage)
    } else if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / businessesPerPage)
    }
    const indexOfLastPost = currentPage * businessesPerPage
    const indexOfFirstPost = indexOfLastPost - businessesPerPage
    const _currentBusinessess = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentBusinessess(_currentBusinessess)
  }, [businessList, currentPage, pagination, businessesPerPage])

  const handleOpenReview = (business) => {
    setCurBusiness(business)
    setOpenReview(true)
  }

  const handleClickReview = (e, business) => {
    const isInvalid = e.target.closest('.review-enabled') || e.target.closest('.review-actions')
    if (isInvalid) return
    handleOpenReview(business)
  }

  return (
    <>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject isHeader>{t('BUSINESS', 'Business')}</ReviewObject></th>
            <th><ReviewMarkerWrapper isHeader>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th>
          </tr>
        </thead>
        {businessList.loading ? (
          [...Array(10).keys()].map(i => (
            <ReviewTbody key={i}>
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage isSkeleton>
                      <Skeleton width={45} height={45} />
                    </WrapperImage>
                    <InfoBlock>
                      <p><Skeleton width={80} /></p>
                      <p><Skeleton width={100} /></p>
                    </InfoBlock>
                  </ReviewObject>
                </td>
                <td><ReviewMarkerWrapper><Skeleton width={20} /></ReviewMarkerWrapper></td>
              </tr>
            </ReviewTbody>
          ))
        ) : (
          currentBusinessess.map(business => (
            <ReviewTbody
              key={business.id}
              active={business.id === curBusiness?.id}
              onClick={e => handleClickReview(e, business)}
            >
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
                    </WrapperImage>
                    <InfoBlock>
                      <p className='bold'>{business?.name}</p>
                      <p>{business?.address}</p>
                    </InfoBlock>
                  </ReviewObject>
                </td>
                <td>
                  <ReviewMarkerWrapper>
                    <StarFill />
                    <p>{business?.reviews?.total}</p>
                  </ReviewMarkerWrapper>
                </td>
              </tr>
            </ReviewTbody>
          ))
        )}
      </ReviewsTable>
      <PagesBottomContainer>
        {!businessList.loading && totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            defaultPageSize={businessesPerPage}
            handleChangePageSize={handleChangePageSize}
          />
        )}
      </PagesBottomContainer>
      {openReview && (
        <SideBar
          sidebarId='review-details'
          defaultSideBarWidth={550}
          open={openReview}
          onClose={() => {
            setCurBusiness(null)
            setOpenReview(false)
          }}
        >
          <BusinessReviewDetails
            business={curBusiness}
            businessId={curBusiness?.id}
            businessReviews={curBusiness?.reviews?.reviews}
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
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: ['name', 'logo', 'address', 'reviews'],
    UIComponent: BusinessReviewsListingUI
  }
  return <BusinessListController {...reviewsProps} />
}
