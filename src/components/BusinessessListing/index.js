import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BusinessesList } from '../BusinessesList'
import { DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { BusinessListingHeader } from '../BusinessListingHeader'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import BsGrid from '@meronex/icons/bs/BsGrid'
import BsViewList from '@meronex/icons/bs/BsViewList'
import { BusinessDetails } from '../BusinessDetails'
import { ImportersLateralBar } from '../ImportersLateralBar'
import { AddBusinessForm } from '../AddBusinessForm'
import { SideBar } from '../SideBar'
import { getStorageItem, setStorageItem } from '../../utils'
import { WizardBusiness } from '../WizardBusiness'

import {
  BusinessListingContainer,
  ViewContainer,
  WrapperView,
  ViewMethodButton
} from './styles'

const BusinessessListingUI = (props) => {
  const {
    businessList,
    pagination,
    searchValue,
    selectedBusinessActiveState,
    handleChangeBusinessActiveState,
    handleChangeBusinessType,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness,
    handleSucessUpdateBusiness,
    onSearch,
    onBusinessRedirect,
    getPageBusinesses
  } = props

  const query = new URLSearchParams(useLocation().search)

  const [isFirstVisited, setIsFirstVisited] = useState(true)
  const [openTutorialSidebarState, setOpenTutorialSidebarState] = useState(null)

  const [viewMethod, setViewMethod] = useState('list')
  const [openBusinessDetails, setOpenBusinessDetails] = useState(false)
  const [detailsBusiness, setDetailsBusiness] = useState(null)
  const [detailsBusinessId, setDetailsBusinessId] = useState(null)
  const [openAddBusiness, setOpenAddBusiness] = useState(false)
  const [openImportCsvForm, setOpenImportCsvForm] = useState(false)
  const [businessTypes, setBusinessTypes] = useState([])

  const handleBackRedirect = () => {
    setOpenBusinessDetails(false)
    setDetailsBusiness(null)
    setDetailsBusinessId(null)
    onBusinessRedirect()
  }

  const handleOpenBusinessDetails = (business) => {
    setOpenAddBusiness(false)
    setDetailsBusiness(business)
    setDetailsBusinessId(business.id)
    setOpenBusinessDetails(true)
    onBusinessRedirect(business.id)
  }

  const handleOpenAddBusiness = () => {
    const id = query.get('id')
    if (id) {
      handleBackRedirect()
    }
    setOpenAddBusiness(true)
  }

  const handleOpenImportCSV = () => {
    setOpenImportCsvForm(true)
  }

  const onhandleSuccessAddBusiness = (business) => {
    handleSucessAddBusiness(business)
    setOpenAddBusiness(false)
    setDetailsBusiness(business)
    if (isFirstVisited) {
      setOpenTutorialSidebarState('schedule')
    } else {
      handleOpenBusinessDetails(business)
    }
  }

  useEffect(() => {
    const id = query.get('id')
    if (id === null) setOpenBusinessDetails(false)
    else {
      setDetailsBusinessId(id)
      onBusinessRedirect && onBusinessRedirect(id)
      setOpenBusinessDetails(true)
    }
  }, [])

  const handleSetStorage = async () => {
    const preVisited = await getStorageItem('visited', true)
    if (!preVisited?.businesses_page) {
      const visited = {
        ...preVisited,
        businesses_page: true
      }
      await setStorageItem('visited', visited, true)
      setIsFirstVisited(true)
    }
  }

  useEffect(() => {
    handleSetStorage()
  }, [])

  return (
    <>
      <BusinessListingContainer>
        <BusinessListingHeader
          searchValue={searchValue}
          onSearch={onSearch}
          handleOpenAddBusiness={handleOpenAddBusiness}
          handleOpenImportCSV={handleOpenImportCSV}
        />
        <ViewContainer>
          <BusinessActiveStateFilter
            selectedBusinessActiveState={selectedBusinessActiveState}
            handleChangeBusinessActiveState={handleChangeBusinessActiveState}
          />
          <WrapperView>
            <ViewMethodButton
              active={viewMethod === 'card'}
              onClick={() => setViewMethod('card')}
            >
              <BsGrid />
            </ViewMethodButton>
            <ViewMethodButton
              active={viewMethod === 'list'}
              onClick={() => setViewMethod('list')}
            >
              <BsViewList />
            </ViewMethodButton>
          </WrapperView>
        </ViewContainer>
        <BusinessTypeFilter
          businessTypes={props.businessTypes}
          defaultBusinessType={props.defaultBusinessType}
          handleChangeBusinessType={handleChangeBusinessType}
          setBusinessTypes={setBusinessTypes}
        />
        <BusinessesList
          viewMethod={viewMethod}
          businessList={businessList}
          pagination={pagination}
          detailsBusinessId={detailsBusinessId}
          loadMoreBusinesses={loadMoreBusinesses}
          getPageBusinesses={getPageBusinesses}
          handleSucessRemoveBusiness={handleSucessRemoveBusiness}
          handleSucessAddBusiness={handleSucessAddBusiness}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          handleOpenBusinessDetails={handleOpenBusinessDetails}
          handleOpenAddBusiness={handleOpenAddBusiness}
          searchValue={searchValue}
          isFirstVisited={isFirstVisited}
        />
      </BusinessListingContainer>
      {openBusinessDetails && (
        <BusinessDetails
          open={openBusinessDetails}
          // business={detailsBusiness}
          businessTypes={businessTypes}
          businessId={detailsBusinessId}
          handleSucessAddBusiness={handleSucessAddBusiness}
          handleSucessRemoveBusiness={handleSucessRemoveBusiness}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          setBusinessTypes={setBusinessTypes}
          onClose={() => handleBackRedirect()}
        />
      )}
      {openAddBusiness && (
        <SideBar
          id='add_business_form'
          open={openAddBusiness}
          onClose={() => setOpenAddBusiness(false)}
        >
          <AddBusinessForm
            isFirstVisited={isFirstVisited}
            handleSucessAddBusiness={onhandleSuccessAddBusiness}
          />
        </SideBar>
      )}
      {openImportCsvForm && (
        <ImportersLateralBar
          open={openImportCsvForm}
          onClose={() => setOpenImportCsvForm(false)}
        />
      )}

      <WizardBusiness
        isFirstVisited={isFirstVisited}
        openTutorialSidebarState={openTutorialSidebarState}
        setOpenTutorialSidebarState={setOpenTutorialSidebarState}
        business={detailsBusiness}
        handleSucessUpdateBusiness={handleSucessUpdateBusiness}
      />
    </>
  )
}

export const BusinessessListing = (props) => {
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
