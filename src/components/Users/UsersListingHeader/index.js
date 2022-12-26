import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { List as MenuIcon, InfoCircle } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer,
  InfoWrapper,
  InfoContent
} from './styles'

export const UsersListingHeader = (props) => {
  const {
    isProfessionals,
    title,
    searchValue,
    onSearch
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
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
        <h1>{title}</h1>
        {isProfessionals && (
          <InfoWrapper>
            <IconButton
              color='primary'
            >
              <InfoCircle />
            </IconButton>
            <InfoContent>
              {t('PROFESSIONALS_INFO', 'Create, assign and manage your professionals. Once the professional link his Google account, continue synchronizing your appointments with the professionals user using the Synchronize button inside of the account. Select the stores and configure the schedules for your services.')}
            </InfoContent>
          </InfoWrapper>
        )}
      </HeaderTitleContainer>
      <ActionContainer>
        <SearchBar
          lazyLoad
          isCustomLayout
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionContainer>
    </HeaderContainer>
  )
}
