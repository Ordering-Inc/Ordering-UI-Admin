import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SettingsList as SettingsListController } from '../SettingsList/naked'
import { SettingsSelectUI } from '../SettingsSelectUI'
import Accordion from 'react-bootstrap/Accordion'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { EmailSettingsContainer, AccordionTitle, GeneralWrapper } from './styles'
import {
  FormGroupText,
  CheckBoxWrapper,
  FormGroupWrapper,
  FormGroupCheck,
  OptionsError,
  SubmitBtnWrapper,
  GeneralTitle
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
          <p>{t('All_SETTINGS', 'All Settings')}</p>
        </GeneralTitle>
        <Accordion>
          <Accordion.Toggle eventKey='0' as='div'>
            <AccordionTitle>{t('GENERAL', 'General')}</AccordionTitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <GeneralWrapper>
              {
                general?.length > 0 && general.map((config, i) => (
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
                  </div>
                ))
              }
            </GeneralWrapper>
          </Accordion.Collapse>
          <Accordion.Toggle eventKey='1' as='div'>
            <AccordionTitle>{t('ADMINISTRATOR', 'Administrator')}</AccordionTitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <CheckBoxWrapper>
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
          <Accordion.Toggle eventKey='2' as='div'>
            <AccordionTitle>{t('BUSINESS', 'Business')}</AccordionTitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <CheckBoxWrapper>
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
          <Accordion.Toggle eventKey='3' as='div'>
            <AccordionTitle>{t('CUSTOMER', 'Customer')}</AccordionTitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='3'>
            <CheckBoxWrapper>
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
          <Accordion.Toggle eventKey='4' as='div'>
            <AccordionTitle>{t('CITY_MANAGER', 'City manager')}</AccordionTitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='4'>
            <CheckBoxWrapper>
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
