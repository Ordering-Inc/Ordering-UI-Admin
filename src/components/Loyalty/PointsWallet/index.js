import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  Title,
  Tabs,
  Tab
} from './styles'
import { WalletBusinessList } from '../WalletBusinessList'
import { LoyaltyBusinessDetail } from '../LoyaltyBusinessDetail'

export const PointsWallet = (props) => {
  const { handleParentSidebarMove } = props

  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('business')

  const walletOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'business', name: t('BUSINESSES', 'Businesses') }
  ]

  useEffect(() => {
    if (selectedOption !== 'business') handleParentSidebarMove(0)
  }, [selectedOption])

  return (
    <Container>
      <Title>{t('POINTS_WALLET', 'Points wallet')}</Title>
      <Tabs>
        {walletOptionList.map(option => (
          <Tab
            key={option.key}
            active={selectedOption === option.key}
            onClick={() => setSelectedOption(option.key)}
          >
            {option.name}
          </Tab>
        ))}
      </Tabs>
      {selectedOption === 'general' && <LoyaltyBusinessDetail />}
      {selectedOption === 'business' && <WalletBusinessList {...props} />}
    </Container>
  )
}
