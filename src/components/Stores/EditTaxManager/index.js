import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import {
  TypeSelectWrapper,
  Option,
  LabelCustom,
  ButtonGroup,
  EditTaxContainer,
  WrapperRow,
  InputContainer
} from './styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { Button } from '../../../styles/Buttons'
import { Input } from '../../../styles/Inputs'

export const EditTaxManager = (props) => {
  const {
    type,
    handleSave,
    data,
    formChanges,
    onChange,
    onClose,
    setAlertState
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()
  const positiveNumberFields = ['rate', 'fixed']
  const defaultInputs = [
    { field: 'name', placeholder: t('NAME', 'Name'), required: t('NAME_REQUIRED', 'The name is required') },
    { field: 'description', placeholder: t('DESCRIPTION', 'Description'), required: t('DESCRIPTION_REQUIRED', 'The Description is required') }
  ]

  const rateValidationNumber = (value) => {
    if (!isNaN(parseFloat(value))) {
      return true
    } else {
      return t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('RATE', 'Rate'))
    }
  }

  const feeValidationNumber = (value) => {
    if (!isNaN(parseFloat(value))) {
      return true
    } else {
      return t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('FIXED', 'Fixed'))
    }
  }

  const percentageValidationNumber = (value) => {
    if (Number(value) <= 100) {
      return true
    } else {
      return t('VALIDATION_MUST_SMALLER_HUNDRED', 'The precentage must be not bigger than 100').replace('_attribute_', t('PERCENTAGE', 'Percentage'))
    }
  }

  const inputs = [
    ...defaultInputs,
    type === 'taxes' ? [
      {
        field: 'rate',
        placeholder: t('RATE', 'Rate'),
        required: t('TAX_RATE_REQUIRED', 'Tax rate is required'),
        pattern: {
          value: /^\d*\.?\d*$/,
          message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('RATE', 'Rate'))
        },
        validate: rateValidationNumber
      }
    ] : [
      {
        field: 'fixed',
        placeholder: t('FIXED', 'Fixed'),
        required: t('FEE_FIXED_REQUIRED', 'Fee fixed is required'),
        pattern: {
          value: /^\d*\.?\d*$/,
          message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('FIXED', 'Fixed'))
        },
        validate: feeValidationNumber
      },
      {
        field: 'percentage',
        placeholder: t('PERCENTAGE', 'Percentage'),
        required: t('FEE_PERCENTAGE_REQUIRED', 'Fee percentage is required'),
        pattern: {
          value: /^-?\d*\.?\d*$/,
          message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('PERCENTAGE', 'Percentage'))
        },
        validate: percentageValidationNumber
      }
    ]
  ]

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  return (
    <EditTaxContainer onSubmit={formMethods.handleSubmit(() => handleSave(data?.value, type))}>
      <WrapperRow>
        {inputs.flat().map(input => (
          <InputContainer key={input.field}>
            <LabelCustom htmlFor={input.field}>{input.placeholder}</LabelCustom>
            <Input
              name={input.field}
              id={input.field}
              placeholder={input.placeholder}
              defaultValue={formChanges?.[input.field] ?? data?.[input.field] ?? ''}
              onChange={(e) => onChange(input.field, e.target.value)}
              ref={formMethods.register({
                required: input.required,
                pattern: input.pattern,
                validate: input.validate
              })}
              onKeyPress={(e) => {
                if (positiveNumberFields.includes(input.field) && !/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              autoComplete='off'
            />
          </InputContainer>
        ))}
        {type === 'taxes' && (
          <InputContainer>
            <LabelCustom htmlFor='type'>{t('TYPE', 'Type')}</LabelCustom>
            <TypeSelectWrapper>
              <Select
                notAsync
                placeholder={formChanges?.type ?? data?.type}
                defaultValue={data?.type ?? 1}
                options={[
                  {
                    value: 1,
                    content: t('INCLUDED_ON_PRICE', 'Included on price'),
                    showOnSelected: <Option>{t('INCLUDED_ON_PRICE', 'Included on price')}</Option>
                  },
                  {
                    value: 2,
                    content: t('NOT_INCLUDED_ON_PRICE', 'Not included on price'),
                    showOnSelected: <Option>{t('NOT_INCLUDED_ON_PRICE', 'Not included on price')}</Option>
                  }
                ]}
                onChange={(val) => onChange('type', val)}
              />
            </TypeSelectWrapper>
          </InputContainer>
        )}
      </WrapperRow>
      <ButtonGroup>
        <Button
          type='submit'
          color='primary'
          borderRadius='8px'
        >
          {t('ACCEPT', 'Accept')}
        </Button>
        <Button
          color='secundaryDark'
          borderRadius='8px'
          onClick={() => onClose()}
        >
          {t('CLOSE', 'Close')}
        </Button>
      </ButtonGroup>
    </EditTaxContainer>
  )
}
