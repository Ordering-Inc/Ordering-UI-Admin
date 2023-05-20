import React from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { useFormContext } from 'react-hook-form'
import { Input, SecondSelect as DefaultSelect } from '../../../../styles'
import { DriversGroupDrivers } from '../../DriversGroupDrivers'
import { DriversGroupCompanies } from '../../DriversGroupCompanies'

import {
  Container,
  InputWrapper
} from './styles'

export const GeneralForm = (props) => {
  const {
    driversManagers,
    changesState,
    handleChangesState
  } = props

  const [, t] = useLanguage()
  const { register } = useFormContext()
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

  return (
    <Container>
      <h2>{t('GENERAL', 'General')}</h2>
      <InputWrapper>
        <label>{t('NAME', 'Name')}</label>
        <Input
          name='name'
          defaultValue={changesState?.name ?? ''}
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
            defaultValue={changesState?.administrator_id}
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
          defaultValue={changesState?.type}
          onChange={val => handleChangesState({ type: val })}
        />
      </InputWrapper>

      {
        (changesState?.type === 0)
          ? <DriversGroupDrivers {...props} />
          : <DriversGroupCompanies {...props} />
      }

      <InputWrapper>
        <label>{t('PRIORITY', 'Priority')}</label>
        <DefaultSelect
          isSecondIcon
          placeholder={t('SELECT_PRIORITY', 'Select priority')}
          options={priorityOptions}
          defaultValue={changesState?.priority}
          onChange={val => handleChangesState({ priority: val })}
        />
      </InputWrapper>
    </Container>
  )
}
