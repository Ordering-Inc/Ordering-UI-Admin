import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { List as MenuIcon, Upload } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionsWrapper,
  CsvImport
} from './styles'

export const BusinessListingHeader = (props) => {
  const {
    searchValue,
    onSearch,
    handleOpenAddBusiness,
    handleOpenImportCSV
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
        <CsvImport>
          <Button
            borderRadius='5px'
            color='secundary'
            onClick={() => handleOpenImportCSV()}
          >
            {t('IMPORT', 'Import')}
            <Upload />
          </Button>
        </CsvImport>
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
