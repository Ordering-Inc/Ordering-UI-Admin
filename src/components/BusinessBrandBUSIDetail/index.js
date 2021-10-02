import React, { useEffect, useState } from 'react'
import { SearchBar } from '../SearchBar'
import {
  useLanguage,
  useUtils,
  BusinessBrandBUSIDetail as BusinessBrandBUSIDetailController
} from 'ordering-components-admin'
import { Pagination } from '../Pagination'
import { Checkbox } from '../../styles'
import { useTheme } from 'styled-components'
import {
  BrandBUSIDetailContainer,
  SearchWrapper,
  BusinessListWrapper,
  BusinessItemContainer,
  WrapperImage,
  Image,
  BusinessName,
  NoSelectedBrand
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../NotFoundSource'

const BusinessBrandBUSIDetailUI = (props) => {
  const {
    searchValue,
    onSearch,
    businessList,
    brand,
    handleChangeCheckBox
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

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
    const _currentProducts = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentProducts)
  }, [businessList, currentPage, pagesPerPage])

  useEffect(() => {
    if (searchValue) setCurrentPage(1)
  }, [searchValue])

  return (
    <BrandBUSIDetailContainer>
      <SearchWrapper>
        <SearchBar
          search={searchValue}
          isCustomLayout
          onSearch={(value) => onSearch(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchWrapper>
      {
        brand ? (
          businessList?.loading ? (
            <BusinessListWrapper>
              {
                [...Array(5).keys()].map(i => (
                  <BusinessItemContainer key={i}>
                    <Skeleton width={16} height={16} />
                    <label>
                      <WrapperImage>
                        <Skeleton className='d-flex h-100' />
                      </WrapperImage>
                      <BusinessName>
                        <Skeleton width={100} />
                      </BusinessName>
                    </label>
                  </BusinessItemContainer>
                ))
              }
            </BusinessListWrapper>
          ) : (
            <BusinessListWrapper>
              {
                currentPages?.length > 0 ? currentPages.map((business, i) => (
                  <BusinessItemContainer key={i}>
                    <Checkbox
                      id={business?.id}
                      defaultChecked={business?.franchise_id === brand?.id}
                      onClick={(e) => handleChangeCheckBox(e, business.id, brand?.id)}
                    />
                    <label htmlFor={business?.id}>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
                      </WrapperImage>
                      <BusinessName>{business?.name}</BusinessName>
                    </label>
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
          )
        ) : (
          <NoSelectedBrand>{t('NO_SELECTED_BRAND', 'There is no selected brand')}</NoSelectedBrand>
        )
      }
    </BrandBUSIDetailContainer>
  )
}

export const BusinessBrandBUSIDetail = (props) => {
  const businessBrandBUSIDetailProps = {
    ...props,
    UIComponent: BusinessBrandBUSIDetailUI,
    propsToFetch: ['id', 'name', 'logo', 'franchise_id'],
    isSearchByName: true
  }
  return <BusinessBrandBUSIDetailController {...businessBrandBUSIDetailProps} />
}
