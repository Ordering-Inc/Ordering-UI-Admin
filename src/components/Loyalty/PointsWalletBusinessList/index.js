import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, PointsWalletBusinessList as PointsWalletBusinessListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { SearchBar, Pagination, Modal, SideBar, Alert } from '../../Shared'
import { Switch } from '../../../styles'
import { ChevronRight, Square, CheckSquareFill } from 'react-bootstrap-icons'
import { PointsWalletBusinessDetail } from '../PointsWalletBusinessDetail'
import {
  Container,
  SearchWrapper,
  // BusinessSelectOption,
  TableWrapper,
  BusinessTable,
  TBoday,
  BusinessInfoWrapper,
  WrapperImage,
  Image,
  CheckBoxWrapper,
  ModifiedWrapper,
  CheckBoxInnerWrapper
} from './styles'

const PointsWalletBusinessListUI = (props) => {
  const {
    businessList,
    handleParentSidebarMove,
    pointWallet,
    handleCheckBox,
    handleUpdateWalletBusiness,
    handleUpdateBusinessList,
    handleChangeSwitch,
    isCloseBusinessDetails
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [extraOpen, setExtraOpen] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [searchVal, setSearchVal] = useState('')

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const handleClickBusiness = (business, e) => {
    if (e.target.closest('.accumulates') || e.target.closest('.redeems') || e.target.closest('.wallet_enabled')) return
    if (!pointWallet) {
      setAlertState({ open: true, content: [t('YOU_MUST_CREATE_LOYALTY_PLAN', 'You must create a loyalty plan')] })
      return
    }
    if (!business?.wallet_enabled) {
      setAlertState({ open: true, content: t('DISABLED_BUSINESS', 'Disabled business') })
      return
    }
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

  const updateBusinessList = (changes) => {
    const updatedBusiness = { ...selectedBusiness, ...changes }
    setSelectedBusiness(updatedBusiness)
    handleUpdateBusinessList(selectedBusiness?.id, changes)
  }

  const handleUpdateStatus = (businessId, enabled) => {
    if (!enabled) handleCloseBusinessDetail()
    handleChangeSwitch && handleChangeSwitch(businessId, enabled)
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
        filteredBusinessList = businessList.businesses.filter(business => business?.name?.toLowerCase().includes(searchVal?.toLowerCase()))
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

  useEffect(() => {
    if (!isCloseBusinessDetails) return
    setExtraOpen(false)
    setSelectedBusiness(null)
  }, [isCloseBusinessDetails])

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

      {/* {pointWallet?.type !== 'credit_point' && (
        <BusinessSelectOption>
          <Button color='secundaryDark'>{t('SELECT_ALL', 'Select all')}</Button>
          <Button color='secundaryDark'>{t('SELECT_NONE', 'Select none')}</Button>
        </BusinessSelectOption>
      )} */}

      <TableWrapper>
        {businessList.loading ? (
          <BusinessTable>
            <thead>
              <tr>
                <th className='business-info'>
                  <Skeleton width={100} height={17} />
                </th>
                <th><Skeleton width={60} height={17} /></th>
                <th><Skeleton width={80} height={17} /></th>
                <th><Skeleton width={90} height={17} /></th>
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
                      <Skeleton width={40} height={20} />
                    </CheckBoxWrapper>
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
                <th>{t('ORDERS_BOX_STATUS_HEADER', 'Status')}</th>
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
                        <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_120,c_limit')} />
                      </WrapperImage>
                      <span>{business?.name}</span>
                    </BusinessInfoWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <Switch
                        className='wallet_enabled'
                        defaultChecked={business?.wallet_enabled}
                        onChange={val => handleUpdateStatus(business.id, val)}
                      />
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <CheckBoxInnerWrapper
                        onClick={(e) => handleCheckBox(business.id, 'redeems', !business?.redeems)}
                        className='redeems'
                        noClick={!business?.wallet_enabled}
                      >
                        {business?.redeems ? <CheckSquareFill className='fill' /> : <Square />}
                      </CheckBoxInnerWrapper>
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <CheckBoxWrapper>
                      <CheckBoxInnerWrapper
                        onClick={(e) => handleCheckBox(business.id, 'accumulates', !business?.accumulates)}
                        className='accumulates'
                        noClick={!business?.wallet_enabled}
                      >
                        {business?.accumulates ? <CheckSquareFill className='fill' /> : <Square />}
                      </CheckBoxInnerWrapper>
                    </CheckBoxWrapper>
                  </td>
                  <td>
                    <ModifiedWrapper>
                      <ChevronRight />
                      {/* {business.name === 'Grilled' && (
                        <span>{t('MODIFIED', 'Modified')}</span>
                      )} */}
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
      <Alert
        title={t('POINTS_WALLET', 'Points wallet')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
