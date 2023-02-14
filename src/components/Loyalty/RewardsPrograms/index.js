import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { List as MenuIcon, BarChartSteps, Gift, Wallet as Cash } from 'react-bootstrap-icons'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { SideBar } from '../../Shared'
import { Wallet } from '../Wallet'
import { PointsWalletLevels } from '../PointsWalletLevels'
import { GiftCards } from '../GiftCards'

import {
  Container,
  HeaderTitleContainer,
  LoyaltyListContainer,
  LoyaltyItemWrapper,
  IconWrapper,
  LoyaltyItemContent
} from './styles'

export const RewardsPrograms = () => {
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [showOption, setShowOption] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)
  const [levelMoveDistance, setLevelMoveDistance] = useState(0)
  const [giftCardMoveDistance, setGiftCardMoveDistance] = useState(0)

  const walletList = [
    { key: 'credit_point', name: t('POINTS_WALLET', 'Points wallet'), description: t('POINTS_WALLET_DESCRIPTION', 'Points wallet general and per business setup.'), icon: <Cash /> },
    { key: 'levels', name: t('LEVELS', 'Levels'), description: t('LEVELS_DESCRIPTION', 'Setup different loyalty levels for your users.'), icon: <BarChartSteps /> },
    { key: 'gift_card', name: t('GIFT_CARD', 'Gift Card'), description: t('GIFT_CARD_DESCRIPTION', 'Setup different gift cards for your customers.'), icon: <Gift /> },
    { key: 'cashback', name: t('CASH_WALLET', 'Cash wallet'), description: t('CASH_WALLET_DESCRIPTION', 'Cash wallet general and per business setup.'), icon: <Cash /> }
  ]

  const hanldeClosePointsWallet = () => {
    setMoveDistance(0)
    setShowOption(null)
    history.replace(`${location.pathname}`)
  }

  const handleCloseLevel = () => {
    setLevelMoveDistance(0)
    setShowOption(null)
    history.replace(`${location.pathname}`)
  }

  const handleCloseGiftCard = () => {
    setGiftCardMoveDistance(0)
    setShowOption(null)
    history.replace(`${location.pathname}`)
  }

  const handleOptionClick = (key, isInitialRender) => {
    setShowOption(key)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?id=${key}`)
    }
  }

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      handleOptionClick(id, true)
    }
  }, [])

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
          <h1>{t('LOYALTY_AUTOMATION', 'Loyalty automation')}</h1>
        </HeaderTitleContainer>

        <LoyaltyListContainer>
          {walletList.map(item => (
            <LoyaltyItemWrapper
              key={item.key}
              onClick={() => handleOptionClick(item.key)}
            >
              <IconWrapper>
                {item.icon}
              </IconWrapper>

              <LoyaltyItemContent>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </LoyaltyItemContent>
            </LoyaltyItemWrapper>
          ))}
        </LoyaltyListContainer>
      </Container>

      {(showOption === 'credit_point' || showOption === 'cashback') && (
        <SideBar
          sidebarId='loyaltyWallet'
          open={(showOption === 'credit_point' || showOption === 'cashback')}
          onClose={hanldeClosePointsWallet}
          defaultSideBarWidth={550 + moveDistance}
          moveDistance={moveDistance}
        >
          <Wallet
            type={showOption}
            title={walletList.find(item => item.key === showOption)?.name}
            moveDistance={moveDistance}
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
          showExpandIcon
        >
          <PointsWalletLevels
            handleParentSidebarMove={val => setLevelMoveDistance(val)}
          />
        </SideBar>
      )}

      {showOption === 'gift_card' && (
        <SideBar
          open={showOption === 'gift_card'}
          onClose={() => handleCloseGiftCard()}
          defaultSideBarWidth={550 + giftCardMoveDistance}
          moveDistance={giftCardMoveDistance}
          showExpandIcon
        >
          <GiftCards
            handleParentSidebarMove={val => setGiftCardMoveDistance(val)}
          />
        </SideBar>
      )}
    </>
  )
}
