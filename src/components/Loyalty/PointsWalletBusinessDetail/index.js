import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, PointsWalletBusinessDetail as PointsWalletBusinessDetailController } from 'ordering-components-admin'
import { ArrowClockwise } from 'react-bootstrap-icons'
import { Button, IconButton, Input } from '../../../styles'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import { Alert } from '../../Shared'
import {
  Container,
  HeaderContainer,
  DetailContent,
  PointsRedemptionWrapper,
  PointsInputWrapper,
  PaymentRulesWrapper,
  PaymentOptionListWrapper,
  CheckBoxWrapper,
  OptionInputWrapper,
  PointsAccumulationContainer,
  AccumulationInputWrapper,
  ToggleWrapper,
  ButtonWrapper
} from './styles'

const PointsWalletBusinessDetailUI = (props) => {
  const {
    walletData,
    formState,
    handleChangeInput,
    handleSubmit,
    setFormState,
    isBusiness
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [paymentRules, setPaymentRules] = useState('maximum_redemption_type')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const ruleList = [
    { key: 'no_limit', description: t('NO_LIMIT', 'No limit') },
    { key: 'maximum_redemption_type', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (${t('FIXED', 'fixed')})` },
    { key: 'maximum_redemption_rate', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (%)` }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (paymentRules === 'no_limit') {
      const changes = { ...formState.changes, maximum_redemption_type: null }
      setFormState({ ...formState, changes: changes })
    }
  }, [paymentRules])

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState.error])

  return (
    <Container isBusiness={isBusiness}>
      {walletData?.business_name && (
        <HeaderContainer>
          <h1>{walletData?.business_name}</h1>
          <IconButton
            color='black'
          >
            <ArrowClockwise />
          </IconButton>
        </HeaderContainer>
      )}

      <DetailContent>
        <PointsRedemptionWrapper>
          <h2>{t('POINTS_REDEMPTION', 'Points redemption ')}</h2>
          <p>{t('VALUE', 'Value')}</p>
          <PointsInputWrapper>
            <Input
              type='number'
              placeholder='00 points'
              name='redemption_rate'
              value={formState?.changes?.redemption_rate ?? walletData?.redemption_rate ?? ''}
              onChange={handleChangeInput}
            />
            <span>=</span>
            <span>{parsePrice(1)}</span>
          </PointsInputWrapper>
        </PointsRedemptionWrapper>
        <PaymentRulesWrapper>
          <h2>{t('PAYMENT_RULES', 'Payment rules')}</h2>
          <p>{t('MAXIMUM_REDEEM_PER_ORDER', 'Maximum to redeem per order limit')}</p>
        </PaymentRulesWrapper>
        <PaymentOptionListWrapper>
          {ruleList.map(rule => (
            <React.Fragment key={rule.key}>
              <CheckBoxWrapper onClick={() => setPaymentRules(rule.key)}>
                {paymentRules === rule.key ? <RiRadioButtonFill /> : <IosRadioButtonOff />}
                <p>{rule.description}</p>
              </CheckBoxWrapper>
              {rule.key !== 'no_limit' && rule.key === paymentRules && (
                <OptionInputWrapper>
                  <Input
                    type='number'
                    placeholder='00 points'
                    name={rule.key}
                    value={formState?.changes[rule.key] ?? walletData[rule.key] ?? ''}
                    onChange={handleChangeInput}
                  />
                </OptionInputWrapper>
              )}
            </React.Fragment>
          ))}
        </PaymentOptionListWrapper>
        <PointsAccumulationContainer>
          <h2>{t('POINTS_ACCUMULATION', 'Points accumulation')}</h2>
          <p>{t('AMOUNT_POINTS_ASSIGN', 'Amount of points to assign')}</p>
          <span>{t('VALUE', 'Value')}</span>
          <AccumulationInputWrapper>
            <span>{parsePrice(1)}</span>
            <span className='equal'>=</span>
            <Input
              type='number'
              placeholder='00 points'
              name='accomulation_rate'
              value={formState?.changes?.accomulation_rate ?? walletData?.accomulation_rate ?? ''}
              onChange={handleChangeInput}
            />
          </AccumulationInputWrapper>
          <ToggleWrapper>
            <p>{t('MAXIMUM_OF_POINTS', 'Maximum of points')}</p>
          </ToggleWrapper>
          <Input
            type='number'
            placeholder='00 points'
            name='maximum_accomulation'
            value={formState?.changes?.maximum_accomulation ?? walletData?.maximum_accomulation ?? ''}
            onChange={handleChangeInput}
          />
        </PointsAccumulationContainer>
      </DetailContent>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={handleSubmit}
          disabled={Object.keys(formState?.changes).length === 0}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
      <Alert
        title={t('POINTS_WALLET', 'Points wallet')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const PointsWalletBusinessDetail = (props) => {
  const pointsWalletBusinessDetailProps = {
    ...props,
    UIComponent: PointsWalletBusinessDetailUI
  }
  return <PointsWalletBusinessDetailController {...pointsWalletBusinessDetailProps} />
}
