import React, { useState } from 'react'
import { useLanguage, LanguageManager as LanguageManagerController } from 'ordering-components-admin'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'

import { IconButton } from '../../styles/Buttons'
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
  TabContainer,
  Tab,
  TranslationManagerContainer,
  ActionGroup,
  ViewIconWrapper,
  ActionGroupWrapper
} from './styles'
import { SearchBar } from '../SearchBar'
import { LanguageMainManager } from '../LanguageMainManager'
import { LanguageTransTable } from '../LanguageTransTable'
import { LanguageTransSpread } from '../LanguageTransSpread'

const LanguageManagerUI = (props) => {
  const {
    searchValue,
    onSearch
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [selectedType, setSelectedType] = useState('main')
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
            search={searchValue}
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </ActionsGroup>
      </HeaderContainer>
      <TabContainer>
        <Tab
          active={selectedType === 'main'}
          onClick={() => setSelectedType('main')}
        >
          {t('MAIN', 'Main')}
        </Tab>
        <Tab
          active={selectedType === 'translations'}
          onClick={() => setSelectedType('translations')}
        >
          {t('TRANSLATIONS', 'Translations')}
        </Tab>
      </TabContainer>
      {
        selectedType === 'main' && (
          <LanguageMainManager
            {...props}
          />
        )
      }
      {
        selectedType === 'translations' && (
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
        )
      }
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
