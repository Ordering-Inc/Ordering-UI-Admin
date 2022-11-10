import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  EnterprisePromotionDetails as EnterprisePromotionDetailsController
} from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Switch } from '../../../styles'
import { DragScroll, Alert, Confirm, SelectBusinesses, SelectSites, SelectUsers, SelectLoyaltyLevels } from '../../Shared'
import { EnterprisePromotionGeneralDetails } from '../EnterprisePromotionGeneralDetails'
import { EnterprisePromotionRules } from '../EnterprisePromotionRules'

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
    handleDeletePromotion,
    selectedUserIds,
    handleSelectUser,
    selectedLoyaltyLevelIds,
    handleSelectLoyaltyLevel,
    handleSelectAllLoyaltyLevels,
    handleSelectAllUsers
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], handleOnAccept: null })
  const [selectedOption, setSelectedOption] = useState('general')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const tabOptions = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'sites', content: t('SITES', 'Sites') },
    { key: 'businesses', content: t('CONTROL_PANEL_BUSINESS', 'Business') },
    { key: 'users', content: t('USERS', '') },
    { key: 'loyalty_levels', content: t('LOYALTY_LEVELS', 'Loyalty Levels') },
    { key: 'rules', content: t('RULES', 'Rules') }
  ]

  const handleClickTab = (option) => {
    if (selectedOption === 'rules') {
      const isValid = handleCheckDiscountPercentageValidation()
      if (!isValid) return
    }
    setMoveDistance(0)
    setSelectedOption(option)
    if (formState.changes?.businesses?.length > 0 && Object.keys(formState.changes).length !== 0 && !actionState.loading) {
      if (!isAddMode) {
        handleUpdateClick()
      }
    }
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

  const handleCheckDiscountPercentageValidation = () => {
    const rateType = formState.changes?.rate_type ?? promotionState.promotion?.rate_type
    const rate = formState.changes?.rate ?? promotionState?.promotion?.rate ?? ''
    if (rateType === 1 && parseFloat(rate) > 100) {
      setAlertState({
        open: true,
        content: [
          t('VALIDATION_ERROR_MAX_NUMERIC', 'The _attribute_ may not be greater than _max_.')
            .replace('_attribute_', t('DISCOUNT_PERCENTAGE', 'Discount percentage'))
            .replace('_max_', 100)
        ],
        handleOnAccept: () => {
          if (document.getElementById('discount_value')) {
            document.getElementById('discount_value').focus()
          }
          setAlertState({ open: false, content: [] })
        }
      })
      return false
    }
    return true
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
          {!isAddMode && (
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
          )}
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
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
          />
        )}
        {selectedOption === 'sites' && (
          <SelectSites
            isAllChecked={selectedSitesIds.length === 0}
            isAddMode={isAddMode}
            allSites={sitesState.sites}
            selectedSitesIds={selectedSitesIds}
            handleSelectSite={handleSelectSite}
            handleSelectAllSites={() => handleSelectAllSites(true)}
            handleSelectNoneSites={() => handleSelectAllSites(false)}
            isDisabled={Object.keys(formState.changes).length === 0 || actionState.loading}
            handleUpdateClick={handleUpdateClick}
            handleAddClick={handleAddPromotion}
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
            handleAddClick={handleAddPromotion}
          />
        )}
        {selectedOption === 'users' && (
          <SelectUsers
            isAddMode={isAddMode}
            isDisabled={Object.keys(formState.changes).length === 0 || actionState.loading}
            selectedUserIds={selectedUserIds}
            handleSelectUser={handleSelectUser}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
            handleSelectAllUsers={handleSelectAllUsers}
          />
        )}
        {selectedOption === 'loyalty_levels' && (
          <SelectLoyaltyLevels
            isAddMode={isAddMode}
            isDisabled={Object.keys(formState.changes).length === 0 || actionState.loading}
            selectedLoyaltyLevelIds={selectedLoyaltyLevelIds}
            handleSelectLoyaltyLevel={handleSelectLoyaltyLevel}
            handleSelectAllLoyaltyLevels={handleSelectAllLoyaltyLevels}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
          />
        )}
        {selectedOption === 'rules' && (
          <EnterprisePromotionRules
            {...props}
            handleUpdateClick={handleUpdateClick}
            handleAddPromotion={handleAddPromotion}
          />
        )}
      </DetailsContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => alertState?.handleOnAccept ? alertState.handleOnAccept() : setAlertState({ open: false, content: [] })}
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
