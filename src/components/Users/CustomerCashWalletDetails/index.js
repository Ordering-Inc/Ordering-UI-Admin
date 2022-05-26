import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button, Input, TextArea } from '../../../styles'
import { Alert } from '../../Shared'

import {
  WalletBalaceContainer,
  SectionContainer,
  FormController
} from './styles'

export const CustomerCashWalletDetails = (props) => {
  const {
    walletState,
    addWalletState,
    reduceWalletState,
    actionState,
    handleChangeInput,
    handleAddWalletMoney,
    handleReduceWalletMoney
  } = props

  const [{ parsePrice }] = useUtils()
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onAddWalletMoney = () => {
    if (!addWalletState?.amount) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      })
      return
    }
    handleAddWalletMoney()
  }

  const onReduceWalletMoney = () => {
    if (!reduceWalletState?.amount) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      })
      return
    }
    handleReduceWalletMoney()
  }

  useEffect(() => {
    if (actionState.loading || !actionState.error) return
    setAlertState({
      open: true,
      content: actionState.error
    })
  }, [actionState])

  return (
    <>
      <WalletBalaceContainer>
        <span>
          {walletState.loading ? (
            <Skeleton height={24} width={100} />
          ) : (
            parsePrice(walletState.wallet?.balance)
          )}
        </span>
        <span>{t('WALLET_MONEY', 'Wallet money')}</span>
      </WalletBalaceContainer>
      <SectionContainer>
        <p>{t('ADD_WALLET_MONEY', 'Add wallet money')}</p>
        <FormController>
          <label>{t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')}</label>
          <Input
            type='number'
            name='amount'
            placeholder={`${parsePrice(0)}`}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
            value={addWalletState?.amount || ''}
            onChange={(e) => handleChangeInput(e, true)}
          />
        </FormController>
        <FormController>
          <label>{t('COMMENT', 'Comment')}</label>
          <TextArea
            name='description'
            rows={3}
            value={addWalletState?.description || ''}
            onChange={(e) => handleChangeInput(e, true)}
            placeholder={t('WRITE_SHORT_COMMENT', 'Write a short comment')}
          />
        </FormController>
        <Button
          borderRadius='8px'
          color='primary'
          onClick={() => onAddWalletMoney()}
          disabled={actionState.loading || Object.keys(addWalletState).length === 0}
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
            name='amount'
            placeholder={`${parsePrice(0)}`}
            value={reduceWalletState?.amount || ''}
            onChange={e => handleChangeInput(e, false)}
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
            name='description'
            value={reduceWalletState?.description || ''}
            onChange={e => handleChangeInput(e, false)}
            placeholder={t('WRITE_SHORT_COMMENT', 'Write a short comment')}
          />
        </FormController>
        <Button
          borderRadius='8px'
          color='black'
          onClick={() => onReduceWalletMoney()}
          disabled={actionState.loading || Object.keys(reduceWalletState).length === 0}
        >
          {t('REDUCE', 'Reduce')}
        </Button>
      </SectionContainer>
      <Alert
        width='800px'
        title={t('LOGIN')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}
