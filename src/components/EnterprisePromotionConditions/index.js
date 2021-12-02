import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Checkbox } from '../../styles'
import { Pencil } from 'react-bootstrap-icons'
import { Modal } from '../Modal'
import { EnterprisePromotionEditCondition } from '../EnterprisePromotionEditCondition'

import {
  ConditionsContainer,
  Header,
  ConditionItem,
  EditButton
} from './styles'

export const EnterprisePromotionConditions = (props) => {
  const {
    formState,
    promotionState,
    handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const [openSingleModal, setOpenSingleModal] = useState(false)
  const [selectedCondition, setSelectedCondition] = useState(null)

  const integerConditions = [
    'valid_from_after_user_last_order_minutes', 'valid_until_after_user_last_order_minutes', ''
  ]

  const handleSingleEdit = (condition) => {
    setSelectedCondition(condition)
    setOpenSingleModal(true)
  }

  const conditions = [
    { id: 1, title: t('PRODUCTS_SPECIFIC', 'Product specific'), attribute: 'products' },
    { id: 2, title: t('CATEGORIE_SPECIFIC', 'Categories specific'), attribute: 'categories' },
    { id: 3, title: t('SCHEDULE_LIMIT', 'Schedule limit'), attribute: 'schedule' },
    { id: 3, title: t('OFFER_MAX_AMOUNT_TIMES', 'Max. amount of times that can be used '), attribute: 'limit' },
    { id: 4, title: t('OFFER_LIMIT_TIMES_PER_USER', 'Max. amount of times that can be used per user'), attribute: 'limit_per_user' },
    { id: 5, title: t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user'), attribute: 'user_order_count' },
    { id: 6, title: t('PAYMEN_METHODS_ALLOWED', 'Payment methods allowed'), attribute: 'paymethods' },
    { id: 7, title: t('MAX_AMOUNT_TO_DISCOUNT', 'Maximum discount limit'), attribute: 'max_discount' },
    { id: 8, title: t('DELIVERY_ZONE', 'Delivery zones'), attribute: 'delivery_zones' },
    { id: 9, title: t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type'), attribute: 'order_types_allowed' },
    { id: 10, title: t('MINIMUN_PURCHASED', 'Minimum purchase'), attribute: 'minimum' }
  ]

  return (
    <>
      <ConditionsContainer>
        <Header>
          <h1>{t('CONDITIONS', 'Conditions')}</h1>
        </Header>

        {conditions.map((condition, index) => (
          <ConditionItem key={index}>
            <div>
              <Checkbox
                defaultChecked={formState.changes[condition] || promotionState.promotion[condition]}
                disabled
              />
              <span>{condition.title}</span>
            </div>
            <EditButton
              onClick={() => handleSingleEdit(condition)}
            >
              <Pencil />
            </EditButton>
          </ConditionItem>
        ))}

        <Button
          borderRadius='8px'
          color='primary'
          onClick={() => handleUpdateClick()}
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
          condition={selectedCondition}
          onClickDone={() => setOpenSingleModal(false)}
        />
      </Modal>
    </>
  )
}
