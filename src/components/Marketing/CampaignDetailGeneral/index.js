import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useLanguage } from 'ordering-components-admin'
import { Input, Switch, Button } from '../../../styles'
import { Modal, RangeCalendar } from '../../Shared'
import { CampaignAmountOption } from '../CampaignAmountOption'
import { CampaignSignUpOption } from '../CampaignSignUpOption'

import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon,
  ChevronRight,
  CheckSquareFill,
  Square
} from 'react-bootstrap-icons'

import {
  Container,
  InputWrapper,
  AudienceWrapper,
  DynamicWrapper,
  RadioCheckWrapper,
  SwitchWrapper,
  DynamicContentWrapper,
  FixedWrapper,
  FixedContent,
  FixedStatusWrapper,
  StatusPoint,
  ScheduleForLateWrapper,
  ButtonWrapper,
  RulesWrapper,
  CheckBoxWrapper
} from './styles'

export const CampaignDetailGeneral = (props) => {
  const {
    formState,
    campaignState,
    handleChangeItem,
    handleChangeInput,
    isAddMode,
    handleUpdateClick,
    handleAddCampaign
  } = props

  const [, t] = useLanguage()

  const [isASAP, setIsASAP] = useState(true)
  const [isRuleModal, setIsRuleModal] = useState(false)
  const [selectedRule, setSelectedRule] = useState(null)

  const ruleList = [
    { key: 'orders_count', title: t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options') },
    { key: 'user_created_at', title: t('SIGN_UP_DATE_OPTIONS', 'Sign up date options') },
    { key: 'user_last_order_at', title: t('LAST_ORDER_DATE_OPTIONS', 'Last order date options') },
    { key: 'user_last_open_cart_at', title: `${t('OPEN_CARTS', 'Open Carts')} / ${t('CART_RECOVERY', 'Cart recovery')}` }
  ]

  const handleCloseRuleModal = () => {
    setIsRuleModal(false)
    setSelectedRule(null)
  }

  const handleOpenRuleModal = (evt, index) => {
    if (evt.target.closest('.rule-control')) return
    setSelectedRule(index)
    setIsRuleModal(true)
  }

  const handleChangeDateTime = (date) => {
    handleChangeItem('scheduled_at', date)
  }

  const handleChangeSchedule = () => {
    handleChangeItem('scheduled_at', null)
    setIsASAP(true)
  }

  const checkColor = (status) => {
    const index = status.toLocaleLowerCase()
    if (index === 'ended') return '#00D27A'
    else if (index === 'scheduled') return '#FFC700'
    else if (index === 'draft') return '#E9ECEF'
    else return '#E9ECEF'
  }

  const handleChangeCheckBox = (key) => {
    const conditions = formState?.changes?.conditions ?? campaignState?.campaign?.conditions
    const isUpdate = isEnableStatus(key)
    // const isValid = getCheckBoxStatus(key)
    let updatedConditions = []
    if (isUpdate) {
      updatedConditions = conditions.filter(item => item.type !== key)
    } else {
      updatedConditions = [...conditions]
      updatedConditions.push({ type: key })
    }
    handleChangeItem('conditions', updatedConditions)
  }

  // const getCheckBoxStatus = (key) => {
  //   let valid = false
  //   ruleList.forEach(item => {
  //     if (key !== item.key && isEnableStatus(item.key)) {
  //       valid = true
  //     }
  //   })
  //   return valid
  // }

  const handleSubmitBtnClick = () => {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddCampaign()
      } else {
        handleUpdateClick()
      }
    }
  }

  const isEnableStatus = (key) => {
    const conditions = formState?.changes?.conditions ?? campaignState?.campaign?.conditions
    if (!conditions) {
      return false
    } else {
      const findIndex = conditions.find(item => item.type === key)
      return findIndex
    }
  }

  useEffect(() => {
    if (campaignState?.campaign?.scheduled_at) {
      setIsASAP(false)
    }
  }, [campaignState?.campaign?.scheduled_at])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            placeholder={t('NAME', 'Name')}
            name='name'
            value={formState?.changes?.name ?? campaignState?.campaign?.name ?? ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <AudienceWrapper>
          <h2>{t('AUDIENCE', 'Audience')}</h2>
          <DynamicWrapper>
            <RadioCheckWrapper
              onClick={() => handleChangeItem('audience_type', 'dynamic')}
            >
              {(formState?.changes?.audience_type ?? campaignState?.campaign?.audience_type) === 'dynamic' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
              <span>{t('DYNAMIC', 'Dynamic')}</span>
            </RadioCheckWrapper>
            <DynamicContentWrapper>
              <p>{t('CAMPAIGN_DYNAMIC_DESCRIPTION', 'People who match rules now and in the future')}</p>
              {(formState?.changes?.audience_type ?? campaignState?.campaign?.audience_type) === 'dynamic' && (
                <>
                  <SwitchWrapper>
                    <span className='campaign-enabled'>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={formState?.changes?.enabled ?? campaignState?.campaign?.enabled ?? false}
                      onChange={val => handleChangeItem('enabled', val)}
                    />
                  </SwitchWrapper>
                  {/* {campaignState?.campaign?.end_at && (
                    <p>{t('LAST_TIME_ON', 'Last time on')}: <span>{moment(campaignState?.campaign?.end_at).format('MM/DD/YYYY · HH:mm a')}</span></p>
                  )} */}
                </>
              )}
            </DynamicContentWrapper>
          </DynamicWrapper>
          <FixedWrapper>
            <RadioCheckWrapper
              onClick={() => handleChangeItem('audience_type', 'fixed')}
            >
              {(formState?.changes?.audience_type ?? campaignState?.campaign?.audience_type) === 'fixed' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
              <span>{t('FIXED', 'Fixed')}</span>
            </RadioCheckWrapper>
            <FixedContent>
              <p>{t('CAMPAIGN_FIXED_DESCRIPTION', 'Only people who match rules right now')}</p>
              {(formState?.changes?.audience_type ?? campaignState?.campaign?.audience_type) === 'fixed' && (
                <>
                  {(formState?.changes?.status || campaignState?.campaign?.status) && (
                    <FixedStatusWrapper>
                      <span>{formState?.changes?.status ?? campaignState?.campaign?.status}</span>
                      <StatusPoint style={{ background: checkColor(formState?.changes?.status ?? campaignState?.campaign?.status) }} />
                    </FixedStatusWrapper>
                  )}
                  <h3>{('DELIVERY_SCHEDULE', 'Delivery Schedule')}</h3>
                  <RadioCheckWrapper
                    onClick={() => handleChangeSchedule()}
                    isBottom
                  >
                    {isASAP ? <CheckIcon className='fill' /> : <UnCheckIcon />}
                    <span>{t('CHECKOUT_ASAP', 'ASAP')} ({moment(new Date()).format('LLLL')} + {t('DELIVERY_TIME', 'delivery time')})</span>
                  </RadioCheckWrapper>
                  <RadioCheckWrapper
                    onClick={() => setIsASAP(false)}
                  >
                    {!isASAP ? <CheckIcon className='fill' /> : <UnCheckIcon />}
                    <span>{t('SCHEDULE_FOR_LATER', 'Schedule for later')}</span>
                  </RadioCheckWrapper>
                  {!isASAP && (
                    <ScheduleForLateWrapper>
                      <RangeCalendar
                        withTime
                        isLeft
                        isSingleDate
                        defaultValue={formState?.changes?.scheduled_at ?? campaignState?.campaign?.scheduled_at}
                        handleChangeDate={handleChangeDateTime}
                      />
                    </ScheduleForLateWrapper>
                  )}
                </>
              )}
            </FixedContent>
          </FixedWrapper>
        </AudienceWrapper>
        <RulesWrapper>
          <h2>{t('RULES', 'Rules')}</h2>
          {/* <p>
            <span>{t('REACHING', 'Reaching')}: </span>
            890 {t('PEOPLE', 'People')}
          </p> */}
          {ruleList.map((rule, i) => (
            <CheckBoxWrapper
              key={i}
              borderTop={i === 0}
              onClick={(e) => isEnableStatus(rule.key) && handleOpenRuleModal(e, rule.key)}
            >
              <div>
                <span className='rule-control' onClick={() => handleChangeCheckBox(rule.key)}>
                  {isEnableStatus(rule.key) ? <CheckSquareFill className='fill' /> : <Square />}
                </span>
                <p>{rule.title}</p>
              </div>
              <ChevronRight />
            </CheckBoxWrapper>
          ))}
        </RulesWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSubmitBtnClick()}
          disabled={Object.keys(formState.changes).length === 0 || formState.loading}
        >
          {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
      <Modal
        width='600px'
        height='550px'
        padding='25px'
        open={isRuleModal}
        onClose={handleCloseRuleModal}
      >
        {selectedRule === 'orders_count' && (
          <CampaignAmountOption
            {...props}
            onClose={handleCloseRuleModal}
            type='orders_count'
          />
        )}
        {selectedRule === 'user_created_at' && (
          <CampaignSignUpOption
            {...props}
            onClose={handleCloseRuleModal}
            title={t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options ')}
            type='user_created_at'
          />
        )}
        {selectedRule === 'user_last_order_at' && (
          <CampaignSignUpOption
            title={t('LAST_ORDER_DATE_OPTIONS', 'Last order date options')}
            type='user_last_order_at'
            {...props}
            onClose={handleCloseRuleModal}
          />
        )}
        {selectedRule === 'user_last_open_cart_at' && (
          <CampaignSignUpOption
            title={`${t('OPEN_CARTS', 'Open Carts')} / ${t('CART_RECOVERY', 'Cart recovery')}`}
            type='user_last_open_cart_at'
            {...props}
            onClose={handleCloseRuleModal}
          />
        )}
      </Modal>
    </>
  )
}
