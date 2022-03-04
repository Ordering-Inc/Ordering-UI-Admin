import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon, InfoCircle } from 'react-bootstrap-icons'
import { SearchBar } from '../../Shared'
import { Button, IconButton } from '../../../styles'

import {
  ActionHeadercontainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  WrapperSearch,
  InfoWrapper,
  InfoContent
} from './styles'

export const RecoveryActionHeader = (props) => {
  const {
    searchValue,
    handleChangeSearch
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <ActionHeadercontainer>
      <HeaderSection>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <HeaderTitle>{t('RECOVERY_ACTIONS', 'Recovery actions')}</HeaderTitle>
        <InfoWrapper>
          <IconButton
            color='primary'
          >
            <InfoCircle />
          </IconButton>
          <InfoContent>
            {t('RECOVERY_ACTIONS_INFO', 'If you have multiple actions that apply to an order, then your customer will see the highest ranking action. To change the ranking of your actions just drag and drop.')}
          </InfoContent>
        </InfoWrapper>
      </HeaderSection>
      <TopRightSection>
        <WrapperSearch>
          <Button
            borderRadius='8px'
            color='lightPrimary'
          >
            {t('ADD_RECOVERY_ACTION', 'Add recovery action')}
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
    </ActionHeadercontainer>
  )
}
