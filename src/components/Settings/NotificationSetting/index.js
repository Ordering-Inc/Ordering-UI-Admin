import React, { useState, useEffect, useContext } from 'react'
import { useLanguage, SettingsList as SettingsListController } from 'ordering-components-admin'
import { SettingsSelectUI } from '../SettingsSelectUI'
import { Accordion, AccordionContext, useAccordionToggle, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Button, IconButton } from '../../../styles'
import { Alert } from '../../Shared'
import { InfoCircle } from 'react-bootstrap-icons'
import {
  NotificationSettingContainer,
  AccordionTitle,
  GeneralWrapper,
  ToggleItemWrapper,
  TitleWrapper
} from './styles'
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

const NotificationSettingUI = (props) => {
  const {
    configs,
    handleInputChange,
    handleCheckBoxChange,
    settingsState,
    handleClickUpdate,
    isCampaign
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const tooltips = {
    notification_times_repeat: t('MAX_TIMES_TO_REPEAT_15', 'Max times to repeat = 15'),
    notification_each_time_repeat: t('EACH_TIME_SETTING_SET_IN_SECONDS', 'Each time setting set in seconds'),
    notification_superadmin_repeat: t('NOTIFICATION_REPEAT_WORKS_WITH_PENDING_READY', 'Notification repeat works only with Pending (0) and Order Ready (4) status'),
    notification_business_repeat: t('PENDING_STATUS_WORKS_FOR_ADMIN_DRIVER_BUSINESS_USER', 'Pending status works for admin, driver, business user'),
    notification_driver_repeat: t('ORDER_READY_WORKS_WITH_DRIVER_USER', 'Order Ready works only with driver user')
  }

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
    const excludedKeys = ['notification_superadmin_states', 'notification_business_states', 'notification_customer_states', 'notification_driver_states']
    const _general = configs.filter(config => !excludedKeys.includes(config.key))
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
        {!isCampaign && (
          <GeneralTitle>
            <p>{t('SETTINGS', 'All Settings')}</p>
          </GeneralTitle>
        )}
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
                          <TitleWrapper>
                            <label>{config?.name}</label>
                            {tooltips?.[config?.key] && (
                              <OverlayTrigger
                                placement='bottom'
                                overlay={
                                  <Tooltip>
                                    {tooltips?.[config?.key]}
                                  </Tooltip>
                                }
                              >
                                <IconButton
                                  color='primary'
                                  className='tour_btn'
                                >
                                  <InfoCircle />
                                </IconButton>
                              </OverlayTrigger>
                            )}
                          </TitleWrapper>
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
                        <>
                          <TitleWrapper>
                            <label>{config?.name}</label>
                            {tooltips?.[config?.key] && (
                              <OverlayTrigger
                                placement='bottom'
                                overlay={
                                  <Tooltip>
                                    {tooltips?.[config?.key]}
                                  </Tooltip>
                                }
                              >
                                <IconButton
                                  color='primary'
                                  className='tour_btn'
                                >
                                  <InfoCircle />
                                </IconButton>
                              </OverlayTrigger>
                            )}
                          </TitleWrapper>
                          {config?.description && <Description>{config?.description}</Description>}
                          <SettingsSelectUI
                            noHeader
                            config={config}
                            defaultValue={config?.value}
                            handleSelectChange={(value) => handleInputChange(value, config?.id)}
                          />
                        </>
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
          <ContextAwareToggle eventKey='3'>
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
          <ContextAwareToggle eventKey='4'>
            <AccordionTitle>{t('DRIVER', 'Driver')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='4'>
            <CheckBoxWrapper>
              {driver?.description && <p>{driver?.description}</p>}
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
