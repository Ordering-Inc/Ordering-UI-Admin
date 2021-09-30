import React, { useState, useEffect, useContext } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SettingsList as SettingsListController } from '../SettingsList/naked'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { NotificationSettingContainer, AccordionTitle, GeneralWrapper, ToggleItemWrapper } from './styles'
import {
  FormGroupText,
  CheckBoxWrapper,
  FormGroupWrapper,
  FormGroupCheck,
  OptionsError,
  SubmitBtnWrapper,
  GeneralTitle
} from '../SettingsList/styles'

const NotificationSettingUI = (props) => {
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
    'onesignal_user_auth',
    'onesignal_orderingapp_id',
    'onesignal_businessapp_id',
    'onesignal_deliveryapp_id',
    'driver_close_distance',
    'notification_toast'
  ]

  const [general, setGeneral] = useState(null)
  const [superAdmin, setSuperAdmin] = useState(null)
  const [business, setBusiness] = useState(null)
  const [customer, setCustomer] = useState(null)
  const [driver, setDriver] = useState(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!configs || configs?.length === 0) return
    const _general = configs.filter(config => generalList.includes(config.key))
    const _superAdmin = configs.find(config => config.key === 'notification_superadmin_states')
    const _business = configs.find(config => config.key === 'notification_business_states')
    const _customer = configs.find(config => config.key === 'notification_customer_states')
    const _driver = configs.find(config => config.key === 'notification_driver_states')
    setGeneral([..._general])
    setSuperAdmin({ ..._superAdmin })
    setBusiness({ ..._business })
    setCustomer({ ..._customer })
    setDriver({ ..._driver })
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
      <NotificationSettingContainer>
        <GeneralTitle>
          <p>{t('All_SETTINGS', 'All Settings')}</p>
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
          <ContextAwareToggle eventKey='1'>
            <AccordionTitle>{t('ADMINISTRATOR', 'Administrator')}</AccordionTitle>
          </ContextAwareToggle>
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
          <ContextAwareToggle eventKey='2'>
            <AccordionTitle>{t('BUSINESS', 'Business')}</AccordionTitle>
          </ContextAwareToggle>
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
          <ContextAwareToggle eventKey='3'>
            <AccordionTitle>{t('CUSTOMER', 'Customer')}</AccordionTitle>
          </ContextAwareToggle>
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
          <ContextAwareToggle eventKey='4'>
            <AccordionTitle>{t('DRIVER', 'Driver')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='4'>
            <CheckBoxWrapper>
              {
                driver?.options?.length > 0 && driver?.options?.map((item, j) => (
                  <FormGroupWrapper key={j}>
                    <FormGroupCheck className='checkbox'>
                      <label>
                        <input
                          type='checkbox'
                          name={item?.value}
                          data-id={driver?.id}
                          defaultChecked={driver?.value.split('|').includes(item?.value)}
                          onChange={(e) => handleCheckBoxChange(e, true, driver?.value)}
                        />
                        {item.text}
                      </label>
                    </FormGroupCheck>
                  </FormGroupWrapper>
                ))
              }
              {
                !driver?.options && <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
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
      </NotificationSettingContainer>
      <Alert
        title={t('NOTIFICATION_SETTINGS', 'Notifications settings')}
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

export const NotificationSetting = (props) => {
  const notificationSettingProps = {
    ...props,
    UIComponent: NotificationSettingUI
  }
  return <SettingsListController {...notificationSettingProps} />
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
