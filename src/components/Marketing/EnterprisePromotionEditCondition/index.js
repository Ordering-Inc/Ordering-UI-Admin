import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'

import {
  SingleEditConditionContainer,
  InputWrapper
} from './styles'

export const EnterprisePromotionEditCondition = (props) => {
  const {
    title,
    condition,
    promotionState,
    formState,
    handleChangeInput,
    onClickDone
  } = props

  const [, t] = useLanguage()

  return (
    <>
      {condition && (
        <SingleEditConditionContainer>
          <h1>{title}</h1>
          <InputWrapper>
            <label>{title}</label>
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
