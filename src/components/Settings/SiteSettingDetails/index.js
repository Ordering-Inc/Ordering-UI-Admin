import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, NotFoundSource } from '../../Shared'
import { SettingsSelectUI } from '../SettingsSelectUI'

import {
  SettingsListContainer,
  GeneralContainer,
  GeneralTitle,
  FormContainer,
  FormGroupText,
  SkeletonWrapper
} from './styles'

export const SiteSettingDetails = (props) => {
  const {
    selectedSiteId,
    siteConfigsState,
    handleChangeConfig,
    actionState
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
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      })
    }
  }, [actionState.error])

  return (
    <>
      <SettingsListContainer>
        <GeneralTitle>
          <p>{t('SETTINGS', 'All Settings')}</p>
        </GeneralTitle>
        {
          siteConfigsState.loading ? (
            <SkeletonWrapper>
              {[...Array(6).keys()].map(i => (
                <div key={i}>
                  <Skeleton height={14} width={200} />
                  <Skeleton height={30} />
                </div>
              ))}
            </SkeletonWrapper>
          ) : (
            <GeneralContainer>
              <FormContainer>
                {
                  siteConfigsState.configs.length > 0 && siteConfigsState.configs.map((config, i) => (
                    <div key={i}>
                      {
                        config.type === 1 && (
                          <FormGroupText className='form-group'>
                            <label>{config?.name}</label>
                            <input
                              type='text'
                              defaultValue={config?.value}
                              onChange={(e) => handleChangeConfig(e.target.value, selectedSiteId, config?.id)}
                              className='form-control'
                              placeholder={config?.name}
                            />
                          </FormGroupText>
                        )
                      }
                      {
                        config.type === 2 && (
                          <SettingsSelectUI
                            config={config}
                            defaultValue={config?.value}
                            handleSelectChange={(value) => handleChangeConfig(value, selectedSiteId, config?.id)}
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
          !siteConfigsState.loading && siteConfigsState.error && (
            <NotFoundSource
              content={t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.')}
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
