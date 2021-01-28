import React, { useEffect, useState } from 'react'
import { useLanguage, DriversList as DriversController } from 'ordering-components'
import { useTheme } from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Select } from '../../styles/Select'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import FiPhone from '@meronex/icons/fi/FiPhone'
import { MultiSelect } from '../../styles/MultiSelect'

import {
  Option,
  OptionContent,
  DriverNameContainer,
  PhoneContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName,
  DriverText
} from './styles'
toast.configure()

const DriverSelectorUI = (props) => {
  const {
    order,
    driversList,
    defaultValue,
    isPhoneView,
    isFilterView,
    singleDriverIds,
    small,
    padding,
    orderView,
    driverActionStatus,
    handleAssignDriver,
    handleChangeDriver
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOption, setDefaultOption] = useState(null)
  const [driversOptionList, setDriversOptionList] = useState([])
  const [driversMultiOptionList, setDriversMultiOptionList] = useState([])
  const [isRemoveAction, setIsRemoveAction] = useState(false)
  const driversLoading = [{ value: 'default', content: <Option small={small}>{t('DRIVERS_LOADING', 'Drivers loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: (
          <Option padding={padding}>
            {orderView ? (
              <>
                <WrapperDriverImage small={small}>
                  <DriverImage bgimage={theme?.images?.icons?.noDriver} small={small} />
                </WrapperDriverImage>
                <OptionContent>
                  <DriverNameContainer>
                    <DriverName small={small}>{t('NO_DRIVER', 'No Driver')}</DriverName>
                  </DriverNameContainer>
                </OptionContent>
              </>
            ) : (
              t('SELECT_DRIVER', 'Select driver')
            )}
          </Option>
        ),
        color: 'primary',
        disabled: !isFilterView ? 'disabled' : null
      }
    ]
    if (!isFilterView) {
      _driversOptionList.push({
        value: 'remove',
        content: (
          <Option padding='3px'>{t('REMOVE_ASSIGNED_DRIVER', 'Remove assinged driver')}</Option>
        ),
        disabled: defaultValue === 'default' ? 'disabled' : null
      })
    }
    if (!driversList.loading) {
      const _driversOptionListTemp = driversList.drivers.map((driver, i) => {
        return {
          value: driver.id,
          content: (
            <Option small={small} isPhoneView={isPhoneView} padding={padding}>
              <WrapperDriverImage small={small}>
                {driver.photo ? (
                  <DriverImage bgimage={driver.photo} small={small} />
                ) : (
                  <FaUserAlt />
                )}
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer small={small}>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  <DriverText small={small}>{t('DRIVER', 'Driver')}</DriverText>
                </DriverNameContainer>
                {isPhoneView && driver.cellphone && (
                  <PhoneContainer>
                    <FiPhone />
                    {driver.cellphone}
                  </PhoneContainer>
                )}
              </OptionContent>
            </Option>
          )
        }
      })

      setDriversMultiOptionList(_driversOptionListTemp)

      for (const option of _driversOptionListTemp) {
        _driversOptionList.push(option)
      }
    }
    setDriversOptionList(_driversOptionList)
  }, [driversList, defaultValue])

  const changeDriver = (driverId) => {
    if (isFilterView) {
      if (driverId === 'default') {
        handleChangeDriver(null)
      } else {
        handleChangeDriver(driverId)
      }
      return
    }
    if (driverId === 'default') return
    if (driverId === 'remove') {
      driverId = null
      setIsRemoveAction(true)
    } else {
      setIsRemoveAction(false)
    }
    handleAssignDriver({ orderId: order.id, driverId: driverId })
  }

  const toastNotify = (notifyContent) => {
    const toastConfigure = {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }
    if (notifyContent.type === 'success') {
      toast.info(notifyContent.content, toastConfigure)
    }
    if (notifyContent.type === 'error') {
      toast.error(notifyContent.content, toastConfigure)
    }
    if (notifyContent.type === 'warning') {
      toast.warn(notifyContent.content, toastConfigure)
    }
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

  useEffect(() => {
    setDefaultOption(defaultValue)
  }, [defaultValue])

  const Placeholder = <Option>{t('SELECT_DRIVER', 'Select driver')}</Option>
  const businessesLoading = [{ value: 'default', content: <Option>{t('BUSINESSES_LOADING', 'Businesses loading')}...</Option> }]

  if (isFilterView) {
    return (
      <>
        {!driversList.loading ? (
          <MultiSelect
            defaultValue={singleDriverIds}
            placeholder={Placeholder}
            options={driversMultiOptionList}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
            optionBottomBorder
            onChange={(driver) => handleChangeDriver(driver)}
          />
        ) : (
          <MultiSelect
            defaultValue='default'
            options={businessesLoading}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
            optionBottomBorder
          />
        )}
      </>
    )
  } else {
    return (
      <>
        {!driversList.loading ? (
          <Select
            defaultValue={defaultOption || 'default'}
            options={driversOptionList}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
            optionBottomBorder
            onChange={(driverId) => changeDriver(driverId)}
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
}

export const DriverSelector = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
