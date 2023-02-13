import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { List as MenuIcon, LifePreserver, ArrowRepeat, Funnel } from 'react-bootstrap-icons'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
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
import { BusinessFilterGroup } from '../BusinessFilterGroup'

export const BusinessesListingHeader = (props) => {
  const {
    searchValue,
    onSearch,
    // handleOpenAddBusiness,
    handleStartTutorial,
    handleOpenSync,
    handleRefreshBusinesses,
    loading,
    noBusinesses,
    handleGotToAdd,
    handleChangeFilterValues,
    filterValues
  } = props
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [filterApplied, setFilterApplied] = useState(false)
  const [isFilterModal, setIsFilterModal] = useState(false)

  useEffect(() => {
    setFilterApplied(Object.keys(filterValues).length > 0)
  }, [filterValues])

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
        {!noBusinesses && (
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
        )}
      </HeaderTitleContainer>
      {!noBusinesses && (
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
            onClick={() => handleGotToAdd()}
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
          <IconButton
            color='black'
            onClick={() => setIsFilterModal(true)}
            name='filter-btn'
          >
            {filterApplied ? <Funnel /> : <MdcFilterOff />}
          </IconButton>
        </ActionsWrapper>
      )}
      <BusinessFilterGroup
        handleChangeFilterValues={handleChangeFilterValues}
        onClose={() => setIsFilterModal(false)}
        isFilterModal={isFilterModal}
      />
    </HeaderContainer>
  )
}
