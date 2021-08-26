import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, Checkbox } from '../../styles'
import { getHours, getMinutes, getSeconds } from '../../../../../utils'
import { useTheme } from 'styled-components'

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

export const DriversGroupOrders = (props) => {
  const {
    driversGroup,
    changesState,
    handleChangesState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [maxTimeBetweenOrder, setMaxTimeBetweenOrder] = useState({})
  const [maxTimeBetweenBusiness, setMaxTimeBetweenBusiness] = useState({})
  const [maxTimeBetweenDelivery, setMaxTimeBetweenDelivery] = useState({})

  useEffect(() => {
    if (driversGroup) {
      const _maxTimeBetweenOrder = {
        hour: getHours(driversGroup?.orders_group_max_time_between),
        minute: getMinutes(driversGroup?.orders_group_max_time_between),
        second: getSeconds(driversGroup?.orders_group_max_time_between)
      }
      setMaxTimeBetweenOrder(_maxTimeBetweenOrder)

      const _maxTimeBetweenBusiness = {
        hour: getHours(driversGroup?.orders_group_max_time_between_pickup),
        minute: getMinutes(driversGroup?.orders_group_max_time_between_pickup),
        second: getSeconds(driversGroup?.orders_group_max_time_between_pickup)
      }
      setMaxTimeBetweenBusiness(_maxTimeBetweenBusiness)

      const _maxTimeBetweenDelivery = {
        hour: getHours(driversGroup?.orders_group_max_time_between_delivery),
        minute: getMinutes(driversGroup?.orders_group_max_time_between_delivery),
        second: getSeconds(driversGroup?.orders_group_max_time_between_delivery)
      }
      setMaxTimeBetweenDelivery(_maxTimeBetweenDelivery)
    }
  }, [driversGroup])

  const handleChangeMaxTimeBetweenOrder = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      let _maxTimeBetweenOrder
      if (typeof changesState?.orders_group_max_time_between !== 'undefined') {
        _maxTimeBetweenOrder = {
          hour: getHours(changesState?.orders_group_max_time_between),
          minute: getMinutes(changesState?.orders_group_max_time_between),
          second: getSeconds(changesState?.orders_group_max_time_between)
        }
      } else {
        _maxTimeBetweenOrder = { ...maxTimeBetweenOrder }
      }
      if (option === 'hour') {
        _maxTimeBetweenOrder.hour = changeValue
      }
      if (option === 'minute') {
        _maxTimeBetweenOrder.minute = changeValue
      }
      if (option === 'second') {
        _maxTimeBetweenOrder.second = changeValue
      }

      const maxTimeBetweenOrderChanges = _maxTimeBetweenOrder?.hour * 3600 + _maxTimeBetweenOrder?.minute * 60 + _maxTimeBetweenOrder?.second
      handleChangesState('orders_group_max_time_between', maxTimeBetweenOrderChanges)
    }
  }

  const handleChangeMaxTimeBetweenBusiness = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      let _maxTimeBetweenBusiness
      if (typeof changesState?.orders_group_max_time_between_pickup !== 'undefined') {
        _maxTimeBetweenBusiness = {
          hour: getHours(changesState?.orders_group_max_time_between_pickup),
          minute: getMinutes(changesState?.orders_group_max_time_between_pickup),
          second: getSeconds(changesState?.orders_group_max_time_between_pickup)
        }
      } else {
        _maxTimeBetweenBusiness = { ...maxTimeBetweenOrder }
      }
      if (option === 'hour') {
        _maxTimeBetweenBusiness.hour = changeValue
      }
      if (option === 'minute') {
        _maxTimeBetweenBusiness.minute = changeValue
      }
      if (option === 'second') {
        _maxTimeBetweenBusiness.second = changeValue
      }

      const maxTimeBetweenBusinessChanges = _maxTimeBetweenBusiness?.hour * 3600 + _maxTimeBetweenBusiness?.minute * 60 + _maxTimeBetweenBusiness?.second
      handleChangesState('orders_group_max_time_between_pickup', maxTimeBetweenBusinessChanges)
    }
  }

  const handleChangeMaxTimeBetweenDelivery = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      let _maxTimeBetweenDelivery
      if (typeof changesState?.orders_group_max_time_between_pickup !== 'undefined') {
        _maxTimeBetweenDelivery = {
          hour: getHours(changesState?.orders_group_max_time_between_pickup),
          minute: getMinutes(changesState?.orders_group_max_time_between_pickup),
          second: getSeconds(changesState?.orders_group_max_time_between_pickup)
        }
      } else {
        _maxTimeBetweenDelivery = { ...maxTimeBetweenOrder }
      }
      if (option === 'hour') {
        _maxTimeBetweenDelivery.hour = changeValue
      }
      if (option === 'minute') {
        _maxTimeBetweenDelivery.minute = changeValue
      }
      if (option === 'second') {
        _maxTimeBetweenDelivery.second = changeValue
      }

      const maxTimeBetweenDeliveryChanges = _maxTimeBetweenDelivery?.hour * 3600 + _maxTimeBetweenDelivery?.minute * 60 + _maxTimeBetweenDelivery?.second
      handleChangesState('orders_group_max_time_between_delivery', maxTimeBetweenDeliveryChanges)
    }
  }

  const onChangeNumberInput = (name, change) => {
    const regExp = /^[0-9\b]+$/
    if (change === '' || regExp.test(change)) {
      handleChangesState(name, change)
    }
  }

  return (
    <GroupOrdersContainer>
      <h1>{t('GROUP_ORDERS', 'Group orders')}</h1>
      <FieldWrapper>
        <label>{t('MAX_NUMBER_ORDERS', 'Maxiumum number of orders')}</label>
        <Input
          value={changesState?.orders_group_max_orders ?? driversGroup?.orders_group_max_orders}
          onChange={e => onChangeNumberInput('orders_group_max_orders', e.target.value)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <label>{t('MAX_TIME_BETWEEN_ORDER', 'Maxiumum time between orders')}</label>
        <MaxTimeInputsContainer>
          <Input
            value={
              changesState?.orders_group_max_time_between
                ? getHours(changesState?.orders_group_max_time_between)
                : maxTimeBetweenOrder?.hour ?? ''
            }
            onChange={e => handleChangeMaxTimeBetweenOrder(e.target.value, 'hour')}
          />
          <strong>&#8282;</strong>
          <Input
            value={
              changesState?.orders_group_max_time_between
                ? getMinutes(changesState?.orders_group_max_time_between)
                : maxTimeBetweenOrder?.minute ?? ''
            }
            onChange={e => handleChangeMaxTimeBetweenOrder(e.target.value, 'minute')}
            maxlength='2'
          />
          <strong>&#8282;</strong>
          <Input
            value={
              changesState?.orders_group_max_time_between
                ? getSeconds(changesState?.orders_group_max_time_between)
                : maxTimeBetweenOrder?.second ?? ''
            }
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
            value={changesState?.orders_group_max_distance_between_pickup ?? driversGroup?.orders_group_max_distance_between_pickup ?? ''}
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
            value={changesState?.orders_group_max_distance_between_delivery ?? driversGroup?.orders_group_max_distance_between_delivery ?? ''}
            onChange={e => onChangeNumberInput('orders_group_max_distance_between_delivery', e.target.value)}
          />
        </MaxTimeBusinessInputContainer>
      </FieldWrapper>
      <FieldWrapper>
        <UseMapsApiCheckboxContainer>
          <Checkbox
            checked={changesState?.orders_group_use_maps_api ?? driversGroup?.orders_group_use_maps_api}
            onChange={e => handleChangesState('orders_group_use_maps_api', e.target.checked)}
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
      {(changesState?.orders_group_use_maps_api || (typeof changesState?.orders_group_use_maps_api === 'undefined' && driversGroup?.orders_group_use_maps_api)) && (
        <>
          <FieldWrapper>
            <label>{t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maxiumum distance between businesses in meters')}</label>
            <FieldRowContainer>
              <IconImage
                url={theme.images?.icons?.shopToShop}
              />
              <MaxTimeInputsContainer>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_pickup
                      ? getHours(changesState?.orders_group_max_time_between_pickup)
                      : maxTimeBetweenBusiness?.hour ?? ''
                  }
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'hour')}
                />
                <strong>&#8282;</strong>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_pickup
                      ? getMinutes(changesState?.orders_group_max_time_between_pickup)
                      : maxTimeBetweenBusiness?.minute ?? ''
                  }
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'minute')}
                  maxlength='2'
                />
                <strong>&#8282;</strong>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_pickup
                      ? getSeconds(changesState?.orders_group_max_time_between_pickup)
                      : maxTimeBetweenBusiness?.second ?? ''
                  }
                  onChange={e => handleChangeMaxTimeBetweenBusiness(e.target.value, 'second')}
                  maxlength='2'
                />
              </MaxTimeInputsContainer>
            </FieldRowContainer>
          </FieldWrapper>
          <FieldWrapper>
            <label>{t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maxiumum distance between deliveries in meters')}</label>
            <FieldRowContainer>
              <IconImage
                url={theme.images?.icons?.homeToHome}
              />
              <MaxTimeInputsContainer>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_delivery
                      ? getHours(changesState?.orders_group_max_time_between_delivery)
                      : maxTimeBetweenDelivery?.hour ?? ''
                  }
                  onChange={e => handleChangeMaxTimeBetweenDelivery(e.target.value, 'hour')}
                />
                <strong>&#8282;</strong>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_delivery
                      ? getMinutes(changesState?.orders_group_max_time_between_delivery)
                      : maxTimeBetweenDelivery?.minute ?? ''
                  }
                  onChange={e => handleChangeMaxTimeBetweenDelivery(e.target.value, 'minute')}
                  maxlength='2'
                />
                <strong>&#8282;</strong>
                <Input
                  value={
                    changesState?.orders_group_max_time_between_delivery
                      ? getSeconds(changesState?.orders_group_max_time_between_delivery)
                      : maxTimeBetweenDelivery?.second ?? ''
                  }
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
