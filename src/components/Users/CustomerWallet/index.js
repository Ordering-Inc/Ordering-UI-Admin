import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  Container,
  Tabs,
  Tab
} from './styles'
import { CustomerCashWallet } from '../CustomerCashWallet'

export const CustomerWallet = (props) => {
  const {
    userId
  } = props
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
        <CustomerCashWallet
          userId={userId}
        />
      )}
    </Container>
  )
}
