import React from 'react'
import { Reports as ReportsController } from './naked'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { IconButton } from '../../styles/Buttons'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useLanguage } from 'ordering-components-admin'
import {
  ReportsContainer,
  Header,
  HeaderTitleContainer
} from './styles'

const ReportsUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <ReportsContainer>
      <Header>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('ADVANCED_REPORTS', 'Advanced Reports')}</h1>
        </HeaderTitleContainer>
      </Header>

    </ReportsContainer>
  )
}

export const Reports = (props) => {
  const reportsProps = {
    ...props,
    UIComponent: ReportsUI
  }
  return <ReportsController {...reportsProps} />
}
