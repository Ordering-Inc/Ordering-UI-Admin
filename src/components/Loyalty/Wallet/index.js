import React, { useEffect, useState } from 'react'
import { useLanguage, RewardsPrograms as RewardsProgramsController } from 'ordering-components-admin'
import { PointsWalletBusinessDetail } from '../PointsWalletBusinessDetail'
import { PointsWalletBusinessList } from '../PointsWalletBusinessList'
import { IconButton } from '../../../styles'
import { ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  Container,
  Title,
  Tabs,
  Tab,
  Header,
  SkeletonWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'

const WalletUI = (props) => {
  const {
    handleParentSidebarMove,
    pointWallet,
    handleUpdatePointsWallet,
    moveDistance,
    loyaltyPlanList,
    title
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
        <Title>{title}</Title>
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
      {loyaltyPlanList?.loading ? (
        <SkeletonWrapper>
          <h1>
            <Skeleton width={150} height={20} />
          </h1>
          <Skeleton height={18} style={{ marginBottom: 10 }} count={8} />
        </SkeletonWrapper>
      ) : (
        <>
          {selectedOption === 'general' && (
            <div>
              <PointsWalletBusinessDetail
                loyaltyPlanList={loyaltyPlanList}
                walletData={pointWallet}
                handleUpdatePointsWallet={handleUpdatePointsWallet}
                selectedBusinessList={selectedBusinessList}
              />
            </div>
          )}
          {selectedOption === 'business' && (
            <div>
              <PointsWalletBusinessList
                {...props}
                setSelectedBusinessList={setSelectedBusinessList}
                isCloseBusinessDetails={selectedOption !== 'business'}
              />
            </div>
          )}
        </>
      )}
    </Container>
  )
}

export const Wallet = (props) => {
  const walletProps = {
    ...props,
    UIComponent: WalletUI
  }
  return <RewardsProgramsController {...walletProps} />
}
