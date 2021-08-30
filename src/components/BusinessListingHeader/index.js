import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionsWrapper
} from './styles'

export const BusinessListingHeader = (props) => {
  const {
    searchValue,
    onSearch,
    handleOpenAddBusiness
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
        <h1>{t('STORES_LIST', 'Stores list')}</h1>
      </HeaderTitleContainer>
      <ActionsWrapper>
        <Button
          color='lightPrimary'
          borderRadius='8px'
          onClick={() => handleOpenAddBusiness()}
        >
          {t('ADD_NEW_STORE', 'Add new store')}
        </Button>
        <SearchBar
          isCustomLayout
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionsWrapper>
    </HeaderContainer>
  )
}
