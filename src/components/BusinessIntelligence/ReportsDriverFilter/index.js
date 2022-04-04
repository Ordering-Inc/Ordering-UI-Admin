import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { SearchBar, Pagination } from '../../Shared'
import {
  AnalyticsBusinessFilterContainer,
  BusinessFilterOption,
  BusinessName,
  FilterBtnWrapper,
  SearchWrapper
} from './styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../../styles'
import { useLanguage, ReportsDriverFilter as ReportsDriverFilterController } from 'ordering-components-admin'

const ReportsDriverFilterUI = (props) => {
  const {
    driverList,
    driverIds,
    handleChangeDriverId,
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

  const isCheckEnableSate = (id) => {
    const found = driverIds?.find(businessId => businessId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  useEffect(() => {
    if (driverList.loading) return
    let _totalPages
    if (driverList?.drivers?.length > 0) {
      _totalPages = Math.ceil(driverList?.drivers?.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentDriverList = driverList.drivers.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentDriverList)
  }, [driverList, currentPage, pagesPerPage])

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
        {driverList.loading ? (
          [...Array(10).keys()].map(i => (
            <BusinessFilterOption key={i}>
              <Skeleton width={15} height={15} />
              <BusinessName>
                <Skeleton width={120} height={24} />
              </BusinessName>
            </BusinessFilterOption>
          ))
        ) : (
          <div>
            <BusinessFilterOption
              onClick={handleChangeAllCheck}
            >
              {isAllCheck ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <BusinessName>{t('ALL', 'All')}</BusinessName>
            </BusinessFilterOption>
            {currentPages.map((driver, i) => (
              <BusinessFilterOption
                key={i}
                onClick={() => handleChangeDriverId(driver?.id)}
              >
                {isCheckEnableSate(driver.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <BusinessName>{driver?.name}</BusinessName>
              </BusinessFilterOption>
            ))}
            {driverList?.drivers?.length > 0 && (
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
          disabled={driverList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const ReportsDriverFilter = (props) => {
  const AnalyticsBusinessFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'lastname', 'driver_groups.id'],
    isSearchByName: true,
    isSearchByLastName: true,
    UIComponent: ReportsDriverFilterUI
  }
  return <ReportsDriverFilterController {...AnalyticsBusinessFilterProps} />
}
