import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { SearchBar } from '../SearchBar'
import {
  AnalyticsBusinessFilterContainer,
  BusinessFilterOption,
  BusinessName,
  FilterBtnWrapper,
  SearchWrapper
} from './styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../styles/Buttons'
import { Pagination } from '../Pagination'
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
    onSearch,
    paginationProps,
    getDrivers
  } = props

  const [, t] = useLanguage()

  const isCheckEnableSate = (id) => {
    const found = driverIds?.find(businessId => businessId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  const handleChangePage = (page) => {
    getDrivers(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getDrivers(expectedPage, pageSize)
  }

  useEffect(() => {
    if (driverList.loading || driverList.drivers.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [driverList.drivers, paginationProps])

  return (
    <>
      <AnalyticsBusinessFilterContainer>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
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
            {driverList?.drivers.map((driver, i) => (
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
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
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
