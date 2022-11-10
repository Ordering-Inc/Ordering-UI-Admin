import React, { useState, useEffect } from 'react'
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
    handleDeleteSelectedCompanies
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)
  const [curDriversCompany, setCurDriversCompany] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleOpenDetails = (driverCompany) => {
    setCurDriversCompany(driverCompany)
    setOpenDetails(true)
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
      />
      {openDetails && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550}
          open={openDetails}
          onClose={() => {
            setCurDriversCompany(null)
            setOpenDetails(false)
          }}
        >
          <DriversCompanyDetailsForm
            driversCompaniesState={driversCompaniesState}
            setDriversCompaniesState={setDriversCompaniesState}
            driversCompany={curDriversCompany}
            onClose={() => {
              setCurDriversCompany(null)
              setOpenDetails(false)
            }}
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
