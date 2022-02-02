import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Alert } from '../Confirm'
import { CategoryTreeNode } from '../CategoryTreeNode'
import { Schedule } from '../Schedule'
import { useTheme } from 'styled-components'

import {
  BusinessMenuBasicContainer,
  FieldName,
  OrderType,
  ScheduleContainer,
  ScheduleSection
} from './styles'

export const BusinessMenuBasicOptions = (props) => {
  const {
    business,
    businessMenuState,
    formState,
    handleChangeInput,
    handleCheckOrderType,
    handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption,
    selectedProductsIds,
    setSelectedProductsIds,
    selectedProducts,
    setSelectedProducts,
    handleChangeScheduleState,

    subCategoriesList
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const isEdit = Object.keys(businessMenuState?.menu).length

  const orderTypes = [
    { value: 1, key: 'delivery', content: t('DELIVERY', 'Delivery') },
    { value: 2, key: 'pickup', content: t('PICKUP', 'Pickup') },
    { value: 3, key: 'eatin', content: t('EAT_IN', 'Eat in') },
    { value: 4, key: 'curbside', content: t('CURBSIDE', 'Curbside') },
    { value: 5, key: 'driver_thru', content: t('DRIVE_THRU', 'Drive thru') }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onAddBusinessMenuOption = () => {
    if (formState.changes?.products?.length || formState.changes?.all_products) {
      handleAddBusinessMenuOption()
    } else {
      setAlertState({
        open: true,
        content: [t('ERROR_MENU_PRODUCTS', 'You have not selected any product for the menu')]
      })
    }
  }

  useEffect(() => {
    if (!formState?.result?.error) return
    setAlertState({
      open: true,
      content: formState?.result?.result
    })
  }, [formState?.result?.error])

  return (
    <>
      <BusinessMenuBasicContainer>
        <FieldName>{t('MENU_NAME', 'Menu name')}</FieldName>
        <Input
          name='name'
          placeholder={t('NAME', 'Name')}
          value={
            formState?.changes?.name ?? businessMenuState?.menu?.name ?? ''
          }
          onChange={(e) => handleChangeInput(e)}
        />
        <FieldName isBorderBottom>{t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')}</FieldName>
        {orderTypes.map(orderType => (
          <OrderType
            key={orderType.value}
            active={(formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])}
            onClick={() => handleCheckOrderType(orderType.key)}
          >
            {
              (formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])
                ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )
            }
            <span>{orderType.content}</span>
          </OrderType>
        ))}
        <ScheduleContainer>
          <FieldName>{t('SCHEDULE', 'Schedule')}</FieldName>
          <OrderType
            noBorder
            active={(formState?.changes?.use_business_schedule ?? businessMenuState.menu?.use_business_schedule)}
            onClick={() => handleChangeInput({
              target: {
                name: 'use_business_schedule',
                value: !(formState?.changes?.use_business_schedule ?? businessMenuState.menu?.use_business_schedule)
              }
            })}
          >
            {
              (formState?.changes?.use_business_schedule ?? businessMenuState.menu?.use_business_schedule)
                ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )
            }
            <span>{t('USE_BUSINESS_SCHEDULE', 'Use business schedule')}</span>
          </OrderType>
          {!(formState?.changes?.use_business_schedule ?? businessMenuState.menu?.use_business_schedule) && (
            <ScheduleSection>
              <Schedule
                scheduleList={businessMenuState?.menu?.schedule}
                handleChangeScheduleState={handleChangeScheduleState}
              />
            </ScheduleSection>
          )}
        </ScheduleContainer>
        <FieldName>{t('COMMENTS', 'Comments')}</FieldName>
        <TextArea
          rows={4}
          name='comment'
          defaultValue={
            formState?.changes?.comment ?? businessMenuState?.menu?.comment ?? ''
          }
          placeholder={t('WRITE_HERE', 'Write here')}
          onChange={(e) => handleChangeInput(e)}
        />
        <FieldName>{t('PRODUCTS', 'Products')}</FieldName>
        <OrderType
          noBorder
          active={(formState?.changes?.all_products ?? businessMenuState.menu?.all_products)}
          onClick={() => handleChangeInput({
            target: {
              name: 'all_products',
              value: !(formState?.changes?.all_products ?? businessMenuState.menu?.all_products)
            }
          })}
          style={{
            paddingTop: 0,
            paddingBottom: 10,
            marginBottom: 10
          }}
        >
          {
            (formState?.changes?.all_products ?? businessMenuState.menu?.all_products)
              ? (
                <RiCheckboxFill />
              ) : (
                <RiCheckboxBlankLine />
              )
          }
          <span>{t('ALL_PRODUCTS', 'All products')}</span>
        </OrderType>
        {!(formState?.changes?.all_products ?? businessMenuState.menu?.all_products) &&
          business?.categories.sort((a, b) => a.rank - b.rank).map(category => (
          <CategoryTreeNode
            key={category.id}
            index={0}
            category={category}
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}

            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            subCategoriesList={subCategoriesList}
          />
        ))}
      </BusinessMenuBasicContainer>
      <Button
        color='primary'
        borderRadius='5px'
        disabled={formState.loading || Object.keys(formState?.changes).length === 0}
        onClick={() => isEdit ? handleUpdateBusinessMenuOption() : onAddBusinessMenuOption()}
      >
        {formState.loading ? (
          t('LOADING', 'Loading')
        ) : (
          isEdit ? (
            t('UPDATE', 'Update')
          ) : (
            t('ADD', 'Add')
          )
        )}
      </Button>
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
