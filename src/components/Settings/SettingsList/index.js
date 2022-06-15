import React, { useEffect, useState } from 'react'
import { useLanguage, SettingsList as SettingsListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, NotFoundSource } from '../../Shared'
import { Button } from '../../../styles'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { SettingsCountryFilter } from '../SettingsCountryFilter'
import { SettingsImage } from '../SettingsImage'
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
  SubmitBtnWrapper,
  Description
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
    saveConfig
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const formatArray = (values) => {
    values = values.replace('[', '')
    values = values.replace(']', '')
    return values
  }

  const handleSubmit = () => {
    const invalidMessageList = []
    for (const item of formState.changes) {
      switch (item?.key) {
        case 'driver_tip_options':
          !/^((\d)+,)*(\d)+$/.test(item.value) && invalidMessageList.push(t('DRIVER_TIP_OPTIONS_ERROR'))
          break
        case 'max_days_preorder':
          item.value < 1 && invalidMessageList.push(t('MAX_PREORDER_DAYS_MUST_BIGGER_ZERO', 'Max preorder days must be bigger than zero'))
          break
        case 'platform_fee_fixed':
        case 'platform_fee_percentage':
          if (isNaN(Number(item?.value))) {
            invalidMessageList.push(t('VALIDATION_ERROR_NUMERIC', `The ${item?.name} must be a number.`).replace('_attribute_', item?.name))
          }
          if (isNaN(Number(item?.value)) || Number(item?.value) < 0) {
            invalidMessageList.push(t('VALIDATION_MUST_BIGGER_ZERO', `${item?.name} must be bigger than zero`).replace('_attribute_', item?.name))
          }
          if (item?.key === 'platform_fee_percentage' && Number(item?.value) > 100) {
            invalidMessageList.push(t('VALIDATION_MUST_SMALLER_HUNDRED', `${item?.name} must be not bigger than 100`).replace('_attribute_', item?.name))
          }
          break
        default:
          break
      }
    }
    if (invalidMessageList.length > 0) {
      setAlertState({ open: true, content: invalidMessageList })
      return
    }
    handleClickUpdate && handleClickUpdate()
  }

  const handleKeyPress = (e, key) => {
    switch (key) {
      case 'platform_fee_fixed':
      case 'platform_fee_percentage':
        !/^[0-9.]$/.test(e.key) && e.preventDefault()
        break
      default:
        break
    }
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
        <GeneralTitle>
          <p>{t('SETTINGS', 'All Settings')}</p>
        </GeneralTitle>
        {
          !settingsState.error && settingsState.loading && (
            <SkeletonWrapper>
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
              <FormContainer>
                {
                  configs.length > 0 && configs.map((config, i) => (
                    <div key={i}>
                      {
                        config.type === 1 && (
                          <FormGroupText className='form-group'>
                            <label>{config?.name}</label>
                            {config?.description && <Description>{config?.description}</Description>}
                            <input
                              type='text'
                              defaultValue={config?.value}
                              onChange={(e) => handleInputChange(e.target.value, config?.id)}
                              onKeyPress={(e) => handleKeyPress(e, config?.key)}
                              className='form-control'
                              placeholder={config?.name}
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
                              description={config?.description}
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
                              <label>{config?.name}</label>
                            )}
                            {config?.description && (
                              <p>{config?.description}</p>
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
                              {config?.description && <Description>{config?.description}</Description>}
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
                                <label>{config?.name}</label>
                              )}
                              {config?.description && (
                                <p>{config?.description}</p>
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
                      {
                        config.type === 5 && (
                          <SettingsImage
                            config={config}
                            saveConfig={saveConfig}
                          />
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
