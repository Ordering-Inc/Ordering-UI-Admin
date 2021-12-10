import React, { useState, useEffect } from 'react'
import { useLanguage, EnterprisePromontionList as EnterprisePromontionListController } from 'ordering-components-admin'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles'
import { SearchBar } from '../SearchBar'
import { EnterprisePromotionList } from '../EnterprisePromotionList'
import { SideBar } from '../SideBar'
import { EnterprisePromotionDetails } from '../EnterprisePromotionDetails'
import { Alert } from '../Confirm'

import {
  PromotionsListingContainer,
  HeaderContainer,
  HeaderTitleContainer,
  ActionsWrapper
} from './styles'

const EnterprisePromontionListingUI = (props) => {
  const {
    searchValue,
    onSearch,
    promotionListState,
    handleSuccessUpdatePromotions,
    handleSuccessAddPromotion,
    sitesState,
    paymethodsState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedPromotion, setSelectedPromotion] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)

  const handleOpenDetails = (promotion) => {
    setMoveDistance(0)
    setSelectedPromotion(promotion)
    setOpenDetails(true)
  }

  useEffect(() => {
    if (!promotionListState?.error) return
    setAlertState({
      open: true,
      content: promotionListState?.error
    })
  }, [promotionListState?.error])

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
            <h1>{t('PROMOTIONS_ENTERPRISE', 'Promotions enterprise')}</h1>
          </HeaderTitleContainer>
          <ActionsWrapper>
            <Button
              color='lightPrimary'
              borderRadius='8px'
              onClick={() => handleOpenDetails({})}
            >
              {t('ADD_PROMOTION_ENTERPRISE', 'Add promotion enterprise')}
            </Button>
            <SearchBar
              onSearch={onSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsWrapper>
        </HeaderContainer>
        <EnterprisePromotionList
          {...props}
          selectedPromotion={selectedPromotion}
          handleOpenDetails={handleOpenDetails}
        />
      </PromotionsListingContainer>

      {openDetails && (
        <SideBar
          sidebarId='promotion_details'
          defaultSideBarWidth={600 + moveDistance}
          moveDistance={moveDistance}
          open={openDetails}
          onClose={() => setOpenDetails(false)}
        >
          <EnterprisePromotionDetails
            sitesState={sitesState}
            paymethodsState={paymethodsState}
            promotion={selectedPromotion}
            promotionsList={promotionListState.promotions}
            handleSuccessUpdatePromotions={handleSuccessUpdatePromotions}
            handleSuccessAddPromotion={handleSuccessAddPromotion}
            setMoveDistance={setMoveDistance}
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

export const EnterprisePromontionListing = (props) => {
  const enterpisePromotionsProps = {
    ...props,
    UIComponent: EnterprisePromontionListingUI
  }
  return <EnterprisePromontionListController {...enterpisePromotionsProps} />
}
