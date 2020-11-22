import React, { useEffect } from 'react'
import { CSVLink } from 'react-csv'
import { useLanguage } from 'ordering-components'

import { AdminOrders as OrderListController } from '../AdminOrdersListControl'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'
import { WrapperExportButton } from './styles'

const ExportButtonUI = (props) => {
  const { pendingOrders } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'CUSTOMER ID', key: 'customer.id' },
    { label: 'CUSTOMER NAME', key: 'customer.name' },
    { label: 'CUSTOMER LASTNAME', key: 'customer.lastname' },
    { label: 'CUSTOMER EMAIL', key: 'customer.email' },
    { label: 'CUSTOMER CELLPHONE', key: 'customer.cellphone' },
    { label: 'CUSTOMER PHONE', key: 'customer.phone' },
    { label: 'CUSTOMER ADDRESS', key: 'customer.address' },
    { label: 'CUSTOMER ADDRESS NOTES', key: 'customer.address_notes' },
    { label: 'CUSTOMER ZIPCODE', key: 'customer.zipcode' },
    { label: 'CUSTOMER LATITUDE', key: 'customer.location.lat' },
    { label: 'CUSTOMER LONGITUDE', key: 'customer.location.lng' },
    { label: 'Total', key: 'total' },
    { label: 'DRIVER ID', key: 'driver_id' },
    // { label: 'DRIVER NAME', key: 'driver.name'},
    // { label: 'DRIVER LASTNAME', key: 'driver.lastname'},
    // { label: 'DRIVER CELLPHONE', key: 'driver.cellphone'},
    // { label: 'DRIVER LATITUDE', key: 'driver.location.lat'},
    // { label: 'DRIVER LONGITUDE', key: 'driver.location.lng'},
    { label: 'BUSINESS ID ', key: 'business.id' },
    { label: 'BUSINESS NAME', key: 'business.name' },
    { label: 'BUSINESS EMAIL', key: 'business.email' },
    { label: 'BUSINESS PHONE', key: 'business.phone' },
    { label: 'BUSINESS ADDRESS', key: 'business.address' },
    { label: 'BUSINESS ADDRESS NOTES', key: 'business.address_notes' },
    { label: 'BUSINESS CITY', key: 'business.city.name' },
    { label: 'BUSINESS LATITUDE', key: 'business.location.lat' },
    { label: 'BUSINESS LONGITUDE', key: 'business.location.lng' },
    { label: 'STATE', key: 'status' },
    { label: 'DELIVERY TYPE', key: 'delivery_type' },
    { label: 'PAYMETHOD', key: 'paymethod.name' },
    { label: 'DELIVERY DATE', key: 'delivery_datetime' },
    { label: 'DELIVERY TIME', key: '' },
    { label: 'PRODUCTS', key: '' },
    { label: 'SUBTOTAL', key: 'subtotal' },
    { label: 'TAX RATE (%)', key: '' },
    { label: 'TAX', key: 'tax' },
    { label: 'TAX TYPE', key: 'tax_type' },
    { label: 'DELIVERY FEE', key: 'deliveryFee' },
    { label: 'DRIVER TIP', key: 'driver_tip' },
    { label: 'SERVICE FEE RATE', key: 'service_fee' },
    { label: 'SERVICE FEE', key: 'serviceFee' },
    { label: 'DISCOUNT TYPE', key: '' },
    { label: 'DISCOUNT RATE', key: '' },
    { label: 'DISCOUNT', key: 'discount' },
    { label: 'TOTAL', key: 'total' },
    { label: 'REFUND', key: '' },
    { label: 'REFUND DATA', key: 'refund_data' }
    // { label: 'ACCEPTED BUSINESS AT', key: ''},
    // { label: 'ACCEPTED BUSINESS HOUR', key: ''},
    // { label: 'ACCEPTED DRIVER AT', key: ''},
    // { label: 'ACCEPTED DRIVER HOUR', key: ''},
    // { label: 'ASSIGNED AT', key: ''},
    // { label: 'ASSIGNED HOUR', key: ''},
    // { label: 'READY AT', key: ''},
    // { label: 'READY HOUR', key: ''},
    // { label: 'IN BUSINESS AT', key: ''},
    // { label: 'IN BUSINESS HOUR', key: ''},
    // { label: 'PICKUP AT', key: ''},
    // { label: 'PICKUP HOUR', key: ''},
    // { label: 'DELIVERY AT', key: ''},
    // { label: 'COMPLETED AT', key: ''},
    // { label: 'COMPLETED HOUR', key: ''},
    // { label: 'REJECTED AT', key: ''},
    // { label: 'REJECTED HOUR', key: ''},
    // { label: 'DRIVER REJECTED AT', key: ''},
    // { label: 'DRIVER REJECTED HOUR', key: ''},
    // { label: 'PICKUP FAILED AT', key: ''},
    // { label: 'PICKUP FAILED HOUR', key: ''},
    // { label: 'DELIVERY FAILED AT', key: ''},
    // { label: 'DELIVERY FAILED HOUR', key: ''},
    // { label: 'MESSAGES', key: ''},
    // { label: 'CREATE_FROM', key: ''},
    // { label: 'AUTHOR', key: ''}
  ]

  // useEffect(() => {
  //     const hasMore = !(pagination.totalPages === pagination.currentPage)
  //     if (!hasMore || orderList.loading) return
  //     loadMoreOrders()

  // }, [pagination.currentPage])

  useEffect(() => {
    console.log(pendingOrders)
  }, [pendingOrders])

  const uniqueName = () => {
    const date = new Date()
    return 'orders_' + date.getTime() + '.csv'
  }

  return (
    <WrapperExportButton>
      <CSVLink
        data={pendingOrders.orders}
        headers={headers}
        filename={uniqueName()}
      >
        <Button color='primary' borderRadius='6px' withIcon>
          {width > 600 && t('CSV', 'CSV')}
          <ZoDownload />
        </Button>
      </CSVLink>
    </WrapperExportButton>
  )
}

export const ExportCSV = (props) => {
  const OrderControlProps = {
    UIComponent: ExportButtonUI,
    isSearchByOrderNumber: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }
  return <OrderListController {...OrderControlProps} />
}
