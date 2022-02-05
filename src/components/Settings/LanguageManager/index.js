import React, { useState } from 'react'
import { useLanguage, LanguageManager as LanguageManagerController } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'

import { IconButton } from '../../../styles'
import {
  ViewList,
  Table,
  List as MenuIcon
} from 'react-bootstrap-icons'
import {
  LanguageManagerContainer,
  HeaderContainer,
  HeaderTitleContainer,
  ActionsGroup,
  TranslationManagerContainer,
  ActionGroup,
  ViewIconWrapper,
  ActionGroupWrapper
} from './styles'
import { SearchBar } from '../../Shared'
import { LanguageTransTable } from '../LanguageTransTable'
import { LanguageTransSpread } from '../LanguageTransSpread'

const LanguageManagerUI = (props) => {
  const {
    searchValue,
    onSearch
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [viewMode, setViewMode] = useState('table')

  return (
    <LanguageManagerContainer>
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
          <h1>{t('LANGUAGE_MANAGER', 'Language Manager')}</h1>
        </HeaderTitleContainer>
        <ActionsGroup>
          <SearchBar
            lazyLoad
            search={searchValue}
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </ActionsGroup>
      </HeaderContainer>
      <TranslationManagerContainer>
        <ActionGroupWrapper>
          <ActionGroup>
            <ViewIconWrapper
              className='table-mode'
              active={viewMode === 'table'}
              onClick={() => setViewMode('table')}
            >
              <ViewList />
            </ViewIconWrapper>
            <ViewIconWrapper
              active={viewMode === 'spread'}
              onClick={() => setViewMode('spread')}
            >
              <Table />
            </ViewIconWrapper>
          </ActionGroup>
        </ActionGroupWrapper>
        {
          viewMode === 'table' && (
            <LanguageTransTable
              {...props}
            />
          )
        }
        {
          viewMode === 'spread' && (
            <LanguageTransSpread {...props} />
          )
        }
      </TranslationManagerContainer>
    </LanguageManagerContainer>
  )
}

export const LanguageManager = (props) => {
  const languageManagerProps = {
    ...props,
    UIComponent: LanguageManagerUI
  }
  return <LanguageManagerController {...languageManagerProps} />
}
