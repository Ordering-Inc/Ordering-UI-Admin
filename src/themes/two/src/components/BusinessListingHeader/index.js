import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { Button } from '../../styles/Buttons'

import {
  HeaderContainer,
  ActionsWrapper
} from './styles'

export const BusinessListingHeader = (props) => {
  const {
    searchValue,
    onSearch,
    handleOpenAddBusiness
  } = props
  const [, t] = useLanguage()
  return (
    <HeaderContainer>
      <div>
        <h1>{t('STORES_LIST', 'Stores list')}</h1>
      </div>
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
