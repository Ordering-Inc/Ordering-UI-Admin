import React, { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent, DashboardBusinessList as BusinessListController } from 'ordering-components-admin'
import BsGrid from '@meronex/icons/bs/BsGrid'
import BsViewList from '@meronex/icons/bs/BsViewList'
import { getStorageItem, setStorageItem } from '../../../utils'
import { SideBar } from '../../Shared'
import { useTheme } from 'styled-components'

import { BusinessesList } from '../BusinessesList'
import { BusinessesListingHeader } from '../BusinessesListingHeader'
import { BusinessActiveStateFilter } from '../BusinessActiveStateFilter'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { BusinessDetails } from '../BusinessDetails'
// import { AddBusinessForm } from '../AddBusinessForm'
import { WizardBusiness } from '../WizardBusiness'

import {
  BusinessListingContainer,
  ViewContainer,
  WrapperView,
  ViewMethodButton,
  ButtonGroup,
  EmptyBusinessWrapper
} from './styles'
import { BusinessSync } from '../BusinessSync'
import { BusinessDelete } from '../BusinessDelete'
import { Button } from '../../../styles'

const BusinessesListingUI = (props) => {
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
    loadBusinesses,
    onSearch,
    onBusinessRedirect,
    getPageBusinesses,
    businessIds,
    handleChangeBusinessIds,
    handleEnableAllBusiness,
    handleDeleteMultiBusinesses,
    setBusinessIds
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [isTutorialMode, setIsTutorialMode] = useState(false)
  const [openTutorialSidebarState, setOpenTutorialSidebarState] = useState(null)

  const [viewMethod, setViewMethod] = useState('list')
  const [openBusinessDetails, setOpenBusinessDetails] = useState(false)
  const [detailsBusiness, setDetailsBusiness] = useState(null)
  const [detailsBusinessId, setDetailsBusinessId] = useState(null)
  const [openAddBusiness, setOpenAddBusiness] = useState(false)
  const [businessTypes, setBusinessTypes] = useState([])
  const [openSync, setOpenSync] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

  const noBusinesses = useMemo(() => {
    return !businessList?.loading && businessList?.businesses?.length === 0 && pagination?.currentPage === 1 && !searchValue
  }, [businessList?.loading, businessList?.businesses, pagination, searchValue])

  const handleGotToAdd = () => {
    events.emit('go_to_page', { page: 'business_add' })
  }

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

  // const onhandleSuccessAddBusiness = (business) => {
  //   handleSucessAddBusiness(business)
  //   setOpenAddBusiness(false)
  //   setDetailsBusiness(business)
  //   if (isTutorialMode) {
  //     setOpenTutorialSidebarState('schedule')
  //   } else {
  //     handleOpenBusinessDetails(business)
  //   }
  // }

  useEffect(() => {
    const id = query.get('id')
    if (id === null) setOpenBusinessDetails(false)
    else {
      setDetailsBusinessId(id)
      onBusinessRedirect && onBusinessRedirect(id)
      setOpenBusinessDetails(true)
    }
  }, [])

  const handleStartTutorial = () => {
    setIsTutorialMode(true)
    handleOpenAddBusiness()
  }

  const handleSetStorage = async () => {
    const preVisited = await getStorageItem('visited', true)
    if (!preVisited?.businesses_page) {
      const visited = {
        ...preVisited,
        businesses_page: true
      }
      await setStorageItem('visited', visited, true)
      setIsTutorialMode(true)
    }
  }

  const handleViewMethod = (method) => {
    setViewMethod(method)
    if (method === 'list') {
      getPageBusinesses(10, 1)
    }
    if (method === 'card') {
      getPageBusinesses(50, 1)
    }
  }

  const handleOpenSync = () => {
    setOpenSync(true)
  }

  const handleCloseSync = () => {
    setMoveDistance(0)
    setOpenSync(false)
  }

  useEffect(() => {
    handleSetStorage()
  }, [])

  return (
    <>
      <BusinessListingContainer isAdd={openAddBusiness}>
        <BusinessesListingHeader
          searchValue={searchValue}
          onSearch={onSearch}
          handleOpenAddBusiness={handleOpenAddBusiness}
          handleGotToAdd={handleGotToAdd}
          handleStartTutorial={handleStartTutorial}
          handleOpenSync={handleOpenSync}
          handleRefreshBusinesses={loadBusinesses}
          loading={businessList.loading}
          noBusinesses={noBusinesses}
          openAddBusiness={openAddBusiness}
        />
        {noBusinesses ? (
          <EmptyBusinessWrapper>
            <img src={theme.images.dummies.noBusinesses} alt='' />
            <h2>{t('NO_BUSINESSES_DESCRIPTION', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus adipiscing risus odio. Turpis nibh phasellus interdum vulputate urna, cursus pellentesque. Nec quis donec lobortis enim magna non turpis faucibus. ')}</h2>
            <Button
              color='primary'
              borderRadius='7.6px'
              onClick={() => handleGotToAdd()}
            >
              {t('ADD_NEW_STORE', 'Add new store')}
            </Button>
          </EmptyBusinessWrapper>
        ) : (
          <>
            <ViewContainer>
              <BusinessActiveStateFilter
                selectedBusinessActiveState={selectedBusinessActiveState}
                handleChangeBusinessActiveState={handleChangeBusinessActiveState}
              />
              <WrapperView>
                <ViewMethodButton
                  active={viewMethod === 'card'}
                  onClick={() => handleViewMethod('card')}
                >
                  <BsGrid />
                </ViewMethodButton>
                <ViewMethodButton
                  active={viewMethod === 'list'}
                  onClick={() => handleViewMethod('list')}
                >
                  <BsViewList />
                </ViewMethodButton>
              </WrapperView>
            </ViewContainer>
            <ButtonGroup isSelect={businessIds?.length > 0}>
              <BusinessTypeFilter
                businessTypes={props.businessTypes}
                defaultBusinessType={props.defaultBusinessType}
                handleChangeBusinessType={handleChangeBusinessType}
                setBusinessTypes={setBusinessTypes}
              />
              {businessIds?.length > 0 && (
                <BusinessDelete
                  handleDeleteMultiBusinesses={handleDeleteMultiBusinesses}
                />
              )}
            </ButtonGroup>
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
              isTutorialMode={isTutorialMode}
              businessIds={businessIds}
              setBusinessIds={setBusinessIds}
              handleChangeBusinessIds={handleChangeBusinessIds}
              handleEnableAllBusiness={handleEnableAllBusiness}
              selectedBusinessActiveState={selectedBusinessActiveState}
              handleGotToAdd={handleGotToAdd}
            />
          </>
        )}
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
      {/* {openAddBusiness && (
        <SideBar
          id='add_business_form'
          open={openAddBusiness}
          onClose={() => setOpenAddBusiness(false)}
        >
          <AddBusinessForm
            isTutorialMode={isTutorialMode}
            handleSucessAddBusiness={onhandleSuccessAddBusiness}
          />
        </SideBar>
      )} */}

      {openSync && (
        <SideBar
          id='store_sync'
          open={openSync}
          onClose={() => handleCloseSync()}
          defaultSideBarWidth={550 + moveDistance}
          moveDistance={moveDistance}
        >
          <BusinessSync
            handleParentSidebarMove={val => setMoveDistance(val)}
          />
        </SideBar>
      )}

      <WizardBusiness
        isTutorialMode={isTutorialMode}
        openTutorialSidebarState={openTutorialSidebarState}
        setOpenTutorialSidebarState={setOpenTutorialSidebarState}
        business={detailsBusiness}
        handleSucessUpdateBusiness={handleSucessUpdateBusiness}
      />
    </>
  )
}

export const BusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  }
  return (
    <BusinessListController {...businessListingProps} />
  )
}
