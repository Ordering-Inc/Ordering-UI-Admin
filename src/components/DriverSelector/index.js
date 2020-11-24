import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { DriversList as DriversListController } from '../DriversListControl'
import { Select } from '../../styles/Select'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import FiPhone from '@meronex/icons/fi/FiPhone'
import {
  Option,
  OptionContent,
  DriverNameContainer,
  PhoneContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName
} from './styles'

const DriverSelectorUI = (props) => {
  const {
    driversList,
    handleSelectedDriver,
    defaultValue,
    isPhoneView,
    small
  } = props

  const [, t] = useLanguage()
  const [driversOptionList, setDriversOptionList] = useState([])
  const driversLoading = [{ value: 0, content: <Option small={small}>{t('DRIVERS_LOADING', 'Drivers loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [{ value: 0, content: <Option>{t('DRIVER', 'Driver')}</Option> }]
    if (!driversList.loading) {
      const _driversOptionListTemp = driversList.drivers.map((driver, i) => {
        return {
          value: driver.id,
          content: (
            <Option small={small}>
              <WrapperDriverImage small={small}>
                {driver.photo ? (
                  <DriverImage bgimage={driver.photo} />
                ) : (
                  <FaUserAlt />
                )}
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer small={small}>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  {t('DRIVER', 'Driver')}
                </DriverNameContainer>
                {isPhoneView && driver.phone && (
                  <PhoneContainer>
                    <FiPhone />
                    {driver.phone}
                  </PhoneContainer>
                )}
              </OptionContent>
            </Option>
          )
        }
      })

      for (const option of _driversOptionListTemp) {
        _driversOptionList.push(option)
      }
    }
    setDriversOptionList(_driversOptionList)
  }, [driversList])

  return (
    <>
      {!driversList.loading ? (
        <Select
          defaultValue={defaultValue || 0}
          options={driversOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(driver) => handleSelectedDriver(driver)}
        />
      ) : (
        <Select
          defaultValue={0}
          options={driversLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
        />
      )}
    </>
  )
}

export const DriverSelector = (props) => {
  const DriversControlProps = {
    ...props,
    propsToFetch: ['id', 'name', 'lastname', 'phone', 'cellphone', 'photo'],
    UIComponent: DriverSelectorUI
  }
  return (
    <>
      {props.driversList ? (
        <DriverSelectorUI {...props} />
      ) : (
        <DriversListController {...DriversControlProps} />
      )}
    </>
  )
}
