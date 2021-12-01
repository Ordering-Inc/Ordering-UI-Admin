import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { EnterprisePromontionList as EnterprisePromontionListController } from './naked'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles'
import { SearchBar } from '../SearchBar'
import { EnterprisePromotionList } from '../EnterprisePromotionList'
import { SideBar } from '../SideBar'
import { EnterprisePromotionDetails } from '../EnterprisePromotionDetails'

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
    sitesState
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedPromotion, setSelectedPromotion] = useState(null)

  const handleOpenDetails = (promotion) => {
    setSelectedPromotion(promotion)
    setOpenDetails(true)
  }

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
          defaultSideBarWidth='600'
          open={openDetails}
          onClose={() => setOpenDetails(false)}
        >
          <EnterprisePromotionDetails
            sitesState={sitesState}
            promotion={selectedPromotion}
            promotionsList={promotionListState.promotions}
            handleSuccessUpdatePromotions={handleSuccessUpdatePromotions}
            handleSuccessAddPromotion={handleSuccessAddPromotion}
          />
        </SideBar>
      )}
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
