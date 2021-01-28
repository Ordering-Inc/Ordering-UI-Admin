import React from 'react'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import {
  WrapperOrdersListAndDelivery
} from './styles'
import { OrdersListAndDelivery as OrdersListAndDeliveryController } from '../../../src/components/OrdersListAndDelivery'
// import { OverView } from '../../../src/components/OverView'

export const OrdersListAndDelivery = (props) => {
  return (
    <>
      <HelmetTags page='orders-deliveries' />
      <AdminLayout>
        <WrapperOrdersListAndDelivery>
          <OrdersListAndDeliveryController />
          {/* <OverView /> */}
        </WrapperOrdersListAndDelivery>
      </AdminLayout>
    </>
  )
}
