import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, DefaultSelect, Checkbox, Button } from '../../styles'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'

import {
  Container,
  InputWrapper,
  CheckboxContainer
} from './styles'

export const DriversGroupGeneralForm = (props) => {
  const {
    driversGroup,
    driversManagers,
    changesState,
    handleChangesState,
    useAdvanced,
    setUseAdvanced,
    handleUpdateDriversGroup
  } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const typeOptions = [
    { value: 0, content: t('IN_HOUSE_DRIVERS', 'In house drivers') },
    { value: 1, content: t('DRIVER_COMPANIES', 'Driver companies') }
  ]

  const driversManagersOptions = driversManagers.map(manager => {
    return {
      value: manager.id,
      content: <div>{manager?.name} {manager?.lastname}</div>
    }
  })

  const priorityOptions = [
    { value: -1, content: t('LOW', 'Low') },
    { value: 0, content: t('NORMAL', 'Normal') },
    { value: 1, content: t('HIGH', 'High') },
    { value: 2, content: t('URGENT', 'Urgent') }
  ]

  const onSubmit = () => {
    handleUpdateDriversGroup(driversGroup.id, changesState)
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label>{t('NAME', 'Name')}</label>
        <Input
          name='name'
          value={changesState?.name ?? driversGroup?.name ?? ''}
          onChange={e => handleChangesState('name', e.target.value)}
          placeholder={t('NAME', 'Name')}
          ref={register({
            required: t(
              'VALIDATION_ERROR_REQUIRED',
              'Name is required'
            ).replace('_attribute_', t('NAME', 'Name'))
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('DRIVER_MANAGER', 'Driver manager')}</label>
        <DefaultSelect
          placeholder={t('SELECT_MANAGER', 'Select driver manager')}
          options={driversManagersOptions}
          defaultValue={changesState?.administrator_id ?? driversGroup?.administrator_id}
          optionInnerMaxHeight='60vh'
          onChange={val => handleChangesState('administrator_id', val)}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('TYPE', 'Type')}</label>
        <DefaultSelect
          placeholder={t('SELECT_TYPE', 'Select type')}
          options={typeOptions}
          defaultValue={changesState?.type ?? driversGroup?.type}
          onChange={val => handleChangesState('type', val)}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('PRIORITY', 'Priority')}</label>
        <DefaultSelect
          placeholder={t('SELECT_PRIORITY', 'Select priority')}
          options={priorityOptions}
          defaultValue={changesState?.priority ?? driversGroup?.priority}
          onChange={val => handleChangesState('priority', val)}
        />
      </InputWrapper>

      <CheckboxContainer>
        <Checkbox
          defaultChecked={useAdvanced}
          onChange={e => setUseAdvanced(e.target.checked)}
        />
        <p>{t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')}</p>
      </CheckboxContainer>
      <Button
        borderRadius='8px'
        color='primary'
        type='submit'
        disabled={Object.keys(changesState).length === 0}
      >
        {t('SAVE', 'Save')}
      </Button>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
