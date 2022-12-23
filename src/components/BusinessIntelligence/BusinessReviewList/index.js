import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { StarFill } from 'react-bootstrap-icons'
import { Confirm, Pagination, SideBar } from '../../Shared'
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
    parentSearchValue,
    getPageBusinesses,
    handleUpdateReview,
    onSearch
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openReview, setOpenReview] = useState(false)
  const [curBusiness, setCurBusiness] = useState(null)

  const handleChangePage = (page) => {
    getPageBusinesses(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageBusinesses(pageSize, expectedPage)
  }

  const handleOpenReview = (business) => {
    setCurBusiness(business)
    setOpenReview(true)
  }

  useEffect(() => {
    if (parentSearchValue === null) return
    onSearch(parentSearchValue)
  }, [parentSearchValue])

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
          [...Array(pagination.pageSize).keys()].map(i => (
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
          businessList.businesses.map(business => (
            <ReviewTbody
              key={business.id}
              active={business.id === curBusiness?.id}
              onClick={() => handleOpenReview(business)}
            >
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                    </WrapperImage>
                    <InfoBlock>
                      <p className='bold'>{business?.name}</p>
                      <p>{business?.address}</p>
                    </InfoBlock>
                  </ReviewObject>
                </td>
                <td>
                  <ReviewMarkerWrapper>
                    {business?.reviews?.total && (
                      <>
                        <StarFill />
                        <p>{business?.reviews?.total}</p>
                      </>
                    )}
                  </ReviewMarkerWrapper>
                </td>
              </tr>
            </ReviewTbody>
          ))
        )}
      </ReviewsTable>
      {pagination && (
        <PagesBottomContainer>
          {pagination?.total > 0 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
              defaultPageSize={pagination?.pageSize}
            />
          )}
        </PagesBottomContainer>
      )}
      {openReview && (
        <SideBar
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
            reviews={curBusiness?.reviews?.reviews}
            handleUpdateReview={handleUpdateReview}
          />
        </SideBar>
      )}
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
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
    noActiveStatusCondition: true,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: ['name', 'logo', 'address', 'reviews', 'slug'],
    UIComponent: BusinessReviewsListingUI
  }
  return <BusinessListController {...reviewsProps} />
}
