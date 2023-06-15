import React, { useState, useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { Input, Button, SecondSelect as DefaultSelect } from '../../../styles'
import { Alert } from '../../Shared'
import { DriversGroupDrivers } from '../DriversGroupDrivers'
import { DriversGroupCompanies } from '../DriversGroupCompanies'

import {
  Container,
  InputWrapper
} from './styles'

export const DriversGroupGeneralForm = (props) => {
  const {
    driversGroupState,
    driversManagers,
    changesState,
    handleChangesState,
    handleUpdateDriversGroup,
    handleAddDriversGroup,
    actionDisabled,
    isTourOpen,
    handleNextClick
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }] = useSession()

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
      // if (user?.level !== 5 && !changesState?.administrator_id) {
      //   setAlertState({
      //     open: true,
      //     content: [t('VALIDATION_ERROR_REQUIRED', 'The manager is required.').replace('_attribute_', t('DRIVER_MANAGER', 'Driver manager'))]
      //   })
      //   return
      // }
      // if (typeof changesState?.priority === 'undefined') {
      //   setAlertState({
      //     open: true,
      //     content: [t('VALIDATION_ERROR_REQUIRED', 'The priority is required.').replace('_attribute_', t('PRIORITY', 'Priority'))]
      //   })
      //   return
      // }
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
      disabled={actionDisabled}
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
      {user?.level !== 5 && (
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
      )}
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
