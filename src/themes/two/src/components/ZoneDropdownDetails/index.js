import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { Input } from '../../styles/Inputs'
import { CitySelector } from '../CitySelector'
import { CountrySelector } from '../CountrySelector'
import { Button } from '../../styles/Buttons'

import {
  ZoneDropdownDetailsContainer,
  Header,
  InputWrapper
} from './styles'

export const ZoneDropdownDetails = (props) => {
  const {
    zoneDropdown,
    cities,
    countries,
    handleChangesState,
    handleSaveZone,
    changesState,
    handleAddZone
  } = props
  const [, t] = useLanguage()

  return (
    <>
      <ZoneDropdownDetailsContainer>
        <Header>
          <h1>{t('CITY_SETTINGS', 'City settings')}</h1>
          {zoneDropdown && (
            <Switch
              defaultChecked={zoneDropdown.enabled}
              onChange={enabled => handleChangesState('enabled', enabled)}
            />
          )}
        </Header>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            value={changesState?.name || zoneDropdown?.name || ''}
            placeholder={t('NAME', 'Name')}
            onChange={e => handleChangesState('name', e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('COUNTRY', 'Country')}</label>
          <CountrySelector
            defaultValue={changesState?.country_id || parseInt(zoneDropdown?.city?.country_id)}
            countries={countries}
            handleChangeCountry={val => handleChangesState('country_id', val)}
          />
        </InputWrapper>
        <InputWrapper isCity>
          <label>{t('CITY', 'City')}</label>
          <CitySelector
            isDefault
            defaultValue={parseInt(zoneDropdown?.city_id)}
            cities={cities}
            handleChangeCity={val => handleChangesState('city_id', val)}
          />
        </InputWrapper>
        <Button
          borderRadius='8px'
          color='primary'
          disabled={Object.keys(changesState).length === 0}
          onClick={() => zoneDropdown ? handleSaveZone() : handleAddZone()}
        >
          {
            zoneDropdown ? t('SAVE', 'Save') : t('ADD', 'Add')
          }
        </Button>
      </ZoneDropdownDetailsContainer>
    </>
  )
}
