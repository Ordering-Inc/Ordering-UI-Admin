import React, { useEffect, useState } from 'react'
import { useLanguage, SettingsList as SettingsListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../../components/NotFoundSource'
import { Button } from '../../styles/Buttons'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { Alert } from '../Confirm'
import { SettingsCountryFilter } from '../SettingsCountryFilter'
import {
  SettingsListContainer,
  GeneralContainer,
  GeneralTitle,
  FormContainer,
  FormGroupText,
  FormGroupCheck,
  FormGroupWrapper,
  SkeletonWrapper,
  CheckBoxWrapper,
  OptionsError,
  SubmitBtnWrapper
} from './styles'

export const SettingsListUI = (props) => {
  const {
    settingsState,
    configs,
    formState,
    onCloseSettingsList,
    handleCheckBoxChange,
    handleInputChange,
    handleClickUpdate,
    handleChangeFormState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const transformArray = (values) => {
    return '[' + values + ']'
  }

  const formatArray = (values) => {
    values = values.replace('[', '')
    values = values.replace(']', '')
    return values
  }

  const handleSubmit = () => {
    for (const item of formState.changes) {
      if (item.key === 'driver_tip_options') {
        if (!/^((\d)+,)*(\d)+$/.test(item.value)) {
          setAlertState({ open: true, content: t('DRIVER_TIP_OPTIONS_ERROR') })
          return
        }
        updateFormState(item.key, transformArray(item.value))
      }
    }
    handleClickUpdate && handleClickUpdate()
  }

  const updateFormState = (key, value) => {
    const _changes = formState?.changes.map(item => {
      if (item.key === key) {
        return {
          ...item,
          value: value
        }
      }
      return item
    })
    handleChangeFormState({ ...formState, changes: _changes })
  }

  useEffect(() => {
    if (settingsState?.result?.error) {
      setAlertState({
        open: true,
        content: settingsState?.result?.result
      })
    }
  }, [settingsState?.result])

  return (
    <>
      <SettingsListContainer>
        {
          !settingsState.error && settingsState.loading && (
            <SkeletonWrapper>
              <Skeleton height={40} width={250} style={{ marginBottom: '25px' }} />
              {[...Array(6)].map((item, i) => (
                <div key={i}>
                  <Skeleton height={25} width={200} />
                  <Skeleton height={30} />
                </div>
              ))}
            </SkeletonWrapper>
          )
        }
        {
          !settingsState.error && !settingsState.loading && configs && !settingsState.API && (
            <GeneralContainer>
              <GeneralTitle>
                <p>{t('All_SETTINGS', 'All Settings')}</p>
              </GeneralTitle>
              <FormContainer>
                {
                  configs.length > 0 && configs.map((config, i) => (
                    <div key={i}>
                      {
                        config.type === 1 && (
                          <FormGroupText className='form-group'>
                            <label>{config?.name}</label>
                            <input
                              type='text'
                              defaultValue={config?.value}
                              onChange={(e) => handleInputChange(e.target.value, config?.id)}
                              className='form-control'
                              placeholder='placeholder'
                            />
                          </FormGroupText>
                        )
                      }
                      {
                        config.type === 2 && (
                          config.key === 'country_autocomplete' ? (
                            <SettingsCountryFilter
                              defaultValue={config?.value}
                              handleSelectChange={(value) => handleInputChange(value, config?.id)}
                              label={config?.name}
                            />
                          ) : (
                            <SettingsSelectUI
                              config={config}
                              defaultValue={config?.value}
                              handleSelectChange={(value) => handleInputChange(value, config?.id)}
                            />
                          )
                        )
                      }
                      {
                        config.type === 3 && (
                          <CheckBoxWrapper>
                            {config?.name && (
                              <p>{config?.name}</p>
                            )}
                            {
                              config?.options?.length > 0 && config?.options?.map((item, j) => (
                                <FormGroupWrapper key={j}>
                                  <FormGroupCheck className='checkbox'>
                                    <label>
                                      <input
                                        type='checkbox'
                                        name={item?.value}
                                        data-id={config?.id}
                                        defaultChecked={config?.value.split('|').includes(item?.value)}
                                        onChange={(e) => handleCheckBoxChange(e, true, config?.value)}
                                      />
                                      {item.text}
                                    </label>
                                  </FormGroupCheck>
                                </FormGroupWrapper>
                              ))
                            }
                            {
                              !config?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
                            }
                          </CheckBoxWrapper>
                        )
                      }
                      {
                        config.type === 4 && (
                          config.key === 'driver_tip_options' ? (
                            <FormGroupText className='form-group'>
                              <label>{config?.name}</label>
                              <input
                                type='text'
                                defaultValue={formatArray(config?.value)}
                                onChange={(e) => handleInputChange(e.target.value, config?.id)}
                                className='form-control'
                                placeholder='placeholder'
                              />
                            </FormGroupText>
                          ) : (
                            <CheckBoxWrapper>
                              {config?.name && (
                                <p>{config?.name}</p>
                              )}
                              {
                                config?.options?.length > 0 && config?.options?.map((item, j) => (
                                  <FormGroupWrapper key={j}>
                                    <FormGroupCheck className='checkbox'>
                                      <label>
                                        <input
                                          type='checkbox'
                                          name={item?.value}
                                          data-id={config?.id}
                                          defaultChecked={JSON.parse(config?.value).includes(parseInt(item?.value))}
                                          onChange={(e) => handleCheckBoxChange(e, false, config?.value)}
                                        />
                                        {item.text}
                                      </label>
                                    </FormGroupCheck>
                                  </FormGroupWrapper>
                                ))
                              }
                              {!config?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>}
                            </CheckBoxWrapper>
                          )
                        )
                      }
                    </div>
                  ))
                }
              </FormContainer>
            </GeneralContainer>
          )
        }
        {
          !settingsState.loading && settingsState.error && (
            <NotFoundSource
              content={t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.')}
              btnTitle={t('PROFILE_CATEGORY_REDIRECT', 'Go to Category Description')}
              onClickButton={onCloseSettingsList}
            />
          )
        }
      </SettingsListContainer>
      {
        settingsState?.changes?.length > 0 && (
          <SubmitBtnWrapper>
            <Button color='primary' onClick={handleSubmit}>{t('SAVE', 'Save')}</Button>
          </SubmitBtnWrapper>
        )
      }
      <Alert
        title={t('SETTINGS', 'Settings')}
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

export const SettingsList = (props) => {
  const settingsListProps = {
    ...props,
    UIComponent: SettingsListUI
  }
  return <SettingsListController {...settingsListProps} />
}
