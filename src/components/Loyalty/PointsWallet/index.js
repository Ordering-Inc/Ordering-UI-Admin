import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { PointsWalletBusinessDetail } from '../PointsWalletBusinessDetail'
import { PointsWalletBusinessList } from '../PointsWalletBusinessList'

import {
  Container,
  Title,
  Tabs,
  Tab
} from './styles'

export const PointsWallet = (props) => {
  const {
    handleParentSidebarMove,
    pointWallet,
    handleUpdatePointsWallet
  } = props

  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('general')
  const [selectedBusinessList, setSelectedBusinessList] = useState([])

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
      <div
        style={{
          display: selectedOption === 'general' ? 'block' : 'none'
        }}
      >
        <PointsWalletBusinessDetail
          walletData={pointWallet}
          handleUpdatePointsWallet={handleUpdatePointsWallet}
          selectedBusinessList={selectedBusinessList}
        />
      </div>
      <div
        style={{
          display: selectedOption === 'business' ? 'block' : 'none'
        }}
      >
        <PointsWalletBusinessList
          {...props}
          setSelectedBusinessList={setSelectedBusinessList}
          isCloseBusinessDetails={selectedOption !== 'business'}
        />
      </div>
    </Container>
  )
}
