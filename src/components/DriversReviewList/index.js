import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useUtils,
  UsersList as DriversController
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { StarFill, PersonFill } from 'react-bootstrap-icons'
import { Pagination } from '../Pagination'
import { SideBar } from '../SideBar'
import { DriverReviewDetails } from '../DriverReviewDetails'

import {
  ReviewsTable,
  ReviewObject,
  ReviewMarkerWrapper,
  ReviewTbody,
  WrapperImage,
  Image,
  InfoBlock,
  PagesBottomContainer
} from './styles'

const DriversReviewListUI = (props) => {
  const {
    parentSearchValue,
    usersList,
    paginationProps,
    getUsers,
    onSearch
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage, parseNumber }] = useUtils()

  const [openReview, setOpenReview] = useState(false)
  const [curDriver, setCurDriver] = useState(null)

  const handleChangePage = (page) => {
    getUsers(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getUsers(expectedPage, pageSize)
  }

  useEffect(() => {
    if (parentSearchValue === null) return
    onSearch(parentSearchValue)
  }, [parentSearchValue])

  const handleOpenReview = (user) => {
    setCurDriver(user)
    setOpenReview(true)
  }

  const handleClickReview = (e, user) => {
    const isInvalid = e.target.closest('.review-enabled') || e.target.closest('.review-actions')
    if (isInvalid) return
    handleOpenReview(user)
  }

  return (
    <>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject isHeader>{t('DRIVER', 'Driver')}</ReviewObject></th>
            <th><ReviewMarkerWrapper isHeader>{t('REVIEWS', 'Reviews')}</ReviewMarkerWrapper></th>
          </tr>
        </thead>
        {usersList.loading ? (
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
          usersList.users.map(user => (
            <ReviewTbody
              key={user.id}
              active={user.id === curDriver?.id}
              onClick={e => handleClickReview(e, user)}
            >
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      {user?.photo ? (
                        <Image bgimage={optimizeImage(user?.photo)} />
                      ) : (
                        <PersonFill />
                      )}
                    </WrapperImage>
                    <InfoBlock>
                      <p className='bold'>{user?.name} {user?.lastname}</p>
                      <p>{user?.email}</p>
                    </InfoBlock>
                  </ReviewObject>
                </td>
                <td>
                  <ReviewMarkerWrapper>
                    {user?.qualification && (
                      <>
                        <StarFill />
                        <p>{parseNumber(user?.qualification)}</p>
                      </>
                    )}
                  </ReviewMarkerWrapper>
                </td>
              </tr>
            </ReviewTbody>
          ))
        )}
      </ReviewsTable>
      <PagesBottomContainer>
        {usersList?.users.length > 0 && (
          <Pagination
            currentPage={paginationProps.currentPage}
            totalPages={paginationProps.totalPages}
            handleChangePage={handleChangePage}
            handleChangePageSize={handleChangePageSize}
          />
        )}
      </PagesBottomContainer>
      {openReview && (
        <SideBar
          sidebarId='driver-review-details'
          defaultSideBarWidth={550}
          open={openReview}
          onClose={() => {
            setCurDriver(null)
            setOpenReview(false)
          }}
        >
          <DriverReviewDetails
            userId={curDriver?.id}
            driver={curDriver}
          />
        </SideBar>
      )}
    </>
  )
}

export const DriversReviewList = (props) => {
  const driversReviewListProps = {
    ...props,
    isSearchByUserEmail: true,
    isSearchByUserName: true,
    deafultUserTypesSelected: [4],
    UIComponent: DriversReviewListUI,
    propsToFetch: ['name', 'middle_name', 'second_lastname', 'lastname', 'email', 'photo', 'reviews']
  }
  return <DriversController {...driversReviewListProps} />
}
