import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles'
import { Pencil, Check2 } from 'react-bootstrap-icons'
import { Modal } from '../Modal'
import { EnterprisePromotionEditCondition } from '../EnterprisePromotionEditCondition'
import { EnterprisePromotionOrderTypes } from '../EnterprisePromotionOrderTypes'
import { EnterprisePromotionPaymethods } from '../EnterprisePromotionPaymethods'
import { EnterprisePromotionSchedule } from '../EnterprisePromotionSchedule'
import { EnterprisePromotionSpecficProducts } from '../EnterprisePromotionSpecficProducts'

import {
  ConditionsContainer,
  Header,
  ConditionItem,
  EditButton,
  CheckboxWrapper
} from './styles'

export const EnterprisePromotionConditions = (props) => {
  const {
    isAddMode,
    formState,
    actionState,
    promotionState,
    handleUpdateClick,
    handleAddPromotion
  } = props

  const [, t] = useLanguage()
  const [openSingleModal, setOpenSingleModal] = useState(false)
  const [openMultipleModal, setOpenMultipleModal] = useState(null)
  const [selectedCondition, setSelectedCondition] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState(null)

  const singleConditions = [
    'limit', 'limit_per_user', 'user_order_count', 'max_discount', 'minimum', 'valid_from_after_user_last_order_minutes', 'valid_until_after_user_last_order_minutes'
  ]

  const specifics = ['products', 'categories']

  const handlePromotionEdit = (condition, title) => {
    setSelectedCondition(condition)
    setSelectedTitle(title)
    if (singleConditions.includes(condition)) {
      setOpenSingleModal(true)
    } else {
      setOpenMultipleModal(true)
    }
  }

  const conditions = [
    { id: 1, title: t('PRODUCTS_SPECIFIC', 'Product specific'), attribute: 'products' },
    // { id: 2, title: t('CATEGORIE_SPECIFIC', 'Categories specific'), attribute: 'categories' },
    { id: 3, title: t('SCHEDULE_LIMIT', 'Schedule limit'), attribute: 'schedule' },
    { id: 3, title: t('OFFER_MAX_AMOUNT_TIMES', 'Max. amount of times that can be used '), attribute: 'limit' },
    { id: 4, title: t('OFFER_LIMIT_TIMES_PER_USER', 'Max. amount of times that can be used per user'), attribute: 'limit_per_user' },
    { id: 5, title: t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user'), attribute: 'user_order_count' },
    { id: 6, title: t('PAYMEN_METHODS_ALLOWED', 'Payment methods allowed'), attribute: 'paymethods' },
    { id: 7, title: t('MAX_AMOUNT_TO_DISCOUNT', 'Maximum discount limit'), attribute: 'max_discount' },
    // { id: 8, title: t('DELIVERY_ZONE', 'Delivery zones'), attribute: 'delivery_zones' },
    { id: 9, title: t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type'), attribute: 'order_types_allowed' },
    { id: 10, title: t('MINUTES_FROM_LAST_ORDER', 'Minutes from the last order'), attribute: 'valid_from_after_user_last_order_minutes' },
    { id: 11, title: t('MINUTES_UNTIL_LAST_ORDER', 'Minutes until the last order'), attribute: 'valid_until_after_user_last_order_minutes' },
    { id: 12, title: t('MINIMUN_PURCHASED', 'Minimum purchase'), attribute: 'minimum' }
  ]

  const handleClickSave = () => {
    if (isAddMode) handleAddPromotion()
    else handleUpdateClick()
    setOpenSingleModal(false)
    setOpenMultipleModal(false)
  }

  return (
    <>
      <ConditionsContainer>
        <Header>
          <h1>{t('CONDITIONS', 'Conditions')}</h1>
        </Header>

        {conditions.map((condition, index) => (
          <ConditionItem key={index}>
            <div>
              {
                (typeof formState.changes[condition.attribute] !== 'undefined'
                  ? formState.changes[condition.attribute]
                  : Array.isArray(promotionState.promotion[condition.attribute])
                    ? promotionState.promotion[condition.attribute]?.length
                    : promotionState.promotion[condition.attribute])
                  ? (
                    <CheckboxWrapper active>
                      <Check2 />
                    </CheckboxWrapper>
                  )
                  : <CheckboxWrapper />
              }
              <span>{condition.title}</span>
            </div>
            <EditButton
              onClick={() => handlePromotionEdit(condition.attribute, condition.title)}
            >
              <Pencil />
            </EditButton>
          </ConditionItem>
        ))}

        <Button
          borderRadius='8px'
          color='primary'
          onClick={() => handleClickSave()}
          disabled={Object.keys(formState.changes).length === 0 || actionState.loading}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ConditionsContainer>

      <Modal
        width='600px'
        open={openSingleModal}
        onClose={() => setOpenSingleModal(false)}
      >
        <EnterprisePromotionEditCondition
          {...props}
          title={selectedTitle}
          condition={selectedCondition}
          onClickDone={() => handleClickSave()}
        />
      </Modal>
      <Modal
        width={specifics.includes(selectedCondition) ? '70%' : '600px'}
        open={openMultipleModal}
        onClose={() => setOpenMultipleModal(false)}
      >
        {selectedCondition === 'products' && (
          <EnterprisePromotionSpecficProducts
            {...props}
            onClickDone={() => handleClickSave()}
          />
        )}
        {selectedCondition === 'order_types_allowed' && (
          <EnterprisePromotionOrderTypes
            {...props}
            onClickDone={() => handleClickSave()}
          />
        )}
        {selectedCondition === 'paymethods' && (
          <EnterprisePromotionPaymethods
            {...props}
            onClickDone={() => handleClickSave()}
          />
        )}
        {selectedCondition === 'schedule' && (
          <EnterprisePromotionSchedule
            {...props}
            onClickDone={() => handleClickSave()}
          />
        )}
      </Modal>
    </>
  )
}
