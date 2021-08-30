import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, Checkbox } from '../../styles'
import { useTheme } from 'styled-components'

import {
  Container,
  InputWrapper,
  CheckboxWrapper,
  AdvancedOptionContainer,
  DotLine,
  StepItem
} from './styles'

export const DriversMarkAsBusy = (props) => {
  const {
    curDriversGroup,
    changesState,
    handleChangesState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [isShowAdvancedOption, setIsShowAdvancedOption] = useState(false)

  const handleChangeInput = (e) => {
    const value = e.target.value
    const changeValue = value === '' ? 0 : parseInt(value)
    const regExp = /^[0-9\b]+$/
    if (changeValue === '' || regExp.test(changeValue)) {
      handleChangesState({ [e.target.name]: changeValue })
    }
  }

  return (
    <Container>
      <h1>{t('MARK_DRIVER_BUSY', 'Mark Drivers As Busy')}</h1>
      <InputWrapper>
        <label>{t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers')}</label>
        <Input
          name='autoassign_max_orders'
          value={changesState?.autoassign_max_orders ?? curDriversGroup?.autoassign_max_orders ?? ''}
          onChange={e => handleChangeInput(e)}
        />
      </InputWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={isShowAdvancedOption}
          onChange={e => setIsShowAdvancedOption(e.target.checked)}
        />
        <div>
          <p>{t('ADVANCED_OPTION', 'Advanced Options')}</p>
          <p>{t('LIMITED_MAX_PER_ORDER_AMOUNT', 'Limited maximum per orders amount status')}</p>
        </div>
      </CheckboxWrapper>
      {isShowAdvancedOption && (
        <AdvancedOptionContainer>
          <DotLine />
          <StepItem>
            <div className='number'>1</div>
            <span>{t('ORDER_STATUS_PENDING', 'Pending')}</span>
            <Input
              name='autoassign_max_in_pending'
              value={changesState?.autoassign_max_in_pending ?? curDriversGroup?.autoassign_max_in_pending ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status0} />
          </StepItem>
          <StepItem>
            <div className='number'>2</div>
            <span>{t('ORDER_STATUS_ACCEPTEDBYRESTAURANT', 'Accepted by Business')}</span>
            <Input
              name='autoassign_max_in_accepted_by_business'
              value={changesState?.autoassign_max_in_accepted_by_business ?? curDriversGroup?.autoassign_max_in_accepted_by_business ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status7} />
          </StepItem>
          <StepItem>
            <div className='number'>3</div>
            <span>{t('ORDER_READY', 'Ready for pickup')}</span>
            <Input
              name='autoassign_max_in_ready_for_pickup'
              value={changesState?.autoassign_max_in_ready_for_pickup ?? curDriversGroup?.autoassign_max_in_ready_for_pickup ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status4} />
          </StepItem>
          <StepItem>
            <div className='number'>4</div>
            <span>{t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')}</span>
            <Input
              name='autoassign_max_in_accepted_by_driver'
              value={changesState?.autoassign_max_in_accepted_by_driver ?? curDriversGroup?.autoassign_max_in_accepted_by_driver ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status8} />
          </StepItem>
          <StepItem>
            <div className='number'>5</div>
            <span>{t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')}</span>
            <Input
              name='autoassign_max_in_driver_in_business'
              value={changesState?.autoassign_max_in_driver_in_business ?? curDriversGroup?.autoassign_max_in_driver_in_business ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status3} />
          </StepItem>
          <StepItem>
            <div className='number'>6</div>
            <span>{t('ORDER_PICKUP_COMPLETED_BY_DRIVER', 'Pickup Completed By Driver')}</span>
            <Input
              name='autoassign_max_in_pickup_completed'
              value={changesState?.autoassign_max_in_pickup_completed ?? curDriversGroup?.autoassign_max_in_pickup_completed ?? ''}
              onChange={e => handleChangeInput(e)}
            />
            <img src={theme.images.order.status9} />
          </StepItem>
        </AdvancedOptionContainer>
      )}
    </Container>
  )
}
