import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, PointsWalletBusinessDetail as PointsWalletBusinessDetailController } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../../../styles'
// import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
// import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import { Alert } from '../../Shared'
import {
  Container,
  HeaderContainer,
  DetailContent,
  PointsRedemptionWrapper,
  PointsInputWrapper,
  // PaymentRulesWrapper,
  // PaymentOptionListWrapper,
  // CheckBoxWrapper,
  // OptionInputWrapper,
  PointsAccumulationContainer,
  AccumulationInputWrapper,
  // ToggleWrapper,
  ButtonWrapper
} from './styles'

const PointsWalletBusinessDetailUI = (props) => {
  const {
    walletData,
    formState,
    handleChangeInput,
    handleClickSubmit,
    // setFormState,
    isBusiness,
    selectedBusinessList
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const { handleSubmit } = useForm()
  // const [paymentRules, setPaymentRules] = useState('maximum_redemption_type')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  // const ruleList = [
  //   { key: 'no_limit', description: t('NO_LIMIT', 'No limit') },
  //   { key: 'maximum_redemption_type', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (${t('FIXED', 'fixed')})` },
  //   { key: 'maximum_redemption_rate', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (%)` }
  // ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (!walletData) {
      const findBusiness = selectedBusinessList.find(business => business.wallet_enabled)
      if (!findBusiness) {
        setAlertState({ open: true, content: t('SELECT_LEAST_ONE_BUSINESS', 'Select at least one business.') })
        return
      }
    }
    if (Object.keys(formState?.changes).length > 0) {
      if (formState?.changes?.redemption_rate === '') {
        setAlertState({
          open: true,
          content: t(
            'VALIDATION_ERROR_REQUIRED',
            'Value is required'
          ).replace('_attribute_', 'redemption_rate')
        })
        return
      }
      if (formState?.changes?.accumulation_rate === '') {
        setAlertState({
          open: true,
          content: t(
            'VALIDATION_ERROR_REQUIRED',
            'Value is required'
          ).replace('_attribute_', 'accumulation_rate')
        })
        return
      }
      handleClickSubmit && handleClickSubmit()
    }
  }

  // useEffect(() => {
  //   if (paymentRules === 'no_limit') {
  //     const changes = { ...formState.changes, maximum_redemption_type: null }
  //     setFormState({ ...formState, changes: changes })
  //   }
  // }, [paymentRules])

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState?.error])

  return (
    <Container isBusiness={isBusiness} onSubmit={handleSubmit(onSubmit)}>
      {walletData?.name && (
        <HeaderContainer>
          <h1>{walletData?.name}</h1>
        </HeaderContainer>
      )}

      <DetailContent>
        <PointsRedemptionWrapper>
          <h2>{t('POINTS_REDEMPTION', 'Points redemption')}</h2>
          <p>{t('VALUE', 'Value')}</p>
          <PointsInputWrapper>
            <Input
              type='text'
              placeholder='00 points'
              name='redemption_rate'
              autoComplete='off'
              value={(typeof formState?.changes?.redemption_rate !== 'undefined')
                ? formState?.changes?.redemption_rate
                : walletData?.redemption_rate ?? ''}
              onChange={handleChangeInput}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
            <span>=</span>
            <span>{parsePrice(1)}</span>
          </PointsInputWrapper>
        </PointsRedemptionWrapper>
        {/* <PaymentRulesWrapper>
          <h2>{t('PAYMENT_RULES', 'Payment rules')}</h2>
          <p>{t('MAXIMUM_REDEEM_PER_ORDER', 'Maximum to redeem per order limit')}</p>
        </PaymentRulesWrapper> */}
        {/* <PaymentOptionListWrapper>
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
        </PaymentOptionListWrapper> */}
        <PointsAccumulationContainer>
          <h2>{t('POINTS_ACCUMULATION', 'Points accumulation')}</h2>
          <p>{t('AMOUNT_POINTS_ASSIGN_TO_ORDER_SUBTOTAL', 'Amount of points to assign in relation to the order subtotal')}</p>
          <span>{t('VALUE', 'Value')}</span>
          <AccumulationInputWrapper>
            <span>{parsePrice(1)}</span>
            <span className='equal'>=</span>
            <Input
              type='text'
              placeholder='00 points'
              name='accumulation_rate'
              autoComplete='off'
              value={(typeof formState?.changes?.accumulation_rate !== 'undefined')
                ? formState?.changes?.accumulation_rate
                : walletData?.accumulation_rate ?? ''}
              onChange={handleChangeInput}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </AccumulationInputWrapper>
          {/* <ToggleWrapper>
            <p>{t('MAXIMUM_OF_POINTS', 'Maximum of points')}</p>
          </ToggleWrapper>
          <Input
            type='number'
            placeholder='00 points'
            name='maximum_accomulation'
            value={formState?.changes?.maximum_accomulation ?? walletData?.maximum_accomulation ?? ''}
            onChange={handleChangeInput}
          /> */}
        </PointsAccumulationContainer>
      </DetailContent>
      <ButtonWrapper>
        <Button
          color='primary'
          type='submit'
          disabled={Object.keys(formState?.changes).length === 0}
        >
          {walletData ? ('SAVE', 'Save') : ('ADD', 'Add')}
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
