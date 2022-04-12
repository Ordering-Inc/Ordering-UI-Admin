import { useLanguage, useUtils } from 'ordering-components-admin'
import React from 'react'
import { Image } from 'react-bootstrap'

export const InvoiceBusinessPdf = (props) => {
  const {
    exportInvoiceList,
    getSubtotal,
    getTotal
  } = props
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()

  const styles = {
    root: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: '#333'
    },
    table: {
      width: '100%',
      marginTop: '15px',
      marginBottom: '15px',
      borderCollapse: 'collapse',
      thead: {
        trFirst: {
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #222434',
          backgroundColor: '#222434'
        },
        trLast: {
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #393d57',
          backgroundColor: '#393d57'
        },
        th: {
          textAlign: 'center',
          fontSize: '16px'
        }
      },
      tbody: {
        tr: {
          td: {
            border: '1px solid #ccc',
            color: '#333',
            fontSize: '15px',
            padding: '3px 10px'
          },
          tdNumber: {
            border: '1px solid #ccc',
            color: '#333',
            fontSize: '15px',
            padding: '3px 10px',
            textAlign: 'right'
          }
        }
      },
      tfoot: {
        tr: {
          border: '1px solid #ccc',
          backgroundColor: '#ddd',
          td: {
            fontSize: '15px',
            border: '1px solid #ccc',
            textAlign: 'right',
            padding: '3px 10px'
          }
        }
      },
      number: {
        textAlign: 'right'
      }
    },
    notes: {
      padding: '10px',
      whiteSpace: 'normal',
      fontSize: '14px',
      backgroundColor: '#eee'
    }
  }

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 25 },
      { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
      { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
      { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Preparation Completed', slug: 'PREPARATION_COMPLETED', percentage: 70 },
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
      { key: 15, value: 'Pickup completed by customer', slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: 'Canceled by customer', slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: 'Not picked by customer', slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: 'Driver almost arrived to business', slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', percentage: 50 },
      { key: 19, value: 'Driver almost arrived to customer', slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', percentage: 90 },
      { key: 20, value: 'Customer almost arrived to business', slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 50 },
      { key: 21, value: 'Customer arrived to business', slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 60 },
      { key: 22, value: 'Looking for driver', slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 35 },
      { key: 23, value: 'Driver on way', slug: 'ORDER_DRIVER_ON_WAY', percentage: 45 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  return (
    <div style={styles.root}>
      <Image
        src='https://reactdemo.ordering.co/ac950c6a4d2521f00bfc442ebfa83f77.svg'
        fluid
        height='45px'
        width='150px'
      />
      <br />
      <span>{t('INVOICE_FOR', 'Invoice for')} <b>{exportInvoiceList?.invoice?.business?.name}</b></span><br />
      {
        exportInvoiceList?.invoice?.from && exportInvoiceList?.invoice?.to && (
          <>
            <span>{t('FROM', 'From')} <b>{exportInvoiceList?.invoice?.from}</b> {t('TO', 'To')} <b>{exportInvoiceList?.invoice?.to}</b></span><br />
          </>
        )
      }
      <span>{t('AMOUNT_TO_ORDERS', 'Amount to orders')}: {exportInvoiceList?.invoice?.orders.length}</span>
      <table style={styles.table}>
        <thead>
          <tr style={styles.table.thead.trFirst}>
            <th style={styles.table.thead.th} colspan='5'>{t('ORDERS', 'Orders')}</th>
          </tr>
          <tr style={styles.table.thead.trLast}>
            <th style={styles.table.thead.th}>{t('EXPORT_ORDER_NUMBER', 'Order number')}</th>
            <th style={styles.table.thead.th}>{t('EXPORT_DATE', 'Date')}</th>
            <th style={styles.table.thead.th}>{t('CONTROL_PANEL_ORDERS_STATUS_HEADER', 'Status')}</th>
            <th style={styles.table.thead.th}>{t('SUBTOTAL', 'Subtotal')}</th>
            <th style={styles.table.thead.th}>{t('TOTAL', 'Total')}</th>
          </tr>
        </thead>
        <tbody>
          {
            exportInvoiceList?.invoice?.orders && exportInvoiceList?.invoice?.orders?.map((order, i) => (
              <tr key={i}>
                <td style={styles.table.tbody.tr.td}>{order.id}</td>
                <td style={styles.table.tbody.tr.td}>{parseDate(order.delivery_datetime, { utc: false })}</td>
                <td style={styles.table.tbody.tr.td}>{getOrderStatus(order.status).value}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(getSubtotal(order))}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(getTotal(order))}</td>
              </tr>
            ))
          }
        </tbody>
        <tfoot style={styles.table.tfoot}>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td} colspan='4'>{t('SUBTOTAL', 'Subtotal')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.orders_subtotal)}</td>
          </tr>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td} colspan='4'>{t('TOTAL', 'Total')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.orders_total)}</td>
          </tr>
        </tfoot>
      </table>
      <table style={styles.table}>
        <thead>
          <tr style={styles.table.thead.trLast}>
            <th style={styles.table.thead.th} colspan='2'>{t('TOTALS', 'Totals')}</th>
          </tr>
        </thead>
        <tbody>
          {
            exportInvoiceList?.invoice?.type === 'payout' && (
              <tr>
                <td style={styles.table.tbody.tr.td}>{t('ORDERS', 'Orders')} ({t('SUBTOTAL', 'Subtotal')})</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.orders_subtotal)}</td>
              </tr>
            )
          }
          {
            exportInvoiceList?.invoice?.inlcude_discounts && (
              <tr>
                <td style={styles.table.tbody.tr.td}>{t('DISCOUNTS_BY_PLATFORM', 'Discounts by platform')}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.discounts)}</td>
              </tr>
            )
          }
          {
            exportInvoiceList?.invoice?.type === 'payout' && exportInvoiceList?.invoice?.tax_products !== 0 && (
              <tr>
                <td style={styles.table.tbody.tr.td}>{t('PRODUCTS', 'Products')} {t('TAX', 'Tax')}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.tax_products)}</td>
              </tr>
            )
          }
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('PERCENTAGE_FEE', 'Percentage Fee')} ({exportInvoiceList?.invoice?.percentage_fee}%)</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.percentage_fee_total)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('FIXED_FEE', 'Fixed Fee')}</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.fixed_fee_total)}</td>
          </tr>
          {
            exportInvoiceList?.invoice?.misc_amount !== 0 && (
              <tr>
                <td style={styles.table.tbody.tr.td}>{t('MISC', 'Misc')} {exportInvoiceList?.invoice?.misc_description && (
                  <small>({exportInvoiceList?.invoice?.misc_description})</small>
                )}
                </td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.misc_amount)}</td>
              </tr>
            )
          }
        </tbody>
        <tfoot style={styles.table.tfoot}>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td}>{t('SUBTOTAL', 'Subtotal')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.subtotal)}</td>
          </tr>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td}>{t('TAX', 'Tax')} ({exportInvoiceList?.invoice?.tax}%)</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.tax_total)}</td>
          </tr>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td}>{t('TOTAL', 'Total')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.total)}</td>
          </tr>
        </tfoot>
      </table>
      {
        exportInvoiceList?.invoice?.notes && (
          <p style={styles.notes} dangerouslySetInnerHTML={{ __html: exportInvoiceList?.invoice?.notes }} />
        )
      }
    </div>
  )
}
