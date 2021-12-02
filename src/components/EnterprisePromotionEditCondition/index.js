import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../styles'

import {
  SingleEditConditionContainer,
  InputWrapper
} from './styles'

export const EnterprisePromotionEditCondition = (props) => {
  const {
    condition,
    promotionState,
    formState,
    handleChangeItem,
    handleChangeInput,
    onClickDone
  } = props

  const [, t] = useLanguage()

  const getName = (condition) => {
    const langKey = condition.toUpperCase()
    const defaultLang = condition.replace(/_/g, ' ')
    return t(langKey, defaultLang)
  }

  return (
    <>
      {condition && (
        <SingleEditConditionContainer>
          <h1>{getName(condition)}</h1>
          <InputWrapper>
            <label>{getName(condition)}</label>
            <Input
              name={condition}
              value={formState.changes[condition] ?? promotionState?.promotion[condition] ?? ''}
              onChange={handleChangeInput}
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </InputWrapper>
          <Button
            borderRadius='8px'
            color='primary'
            onClick={() => onClickDone()}
          >
            {t('DONE', 'Done')}
          </Button>
        </SingleEditConditionContainer>
      )}
    </>
  )
}
