import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, UsersList as UsersListController } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { SearchBar, Modal, Pagination } from '../../Shared'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { ChevronRight, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Container,
  InnerContainer,
  Header,
  SearchWrapper,
  ProfessionalListWrapper,
  ProfessionalItemContainer,
  CheckWrapper,
  WrapperImage,
  Image,
  UserInfo,
  AddBtn,
  BottomWrapper,
  WrapperPagination
} from './styles'
import { BusinessServiceProfessionalDetail } from '../BusinessServiceProfessionalDetail'

const BusinessServiceProfessionalsUI = (props) => {
  const {
    searchValue,
    onSearch,
    usersList,
    setIsExtendExtraOpen,
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleDeleteUser,
    getUsers,
    paginationProps,
    product
    // handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [selectedProfessional, setSelectedProfessional] = useState(null)
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [openDetail, setOpenDetail] = useState(false)

  const handleOpenDetail = (professional) => {
    setOpenDetail(true)
    setSelectedProfessional(professional)
    setIsExtendExtraOpen(true)
  }

  const handleCloseDetail = () => {
    setOpenDetail(false)
    setSelectedProfessional(null)
    setIsExtendExtraOpen(false)
  }

  const handleProfessionalClick = (e, professional) => {
    if (e.target.closest('.check-box')) return
    handleOpenDetail(professional)
  }

  const handleChangePage = (page) => {
    getUsers(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getUsers(expectedPage, pageSize)
  }

  // const handleChangeCheckBox = (user) => {
  //   let users = []
  //   if (isEnableCheck(user?.id)) users = product?.users?.filter(item => item.id !== user.id)
  //   else users = [...product?.users, user]
  //   handleUpdateClick({ users: users })
  // }

  const isEnableCheck = (userId) => {
    let valid = false
    if (product?.users?.map(({ id }) => id).includes(userId)) valid = true
    return valid
  }

  useEffect(() => {
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [usersList.users, paginationProps])

  return (
    <Container>
      <InnerContainer>
        <Header>
          <h1>{t('PROFESSIONALS', 'Professionals')}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={() => handleOpenDetail(null)}
          >
            {t('ADD_PROFESSIONAL', 'Add professional')}
          </Button>
        </Header>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
            lazyLoad
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </SearchWrapper>
        {usersList?.loading ? (
          <ProfessionalListWrapper>
            {
              [...Array(5).keys()].map(i => (
                <ProfessionalItemContainer key={i}>
                  <CheckWrapper>
                    <Skeleton width={16} height={16} />
                    <label>
                      <WrapperImage>
                        <Skeleton className='d-flex h-100' />
                      </WrapperImage>
                      <UserInfo>
                        <h3>
                          <Skeleton width={100} height={18} />
                        </h3>
                        <p>
                          <Skeleton width={130} />
                        </p>
                      </UserInfo>
                    </label>
                  </CheckWrapper>
                  <Skeleton width={16} height={16} />
                </ProfessionalItemContainer>
              ))
            }
          </ProfessionalListWrapper>
        ) : (
          usersList?.users?.map((user, i) => (
            <ProfessionalItemContainer
              key={i}
              onClick={(e) => handleProfessionalClick(e, user)}
              active={user.id === selectedProfessional?.id}
            >
              <CheckWrapper>
                <span className='check-box'>
                  {isEnableCheck(user.id)
                    ? <CheckSquareFill className='active' />
                    : <Square />}
                </span>
                <label htmlFor={user?.id}>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(user?.photo || theme.images?.dummies?.businessLogo)} />
                  </WrapperImage>
                  <UserInfo>
                    <h3>{user?.name}</h3>
                    <p>{user?.email}</p>
                  </UserInfo>
                </label>
              </CheckWrapper>
              <ChevronRight />
            </ProfessionalItemContainer>)))}
        <BottomWrapper>
          <AddBtn onClick={() => handleOpenDetail(null)}>{t('ADD_PROFESSIONAL', 'Add professional')}</AddBtn>
          {usersList?.users.length > 0 && (
            <WrapperPagination>
              <Pagination
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
              />
            </WrapperPagination>
          )}
        </BottomWrapper>
      </InnerContainer>
      {width >= 1000 ? (
        <>
          {openDetail && (
            <BusinessServiceProfessionalDetail
              open={openDetail}
              onClose={handleCloseDetail}
              professional={selectedProfessional}
              handleSuccessUpdate={handleSuccessUpdate}
              handleSuccessAddUser={handleSuccessAddUser}
              handleDeleteUser={handleDeleteUser}
            />
          )}
        </>
      ) : (
        <>
          {openDetail && (
            <Modal
              width='760px'
              open={openDetail}
              onClose={() => handleCloseDetail()}
            >
              <BusinessServiceProfessionalDetail
                open={openDetail}
                onClose={handleCloseDetail}
                professional={selectedProfessional}
                handleSuccessUpdate={handleSuccessUpdate}
                handleSuccessAddUser={handleSuccessAddUser}
                handleDeleteUser={handleDeleteUser}
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const BusinessServiceProfessionals = (props) => {
  const businessProfessionalListProps = {
    ...props,
    defaultUserTypesSelected: [8],
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    UIComponent: BusinessServiceProfessionalsUI
  }
  return <UsersListController {...businessProfessionalListProps} />
}
