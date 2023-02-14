import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  useLanguage,
  useUtils,
  UsersList as UsersController
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { StarFill, PersonFill } from 'react-bootstrap-icons'
import { Pagination, SideBar } from '../../Shared'
import { UserReviewDetails } from '../UserReviewDetails'

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
    onSearch,
    defaultUserTypesSelected
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ optimizeImage, parseNumber }] = useUtils()

  const [openReview, setOpenReview] = useState(false)
  const [curUser, setCurUser] = useState(null)
  const [curUserId, setCurUserId] = useState(null)
  const headerTitle = defaultUserTypesSelected.length === 1 && defaultUserTypesSelected[0] === 3 ? t('CUSTOMER', 'Customer') : defaultUserTypesSelected[0] === 11 ? t('PROFESSIONAL', 'Professional') : t('DRIVER', 'Driver')

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
    setCurUser(user)
    setCurUserId(user.id)
    setOpenReview(true)
  }

  const handleClickReview = (e, user, isInitialRender) => {
    const isInvalid = e?.target?.closest('.review-enabled') || e.target.closest('.review-actions')
    if (isInvalid) return
    handleOpenReview(user)
    if (!isInitialRender) {
      const tab = query.get('tab')
      history.replace(`${location.pathname}?tab=${tab}&id=${user.id}`)
    }
  }

  const handleCloseReviewDetails = () => {
    setCurUser(null)
    setOpenReview(false)
    const tab = query.get('tab')
    history.replace(`${location.pathname}?tab=${tab}`)
  }

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setCurUserId(Number(id))
      setOpenReview(true)
    }
  }, [])

  return (
    <>
      <ReviewsTable>
        <thead>
          <tr>
            <th><ReviewObject isHeader>{headerTitle}</ReviewObject></th>
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
              active={user.id === curUser?.id}
              onClick={e => handleClickReview(e, user)}
            >
              <tr>
                <td>
                  <ReviewObject>
                    <WrapperImage>
                      {user?.photo ? (
                        <Image bgimage={optimizeImage(user?.photo, 'w_50,c_limit')} />
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
            defaultPageSize={paginationProps?.pageSize}
          />
        )}
      </PagesBottomContainer>
      {openReview && (
        <SideBar
          sidebarId='driver-review-details'
          defaultSideBarWidth={550}
          open={openReview}
          onClose={() => handleCloseReviewDetails()}
          showExpandIcon
        >
          <UserReviewDetails
            userId={curUserId}
            user={curUser}
          />
        </SideBar>
      )}
    </>
  )
}

export const UsersReviewList = (props) => {
  const driversReviewListProps = {
    ...props,
    isSearchByUserEmail: true,
    isSearchByUserName: true,
    UIComponent: DriversReviewListUI,
    propsToFetch: ['name', 'middle_name', 'second_lastname', 'lastname', 'email', 'photo', 'qualification', 'reviews']
  }
  return <UsersController {...driversReviewListProps} />
}
