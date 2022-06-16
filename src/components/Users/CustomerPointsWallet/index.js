import React, { useState } from 'react'
import { useLanguage, UserWallet as UserWalletController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { CustomerWalletEvents } from '../CustomerWalletEvents'
import {
  Container,
  PointsWalletContainer,
  PointsWrapper,
  Tabs,
  Tab,
  LoyaltyLevel,
  LoyaltyLevelContent
} from './styles'

const CustomerPointsWalletUI = (props) => {
  const {
    walletState,
    user
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [showOption, setShowOption] = useState('points_wallet')

  return (
    <Container>
      <h1>{t('POINTS_WALLET', 'Points wallet')}</h1>
      <Tabs>
        <Tab
          active={showOption === 'points_wallet'}
          onClick={() => setShowOption('points_wallet')}
        >
          {t('POINTS_WALLET', 'Points wallet')}
        </Tab>
        <Tab
          active={showOption === 'history'}
          onClick={() => setShowOption('history')}
        >
          {t('TRANSACTION_HISTORY', 'Transaction history')}
        </Tab>
      </Tabs>
      {showOption === 'points_wallet' && (
        <>
          {walletState?.loading ? (
            <>
              <PointsWalletContainer>
                <PointsWrapper>
                  <h2><Skeleton width={70} height={20} /></h2>
                  <p><Skeleton width={30} height={15} /></p>
                </PointsWrapper>
                <LoyaltyLevel>
                  <h2><Skeleton width={70} height={20} /></h2>
                  <LoyaltyLevelContent>
                    <Skeleton height={150} style={{ width: '100%' }} />
                    <h3><Skeleton width={100} height={23} /></h3>
                  </LoyaltyLevelContent>
                </LoyaltyLevel>
              </PointsWalletContainer>
            </>
          ) : (
            <>
              <PointsWalletContainer>
                <PointsWrapper>
                  <h2>{walletState.wallet?.balance || 0}</h2>
                  <p>{t('POINTS', 'Points')}</p>
                </PointsWrapper>
                {user?.loyalty_level && (
                  <LoyaltyLevel>
                    <h2>{t('LEVEL', 'Level')}</h2>
                    <LoyaltyLevelContent>
                      <img src={user?.loyalty_level?.image ?? theme.images.general.level} alt='' />
                      <h3>{user?.loyalty_level?.name}</h3>
                    </LoyaltyLevelContent>
                  </LoyaltyLevel>
                )}
              </PointsWalletContainer>
            </>
          )}
        </>
      )}
      {showOption === 'history' && (
        <CustomerWalletEvents {...props} />
      )}
    </Container>
  )
}

export const CustomerPointsWallet = (props) => {
  const customerPointsWalletProps = {
    ...props,
    walletType: 'credit_point',
    UIComponent: CustomerPointsWalletUI
  }
  return <UserWalletController {...customerPointsWalletProps} />
}
