import React, { useState, useEffect } from 'react'
import { useUtils, useLanguage, DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import BsDot from '@meronex/icons/bs/BsDot'
import { useTheme } from 'styled-components'
import { PaginationButton } from '../PaginationButton'
import { OrdersLateralBar } from '../Orders'

import {
  Container,
  CustomersListConatainer,
  Card,
  WrapperImage,
  Image,
  InfoContainer,
  AssignedOrdersCount,
  WrapperPagination
} from './styles'

const ChatBusinessesListUI = (props) => {
  const {
    businessList,
    pagination,
    loadMoreBusinesses
  } = props

  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [, t] = useLanguage()

  const [isOpenOrders, setIsOpenOrders] = useState(false)
  const [openBusiness, setOpenBusiness] = useState(null)

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [businessesPerPage] = useState(10)

  // Get current businesses
  const indexOfLastPost = currentPage * businessesPerPage
  const indexOfFirstPost = indexOfLastPost - businessesPerPage
  const [currentBusinessess, setCurrentBusinessess] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [totalBusinesses, setTotalBusinesses] = useState(null)

  // Change page
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== totalPages) {
      if (businessList.businesses.length < businessesPerPage * currentPage + 1) {
        loadMoreBusinesses()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  const handleOpenOrders = (business) => {
    setOpenBusiness(business)
    setIsOpenOrders(true)
  }

  useEffect(() => {
    if (businessList.loading) return
    let _totalPages
    if (pagination?.total) {
      _totalPages = Math.ceil(pagination?.total / businessesPerPage)
    } else if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / businessesPerPage)
    }
    const _currentBusinessess = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalBusinesses(pagination?.total)
    setTotalPages(_totalPages)
    setCurrentBusinessess(_currentBusinessess)
  }, [businessList, currentPage, pagination])

  return (
    <Container>
      <CustomersListConatainer>
        {businessList.loading ? (
          <>
            {[...Array(10).keys()].map(i => (
              <Card
                key={i}
              >
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <InfoContainer>
                  <div>
                    <Skeleton width={100} />
                  </div>
                  <Skeleton width={100} />
                </InfoContainer>
              </Card>
            ))}
          </>
        ) : (
          <>
            {currentBusinessess.map(business => (
              <Card
                key={business.id}
                // onClick={(e) => handleClickUser(e, user)}
                active={business?.id === openBusiness?.id}
              >
                <WrapperImage>
                  <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                </WrapperImage>
                <InfoContainer>
                  <div>
                    <p>{business?.name}</p>
                    <BsDot />
                    <AssignedOrdersCount
                      className='driver_orders'
                      onClick={() => handleOpenOrders(business)}
                    >
                      {t('ORDERS', 'Orders')}
                    </AssignedOrdersCount>
                  </div>
                </InfoContainer>
              </Card>
            ))}
          </>
        )}
      </CustomersListConatainer>
      {pagination && (
        <WrapperPagination>
          {!businessList.loading && totalPages > 0 && (
            <PaginationButton
              pageSize={businessesPerPage}
              total={totalBusinesses}
              currentPage={currentPage}
              totalPages={totalPages}
              prevPaginate={prevPaginate}
              nextPaginate={nextPaginate}
            />
          )}
        </WrapperPagination>
      )}
      {isOpenOrders && openBusiness && (
        <OrdersLateralBar
          isBusiness
          open={isOpenOrders}
          business={openBusiness}
          onClose={() => setIsOpenOrders(false)}
        />
      )}
    </Container>
  )
}

export const ChatBusinessesList = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: ChatBusinessesListUI,
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  }
  return (
    <BusinessListController {...businessListingProps} />
  )
}
