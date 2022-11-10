import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { BoxLayout } from '../BoxLayout'
import {
  Container,
  HeaderTitleContainer,
  ContentWrapper,
  FreeBtnWrapper,
  BrandedBtnWrapper
} from './styles'

export const StoreApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const handleOpenURL = (url) => {
    window.open(url, '_blank')
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
        <h1>{t('STORE_APP', 'Store app')}</h1>
        <p>{t('STORE_APP_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
        <BoxLayout
          title={t('FREE_TO_USE', 'Free to use')}
          description={t('FREE_TO_USE_DESC', 'This app can be used by your fleet with the ordering.co logo.')}
          photo={theme.images.myProducts.storeApp}
        >
          <FreeBtnWrapper>
            <Button
              color='primary'
              borderRadius='8px'
              outline
              onClick={() => handleOpenURL('https://apps.apple.com/us/app/store-app-2-0/id1608192050')}
            >
              {t('DOWNLOAD_APPLE', 'Download apple')}
            </Button>
            <Button
              color='primary'
              borderRadius='8px'
              outline
              onClick={() => handleOpenURL('https://play.google.com/store/apps/details?id=com.ordering.storeappv5&pli=1')}
            >
              {t('DOWNLOAD_GOOGLE', 'Download google')}
            </Button>
          </FreeBtnWrapper>
        </BoxLayout>
        <BoxLayout
          title={t('BRANDED_BY_YOU', 'Branded by you')}
          description={t('BRANDED_BY_YOU_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi quam aenean in faucibus ac integer libero. Eu egestas sit imperdiet at sit adipiscing ullamcorper sed sit.')}
          photo={theme.images.myProducts.storeApp}
        >
          <BrandedBtnWrapper>
            <Button
              color='primary'
              borderRadius='8px'
              onClick={() => handleOpenURL('https://www.ordering.co/ordering-sales')}
            >
              {t('REQUEST_APP_NOW', 'Request app now')}
            </Button>
          </BrandedBtnWrapper>
        </BoxLayout>
      </ContentWrapper>
    </Container>
  )
}
