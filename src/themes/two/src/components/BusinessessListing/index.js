import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BusinessList } from '../BusinessList'
import { DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import { BusinessListingHeader } from '../BusinessListingHeader'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import BsGrid from '@meronex/icons/bs/BsGrid'
import BsViewList from '@meronex/icons/bs/BsViewList'

import {
  BusinessListingContainer,
  ViewContainer,
  WrapperView,
  ViewMethodButton
} from './styles'
import { BusinessDetails } from '../BusinessDetails'

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
    onBusinessRedirect
  } = props

  const query = new URLSearchParams(useLocation().search)

  const [viewMethod, setViewMethod] = useState('list')
  const [openBusinessDetails, setOpenBusinessDetails] = useState(false)
  const [detailsBusiness, setDetailsBusiness] = useState(null)
  const [detailsBusinessId, setDetailsBusinessId] = useState(null)
  const [openAddBusiness, setOpenAddBusiness] = useState(false)

  const handleBackRedirect = () => {
    setOpenBusinessDetails(false)
    onBusinessRedirect()
  }

  const handleOpenBusinessDetails = (business) => {
    setDetailsBusiness(business)
    setDetailsBusinessId(business.id)
    setOpenBusinessDetails(true)
    onBusinessRedirect(business.id)
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
          setOpenAddBusiness={setOpenBusinessDetails}
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
        />
        <BusinessList
          viewMethod={viewMethod}
          businessList={businessList}
          pagination={pagination}
          loadMoreBusinesses={loadMoreBusinesses}
          handleSucessRemoveBusiness={handleSucessRemoveBusiness}
          handleSucessAddBusiness={handleSucessAddBusiness}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          handleOpenBusinessDetails={handleOpenBusinessDetails}
        />
      </BusinessListingContainer>
      {openBusinessDetails && (
        <BusinessDetails
          open={openBusinessDetails}
          business={detailsBusiness}
          businessId={detailsBusinessId}
          handleSucessAddBusiness={handleSucessAddBusiness}
          handleSucessRemoveBusiness={handleSucessRemoveBusiness}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          onClose={() => handleBackRedirect()}
        />
      )}
    </>
  )
}

export const BusinessessListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessessListingUI,
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
