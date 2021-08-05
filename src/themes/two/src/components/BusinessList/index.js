import React, { useState, useEffect, useCallback } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Pagination } from '../Pagination'

import {
  BusinessListContainer,
  BusinessListTable,
  WrapperPagination,
  BusinessCardContainer,
  AddNewButtonLink
} from './styles'
import { SingleBusiness } from '../SingleBusiness'
import { ColumnAllowSettingPopover } from '../ColumnAllowSettingPopover'

export const BusinessList = (props) => {
  const {
    viewMethod,
    businessList,
    pagination,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness,
    handleSucessUpdateBusiness,
    handleOpenBusinessDetails,
    handleOpenAddBusiness,
    detailsBusinessId
  } = props
  const [, t] = useLanguage()

  const [openPopover, setOpenPopover] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    business: true,
    deliveryFee: true,
    distance: true,
    deliveryTime: true
  })

  const optionsDefault = [
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'deliveryFee',
      content: t('DELIVERY_FEE', 'Delivery fee')
    },
    {
      value: 'distance',
      content: t('DISTANCE', 'Distance')
    },
    {
      value: 'deliveryTime',
      content: t('DELIVERY TIME', 'Delivery time')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [businessesPerPage, setBusinessesPerPage] = useState(10)

  // Get current businesses
  const indexOfLastPost = currentPage * businessesPerPage
  const indexOfFirstPost = indexOfLastPost - businessesPerPage
  const [currentBusinessess, setCurrentBusinessess] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  // const [totalBusinesses, setTotalBusinesses] = useState(null)

  // // Change page
  // const prevPaginate = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
  // const nextPaginate = () => {
  //   if (currentPage !== totalPages) {
  //     if (businessList.businesses.length < businessesPerPage * currentPage + 1) {
  //       loadMoreBusinesses()
  //     }
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    setCurrentPage(1)
    setBusinessesPerPage(pageSize)
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
    // setTotalBusinesses(pagination?.total)
    setTotalPages(_totalPages)
    setCurrentBusinessess(_currentBusinessess)
  }, [businessList, currentPage, pagination, businessesPerPage])

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + 10
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(pagination.to === pagination.total)
    if (badScrollPosition || businessList.loading || !hasMore) return
    loadMoreBusinesses()
  }, [businessList, pagination])

  useEffect(() => {
    if (viewMethod !== 'card') return
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, viewMethod])

  return (
    <>
      {viewMethod === 'list' && (
        <>
          <BusinessListContainer>
            <BusinessListTable>
              <thead>
                <tr>
                  {allowColumns?.business && (
                    <th className='business'>{t('BUSINESS', 'Business')}</th>
                  )}
                  {(allowColumns?.deliveryFee || allowColumns?.distance || allowColumns?.deliveryTime) && (
                    <th colSpan={3}>{t('DETAILS', 'Details')}</th>
                  )}
                  <th>{t('ACTIONS', 'Actions')}</th>
                  <th>
                    <ColumnAllowSettingPopover
                      open={openPopover}
                      allowColumns={allowColumns}
                      optionsDefault={optionsDefault}
                      onClick={() => setOpenPopover(!openPopover)}
                      onClose={() => setOpenPopover(false)}
                      handleChangeAllowColumns={handleChangeAllowColumns}
                    />
                  </th>
                </tr>
              </thead>
              {businessList.loading ? (
                [...Array(10).keys()].map(i => (
                  <SingleBusiness
                    key={i}
                    isSkeleton
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                  />
                ))
              ) : (
                currentBusinessess.map(business => (
                  <SingleBusiness
                    key={business.id}
                    detailsBusinessId={detailsBusinessId}
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                    businessId={business.id}
                    business={business}
                    handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                    handleSucessAddBusiness={handleSucessAddBusiness}
                    handleSucessUpdateBusiness={handleSucessUpdateBusiness}
                    handleOpenBusinessDetails={handleOpenBusinessDetails}
                  />
                ))
              )}
            </BusinessListTable>
          </BusinessListContainer>

          {pagination && (
            <WrapperPagination>
              {!businessList.loading && totalPages > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleChangePage={handleChangePage}
                  defaultPageSize={businessesPerPage}
                  handleChangePageSize={handleChangePageSize}
                />
              )}
            </WrapperPagination>
          )}
          <AddNewButtonLink
            onClick={() => handleOpenAddBusiness()}
          >
            {t('ADD_NEW_STORE', 'Add new store')}
          </AddNewButtonLink>
        </>
      )}

      {viewMethod === 'card' && (
        <BusinessCardContainer>
          {businessList.loading ? (
            [...Array(30).keys()].map(i => (
              <SingleBusiness
                key={i}
                isSkeleton
                viewMethod={viewMethod}
                allowColumns={allowColumns}
              />
            ))
          ) : (
            businessList.businesses.map(business => (
              <SingleBusiness
                key={business.id}
                viewMethod={viewMethod}
                allowColumns={allowColumns}
                businessId={business.id}
                business={business}
                handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                handleSucessAddBusiness={handleSucessAddBusiness}
                handleSucessUpdateBusiness={handleSucessUpdateBusiness}
                handleOpenBusinessDetails={handleOpenBusinessDetails}
              />
            ))
          )}
        </BusinessCardContainer>
      )}
    </>
  )
}
