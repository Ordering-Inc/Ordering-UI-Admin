import React from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  HeaderContainer
} from './styles'

export const BusinessListingHeader = (props) => {
  const [, t] = useLanguage()
  return (
    <HeaderContainer>
      <h1>{t('STORES_LIST', 'Stores list')}</h1>
    </HeaderContainer>
  )
}
