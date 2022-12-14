import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'
import {
  Container,
  ContentWrapper,
  PaymethodItem
} from './styles'

export const PaymentMethods = (props) => {
  const {
    paymethodsList,
    handleChangePaymethodIds,
    paymethodIds
  } = props

  const [, t] = useLanguage()

  const handleChangeIds = (id) => {
    let updateIds = []
    if (paymethodIds.includes(id)) updateIds = paymethodIds.filter(paymethodId => paymethodId !== id)
    else updateIds = [...paymethodIds, id]
    handleChangePaymethodIds(updateIds)
  }

  return (
    <Container>
      <h2>{t('PAYMENT_METHODS', 'Payment methods')}</h2>
      <ContentWrapper>
        {!paymethodsList?.loading && paymethodsList?.paymethods.map((paymethod, idx) => (
          <PaymethodItem key={paymethod?.id} isBorderTop={idx === 0} onClick={() => handleChangeIds(paymethod.id)}>
            {paymethodIds.includes(paymethod?.id) ? <CheckSquareFill className='enabled' /> : <Square />}
            <span>{paymethod?.name}</span>
          </PaymethodItem>
        ))}
      </ContentWrapper>
    </Container>
  )
}
