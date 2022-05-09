import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Checkbox } from '../../../styles'

import {
  PaymethodsContainer,
  PaymethodItem
} from './styles'

export const EnterprisePromotionPaymethods = (props) => {
  const {
    paymethodsState,
    promotionState,
    formState,
    handleChangeItem,
    onClickDone
  } = props

  const [, t] = useLanguage()

  const handleChangePaymethods = (checked, paymethodId) => {
    let paymethods = []
    if (formState.changes?.paymethods) {
      paymethods = [...formState.changes?.paymethods]
    } else {
      if (Array.isArray(promotionState.promotion?.paymethods)) {
        paymethods = promotionState.promotion?.paymethods?.reduce((ids, paymedhod) => [...ids, paymedhod.id], [])
      }
    }
    if (checked) {
      paymethods.push(paymethodId)
    } else {
      paymethods = paymethods.filter(value => value !== paymethodId)
    }
    handleChangeItem({ paymethods: paymethods })
  }

  const isDefaultChecked = (paymethodId) => {
    if (Array.isArray(promotionState.promotion?.paymethods)) {
      const found = promotionState.promotion?.paymethods.find(paymethod => paymethod.id === paymethodId)
      if (found) return true
      else return false
    } else return false
  }

  const isChangesChecked = (paymethodId) => {
    const found = formState.changes?.paymethods.find(value => value === paymethodId)
    if (found) return true
    else return false
  }

  return (
    <PaymethodsContainer>
      <h1>{t('PAYMEN_METHODS_ALLOWED', 'Payment methods allowed')}</h1>
      {paymethodsState.paymethods.map(paymethod => (
        <PaymethodItem key={paymethod.id}>
          <Checkbox
            checked={
              formState.changes?.paymethods
                ? isChangesChecked(paymethod.id)
                : isDefaultChecked(paymethod.id)
            }
            onChange={(e) => handleChangePaymethods(e.target.checked, paymethod.id)}
          />
          <span>{paymethod.name}</span>
        </PaymethodItem>
      ))}
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </PaymethodsContainer>
  )
}
