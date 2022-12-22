import React, { useState } from 'react'
import { useLanguage, useEvent, useConfig, GoogleAutocompleteInput } from 'ordering-components-admin'
import { ArrowRight, InfoCircleFill } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../../styles'
import { Alert } from '../../Shared'
import {
  Container,
  FormControl,
  Label,
  ButtonGroup,
  InfoWrapper,
  InfoContent
} from './styles'

export const BusinessAddStore = () => {
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [address, setAddress] = useState()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const googleMapsApiKey = configs?.google_maps_api_key?.value

  const handleContinue = () => {
    if (!address?.map_data?.place_id) {
      setAlertState({
        open: true,
        content: t('ADDRESS_REQUIRED', 'Address required')
      })
      return
    }
    events.emit('go_to_page', { page: 'business_add', search: `?placeId=${address?.map_data?.place_id}` })
  }

  const handleSkip = () => {
    events.emit('go_to_page', { page: 'business_add' })
  }

  const handleChangeAddress = (e) => {
    setAddress(e)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <>
      <Container>
        <h2>{t('ADD_NEW_STORE', 'Add new store')}</h2>
        <FormControl>
          <Label>
            <p>{t('RESTAURANT_OR_STORE_NAME', 'Restaurant or store name')}</p>
            <InfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircleFill />
              </IconButton>
              <InfoContent>
                {t('ADD_NEW_STORE_INFO', 'If you can’t find your restaurant in the results, try adding your city at the end of your restaurant name (For example: “Pizza Place New York City”)')}
              </InfoContent>
            </InfoWrapper>
          </Label>
          <GoogleAutocompleteInput
            name='address'
            className='input-autocomplete'
            apiKey={googleMapsApiKey}
            placeholder={t('ENTER_YOUR_RESTAURANT_OR_STORE_NAME', 'Enter your Restaurant or Store name')}
            onChangeAddress={(e) => {
              handleChangeAddress(e)
            }}
            autoComplete='new-password'
            countryCode={configs?.country_autocomplete?.value || '*'}
          />
          <p>{t('START_TYPING_THEN_SELECT_AN_ADDRESS_FROM_THE_LIST', 'Start typing  then select an address from the list')}</p>
        </FormControl>
        <ButtonGroup>
          <span onClick={handleSkip}>{t('SKIP_AND_ADD_MANUALLY', 'Skip and  Add manually')}</span>
          <Button color='primary' onClick={handleContinue}>
            <span>{t('CONTINUE', 'Continue')}</span>
            <ArrowRight />
          </Button>
        </ButtonGroup>
      </Container>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
