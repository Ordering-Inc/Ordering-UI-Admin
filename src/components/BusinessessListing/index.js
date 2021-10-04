import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { BusinessListingHeader } from '../BusinessListingHeader'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import BsGrid from '@meronex/icons/bs/BsGrid'
import BsViewList from '@meronex/icons/bs/BsViewList'
import { BusinessDetails } from '../BusinessDetails'
import { AddBusinessSidebar } from '../AddBusinessSidebar'
import { SideBar } from '../SideBar'
import { ImportCustomCSVForm } from '../ImportCustomCSVForm'

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
    handleOpenBusinessDetails(business)
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
        <BusinessList
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
        <AddBusinessSidebar
          open={openAddBusiness}
          onClose={() => setOpenAddBusiness(false)}
          handleSucessAddBusiness={onhandleSuccessAddBusiness}
        />
      )}
      {openImportCsvForm && (
        <SideBar
          sidebarId='importCsvForm'
          open={openImportCsvForm}
          onClose={() => setOpenImportCsvForm(false)}
        >
          <ImportCustomCSVForm
            onClose={() => setOpenImportCsvForm(false)}
          />
        </SideBar>
      )}
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
