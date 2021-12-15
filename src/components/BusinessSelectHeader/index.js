import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  DashboardBusinessList as BusinessListController
} from 'ordering-components-admin'
import {
  PopMenuContatiner,
  BusinessSearch,
  OptionItem,
  BusinessList,
  WrapperPagination,
  SelectHeaderContent
} from './styles'
import { SearchBar } from '../SearchBar'
import { Pagination } from '../Pagination'

const BusinessessListingUI = (props) => {
  const {
    businessList,
    pagination,
    searchValue,
    onSearch,
    getPageBusinesses,
    isOpen,
    close,
    changBusinessState,
    defaultPageSize
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const dropdownReference = useRef()
  const [businessesPerPage, setBusinessesPerPage] = useState(defaultPageSize ?? 6)
  const [currentPage, setCurrentPage] = useState(1)
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

  const closeSelect = (e) => {
    if (isOpen) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        close()
      }
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

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [isOpen])

  return (
    <PopMenuContatiner ref={dropdownReference}>
      <SelectHeaderContent>
        <BusinessSearch>
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={onSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </BusinessSearch>
        <BusinessList>
          {businessList.loading ? (
            [...Array(businessesPerPage).keys()].map(i => (
              <OptionItem key={i}>
                <Skeleton width={38} height={38} style={{ borderRadius: '7.6px' }} />
                <div style={{ marginLeft: '8px', marginRight: '8px' }}>
                  <Skeleton height={15} width={100} />
                  <Skeleton height={12} width={80} style={{ marginTop: '7px' }} />
                </div>
              </OptionItem>
            ))
          ) : (
            <>
              {currentBusinessess && currentBusinessess.length > 0 && (
                currentBusinessess.map(business => (
                  <OptionItem key={business.id} onClick={() => changBusinessState(business)}>
                    <img src={optimizeImage(business?.logo, 'h_50,c_limit')} alt='' />
                    <span><b>{business?.name}</b>{business?.city?.name}</span>
                  </OptionItem>
                ))
              )}
            </>
          )}
        </BusinessList>
        {pagination && (
          <WrapperPagination className='pagination-container'>
            {!businessList.loading && totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={businessesPerPage}
                handleChangePageSize={handleChangePageSize}
                isHidePagecontrol
              />
            )}
          </WrapperPagination>
        )}
      </SelectHeaderContent>
    </PopMenuContatiner>
  )
}

export const BusinessSelectHeader = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessessListingUI,
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
