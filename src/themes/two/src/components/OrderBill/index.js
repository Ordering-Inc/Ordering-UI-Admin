import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import {
  OrderBillContainer
} from './styles'

export const OrderBill = (props) => {
  const {
    order
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()

  return (
    <OrderBillContainer>
      <table>
        <tbody>
          <tr>
            <td>{t('SUBTOTAL', 'Subtotal')}</td>
            <td>{parsePrice(order?.summary?.subtotal)}</td>
          </tr>
          {order?.summary?.discount > 0 && (
            <tr>
              <td>{t('DISCOUNT', 'Discount')}</td>
              <td>-{parsePrice(order?.summary?.discount)}</td>
            </tr>
          )}
          {order?.summary?.tax > 0 && (
            <tr>
              <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
              <td>{parsePrice(order?.summary?.tax)}</td>
            </tr>
          )}
          {(order?.summary?.delivery_price > 0) && (
            <tr>
              <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
              <td>{parsePrice(order?.summary?.delivery_price)}</td>
            </tr>
          )}
          <tr>
            <td>{t('DRIVER_TIP', 'Driver tip')}</td>
            <td>{parsePrice(order?.summary?.driver_tip)}</td>
          </tr>
          {order?.summary?.service_fee > 0 && (
            <tr>
              <td>{t('SERVICE FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
              <td>{parsePrice(order?.summary?.service_fee)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className='total'>
        <tbody>
          <tr>
            <td>{t('TOTAL', 'Total')}</td>
            <td>{parsePrice(order?.summary?.total)}</td>
          </tr>
        </tbody>
      </table>
    </OrderBillContainer>
  )
}
