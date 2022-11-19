import React, { useState, useEffect } from 'react'
import { useLanguage, CountryList } from 'ordering-components-admin'
import { Button } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { SearchBar, Pagination } from '../../Shared'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import {
  Container,
  SearchWrapper,
  CountryListWrapper,
  CountryItem,
  ButtonWrapper,
  PaginationWrapper
} from './styles'

const CountryFilterUI = (props) => {
  const {
    countriesState,
    searchValue,
    onSearch,
    handleClickFilterButton,
    countryCode,
    handleChangeCode
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
    if (countriesState.loading) return
    let _totalPages
    if (countriesState.countries.length > 0) {
      _totalPages = Math.ceil(countriesState.countries.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentBusinessList = countriesState.countries.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentBusinessList)
  }, [countriesState, currentPage, pagesPerPage])

  return (
    <>
      <Container>
        <h2>{t('CHOOSE_A_COUNTRY', 'Choose a country')}</h2>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
            lazyLoad
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </SearchWrapper>
        <CountryListWrapper>
          {countriesState?.loading ? (
            <>
              {[...Array(10).keys()].map(i => (
                <CountryItem
                  key={i}
                >
                  <Skeleton width={18} height={18} circle />
                  <Skeleton width={200} height={20} style={{ marginLeft: 10 }} />
                </CountryItem>
              ))}
            </>
          ) : (
            <>
              {currentPages?.map(country => (
                <CountryItem key={country?.id} onClick={() => handleChangeCode(country?.code)}>
                  {countryCode === country?.code ? <RecordCircleFill className='checked' /> : <Circle />}
                  <span className='name'>{country?.name}</span>
                </CountryItem>
              ))}
            </>
          )}
        </CountryListWrapper>
        <PaginationWrapper>
          {countriesState?.countries?.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangePage={handleChangePage}
              defaultPageSize={pagesPerPage}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </PaginationWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          disabled={countriesState.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </ButtonWrapper>
    </>

  )
}

export const CountryFilter = (props) => {
  const countryFilterProps = {
    ...props,
    UIComponent: CountryFilterUI,
    isSearchByName: true
  }
  return <CountryList {...countryFilterProps} />
}
