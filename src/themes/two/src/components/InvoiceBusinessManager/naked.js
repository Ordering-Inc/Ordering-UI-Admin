import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession, useConfig } from 'ordering-components-admin'

export const InvoiceBusinessManager = (props) => {
  const {
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [{ configs }] = useConfig()

  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], error: null })
  const [payMethodsList, setPayMethodsList] = useState({ loading: false, data: [], error: null })
  const [orderTypes, setOrderTypes] = useState(null)
  const [exportInvoiceList, setExportInvoiceList] = useState({ loading: false, invoice: null, error: null })
  const [businessInvocing, setBusinessInvocing] = useState({
    type: 'charge',
    from: '',
    to: '',
    business: '',
    cancelled: false,
    discounts: false,
    notes: '',
    percentage_fee: 0,
    fixed_fee: 0,
    tax: 0,
    misc_amount: 0,
    misc_description: ''
  })

  const handleChangePayMethods = (payMethods) => {
    setPayMethodsList({ ...payMethodsList, data: payMethods })
  }

  /**
   * Method to get business list
   */
  const getBusiness = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const { content: { error, result, pagination } } = await ordering.businesses().asDashboard().select(propsToFetch).get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result,
          pagination
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  /**
   * Method to get payMethod list from API
   */
  const getPaymentMethod = async () => {
    if (loading) return
    try {
      setPayMethodsList({ ...payMethodsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const functionFetch = `${ordering.root}/paymethods`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        const _data = result.filter(item => item.enabled)
        setPayMethodsList({
          ...payMethodsList,
          loading: false,
          data: _data
        })
      } else {
        setPayMethodsList({
          ...payMethodsList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setPayMethodsList({
        ...payMethodsList,
        loading: false,
        error: err
      })
    }
  }

  /**
   * Method to get order list from API
   */
  const getOrders = async () => {
    try {
      setExportInvoiceList({
        ...exportInvoiceList,
        loading: true
      })
      const where = [
        {
          attribute: 'business_id',
          value: businessInvocing.business
        }
      ]
      if (businessInvocing.from) {
        where.push({
          attribute: 'delivery_datetime',
          value: {
            condition: '>=',
            value: `${businessInvocing.from} 00:00:00`
          }
        })
      }
      if (businessInvocing.to) {
        where.push({
          attribute: 'delivery_datetime',
          value: {
            condition: '<=',
            value: `${businessInvocing.to} 23:59:59`
          }
        })
      }
      const { content: { error, result, pagination } } = await ordering.orders().asDashboard().where(where).get()
      if (!error) {
        const invoice = getExportInvoice(result)
        setExportInvoiceList({
          ...exportInvoiceList,
          loading: false,
          invoice: invoice,
          pagination
        })
      } else {
        setExportInvoiceList({
          ...exportInvoiceList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setExportInvoiceList({
        ...exportInvoiceList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  const getExportInvoice = (result) => {
    const paymethods = []
    for (const paymethod of payMethodsList?.data) {
      if (paymethod.enabled) paymethods.push(paymethod.id)
    }
    const _orderTypes = []
    if (orderTypes) {
      for (const orderType of orderTypes) {
        if (orderType.enabled) _orderTypes.push(orderType.value)
      }
    }
    let from = businessInvocing.from.split('-')
    if (from.length === 1) from = null
    else from = new Date(from[0], from[1] - 1, from[2], 0, 0, 0, 0)
    let to = businessInvocing.to.split('-')
    if (to.length === 1) to = null
    else to = new Date(to[0], to[1] - 1, to[2], 0, 0, 0, 0)
    const orders = result.filter((order) => {
      let valid = true
      let date = order.delivery_datetime.split(' ')
      date = new Date(date[0].split('-')[0], date[0].split('-')[1] - 1, date[0].split('-')[2], 0, 0, 0, 0)
      if (paymethods.indexOf(order.paymethod_id) === -1 ||
        _orderTypes.indexOf(order.delivery_type) === -1 ||
        ([0, 1, 7, 8, 9, 11, 15].indexOf(order.status) === -1 && !businessInvocing.cancelled)) {
        valid = false
      }
      if ((from && from > date) || (to && to < date)) valid = false
      return valid
    })
    const _exportInvoice = {
      from: businessInvocing.from,
      to: businessInvocing.to,
      type: businessInvocing.type,
      orders: orders,
      percentage_fee: businessInvocing.percentage_fee,
      fixed_fee: businessInvocing.fixed_fee,
      tax: businessInvocing.tax,
      misc_amount: (businessInvocing.type !== 'payout' ? 1 : -1) * businessInvocing.misc_amount,
      misc_description: businessInvocing.misc_description,
      inlcude_discounts: businessInvocing.discounts,
      tax_products: businessInvocing.type !== 'payout' ? 0 : orders.reduce(function (previous, current) {
        if (current.tax_type === 1) return previous
        else return previous + getTax(current)
      }, 0),
      discounts: !businessInvocing.discounts ? 0 : orders.reduce(function (previous, current) {
        return previous - getDiscount(current)
      }, 0),
      orders_subtotal: orders.reduce(function (previous, current) {
        return previous + getSubtotal(current)
      }, 0),
      orders_total: orders.reduce(function (previous, current) {
        return previous + getTotal(current)
      }, 0),
      notes: businessInvocing.notes.replace(/\n/g, '<br>')
    }
    _exportInvoice.percentage_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * (_exportInvoice.orders_subtotal + _exportInvoice.discounts) * businessInvocing.percentage_fee / 100
    _exportInvoice.fixed_fee_total = (businessInvocing.type !== 'payout' ? 1 : -1) * orders.length * businessInvocing.fixed_fee
    var subtotal = parseFloat(_exportInvoice.percentage_fee_total) +
      parseFloat(_exportInvoice.fixed_fee_total) +
      parseFloat(_exportInvoice.misc_amount) +
      parseFloat(_exportInvoice.discounts) +
      parseFloat(_exportInvoice.tax_products) +
      (businessInvocing.type !== 'payout' ? 0 : parseFloat(_exportInvoice.orders_subtotal))
    _exportInvoice.subtotal = subtotal
    _exportInvoice.tax_total = (businessInvocing.type !== 'payout' ? 1 : -1) * subtotal * parseFloat(businessInvocing.tax) / 100
    _exportInvoice.total = subtotal + _exportInvoice.tax_total
    businessList.businesses.forEach(function (business) {
      if (business.id === businessInvocing.business) {
        _exportInvoice.business = business
      }
    })
    return _exportInvoice
  }

  /**
   * Method to get sub option total
   */
  const getSuboptionTotal = (option, suboption) => {
    let suboptionQuantity = 1
    let suboptionPrice = suboption.price
    if (option.allow_suboptionQuantity && suboption.quantity) {
      suboptionQuantity = suboption.quantity
    }
    if (option.with_half_option && suboption.position && suboption.position !== 'whole') {
      suboptionPrice = suboption.half_price
    }
    return suboptionPrice * suboptionQuantity
  }

  /**
   * Method to get product total
   */
  const getProductsTotal = (product) => {
    let total = 0
    if (product.options) {
      for (let i = 0; i < product.options.length; i++) {
        const option = product.options[i]
        if (option.suboptions) {
          for (let j = 0; j < option.suboptions.length; j++) {
            const suboption = option.suboptions[j]
            total += getSuboptionTotal(option, suboption)
          }
        }
      }
    }
    return (total + product.price) * product.quantity
  }

  /**
   * Method to get order sub total
   */
  const getSubtotal = (order) => {
    if (!order.summary) {
      let subtotal = 0
      for (let i = 0; i < order.products.length; i++) {
        subtotal += getProductsTotal(order.products[i])
      }
      return roundPrice(subtotal)
    } else {
      let fixOrderSummary = true
      if (configs?.project_fix_order_summary) {
        fixOrderSummary = configs?.project_fix_order_summary?.value === '1'
      }
      if (order.tax_type === 1 && !fixOrderSummary) {
        return order.summary.subtotal + order.summary.tax
      }
      return order.summary.subtotal
    }
  }

  /**
   * Method to get order tax
   */
  const getTax = (order) => {
    if (!order.summary) {
      const tax = (order.tax_type === 2) ? order.tax * (getSubtotal(order) - order.discount) / 100 : 0
      return roundPrice(tax)
    } else {
      return order.summary.tax
    }
  }

  /**
   * Method to get order discount
   */
  const getDiscount = (order) => {
    if (!order.summary) {
      return roundPrice(order.discount)
    } else {
      return order.summary.discount
    }
  }

  /**
   * Method to get converted number
   */
  const roundPrice = (value) => {
    const power = Math.pow(10, configs?.format_number_decimal_length?.value)
    const poweredVal = Math.round(value * power)
    return poweredVal / power
  }

  /**
   * Method to get order total
   */
  const getTotal = (order) => {
    if (!order.summary) {
      const subtotal = getSubtotal(order)
      const tax = getTax(order)
      const serviceFee = getServiceFee(order)
      const totalorder = order.delivery_type === '2' ? subtotal + tax + serviceFee - order.discount : subtotal + tax + order.delivery_zone_price + getDriverTip(order) + serviceFee - order.discount
      return roundPrice(totalorder)
    } else {
      return order.summary.total
    }
  }

  /**
   * Method to get order service fee
   */
  const getServiceFee = (order) => {
    if (!order.summary) {
      const subtotal = (getSubtotal(order) - order.discount) * order.service_fee / 100
      return roundPrice(subtotal)
    } else {
      return order.summary.service_fee
    }
  }

  /**
   * Method to get order driver tip
   */
  const getDriverTip = (order) => {
    if (!order.summary) {
      const tip = (getSubtotal(order) - order.discount) * order.driver_tip / 100
      return roundPrice(tip)
    } else {
      return order.summary.driver_tip
    }
  }

  useEffect(() => {
    getBusiness()
    getPaymentMethod()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          invocing={businessInvocing}
          payMethodsList={payMethodsList}
          orderTypes={orderTypes}
          exportInvoiceList={exportInvoiceList}
          handleChangeOrderTypes={setOrderTypes}
          handleChangeInvocing={setBusinessInvocing}
          handleChangePayMethods={handleChangePayMethods}
          getOrders={getOrders}
          getSubtotal={getSubtotal}
          getTotal={getTotal}
        />
      )}
    </>
  )
}

InvoiceBusinessManager.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

InvoiceBusinessManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
}
