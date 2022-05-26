import React, { useState } from 'react'
import { useLanguage, UserWallet as UserWalletController } from 'ordering-components-admin'
import { CustomerCashWalletDetails } from '../CustomerCashWalletDetails'
import { CustomerWalletEvents } from '../CustomerWalletEvents'

import {
  Container,
  Tabs,
  Tab
} from './styles'

const CustomerCashWalletUI = (props) => {
  const [, t] = useLanguage()
  const [showOption, setShowOption] = useState('cash_wallet')

  return (
    <Container>
      <h1>{t('CASH_WALLET', 'Cash wallet')}</h1>
      <Tabs>
        <Tab
          active={showOption === 'cash_wallet'}
          onClick={() => setShowOption('cash_wallet')}
        >
          {t('CASH_WALLET', 'Cash wallet')}
        </Tab>
        <Tab
          active={showOption === 'history'}
          onClick={() => setShowOption('history')}
        >
          {t('TRANSACTION_HISTORY', 'Transaction history')}
        </Tab>
      </Tabs>
      {showOption === 'cash_wallet' && (
        <CustomerCashWalletDetails {...props} />
      )}
      {showOption === 'history' && (
        <CustomerWalletEvents {...props} />
      )}
    </Container>
  )
}

export const CustomerCashWallet = (props) => {
  const customerWalletProps = {
    ...props,
    walletType: 'cash',
    UIComponent: CustomerCashWalletUI
  }
  return <UserWalletController {...customerWalletProps} />
}
