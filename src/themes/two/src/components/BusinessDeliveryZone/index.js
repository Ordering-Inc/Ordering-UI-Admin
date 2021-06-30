import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { BusinessDeliveryZone as BusinessDeliveryZoneController } from './naked'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { BusinessDeliveryZoneSetting } from '../BusinessDeliveryZoneSetting'
import { Alert } from '../Confirm'

import {
  MainContainer,
  ZoneContainer,
  Header,
  DeliveryZonesContainer,
  DeliveryZoneWrapper,
  ZoneName,
  ZoneMin,
  ZonePrice,
  ZoneActions,
  EnableWrapper,
  DropDownWrapper,
  AddDeliveryZoneButton,
  AddButton
} from './styles'

const BusinessDeliveryZoneUI = (props) => {
  const {
    business,
    formState,
    businessDeliveryZonesState,
    handleChangeInput,
    handleChangeActiveState,
    handleDeleteBusinessDeliveryZone,
    setIsExtendExtraOpen,
    errors,
    setErrors,
    cleanErrors,
    handleZoneType,
    handleChangeZoneData,
    isEdit,
    setIsEdit,
    handleUpdateBusinessDeliveryZone
  } = props
  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const theme = useTheme()
  const [openAddDeliveryZone, setOpenAddDeliveryZone] = useState(false)
  const [curZone, setCurZone] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const ActionIcon = <FiMoreVertical />

  const handleOpenSetting = (zone) => {
    if (formState.changes?.name === '' || formState.changes?.minimum === '' || formState.changes?.price === '') {
      setErrors({
        name: formState.changes?.name === '',
        minimum: formState.changes?.minimum === '',
        price: formState.changes?.price === ''
      })
    } else {
      setIsEdit(true)
      setCurZone(zone)
      setIsExtendExtraOpen(true)
    }
  }

  const handleCloseOption = () => {
    setIsEdit(false)
    setIsExtendExtraOpen(false)
  }

  const closeAlert = () => {
    cleanErrors()
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length) {
      const errorContent = []
      if (errors?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (errors?.minimum) errorContent.push(t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.'))
      if (errors?.price) errorContent.push(t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.'))
      if (errors?.data) errorContent.push(t('REQUIRED_POLYGON_CIRCLE', 'Polygon or circle must be drawn.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    }
  }, [errors])

  return (
    <>
      <MainContainer>
        <ZoneContainer>
          <Header>
            <h1>{t('DELIVERY_ZONE', 'Delivery zones')}</h1>
            <BsPlusSquare />
          </Header>
          <DeliveryZonesContainer>
            <DeliveryZoneWrapper>
              <ZoneName>{t('NAME', 'Name')}</ZoneName>
              <ZoneMin>{t('MIN', 'Min')}</ZoneMin>
              <ZonePrice>{t('PRICE', 'Price')}</ZonePrice>
              <ZoneActions>{t('ACTIONS', 'Actions')}</ZoneActions>
            </DeliveryZoneWrapper>
            {businessDeliveryZonesState?.zones?.map(zone => (
              <DeliveryZoneWrapper key={zone.id}>
                <ZoneName>
                  <input
                    name='name'
                    defaultValue={zone?.name ?? ''}
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZoneName>
                <ZoneMin>
                  <input
                    name='minimum'
                    type='number'
                    defaultValue={
                      formState.result?.result?.minimum
                        ? formState.result?.result?.minimum
                        : formState?.changes?.minimum
                          ? parseNumber(formState.changes?.minimum, { separator: '.' })
                          : parseNumber(zone?.minimum, { separator: '.' }) ?? ''
                    }
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZoneMin>
                <ZonePrice>
                  <input
                    name='price'
                    type='number'
                    defaultValue={
                      formState.result?.result?.price
                        ? formState.result?.result?.price
                        : formState.changes?.price
                          ? parseNumber(formState.changes?.price, { separator: '.' })
                          : parseNumber(zone?.price, { separator: '.' }) ?? ''
                    }
                    onChange={(e) => handleChangeInput(e, zone.id)}
                    disabled={isEdit}
                  />
                </ZonePrice>
                <ZoneActions>
                  <EnableWrapper className='business_enable_control'>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={zone?.enabled}
                      onChange={() => handleChangeActiveState(zone.id)}
                    />
                  </EnableWrapper>
                  <DropDownWrapper>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item
                        onClick={() => handleOpenSetting(zone)}
                      >
                        {t('EDIT', 'Edit')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteBusinessDeliveryZone(zone.id)}
                      >
                        {t('DELETE', 'Delete')}
                      </Dropdown.Item>
                    </DropdownButton>
                  </DropDownWrapper>
                </ZoneActions>
              </DeliveryZoneWrapper>
            ))}
          </DeliveryZonesContainer>
          {!openAddDeliveryZone ? (
            <AddDeliveryZoneButton
              onClick={() => setOpenAddDeliveryZone(true)}
            >
              {t('ADD_DELIVERY_ZONE', 'Add delivery zone')}
            </AddDeliveryZoneButton>
          ) : (
            <DeliveryZoneWrapper>
              <ZoneName>
                <input
                  placeholder={t('ZONE_NAME', 'Zone name')}
                />
              </ZoneName>
              <ZoneMin>
                <input
                  placeholder={t('MIN', 'Min')}
                />
              </ZoneMin>
              <ZonePrice>
                <input
                  placeholder={t('PRICE', 'Price')}
                />
              </ZonePrice>
              <ZoneActions>
                <AddButton
                  onClick={() => handleOpenSetting({})}
                >
                  <AiFillPlusCircle /> <span>{t('ADD', 'Add')}</span>
                </AddButton>
              </ZoneActions>
            </DeliveryZoneWrapper>
          )}
        </ZoneContainer>
        {isEdit && (
          <BusinessDeliveryZoneSetting
            open={isEdit}
            onClose={() => handleCloseOption()}
            zone={curZone}
            business={business}
            handleZoneType={handleZoneType}
            handleChangeZoneData={handleChangeZoneData}
            handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
          />
        )}
      </MainContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
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

export const BusinessDeliveryZone = (props) => {
  const businessDeliveryZoneProps = {
    ...props,
    UIComponent: BusinessDeliveryZoneUI
  }
  return <BusinessDeliveryZoneController {...businessDeliveryZoneProps} />
}
