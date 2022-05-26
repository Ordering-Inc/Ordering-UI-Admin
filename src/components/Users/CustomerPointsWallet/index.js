import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UserWallet as UserWalletController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { CustomerWalletEvents } from '../CustomerWalletEvents'
import {
  Container,
  PointsWalletContainer,
  PointsWrapper,
  Tabs,
  Tab
} from './styles'

const CustomerPointsWalletUI = (props) => {
  const {
    walletState
  } = props

  const [, t] = useLanguage()
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
              </PointsWalletContainer>
            </>
          ) : (
            <>
              <PointsWalletContainer>
                <PointsWrapper>
                  <h2>{walletState.wallet?.balance || 0}</h2>
                  <p>{t('POINTS', 'Points')}</p>
                </PointsWrapper>
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
