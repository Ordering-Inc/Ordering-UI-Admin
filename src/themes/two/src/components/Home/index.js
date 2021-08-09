import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Home as HomeController } from './naked'
import { IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import {
  HomeContainer,
  HeaderContainer,
  WelcomeMsg,
  GuideMsg,
  VideoAndReportsWrapper
} from './styles'

const HomeUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  return (
    <HomeContainer>
      <HeaderContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('HOME', 'Home')}</h1>
      </HeaderContainer>
      <WelcomeMsg>{t('WELCOME_TO_ORDERING', 'Welcome to Ordering')}!</WelcomeMsg>
      <GuideMsg>{t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.')}</GuideMsg>
      <VideoAndReportsWrapper>
        
      </VideoAndReportsWrapper>
    </HomeContainer>
  )
}

export const Home = (props) => {
  const homeProps = {
    ...props,
    UIComponent: HomeUI
  }

  return <HomeController {...homeProps} />
}
