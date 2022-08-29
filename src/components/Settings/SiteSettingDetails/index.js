import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../../Shared'
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
    handleChangeConfig
  } = props

  const [, t] = useLanguage()
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
    </>
  )
}
