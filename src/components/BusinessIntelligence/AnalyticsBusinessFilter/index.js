import React, { useState, useEffect } from 'react'
import { useLanguage, AnalyticsBusinessFilter as AnalyticsBusinessFilterController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { CheckSquareFill as Checked, Square as UnChecked } from 'react-bootstrap-icons'
import { SearchBar, Pagination } from '../../Shared'
import { Button } from '../../../styles'
import {
  AnalyticsBusinessFilterContainer,
  BusinessFilterOption,
  BusinessName,
  FilterBtnWrapper,
  SearchWrapper
} from './styles'

const AnalyticsBusinessFilterUI = (props) => {
  const {
    businessList,
    businessIds,
    handleChangeBusinessId,
    handleClickFilterButton,
    isAllCheck,
    handleChangeAllCheck,
    searchValue,
    onSearch
  } = props

  const [, t] = useLanguage()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  useEffect(() => {
    if (businessList.loading) return
    let _totalPages
    if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentBusinessList = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentBusinessList)
  }, [businessList, currentPage, pagesPerPage])

  return (
    <>
      <AnalyticsBusinessFilterContainer>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
            lazyLoad
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </SearchWrapper>
        {businessList.loading ? (
          [...Array(10).keys()].map(i => (
            <BusinessFilterOption key={i}>
              <Skeleton width={18} height={18} />
              <BusinessName>
                <Skeleton width={120} height={24} />
              </BusinessName>
            </BusinessFilterOption>
          ))
        ) : (
          <div>
            {currentPages.length > 0 && (
              <BusinessFilterOption
                onClick={handleChangeAllCheck}
              >
                {isAllCheck ? (
                  <Checked className='fill' />
                ) : (
                  <UnChecked />
                )}
                <BusinessName>{t('ALL', 'All')}</BusinessName>
              </BusinessFilterOption>
            )}
            {currentPages.map((business, i) => (
              <BusinessFilterOption
                key={i}
                onClick={() => handleChangeBusinessId(business?.id)}
              >
                {businessIds?.includes(business.id) ? (
                  <Checked className='fill' />
                ) : (
                  <UnChecked />
                )}
                <BusinessName>{business?.name}</BusinessName>
              </BusinessFilterOption>
            ))}
            {businessList?.businesses?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pagesPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </div>
        )}
      </AnalyticsBusinessFilterContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={businessList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const AnalyticsBusinessFilter = (props) => {
  const AnalyticsBusinessFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'slug', 'franchise_id'],
    isSearchByName: true,
    UIComponent: AnalyticsBusinessFilterUI
  }
  return <AnalyticsBusinessFilterController {...AnalyticsBusinessFilterProps} />
}
