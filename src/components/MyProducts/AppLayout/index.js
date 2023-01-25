import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton, Button } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import {
  Container,
  HeaderTitleContainer,
  ContentWrapper,
  BoxWrapper,
  AppInfoContainer,
  ImageWrapper,
  DownloadLink,
  ButtonWRapper,
  DownLoadWrapper
} from './styles'

export const AppLayout = (props) => {
  const { appInfo, isDriver, children } = props
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const showMessage = (message) => {
    window.Intercom && window.Intercom('showNewMessage', message)
  }

  return (
    <Container>
      <HeaderTitleContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('MY_PRODUCTS', 'My products')}</h1>
      </HeaderTitleContainer>
      <ContentWrapper>
        <h1>{appInfo.title}</h1>
        <p>{appInfo.description}</p>
        <BoxWrapper>
          <AppInfoContainer>
            <ImageWrapper isDriver={isDriver}>
              <img src={appInfo.images.live} alt='' />
            </ImageWrapper>
            <h2>{appInfo.live_title}</h2>
            {appInfo?.downloads && (
              <DownLoadWrapper>
                {appInfo.downloads.map(item => (
                  <img
                    src={item.icon}
                    alt=''
                    key={item.id}
                    onClick={() => window.open(item.link, '_blank')}
                  />
                ))}
              </DownLoadWrapper>
            )}
            {appInfo?.web_url && (
              <DownloadLink href={appInfo.web_url} target='_blank' isSingle className='download-link'>
                {appInfo.web_link_title}
              </DownloadLink>
            )}
            <p>{appInfo.live_description}</p>
            {appInfo?.purchase_message && (
              <ButtonWRapper>
                <Button
                  color='primary'
                  borderRadius='8px'
                  onClick={() => showMessage(appInfo?.purchase_message)}
                >
                  {t('PURCHASE_NOW', 'Purchase Now')}
                </Button>
                {appInfo?.demo_book_message && (
                  <Button
                    color='primary'
                    outline
                    borderRadius='8px'
                    onClick={() => showMessage(appInfo?.demo_book_message)}
                  >
                    {t('BOOK_A_DEMO', 'Book a demo')}
                  </Button>
                )}
              </ButtonWRapper>
            )}
          </AppInfoContainer>
          <AppInfoContainer>
            <ImageWrapper isDriver={isDriver}>
              <img src={appInfo.images.brand} alt='' />
            </ImageWrapper>
            <h2>{appInfo.brand_title}</h2>
            <p>{appInfo.brand_description}</p>
            <ButtonWRapper>
              <Button
                color='primary'
                borderRadius='8px'
                onClick={() => showMessage(appInfo?.purchase_message)}
              >
                {t('PURCHASE_NOW', 'Purchase Now')}
              </Button>
            </ButtonWRapper>
          </AppInfoContainer>
        </BoxWrapper>
        {children && children}
      </ContentWrapper>
    </Container>
  )
}
