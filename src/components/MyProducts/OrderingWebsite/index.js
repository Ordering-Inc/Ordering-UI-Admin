import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import {
  Container,
  HeaderTitleContainer,
  WebsiteWrapper,
  InfoWrapper
} from './styles'

export const OrderingWebsite = () => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const theme = useTheme()

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
      <WebsiteWrapper>
        <InfoWrapper>
          <h1>{t('ORDERING_WEBSITE', 'Ordering website')}</h1>
          <p>{t('ORDERING_WEBSITE_DESC', 'This product is included in your project by default.')}</p>
        </InfoWrapper>
        <img src={theme.images.myProducts.orderingWebsite} alt='ordering-website' />
      </WebsiteWrapper>
    </Container>
  )
}
