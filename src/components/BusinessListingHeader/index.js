import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { List as MenuIcon, Upload, LifePreserver } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

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
    handleOpenImportCSV,
    handleStartTutorial
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
        <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip>
              {t('START_TUTORIAL', 'Start tutorial')}
            </Tooltip>
          }
        >
          <IconButton
            color='dark'
            className='tour_btn'
            onClick={() => handleStartTutorial()}
          >
            <LifePreserver />
          </IconButton>
        </OverlayTrigger>
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
          lazyLoad
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
        />
      </ActionsWrapper>
    </HeaderContainer>
  )
}
