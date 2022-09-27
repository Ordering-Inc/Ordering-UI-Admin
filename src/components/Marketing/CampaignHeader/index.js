import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { SearchBar } from '../../Shared'
import { Button, IconButton } from '../../../styles'

import {
  CampaignHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  WrapperSearch
} from './styles'

export const CampaignHeader = (props) => {
  const {
    searchValue,
    handleChangeSearch,
    handleOpenDetail,
    isDisabledFeature
  } = props

  const [, t] = useLanguage()
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
      </HeaderSection>
      <TopRightSection isDisabledFeature={isDisabledFeature}>
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
