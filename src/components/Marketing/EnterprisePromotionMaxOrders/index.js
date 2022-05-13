import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input, DefaultSelect } from '../../../styles'

import {
  Container,
  InputWrapper,
  Option
} from './styles'

export const EnterprisePromotionMaxOrders = (props) => {
  const {
    promotionState,
    formState,
    handleChangeInput,
    handleChangeItem,
    onClickDone
  } = props

  const [, t] = useLanguage()

  const conditions = [
    { value: '>', content: <Option>{'>'}</Option> },
    { value: '=', content: <Option>=</Option> },
    { value: '<', content: <Option>{'<'}</Option> },
    { value: '>=', content: <Option>{'>='}</Option> },
    { value: '<=', content: <Option>{'<='}</Option> },
    { value: '<>', content: <Option>{'<>'}</Option> }
  ]

  return (
    <Container>
      <h1>{t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user')}</h1>
      <InputWrapper>
        <label>{t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user')}</label>
        <Input
          name='user_order_count'
          value={formState.changes?.user_order_count ?? promotionState?.promotion?.user_order_count ?? ''}
          onChange={handleChangeInput}
          onKeyPress={(e) => {
            if (!/^[0-9]$/.test(e.key)) {
              e.preventDefault()
            }
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('CONDITION', 'Condition')}</label>
        <DefaultSelect
          placeholder={t('SELECT_CONDITION', 'Select a condition')}
          defaultValue={formState.changes?.user_order_count_condition ?? promotionState.promotion?.user_order_count_condition}
          options={conditions}
          onChange={val => handleChangeItem({ user_order_count_condition: val })}
          optionInnerMaxHeight='300px'
        />
      </InputWrapper>
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </Container>
  )
}
