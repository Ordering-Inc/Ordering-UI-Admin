import React from 'react'
import { IconButton, Button } from '../../styles/Buttons'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'

import {
  SupportContainer,
  HeaderTitleContainer,
  HeaderContentWrapper,
  SupportList,
  SupportContent,
  ActionBtnWrapper
} from './styles'

export const Support = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const handleGoToLink = (link) => {
    window.open(link, '_blank')
  }

  return (
    <SupportContainer>
      <HeaderTitleContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </HeaderTitleContainer>
      <HeaderContentWrapper>
        <h1>{t('SUPPORT_TITLE_START', 'Which kind of')} <span>{t('SUPPORT_TITLE_END', 'assistance do you need?')}</span></h1>
        <p>{t('ASSIST_SUB_TITILE', 'Choose the asistance you are looking for in the buttons below.')}</p>
      </HeaderContentWrapper>
      <SupportList>
        <SupportContent>
          <h3>{t('CONTACT_SALES_TEAM', 'Contact our Sales Team')}</h3>
          <p>{t('CONTACT_SALES_SUB_TITLE', 'Ask about pricing, custom work, budget and more money talk')}</p>
          <ActionBtnWrapper>
            <Button
              borderRadius='7.6px'
              color='primary'
              onClick={() => handleGoToLink('https://www.ordering.co/ordering-sales')}
              outline
            >
              {t('SALES_CONTACT', 'Sales Contact')}
            </Button>
          </ActionBtnWrapper>
        </SupportContent>
        <SupportContent>
          <h3>{t('CONTACT_SUPPORT_TEAM', 'Contact our Support Team')}</h3>
          <p>{t('CONTACT_SUPPORT_SUB_TITLE', 'Ask about your ordering installation, products and features')}</p>
          <ActionBtnWrapper>
            <Button
              borderRadius='7.6px'
              color='primary'
              onClick={() => handleGoToLink('https://support.ordering.co')}
              outline
            >
              {t('TECH_SUPPORT', 'Tech Support')}
            </Button>
          </ActionBtnWrapper>
        </SupportContent>
      </SupportList>
    </SupportContainer>
  )
}
