import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import driverListData from '../../../template/assets/json/driverList.json'
import FiPhone from '@meronex/icons/fi/FiPhone'
import {
  Option,
  OptionContent,
  DriverNameContainer,
  PhoneContainer,
  DriverName
} from './styles'

export const DriverSelector = (props) => {
  const {
    handleChangeDriver,
    isPhoneView,
    small
  } = props

  const [, t] = useLanguage()
  const [driverList, setDriverList] = useState([])
  const [driverTypes, setDriverTypes] = useState([])

  useEffect(() => {
    setDriverList(driverListData)
  }, [])

  useEffect(() => {
    const driverTypesTemp = driverList.map((driver, i) => {
      return {
        value: i,
        content: (
          <Option small={small}>
            <img
              src={require(`../../../template/assets/images/avatars/${driver.photo}`)}
              alt={driver.driver_name}
            />
            <OptionContent>
              <DriverNameContainer small={small}>
                <DriverName small={small}>{driver.driver_name}</DriverName>
                {t('DRIVER', 'Driver')}
              </DriverNameContainer>
              {isPhoneView && (
                <PhoneContainer>
                  <FiPhone />
                  {driver.driver_phone}
                </PhoneContainer>
              )}
            </OptionContent>
          </Option>
        )
      }
    })

    setDriverTypes(driverTypesTemp)
  }, [driverList])

  return (
    <Select
      defaultValue={0}
      options={driverTypes}
      optionInnerMargin='10px'
      optionInnerMaxHeight='150px'
      optionBottomBorder
      onChange={(driver) => handleChangeDriver(driver)}
    />
  )
}
