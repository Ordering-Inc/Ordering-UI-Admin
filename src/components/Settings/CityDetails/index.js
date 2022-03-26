import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input, Switch } from '../../../styles'
import { CityAdministratorSelector } from '../CityAdministratorSelector'
import { CountrySelector } from '../CountrySelector'

import {
  CityDetailsContainer,
  Header,
  InputWrapper
} from './styles'

export const CityDetails = (props) => {
  const {
    city,
    cityManagers,
    countries,
    handleChangesState,
    handleSaveCity,
    changesState,
    handleAddCity
  } = props
  const [, t] = useLanguage()

  return (
    <>
      <CityDetailsContainer>
        <Header>
          <h1>{t('CITY_SETTINGS', 'City settings')}</h1>
          {city && (
            <Switch
              defaultChecked={city.enabled}
              onChange={enabled => handleChangesState('enabled', enabled)}
            />
          )}
        </Header>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            value={changesState?.name || city?.name || ''}
            placeholder={t('NAME', 'Name')}
            onChange={e => handleChangesState('name', e.target.value)}
          />
        </InputWrapper>
        {/* <InputWrapper>
          <label>{t('ADMINISTRATOR', 'Administrator')}</label>
          <CityAdministratorSelector
            defaultValue={changesState?.administrator_id || city?.administrator_id}
            cityManagers={cityManagers}
            handleChangeAdministrator={val => handleChangesState('administrator_id', val)}
          />
        </InputWrapper> */}
        <InputWrapper>
          <label>{t('COUNTRY', 'Country')}</label>
          <CountrySelector
            defaultValue={changesState?.country_id || parseInt(city?.country_id)}
            countries={countries}
            handleChangeCountry={val => handleChangesState('country_id', val)}
          />
        </InputWrapper>
        <Button
          borderRadius='8px'
          color='primary'
          disabled={Object.keys(changesState).length === 0}
          onClick={() => city ? handleSaveCity() : handleAddCity()}
        >
          {
            city ? t('SAVE', 'Save') : t('ADD', 'Add')
          }
        </Button>
      </CityDetailsContainer>
    </>
  )
}
