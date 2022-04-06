import React, { useState } from 'react'
import { useLanguage, CampaignAmountOption as CampaignAmountOptionController } from 'ordering-components-admin'
import { Alert } from '../../Shared'
import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon
} from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import NumericInput from 'react-numeric-input'

import {
  Container,
  Title,
  RadioCheckWrapper,
  ButtonWrapper,
  DaysContent,
  SubTitle
} from './styles'

const CampaignAmountOptionUI = (props) => {
  const {
    type,
    ruleFormState,
    handleChangeItem,
    onClose,
    handleChangeValue,
    isAddMode,
    handleUpdateRule,
    formState,
    handleAddRule
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const ruleList = [
    { key: '>', name: t('MORE_THAN', 'More than') },
    { key: '=', name: t('EXACTLY', 'Exactly') },
    { key: '<', name: t('LESS_THAN', 'Less than') }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSaveRule = () => {
    if (!ruleFormState.changes?.condition) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Condition is required').replace('_attribute_', t('CONDITION', 'Condition'))
      })
      return
    }
    if (!ruleFormState.changes?.value) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Value'))
      })
      return
    }
    if (isAddMode) {
      const conditions = [...formState?.changes?.conditions]
      const updatedConditions = conditions.map(condition => {
        if (condition.type === type) {
          return { ...condition, ...ruleFormState.changes }
        }
        return condition
      })
      handleChangeItem('conditions', updatedConditions)
    } else if (ruleFormState.changes?.id) {
      handleUpdateRule()
    } else {
      handleAddRule()
    }
    onClose && onClose()
  }

  return (
    <>
      <Container>
        <Title>{t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options ')}</Title>
        <SubTitle>{t('RELATIVE', 'Relative')}</SubTitle>
        {ruleList.map((item, i) => (
          <React.Fragment key={i}>
            <RadioCheckWrapper>
              <div onClick={() => handleChangeValue('condition', item.key)}>
                {ruleFormState.changes?.condition === item.key ? <CheckIcon className='fill' /> : <UnCheckIcon />}
                <span>{item.name}</span>
              </div>
            </RadioCheckWrapper>
            {ruleFormState.changes?.condition === item.key && (
              <DaysContent>
                <NumericInput
                  placeholder='00'
                  onKeyPress={(e) => {
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  value={ruleFormState.changes?.value || ''}
                  onChange={(value) => handleChangeValue('value', value)}
                  min={0}
                />
              </DaysContent>
            )}
          </React.Fragment>
        ))}
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          borderRadius='8px'
          onClick={handleSaveRule}
        >
          {t('DONE', 'Done')}
        </Button>
      </ButtonWrapper>
      <Alert
        title={t('CAMPAIGN', 'Campaign')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const CampaignAmountOption = (props) => {
  const campaignAmountOptionProps = {
    ...props,
    UIComponent: CampaignAmountOptionUI
  }
  return <CampaignAmountOptionController {...campaignAmountOptionProps} />
}
