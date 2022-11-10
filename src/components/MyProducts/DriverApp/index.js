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

export const DriverApp = () => {
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
        <h1>{t('DRIVER_APP', 'Driver app')}</h1>
        <p>{t('DRIVER_APP_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
        <BoxLayout
          title={t('FREE_TO_USE', 'Free to use')}
          description={t('FREE_TO_USE_DESC', 'This app can be used by your fleet with the ordering.co logo.')}
          photo={theme.images.myProducts.driverApp}
        >
          <FreeBtnWrapper>
            <Button
              color='primary'
              borderRadius='8px'
              outline
              onClick={() => handleOpenURL('https://apps.apple.com/us/app/driver-app-2-0/id1606257815')}
            >
              {t('DOWNLOAD_APPLE', 'Download apple')}
            </Button>
            <Button
              color='primary'
              borderRadius='8px'
              outline
              onClick={() => handleOpenURL('https://play.google.com/store/apps/details?id=com.ordering.deliveryv5')}
            >
              {t('DOWNLOAD_GOOGLE', 'Download google')}
            </Button>
          </FreeBtnWrapper>
        </BoxLayout>
        <BoxLayout
          title={t('BRANDED_BY_YOU', 'Branded by you')}
          description={t('BRANDED_BY_YOU_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi quam aenean in faucibus ac integer libero. Eu egestas sit imperdiet at sit adipiscing ullamcorper sed sit.')}
          photo={theme.images.myProducts.driverApp}
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
