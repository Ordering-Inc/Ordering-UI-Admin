import React from 'react'
import { useLanguage, DriversGroupOrders as DriversGroupOrdersController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input, Checkbox } from '../../../styles'

import {
  GroupOrdersContainer,
  FieldWrapper,
  UseMapsApiCheckboxContainer,
  MapsApiDescriptionContainer,
  MaxTimeInputsContainer,
  IconImage,
  MaxTimeBusinessInputContainer,
  FieldRowContainer
} from './styles'

const DriversGroupOrdersUI = (props) => {
  const {
    curDriversGroup,
    changesState,
    handleChangesState,
    maxTimeBetweenOrder,
    maxTimeBetweenBusiness,
    maxTimeBetweenDelivery,
    handleChangeMaxTimeBetweenOrder,
    handleChangeMaxTimeBetweenBusiness,
    handleChangeMaxTimeBetweenDelivery,
    onChangeNumberInput
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <GroupOrdersContainer>
      <h1>{t('GROUP_ORDERS', 'Group orders')}</h1>
      <FieldWrapper>
        <label>{t('MAX_NUMBER_ORDERS', 'Maxiumum number of orders')}</label>
        <Input
          value={changesState?.orders_group_max_orders ?? curDriversGroup?.orders_group_max_orders}
          onChange={e => onChangeNumberInput('orders_group_max_orders', e.target.value)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <label>{t('MAX_TIME_BETWEEN_ORDER', 'Maxiumum time between orders')}</label>
        <MaxTimeInputsContainer>
          <Input
            value={maxTimeBetweenOrder?.hour ?? ''}
            onChange={e => handleChangeMaxTimeBetweenOrder(e.target.value, 'hour')}
          />
          <strong>&#8282;</strong>
          <Input
            value={maxTimeBetweenOrder?.minute ?? ''}
            onChange={e => handleChangeMaxTimeBetweenOrder(e.target.value, 'minute')}
            maxlength='2'
          />
          <strong>&#8282;</strong>
          <Input
            value={maxTimeBetweenOrder?.second ?? ''}
            onChange={e => handleChangeMaxTimeBetweenOrder(e.target.value, 'second')}
            maxlength='2'
          />
        </MaxTimeInputsContainer>
      </FieldWrapper>
      <FieldWrapper>
        <label>{t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maxiumum distance between businesses in meters')}</label>
        <MaxTimeBusinessInputContainer>
          <IconImage
            url={theme.images?.icons?.shopToShop}
          />
          <Input
            value={changesState?.orders_group_max_distance_between_pickup ?? curDriversGroup?.orders_group_max_distance_between_pickup ?? ''}
            onChange={e => onChangeNumberInput('orders_group_max_distance_between_pickup', e.target.value)}
          />
        </MaxTimeBusinessInputContainer>
      </FieldWrapper>
      <FieldWrapper>
        <label>{t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maxiumum distance between deliveries in meters')}</label>
        <MaxTimeBusinessInputContainer>
          <IconImage
            url={theme.images?.icons?.homeToHome}
          />
          <Input
            value={changesState?.orders_group_max_distance_between_delivery ?? curDriversGroup?.orders_group_max_distance_between_delivery ?? ''}
            onChange={e => onChangeNumberInput('orders_group_max_distance_between_delivery', e.target.value)}
          />
        </MaxTimeBusinessInputContainer>
      </FieldWrapper>
      <FieldWrapper>
        <UseMapsApiCheckboxContainer>
          <Checkbox
            checked={changesState?.orders_group_use_maps_api ?? curDriversGroup?.orders_group_use_maps_api}
            onChange={e => handleChangesState({ orders_group_use_maps_api: e.target.checked })}
          />
          <MapsApiDescriptionContainer>
            <p>
              {t('USE_MAPS_API', 'Use maps api')}
            </p>
            <p>
              <span>{t('GOOGLE_MAPS_EXTRA_COST', 'Using this, generates extra charges on yout Google Maps usage.')}</span>
              <a href='https://console.cloud.google.com/home/dashboard' target='_blank' rel='noopener noreferrer'>
                {t('GO_TO_GOOGLE_CONSOLE', 'Go to Google Console')}
              </a>
            </p>
          </MapsApiDescriptionContainer>
        </UseMapsApiCheckboxContainer>
      </FieldWrapper>
      {/* (changesState?.type === 0 || (typeof changesState?.type === 'undefined' && driversGroup?.type === 0)) */}
      {(changesState?.orders_group_use_maps_api || (typeof changesState?.orders_group_use_maps_api === 'undefined' && curDriversGroup?.orders_group_use_maps_api)) && (
        <>
          <FieldWrapper>
            <label>{t('MAX_TIME_BETWEEN_PICKUP', 'Maximum time between pickup points in seconds')}</label>
            <FieldRowContainer>
              <IconImage
                url={theme.images?.icons?.shopToShop}
              />
              <MaxTimeInputsContainer>
                <Input
                  value={maxTimeBetweenBusiness?.hour ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'hour')}
                />
                <strong>&#8282;</strong>
                <Input
                  value={maxTimeBetweenBusiness?.minute ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'minute')}
                  maxlength='2'
                />
                <strong>&#8282;</strong>
                <Input
                  value={maxTimeBetweenBusiness?.second ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'second')}
                  maxlength='2'
                />
              </MaxTimeInputsContainer>
            </FieldRowContainer>
          </FieldWrapper>
          <FieldWrapper>
            <label>{t('MAX_TIME_BETWEEN_DELIVERY', 'Maximum time between delivery points in seconds')}</label>
            <FieldRowContainer>
              <IconImage
                url={theme.images?.icons?.homeToHome}
              />
              <MaxTimeInputsContainer>
                <Input
                  value={maxTimeBetweenDelivery?.hour ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenDelivery(e.target.value, 'hour')}
                />
                <strong>&#8282;</strong>
                <Input
                  value={maxTimeBetweenDelivery?.minute ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenDelivery(e.target.value, 'minute')}
                  maxlength='2'
                />
                <strong>&#8282;</strong>
                <Input
                  value={maxTimeBetweenDelivery?.second ?? ''}
                  onChange={e => handleChangeMaxTimeBetweenDelivery(e.target.value, 'second')}
                  maxlength='2'
                />
              </MaxTimeInputsContainer>
            </FieldRowContainer>
          </FieldWrapper>
        </>
      )}
    </GroupOrdersContainer>
  )
}

export const DriversGroupOrders = (props) => {
  const drivesGroupOrdersProps = {
    ...props,
    UIComponent: DriversGroupOrdersUI
  }
  return <DriversGroupOrdersController {...drivesGroupOrdersProps} />
}
