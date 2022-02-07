import React from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components-admin'
import { verifyDecimals } from '../../../utils'

import {
  OrderBillContainer
} from './styles'

export const OrderBill = (props) => {
  const {
    order
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [{ configs }] = useConfig()

  return (
    <OrderBillContainer>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', 'Subtotal')}</td>
            <td>
              {order.tax_type === 1
                ? parsePrice(((order?.summary?.subtotal || order?.subtotal) + (order?.summary?.tax || order?.tax)) || 0, { currencyPosition: 'left' })
                : parsePrice((order?.summary?.subtotal || order?.subtotal) || 0, { currencyPosition: 'left' })}
            </td>
          </tr>
          {(order?.summary?.discount > 0 || order?.discount > 0) && (
            <tr>
              {order?.offer_type === 1 ? (
                <td>
                  {t('DISCOUNT', 'Discount')}{' '}
                  <span>{`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}</span>
                </td>
              ) : (
                <td>{t('DISCOUNT', 'Discount')}</td>
              )}
              <td>- {parsePrice(order?.summary?.discount || order?.discount, { currencyPosition: 'left' })}</td>
            </tr>
          )}
          {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
            <tr>
              <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
              {order?.tax_type === 1 ? (
                <td>{parsePrice((order?.summary?.subtotal_with_discount + (order?.summary?.tax || order?.tax)) || 0)}</td>
              ) : (
                <td>{parsePrice(order?.summary?.subtotal_with_discount || 0)}</td>
              )}
            </tr>
          )}
          {order?.summary?.tax > 0 && order?.tax_type !== 1 && (
            <tr>
              <td>{t('TAX', 'Tax')} {`(${verifyDecimals(order?.tax, parseNumber)}%)`}</td>
              <td>{parsePrice(order?.summary?.tax, { currencyPosition: 'left' })}</td>
            </tr>
          )}
          {(order?.summary?.delivery_price > 0 || order?.deliveryFee > 0) && (
            <tr>
              <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
              <td>{parsePrice(order?.summary?.delivery_price || order?.deliveryFee, { currencyPosition: 'left' })}</td>
            </tr>
          )}
          {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) && (
            <tr>
              <td>
                {t('DRIVER_TIP', 'Driver tip')}{' '}
                {(order?.summary?.driver_tip > 0 || order?.driver_tip > 0) &&
                  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                  (
                    <span>{`(${verifyDecimals(order?.driver_tip, parseNumber)}%)`}</span>
                  )}
              </td>
              <td>{parsePrice(order?.summary?.driver_tip || order?.totalDriverTip, { currencyPosition: 'left' })}</td>
            </tr>
          )}
          {(order?.summary?.service_fee > 0 || order?.serviceFee > 0) && (
            <tr>
              <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
              <td>{parsePrice(order?.summary?.service_fee || order?.serviceFee, { currencyPosition: 'left' })}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', 'Total')}</td>
            <td>{parsePrice(order?.summary?.total || order?.total, { currencyPosition: 'left' })}</td>
          </tr>
        </tbody>
      </table>
      {order?.comment && (
        <table className='comments'>
          <tbody>
            <tr>
              <td>{t('COMMENT', 'Comment')}</td>
              <td>{order?.comment}</td>
            </tr>
          </tbody>
        </table>
      )}
    </OrderBillContainer>
  )
}
