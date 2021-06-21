import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'

import {
  HeaderContainer,
  AddButton
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
        <AddButton
          onClick={() => handleOpenAddBusiness()}
        >
          <BsPlusSquare />
        </AddButton>
      </div>
      <SearchBar
        isCustomLayout
        onSearch={onSearch}
        search={searchValue}
        placeholder={t('SEARCH', 'Search')}
      />
    </HeaderContainer>
  )
}
