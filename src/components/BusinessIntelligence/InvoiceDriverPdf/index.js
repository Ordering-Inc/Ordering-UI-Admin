import { useLanguage, useUtils } from 'ordering-components-admin'
import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { getOrderStatus } from '../../../utils'
export const InvoiceDriverPdf = (props) => {
  const {
    exportInvoiceList,
    getSubtotal,
    getTotal
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()

  const styles = {
    root: {
      fontFamily: 'Noto Sans Georgian, sans-serif',
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
    },
    imageWrapper: {
      width: '150px',
      marginBottom: '15px'
    }
  }

  const logoImage = theme?.images?.logos?.logoPdf
  const [base64ImageString, setBase64ImageString] = useState(null)

  const getBase64ImageFromUrl = async (imageUrl) => {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.addEventListener('load', function () {
        resolve(reader.result)
      }, false)
      reader.onerror = (error) => {
        return reject(error)
      }
      reader.readAsDataURL(blob)
    })
  }

  useEffect(() => {
    getBase64ImageFromUrl(logoImage).then(base64 => {
      setBase64ImageString(base64)
    })
  }, [])

  return (
    <div style={styles.root}>
      {base64ImageString && (
        <Image
          src={base64ImageString}
          fluid
          loading='lazy'
          style={styles.imageWrapper}
        />
      )}
      <br />
      <span>{t('INVOICE_FOR', 'Invoice for')} <b>{exportInvoiceList?.invoice?.driver?.name}</b></span><br />
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
            <th style={styles.table.thead.th} colSpan='5'>{t('ORDERS', 'Orders')}</th>
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
                <td style={styles.table.tbody.tr.td}>{getOrderStatus(order.status)?.value}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(getSubtotal(order))}</td>
                <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(getTotal(order))}</td>
              </tr>
            ))
          }
        </tbody>
        <tfoot style={styles.table.tfoot}>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td} colSpan='4'>{t('SUBTOTAL', 'Subtotal')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.orders_subtotal)}</td>
          </tr>
          <tr style={styles.table.tfoot.tr}>
            <td style={styles.table.tfoot.tr.td} colSpan='4'>{t('TOTAL', 'Total')}</td>
            <td style={styles.table.tfoot.tr.td}>{parsePrice(exportInvoiceList?.invoice?.orders_total)}</td>
          </tr>
        </tfoot>
      </table>
      <table style={styles.table}>
        <thead>
          <tr style={styles.table.thead.trLast}>
            <th style={styles.table.thead.th} colSpan='2'>{t('TOTALS', 'Totals')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('ORDERS', 'Orders')} ({t('SUBTOTAL', 'Subtotal')})</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.orders_subtotal)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('DISCOUNT', 'Discount')}</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.discounts)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('PERCENTAGE_FEE', 'Percentage Fee')} ({exportInvoiceList?.invoice?.percentage_fee}%)</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.percentage_fee_total)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('FIXED_FEE', 'Fixed Fee')}</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.fixed_fee_total)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('DELIVERY_PRICE', 'Delivery price')} {t('PERCENTAGE', 'Percentage')}</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.percentage_delivery_price_total)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('DRIVER_TIP', 'Driver tip')} {t('PERCENTAGE', 'Percentage')}</td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.percentage_driver_tip_total)}</td>
          </tr>
          <tr>
            <td style={styles.table.tbody.tr.td}>{t('MISC', 'Misc')} {exportInvoiceList?.invoice?.misc_description && (
              <small>({exportInvoiceList?.invoice?.misc_description})</small>
            )}
            </td>
            <td style={styles.table.tbody.tr.tdNumber}>{parsePrice(exportInvoiceList?.invoice?.misc_amount)}</td>
          </tr>
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
