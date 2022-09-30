import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { List as MenuIcon, LifePreserver, ArrowRepeat } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../../styles'
import { SearchBar } from '../../Shared'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ImportersButton } from '../ImportersButton'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionsWrapper
} from './styles'

export const BusinessesListingHeader = (props) => {
  const {
    searchValue,
    onSearch,
    handleOpenAddBusiness,
    handleStartTutorial,
    handleOpenSync,
    handleRefreshBusinesses,
    loading
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
        <Button
          color='lightPrimary'
          borderRadius='8px'
          onClick={() => handleRefreshBusinesses()}
          className={loading ? 'loading' : ''}
        >
          {t('REFRESH', 'Refresh')}
          <ArrowRepeat size={16} style={{ marginLeft: 5 }} />
        </Button>
        <ImportersButton customClass='importerGroup' />
        <Button
          color='lightPrimary'
          borderRadius='8px'
          onClick={() => handleOpenAddBusiness()}
        >
          {t('ADD_NEW_STORE', 'Add new store')}
        </Button>
        <Button
          color='lightPrimary'
          borderRadius='8px'
          onClick={() => handleOpenSync()}
        >
          {t('SYNC', 'Sync')}
        </Button>
        <SearchBar
          isCustomLayout
          lazyLoad
          onSearch={onSearch}
          search={searchValue}
          placeholder={t('SEARCH', 'Search')}
          customClass='searchBar'
        />
      </ActionsWrapper>
    </HeaderContainer>
  )
}
