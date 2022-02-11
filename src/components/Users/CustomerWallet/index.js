import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Button, Input, TextArea } from '../../../styles'
import {
  Container,
  Tabs,
  Tab,
  WalletBalaceContainer,
  SectionContainer,
  FormController
} from './styles'
export const CustomerWallet = (props) => {
  const {
    user
  } = props

  const [{ parsePrice }] = useUtils()
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

      <WalletBalaceContainer>
        <span>{parsePrice(user?.wallets?.ballance)}</span>
        <span>{t('WALLET_MONEY', 'Wallet money')}</span>
      </WalletBalaceContainer>
      <SectionContainer>
        <p>{t('ADD_WALLET_MONEY', 'Add wallet money')}</p>
        <FormController>
          <label>{t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')}</label>
          <Input
            type='number'
            placeholder={`${parsePrice(0)}`}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </FormController>
        <FormController>
          <label>{t('COMMENT', 'Comment')}</label>
          <TextArea
            rows={3}
            placeholder={t('WRITE_SHORT_COMMENT', 'Write a short comment')}
          />
        </FormController>
        <Button
          borderRadius='8px'
          color='primary'
        >
          {t('ADD', 'Add')}
        </Button>
      </SectionContainer>
      <SectionContainer>
        <p>{t('REDUCE_WALLET_MONEY', 'Reduce wallet money')}</p>
        <FormController>
          <label>{t('INDICATE_THE_AMOUNT_TO_REDUCE', 'Indicate the amount to reduce')}</label>
          <Input
            type='number'
            placeholder={`${parsePrice(0)}`}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </FormController>
        <FormController>
          <label>{t('COMMENT', 'Comment')}</label>
          <TextArea
            rows={3}
            placeholder={t('WRITE_SHORT_COMMENT', 'Write a short comment')}
          />
        </FormController>
        <Button
          borderRadius='8px'
          color='black'
        >
          {t('REDUCE', 'Reduce')}
        </Button>
      </SectionContainer>
    </Container>
  )
}
