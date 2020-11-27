import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { DriversList as DriversController } from '../DriversController'
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
    order,
    drivers,
    defaultValue,
    isPhoneView,
    small,
    handleChangeDriver
  } = props

  const [, t] = useLanguage()
  const [driversOptionList, setDriversOptionList] = useState([])
  const driversLoading = [{ value: 0, content: <Option small={small}>{t('DRIVERS_LOADING', 'Drivers loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [{ value: 0, content: <Option>{t('DRIVER', 'Driver')}</Option> }]
    if (!drivers.loading) {
      const _driversOptionListTemp = drivers.drivers.map((driver, i) => {
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
  }, [drivers])

  return (
    <>
      {!drivers.loading ? (
        <Select
          defaultValue={defaultValue || 0}
          options={driversOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(driverId) => handleChangeDriver({ orderId: order.id, driverId: driverId, products: order.products })}
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
    UIComponent: DriverSelectorUI
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
