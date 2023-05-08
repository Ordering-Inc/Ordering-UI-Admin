import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useConfig, useSession, useLanguage, EnterprisePromotionList as EnterprisePromontioListController } from 'ordering-components-admin'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { Alert, SearchBar, SideBar } from '../../Shared'
import { EnterprisePromotionList } from '../EnterprisePromotionList'
import { EnterprisePromotionDetails } from '../EnterprisePromotionDetails'
import { DisabledFeatureAlert } from '../../DisabledFeatureAlert'

import {
  PromotionsListingContainer,
  HeaderContainer,
  HeaderTitleContainer,
  ActionsWrapper
} from './styles'

const EnterprisePromotionListingUI = (props) => {
  const {
    searchValue,
    onSearch,
    promotionListState,
    handleSuccessUpdatePromotions,
    handleSuccessAddPromotion,
    sitesState,
    paymethodsState,
    businessesList,
    handleSuccessDeletePromotion
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ user }] = useSession()
  const featureName = 'Marketing_dashboard'
  const [isDisabledFeature, setIsDisabledFeature] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [advancedOfferModuleDisabled, setAdvancedOfferModuleDisabled] = useState(false)

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedPromotion, setSelectedPromotion] = useState(null)
  const [curPromotionId, setCurPromotionId] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)
  const [sideBarWidth, setSideBarWidth] = useState(600)

  const handleOpenDetails = (promotion) => {
    setSideBarWidth(600)
    setMoveDistance(0)
    setSelectedPromotion(promotion)
    setCurPromotionId(promotion?.id)
    setOpenDetails(true)
    if (promotion) {
      history.replace(`${location.pathname}?id=${promotion?.id}`)
    }
  }

  const handleCloseDetails = () => {
    setMoveDistance(0)
    setSideBarWidth(600)
    setOpenDetails(false)
    setSelectedPromotion(null)
    history.replace(`${location.pathname}`)
  }

  useEffect(() => {
    if (!promotionListState?.error) return
    setAdvancedOfferModuleDisabled(true)
    setAlertState({
      open: true,
      content: promotionListState?.error
    })
  }, [promotionListState?.error])

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && user) {
      if (!Object.keys(configs).includes(featureName) && user?.level === 0) {
        setIsDisabledFeature(false)
      }
    }
  }, [configs])

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setCurPromotionId(Number(id))
      setOpenDetails(true)
    }
  }, [])

  return (
    <>
      <PromotionsListingContainer>
        <HeaderContainer>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('PROMOTION_AUTOMATION', 'Promotions automation')}</h1>
          </HeaderTitleContainer>
          <ActionsWrapper eventDisabled={advancedOfferModuleDisabled || isDisabledFeature}>
            <Button
              color='lightPrimary'
              borderRadius='8px'
              onClick={() => handleOpenDetails(null)}
            >
              {t('ADD_PROMOTION_ENTERPRISE', 'Add promotion enterprise')}
            </Button>
            <SearchBar
              lazyLoad
              onSearch={onSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsWrapper>
        </HeaderContainer>
        <EnterprisePromotionList
          {...props}
          eventDisabled={advancedOfferModuleDisabled || isDisabledFeature}
          selectedPromotion={selectedPromotion}
          handleOpenDetails={handleOpenDetails}
        />
      </PromotionsListingContainer>
      {isDisabledFeature && (<DisabledFeatureAlert />)}
      {openDetails && (
        <SideBar
          defaultSideBarWidth={sideBarWidth}
          moveDistance={moveDistance}
          open={openDetails}
          onClose={() => handleCloseDetails()}
        >
          <EnterprisePromotionDetails
            sitesState={sitesState}
            businessesList={businessesList}
            paymethodsState={paymethodsState}
            promotion={selectedPromotion || {}}
            promotionId={curPromotionId}
            promotionsList={promotionListState.promotions}
            handleSuccessUpdatePromotions={handleSuccessUpdatePromotions}
            handleSuccessAddPromotion={handleSuccessAddPromotion}
            handleSuccessDeletePromotion={handleSuccessDeletePromotion}
            setMoveDistance={setMoveDistance}
            setSideBarWidth={setSideBarWidth}
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
    </>
  )
}

export const EnterprisePromotionListing = (props) => {
  const enterpisePromotionsProps = {
    ...props,
    UIComponent: EnterprisePromotionListingUI
  }
  return <EnterprisePromontioListController {...enterpisePromotionsProps} />
}
