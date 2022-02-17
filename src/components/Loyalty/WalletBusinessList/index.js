import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, AnalyticsBusinessFilter as AnalyticsBusinessFilterController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { SearchBar, Pagination, Modal, SideBar } from '../../Shared'
import { Button } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'
import {
  Container,
  SearchWrapper,
  BusinessSelectOption,
  TableWrapper,
  BusinessTable,
  TBoday,
  BusinessInfoWrapper,
  WrapperImage,
  Image,
  CheckBoxWrapper,
  ModifiedWrapper
} from './styles'
import { LoyaltyBusinessDetail } from '../LoyaltyBusinessDetail'

const WalletBusinessListUI = (props) => {
  const {
    businessList,
    businessIds,
    searchValue,
    onSearch,
    handleParentSidebarMove
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [extraOpen, setExtraOpen] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const isCheckEnableSate = (id) => {
    const found = businessIds?.find(businessId => businessId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  const handleClickBusiness = (business) => {
    setSelectedBusiness(business)
    setExtraOpen(true)
    if (width >= 1100) {
      handleParentSidebarMove(550)
    }
  }

  const handleCloseBusinessDetail = () => {
    setExtraOpen(false)
    setSelectedBusiness(null)
    handleParentSidebarMove(0)
  }

  useEffect(() => {
    if (width < 1100) {
      handleParentSidebarMove(0)
    } else {
      if (extraOpen) handleParentSidebarMove(550)
    }
  }, [width, extraOpen])

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
      <BusinessSelectOption>
        <Button color='secundaryDark'>{t('SELECT_ALL', 'Select all')}</Button>
        <Button color='secundaryDark'>{t('SELECT_NONE', 'Select none')}</Button>
      </BusinessSelectOption>
      <TableWrapper>
        {businessList.loading ? (
          <BusinessTable>
            <thead>
              <tr>
                <th className='business-info'>
                  <Skeleton width={100} height={17} />
                </th>
                <th><Skeleton width={80} height={17} /></th>
                <th><Skeleton width={100} height={17} /></th>
                <th />
              </tr>
            </thead>
            {[...Array(7).keys()].map(i => (
              <TBoday key={i}>
                <tr>
                  <td>
                    <BusinessInfoWrapper>
                      <WrapperImage isSkeleton />
                      <Skeleton width={80} height={15} />
                    </BusinessInfoWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <Skeleton width={20} height={20} />
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <Skeleton width={20} height={20} />
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <ModifiedWrapper isSkeleton>
                      <Skeleton width={17} height={17} />
                      <Skeleton width={80} height={15} />
                    </ModifiedWrapper>
                  </td>
                </tr>
              </TBoday>
            ))}
          </BusinessTable>
        ) : (
          <BusinessTable>
            <thead>
              <tr>
                <th className='business-info'>{t('BUSINESSES', 'Businesses')}</th>
                <th>{t('Redeeem', 'Redeeem')}</th>
                <th>{t('ACCUMULATION', 'Accumulation')}</th>
                <th />
              </tr>
            </thead>
            {currentPages.map((business, i) => (
              <TBoday
                key={i}
                active={business?.id === selectedBusiness?.id}
                onClick={() => handleClickBusiness(business)}
              >
                <tr>
                  <td>
                    <BusinessInfoWrapper>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_120,c_limit')} />
                      </WrapperImage>
                      <span>{business?.name}</span>
                    </BusinessInfoWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      {isCheckEnableSate(business.id) ? (
                        <RiCheckboxFill className='fill' />
                      ) : (
                        <RiCheckboxBlankLine />
                      )}
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      {isCheckEnableSate(business.id) ? (
                        <RiCheckboxFill className='fill' />
                      ) : (
                        <RiCheckboxBlankLine />
                      )}
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <ModifiedWrapper>
                      <ChevronRight />
                      {business.name === 'Grilled' && (
                        <span>{t('MODIFIED', 'Modified')}</span>
                      )}
                    </ModifiedWrapper>
                  </td>
                </tr>
              </TBoday>
            ))}
          </BusinessTable>
        )}
      </TableWrapper>
      {businessList?.businesses?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
          defaultPageSize={pagesPerPage}
          handleChangePageSize={handleChangePageSize}
        />
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
              <LoyaltyBusinessDetail
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
              <LoyaltyBusinessDetail
                business={selectedBusiness}
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const WalletBusinessList = (props) => {
  const walletBusinessListProps = {
    ...props,
    propsToFetch: ['id', 'name', 'slug', 'logo'],
    isSearchByName: true,
    UIComponent: WalletBusinessListUI
  }
  return <AnalyticsBusinessFilterController {...walletBusinessListProps} />
}
