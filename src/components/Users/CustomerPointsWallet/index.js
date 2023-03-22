import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, UserWallet as UserWalletController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { CustomerWalletEvents } from '../CustomerWalletEvents'
import { Button, Input, TextArea } from '../../../styles'
import { Alert } from '../../Shared'

import {
  Container,
  PointsWalletContainer,
  PointsWrapper,
  Tabs,
  Tab,
  LoyaltyLevel,
  LoyaltyLevelContent,

  SectionContainer,
  FormController
} from './styles'

const CustomerPointsWalletUI = (props) => {
  const {
    walletState,
    user,

    handleChangeInput,
    actionState,
    addWalletState,
    reduceWalletState,
    handleAddWalletMoney,
    handleReduceWalletMoney
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()

  const [showOption, setShowOption] = useState('points_wallet')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleTabClick = (tab, isInitialRender) => {
    setShowOption(tab)
    if (!isInitialRender) {
      const enabled = query.get('enabled')
      const id = query.get('id')
      const section = query.get('section')
      history.replace(`${location.pathname}?enabled=${enabled}&id=${id}&section=${section}&tab=${tab}`)
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
    <Container>
      <h1>{t('POINTS_WALLET', 'Points wallet')}</h1>
      <Tabs>
        <Tab
          active={showOption === 'points_wallet'}
          onClick={() => handleTabClick('points_wallet')}
        >
          {t('POINTS_WALLET', 'Points wallet')}
        </Tab>
        <Tab
          active={showOption === 'history'}
          onClick={() => handleTabClick('history')}
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

                <SectionContainer>
                  <p>{t('ADD_WALLET_MONEY', 'Add wallet money')}</p>
                  <FormController>
                    <label>{t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')}</label>
                    <Input
                      type='number'
                      name='amount'
                      placeholder={t('POINTS', 'Points')}
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
                      placeholder={t('POINTS', 'Points')}
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
              </PointsWalletContainer>
            </>
          )}
        </>
      )}
      {showOption === 'history' && (
        <CustomerWalletEvents {...props} />
      )}
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
