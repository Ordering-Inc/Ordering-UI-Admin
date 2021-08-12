import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { SearchBar } from '../SearchBar'

import {
  StaticPageListContainer,
  Header,
  PageListTable
} from './styles'

export const StaticPageList = (props) => {
  const [, t] = useLanguage()
  return (
    <StaticPageListContainer>
      <Header>
        <h1>{t('PAGES_MANAGER', 'Static Pages Manager')}</h1>
        <Button
          borderRadius='8px'
          color='lightPrimary'
        >
          {t('ADD_PAGE', 'Add page')}
        </Button>
      </Header>
      <SearchBar
        isCustomLayout
        placeholder={t('SEARCH', 'Search')}
      />
      <PageListTable>
        <thead>
          <tr>
            <th>{t('STATIC_PAGE', 'Static page')}</th>
            <th>{t('ACTIONS', 'Actions')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PageListTable>
    </StaticPageListContainer>
  )
}
