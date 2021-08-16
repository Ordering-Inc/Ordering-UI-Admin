import { useLanguage, useUtils } from 'ordering-components-admin'
import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import {
  PdfContainer,
  PdfInvoice
} from './styles'

export const InvoiceBusinessPdf = (props) => {
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()
  const [exportInvoice, setExportInvoice] = useState(null)

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 25 },
      { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
      { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
      { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Ready for pickup', slug: 'READY_FOR_PICKUP', percentage: 70 },
      { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
      { key: 6, value: 'Reject by driver', slug: 'REJECT_BY_DRIVER', percentage: 0 },
      { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: 'Preorder', slug: 'PREORDER', percentage: 25 },
      { key: 14, value: 'Order not ready', slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: 'Pickup completed by customer', slug: 'PICKUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: 'Canceled by customer', slug: 'CANCELED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: 'Not picked by customer', slug: 'NOT_PICKED_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: 'Driver almost arrived to business', slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 19, value: 'Driver almost arrived to customer', slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', percentage: 90 },
      { key: 20, value: 'Customer almost arrived to business', slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
      { key: 21, value: 'Customer arrived to business', slug: 'CUSTOMER_ARRIVED_TO_BUSINESS', percentage: 60 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  return (
    <PdfContainer>
      <PdfInvoice>
        <Image
          src='https://reactdemo.ordering.co/ac950c6a4d2521f00bfc442ebfa83f77.svg'
          fluid
          height='45px'
          width='150px'
        />
        <span>{t('INVOICE_FOR', 'Invoice for')} <b>{exportInvoice?.business?.name}</b></span>
        <table>
          <thead>
            <tr>
              <th colSpan='5'>{t('ORDERS', 'Orders')}</th>
            </tr>
            <tr>
              <th>Number</th>
              <th>Datetime</th>
              <th>Status</th>
              <th>Subtotal</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              exportInvoice?.orders && exportInvoice?.orders?.map((order, i) => (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{parseDate(order.delivery_datetime)}</td>
                  <td>{getOrderStatus(order.status).value}</td>
                  <td class='number'>{parsePrice(Order.getSubtotal(order))}</td>
                  <td class='number'>{parsePrice(Order.getTotal(order))}</td>
                </tr>
              ))
            }

          </tbody>
          <tfoot>
            <tr>
              <td colspan='4'>translate('SUBTOTAL')</td>
              <td class='number'>parsePrice(export_invoice.orders_subtotal)</td>
            </tr>
            <tr>
              <td colspan='4'>translate('TOTAL')</td>
              <td class='number'>parsePrice(export_invoice.orders_total)</td>
            </tr>
          </tfoot>
        </table>
        <table>
          <thead>
            <tr>
              <th colspan='2'>translate('TOTALS')</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> translate('ORDERS') (translate('SUBTOTAL'))</td>
              <td class='number'>parsePrice(export_invoice.orders_subtotal)</td>
            </tr>
            <tr data-ng-if='export_invoice.inlcude_discounts != 0'>
              <td>translate('DISCOUNTS_BY_PLATFORM')</td>
              <td class='number'>parsePrice(export_invoice.discounts)</td>
            </tr>
            <tr>
              <td> translate('PRODUCTS') (translate('TAX'))</td>
              <td class='number'>parsePrice(export_invoice.tax_products)</td>
            </tr>
            <tr>
              <td>translate('PERCENTAGE_FEE') (export_invoice.percentage_fee%)</td>
              <td class='number'>parsePrice(export_invoice.percentage_fee_total)</td>
            </tr>
            <tr>
              <td>translate('FIXED_FEE')</td>
              <td class='number'>parsePrice(export_invoice.fixed_fee_total)</td>
            </tr>
            <tr data-ng-if='export_invoice.misc_amount != 0'>
              <td>translate('MISC') <small data-ng-if='export_invoice.misc_description'>(export_invoice.misc_description)</small></td>
              <td class='number'>parsePrice(export_invoice.misc_amount)</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>translate('SUBTOTAL')</td>
              <td class='number'>parsePrice(export_invoice.subtotal)</td>
            </tr>
            <tr>
              <td>translate('TAX') (export_invoice.tax%)</td>
              <td class='number'>parsePrice(export_invoice.tax_total)</td>
            </tr>
            <tr>
              <td>translate('TOTAL')</td>
              <td class='number'>parsePrice(export_invoice.total)</td>
            </tr>
          </tfoot>
        </table>
        <p class='notes' ng-bind-html='export_invoice.notes'>
          translate('NOTES'): export_invoice.notes
        </p>
      </PdfInvoice>
    </PdfContainer>
  )
}
