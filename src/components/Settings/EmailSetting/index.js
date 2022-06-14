import React, { useState, useEffect, useContext } from 'react'
import { useLanguage, SettingsList as SettingsListController } from 'ordering-components-admin'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { Button } from '../../../styles'
import { Alert } from '../../Shared'
import { EmailSettingsContainer, AccordionTitle, GeneralWrapper, ToggleItemWrapper } from './styles'
import {
  FormGroupText,
  CheckBoxWrapper,
  FormGroupWrapper,
  FormGroupCheck,
  OptionsError,
  SubmitBtnWrapper,
  GeneralTitle,
  Description
} from '../SettingsList/styles'

const EmailSettingUI = (props) => {
  const {
    configs,
    handleInputChange,
    handleCheckBoxChange,
    settingsState,
    handleClickUpdate
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const generalList = [
    'email_main_name',
    'email_reply_name',
    'email_reply',
    'email_main',
    'email_smtp_host',
    'email_smtp_port',
    'email_smtp_username',
    'email_smtp_password',
    'email_smtp_encryption',
    'email_smtp_use_default'
  ]

  const [general, setGeneral] = useState(null)
  const [superAdmin, setSuperAdmin] = useState(null)
  const [business, setBusiness] = useState(null)
  const [customer, setCustomer] = useState(null)
  const [cityManager, setCityManager] = useState(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!configs || configs?.length === 0) return
    const _general = configs.filter(config => generalList.includes(config.key))
    const _superAdmin = configs.find(config => config.key === 'email_superadmin_states')
    const _business = configs.find(config => config.key === 'email_business_states')
    const _customer = configs.find(config => config.key === 'email_customer_states')
    const _cityManager = configs.find(config => config.key === 'email_city_manager_states')
    setGeneral([..._general])
    setSuperAdmin({ ..._superAdmin })
    setBusiness({ ..._business })
    setCustomer({ ..._customer })
    setCityManager({ ..._cityManager })
  }, [configs])

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
      <EmailSettingsContainer>
        <GeneralTitle>
          <p>{t('SETTINGS', 'All Settings')}</p>
        </GeneralTitle>
        <Accordion>
          <ContextAwareToggle eventKey='0'>
            <AccordionTitle>{t('GENERAL', 'General')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='0'>
            <GeneralWrapper>
              {
                general?.length > 0 && general.map((config, i) => (
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
                          handleSelectChange={(value) => handleInputChange(value, config?.id)}
                        />
                      )
                    }
                  </div>
                ))
              }
            </GeneralWrapper>
          </Accordion.Collapse>
          <ContextAwareToggle eventKey='1'>
            <AccordionTitle>{t('ADMINISTRATOR', 'Administrator')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='1'>
            <CheckBoxWrapper>
              {superAdmin?.description && <p>{superAdmin?.description}</p>}
              {
                superAdmin?.options?.length > 0 && superAdmin?.options?.map((item, j) => (
                  <FormGroupWrapper key={j}>
                    <FormGroupCheck className='checkbox'>
                      <label>
                        <input
                          type='checkbox'
                          name={item?.value}
                          data-id={superAdmin?.id}
                          defaultChecked={superAdmin?.value.split('|').includes(item?.value)}
                          onChange={(e) => handleCheckBoxChange(e, true, superAdmin?.value)}
                        />
                        {item.text}
                      </label>
                    </FormGroupCheck>
                  </FormGroupWrapper>
                ))
              }
              {
                !superAdmin?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
              }
            </CheckBoxWrapper>
          </Accordion.Collapse>
          <ContextAwareToggle eventKey='2'>
            <AccordionTitle>{t('BUSINESS', 'Business')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='2'>
            <CheckBoxWrapper>
              {business?.description && <p>{business?.description}</p>}
              {
                business?.options?.length > 0 && business?.options?.map((item, j) => (
                  <FormGroupWrapper key={j}>
                    <FormGroupCheck className='checkbox'>
                      <label>
                        <input
                          type='checkbox'
                          name={item?.value}
                          data-id={business?.id}
                          defaultChecked={business?.value.split('|').includes(item?.value)}
                          onChange={(e) => handleCheckBoxChange(e, true, business?.value)}
                        />
                        {item.text}
                      </label>
                    </FormGroupCheck>
                  </FormGroupWrapper>
                ))
              }
              {
                !business?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
              }
            </CheckBoxWrapper>
          </Accordion.Collapse>
          <ContextAwareToggle eventKey='3' as='div'>
            <AccordionTitle>{t('CUSTOMER', 'Customer')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='3'>
            <CheckBoxWrapper>
              {customer?.description && <p>{customer?.description}</p>}
              {
                customer?.options?.length > 0 && customer?.options?.map((item, j) => (
                  <FormGroupWrapper key={j}>
                    <FormGroupCheck className='checkbox'>
                      <label>
                        <input
                          type='checkbox'
                          name={item?.value}
                          data-id={customer?.id}
                          defaultChecked={customer?.value.split('|').includes(item?.value)}
                          onChange={(e) => handleCheckBoxChange(e, true, customer?.value)}
                        />
                        {item.text}
                      </label>
                    </FormGroupCheck>
                  </FormGroupWrapper>
                ))
              }
              {
                !customer?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
              }
            </CheckBoxWrapper>
          </Accordion.Collapse>
          <ContextAwareToggle eventKey='4' as='div'>
            <AccordionTitle>{t('CITY_MANAGER', 'City manager')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='4'>
            <CheckBoxWrapper>
              {cityManager?.description && <p>{cityManager?.description}</p>}
              {
                cityManager?.options?.length > 0 && cityManager?.options?.map((item, j) => (
                  <FormGroupWrapper key={j}>
                    <FormGroupCheck className='checkbox'>
                      <label>
                        <input
                          type='checkbox'
                          name={item?.value}
                          data-id={cityManager?.id}
                          defaultChecked={cityManager?.value.split('|').includes(item?.value)}
                          onChange={(e) => handleCheckBoxChange(e, true, cityManager?.value)}
                        />
                        {item.text}
                      </label>
                    </FormGroupCheck>
                  </FormGroupWrapper>
                ))
              }
              {
                !cityManager?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
              }
            </CheckBoxWrapper>
          </Accordion.Collapse>
        </Accordion>
        {
          settingsState?.changes?.length > 0 && (
            <SubmitBtnWrapper>
              <Button color='primary' onClick={handleClickUpdate}>{t('SAVE', 'Save')}</Button>
            </SubmitBtnWrapper>
          )
        }
      </EmailSettingsContainer>
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

export const EmailSetting = (props) => {
  const emailSettingProps = {
    ...props,
    UIComponent: EmailSettingUI
  }
  return <SettingsListController {...emailSettingProps} />
}

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext)
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )
  const isCurrentEventKey = currentEventKey === eventKey

  const handleButtonClick = () => {
    decoratedOnClick()
  }
  return (
    <ToggleItemWrapper
      active={isCurrentEventKey}
      onClick={handleButtonClick}
    >
      {children}
    </ToggleItemWrapper>
  )
}
