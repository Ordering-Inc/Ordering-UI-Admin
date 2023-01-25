import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { PointsWalletBusinessDetail } from '../PointsWalletBusinessDetail'
import { PointsWalletBusinessList } from '../PointsWalletBusinessList'

import {
  Container,
  Title,
  Tabs,
  Tab,
  Header
} from './styles'
import { IconButton } from '../../../styles'
import { ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'

export const PointsWallet = (props) => {
  const {
    handleParentSidebarMove,
    pointWallet,
    handleUpdatePointsWallet,
    moveDistance
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [selectedOption, setSelectedOption] = useState('general')
  const [selectedBusinessList, setSelectedBusinessList] = useState([])
  const [isExpand, setIsExpand] = useState(false)

  const walletOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'business', name: t('BUSINESSES', 'Businesses') }
  ]

  const expandSidebar = () => {
    const element = document.getElementById('loyaltyWallet')
    if (isExpand) element.style.width = '550px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (selectedOption !== 'business') handleParentSidebarMove(0)
  }, [selectedOption])

  return (
    <Container>
      <Header>
        <Title>{t('POINTS_WALLET', 'Points wallet')}</Title>
        {width > 576 && moveDistance === 0 && (
          <IconButton
            color='black'
            onClick={expandSidebar}
          >
            {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
          </IconButton>
        )}
      </Header>
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
