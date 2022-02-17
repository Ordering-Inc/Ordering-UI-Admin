import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ArrowClockwise } from 'react-bootstrap-icons'
import { Button, IconButton, Input } from '../../../styles'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
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

export const LoyaltyBusinessDetail = (props) => {
  const { business } = props
  const [, t] = useLanguage()

  return (
    <Container isBusiness={business}>
      {business && (
        <HeaderContainer>
          <h1>{business?.name}</h1>
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
              placeholder='00 points'
            />
            <span>=</span>
            <span>$1.00</span>
          </PointsInputWrapper>
        </PointsRedemptionWrapper>
        <PaymentRulesWrapper>
          <h2>{t('PAYMENT_RULES', 'Payment rules')}</h2>
          <p>{t('MAXIMUM_REDEEM_PER_ORDER', 'Maximum to redeem per order limit')}</p>
        </PaymentRulesWrapper>
        <PaymentOptionListWrapper>
          <CheckBoxWrapper>
            <IosRadioButtonOff />
            <p>{t('NO_LIMIT', 'No limit')}</p>
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <RiRadioButtonFill />
            <p>{t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} ({t('FIXED', 'fixed')})</p>
          </CheckBoxWrapper>
          <OptionInputWrapper>
            <Input
              placeholder='00 points'
            />
          </OptionInputWrapper>
          <CheckBoxWrapper>
            <RiRadioButtonFill />
            <p>{t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (%)</p>
          </CheckBoxWrapper>
        </PaymentOptionListWrapper>
        <PointsAccumulationContainer>
          <h2>{t('POINTS_ACCUMULATION', 'Points accumulation')}</h2>
          <p>{t('AMOUNT_POINTS_ASSIGN', 'Amount of points to assign')}</p>
          <span>{t('VALUE', 'Value')}</span>
          <AccumulationInputWrapper>
            <span>$1.00</span>
            <span className='equal'>=</span>
            <Input
              placeholder='00 points'
            />
          </AccumulationInputWrapper>
          <ToggleWrapper>
            <p>{t('MAXIMUM_OF_POINTS', 'Maximum of points')}</p>
          </ToggleWrapper>
          <Input
            placeholder='00 points'
          />
        </PointsAccumulationContainer>
      </DetailContent>
      <ButtonWrapper>
        <Button color='primary'>{t('SAVE', 'Save')}</Button>
      </ButtonWrapper>
    </Container>
  )
}
