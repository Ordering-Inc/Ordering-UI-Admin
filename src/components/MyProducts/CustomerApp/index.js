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
  ButtonWrapper
} from './styles'
import { BoxLayout } from '../BoxLayout'

export const CustomerApp = () => {
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
        <BoxLayout
          title={t('CUSTOMER_APP', 'Customer app')}
          photo={theme.images.myProducts.customerApp}
          description={t('CUSTOMER_APP_DESC', 'Give your customers the chance to order from their mobile devices wherever they are, receive push notifications, offers, and much more.')}
        >
          <ButtonWrapper>
            <Button
              color='primary'
              borderRadius='8px'
              onClick={() => window.open('https://www.ordering.co/ordering-sales', '_blank')}
            >
              {t('REQUEST_APP_NOW', 'Request app now')}
            </Button>
          </ButtonWrapper>
        </BoxLayout>
      </ContentWrapper>
    </Container>
  )
}
