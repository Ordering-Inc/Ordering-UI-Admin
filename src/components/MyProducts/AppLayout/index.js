import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton, Button } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import {
  Container,
  HeaderTitleContainer,
  ContentWrapper,
  BoxWrapper,
  AppInfoContainer,
  ImageWrapper,
  AppStoreLinksWrapper,
  DownloadLink,
  ButtonWRapper
} from './styles'

export const AppLayout = (props) => {
  const { appInfo } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

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
            <ImageWrapper>
              <img src={appInfo.images.live} alt='' />
            </ImageWrapper>
            <h2>{appInfo.live_title}</h2>
            <p>{appInfo.live_description}</p>
            {appInfo?.live_purchase_link ? (
              <ButtonWRapper>
                <Button
                  color='primary'
                  borderRadius='8px'
                  onClick={() => window.open(`${appInfo.live_purchase_link}`, '_blank')}
                >
                  {t('PURCHASE_NOW', 'Purchase Now')}
                </Button>
              </ButtonWRapper>
            ) : (
              <AppStoreLinksWrapper>
                {appInfo.web_url ? (
                  <DownloadLink href={appInfo.web_url} target='_blank' isSingle className='download-link'>
                    {appInfo.web_link_title}
                  </DownloadLink>
                ) : (
                  <>
                    <DownloadLink href={appInfo.apple_store_link} target='_blank' className='download-link'>
                      <img src={theme.images.general.appStore} alt='App store' />
                    </DownloadLink>
                    <DownloadLink href={appInfo.google_play_link} target='_blank' className='download-link'>
                      <img src={theme.images.general.googlePlay} alt='Google play' />
                    </DownloadLink>
                  </>
                )}
              </AppStoreLinksWrapper>
            )}
          </AppInfoContainer>
          <AppInfoContainer>
            <ImageWrapper>
              <img src={appInfo.images.brand} alt='' />
            </ImageWrapper>
            <h2>{appInfo.brand_title}</h2>
            <p>{appInfo.brand_description}</p>
            <ButtonWRapper>
              <Button
                color='primary'
                borderRadius='8px'
                onClick={() => window.open(`${appInfo.purchase_link}`, '_blank')}
              >
                {t('PURCHASE_NOW', 'Purchase Now')}
              </Button>
            </ButtonWRapper>
          </AppInfoContainer>
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  )
}
