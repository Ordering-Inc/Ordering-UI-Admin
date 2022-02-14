import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer
} from './styles'

export const UsersListingHeader = (props) => {
  const {
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
