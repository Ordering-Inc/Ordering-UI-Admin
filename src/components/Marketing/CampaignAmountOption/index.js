import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon,
  ChevronUp,
  ChevronDown
} from 'react-bootstrap-icons'
import { Button, Input } from '../../../styles'

import {
  Container,
  Title,
  RadioCheckWrapper,
  ButtonWrapper,
  ArrowIconsWrapper,
  DaysContent,
  SubTitle
} from './styles'

export const CampaignAmountOption = () => {
  const [, t] = useLanguage()

  return (
    <>
      <Container>
        <Title>{t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options ')}</Title>
        <SubTitle>{t('RELATIVE', 'Relative')}</SubTitle>
        <RadioCheckWrapper>
          <UnCheckIcon />
          <span>{t('MORE_THAN', 'More than')}</span>
        </RadioCheckWrapper>
        <RadioCheckWrapper>
          <CheckIcon className='fill' />
          <span>{t('EXACTLY', 'Exactly')}</span>
        </RadioCheckWrapper>
        <DaysContent>
          <div>
            <Input
              type='number'
              min='0'
              placeholder='00'
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              // value={curDayTime}
              // onChange={handleChangeDay}
            />
            <ArrowIconsWrapper>
              <ChevronUp />
              <ChevronDown />
            </ArrowIconsWrapper>
          </div>
        </DaysContent>
        <RadioCheckWrapper>
          <UnCheckIcon />
          <span>{t('LESS_THAN', 'Less than')}</span>
        </RadioCheckWrapper>
      </Container>
      <ButtonWrapper>
        <Button color='primary' borderRadius='8px'>{t('DONE', 'Done')}</Button>
      </ButtonWrapper>
    </>
  )
}
