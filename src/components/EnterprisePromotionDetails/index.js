import React, { useState, useEffect } from 'react'
import {
  useLanguage
  // EnterprisePromotionDetails as EnterprisePromotionDetailsController
} from 'ordering-components-admin'
import {
  EnterprisePromotionDetails as EnterprisePromotionDetailsController
} from './naked'
import { Switch } from '../../styles'
import { DragScroll } from '../DragScroll'
import { EnterprisePromotionGeneralDetails } from '../EnterprisePromotionGeneralDetails'
import { EnterprisePromotionRules } from '../EnterprisePromotionRules'
import { SelectBusinesses } from '../SelectBusinesses'
import { SelectSites } from '../SelectSites'
import { Alert, Confirm } from '../Confirm'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'

import {
  DetailsContainer,
  Header,
  TabsContainer,
  Tab,
  WrapperActionSelector
} from './styles'

const EnterprisePromotionDetailsUI = (props) => {
  const {
    isAddMode,
    promotionState,
    formState,
    actionState,
    handleChangeItem,
    setMoveDistance,
    sitesState,
    handleSelectSite,
    handleUpdateClick,
    handleAddPromotion,
    handleSelectAllSites,
    selectedSitesIds,
    selectedBusinessIds,
    businessesList,
    handleSelectBusiness,
    handleSelectAllBusiness,
    handleDeletePromotion
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedOption, setSelectedOption] = useState('general')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const tabOptions = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'sites', content: t('SITES', 'Sites') },
    { key: 'businesses', content: t('CONTROL_PANEL_BUSINESS', 'Business') },
    { key: 'rules', content: t('RULES', 'Rules') }
  ]

  const handleClickTab = (option) => {
    setMoveDistance(0)
    setSelectedOption(option)
  }

  const onClickDeletePromotion = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PROMOTION', 'Promotion')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePromotion()
      }
    })
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  return (
    <>
      <DetailsContainer>
        <Header>
          <div>
            {(formState.changes?.name || promotionState?.promotion?.name) && (
              <h1>{formState.changes?.name ?? promotionState?.promotion?.name}</h1>
            )}
            <Switch
              defaultChecked={
                typeof formState.changes?.enabled !== 'undefined'
                  ? formState.changes?.enabled
                  : promotionState.promotion?.enabled ?? false
              }
              onChange={val => handleChangeItem({ enabled: val })}
            />
          </div>
          <WrapperActionSelector>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => onClickDeletePromotion()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </WrapperActionSelector>
        </Header>
        <TabsContainer>
          <DragScroll>
            {tabOptions.map(option => (
              <Tab
                key={option.key}
                active={selectedOption === option.key}
                onClick={() => handleClickTab(option.key)}
              >
                {option.content}
              </Tab>
            ))}
          </DragScroll>
        </TabsContainer>

        {selectedOption === 'general' && (
          <EnterprisePromotionGeneralDetails
            {...props}
          />
        )}
        {selectedOption === 'sites' && (
          <SelectSites
            isAddMode={isAddMode}
            allSites={sitesState.sites}
            selectedSitesIds={selectedSitesIds}
            handleSelectSite={handleSelectSite}
            handleSelectAllSites={() => handleSelectAllSites(true)}
            handleSelectNoneSites={() => handleSelectAllSites(false)}
            isDisabled={Object.keys(formState.changes).length === 0 || actionState.loading}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
          />
        )}
        {selectedOption === 'businesses' && (
          <SelectBusinesses
            isAddMode={isAddMode}
            allBusinesses={businessesList.businesses}
            selectedBusinessIds={selectedBusinessIds}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllBusinesses={() => handleSelectAllBusiness(true)}
            handleSelectNoneBusinesses={() => handleSelectAllBusiness(false)}
            isDisabled={Object.keys(formState.changes).length === 0 || actionState.loading}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
          />
        )}
        {selectedOption === 'rules' && (
          <EnterprisePromotionRules
            {...props}
          />
        )}
      </DetailsContainer>
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
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const EnterprisePromotionDetails = (props) => {
  const promotionProps = {
    ...props,
    UIComponent: EnterprisePromotionDetailsUI
  }
  return <EnterprisePromotionDetailsController {...promotionProps} />
}
