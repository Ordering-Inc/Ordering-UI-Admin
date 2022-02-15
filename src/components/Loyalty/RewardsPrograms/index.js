import React from 'react'
import { List as MenuIcon, Wallet, BarChartSteps } from 'react-bootstrap-icons'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'

import {
  Container,
  HeaderTitleContainer,
  LoyaltyListContainer,
  LoyaltyItemWrapper,
  IconWrapper,
  LoyaltyItemContent
} from './styles'

export const RewardsPrograms = () => {
  const [, t] = useLanguage()
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
        <h1>{t('LOYALTY', 'Loyalty')}</h1>
      </HeaderTitleContainer>

      <LoyaltyListContainer>
        <LoyaltyItemWrapper>
          <IconWrapper>
            <Wallet />
          </IconWrapper>
          <LoyaltyItemContent>
            <h5>{t('POINTS_WALLET', 'Points wallet')}</h5>
            <p>{t('POINTS_WALLET_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.')}</p>
          </LoyaltyItemContent>
        </LoyaltyItemWrapper>
        <LoyaltyItemWrapper>
          <IconWrapper>
            <BarChartSteps />
          </IconWrapper>
          <LoyaltyItemContent>
            <h5>{t('LEVELS', 'Levels')}</h5>
            <p>{t('LEVELS_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.')}</p>
          </LoyaltyItemContent>
        </LoyaltyItemWrapper>
      </LoyaltyListContainer>
    </Container>
  )
}
