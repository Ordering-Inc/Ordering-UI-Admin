import React, { useEffect, useState } from 'react'
import { useLanguage, DriversList as DriversController } from 'ordering-components'
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
    driversList,
    defaultValue,
    isPhoneView,
    small,
    driverActionStatus,
    toastNotify,
    handleAssignDriver
  } = props

  const [, t] = useLanguage()
  const [driversOptionList, setDriversOptionList] = useState([])
  const [isRemoveAction, setIsRemoveAction] = useState(false)
  const driversLoading = [{ value: 'default', content: <Option small={small}>{t('DRIVERS_LOADING', 'Drivers loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: <Option padding='3px 0'>{t('SELECT_A_DRIVER', 'Select a driver')}</Option>,
        color: 'primary',
        disabled: 'disabled'
      }
    ]
    _driversOptionList.push({ value: 'remove', content: <Option padding='3px'>{t('REMOVE_ASSIGNED_DRIVER', 'Remove assinged driver')}</Option> })
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

  const handleChangeDriver = (driverId) => {
    if (driverId === 'default') return
    if (driverId === 'remove') {
      driverId = null
      setIsRemoveAction(true)
    } else {
      setIsRemoveAction(false)
    }
    handleAssignDriver({ orderId: order.id, driverId: driverId })
  }

  useEffect(() => {
    if (!driverActionStatus) return
    if (driverActionStatus.loading) return
    const notifyContent = {}
    if (driverActionStatus.error === null) {
      if (!isRemoveAction) {
        notifyContent.content = t('Driver assigned to order')
        notifyContent.type = 'success'
      } else {
        notifyContent.content = t('Driver was removed')
        notifyContent.type = 'warning'
      }
    } else {
      if (Array.isArray(driverActionStatus.error)) {
        notifyContent.content = ''
        for (const _error of driverActionStatus.error) {
          notifyContent.content += _error
        }
      } else {
        notifyContent.content = driverActionStatus.error
      }
      notifyContent.type = 'error'
    }
    toastNotify(notifyContent)
  }, [driverActionStatus])

  return (
    <>
      {!driversList.loading ? (
        <Select
          defaultValue={defaultValue || 'default'}
          options={driversOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(driverId) => handleChangeDriver(driverId)}
        />
      ) : (
        <Select
          defaultValue='default'
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
