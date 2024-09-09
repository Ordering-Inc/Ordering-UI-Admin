import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Circle, RecordCircleFill } from 'react-bootstrap-icons'
import { DriversGroupOrders } from '../../DriversGroupOrders'
import { DriversGroupAutoassign } from '../../DriversGroupAutoassign'
import { DriversMarkAsBusy } from '../../DriversMarkAsBusy'
import { Checkbox } from '../../../../styles'

import {
  LogisticsContainer,
  OrderStatusWrapper,
  RadioButton,
  SubSectionContainer,
  CheckboxContainer,
  HeaderWrapper
} from './styles'

export const AdvancedLogisticsForm = (props) => {
  const {
    driversGroupState,
    changesState,
    handleChangesState,
    useAdvanced,
    handleLogistic
  } = props

  const [, t] = useLanguage()

  return (
    <LogisticsContainer>
      <HeaderWrapper>
        <h2>{t('ADVANCED_LOGISTICS', 'Advanced logistics')}</h2>
        <CheckboxContainer>
          <Checkbox
            checked={useAdvanced}
            onChange={e => handleLogistic(e.target.checked)}
          />
          <p>{t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')}</p>
        </CheckboxContainer>
      </HeaderWrapper>
      {useAdvanced && (
        <>
          <OrderStatusWrapper
            onClick={() => handleChangesState({ orders_group_start_in_status: 7 })}
          >
            <RadioButton
              active={
                (changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 7) ||
                (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroupState.driversGroup?.orders_group_start_in_status === 7)
              }
            >
              {
                ((changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 7) ||
                  (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroupState.driversGroup?.orders_group_start_in_status === 7)
                )
                  ? (
                    <RecordCircleFill />
                  ) : (
                    <Circle />
                  )
              }
            </RadioButton>
            <span>{t('ACCEPT_BY_BUSINESS', 'Accepted by Business.')}</span>
          </OrderStatusWrapper>
          <OrderStatusWrapper
            onClick={() => handleChangesState({ orders_group_start_in_status: 4 })}
          >
            <RadioButton
              active={
                (changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 4) ||
                (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroupState.driversGroup?.orders_group_start_in_status === 4)
              }
            >
              {
                ((changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 4) ||
                  (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroupState.driversGroup?.orders_group_start_in_status === 4)
                )
                  ? (
                    <RecordCircleFill />
                  ) : (
                    <Circle />
                  )
              }
            </RadioButton>
            <span>{t('PREPARATION_COMPLETED', 'Preparation Completed')}</span>
          </OrderStatusWrapper>
          {(changesState?.type === 0) && (
            <SubSectionContainer>
              <DriversGroupOrders {...props} />
            </SubSectionContainer>
          )}
          <SubSectionContainer>
            <DriversGroupAutoassign {...props} />
          </SubSectionContainer>
          {changesState?.type === 0 && (
            <SubSectionContainer>
              <DriversMarkAsBusy {...props} />
            </SubSectionContainer>
          )}
        </>
      )}
    </LogisticsContainer>
  )
}
