import React from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton, Button } from '../../../styles'
import { List as MenuIcon, InfoCircle } from 'react-bootstrap-icons'
import {
  Container,
  HeaderTitleContainer,
  ContentWrapper,
  BoxWrapper,
  AppInfoContainer,
  ImageWrapper,
  DownloadLink,
  ButtonWRapper,
  DownLoadWrapper,
  HeaderInfoWrapper,
  InfoContent
} from './styles'

export const AppLayout = (props) => {
  const { appInfo, isDriver } = props
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const location = useLocation()

  const LeftContent = () => (
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
          {appInfo?.purchase_link && (
            <Button
              color='primary'
              borderRadius='8px'
              onClick={() => window.open(appInfo?.purchase_link, '_blank')}
            >
              {t('PURCHASE_NOW', 'Purchase Now')}
            </Button>
          )}
          {appInfo?.demo_link && (
            <Button
              color='primary'
              outline
              borderRadius='8px'
              onClick={() => window.open(appInfo?.demo_link, '_blank')}
            >
              {t('BOOK_A_DEMO', 'Book a demo')}
            </Button>
          )}
        </ButtonWRapper>
      )}
    </AppInfoContainer>
  )

  const RightContent = () => (
    <AppInfoContainer>
      <ImageWrapper isDriver={isDriver}>
        <img src={appInfo.images.brand} alt='' />
      </ImageWrapper>
      <h2>{appInfo.brand_title}</h2>
      <p>{appInfo.brand_description}</p>
      <ButtonWRapper>
        {appInfo?.purchase_link && (
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => window.open(appInfo?.purchase_link, '_blank')}
          >
            {t('PURCHASE_NOW', 'Purchase Now')}
          </Button>
        )}
        {!appInfo?.purchase_link && appInfo?.demo_link && (
          <Button
            color='primary'
            outline
            borderRadius='8px'
            onClick={() => window.open(appInfo?.demo_link, '_blank')}
          >
            {t('BOOK_A_DEMO', 'Book a demo')}
          </Button>
        )}
      </ButtonWRapper>
    </AppInfoContainer>
  )

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
        {(location.pathname === '/my-products/ordering-website' || location.pathname === '/my-products/customer-app') && (
          <HeaderInfoWrapper>
            <IconButton
              color='primary'
            >
              <InfoCircle />
            </IconButton>
            <InfoContent>
              {t('MY_PRODUCTS_INFO', 'Use the advanced configurations below to customize your products changing the images, colors, available options and others with a few clicks. If you have doubts, please contact our team here:')}
              <a href='https://www.ordering.co/support' rel='noopener noreferrer' target='_blank'>https://www.ordering.co/support</a>
            </InfoContent>
          </HeaderInfoWrapper>
        )}
      </HeaderTitleContainer>
      <ContentWrapper>
        <h1>{appInfo.title}</h1>
        <p>{appInfo.description}</p>
        <BoxWrapper>
          {appInfo?.live_title && <LeftContent />}
          <RightContent />
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  )
}
