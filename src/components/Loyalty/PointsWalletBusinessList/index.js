import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, PointsWalletBusinessList as PointsWalletBusinessListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { SearchBar, Pagination, Modal, SideBar } from '../../Shared'
import { Button, Checkbox } from '../../../styles'
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
import { PointsWalletBusinessDetail } from '../PointsWalletBusinessDetail'

const PointsWalletBusinessListUI = (props) => {
  const {
    businessList,
    handleParentSidebarMove,
    pointWallet,
    handleCheckBox,
    handleUpdateWalletBusiness,
    handleUpdateBusinessList
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
  const [searchVal, setSearchVal] = useState('')

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const handleClickBusiness = (business, e) => {
    if (e.target.closest('#accumulates') || e.target.closest('#redeems')) return
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

  const updateBusinessList = (business) => {
    setSelectedBusiness({ ...selectedBusiness, ...business })
    handleUpdateBusinessList(business)
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
    let filteredBusinessList = []
    if (businessList?.businesses.length > 0) {
      if (searchVal) {
        filteredBusinessList = businessList.businesses.filter(business => business?.business_name.toLowerCase().includes(searchVal.toLowerCase()))
      } else {
        filteredBusinessList = [...businessList.businesses]
      }
    }
    const _totalPages = Math.ceil(filteredBusinessList.length / pagesPerPage)
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentBusinessList = filteredBusinessList.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentBusinessList)
  }, [businessList, currentPage, pagesPerPage, searchVal])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchVal])

  return (
    <Container>
      <SearchWrapper>
        <SearchBar
          search={searchVal}
          isCustomLayout
          lazyLoad
          onSearch={(value) => setSearchVal(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchWrapper>

      {pointWallet?.type !== 'credit_point' && (
        <BusinessSelectOption>
          <Button color='secundaryDark'>{t('SELECT_ALL', 'Select all')}</Button>
          <Button color='secundaryDark'>{t('SELECT_NONE', 'Select none')}</Button>
        </BusinessSelectOption>
      )}

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
                      <WrapperImage isSkeleton>
                        <Skeleton width={38} height={38} />
                      </WrapperImage>
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
                onClick={(e) => handleClickBusiness(business, e)}
              >
                <tr>
                  <td>
                    <BusinessInfoWrapper>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(business?.business_logo || theme.images?.dummies?.businessLogo, 'h_120,c_limit')} />
                      </WrapperImage>
                      <span>{business?.business_name}</span>
                    </BusinessInfoWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <Checkbox
                        defaultChecked={business?.redeems}
                        id='redeems'
                        onClick={(e) => handleCheckBox(business.business_id, 'redeems', e.target.checked)}
                      />
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <Checkbox
                        defaultChecked={business?.accumulates}
                        id='accumulates'
                        onClick={(e) => handleCheckBox(business.business_id, 'accumulates', e.target.checked)}
                      />
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
      {currentPages?.length > 0 && (
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
              <PointsWalletBusinessDetail
                walletData={selectedBusiness}
                handleUpdateWalletBusiness={handleUpdateWalletBusiness}
                handleUpdateBusinessList={updateBusinessList}
                isBusiness
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
              <PointsWalletBusinessDetail
                walletData={selectedBusiness}
                handleUpdateWalletBusiness={handleUpdateWalletBusiness}
                handleUpdateBusinessList={updateBusinessList}
                isBusiness
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const PointsWalletBusinessList = (props) => {
  const pointsWalletBusinessListProps = {
    ...props,
    propsToFetch: ['id', 'name', 'logo'],
    UIComponent: PointsWalletBusinessListUI
  }
  return <PointsWalletBusinessListController {...pointsWalletBusinessListProps} />
}
