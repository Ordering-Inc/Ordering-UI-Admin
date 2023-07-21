import React, { useEffect } from 'react'
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

  useEffect(() => {
    if (!paymethodsList?.loading && paymethodsList?.paymethods?.length > 0) {
      handleChangeIds(paymethodsList?.paymethods[0].id)
    }
  }, [paymethodsList])

  return (
    <Container>
      <h2>{t('PAYMENT_METHODS', 'Payment methods')}<sup>*</sup></h2>
      <ContentWrapper>
        {!paymethodsList?.loading && paymethodsList?.paymethods.map((paymethod, idx) => (
          <PaymethodItem key={paymethod?.id} isBorderTop={idx === 0} onClick={() => handleChangeIds(paymethod.id)}>
            {paymethodIds.includes(paymethod?.id) ? <CheckSquareFill className='enabled' /> : <Square />}
            <span>{t(paymethod?.gateway?.toUpperCase(), paymethod?.name)}</span>
          </PaymethodItem>
        ))}
      </ContentWrapper>
    </Container>
  )
}
