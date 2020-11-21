import React from 'react'
import { GroupTypeSelector } from '../GroupTypeSelector'
import { DateTypeSelector } from '../DateTypeSelector'
import { BusinessTypeSelector } from '../BusinessTypeSelector'
import { DriverSelector } from '../DriverSelector'
import { CitySelector } from '../CitySelector'
import { StatusSelector } from '../StatusSelector'
import { DeliveryTypeSelector } from '../DeliveryTypeSelector'
import { PaymentTypeSelector } from '../PaymentTypeSelector'

import {
  FilterGroupListContainer
} from './styles'

export const FilterGroupList = (props) => {
  const handleChangeGroupType = (groupType) => {
    console.log(groupType)
  }

  const handleChangeDateType = (dateType) => {
    console.log(dateType)
  }

  const handleChangeBusinessType = (businessType) => {
    console.log(businessType)
  }

  const handleChangeDriver = (driver) => {
    console.log(driver)
  }

  const handleChangeCity = (city) => {
    console.log(city)
  }

  const handleChangeStatus = (status) => {
    console.log(status)
  }

  const handleChangeDeliveryType = (deliveryType) => {
    console.log(deliveryType)
  }

  const handleChangePaymentType = (paymentType) => {
    console.log(paymentType)
  }

  return (
    <FilterGroupListContainer>
      <GroupTypeSelector
        handleChangeGroupType={(groupType) => handleChangeGroupType(groupType)}
      />
      <DateTypeSelector
        handleChangeDateType={(dateType) => handleChangeDateType(dateType)}
      />
      <BusinessTypeSelector
        handleChangeBusinessType={(businessType) => handleChangeBusinessType(businessType)}
      />
      <DriverSelector
        isPhoneView
        handleChangeDriver={(driver) => handleChangeDriver(driver)}
      />
      <CitySelector
        handleChangeCity={(city) => handleChangeCity(city)}
      />
      <StatusSelector
        handleChangeStatus={(status) => handleChangeStatus(status)}
      />
      <DeliveryTypeSelector
        handleChangeDeliveryType={(deliveryType) => handleChangeDeliveryType(deliveryType)}
      />
      <PaymentTypeSelector
        handleChangePaymentType={(paymentType) => handleChangePaymentType(paymentType)}
      />
    </FilterGroupListContainer>
  )
}
