import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'

export const InvoiceBusiness = (props) => {
  const {
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()

  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], error: null })
  const [payMethodsList, setPayMethodsList] = useState({ loading: false, data: [], error: null })
  const [orderType, setOrderType] = useState(null)
  const [orderList, setOrderList] = useState({ loading: false, orders: [], error: null })
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
      setOrderList({
        ...orderList,
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
        setOrderList({
          ...orderList,
          loading: false,
          orders: result,
          pagination
        })
      } else {
        setOrderList({
          ...orderList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setOrderList({
        ...orderList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
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
          orderType={orderType}
          handleChangeOrderType={setOrderType}
          handleChangeInvocing={setBusinessInvocing}
          handleChangePayMethods={handleChangePayMethods}
          getOrders={getOrders}
        />
      )}
    </>
  )
}

InvoiceBusiness.propTypes = {
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

InvoiceBusiness.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
}
