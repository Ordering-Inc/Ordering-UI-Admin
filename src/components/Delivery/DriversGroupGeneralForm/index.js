import React, { useState, useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { Input, Button, SecondSelect as DefaultSelect, Checkbox } from '../../../styles'
import { Alert } from '../../Shared'
import { DriversGroupDrivers } from '../DriversGroupDrivers'
import { DriversGroupCompanies } from '../DriversGroupCompanies'

import {
  CheckboxContainer,
  Container,
  DriverManagerContainer,
  DriverManagerWrapper,
  Image,
  InputWrapper,
  ManagerInfoContainer,
  WrapperImage
} from './styles'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

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
    handleNextClick,
    selectedDriverManager,
    handleSelectDriverManager,
    handleChangeMaxDistance,
    useAdvanced,
    handleLogistic
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [{ user }] = useSession()

  const typeOptions = [
    { value: 0, content: t('IN_HOUSE_DRIVERS', 'In house drivers') },
    { value: 1, content: t('DRIVER_COMPANIES', 'Driver companies') }
  ]

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
      <InputWrapper>
        <label>{t('DRIVER_AVAILABLE_MAX_DISTANCE', 'Driver available max distance')}</label>
        <Input
          name='driver_available_max_distance'
          value={changesState?.driver_available_max_distance ?? driversGroupState.driversGroup?.driver_available_max_distance ?? ''}
          onChange={e => handleChangeMaxDistance(e.target.value)}
          placeholder={t('WITHOUT_RESTRICTIONS', 'Without restrictions')}
          autoComplete='off'
        />
      </InputWrapper>
      {user?.level !== 5 && (
        <InputWrapper>
          <label>{t('DRIVER_MANAGER', 'Driver manager')}</label>
          <DriverManagerContainer>
            {driversManagers.map(driverManager => (
              <DriverManagerWrapper
                key={driverManager.id}
              >
                <Checkbox
                  value={driverManager?.id}
                  checked={selectedDriverManager?.includes(driverManager?.id)}
                  onChange={e => handleSelectDriverManager(driverManager?.id, e.target.checked)}
                />
                <WrapperImage>
                  {driverManager?.photo ? (
                    <Image bgimage={driverManager?.photo} alt='driverManager' />
                  ) : (
                    <FaUserAlt />
                  )}
                </WrapperImage>
                <ManagerInfoContainer>
                  <p>{driverManager?.name}</p>
                  <p>{driverManager?.email}</p>
                </ManagerInfoContainer>
              </DriverManagerWrapper>
            ))}
          </DriverManagerContainer>
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
      <CheckboxContainer>
        <Checkbox
          checked={useAdvanced}
          onChange={e => handleLogistic(e.target.checked)}
        />
        <p>{t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')}</p>
      </CheckboxContainer>
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
