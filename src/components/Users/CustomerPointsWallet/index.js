import React from 'react'
import { useLanguage, useUtils, CustomerPointsWallet as CustomerPointsWalletController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import {
  Container,
  PointsWalletContainer,
  PointsWrapper,
  EqualWrapper
} from './styles'

const CustomerPointsWalletUI = (props) => {
  const {
    WalletState
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  return (
    <Container>
      <h1>{t('POINTS_WALLET', 'Points wallet')}</h1>
      {WalletState?.loading ? (
        <>
          <PointsWalletContainer>
            <PointsWrapper>
              <h2><Skeleton width={70} height={20} /></h2>
              <p><Skeleton width={30} height={15} /></p>
            </PointsWrapper>
            <EqualWrapper><Skeleton width={30} height={20} /></EqualWrapper>
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
              <h2>{WalletState.wallets?.find(wallet => wallet.type === 'credit_point')?.balance || 0}</h2>
              <p>{t('POINTS', 'Points')}</p>
            </PointsWrapper>
            <EqualWrapper>,</EqualWrapper>
            <PointsWrapper>
              <h2>{parsePrice(WalletState.wallets?.find(wallet => wallet.type === 'cash')?.balance || 0)}</h2>
              <p>{t('CASH', 'Cash')}</p>
            </PointsWrapper>
          </PointsWalletContainer>
        </>
      )}
    </Container>
  )
}

export const CustomerPointsWallet = (props) => {
  const customerPointsWalletProps = {
    ...props,
    UIComponent: CustomerPointsWalletUI
  }
  return <CustomerPointsWalletController {...customerPointsWalletProps} />
}
