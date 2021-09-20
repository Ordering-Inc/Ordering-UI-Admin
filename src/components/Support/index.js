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
        <h1>Which kind of assistance do you need?</h1>
        <p>Choose the asistance you are looking for in the buttons below.</p>
      </HeaderContentWrapper>
      <SupportList>
        <SupportContent>
          <h3>Contact our Sales Team</h3>
          <p>Ask about pricing, custom work, budget and more money talk</p>
          <ActionBtnWrapper>
            <Button
              borderRadius='7.6px'
              color='primary'
              onClick={() => handleGoToLink('https://www.ordering.co/ordering-sales')}
              outline
            >
              Sales Contact
            </Button>
          </ActionBtnWrapper>
        </SupportContent>
        <SupportContent>
          <h3>Contact our Sales Team</h3>
          <p>Ask about pricing, custom work, budget and more money talk</p>
          <ActionBtnWrapper>
            <Button
              borderRadius='7.6px'
              color='primary'
              onClick={() => handleGoToLink('https://www.ordering.co/ordering-support')}
              outline
            >
              Tech Support
            </Button>
          </ActionBtnWrapper>
        </SupportContent>
      </SupportList>
    </SupportContainer>
  )
}
