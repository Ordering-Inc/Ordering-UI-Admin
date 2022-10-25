import React from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon, InfoCircle } from 'react-bootstrap-icons'
import { SearchBar } from '../../Shared'
import { Button, IconButton } from '../../../styles'

import {
  CampaignHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  WrapperSearch,
  InfoWrapper,
  InfoContent
} from './styles'

export const CampaignHeader = (props) => {
  const {
    searchValue,
    handleChangeSearch,
    handleOpenDetail
  } = props

  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <CampaignHeaderContainer>
      <HeaderSection>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <HeaderTitle>{t('CAMPAIGN', 'Campaign')}</HeaderTitle>
        {sessionState?.user?.level === 0 && (
          <InfoWrapper>
            <IconButton
              color='primary'
            >
              <InfoCircle />
            </IconButton>
            <InfoContent>
              {t('MARKETING_INFO', 'Create campaigns to reach your customer with news, offers and new products. Need help with the set-up? Contact our team here:')}
              <a href='https://www.ordering.co/support' target='_blank' rel='noopener noreferrer'>{t('CUSTOMER_SUPPORT', 'Customer support')}</a>
            </InfoContent>
          </InfoWrapper>
        )}
      </HeaderSection>
      <TopRightSection>
        <WrapperSearch>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenDetail({})}
          >
            {t('ADD_CAMPAIGN', 'Add Campaign')}
          </Button>
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={handleChangeSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </WrapperSearch>
      </TopRightSection>
    </CampaignHeaderContainer>
  )
}
