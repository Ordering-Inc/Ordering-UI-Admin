import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, UserWallet as UserWalletController } from 'ordering-components-admin'
import { CustomerCashWalletDetails } from '../CustomerCashWalletDetails'
import { CustomerWalletEvents } from '../CustomerWalletEvents'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  Tabs,
  Tab
} from './styles'

const CustomerCashWalletUI = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [showOption, setShowOption] = useState('cash_wallet')

  const handleTabClick = (tab, isInitialRender) => {
    setShowOption(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(showOption)
    }
  }, [])

  return (
    <Container>
      <h1>{t('CASH_WALLET', 'Cash wallet')}</h1>
      <Tabs>
        <Tab
          active={showOption === 'cash_wallet'}
          onClick={() => handleTabClick('cash_wallet')}
        >
          {t('CASH_WALLET', 'Cash wallet')}
        </Tab>
        <Tab
          active={showOption === 'history'}
          onClick={() => handleTabClick('history')}
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
