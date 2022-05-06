import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components-admin'
import { verifyDecimals } from '../../../utils'

import {
  OpenCartBillContainer
} from './styles'

export const OpenCartBill = (props) => {
  const {
    cart
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [{ configs }] = useConfig()

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  }

  const getIncludedTaxes = () => {
    if (cart?.taxes === null) {
      return cart.business.tax_type === 1 ? cart?.tax : 0
    } else {
      return cart?.taxes?.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const getIncludedTaxesDiscounts = () => {
    return cart?.taxes?.filter(tax => tax?.type === 1)?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
  }

  return (
    <OpenCartBillContainer>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', 'Subtotal')}</td>
            <td>
              {parsePrice(cart?.subtotal + getIncludedTaxes())}
            </td>
          </tr>
          {cart?.discount > 0 && cart?.total >= 0 && cart?.offers?.length === 0 && (
            <tr>
              {cart?.discount_type === 1 ? (
                <td>
                  {t('DISCOUNT', 'Discount')}{' '}
                  <span>{`(${verifyDecimals(cart?.discount_rate, parsePrice)}%)`}</span>
                </td>
              ) : (
                <td>{t('DISCOUNT', 'Discount')}</td>
              )}
              <td>- {parsePrice(cart?.discount || 0)}</td>
            </tr>
          )}
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {cart?.subtotal_with_discount > 0 && cart?.discount > 0 && cart?.total >= 0 && (
            <tr>
              <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
              {cart?.business?.tax_type === 1 ? (
                <td>{parsePrice(cart?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0)}</td>
              ) : (
                <td>{parsePrice(cart?.subtotal_with_discount ?? 0)}</td>
              )}
            </tr>
          )}
          {
            cart?.taxes?.length > 0 && cart?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
              <tr key={tax?.id}>
                <td>
                  {tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                </td>
                <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</td>
              </tr>
            ))
          }
          {
            cart?.fees?.length > 0 && cart?.fees?.filter(fee => !(fee.fixed === 0 && fee.percentage === 0)).map(fee => (
              <tr key={fee.id}>
                <td>
                  {fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                  ({parsePrice(fee?.fixed)} + {fee.percentage}%)
                </td>
                <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0)}</td>
              </tr>
            ))
          }
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer?.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {cart?.delivery_price > 0 && (
            <tr>
              <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
              <td>{parsePrice(cart?.delivery_price)}</td>
            </tr>
          )}
          {
            cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
              <tr key={offer.id}>
                <td>
                  {offer.name}
                  {offer?.rate_type === 1 && (
                    <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                  )}
                </td>
                <td>
                  - {parsePrice(offer?.summary?.discount)}
                </td>
              </tr>
            ))
          }
          {cart?.driver_tip > 0 && (
            <tr>
              <td>
                {t('DRIVER_TIP', 'Driver tip')}{' '}
                {cart?.driver_tip_rate > 0 &&
                  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                  (
                    <span>{`(${verifyDecimals(cart?.driver_tip_rate, parseNumber)}%)`}</span>
                  )}
              </td>
              <td>{parsePrice(cart?.driver_tip)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', 'Total')}</td>
            <td>{parsePrice(cart?.total >= 0 ? cart?.total : 0)}</td>
          </tr>
        </tbody>
      </table>
      {cart?.payment_events?.length > 0 && (
        <table className='payments'>
          <thead>
            <tr>
              <th calSpan={2}>{t('PAYMENTS', 'Payments')}</th>
            </tr>
          </thead>
          <tbody>
            {cart?.payment_events?.map((event, i) => (
              <tr key={i}>
                <td>
                  {event?.wallet_event
                    ? walletName[event?.wallet_event?.wallet?.type]?.name
                    : event?.paymethod?.name}
                </td>
                <td>-{parsePrice(event?.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart?.comment && (
        <table className='comments'>
          <tbody>
            <tr>
              <td>{t('COMMENT', 'Comment')}</td>
              <td>{cart?.comment}</td>
            </tr>
          </tbody>
        </table>
      )}
    </OpenCartBillContainer>
  )
}
