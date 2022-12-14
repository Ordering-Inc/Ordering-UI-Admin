import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  OrderDetailsContainer,
  ContentWrapper,
  FormControl,
  SwitchControl
} from './styles'
import { Input, Switch, TextArea } from '../../../../styles'

export const OtherDetails = (props) => {
  const { formState, handleChangeInput } = props

  const [, t] = useLanguage()

  return (
    <OrderDetailsContainer>
      <h2>{t('OTHER_DETAILS', 'Other Details')}</h2>
      <ContentWrapper>
        <FormControl>
          <label>{t('GOOGLE_MAPS_URL', 'Google Maps URL')}</label>
          <Input
            placeholder={t('URL', 'URL')}
          />
        </FormControl>
        <SwitchControl>
          <label>{t('RESERVATION_WITH_OPEN_TABLE', 'Reservation with open table')}</label>
          <Switch
            defaultChecked
            onChange={val => console.log(val)}
          />
        </SwitchControl>
        <FormControl>
          <label>{t('WEBSITE_ORIGINAL', 'Website')}</label>
          <Input
            placeholder='www.yourbusiness.com'
          />
        </FormControl>
        <FormControl noBottom>
          <label>{t('DESCRIPTION', 'Description')}</label>
          <TextArea
            name='description'
            placeholder={t('WRITE_DESCRIPTION', 'Write description')}
            defaultValue={formState?.changes?.description ?? ''}
            onChange={handleChangeInput}
          />
        </FormControl>
      </ContentWrapper>
    </OrderDetailsContainer>
  )
}
