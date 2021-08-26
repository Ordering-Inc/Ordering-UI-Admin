import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DriversGroupAutoassign as DriversGroupAutoassignController } from './naked'
import { DragScroll } from '../DragScroll'
import { useTheme } from 'styled-components'
import { PlusSquare, GeoAlt } from 'react-bootstrap-icons'
import { Checkbox, Input } from '../../styles'

import {
  AutoassignContainer,
  AutoassignItem,
  IconImage,
  CustomItem,
  ForcedAssignSettingWrapper,
  MaxDistanceCustomerContainer,
  RowGroupContainer,
  FieldContainer,
  InputsGroup,
  CheckboxWrapper,
  AreaWrapper,
  LargeArea,
  MediumArea,
  SmallArea
} from './styles'

const DriversGroupAutoassignUI = (props) => {
  const {
    autoAssign,
    autoRejectOrderGroup,
    onSelectAssign,
    curDriversGroup,
    changesState,
    onChangeSave,
    handleChangeInput,
    onChangeAutoRejectOrderGroup
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [curArea, setCurArea] = useState(null)

  return (
    <AutoassignContainer>
      <h1>{t('AUTOASSIGN_SETTINGS', 'Autoassign settings')}</h1>
      {(changesState?.type === 0 || (typeof changesState?.type === 'undefined' && curDriversGroup?.type === 0)) && (
        <>
          <DragScroll>
            <AutoassignItem
              active={autoAssign === 1}
              onClick={() => onSelectAssign(1)}
            >
              <IconImage url={theme.images.icons?.oneByOne} />
              <p>{t('ONE_BY_ONE', 'One by one')}</p>
            </AutoassignItem>
            <AutoassignItem
              active={autoAssign === 2}
              onClick={() => onSelectAssign(2)}
            >
              <IconImage url={theme.images.icons?.sendToAll} />
              <p>{t('SEND_TO_ALL', 'Send to all')}</p>
            </AutoassignItem>
            <AutoassignItem
              active={autoAssign === 3}
              onClick={() => onSelectAssign(3)}
            >
              <IconImage url={theme.images.icons?.nearestAvailable} />
              <p>{t('NEAREST_AVAILABLE', 'Nearest available')}</p>
            </AutoassignItem>
            <AutoassignItem
              active={autoAssign === 4}
              onClick={() => onSelectAssign(4)}
            >
              <IconImage url={theme.images.icons?.batchWise} />
              <p>{t('BATCH_WISE', 'Batch wise')}</p>
            </AutoassignItem>
            <AutoassignItem
              active={autoAssign === 5}
              onClick={() => onSelectAssign(5)}
            >
              <IconImage url={theme.images.icons?.roundRobin} />
              <p>{t('ROUND_ROBIN', 'Round robin')}</p>
            </AutoassignItem>
            <AutoassignItem
              onClick={() => onSelectAssign(6)}
            >
              <CustomItem
                active={autoAssign === 6}
              >
                <PlusSquare />
                <p>{t('CUSTOM', 'Custom')}</p>
              </CustomItem>
            </AutoassignItem>
          </DragScroll>
          <ForcedAssignSettingWrapper>
            <Checkbox
              checked={changesState?.autoassign_forced_assignment ?? curDriversGroup?.autoassign_forced_assignment}
              onChange={e => onChangeSave({ autoassign_forced_assignment: e.target.checked })}
            />
            <p>{t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment')}</p>
          </ForcedAssignSettingWrapper>
        </>
      )}

      <MaxDistanceCustomerContainer>
        <div>
          <p>{t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business')}</p>
          <p>{t('EMPTY_OR_0_TO_DISABLED', 'Empty or 0 to disable')}</p>
        </div>
        <Input
          name='autoassign_customer_max_distance_from_business'
          value={changesState?.autoassign_customer_max_distance_from_business ?? curDriversGroup?.autoassign_customer_max_distance_from_business ?? ''}
          placeholder={`00 ${t('METTERS', 'Meters')}`}
          onChange={e => handleChangeInput(e)}
        />
      </MaxDistanceCustomerContainer>

      <RowGroupContainer>
        <div>
          <FieldContainer>
            <label>{t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers')}</label>
            <Input
              name='autoassign_amount_drivers'
              value={changesState?.autoassign_amount_drivers ?? curDriversGroup?.autoassign_amount_drivers ?? ''}
              onChange={e => handleChangeInput(e)}
              readOnly={(changesState?.type === 0 || (typeof changesState?.type === 'undefined' && curDriversGroup?.type === 0)) && autoAssign <= 3}
            />
          </FieldContainer>
        </div>
        <div>
          {(autoAssign !== 2 && (changesState?.autoassign_amount_drivers < 2 || (typeof changesState?.autoassign_amount_drivers === 'undefined' && curDriversGroup?.autoassign_amount_drivers < 2))) && (
            <CheckboxWrapper>
              <Checkbox
                checked={changesState?.autoassign_autoaccept_by_driver === 1 ?? curDriversGroup?.autoassign_autoaccept_by_driver === 1}
                onChange={e => onChangeSave({ autoassign_autoaccept_by_driver: e.target.checked ? 1 : 0 })}
              />
              <span>{t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')}</span>
            </CheckboxWrapper>
          )}
        </div>
      </RowGroupContainer>

      {((changesState?.autoassign_autoaccept_by_driver === 0 || (typeof changesState?.autoassign_autoaccept_by_driver === 'undefined' && curDriversGroup?.autoassign_autoaccept_by_driver === 0)) ||
      (changesState?.type === 1 || (typeof changesState?.type === 'undefined' && curDriversGroup?.type === 1))) && (
        <FieldContainer>
          <label>{t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')}</label>
          <InputsGroup>
            <Input
              value={autoRejectOrderGroup?.hour ?? ''}
              onChange={e => onChangeAutoRejectOrderGroup(e.target.value, 'hour')}
            />
            <strong>&#8282;</strong>
            <Input
              value={autoRejectOrderGroup?.minute ?? ''}
              onChange={e => onChangeAutoRejectOrderGroup(e.target.value, 'minute')}
              maxlength='2'
            />
            <strong>&#8282;</strong>
            <Input
              value={autoRejectOrderGroup?.second ?? ''}
              onChange={e => onChangeAutoRejectOrderGroup(e.target.value, 'second')}
              maxlength='2'
            />
          </InputsGroup>
        </FieldContainer>
      )}
      {(changesState?.type === 0 || (typeof changesState?.type === 'undefined' && curDriversGroup?.type === 0)) && (
        <RowGroupContainer>
          <div>
            <FieldContainer isBlue={curArea === 1}>
              <label>{t('INITIAL_RADIUS', 'Initial radius in meters')}</label>
              <Input
                name='autoassign_initial_radius'
                value={changesState?.autoassign_initial_radius ?? curDriversGroup?.autoassign_initial_radius ?? ''}
                readOnly={autoAssign === 3}
                onFocus={() => setCurArea(1)}
                onBlur={() => setCurArea(0)}
                onChange={e => handleChangeInput(e)}
              />
            </FieldContainer>
            <FieldContainer isGreen={curArea === 2}>
              <label>{t('INCREMENT_RADIUS', 'Radius increase in meters')}</label>
              <Input
                name='autoassign_increment_radius'
                value={changesState?.autoassign_increment_radius ?? curDriversGroup?.autoassign_increment_radius ?? ''}
                readOnly={autoAssign === 3}
                onFocus={() => setCurArea(2)}
                onBlur={() => setCurArea(0)}
                onChange={e => handleChangeInput(e)}
              />
            </FieldContainer>
            <FieldContainer isPink={curArea === 3}>
              <label>{t('MAX_RADIUS', 'Maximum radius in meters')}</label>
              <Input
                name='autoassign_max_radius'
                value={changesState?.autoassign_max_radius ?? curDriversGroup?.autoassign_max_radius ?? ''}
                onChange={e => handleChangeInput(e)}
                onFocus={() => setCurArea(3)}
                onBlur={() => setCurArea(0)}
              />
            </FieldContainer>
          </div>
          <div>
            <AreaWrapper>
              <LargeArea active={curArea === 3} />
              <MediumArea active={curArea === 2} />
              <SmallArea active={curArea === 1} />
              <GeoAlt />
            </AreaWrapper>
          </div>
        </RowGroupContainer>
      )}
    </AutoassignContainer>
  )
}

export const DriversGroupAutoassign = (props) => {
  const driversGroupAutoassignProps = {
    ...props,
    UIComponent: DriversGroupAutoassignUI
  }
  return <DriversGroupAutoassignController {...driversGroupAutoassignProps} />
}
