import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useLanguage,
  DriversCompaniesList as DriversCompaniesListController
} from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Alert, Confirm, SearchBar, SideBar } from '../../Shared'
import { DriversCompaniesList } from '../DriversCompaniesList'
import { DriversCompanyDetailsForm } from '../DriversCompanyDetailsForm'
import { DriversCompanyAddForm } from '../DriversCompanyAddForm'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  DriversCompaniesListContainer,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderRightContainer
} from './styles'

const DriversCompaniesListingUI = (props) => {
  const {
    driversCompaniesState,
    setDriversCompaniesState,
    actionState,
    openDetails,
    setOpenDetails,
    handleUpdateDriversCompany,
    handleDeleteDriversCompany,
    handleSelectCompany,
    selectedCompanyList,
    handleAllSelectCompany,
    handleDeleteSelectedCompanies,
    isUseQuery
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)
  const [curDriversCompany, setCurDriversCompany] = useState(null)
  const [curDriversCompanyId, setCurDriversCompanyId] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isAddMode, setIsAddMode] = useState(false)

  const handleOpenDetails = (driverCompany, isInitialRender) => {
    setCurDriversCompany(driverCompany)
    setCurDriversCompanyId(driverCompany?.id)
    if (!driverCompany) {
      setIsAddMode(true)
      return
    }
    setOpenDetails(true)
    if (!isInitialRender) {
      addQueryToUrl({ id: driverCompany?.id })
    }
  }

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  const onClickSelectedCompaniesDelete = () => {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSelectedCompanies()
      }
    })
  }

  const handleCloseDetails = () => {
    setCurDriversCompany(null)
    setCurDriversCompanyId(null)
    setOpenDetails(false)
    setIsAddMode(false)
    removeQueryToUrl(['id', 'tab'])
  }

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setCurDriversCompanyId(Number(id))
      setOpenDetails(true)
    }
  }, [])

  return (
    <DriversCompaniesListContainer>
      <HeaderContainer>
        <HeaderLeftContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('DELIVERY_COMPANIES', 'Delivery companies')}</h1>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenDetails(null)}
          >
            {t('ADD_DRIVER_COMPANY', 'Add driver company')}
          </Button>
          <Button
            borderRadius='8px'
            color='secundary'
            disabled={selectedCompanyList.length === 0}
            onClick={() => onClickSelectedCompaniesDelete()}
          >
            {t('DELETE', 'Delete')}
          </Button>
          <SearchBar
            lazyLoad
            onSearch={val => setSearchValue(val)}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </HeaderRightContainer>
      </HeaderContainer>
      {!isAddMode ? (
        <DriversCompaniesList
          driversCompaniesState={driversCompaniesState}
          searchValue={searchValue}
          handleOpenDetails={handleOpenDetails}
          curDriversCompany={curDriversCompany}
          handleUpdateDriversCompany={handleUpdateDriversCompany}
          handleDeleteDriversCompany={handleDeleteDriversCompany}
          handleSelectCompany={handleSelectCompany}
          selectedCompanyList={selectedCompanyList}
          handleAllSelectCompany={handleAllSelectCompany}
          isUseQuery={isUseQuery}
        />
      ) : (
        <DriversCompanyAddForm
          driversCompaniesState={driversCompaniesState}
          setDriversCompaniesState={setDriversCompaniesState}
          driversCompany={curDriversCompany}
          driversCompanyId={curDriversCompanyId}
          onClose={() => handleCloseDetails()}
        />
      )}
      {openDetails && !isAddMode && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550}
          open={openDetails}
          onClose={() => handleCloseDetails()}
        >
          <DriversCompanyDetailsForm
            driversCompaniesState={driversCompaniesState}
            setDriversCompaniesState={setDriversCompaniesState}
            driversCompany={curDriversCompany}
            driversCompanyId={curDriversCompanyId}
            onClose={() => handleCloseDetails()}
          />
        </SideBar>
      )}
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </DriversCompaniesListContainer>
  )
}

export const DriversCompaniesListing = (props) => {
  const driversCompaniesProps = {
    ...props,
    UIComponent: DriversCompaniesListingUI
  }
  return <DriversCompaniesListController {...driversCompaniesProps} />
}
