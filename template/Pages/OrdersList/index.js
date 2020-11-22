import React from 'react'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import {
  OrdersListContainer
} from './styles'
import { OrdersList as OrdersListController } from '../../../src/components/OrdersList'
import { OverView } from '../../../src/components/OverView'

export const OrdersList = (props) => {
  return (
    <>
      <HelmetTags page='orders' />
      <AdminLayout>
        <OrdersListContainer>
          <OrdersListController />
          <OverView />
        </OrdersListContainer>
      </AdminLayout>
    </>
  )
}
