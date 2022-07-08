import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils, PointsWalletBusinessDetail as PointsWalletBusinessDetailController } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { Button, Input, Switch } from '../../../styles'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import { Alert } from '../../Shared'
import {
  Container,
  HeaderContainer,
  DetailContent,
  PointsRedemptionWrapper,
  PointsInputWrapper,
  // PaymentRulesWrapper,
  // PaymentOptionListWrapper,
  CheckBoxWrapper,
  OptionInputWrapper,
  PointsAccumulationContainer,
  AccumulationInputWrapper,
  ToggleWrapper,
  ButtonWrapper,
  ExPirationWrapper
} from './styles'

const PointsWalletBusinessDetailUI = (props) => {
  const {
    walletData,
    formState,
    handleChangeInput,
    handleClickSubmit,
    // setFormState,
    isBusiness,
    selectedBusinessList,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const { handleSubmit } = useForm()
  // const [paymentRules, setPaymentRules] = useState('no_limit')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [expiration, setExpiration] = useState(null)
  const [isMaximum, setIsMaximum] = useState(false)
  const [maxValue, setMaxValue] = useState('')

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

  const handleChangeExpirtation = (index) => {
    if (index) {
      setExpiration(index)
      return
    }
    setExpiration(null)
    handleChangeItem({ expire_after_minutes: null })
    setMaxValue('')
  }

  const handleClickSwitch = (value) => {
    setIsMaximum(value)
    if (!value) handleChangeItem({ maximum_accumulation: null })
  }

  const handleChangeMaxValue = (e) => {
    const value = e.target.value
    setMaxValue(value)
    if (value) handleChangeItem({ expire_after_minutes: (value * 24 * 60) })
    else handleChangeItem({ expire_after_minutes: null })
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

  useEffect(() => {
    if (formState?.changes?.maximum_accumulation
      ? formState?.changes?.maximum_accumulation
      : walletData?.maximum_accumulation) {
      setIsMaximum(true)
    } else {
      setIsMaximum(false)
    }
  }, [walletData?.maximum_accumulation])

  useEffect(() => {
    if (walletData?.expire_after_minutes) {
      setMaxValue(walletData?.expire_after_minutes / (24 * 60))
      setExpiration('days')
    } else {
      setExpiration(null)
      setMaxValue('')
    }
  }, [walletData?.expire_after_minutes])

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
        </PaymentRulesWrapper>
        <PaymentOptionListWrapper>
          {ruleList.map(rule => (
            <React.Fragment key={rule.key}>
              <CheckBoxWrapper onClick={() => setPaymentRules(rule.key)}>
                {paymentRules === rule.key ? <RecordCircleFill className='active' /> : <Circle />}
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
          {isBusiness && (
            <>
              <ToggleWrapper>
                <p>{t('MAXIMUM_OF_POINTS', 'Maximum of points')}</p>
                <Switch
                  defaultChecked={isMaximum}
                  onChange={val => handleClickSwitch(val)}
                />
              </ToggleWrapper>
              {isMaximum && (
                <Input
                  type='text'
                  placeholder='00 points'
                  name='maximum_accumulation'
                  value={formState?.changes?.maximum_accumulation ?? walletData?.maximum_accumulation ?? ''}
                  onChange={handleChangeInput}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              )}
            </>
          )}
        </PointsAccumulationContainer>
        {isBusiness && (
          <ExPirationWrapper>
            <h2>{t('EXPIRATION', 'Expiration')}</h2>
            <CheckBoxWrapper onClick={() => handleChangeExpirtation(null)}>
              {!expiration ? <RecordCircleFill className='active' /> : <Circle />}
              <p>{t('NO', 'No')}</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper onClick={() => handleChangeExpirtation('days')}>
              {expiration ? <RecordCircleFill className='active' /> : <Circle />}
              <p>{t('EXPIRATION_IN_DAYS', 'Expiration in days')}</p>
            </CheckBoxWrapper>
            {expiration && (
              <OptionInputWrapper>
                <Input
                  type='text'
                  placeholder={`0 ${t('DAYS', 'days')}`}
                  name='expire_after_minutes'
                  value={maxValue}
                  onChange={handleChangeMaxValue}
                  onKeyPress={(e) => {
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </OptionInputWrapper>
            )}
          </ExPirationWrapper>
        )}

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
