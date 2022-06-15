import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils,
  ProfessionalBusinessService as ProfessionalBusinessServiceController
} from 'ordering-components-admin'
import { NotFoundSource, Pagination, SearchBar, SideBar, Alert } from '../../Shared'
import { Button } from '../../../styles'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { ChevronRight, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { ProfessionalServices } from '../ProfessionalServices'
import {
  BrandBUSIDetailContainer,
  SearchWrapper,
  BusinessListWrapper,
  BusinessItemContainer,
  WrapperImage,
  Image,
  BusinessName,
  SelectButtonGroup,
  CheckWrapper
} from './styles'

const ProfessionalBusinessServiceUI = (props) => {
  const {
    searchValue,
    onSearch,
    businessList,
    handleChangeCheckBox,
    businessIds,
    setExtraOpen,
    handleUpdateBusinessIds,
    userServiceList,
    user,
    handleUpdateServices,
    extraSelected,
    setExtraSelected
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current business
  const [currentBusinesses, setCurrentBusinesses] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [selectedBusinessId, setSelectedBusinessId] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleOpenService = (businessId) => {
    if (businessId) {
      setSelectedBusinessId(businessId)
      setExtraSelected(null)
      setExtraOpen(true)
    } else {
      setSelectedBusinessId(null)
      setExtraOpen(false)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSelectAllBusinesses = (index) => {
    if (index && businessList?.businesses?.length) {
      const ids = businessList.businesses.reduce((prev, current) => [...prev, current.id], [])
      handleUpdateBusinessIds(ids)
      return
    }
    handleOpenService(null)
    handleUpdateBusinessIds([])
  }

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const handleClickItem = (e, businessId) => {
    if (e.target.closest('.check-box')) return
    if (!businessIds?.includes(businessId)) {
      setAlertState({ open: true, content: t('YOU_NEED_TO_SELECT_BUSINESS', 'You need to select a business') })
      return
    }
    handleOpenService(businessId)
  }

  const handleClickCheckBox = (businessId) => {
    handleChangeCheckBox && handleChangeCheckBox(businessId)
    if (businessIds?.includes(businessId) && businessId === selectedBusinessId) handleOpenService(null)
  }

  useEffect(() => {
    let _totalPages
    if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentProducts = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentBusinesses(_currentProducts)
  }, [businessList?.businesses, currentPage, pagesPerPage])

  useEffect(() => {
    if (searchValue) setCurrentPage(1)
  }, [searchValue])

  useEffect(() => {
    if (extraSelected) setSelectedBusinessId(null)
  }, [extraSelected])

  return (
    <>
      <BrandBUSIDetailContainer>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
            lazyLoad
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </SearchWrapper>
        {businessList?.loading ? (
          <BusinessListWrapper>
            {
              [...Array(5).keys()].map(i => (
                <BusinessItemContainer key={i}>
                  <CheckWrapper>
                    <Skeleton width={16} height={16} />
                    <label>
                      <WrapperImage>
                        <Skeleton className='d-flex h-100' />
                      </WrapperImage>
                      <BusinessName>
                        <Skeleton width={100} />
                      </BusinessName>
                    </label>
                  </CheckWrapper>
                  <Skeleton width={16} height={16} />
                </BusinessItemContainer>
              ))
            }
          </BusinessListWrapper>
        ) : (
          <BusinessListWrapper>
            <SelectButtonGroup>
              <Button
                color='secundaryDark'
                onClick={() => handleSelectAllBusinesses(true)}
              >
                {t('SELECT_ALL', 'Select all')}
              </Button>
              <Button
                color='secundaryDark'
                onClick={() => handleSelectAllBusinesses(false)}
              >
                {t('SELECT_NONE', 'Select none')}
              </Button>
            </SelectButtonGroup>
            {
              currentBusinesses?.length > 0 ? currentBusinesses.map((business, i) => (
                <BusinessItemContainer
                  key={i}
                  onClick={(e) => handleClickItem(e, business?.id)}
                  active={business.id === selectedBusinessId}
                  notAllow={!businessIds?.includes(business?.id)}
                >
                  <CheckWrapper>
                    <span className='check-box' onClick={() => handleClickCheckBox(business.id)}>
                      {businessIds?.includes(business.id) ? (
                        <CheckSquareFill className='active' />
                      ) : (
                        <Square />
                      )}
                    </span>
                    <label htmlFor={business?.id}>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
                      </WrapperImage>
                      <BusinessName>{business?.name}</BusinessName>
                    </label>
                  </CheckWrapper>
                  <ChevronRight />
                </BusinessItemContainer>
              )) : (
                <NotFoundSource />
              )
            }
            {businessList?.businesses?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pagesPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </BusinessListWrapper>
        )}
      </BrandBUSIDetailContainer>
      {selectedBusinessId && (
        <SideBar
          sidebarId='user_service'
          defaultSideBarWidth={500}
          isBorderShow
          IconTop='30px'
          open={selectedBusinessId}
          onClose={() => handleOpenService()}
        >
          <ProfessionalServices
            businessId={selectedBusinessId}
            services={userServiceList?.services}
            userId={user.id}
            handleUpdateServices={handleUpdateServices}
          />
        </SideBar>
      )}
      <Alert
        title={t('BUSINESS_AND_SERVICES', 'Business & Services')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ProfessionalBusinessService = (props) => {
  const professionalBusinessServiceProps = {
    ...props,
    UIComponent: ProfessionalBusinessServiceUI,
    propsToFetch: ['id', 'name', 'logo'],
    isSearchByName: true
  }
  return <ProfessionalBusinessServiceController {...professionalBusinessServiceProps} />
}
