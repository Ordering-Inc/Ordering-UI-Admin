import React, { useState } from 'react'
import { useLanguage, useConfig, CustomDomain as CustomDomainController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { CheckSquareFill as CheckedIcon, Square as UnCheckedIcon, InfoCircle } from 'react-bootstrap-icons'
import { Button, Input, IconButton } from '../../../styles'
import { Alert } from '../../Shared'
import {
  Container,
  FormControl,
  SelectWrapper,
  Option,
  ButtonGroup,
  CheckBoxWrapper,
  CustomDomainInfo,
  CustomDomainInfoContent,
  TitleWrapper
} from './styles'

const CustomDomainUI = (props) => {
  const {
    handleChangeFormState,
    formState,
    onClose,
    handleChangeCustomDomain
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [showMapInput, setShowMapInput] = useState(false)
  const [googleMapKey, setGoogleMapKey] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const sslTypeList = [
    // { value: 'none', content: <Option>{t('NONE', 'None')}</Option> },
    { value: 'automatic', content: <Option>{t('AUTOMATIC', 'automatic')}</Option> },
    { value: 'proxy', content: <Option>{t('PROXY', 'Proxy')} (Cloudflare)</Option> }
  ]

  const handleSubmit = () => {
    const errors = []
    if (!configs?.google_maps_api_key?.value && !(showMapInput && googleMapKey)) {
      errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('GOOGLE_MAP_API_KEY', 'Google map api key')))
    }
    if (!formState?.changes?.domain) errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('DOMAIN', 'Domain')))
    if (formState?.changes?.domain &&
      !formState?.changes?.domain.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i)) {
      errors.push(t('VALIDATION_ERROR_DOMAIN', 'The domain is not valid'))
    }
    if (!formState?.changes?.ssl_setup_type) errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('SSL_SETUP_TYPE', 'SSL setup type')))

    if (errors.length === 0) {
      const googleMapApiKey = showMapInput && googleMapKey
      handleChangeCustomDomain(googleMapApiKey)
    } else {
      setAlertState({ open: true, content: errors })
    }
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
        <h1>{t('CUSTOM_DOMAIN', 'Custom domain')}</h1>
        <FormControl>
          <TitleWrapper>
            <label>{t('DOMAIN', 'Domain')}</label>
            <CustomDomainInfo>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <CustomDomainInfoContent>
                <span>{t('CUSTOM_DOMAIN_NOTIFY', 'Please make sure that your DNS CNAME is pointing {project-name}.tryordering.com')}</span>
              </CustomDomainInfoContent>
            </CustomDomainInfo>
          </TitleWrapper>
          <Input
            placeholder='www.yourdomain.com'
            value={formState?.changes?.domain || ''}
            onChange={(e) => handleChangeFormState({ domain: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <label>{t('SLL_SETUP_TYPE', 'SSL setup type')}</label>
          <SelectWrapper>
            <Select
              options={sslTypeList}
              className='select'
              defaultValue={formState?.changes?.ssl_setup_type}
              placeholder={t('SELECT_OPTION', 'Select an option')}
              onChange={(value) => handleChangeFormState({ ssl_setup_type: value })}
            />
          </SelectWrapper>
        </FormControl>
        {!configs?.google_maps_api_key?.value && (
          <>
            <CheckBoxWrapper onClick={() => setShowMapInput(prev => !prev)}>
              {showMapInput ? <CheckedIcon className='active' /> : <UnCheckedIcon />}
              <span>{t('I_HAVE_GOOGLE_MAPS_KEY_WANT_SHARE_IT', 'I have my Google Maps API Key, I want to share it')}</span>
            </CheckBoxWrapper>
            {showMapInput && (
              <FormControl>
                <label>{t('GOOGLE_MAP_API_KEY', 'Google map api key')}</label>
                <Input
                  value={googleMapKey}
                  onChange={(e) => setGoogleMapKey(e.target.value)}
                />
              </FormControl>
            )}
          </>
        )}
        <ButtonGroup>
          <Button
            color='primary'
            outline
            onClick={onClose}
          >
            {t('Cancel', 'Cancel')}
          </Button>
          <Button
            color='primary'
            onClick={handleSubmit}
            disabled={formState?.loading}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ButtonGroup>
      </Container>
      <Alert
        title={t('ORDERING', 'Ordering')}
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

export const CustomDomain = (props) => {
  const customDomainProps = {
    ...props,
    UIComponent: CustomDomainUI
  }
  return <CustomDomainController {...customDomainProps} />
}
