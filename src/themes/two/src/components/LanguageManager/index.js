import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { LanguageManager as LanguageManagerController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'

import { IconButton } from '../../styles/Buttons'
import { List as MenuIcon } from 'react-bootstrap-icons'
import {
  LanguageManagerContainer,
  HeaderContainer,
  HeaderTitleContainer,
  ActionsGroup,
  TabContainer,
  Tab
} from './styles'
import { SearchBar } from '../SearchBar'

const LanguageManagerUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [selectedType, setSelectedType] = useState('main')

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
            // search={searchValue}
            // onSearch={(value) => setSearchValue(value)}
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
