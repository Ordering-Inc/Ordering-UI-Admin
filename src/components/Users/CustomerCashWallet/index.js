import React, { useState } from 'react'
import { useLanguage, UserCashWallet } from 'ordering-components-admin'
import { CustomerCashWalletDetails } from '../CustomerCashWalletDetails'
import { CustomerTransactionHistory } from '../CustomerTransactionHistory'

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
        <CustomerTransactionHistory {...props} />
      )}
    </Container>
  )
}

export const CustomerCashWallet = (props) => {
  const customerWalletProps = {
    ...props,
    UIComponent: CustomerCashWalletUI
  }
  return <UserCashWallet {...customerWalletProps} />
}
