import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SettingsList as SettingsListController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Button } from '../../../../../styles/Buttons'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { toast } from 'react-toastify'
import { Alert } from '../Confirm'
import {
  SettingsListContainer,
  GeneralContainer,
  GeneralTitle,
  FormContainer,
  FormGroupText,
  FormGroupCheck,
  FormGroupWrapper,
  SkeletonWrapper,
  CheckBoxWrapper
} from './styles'

export const SettingsListUI = (props) => {
  const {
    settingsState,
    configs,
    onCloseSettingsList,
    handleCheckBoxChange,
    handleInputChange,
    handleClickUpdate
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (settingsState?.result?.error) {
      setAlertState({
        open: true,
        content: settingsState?.result?.result
      })
    }
  }, [settingsState?.result])

  useEffect(() => {
    if (!settingsState?.result.error && !settingsState?.loading && settingsState?.result?.result === 'ok') {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      const content = t('SETTINGS_UPDATE', 'Settings Updated')
      toast.dark(content, toastConfigure)
    }
  }, [settingsState?.loading])

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
                          <SettingsSelectUI
                            config={config}
                            defaultValue={config?.value}
                            handleSelectChange={(value) => handleInputChange(value, config?.id)}
                          />
                        )
                      }
                      {
                        config.type === 3 && (
                          <CheckBoxWrapper>
                            {config?.name && config?.options && (
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
                          </CheckBoxWrapper>
                        )
                      }
                      {
                        config.type === 4 && (
                          <CheckBoxWrapper>
                            {config?.name && config?.options && (
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
                          </CheckBoxWrapper>
                        )
                      }
                    </div>
                  ))
                }
                {
                  settingsState?.changes?.length > 0 && (
                    <Button color='primary' onClick={handleClickUpdate}>{t('SAVE', 'Save')}</Button>
                  )
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
