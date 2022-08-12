import React, { useState } from 'react'
import {
  useLanguage,
  useUtils,
  DashboardBusinessList as BusinessListController
} from 'ordering-components-admin'
import { NotFoundSource, Pagination, SearchBar, Modal, SideBar } from '../../Shared'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { ChevronRight } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  Container,
  SearchWrapper,
  BusinessListWrapper,
  BusinessItemContainer,
  WrapperImage,
  Image,
  BusinessName
} from './styles'
import { BusinessSyncStoreDetail } from '../BusinessSyncStoreDetail'

const BusinessSyncStoreUI = (props) => {
  const {
    searchValue,
    onSearch,
    businessList,
    pagination,
    getPageBusinesses,
    handleParentSidebarMove
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [extraOpen, setExtraOpen] = useState(false)

  const handleClickBusiness = (business) => {
    setSelectedBusiness(business)
    setExtraOpen(true)
    if (width >= 1100) {
      handleParentSidebarMove(550)
    }
  }

  const handleCloseBusinessDetail = () => {
    handleParentSidebarMove(0)
    setSelectedBusiness(null)
    setExtraOpen(false)
  }

  const handleChangePage = (page) => {
    getPageBusinesses(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageBusinesses(pageSize, expectedPage)
  }

  return (
    <Container>
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
                <label>
                  <WrapperImage>
                    <Skeleton className='d-flex h-100' />
                  </WrapperImage>
                  <BusinessName>
                    <Skeleton width={100} />
                  </BusinessName>
                </label>
                <Skeleton width={16} height={16} style={{ marginLeft: 10, marginRight: 10 }} />
              </BusinessItemContainer>
            ))
          }
        </BusinessListWrapper>
      ) : (
        <BusinessListWrapper>
          {
            businessList?.businesses?.length > 0 ? businessList?.businesses.map((business, i) => (
              <BusinessItemContainer
                key={i}
                active={selectedBusiness?.id === business?.id}
                onClick={() => handleClickBusiness(business)}
                isFirst={i === 0}
              >
                <label htmlFor={business?.id}>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
                  </WrapperImage>
                  <BusinessName>{business?.name}</BusinessName>
                </label>
                <ChevronRight />
              </BusinessItemContainer>
            )) : (
              <NotFoundSource />
            )
          }
          {pagination?.total > 0 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </BusinessListWrapper>
      )}
      {extraOpen && (
        <>
          {width >= 1100 ? (
            <SideBar
              isBorderShow
              open={extraOpen}
              defaultSideBarWidth={550}
              sidebarId='loyaltyBusinessDetail'
              onClose={handleCloseBusinessDetail}
            >
              <BusinessSyncStoreDetail
                business={selectedBusiness}
              />
            </SideBar>
          ) : (
            <Modal
              width='70%'
              height='90vh'
              padding='0px'
              open={extraOpen}
              onClose={handleCloseBusinessDetail}
            >
              <BusinessSyncStoreDetail
                business={selectedBusiness}
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const BusinessSyncStore = (props) => {
  const businessBrandBUSIDetailProps = {
    ...props,
    UIComponent: BusinessSyncStoreUI,
    asDashboard: true,
    isSearchByBusinessName: true
  }
  return <BusinessListController {...businessBrandBUSIDetailProps} />
}
