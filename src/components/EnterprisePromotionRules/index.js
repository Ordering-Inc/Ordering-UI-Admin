import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Checkbox, Input } from '../../styles'
import { Select } from '../../styles/Select/FirstSelect'
import { RecordCircleFill, Circle, ChevronRight } from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import { SideBar } from '../SideBar'
import { EnterprisePromotionConditions } from '../EnterprisePromotionConditions'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Modal } from '../Modal'

import {
  RulesContainer,
  FormInput,
  FormInnerContainer,
  SectionTitle,
  CouponContainer,
  CouponHeader,
  CouponContent,
  ShowInCartContainer,
  CouponCodeContainer,
  DiscountOption,
  CondtionItem,
  Option,
  SelectWrapper,
  DiscountContainer
} from './styles'

export const EnterprisePromotionRules = (props) => {
  const {
    isAddMode,
    promotionState,
    formState,
    actionState,
    handleChangeInput,
    handleChangeItem,
    handleAddPromotion,
    handleUpdateClick,
    setMoveDistance
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const formMethods = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isShowConditions, setIsShowConditions] = useState(false)

  const promotionTypes = [
    { value: 1, content: <Option>{t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal')}</Option> },
    { vlaue: 2, content: <Option>{t('DELIVERY_FEE', 'Delivery fee')}</Option> },
    { value: 3, content: <Option>{t('BUSINESS_SERVICE_FEE', 'Service fee')}</Option> }
  ]

  const discountTypes = [
    { value: 1, content: <Option>{t('PERCENTAGE', 'Percentage')}</Option> },
    { value: 2, content: <Option>{t('PRICE', 'Price')}</Option> }
  ]

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddPromotion()
      } else {
        handleUpdateClick()
      }
    }
  }

  const hanndleClickApply = () => {
    if (width > 1300) setMoveDistance(700)
    setIsShowConditions(true)
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (width < 1300) {
      setMoveDistance(0)
    } else {
      if (isShowConditions) {
        setMoveDistance(700)
      }
    }
  }, [width])

  return (
    <RulesContainer>
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
        <FormInnerContainer>
          <SectionTitle>{t('PROMOTION_TYPES', 'Promotion types')}</SectionTitle>
          <SelectWrapper>
            <Select
              defaultValue={
                typeof formState.changes?.target !== 'undefined'
                  ? formState.changes?.target
                  : promotionState.promotion?.target
              }
              options={promotionTypes}
              onChange={val => handleChangeItem({ target: val })}
            />
          </SelectWrapper>
          <DiscountContainer>
            <div>
              <label>{t('DISCOUNT_TYPE', 'Discount type')}</label>
              <Select
                defaultValue={formState.changes?.rate_type ?? promotionState.promotion?.rate_type}
                options={discountTypes}
                onChange={val => handleChangeItem({ rate_type: val })}
              />
            </div>
            <div>
              <label>{t('VALUE', 'Value')}</label>
              <Input
                name='rate'
                value={formState.changes?.rate ?? promotionState?.promotion?.rate ?? ''}
                placeholder={0}
                onChange={handleChangeInput}
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                ref={formMethods.register({
                  required: t('VALIDATION_ERROR_REQUIRED', 'The _attribute_ field is required.').replace('_attribute_', t('RATE', 'Rate'))
                })}
              />
            </div>
          </DiscountContainer>

          <SectionTitle>{t('QUESTION_HOW_GOING_APPLIED', 'How it\'s going to be applied?')}</SectionTitle>
          <CouponContainer>
            <CouponHeader
              active={(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2))}
              onClick={() => handleChangeItem({ type: 2 })}
            >
              {(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2)) ? (
                <RecordCircleFill />
              ) : (
                <Circle />
              )}
              <span>{t('COUPON', 'Coupon')}</span>
            </CouponHeader>
            {(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2)) && (
              <CouponContent>
                <ShowInCartContainer>
                  <Checkbox
                    checked={
                      typeof formState.changes?.public !== 'undefined'
                        ? formState.changes?.public
                        : promotionState.promotion?.public
                    }
                    onChange={e => handleChangeItem({ public: e.target.checked })}
                  />
                  <div>
                    <p>{t('SHOW_IN_CART', 'Show in cart')}</p>
                    <p>{t('PLEASE_INDICATE_COUPON_FOR_CART', 'Please indicate if you want the coupon to be seen in the cart or hidden')}</p>
                  </div>
                </ShowInCartContainer>
                <CouponCodeContainer>
                  <label>{t('COUPON_CODE', 'Coupon code')}</label>
                  <Input
                    name='coupon'
                    value={formState.changes?.coupon ?? promotionState?.promotion?.coupon ?? ''}
                    onChange={e => handleChangeItem({ coupon: e.target.value.replace(/\s+/g, '') })}
                  />
                </CouponCodeContainer>
              </CouponContent>
            )}

          </CouponContainer>
          <DiscountOption
            active={(formState.changes?.type === 1 || (!formState?.changes.type && promotionState?.promotion?.type === 1))}
            onClick={() => handleChangeItem({ type: 1 })}
          >
            {(formState.changes?.type === 1 || (!formState?.changes.type && promotionState?.promotion?.type === 1)) ? (
              <RecordCircleFill />
            ) : (
              <Circle />
            )}
            <span>{t('AUTOMATIC_DISCOUNT', 'Automatic discount')}</span>
          </DiscountOption>

          <SectionTitle>{t('CONDITIONS', 'Conditions')}</SectionTitle>
          <CondtionItem
            active={isShowConditions}
            onClick={() => hanndleClickApply()}
          >
            <div>
              {isShowConditions ? <RecordCircleFill /> : <Circle />}
              <span>{t('FRONT_VISUALS_APPLY', 'Apply')}</span>
            </div>
            <ChevronRight />
          </CondtionItem>
        </FormInnerContainer>
        <Button
          borderRadius='8px'
          color='primary'
          type='submit'
          disabled={Object.keys(formState.changes).length === 0 || actionState.loading}
        >
          {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
        </Button>
      </FormInput>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      {width >= 1300 ? (
        <>
          {isShowConditions && (
            <SideBar
              isBorderShow
              sidebarId='promotion_conditions_details'
              defaultSideBarWidth='700'
              open={isShowConditions}
              onClose={() => {
                setMoveDistance(0)
                setIsShowConditions(false)
              }}
            >
              <EnterprisePromotionConditions {...props} />
            </SideBar>
          )}
        </>
      ) : (
        <Modal
          width='70%'
          open={isShowConditions}
          onClose={() => {
            setMoveDistance(0)
            setIsShowConditions(false)
          }}
        >
          <EnterprisePromotionConditions {...props} />
        </Modal>
      )}
    </RulesContainer>
  )
}
