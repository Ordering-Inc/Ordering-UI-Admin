import React, { useState } from 'react'
import { List as MenuIcon, Wallet, BarChartSteps } from 'react-bootstrap-icons'
import { useLanguage, RewardsPrograms as RewardsProgramsController } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { SideBar } from '../../Shared'

import {
  Container,
  HeaderTitleContainer,
  LoyaltyListContainer,
  LoyaltyItemWrapper,
  IconWrapper,
  LoyaltyItemContent
} from './styles'
import { PointsWallet } from '../PointsWallet'
import { PointsWalletLevels } from '../PointsWalletLevels'

const RewardsProgramsUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [showOption, setShowOption] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)
  const [levelMoveDistance, setLevelMoveDistance] = useState(0)

  const hanldeClosePointsWallet = () => {
    setMoveDistance(0)
    setShowOption(null)
  }

  const handleCloseLevel = () => {
    setLevelMoveDistance(0)
    setShowOption(null)
  }

  return (
    <>
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
          <LoyaltyItemWrapper onClick={() => setShowOption('points_wallet')}>
            <IconWrapper>
              <Wallet />
            </IconWrapper>
            <LoyaltyItemContent>
              <h5>{t('POINTS_WALLET', 'Points wallet')}</h5>
              <p>{t('POINTS_WALLET_DESCRIPTION', 'Points wallet general and per business setup.')}</p>
            </LoyaltyItemContent>
          </LoyaltyItemWrapper>
          <LoyaltyItemWrapper onClick={() => setShowOption('levels')}>
            <IconWrapper>
              <BarChartSteps />
            </IconWrapper>
            <LoyaltyItemContent>
              <h5>{t('LEVELS', 'Levels')}</h5>
              <p>{t('LEVELS_DESCRIPTION', 'Setup different loyalty levels for your users.')}</p>
            </LoyaltyItemContent>
          </LoyaltyItemWrapper>
        </LoyaltyListContainer>
      </Container>
      {showOption === 'points_wallet' && (
        <SideBar
          sidebarId='loyaltyWallet'
          open={showOption === 'points_wallet'}
          onClose={hanldeClosePointsWallet}
          defaultSideBarWidth={550 + moveDistance}
          moveDistance={moveDistance}
        >
          <PointsWallet
            {...props}
            handleParentSidebarMove={val => setMoveDistance(val)}
          />
        </SideBar>
      )}
      {showOption === 'levels' && (
        <SideBar
          sidebarId='loyaltyLevels'
          open={showOption === 'levels'}
          onClose={() => handleCloseLevel()}
          defaultSideBarWidth={550 + levelMoveDistance}
          moveDistance={levelMoveDistance}
        >
          <PointsWalletLevels
            handleParentSidebarMove={val => setLevelMoveDistance(val)}
          />
        </SideBar>
      )}
    </>
  )
}

export const RewardsPrograms = (props) => {
  const rewardsProgramsProps = {
    ...props,
    UIComponent: RewardsProgramsUI
  }
  return <RewardsProgramsController {...rewardsProgramsProps} />
}
