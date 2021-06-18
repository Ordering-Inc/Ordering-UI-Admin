import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'

import {
  HeaderContainer
} from './styles'

export const BusinessListingHeader = (props) => {
  const {
    searchValue,
    onSearch
  } = props
  const [, t] = useLanguage()
  return (
    <HeaderContainer>
      <h1>{t('STORES_LIST', 'Stores list')}</h1>
      <SearchBar
        isCustomLayout
        onSearch={onSearch}
        search={searchValue}
        placeholder={t('SEARCH', 'Search')}
      />
    </HeaderContainer>
  )
}
