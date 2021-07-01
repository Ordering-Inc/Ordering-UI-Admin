import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { BusinessPaymentMethods as BusinessPaymentMethodsController } from './naked'

import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'

import {
  PaymentMethodsContainer,
  PaymethodListWrapper,
  PaymethodOptionContainer,
  PaymethodOption,
  PaymethodName,
  DropDownWrapper
} from './styles'

const BusinessPaymentMethodsUI = (props) => {
  const {
    business,
    paymethodsList,
    handleClickPayment,
    handleDeleteBusinessPaymethodOption
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const ActionIcon = <FiMoreVertical />

  const isCheckEnableSate = (id) => {
    const found = business.paymethods.find(paymethod => paymethod.paymethod_id === id)
    let valid = false
    if (found) {
      valid = found.enabled
    }
    return valid
  }

  const isCheckFoundBusinessPaymethod = (id) => {
    const found = business.paymethods.find(paymethod => paymethod.paymethod_id === id)
    return found
  }

  return (
    <PaymentMethodsContainer>
      <h1>{t('PAYMETHODS', 'Payment methods')}</h1>
      {paymethodsList.loading && (
        [...Array(10).keys()].map(i => (
          <PaymethodOption key={i}>
            <Skeleton width={15} height={15} />
            <PaymethodName>
              <Skeleton width={120} height={24} />
            </PaymethodName>
          </PaymethodOption>
        ))
      )}
      <PaymethodListWrapper>
        {paymethodsList.paymethods.map(paymethod => (
          <PaymethodOptionContainer key={paymethod.id}>
            <PaymethodOption
              onClick={() => handleClickPayment(paymethod.id)}
            >
              {isCheckEnableSate(paymethod.id) ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <PaymethodName>{paymethod?.name}</PaymethodName>
            </PaymethodOption>
            {isCheckFoundBusinessPaymethod(paymethod.id) && (
              <DropDownWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={ActionIcon}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => console.log('edit')}
                  >
                    {t('EDIT', 'Edit')}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleDeleteBusinessPaymethodOption(paymethod.id)}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </DropDownWrapper>
            )}
          </PaymethodOptionContainer>
        ))}
      </PaymethodListWrapper>
    </PaymentMethodsContainer>
  )
}

export const BusinessPaymentMethods = (props) => {
  const businessPaymethodProps = {
    ...props,
    UIComponent: BusinessPaymentMethodsUI
  }
  return <BusinessPaymentMethodsController {...businessPaymethodProps} />
}
