import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { Input, Checkbox, Button, SecondSelect as DefaultSelect } from '../../../styles'
import { Alert } from '../../Shared'
import { DriversGroupDrivers } from '../DriversGroupDrivers'
import { DriversGroupCompanies } from '../DriversGroupCompanies'

import {
  Container,
  InputWrapper,
  CheckboxContainer
} from './styles'

export const DriversGroupGeneralForm = (props) => {
  const {
    driversGroupState,
    driversManagers,
    changesState,
    handleChangesState,
    useAdvanced,
    setUseAdvanced,
    handleUpdateDriversGroup,
    handleAddDriversGroup,

    isTourOpen,
    handleNextClick
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [configState] = useConfig()

  const autoAssignType = configState?.configs?.autoassign_type?.value

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

  const handleLogistic = (checked) => {
    setUseAdvanced(checked)
    if (checked) return
    const changes = {
      autoassign_amount_drivers: 0,
      orders_group_max_orders: 0
    }
    if (!driversGroupState.driversGroup) return
    handleUpdateDriversGroup(changes)
  }

  const onSubmit = () => {
    if (driversGroupState.driversGroup) {
      if (changesState?.drivers === '[]') {
        setAlertState({
          open: true,
          content: [t('CHOOSE_LEAST_ONE_DRIVER', 'You must choose at least one driver.')]
        })
        return
      }
      handleUpdateDriversGroup(changesState)
    } else {
      if (!changesState?.administrator_id) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The manager is required.').replace('_attribute_', t('DRIVER_MANAGER', 'Driver manager'))]
        })
        return
      }
      if (typeof changesState?.priority === 'undefined') {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The priority is required.').replace('_attribute_', t('PRIORITY', 'Priority'))]
        })
        return
      }
      if (changesState?.type === 0 && !changesState?.drivers) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The drivers is required.').replace('_attribute_', t('DRIVERS', 'Drivers'))]
        })
        return
      }
      if (changesState?.type === 1 && !changesState?.driver_companies) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The Driver company is required.').replace('_attribute_', t('DRIVER_COMPANY', 'Driver company'))]
        })
        return
      }

      if (isTourOpen) {
        handleNextClick()
      } else {
        handleAddDriversGroup()
      }
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  return (
    <Container
      data-tour='tour_fill_group'
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWrapper>
        <label>{t('NAME', 'Name')}</label>
        <Input
          name='name'
          value={changesState?.name ?? driversGroupState.driversGroup?.name ?? ''}
          onChange={e => handleChangesState({ name: e.target.value })}
          placeholder={t('NAME', 'Name')}
          ref={register({
            required: t(
              'VALIDATION_ERROR_REQUIRED',
              'Project is required'
            ).replace('_attribute_', t('NAME', 'Name'))
          })}
          autoComplete='off'
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('DRIVER_MANAGER', 'Driver manager')}</label>
        <DefaultSelect
          isSecondIcon
          placeholder={t('SELECT_MANAGER', 'Select driver manager')}
          options={driversManagersOptions}
          defaultValue={changesState?.administrator_id ?? driversGroupState.driversGroup?.administrator_id}
          optionInnerMaxHeight='60vh'
          onChange={val => handleChangesState({ administrator_id: val })}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('TYPE', 'Type')}</label>
        <DefaultSelect
          isSecondIcon
          placeholder={t('SELECT_TYPE', 'Select type')}
          options={typeOptions}
          defaultValue={changesState?.type ?? driversGroupState.driversGroup?.type}
          onChange={val => handleChangesState({ type: val })}
        />
      </InputWrapper>

      {
        (changesState?.type === 0 || (typeof changesState?.type === 'undefined' && driversGroupState.driversGroup?.type === 0))
          ? <DriversGroupDrivers {...props} />
          : <DriversGroupCompanies {...props} />
      }

      <InputWrapper>
        <label>{t('PRIORITY', 'Priority')}</label>
        <DefaultSelect
          isSecondIcon
          placeholder={t('SELECT_PRIORITY', 'Select priority')}
          options={priorityOptions}
          defaultValue={changesState?.priority ?? driversGroupState.driversGroup?.priority}
          onChange={val => handleChangesState({ priority: val })}
        />
      </InputWrapper>
      {driversGroupState.driversGroup && autoAssignType !== 'basic' && (
        <CheckboxContainer>
          <Checkbox
            checked={useAdvanced}
            onChange={e => handleLogistic(e.target.checked)}
          />
          <p>{t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')}</p>
        </CheckboxContainer>
      )}
      <Button
        borderRadius='8px'
        color='primary'
        type='submit'
        disabled={Object.keys(changesState).length === 0}
      >
        {isTourOpen ? t('NEXT', 'Next') : (
          <>
            {driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add')}
          </>
        )}
      </Button>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
